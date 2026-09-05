# canadianwebdesigns.ca — AI searchability / SEO audit, 2026-09-05

Measured against the LIVE site (149 sitemap URLs; 78 pages fetched and parsed —
every non-blog page plus 6 blog posts). Raw data:
`BST_VID_MAKER/data/cwd_seo/live_audit.json`.

## What is already good — do not "fix" these

The site is in better technical shape than a first look suggests. Verified across
all 78 pages fetched:

| check | result |
|---|---|
| canonical tag | present on 78/78 |
| exactly one `<h1>` | 78/78 |
| JSON-LD present | 78/78 (BreadcrumbList, WebSite, LocalBusiness+ProfessionalService, Service) |
| FAQPage schema | 65 pages |
| `noindex` leaks | 0 |
| content depth | median 1,796 words; thinnest is /portfolio at 614 |
| internal links | 45–100+ per page, no orphans in the sample |

**The robots.txt AI policy is already deliberate and correct.** It allows the
retrieval/citation agents (`ChatGPT-User`, `OAI-SearchBot`, `Claude-User`,
`PerplexityBot`, `Google-Extended`) and blocks only the bulk *training* crawlers
(`GPTBot`, `CCBot`, `anthropic-ai`, `ClaudeBot`). That is a business decision
about training data, NOT an AI-searchability bug — a site can rank and be cited
in ChatGPT and Claude answers with all four of those blocked. Unblocking them is
Amir's call and nobody else's.

## Fixed on branch `seo-ai-discoverability`

### 1. Four of six `sameAs` entity anchors were dead (all 149 pages)

`cwd-config.ts → socialLinks` is the single source for BOTH the footer social
icons and the schema.org `sameAs` array (`layout.tsx:137`,
`locations/[city]/page.tsx:837`). Each URL was fetched on 2026-09-05:

| URL | result |
|---|---|
| instagram.com/canadianwebdesigns | **200, live** — posts daily since 2026-08-24 |
| linkedin.com/company/canadianwebdesigns | **200, live** — `<title>Canadian Web Designs \| LinkedIn` |
| facebook.com/canadianwebdesigns | 400 |
| youtube.com/canadianwebdesigns | 404 |
| x.com/canadianwebdesigns | 404 |
| amazon.com/author/canadianwebdesigns | 404 "Page Not Found" |

All four broken ones are a guessed vanity slug for a profile that does not exist.
This is the single highest-value item in the audit and it cuts both ways:

- **Entity resolution.** `sameAs` is how Google and the AI answer engines
  reconcile scattered mentions of "Canadian Web Designs" into one entity. Four
  dead anchors out of six is a failed reconciliation on every page of the site —
  the exact opposite of the AI discoverability this work is for.
- **User-facing.** Those are six clickable icons in the footer of all 149 pages.
  Four of them sent real visitors to a 404.

Corroboration that the removals are right, not merely unreachable:
`BST_VID_MAKER/functions/content_calendar.py:1291` records that
`@canadianwebdesigns` on Instagram "is the only account CWD holds credentials
for", and that Facebook was removed as a channel entirely on Amir's instruction.

### 2. `Claude-SearchBot` was not in robots.txt at all

`Claude-SearchBot` is the crawler that builds the index Claude *answers from*
(distinct from `ClaudeBot`, which is training, and `Claude-User`, which is the
live per-question fetch). It was inheriting the `*` allow, which works — but it
sat unnamed next to three explicitly blocked Anthropic/OpenAI agents, which is
how a future edit switches it off by accident. Now explicit. `Perplexity-User`
added for the same reason. Retired `Claude-Web` dropped.

### 3. No `/llms.txt`

Added at `src/app/llms.txt/route.ts`. Every fact renders from `getConfig()` —
nothing typed by hand — so it cannot drift from the footer, the schema, the
sitemap or the location pages. It makes no claim the site does not make (no
rating, no review count, no client names): an LLM repeats this verbatim, so an
unverifiable line here becomes an unverifiable claim in someone's ChatGPT answer
with CWD's name on it.

## Open — needs a decision or a verification, NOT a silent fix

### A. `foundingDate: "2014"` contradicts the corporate record

`cwd-config.ts:8` says `founded: 2014`; `layout.tsx:136` emits
`foundingDate: "2014"` as a machine-readable claim, and the footer renders
"since 2014" on every page. Canadian Website Designs Inc. was incorporated
**2019-01-21** (Ontario OCN 002676864) and the company history puts Amir's first
websites at **mid-2018**. Neither reading supports 2014.

Left alone deliberately: this is a public marketing claim, and changing what the
company says about its own age is Amir's word, not a code cleanup. Worth settling
because it sits in structured data, where it is a factual assertion rather than
copy.

