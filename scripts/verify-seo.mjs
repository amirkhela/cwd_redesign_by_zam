#!/usr/bin/env node
/**
 * verify-seo.mjs — the regression lock for this site's entity graph and AI discoverability.
 *
 *   node scripts/verify-seo.mjs                          # against https://canadianwebdesigns.ca
 *   node scripts/verify-seo.mjs http://127.0.0.1:3000    # against a local `next start`
 *   node scripts/verify-seo.mjs --quick                  # 8 pages instead of 30
 *
 * Exits 0 when every check passes, 1 otherwise, and names the offending page.
 *
 * WHY THIS EXISTS. Six separate schema defects were fixed on this site in
 * September 2026 and every one of them was invisible from the source: a second
 * LocalBusiness on 41 pages, four dead `sameAs` anchors, the brand name spelled
 * four ways, the aggregateRating emitted up to three times per page, eight
 * `provider` stubs that referenced nothing, and a Google Business Profile URL
 * built from the wrong id. None of that shows up in a build, a type check or a
 * lint pass — `next build` was green through all of it. The only thing that
 * catches this class is parsing the HTML that actually ships.
 *
 * FIVE RULES, none of which may be weakened:
 *
 * 1. IT PARSES SERVED HTML, NEVER THE SOURCE. When the LocalBusiness fix was
 *    written, a source-level check would have passed: the two dynamic routes were
 *    correct. Nine hand-written city pages sit outside those routes and were
 *    still emitting the old node. Only fetching /seo/brampton found it.
 *
 * 2. EVERY EXTERNAL URL IS FETCHED, NOT PATTERN-MATCHED. The four dead `sameAs`
 *    anchors were all well-formed URLs. `facebook.com/canadianwebdesigns` looks
 *    exactly like a real profile and answers 400. A regex cannot tell them apart;
 *    only a request can.
 *
 * 3. IT ASSERTS COUNTS, NOT PRESENCE. "Has LocalBusiness schema" was true
 *    throughout the bug — there were two of them. "Has an aggregateRating" was
 *    true when three nodes carried one. The interesting number is never 0-or-1.
 *
 * 4. A CHECK THAT CANNOT RUN IS A FAILURE, NOT A PASS. An unreachable page, an
 *    unparseable JSON-LD block or a network error exits non-zero. A verifier that
 *    silently skips is indistinguishable from one with nothing to catch.
 *
 * 5. IT ASSERTS ONLY WHAT WAS DELIBERATELY DECIDED. It does NOT check the
 *    founding year, the rating value, the review count or title length — all four
 *    are open questions for the business, and encoding today's answer here would
 *    turn an undecided question into a rule nobody agreed to.
 */

const BASE = (process.argv.find((a) => a.startsWith("http")) || "https://canadianwebdesigns.ca").replace(/\/$/, "");
const QUICK = process.argv.includes("--quick");

const ORG_ID = "https://canadianwebdesigns.ca/#organization";
const BRAND = "Canadian Web Designs";

// Brand-name variants that must never come back in a title tag. The real name is
// BRAND; these three were live on 23 of 63 branded titles until 2026-09-05.
const BRAND_VARIANTS = ["Canada Website Design", "Canada Web Designs", "Canadian Website Design"];

// Trailing title segments that are deliberately a tagline rather than the brand.
const ALLOWED_TAGLINES = [
  "Custom WordPress Experts", "Shopify Experts & Developers", "Wix Studio Experts & Redesigns",
  "Local SEO Experts in 21 Cities", "Free Web Design Quote in Canada", "Web Design & SEO Jobs in Canada",
  "Bilingual EN/FR Sites That Rank", "KW Tech Experts", "Sites That Rank", "South Delta Sites That Rank",
  "Custom Sites That Rank",
];

