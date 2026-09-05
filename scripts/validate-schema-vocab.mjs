#!/usr/bin/env node
/**
 * validate-schema-vocab.mjs — every @type and property on the site must be a real
 * schema.org term.
 *
 *   node scripts/validate-schema-vocab.mjs [baseUrl] [--quick]
 *
 * WHY THIS IS SEPARATE FROM verify-seo.mjs. An invented term is not a broken
 * page: nothing 500s, nothing looks wrong, and Google silently drops the
 * property or node rather than reporting it. Structural checks cannot see it
 * either — `verify-seo` happily confirmed "exactly one LocalBusiness node, no
 * dangling references" on pages whose org node carried a `branchLocation`
 * property that does not exist, and whose `/seo/*` pages listed 56 `areaServed`
 * entries typed `Neighborhood`, which is also not a schema.org type. Both were
 * live on all 149 pages and both were invisible to every other check in this
 * repo until the vocabulary itself was consulted.
 *
 * It is a separate script, and not folded into verify-seo, for one reason:
 * verify-seo must stay self-contained and fail closed, and this needs a ~10 MB
 * download of the schema.org vocabulary. A core invariant should not depend on a
 * third party being reachable. verify-seo instead hard-bans the two terms found
 * here, which costs nothing; this script is the periodic deeper sweep that finds
 * the next one.
 *
 * Four rules:
 *
 * 1. THE VOCABULARY IS FETCHED, NEVER HARDCODED. A pinned list of "terms we use"
 *    would pass forever while drifting from schema.org, which is exactly the
 *    failure being fixed. 979 types and 1,633 properties as of 2026-09.
 *
 * 2. UNREACHABLE IS A FAILURE, NOT A PASS. If schema.org cannot be read the
 *    script exits non-zero and says so. A validator that silently skips is
 *    indistinguishable from one with nothing to report.
 *
 * 3. IT REPORTS, IT DOES NOT GUESS A REPLACEMENT. `Neighborhood` -> `Place` and
 *    `branchLocation` -> `location` were both judgement calls checked against
 *    schema.org's own pages. Picking a substitute automatically would write a
 *    confident wrong claim into structured data.
 *
 * 4. JSON-LD KEYWORDS ARE NOT PROPERTIES. `@context`, `@type`, `@id`, `@graph`
 *    and `query-input` (a real SearchAction key) are exempt by construction, not
 *    by allowlisting them after the fact.
 */

const BASE = (process.argv.find((a) => a.startsWith("http")) || "https://canadianwebdesigns.ca").replace(/\/$/, "");
const QUICK = process.argv.includes("--quick");
const UA = "Mozilla/5.0 (compatible; cwd-schema-vocab/1.0)";
const VOCAB_URL = "https://schema.org/version/latest/schemaorg-current-https.jsonld";
const JSONLD_KEYS = new Set(["@context", "@type", "@id", "@graph", "@value", "@list", "@language", "query-input"]);

async function get(url, timeoutMs = 90000) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res;
}