### B. `aggregateRating` 4.9 / 200 reviews on pages with no visible reviews

Emitted site-wide, including on all 41 `/locations/*` and `/seo/*` pages, none of
which render a single review. Google's structured-data policy requires the rating
to be for the item on the page and visible to the user; a business rating itself
("self-serving") has been ineligible for star rich results since 2019. The count
is roughly grounded — the CWD Toronto Google Business Profile really does hold
~194 reviews — but the markup is on 78 pages that show none of them. Recommend
scoping it to pages that actually render reviews. Not changed here: it touches
what the site claims about itself.

### C. Duplicate `LocalBusiness` nodes on 41 pages

Every `/locations/*` and `/seo/*` page emits two
`["LocalBusiness","ProfessionalService"]` blocks — a city-scoped one and the
global one — with different `@id`, different `email` (`sales@` vs `support@`) and
the same address. Google picks one arbitrarily. The `@graph` plan already drafted
in `scratchpad/missing-schema.md` fixes this by giving the org one fixed `@id`
(`/#organization`) that everything else references. That plan is good and should
ship — **but it currently carries all six of the dead `sameAs` URLs and
`foundingDate: 2014` forward.** Update it from item 1 and item A before applying.

### D. Add the Google Business Profile to `sameAs`

A GBP URL is one of the strongest entity anchors available and it is missing.
CWD has two listings (`review_watch/config.py`): Toronto
`cid=11804622250978858052`, Brampton `cid=2330856418080702014`.

**Not added this pass.** `maps.google.com/?cid=…` is fully JS-rendered, so a
plain fetch returns 220 KB with the business name nowhere in it — the cid could
not be confirmed to resolve to Canadian Web Designs from here. Verify it in a
browser first. Adding a guessed profile URL is exactly what created item 1.

### E. 39 page titles run past ~62 characters

They get truncated in the SERP, which costs click-through on the pages that
matter most — `/services/google-ads-management` (74), `/services/ai-consultation`
(74), `/locations/windsor` (74), `/ecommerce-website-design-toronto` (74). Nearly
all of the overflow is a long brand suffix, and the suffix is not even consistent
between pages ("| Canadian Website Designs" vs "| Canada Web Designs" vs
"| Canadian Web Designs"). Shortening and standardising it fixes most of the 39
in one edit.

### F. 20 images missing `alt` across 17 pages

Four of them on the home page. Small, mechanical, and alt text is read by both
image search and the assistants.

## Domain / Page Authority

DA and PA are Moz's models of the backlink graph, so on-page work does not move
them — referring domains do. Nothing in this pass touches that, and the honest
note is that the two levers are (1) real editorial links, and (2) *not*
cross-linking the ~70 unrelated sites on the same Vercel/registrar footprint,
which is a link scheme and is the fastest way to lose the authority that exists.
A "Website by Canadian Web Designs" credit is legitimate only on sites CWD
actually built — Cloud Pharmacy is one; most of the others on this box were not.

Measuring it needs a backlink API (Moz, Ahrefs, or SE Ranking — CWD already pays
for SE Ranking). No numbers are quoted here because none were fetched.

## How production is deployed (found the hard way, 2026-09-05)

`canadianwebdesigns.ca` is **not** on Amir's Vercel team (`amirkhelas-projects`,
54 projects, none of them this site — checked against the Vercel API). It is
deployed from the **Vercel CLI on the CWD dev account**, and this GitHub repo is
kept in sync by hand afterwards — see the `3f424a0` commit message, which had to
pull production's source back out of Vercel's deployment files because the local
clone holding three CLI-only commits was gone.

Consequences, both of which cost time this session:

- Three other repos look like the source and are all stale by four months:
  `canadianwebdesigns0000/cwd_site`, `canadianwebdesigns0000/cwd_redesign`
  (read-only / stale), and `amirkhela/canadianwebdesigns_redesign` (Apr 18).
  Only `amirkhela/cwd_redesign_by_zam` reproduces the live `robots.txt` and the
  live sitemap's page set. **This repo is the one.**
- **Merging this branch does not deploy it.** Someone with the CWD Vercel account
  has to run the deploy, and then `main` needs the same sync commit again.


---

# Iteration 2 - 2026-09-05: what Search Console actually says

Pulled from the live GSC property `https://canadianwebdesigns.ca/` through the
team portal's own OAuth refresh token (`GSC_CWD_REFRESH_TOKEN`). This is real
measured data, not a tool's model.

## The headline number

| window | clicks | impressions | CTR | avg position |
|---|---|---|---|---|
| 2026-08-06 .. 09-02 | 192 | 155,127 | **0.124%** | 25.9 |
| 2026-07-09 .. 08-05 | 152 | 121,874 | 0.125% | 23.1 |
| 2025-08-06 .. 09-02 | 186 | 384,612 | 0.048% | 44.9 |