// The AI agents that must stay explicitly allowed. These are the RETRIEVAL and
// SEARCH-INDEX crawlers — the ones that put this site into an AI answer with a
// citation. The bulk TRAINING crawlers (GPTBot, CCBot, anthropic-ai, ClaudeBot)
// are deliberately NOT checked: whether to block those is a business decision
// about training data, and this file must not quietly turn it into a rule.
const AI_AGENTS_ALLOWED = ["ChatGPT-User", "OAI-SearchBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Perplexity-User", "Google-Extended"];

const PAGES_QUICK = ["/", "/who-we-are", "/contact", "/locations/toronto", "/locations/brampton", "/seo/toronto", "/seo/brampton", "/services/seo"];
const PAGES_FULL = [
  "/", "/who-we-are", "/our-story", "/portfolio", "/contact", "/careers", "/testimonials", "/faq",
  "/maintenance", "/web-design-company", "/web-design-agency", "/blog",
  "/locations/toronto", "/locations/brampton", "/locations/north-york", "/locations/surrey",
  "/locations/victoria", "/locations/calgary", "/locations/vancouver", "/locations/hamilton",
  "/seo/toronto", "/seo/brampton", "/seo/burnaby", "/seo/mississauga", "/seo/north-york",
  "/seo/surrey", "/seo/victoria", "/seo/ottawa",
  "/services/seo", "/services/google-ads-management", "/services/wordpress-website-design",
  "/services/wix-website-design", "/services/shopify-website-design", "/services/web-design-development",
  // blog pages carry their own CollectionPage / BlogPosting schema and were the
  // one family the 34-page list never covered -- which is exactly where four
  // multi-line publisher stubs survived the first sweep.
  "/blog/seo", "/blog/web-design", "/blog/digital-marketing",
  // a real blog POST: the one page family that builds its breadcrumb inline and
  // so never received a WebPage node from the component. 74 of 149 URLs.
  "/blog/affordable-seo-services-for-small-businesses",
];

const UA = "Mozilla/5.0 (compatible; cwd-verify-seo/1.0)";

// Vercel preview deployments sit behind SSO (ssoProtection is
// "all_except_custom_domains", so production is public and previews are not).
// Setting VERCEL_AUTOMATION_BYPASS_SECRET lets this run as a PRE-deploy gate on
// the preview URL rather than only as a post-deploy check on production —
// catching a schema regression before it is promoted, not after.
//   $env:VERCEL_AUTOMATION_BYPASS_SECRET="<secret>"
//   node scripts/verify-seo.mjs https://cwd-<hash>-amirkhelas-projects.vercel.app
// Generate/rotate the secret in Vercel → Project → Settings → Deployment Protection.
const BYPASS = process.env.VERCEL_AUTOMATION_BYPASS_SECRET || "";
const failures = [];
const fail = (where, msg) => failures.push(`${where}: ${msg}`);

async function get(url, timeoutMs = 30000) {
  // The bypass header is only ever sent to the site under test, never to the
  // third-party sameAs URLs — leaking a deployment secret to instagram.com or
  // maps.google.com would be a real disclosure, and it would do nothing useful.
  const headers = { "User-Agent": UA };
  if (BYPASS && url.startsWith(BASE)) headers["x-vercel-protection-bypass"] = BYPASS;
  const res = await fetch(url, { headers, redirect: "follow", signal: AbortSignal.timeout(timeoutMs) });
  return { status: res.status, body: await res.text() };
}

function jsonLdNodes(html, where) {
  const out = [];
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    let parsed;
    try { parsed = JSON.parse(m[1].trim()); }
    catch { fail(where, "a JSON-LD block does not parse"); continue; }   // rule 4
    for (const item of Array.isArray(parsed) ? parsed : [parsed]) {
      if (item && typeof item === "object") {
        const graph = item["@graph"];
        if (Array.isArray(graph)) out.push(...graph.filter((g) => g && typeof g === "object"));
        else out.push(item);
      }
    }
  }
  return out;
}

