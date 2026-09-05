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

### F. ~~20 images missing `alt` across 17 pages~~ RETRACTED - see iteration 3

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


---

# Iteration 3 - 2026-09-05: why the clicks are missing

Iteration 2 found positions 1-3 converting at 0.37%. This pass separated the two
candidate explanations - "the top-3 queries are junk long-tail nobody clicks" vs
"the snippet is broken" - and it is **neither**.

## The control that settles it

Same site, same title format, same 90-day window:

| query | position | impressions | clicks | CTR |
|---|---|---|---|---|
| **canadian web designs** (brand) | 1.1 | 229 | **28** | **12.2%** |
| web design companies canada | 1.6 | 942 | 1 | 0.11% |
| web design companies in canada | 3.0 | 1,119 | **0** | 0.00% |
| best web development | 2.5 | 1,067 | **0** | 0.00% |
| web design companies | 12.0 | 1,959 | 1 | 0.05% |

**The brand query converts at 12.2%, which is completely normal.** So the title,
the description, the domain and the snippet all work fine - a user who is looking
for this company finds it and clicks it. The commercial queries are not junk
either: these are the highest-value head terms in the industry, 1,000+
impressions each.

Something is different about the SERP those commercial queries return, not about
the site's entry on it.

## The rest of the evidence points the same way

**By country (90 days):**

| country | impressions | clicks | CTR | avg pos |
|---|---|---|---|---|
| **Canada** | **378,295** | **208** | **0.055%** | 23.5 |
| India | 2,275 | 77 | 3.39% | 18.6 |
| Pakistan | 609 | 55 | **9.03%** | 8.6 |
| USA | 17,909 | 33 | 0.18% | 17.3 |
| Nigeria | 249 | 25 | **10.04%** | 6.1 |

The home market is 93% of impressions and converts 60-180x worse than markets
where the same pages rank at positions 6-9. Part of that is position (23.5 vs
8.6), but not 60x worth.

**By intent, positions <=5 only:**

| query shape | queries | impressions | clicks | CTR |
|---|---|---|---|---|
| list-intent (companies / agencies / best / top) | 65 | 7,981 | 6 | **0.075%** |
| everything else | 403 | 21,466 | 74 | **0.345%** |

A 4.6x gap. A single agency's homepage cannot win a click on "best web design
companies canada" however high it ranks, because the user wants a list.

**And the impressions are real.** Daily volume over 90 days is smooth - min
2,740, median 4,282, max 7,513, no spikes - and *growing*, 23,141 impressions in
the week of 06-04 to 44,283 in the week of 08-27. This is not a rank-tracker
artifact or a bot spike. It is genuine, rising, and converting at 0.12%.

## The reading that fits all of it

On the commercial-research queries, CWD's organic result is being **displaced
below the answer**. In 2026 a SERP for "web design companies canada" is ads, an
AI Overview, a local pack and listicles before the first organic link. GSC counts
the impression and reports the organic rank; the user never gets that far, and
the AI Overview has already answered them. Navigational queries have none of that
furniture above them, which is exactly why the brand term still earns 12.2%.

**This cannot be proven from GSC alone** - Google does not break AI Overviews out
in `searchAppearance` (the only appearance types reported here are REVIEW_SNIPPET
at 4,286 impressions and PRODUCT_SNIPPETS at 11). Confirming it needs a live SERP
capture for the head terms from a Canadian IP. That is the next check, and it is
worth doing before anyone spends money on rankings.

**If it holds, it reframes the whole brief:** ranking 2nd has a low ceiling when
the answer sits above position 1, and the work that pays is being *the cited
source inside the answer* - entity consistency, schema, llms.txt, unambiguous
first-paragraph answers. That is the axis iteration 1 was already on, which is
reassuring, and it makes items A, B, C and D above more important, not less.

## Second structural finding: the homepage answers everything

Every single "web design companies *" query resolves to `/`:

```
1959im  1cl  pos 12.0   /  <- "web design companies"
1388im  0cl  pos 16.4   /  <- "toronto web design companies"
1119im  0cl  pos  3.0   /  <- "web design companies in canada"
1039im  0cl  pos 15.6   /  <- "web design companies toronto"
 942im  1cl  pos  1.6   /  <- "web design companies canada"
```