async function loadVocabulary() {
  const graph = (await (await get(VOCAB_URL)).json())["@graph"];
  const types = new Set();
  const props = new Set();
  const domains = new Map();   // property -> Set(types it may appear on)
  const parents = new Map();   // type -> Set(direct superclasses)
  const nm = (x) => String((x && typeof x === "object" ? x["@id"] : x) ?? "").split(":").pop();
  for (const node of graph) {
    const t = JSON.stringify(node["@type"] ?? "");
    const name = nm(node["@id"]);
    if (!name) continue;
    // ACCUMULATE, never overwrite. schema.org's graph lists some terms more than
    // once -- Country appears twice, and only one of the two entries carries
    // rdfs:subClassOf. A `.set()` here silently replaced Country's real ancestry
    // with an empty set, so `name` (a Thing property) was reported invalid on
    // Country and this checker produced a false positive on correct markup. That
    // is the worst failure a validator can have: it sends someone to "fix" code
    // that was right.
    if (t.includes("rdfs:Class")) {
      types.add(name);
      const sc = node["rdfs:subClassOf"];
      if (!parents.has(name)) parents.set(name, new Set());
      for (const x of Array.isArray(sc) ? sc : sc ? [sc] : []) parents.get(name).add(nm(x));
    }
    if (node["@type"] === "rdf:Property") {
      props.add(name);
      const di = node["schema:domainIncludes"];
      if (!domains.has(name)) domains.set(name, new Set());
      for (const x of Array.isArray(di) ? di : di ? [di] : []) domains.get(name).add(nm(x));
    }
  }
  // transitive ancestry, so a property allowed on CreativeWork is allowed on BlogPosting
  const ancestors = new Map();
  const anc = (t, seen = new Set()) => {
    for (const p of parents.get(t) ?? []) if (!seen.has(p)) { seen.add(p); anc(p, seen); }
    return seen;
  };
  for (const t of parents.keys()) ancestors.set(t, anc(t));
  return { types, props, domains, ancestors };
}

function jsonLdNodes(html) {
  const out = [];
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    let parsed;
    try { parsed = JSON.parse(m[1].trim()); } catch { continue; }
    for (const item of Array.isArray(parsed) ? parsed : [parsed]) {
      if (item && typeof item === "object") out.push(item);
    }
  }
  return out;
}

