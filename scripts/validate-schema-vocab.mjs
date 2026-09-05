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
  for (const node of graph) {
    const t = JSON.stringify(node["@type"] ?? "");
    const name = String(node["@id"] ?? "").split(":").pop();
    if (!name) continue;
    if (t.includes("rdfs:Class")) types.add(name);
    if (node["@type"] === "rdf:Property") props.add(name);
  }
  return { types, props };
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
    for (const [k, v] of Object.entries(node)) {
      if (JSONLD_KEYS.has(k)) continue;                            // rule 4
      if (!vocab.props.has(k)) bump(badProps, `${k} (on ${JSON.stringify(ts)} at ${path})`, page);
      for (const x of Array.isArray(v) ? v : [v]) {
        if (x && typeof x === "object") walk(x, page, `${path}.${k}`);
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

  const total = badTypes.size + badProps.size;
  if (total) {
    // rule 3 — name the problem, do not invent the replacement.
    console.error(`\nFAILED — ${total} invented term(s) across ${fetched} pages.`);
    console.error("Look each one up on schema.org and choose the real term deliberately;");
    console.error("an automatic substitution would write a confident wrong claim into the graph.");
    process.exit(1);
  }
  console.log(`\nPASS — ${fetched} pages, every @type and property is a real schema.org term.`);
})().catch((e) => { console.error("validate-schema-vocab crashed:", e); process.exit(1); });