`/web-design-company`, `/web-design-agency` and `/locations/toronto` all exist and
Google is not choosing any of them. `/` took 73% of all site impressions. Worth a
pass on internal linking and on whether those pages are differentiated enough to
be picked - but note that fixing the URL alone does not fix the CTR if the
displacement above is the real cause.

## Domain / Page Authority: blocked, and the blocker is a bill

The SE Ranking key decrypts correctly out of Mongo, and the API answers:

```
402 Payment Required
"Insufficient funds, API key is temporarily disabled. Please make a payment
 to enable you API key, or contact us at api@seranking.com"
```

So no DA/PA/backlink number this pass either, and **no number is invented here.**

This is worth Amir's attention beyond this task: the portal's SEO engine uses
that same key for keyword volumes, competitor data and backlinks
(`src/lib/seo/seranking.ts`), so **CWD's client SEO tooling is running blind
right now**, not just this audit. Google Search Console is unaffected - it is a
different credential and it is working.

## Retraction: audit item F was wrong

Iteration 1 reported "20 images missing `alt` across 17 pages". That was a bug in
my own audit regex, which required `alt="something"` and therefore counted
`alt=""` as missing. Checked against the live homepage: 16 images, 4 without a
non-empty alt, **all 4 are `alt=""`** - the correct, deliberate markup for a
decorative background image - and **0 images are actually missing the
attribute**. A source scan of every `.tsx` agrees: zero `<Image>`/`<img>` tags
without an `alt` prop. There is nothing to fix; item F is struck.

---

# Iteration 4 - 2026-09-05: the SERP capture. My hypothesis was wrong.

Iteration 3 proposed that CWD's organic results were being displaced below an AI
Overview on commercial queries, and said the next step was a live SERP capture
from a Canadian IP before anyone spent money on it. Done, three head terms,
`gl=ca&hl=en`, real browser.

**There was no AI Overview on any of them.** The hypothesis is refuted. What is
actually happening is different, simpler, and more actionable.

| query | GSC pos | AI Overview | CWD on page 1 | what owns the SERP |
|---|---|---|---|---|
| web design companies in canada | 3.0 | **none** | **yes - #1 organic** | 4 ads fill the fold; Clutch listicle at #3 |
| best web development | 2.5 | **none** | **no** | frameworks, Reddit, YouTube, Udemy, web.dev + a local 3-pack |
| web design toronto | 11.7 | **none** | no (page 2) | Kinex, Clutch, Parachute, 2 ads, Pixelcarve, Shift8, Upwork, Purrweb |

## What the capture actually shows

**1. CWD is genuinely #1 for its biggest head term - and it earns nothing.**
For "web design companies in canada" (1,119 impressions, 0 clicks in 90 days)
CWD is the FIRST organic result, with a clean snippet: *"Custom, high-converting
websites that turn visitors into clients. Rated 5 stars by 200+ clients across
Toronto, Vancouver and Canada. Free quote."* The ranking work is done. The click
still does not happen.

**2. Ads own the fold.** Above that #1 organic result sit **four sponsored
results** - onlead.ca, Reddit Ads, Candybox Marketing, advertising.dvlce.ca -
filling the entire first 744px of viewport. On desktop, which is 86% of this
site's impressions, the first organic result is roughly 900px down. GSC counts
that impression at position 1.

**3. The intent mismatch is confirmed visually, and it is the big one.** The
other results on that SERP are **Clutch's "Top Web Design Companies in Canada"**,
DesignRush's "Top Toronto Web Design Companies | 2026", Purrweb's "Top Web Design
Companies in Toronto (2026)" and Upwork's "Hire the Best Web Designers in
Toronto". Somebody typing "web design **companies** in canada" wants a comparison
list. A single agency's homepage cannot win that click from any position. This is
exactly the 4.6x list-intent gap measured in iteration 3 (0.075% vs 0.345% CTR at
positions <=5), now seen rather than inferred.

**4. "best web development" is the wrong audience entirely.** That SERP is
Next.js, React, Django, Ruby on Rails, a Reddit thread on frameworks, YouTube
tier-lists, Udemy courses and web.dev. It is a developer query about frameworks,
not a buyer query about agencies. Those 1,067 impressions are people who will
never hire a Toronto agency. **Do not chase this term.** It is noise in the CTR
average, not a failure.