async function checkPage(path) {
  const where = path;
  let r;
  try { r = await get(BASE + path); }
  catch (e) { return fail(where, `unreachable — ${e.message}`); }        // rule 4
  if (r.status !== 200) return fail(where, `HTTP ${r.status}`);
  const html = r.body;
  const nodes = jsonLdNodes(html, where);
  if (nodes.length === 0) return fail(where, "no JSON-LD at all");

  // --- one company, one entity (rule 3: count, do not merely detect) ---
  const localBusiness = nodes.filter((n) => JSON.stringify(n["@type"] ?? "").includes("LocalBusiness"));
  if (localBusiness.length !== 1) fail(where, `${localBusiness.length} LocalBusiness nodes, want exactly 1`);

  const rated = nodes.filter((n) => JSON.stringify(n).includes('"aggregateRating"'));
  if (rated.length !== 1) fail(where, `${rated.length} nodes carry aggregateRating, want exactly 1`);

  const ids = nodes.map((n) => n["@id"]).filter(Boolean);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) fail(where, `duplicate @id on one page: ${[...new Set(dupes)].join(", ")}`);

  // --- entity references resolve, and are references rather than stubs ---
  // BOTH provider and publisher. The eight `provider` stubs were fixed first and
  // the WebSite node's `publisher` survived another day purely because this loop
  // only knew one of the two spellings. Any new pointer key belongs in this list.
  for (const n of nodes) {
    for (const key of ["provider", "publisher", "isPartOf", "about", "parentOrganization", "seller", "mainEntityOfPage"]) {
      const ref = n[key];
      if (!ref || typeof ref !== "object") continue;
      if (!ref["@id"]) {
        fail(where, `${key} is an inline stub (${JSON.stringify(ref).slice(0, 80)}) - must be an @id reference`);
      } else if (!ids.includes(ref["@id"])) {
        fail(where, `${key} points at ${ref["@id"]}, which is not declared on this page`);
      }
    }
  }

  // --- the page says what it is, and which entity it is about ---
  // Without this a crawler sees a company, a website and a breadcrumb trail with
  // nothing joining any of them to the page it is actually reading.
  const webPages = nodes.filter((n) => ["WebPage","AboutPage","ContactPage","CollectionPage","ProfilePage"].includes(String(n["@type"])));
  if (webPages.length === 0) {
    fail(where, "no WebPage node - the page does not declare what it is or which entity it is about");
  } else if (webPages.length > 1) {
    fail(where, `${webPages.length} WebPage nodes, want exactly 1`);
  } else {
    const wp = webPages[0];
    if (!String(wp["@id"] || "").endsWith("#webpage")) {
      fail(where, `WebPage @id is "${wp["@id"]}" - must carry a #webpage fragment so it cannot collide with the canonical or a Service @id`);
    }
    if (!wp.about || wp.about["@id"] !== ORG_ID) fail(where, `WebPage.about must reference ${ORG_ID}`);
    if (!wp.isPartOf || !String((wp.isPartOf || {})["@id"] || "").endsWith("/#website")) fail(where, "WebPage.isPartOf must reference the WebSite node");
  }

  // --- the org node itself ---
  const org = nodes.find((n) => n["@id"] === ORG_ID);
  if (localBusiness.length === 1) {
    if (!org) fail(where, `no node carries the canonical @id ${ORG_ID}`);
    else if (org.name !== BRAND) fail(where, `org name is "${org.name}", want "${BRAND}"`);
    if (org && !String(org["@type"]).includes("Organization")) fail(where, `org @type is ${JSON.stringify(org["@type"])} - must include "Organization"`);
  }

  // --- title: the brand is spelled one way ---
  const t = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1]
    .replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/&quot;/g, '"').trim();
  if (!t) fail(where, "no <title>");
  const tail = t.includes("|") ? t.split("|").pop().trim() : "";
  if (tail && tail !== BRAND && !ALLOWED_TAGLINES.includes(tail)) {
    if (BRAND_VARIANTS.some((v) => tail === v)) fail(where, `title brand suffix is "${tail}", want "${BRAND}"`);
  }
  return org;
}

