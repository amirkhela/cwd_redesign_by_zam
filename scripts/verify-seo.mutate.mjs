#!/usr/bin/env node
/**
 * Mutation test for scripts/verify-seo.mjs.
 *
 *   node scripts/verify-seo.mutate.mjs      -> exits 0 when all 14 cases behave
 *
 * Serves deliberately broken HTML on a throwaway port and asserts the verifier
 * goes RED for each injected defect, and stays GREEN on the baseline. A check
 * nobody has attacked is a check nobody has tested: a verifier can pass forever
 * because its regex never matched anything, and it looks identical to one that
 * is working.
 *
 * Every mutation here is a defect that was ACTUALLY LIVE on canadianwebdesigns.ca
 * in September 2026, plus the fail-closed cases from rule 4 (unparseable JSON-LD,
 * a non-200 page, an llms.txt that 404s into the HTML error page).
 *
 * Result on 2026-09-05: 14/14.
 */
import http from "node:http";
import { spawn } from "node:child_process";

const ORG = "https://canadianwebdesigns.ca/#organization";
const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const org = (over = {}) => ({ "@context":"https://schema.org","@type":["Organization","LocalBusiness","ProfessionalService"],
  "@id":ORG, name:"Canadian Web Designs", aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"200"},
  sameAs:["https://instagram.com/canadianwebdesigns"], ...over });
const svc = (over = {}) => ({ "@context":"https://schema.org","@type":"Service",
  "@id":"https://canadianwebdesigns.ca/locations/x#service", name:"Web Design", provider:{"@id":ORG}, ...over });
const SITE = "https://canadianwebdesigns.ca/#website";
const site = () => ({ "@context":"https://schema.org","@type":"WebSite","@id":SITE,
  name:"Canadian Web Designs", publisher:{"@id":ORG} });
const wp = (over = {}) => ({ "@context":"https://schema.org","@type":"WebPage",
  "@id":"https://canadianwebdesigns.ca/x#webpage", url:"https://canadianwebdesigns.ca/x",
  name:"X", isPartOf:{"@id":SITE}, about:{"@id":ORG}, inLanguage:"en-CA", ...over });

const page = (nodes, title="Web Design | Canadian Web Designs") =>
  `<!doctype html><html lang="en-CA"><head><title>${title}</title>${nodes.map(ld).join("")}</head><body>ok</body></html>`;

const GOOD_ROBOTS = ["ChatGPT-User","OAI-SearchBot","Claude-User","Claude-SearchBot","PerplexityBot","Perplexity-User","Google-Extended"]
  .map(a=>`User-Agent: ${a}\nAllow: /\n`).join("\n") + "\nSitemap: https://canadianwebdesigns.ca/sitemap.xml\n";
const GOOD_LLMS = "# Canadian Web Designs\n\n> agency\n\n## Services\n- a\n\n## Where we work\n- b\n";
const GOOD_FULL = "# Canadian Web Designs - full content index\n\nArticles: 74\n\n## Guides\n\n### Web Design\n- [x](https://canadianwebdesigns.ca/blog/x) (2026-01-01)\n";