**5. There is a local 3-pack on "best web development" and CWD is not in it.**
CS Web Solutions (4.9, 117 reviews), GrayCyan (4.9, 69) and CitrusStudio (4.9,
27) - all Mississauga. CWD's Toronto Google Business Profile holds roughly 194
reviews, far more than any of the three, and does not appear. A real local-SEO
gap, separate from everything else here.

## A correction to iteration 2, and it matters

Iteration 2's headline was "positions 1-3 convert at 0.37%, a 30-80x shortfall".
**That framing over-read the data.** GSC reported position 2.5 for "best web
development", and the live SERP does not have CWD on page 1 at all. GSC position
is averaged across SERP variants - personalisation, location, device, and every
long-tail string that rolls up into the reported query - so a GSC "position 2.5"
is not a promise that a Canadian user sees CWD second.

The 12.2% brand-query CTR is still a valid control (the snippet works), and the
list-intent gap is still real and now corroborated visually. But the specific
"top-three results converting 30-80x below par" claim should not be relied on.
Where GSC and a live SERP disagree, the SERP wins.

## The one action that serves BOTH halves of the brief

Every commercial SERP examined is won by a **directory or listicle** - Clutch,
DesignRush, Purrweb, Upwork. CWD is in none of them: the Clutch Canada
web-designers listing page (2.4 MB, fetched directly) contains **zero mentions of
"Canadian Web Designs"**. Clutch and DesignRush profile URLs both answer 403 to a
scripted fetch, so this is "not on the ranking listing page", not "provably has no
profile anywhere" - worth confirming by hand.

Getting listed and reviewed on those directories is the rare item that moves
**both** things asked for:

- **Clicks.** They are the results that win these queries. Being *inside* the
  list beats ranking beside it.
- **Domain Authority.** Clutch, DesignRush and Upwork are exactly the kind of
  authoritative, topically-relevant referring domains DA models weigh. Real
  editorial placement - the opposite of cross-linking the ~70 unrelated sites on
  the same Vercel footprint, which would cost authority rather than build it.

That is a business action, not a code change, so it is recorded here rather than
done. It needs a human with the CWD Google/Clutch logins, and it is the highest
expected-value item in this audit.

---

# Iteration 5 - 2026-09-05: the Google Business Profile, verified

Item D said a GBP URL is the strongest entity anchor a local business has, that it
was missing from `sameAs`, and that it must be verified in a browser before being
added because a guessed profile URL is what created the four dead anchors in item
1. Verified, and the caution was justified.

## The cid I would have used was the wrong number

`BST_VID_MAKER/functions/review_watch/config.py` carries two ids for this listing:

```
{"key": "cwd_toronto", "business_id": "11804622250978858052",
                       "fid":         "1764590269626849918"}
```

Iteration 1 assumed `business_id` was the Maps cid and wrote it into the audit as
"Toronto `cid=11804622250978858052`". **It is not.** Loaded in a browser,
`maps.google.com/?cid=11804622250978858052` renders an **empty place card** with
no name, no address and no reviews, on a map centred over Applewood Hills in
Mississauga. It is the GBP *dashboard* account id, which is what `review_watch`
reads through - not a public Maps entity.

The public cid is the **`fid`**, confirmed by opening the real listing and reading
its `ftid` out of the Maps URL: `0x882b357418472c65:0x187d158043381a7e`, whose
second half is hex for **1764590269626849918** - the `fid` exactly.

**Added, verified live:** `https://maps.google.com/?cid=1764590269626849918` ->
"Canadian Web Designs", Website designer, 2967 Dundas St W #718, Toronto ON
M6P 1Z2, (647) 689-6069, canadianwebdesigns.ca, open 24 hours, 7,105 views. Same
NAP the config already carries, so the entity reconciles cleanly.

## How it is wired

A Google Maps URL is not a social icon, and `socialLinks` renders footer buttons.
So `ClientConfig` gains an optional `entityProfiles?: string[]`, and both
`sameAs` call sites (`layout.tsx`, `locations/[city]/page.tsx`) become
`[...socialLinks, ...(entityProfiles ?? [])]`. Optional, so a client config
without the field behaves exactly as before.