async function checkSiteWide() {
  // robots.txt — the retrieval/search agents stay explicitly allowed
  let robots;
  try { robots = await get(`${BASE}/robots.txt`); }
  catch (e) { return fail("/robots.txt", `unreachable — ${e.message}`); }
  if (robots.status !== 200) fail("/robots.txt", `HTTP ${robots.status}`);
  else {
    for (const agent of AI_AGENTS_ALLOWED) {
      const re = new RegExp(`User-Agent:\\s*${agent}\\s*\\n\\s*Allow:\\s*/`, "i");
      if (!re.test(robots.body)) fail("/robots.txt", `${agent} is no longer explicitly allowed`);
    }
    if (!/Sitemap:\s*https?:\/\/\S+sitemap\.xml/i.test(robots.body)) fail("/robots.txt", "no Sitemap line");
  }

  // llms.txt — present, plain text, and describing this business
  let llms;
  try { llms = await get(`${BASE}/llms.txt`); }
  catch (e) { return fail("/llms.txt", `unreachable — ${e.message}`); }
  if (llms.status !== 200) fail("/llms.txt", `HTTP ${llms.status} — the AI site map is missing`);
  else {
    if (/<!doctype|<html/i.test(llms.body)) fail("/llms.txt", "served HTML, not text/plain (route missing → 404 page)");
    if (!llms.body.startsWith(`# ${BRAND}`)) fail("/llms.txt", `does not open with "# ${BRAND}"`);
    for (const must of ["## Services", "## Where we work"]) {
      if (!llms.body.includes(must)) fail("/llms.txt", `missing section "${must}"`);
    }
    // rule 5's neighbour: llms.txt must not invent a claim the site does not make
    if (/\b\d\.\d\s*star|\breview/i.test(llms.body)) fail("/llms.txt", "carries a rating/review claim — it must state no claim the pages do not");
  }
}

async function checkSameAs(org) {
  if (!org) return fail("sameAs", "no org node was found to read sameAs from");
  const list = org.sameAs || [];
  if (!list.length) return fail("sameAs", "org node carries no sameAs anchors");
  // rule 2: fetch every one. A dead anchor is a failed entity reconciliation.
  for (const url of list) {
    let status;
    try { status = (await get(url, 25000)).status; }
    catch (e) { fail("sameAs", `${url} — request failed (${e.message})`); continue; }
    if (status >= 400) fail("sameAs", `${url} answers HTTP ${status} — a dead entity anchor`);
  }
  return list;
}

(async () => {
  const pages = QUICK ? PAGES_QUICK : PAGES_FULL;
  console.log(`verify-seo: ${BASE} — ${pages.length} pages\n`);

  let org = null;
  for (const p of pages) {
    const o = await checkPage(p);
    if (o && !org) org = o;
    process.stdout.write(".");
  }
  process.stdout.write("\n");

  await checkSiteWide();
  const anchors = await checkSameAs(org);

  // checkSameAs returns undefined on its failure paths (fail() returns undefined),
  // which is exactly what happens against a deploy that predates the canonical
  // @id. Guard on iterability, not truthiness: crashing here would exit non-zero
  // for the wrong reason and bury the real finding under a stack trace.
  if (Array.isArray(anchors) && anchors.length) {
    console.log(`\nsameAs anchors checked (${anchors.length}):`);
    for (const a of anchors) console.log(`   ${a}`);
  }

  if (failures.length) {
    console.error(`\nFAILED — ${failures.length} problem(s):\n`);
    for (const f of failures) console.error(`  ✗ ${f}`);
    process.exit(1);
  }
  console.log(`\nPASS — ${pages.length} pages, one entity each, every sameAs anchor live.`);
})().catch((e) => { console.error("verify-seo crashed:", e); process.exit(1); });