18-month totals: **2,874 clicks on 3,726,503 impressions.** Average position is
improving year on year (44.9 -> 25.9) and CTR has more than doubled, so the SEO
work being done is landing. But 0.124% is still roughly a tenth of what a site at
position 26 would normally earn.

## The finding that matters most

Broken out by position band over the last 28 days:

| position | queries | impressions | clicks | CTR |
|---|---|---|---|---|
| **1-3** | 248 | 7,274 | **27** | **0.37%** |
| 3-10 | 403 | 15,397 | 18 | 0.12% |
| 10-20 | 734 | 50,761 | 23 | 0.05% |
| 20+ | 2,327 | 65,425 | 11 | 0.02% |

**Positions 1-3 are converting at 0.37%.** A top-three result normally earns
somewhere between 10% and 30%. This is a 30-80x shortfall on the one band where
the ranking work is already done. Whatever is wrong is happening *after* the
ranking - in the snippet, or in the match between the query and what the page
promises. Those 248 queries average 29 impressions each, so the other reading is
that they are long-tail strings nobody was ever going to click; the two are
distinguishable and worth separating before anything is changed.

Either way: **the cheapest win available to this site is not more rankings, it
is clicks on rankings it already has.**

## The homepage is absorbing the site

`/` took **113,974 of 155,127 impressions (73%)** at average position 22.8, while
the dedicated money pages built for exactly those queries got almost nothing:

| query | position | impressions | clicks |
|---|---|---|---|
| web design company | 16.7 | 3,247 | **0** |
| web design toronto | 11.7 | 2,265 | **0** |
| website design company | 18.3 | 2,130 | **0** |
| web design services | 7.2 | 1,434 | **0** |
| web design canada | 6.2 | 1,102 | 7 |
| toronto web design | 13.1 | 1,038 | 1 |

`/web-design-company`, `/web-design-agency` and `/locations/toronto` all exist and
none of them appears in the top 20 pages by impressions. Google is answering
"web design company" with the homepage at position 16.7 rather than with the page
built for that term. That is a relevance/cannibalisation problem, and it is where
the 73% concentration comes from. Worth its own pass: pull the page+query pair
for each head term and confirm which URL Google actually picked.

## Fixed this iteration: the brand name had four spellings

Across the 78 live pages, the title-tag brand suffix was:

| spelling | pages |
|---|---|
| **Canadian Web Designs** (the real name) | 40 |
| Canada Website Design | 9 |
| Canada Web Designs | 7 |
| Canadian Website Design | 7 |

**23 of 63 branded titles (37%) used a name that is not the business's name**,
and none of the three variants matches the schema `name`, the footer, or the
legal "Canadian Website Designs Inc." Entity resolution is the whole mechanism
an AI answer engine uses to decide that these 149 pages are one company - four
spellings is four weaker signals instead of one strong one, and it splits brand
search too.

Normalised on 41 `title:` lines across 18 files (both `metadata.title.absolute`
and `openGraph.title`). Only the trailing brand token was touched: genuine
taglines in that slot ("Custom WordPress Experts", "Local SEO Experts in 21
Cities", "Shopify Experts & Developers") are left exactly as they were, and no
body copy was modified. Verified by serving the build and reading the rendered
`<title>` of 40 pages: 33 now carry "Canadian Web Designs", the other 7 are those
taglines.

**This does not fix title truncation, and it was not meant to.** The variants are
all about the same length.

## Correction to iteration 1

Iteration 1 said "39 titles over ~62 characters". That counted raw HTML, so
`&amp;` scored 5 characters instead of the 1 that renders. Unescaped, the real
figure is **26 of 78 pages** (max 74, median 60). Still worth fixing, and still
mostly the brand suffix - which costs a median of 40 characters - but the
overflow is a third smaller than reported. The fix is shortening the middle
clause, which is marketing copy, so it needs Amir rather than a script.

## Still not measured: Domain / Page Authority

Attempted this iteration and did not land. The team portal has an SE Ranking MCP
client with `DATA_getBacklinksRefDomains` (`src/lib/seo/seranking.ts`) and the
API key is AES-GCM encrypted in Mongo under `SEO_CRED_KEY` - but production's
`MONGODB_URI` is empty in the Vercel env, so the settings document could not be
read from here. Next step is either the portal's own `/seo` settings UI or the
Postgres `DATABASE_URL` in `.env.local`.

Until then no DA/PA number is quoted, because none has been fetched. What is
already known without it: 3.7M impressions over 18 months is not a visibility
problem, it is a click problem, and DA is not the binding constraint on a 0.37%
top-three CTR.