Verified on a real build by serving it and parsing the JSON-LD of `/`,
`/locations/brampton` and `/seo/toronto`: all three carry

```
sameAs: [instagram.com/canadianwebdesigns,
         linkedin.com/company/canadianwebdesigns,
         maps.google.com/?cid=1764590269626849918]
```

and **0 footer links to maps.google** on every one.

## The site overstates its own rating, and now that is measured

The live Google Business Profile shows **4.8 stars from 194 reviews**. The site
says:

| where | says | actual |
|---|---|---|
| `cwd-config.ts:12` `rating` -> schema `ratingValue` | **4.9** | 4.8 |
| `cwd-config.ts:13` `reviewCount` -> schema `reviewCount` | **200** | 194 |
| homepage meta description | "Rated **5 stars** by **200+** clients" | 4.8 / 194 |
| ~25 more places sitewide | "**200+** five-star reviews" | 194, averaging 4.8 |

This sharpens item B from a policy concern into a factual one. An
`aggregateRating` in structured data is a machine-readable assertion, and Google
requires it to match what the business actually has; "200+" asserts at least 200
against a real 194, and "five-star" asserts 5.0 against a real 4.8. It is also on
78 pages that render no reviews at all, which was already the item B problem.

**Not changed here, deliberately.** `reviewCount` and `rating` feed visible
marketing copy in 25+ places, not just the schema - changing them rewrites what
the company says about itself across the whole site, which is Amir's call. The
one-line version of the fix is `cwd-config.ts` lines 12-13. Worth noting the
numbers will drift again: the honest long-term fix is reading them from the GBP
rather than hardcoding, which `review_watch` is already authenticated to do.

---

# Iteration 6 - 2026-09-05: one company, one entity (audit item C)

Item C: every `/locations/*` and `/seo/*` page emitted **two**
`["LocalBusiness","ProfessionalService"]` nodes. Fixed, and the problem was
larger than the audit said.

## What was actually there

On `/locations/brampton`, Google saw two businesses:

```
@id .../locations/brampton   name "Canadian Web Designs - Brampton Web Design"
                             address 2967 Dundas St W, TORONTO
                             aggregateRating 4.9 / 200
@id https://canadianwebdesigns.ca   name "Canadian Web Designs"
                             address 2967 Dundas St W, Toronto
                             aggregateRating 4.9 / 200
```

Three things wrong at once, on 41 pages:

1. **Two entities for one company.** Google merges nodes by `@id`; two different
   ids for the same business at the same address means it picks one arbitrarily
   and the other's signals are wasted.
2. **A claimed local presence at the wrong address.** A LocalBusiness called
   "- Brampton Web Design" carrying the *Toronto* street address asserts a place
   that does not exist. The org node in `layout.tsx` already models this
   correctly - Toronto as the address, Brampton as a `branchLocation` at its own
   5 Cherrycrest Drive - so the per-city node also **contradicted** it.
3. **The rating copied onto pages that render no reviews**, which is item B
   again, 41 times over.

And two more found while fixing it, neither in the original audit:

4. **Every `provider` in the tree was an inline stub.** Eight of them -
   `{"@type":"Organization", name:"Canadian Web Designs"}` - none referencing the
   real node. An inline stub is a *new anonymous node*, so the site was declaring
   about nine partial companies, none of which inherited the address, rating,
   `sameAs`, `areaServed` or opening hours the real one carries. Four of those
   stubs (`services/google-ads-management`, `shopify-`, `wix-`,
   `wordpress-website-design`) carried a **third** copy of the aggregateRating.
5. **A third email address.** `info@canadianwebdesigns.ca` on the `/seo/*` pages,
   against `sales@` on `/locations/*` and `support@` on the org node. Left as-is -
   it now only appears on the org node, which uses `support@`, so the other two
   are simply no longer emitted.

## The fix

- **One canonical id**: `orgId()` in `client-config.ts` ->
  `https://canadianwebdesigns.ca/#organization`. The fragment matters: the old
  bare `https://canadianwebdesigns.ca` collided with the `WebSite` node and the
  homepage `WebPage`, so three different things competed for one id.
- **The org node keeps every business-level fact** - address, phone, hours,
  rating, `sameAs`, `branchLocation`, `areaServed`.