(async () => {
  let vocab;
  try {
    vocab = await loadVocabulary();
  } catch (e) {                                                    // rule 2
    console.error(`FAILED — could not read the schema.org vocabulary (${e.message}).`);
    console.error("This check cannot run without it, and a skipped check is not a pass.");
    process.exit(1);
  }
  console.log(`schema.org vocabulary: ${vocab.types.size} types, ${vocab.props.size} properties`);

  let urls;
  try {
    const xml = await (await get(`${BASE}/sitemap.xml`, 45000)).text();
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace("https://canadianwebdesigns.ca", BASE));
  } catch (e) {
    console.error(`FAILED — could not read ${BASE}/sitemap.xml (${e.message})`);
    process.exit(1);
  }
  if (QUICK) urls = urls.slice(0, 12);
  console.log(`pages: ${urls.length}\n`);

  const badTypes = new Map();
  const badProps = new Map();
  const badDomain = new Map();   // a real property on a type that does not accept it
  const badValue = new Map();    // a real property with an unusable value

  // Google resolves none of these relative: an Article `image` that is a bare path
  // is simply not read, and `image` is REQUIRED for an Article rich result.
  const URL_PROPS = new Set(["url", "image", "logo", "sameAs", "contentUrl", "hasMap", "mainEntityOfPage"]);
  const DATE_PROPS = new Set(["datePublished", "dateModified", "startDate", "endDate", "foundingDate", "validFrom", "uploadDate"]);
  const DAYS = new Set(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    .flatMap((d) => [d, `https://schema.org/${d}`]));

  const allowedOn = (prop, ts) => {
    const allowed = vocab.domains.get(prop);
    if (!allowed || allowed.size === 0) return true;   // unknown property is the vocabulary check's job
    return ts.some((t) => allowed.has(t) || [...(vocab.ancestors.get(t) ?? [])].some((a) => allowed.has(a)));
  };
  const bump = (map, key, where) => {
    const e = map.get(key) || { n: 0, where: new Set() };
    e.n++; if (e.where.size < 3) e.where.add(where);
    map.set(key, e);
  };

  const walk = (node, page, path) => {
    const ts = node["@type"];
    for (const t of Array.isArray(ts) ? ts : [ts]) {
      if (typeof t === "string" && !vocab.types.has(t)) bump(badTypes, `${t} (at ${path})`, page);
    }
    const tsList = (Array.isArray(ts) ? ts : [ts]).filter((x) => typeof x === "string");
    for (const [k, v] of Object.entries(node)) {
      if (JSONLD_KEYS.has(k)) continue;                            // rule 4
      if (!vocab.props.has(k)) bump(badProps, `${k} (on ${JSON.stringify(ts)} at ${path})`, page);
      else if (tsList.length && !allowedOn(k, tsList)) {
        bump(badDomain, `${k} on ${tsList.join("+")} (at ${path})`, page);
      }
      for (const x of Array.isArray(v) ? v : [v]) {
        if (typeof x !== "string") continue;
        if (URL_PROPS.has(k) && !/^https?:\/\//.test(x)) bump(badValue, `${k} is not absolute: "${x.slice(0, 60)}"`, page);
        if (DATE_PROPS.has(k) && !/^\d{4}(-\d{2}(-\d{2}([T ].*)?)?)?$/.test(x)) bump(badValue, `${k} is not an ISO date: "${x.slice(0, 40)}"`, page);
        if (k === "dayOfWeek" && !DAYS.has(x)) bump(badValue, `invalid dayOfWeek: "${x}"`, page);
        if (k === "availability" && !x.startsWith("https://schema.org/")) bump(badValue, `availability is not a schema.org enum: "${x.slice(0, 50)}"`, page);
      }
    }
    if (node.ratingValue !== undefined) {
      const rv = Number(node.ratingValue), best = Number(node.bestRating ?? 5), worst = Number(node.worstRating ?? 1);
      if (!Number.isFinite(rv)) bump(badValue, `ratingValue is not numeric: ${node.ratingValue}`, page);
      else if (rv < worst || rv > best) bump(badValue, `ratingValue ${rv} outside [${worst}, ${best}]`, page);
    }
    {
      for (const [k, v] of Object.entries(node)) {
        if (JSONLD_KEYS.has(k)) continue;
        for (const x of Array.isArray(v) ? v : [v]) {
          if (x && typeof x === "object") walk(x, page, `${path}.${k}`);
        }
      }
    }
  };

  let fetched = 0;
  const BATCH = 10;
  for (let i = 0; i < urls.length; i += BATCH) {
    await Promise.all(urls.slice(i, i + BATCH).map(async (u) => {
      let html;
      try { html = await (await get(u, 40000)).text(); }
      catch { return; }
      fetched++;
      for (const n of jsonLdNodes(html)) walk(n, u.replace(BASE, "") || "/", "root");
    }));
    process.stdout.write(".");
  }
  process.stdout.write("\n");

  if (fetched === 0) {                                             // rule 2
    console.error("FAILED — no page could be fetched.");
    process.exit(1);
  }

  const report = (title, map) => {
    console.log(`\n=== ${title} ===`);
    if (map.size === 0) { console.log("  none"); return; }
    for (const [k, e] of [...map].sort((a, b) => b[1].n - a[1].n)) {
      console.log(`  ${String(e.n).padStart(5)}  ${k}`);
      console.log(`         e.g. ${[...e.where].join(", ")}`);
    }
  };
  report("@type values NOT in schema.org", badTypes);
  report("property names NOT in schema.org (Google silently ignores these)", badProps);
  report("real properties on a TYPE that does not accept them (also silently ignored)", badDomain);
  report("values Google cannot use (relative URLs, bad dates, bad enums, out-of-range ratings)", badValue);

  const total = badTypes.size + badProps.size + badDomain.size + badValue.size;
  if (total) {
    // rule 3 — name the problem, do not invent the replacement.
    console.error(`\nFAILED — ${total} invented term(s) across ${fetched} pages.`);
    console.error("Look each one up on schema.org and choose the real term deliberately;");
    console.error("an automatic substitution would write a confident wrong claim into the graph.");
    process.exit(1);
  }
  console.log(`\nPASS — ${fetched} pages, every @type and property is a real schema.org term.`);
})().catch((e) => { console.error("validate-schema-vocab crashed:", e); process.exit(1); });