const MUTATIONS = {
  baseline:        {},
  two_localbusiness: { extraNode: org({ "@id":"https://canadianwebdesigns.ca/locations/x" }) },
  two_ratings:     { extraNode: svc({ "@id":"x#s2", aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9"} }) },
  provider_stub:   { svcOver: { provider:{ "@type":"Organization", name:"Canadian Web Designs" } } },
  orphan_provider: { svcOver: { provider:{ "@id":"https://canadianwebdesigns.ca/#nope" } } },
  brand_variant:   { title: "Web Design | Canada Web Designs" },
  dead_sameas:     { orgOver: { sameAs:["https://youtube.com/canadianwebdesigns"] } },
  no_org_id:       { orgOver: { "@id": "https://canadianwebdesigns.ca" } },
  robots_missing_searchbot: { robots: GOOD_ROBOTS.replace(/User-Agent: Claude-SearchBot\nAllow: \/\n\n/, "") },
  llms_404:        { llms404: true },
  llms_is_html:    { llms: "<!doctype html><html><body>404</body></html>" },
  llms_claims_rating: { llms: GOOD_LLMS + "\nRated 4.9 stars by 200 reviews\n" },
  llmsfull_404:           { full404: true },
  llmsfull_is_html:       { full: "<!doctype html><html><body>404</body></html>" },
  llmsfull_no_guides:     { full: "# X\n\nArticles: 74\n" },
  llmsfull_no_count:      { full: "# X\n\n## Guides\n- a\n" },
  llmsfull_claims_rating: { full: GOOD_FULL + "\nWe are top-rated\n" },
  broken_jsonld:   { raw: `<!doctype html><html><head><title>T | Canadian Web Designs</title><script type="application/ld+json">{oops</script></head><body></body></html>` },
  page_500:        { status: 500 },
  // --- checks added 2026-09-05 with the WebPage/entity-reference work ---
  no_webpage_node: { noWebPage: true },
  webpage_no_fragment: { wpOver: { "@id": "https://canadianwebdesigns.ca/x" } },
  webpage_about_stub:  { wpOver: { about: { "@type": "Organization", name: "Canadian Web Designs" } } },
  webpage_bad_about:   { wpOver: { about: { "@id": "https://canadianwebdesigns.ca/#nope" } } },
  webpage_no_ispartof: { wpOver: { isPartOf: { "@id": "https://canadianwebdesigns.ca/#nope" } } },
  org_missing_organization_type: { orgOver: { "@type": ["LocalBusiness", "ProfessionalService"] } },
};

let pass = 0, miss = [];
for (const [name, m] of Object.entries(MUTATIONS)) {
  const nodes = m.noWebPage ? [org(m.orgOver || {}), site(), svc(m.svcOver || {})]
                            : [org(m.orgOver || {}), site(), svc(m.svcOver || {}), wp(m.wpOver || {})];
  if (m.extraNode) nodes.push(m.extraNode);
  const body = m.raw || page(nodes, m.title);
  const server = http.createServer((req, res) => {
    if (req.url === "/robots.txt") { res.writeHead(200,{"Content-Type":"text/plain"}); return res.end(m.robots ?? GOOD_ROBOTS); }
    if (req.url === "/llms-full.txt") {
      if (m.full404) { res.writeHead(404,{"Content-Type":"text/html"}); return res.end("<!doctype html><html>404</html>"); }
      res.writeHead(200,{"Content-Type":"text/plain"}); return res.end(m.full ?? GOOD_FULL);
    }
    if (req.url === "/llms.txt") {
      if (m.llms404) { res.writeHead(404,{"Content-Type":"text/html"}); return res.end("<!doctype html><html>404</html>"); }
      res.writeHead(200,{"Content-Type":"text/plain"}); return res.end(m.llms ?? GOOD_LLMS);
    }
    res.writeHead(m.status ?? 200, {"Content-Type":"text/html"}); res.end(body);
  });
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const code = await new Promise(r => {
    const p = spawn("node", ["scripts/verify-seo.mjs", `http://127.0.0.1:${port}`, "--quick"], { stdio: "ignore" });
    p.on("close", r);
  });
  server.close();
  const wantRed = name !== "baseline";
  const red = code !== 0;
  if (red === wantRed) { pass++; console.log(`  ok    ${name.padEnd(26)} exit=${code}`); }
  else { miss.push(name); console.log(`  MISS  ${name.padEnd(26)} exit=${code}  (wanted ${wantRed?"RED":"GREEN"})`); }
}
console.log(`\nmutation test: ${pass}/${Object.keys(MUTATIONS).length} correct`);
if (miss.length) { console.error("NOT CAUGHT:", miss.join(", ")); process.exit(1); }