- **Every city page now emits a `Service`**, not a LocalBusiness:
  `@id .../<page>#service`, `provider: {"@id": ".../#organization"}`, and its own
  `areaServed` (the neighbourhood lists on the `/seo/*` pages are preserved -
  they are genuinely useful and specific). Business-level keys are dropped from
  it because they are inherited through the reference.
- **All 8 `provider` stubs** replaced with `{"@id": ".../#organization"}`.
- No `aggregateRating` on any `Service` node, on purpose: Google rejects review
  ratings on `@type: Service` ("Invalid object type for field"), a note
  `ServicePageTemplate.tsx` already carried.

## Verified

`npm run build` exit 0, then served the build and parsed the JSON-LD of **30
pages** - homepage, 8 `/locations/*`, 8 `/seo/*`, 6 `/services/*`, and the static
pages. Asserted on every one:

- exactly **1** `LocalBusiness` node (was 2 on 41 pages)
- exactly **1** node carrying `aggregateRating` (**30 / 30**; was up to 3)
- **no duplicate `@id`** on a page
- **no orphan `provider` reference** - every `@id` a provider points at is
  declared on that page

**0 failures.** The first run of this check caught `/seo/brampton` still at 2,
because nine hand-written city pages sit outside the two dynamic routes - which
is exactly why the verifier parses served HTML rather than trusting the source
edit.

---

# Iteration 7 - 2026-09-05: a regression lock, and the page it immediately caught

Six commits of schema and entity work were protected by nothing. Every defect
fixed on this branch was invisible to `next build`, `tsc` and `next lint` - all
three were green throughout. `scripts/verify-seo.mjs` is the check that is not.

```
npm run verify:seo              # against https://canadianwebdesigns.ca
npm run verify:seo:local        # against a local `next start`
npm run verify:seo:mutate       # prove the checks still bite
```

## What it asserts, on 34 pages

- exactly **one** `LocalBusiness` node per page
- exactly **one** node carrying `aggregateRating`
- no duplicate `@id` on a page
- every `provider` is an `@id` **reference**, not an inline stub, and resolves to
  a node declared on that page
- the org node carries the canonical `@id` and the right name
- the title's brand suffix is the real brand, not one of the three dead variants
  (taglines are allow-listed, so a real tagline is not a false positive)
- **every `sameAs` URL is fetched** and answers < 400
- `robots.txt` still explicitly allows the seven retrieval/search agents, and
  still names a sitemap
- `/llms.txt` is 200, is text rather than the HTML 404 page, opens with the brand,
  and **carries no rating or review claim**

It deliberately does **not** check the founding year, the rating value, the review
count or title length. All four are open business questions; encoding today's
answer would turn an undecided question into a rule nobody agreed to.

## It found a page on its first run

`/testimonials` was emitting a **second, id-less `LocalBusiness`** with its own
`aggregateRating` and a hand-written `review[]` built from the testimonials array.
It sat outside the 30-page sample used in iteration 6, so the earlier check
missed it.

The `review[]` half contradicted a decision this repo had already written down.
`layout.tsx` says, directly above its own aggregateRating:

> *"No hardcoded review[] here. Google disallows self-serving reviews (a business
> marking up reviews about itself) on LocalBusiness - they don't earn star rich
> results and are a manual-action risk."*

That is exactly what the block was. The rule was already right; this page had
simply missed it. Removed - **nothing visible changed**, the testimonials still
render, and the company rating is still published once on the org node.

## Mutation-tested, 14/14

A verifier can pass forever because its regex never matched anything, and it
looks identical to one that works. `scripts/verify-seo.mutate.mjs` serves
deliberately broken HTML on a throwaway port and asserts the verifier goes RED
for each defect - every one of which was actually live on this site in September
2026 - and stays GREEN on the baseline:

```
ok  baseline                 ok  dead_sameas
ok  two_localbusiness        ok  no_org_id
ok  two_ratings              ok  robots_missing_searchbot
ok  provider_stub            ok  llms_404
ok  orphan_provider          ok  llms_is_html
ok  brand_variant            ok  llms_claims_rating
ok  broken_jsonld            ok  page_500
```

## It doubles as the deploy acceptance test

Run against the **current live site** it fails cleanly and names precisely what
this PR fixes:

```
/seo/brampton: 2 LocalBusiness nodes, want exactly 1
/seo/brampton: title brand suffix is "Canada Website Design", want "Canadian Web Designs"
/services/seo: provider is an inline stub ({"@type":"Organization",...})
/robots.txt:   Claude-SearchBot is no longer explicitly allowed
/llms.txt:     HTTP 404 - the AI site map is missing
```

So after somebody deploys this branch from the CWD Vercel account,
`npm run verify:seo` going green **is** the confirmation that the deploy landed.

One bug in the verifier itself was found by that live run and fixed: it crashed
with `anchors is not iterable` instead of reporting cleanly, because
`checkSameAs` returns undefined on its failure paths - which is exactly the state
a pre-deploy site is in. Exiting non-zero for the wrong reason and burying the
finding under a stack trace is its own rule-4 violation.

---

# Iteration 10 - 2026-09-05: performance and delivery. Also clean.

Measured against production after the `ec9edc31` deploy. Recording the NEGATIVE
results, because "we checked and it is fine" is worth as much as a finding and
stops the next person re-auditing the same ground.

## Delivery

| page | TTFB | HTML raw | brotli | edge cache |
|---|---|---|---|---|
| `/` | 0.32 s | 177 KB | **23 KB** | HIT |
| `/web-design-company` | 0.28 s | 219 KB | **27 KB** | HIT |
| `/locations/toronto` | 0.25 s | 231 KB | **30 KB** | HIT |
| `/blog` | 0.56 s | 171 KB | 21 KB | MISS |

The 177-231 KB raw HTML looks alarming and is not: it is the inlined RSC payload,
and it compresses about 8:1. What actually crosses the wire is 21-30 KB.

## Images are correctly optimised

`next.config.mjs` sets `formats: ["image/avif", "image/webp"]` with a one-year
`minimumCacheTTL`, and the optimizer honours it. Probed live on the hero JPEG:

```
Accept: image/avif,image/webp,image/*  ->  image/avif
Accept: image/*                        ->  image/jpeg
```

Correct content negotiation. Nothing to fix.

## Blog pagination is handled properly

| URL | canonical | robots |
|---|---|---|
| `/blog` | `/blog` | index, follow |
| `/blog?page=2` | `/blog` | **noindex, follow** |
| `/blog?page=3` | `/blog` | **noindex, follow** |

Canonicalised to the hub, `noindex` on the pages, none in the sitemap. No index
bloat. Someone did this deliberately and correctly.

## The one real observation, and why it was not "fixed"

`/blog` is `private, no-cache, no-store` and misses the edge cache on every
request, because `src/app/blog/page.tsx` takes `searchParams` (for `?page=` and
`?q=`) - which opts the whole route out of static rendering in the App Router.
Cost: 0.56 s TTFB against 0.28 s cached, plus a function invocation per crawl.

Left alone. Making the hub static while keeping search and pagination dynamic
means splitting the route, which is a refactor with real regression surface on a
page that currently works, for maybe 0.28 s on one URL. That is not a small
reversible diff, and the payoff does not justify it. Noted so the decision is
visible rather than forgotten.

## Where this leaves the audit

Six technical dimensions have now been checked against production:

| dimension | verdict |
|---|---|
| crawl / index | **clean** - 149/149 200, no redirect chains, 149/149 canonicals match |
| internal linking | **clean** - zero orphans, money pages 149 inbound each |
| performance / delivery | **clean** - 21-30 KB over the wire, AVIF, edge cached |
| pagination | **clean** - noindex + canonical, no bloat |
| entity / structured data | **fixed** - see iterations 1-8, locked by `verify-seo.mjs` |
| answerability | 2 fixed (invalid `Offer`, `llms.txt` inclusions), 4 deferred as copy |

**The technical SEO surface is essentially exhausted.** Everything still on the
table is either content (the five-page cannibalisation cluster, the FAQ that
answers a pricing question with no price, the "30-Day Average Launch" claim
rendering on SEO and maintenance pages) or off-site (Clutch/DesignRush listings,
which is the only lever that moves both clicks and Domain Authority). None of
those is a code change, and none should be made without the owner.
