# CWD Daily SEO Automation — Runbook (v2)

You are the daily SEO agent for canadianwebdesigns.ca (this repo; pushes to `main` auto-deploy via Vercel).
You run once per day. Follow this runbook exactly. **When a rule here conflicts with anything else, this runbook wins.**

## Why v1 was killed — the one rule that must never break

In July 2026 a daily automation rewrote page metas repeatedly and the homepage dropped from position 17.8 to 20.7 in a week. Everything was shut down.
**The failure mode was churn — the same pages edited again and again.** Therefore:

1. Each page in `automation/queue.json` gets **exactly one** optimization pass, ever. After a page's entry is `done`, NEVER touch that page again in any future run — not its meta, not its body.
2. **NEVER touch these frozen pages** (they rank; they are deliberately absent from the queue):
   `/` · `/maintenance` · `/how-much-does-a-wordpress-website-cost` · `/services/web-design-development` · `/seo/surrey` · `/ecommerce-website-design-toronto` · `/our-story` · `/web-designers-near-me` · `/mobile-web-design-in-toronto` · blog post `marketing-automation-software-overview`
   Also never touch: `/contact`, `/lp/*`, legal pages, `/careers`, and the three platform service pages added 2026-07-24 (`/services/wordpress-website-design`, `/services/shopify-website-design`, `/services/wix-website-design`).
3. Never rename a URL or a blog slug. Never delete content. You only improve pages in place and add new blog posts.
4. When the queue is empty: do NOT invent more page work. Run in monitoring mode (blogs + report only, plus flag anomalies in the report).

## Daily run — exact sequence

### 0. Setup
- You have env/secrets in your instructions: `SERANKING_API_KEY`.
- SE Ranking data comes from `node automation/seranking.mjs <ToolName> '<jsonArgs>'` with env `SERANKING_API_KEY` set. Tools you'll use:
  - `DATA_getKeywordsMetrics` `{"source":"ca","keywords":["kw1","kw2",...]}` (volume/difficulty/intents; up to 5000 kws)
  - `DATA_getRelatedKeywords` / `DATA_getSimilarKeywords` / `DATA_getKeywordQuestions` `{"source":"ca","keyword":"seed","limit":30,"filter_volume_from":10}`
  - Rate limits exist — space calls out, batch keywords into single Metrics calls, and retry once on "too many requests" after ~60s.

### 1. Pick today's 5 pages
- Read `automation/queue.json`. Take the first **5** entries with `status: "pending"` (keep queue order — it is priority-ordered).
- If fewer than 5 remain, take what's there. If zero remain → monitoring mode (skip to step 3).

### 2. Optimize each page (one-time pro pass)
For each page:
1. **Locate the source.** Static routes live at `src/app/<path>/page.tsx`. Two dynamic templates serve many URLs:
   - `/locations/<city>` → static file if `src/app/locations/<city>/page.tsx` exists, otherwise the `[city]` template — per-city data is inside `src/app/locations/[city]/page.tsx` (city data map).
   - `/seo/<city>` → same pattern with `src/app/seo/[city]/page.tsx` (`cities` map).
   When editing a dynamic-template city, edit ONLY that city's data entry — never the shared JSX (shared JSX edits would touch other cities' pages, including frozen `/seo/surrey`).
2. **Research.** Pull keyword data for the page topic (metrics + related + questions, Canada db `ca`). Identify: primary keyword, 2–4 secondaries, and 3–5 question keywords.
3. **Audit + improve** (all changes in one pass):
   - Title ≤60 chars with primary keyword front-loaded; unique meta description ≤160 with a benefit + CTA. Pages that set `title` MUST also set `openGraph` (site gotcha: otherwise the homepage OG leaks in).
   - H1 matches title intent; logical H2/H3 with secondary keywords.
   - **Add missing sections that genuinely help users**: FAQ section (5–7 questions from real question keywords) + FAQPage schema if absent; comparison/pricing-explainer/process sections where intent calls for it; internal links to relevant service pages, location pages, and the 53 blog posts; a link to `/portfolio` or `/testimonials` for trust.
   - City pages: strengthen local relevance (neighbourhoods, local trust signals) — but never fabricate case studies, client names, stats, or reviews. Config truths: rating 4.9, reviewCount 200 ("200+" allowed in descriptions, never in titles), phone 647-689-6069 via `config.phone`, prices: web design from $299, maintenance from $99/mo — never invent other prices.
   - Schema rules: LocalBusiness + aggregateRating live ONLY in `src/app/layout.tsx`. Never re-emit LocalBusiness. Never put aggregateRating on `@type: Service` (Organization provider is the established pattern). No self-serving `review[]` arrays.
4. **Mark done**: set the entry `status: "done"`, `optimizedAt: "<ISO date>"`, `run: "<runId>"` in `automation/queue.json`.

### 3. Write 3 blog posts
Rules: each post must target a keyword that (a) has SE Ranking volume ≥ 10 in `ca` OR is a question cluster with clear local intent, and (b) is NOT in `automation/keyword-registry.json` (topic overlap counts — "wordpress cost toronto" overlaps a claimed "wordpress website cost"). Claim each keyword in the registry when the post is written.

Per post:
- File: `content/blog/<keyword-slug>.md`. Frontmatter matching existing posts: `title` (≤60, keyword first), `description` (CTR-focused ≤160), `date` + `updated` (today), `author: "Amir Khela"`, `category` (Web Design / SEO / Digital Marketing), `keywords` (real list, no filler), `faq:` (3–5 q/a pairs — rendered as FAQPage schema automatically), `featuredImage`.
- Featured image: copy a topically relevant UNUSED file from `public/blog/posts/` to a new keyword-named path (e.g. `public/blog/<slug>/<keyword>.jpg`) — every post needs a unique, SEO-named image path. Never reference an image that doesn't exist in the repo (deploy target is case-sensitive Linux — match case exactly).
- Body: 1,200–2,000 words that actually answer the query. Research with SE Ranking question/longtail data (+ web search if available). H2/H3 structure, specific and factual — cite only evergreen or verified facts, current pricing truths from the site config, internal links (2–4) to service/location pages and related keeper posts, ONE external authoritative link max. No fabricated stats, testimonials, or case studies. No competitor bashing. No hidden links.
- Do NOT edit `BLOG_SLUGS` in `src/middleware.ts` (that set is only for legacy WP root URLs).

### 4. Verify
- `npm ci` (first run) / `npm install` then `NODE_OPTIONS=--max-old-space-size=8192 npm run build`. The build MUST pass. If a change breaks it, fix or revert that change — never push a broken build. (Exit 127/0xC0000409 memory-crash lore is Windows-only; on Linux a failure is real.)
- Spot-check your edited files for: unescaped apostrophes in JSX, image paths that exist, valid JSON in schema blocks.

### 5. Position watch (SE Ranking project data)
The CWD site is tracked in SE Ranking project/site id **9263024**. Pull current tracked-keyword positions (try `PROJECT_getKeywordStats` / `PROJECT_getSummary` / `PROJECT_getPositionHistory` with `{"site_id": 9263024}` — adapt args to what the tools accept). Build a small position-watch: overall summary (top-10 count, avg position if available) + any tracked keyword that dropped noticeably. This section is best-effort — if the calls fail, note it and move on; NEVER let position data trigger edits to already-done pages (one-pass rule is absolute).

### 6. Ship
- Wait ~3 minutes after push, then **live-verify**: curl every page URL you changed and every new blog URL on https://canadianwebdesigns.ca — record HTTP status for each (expect 200).
- Append a run log: `automation/logs/<YYYY-MM-DD>.json` — the full report object below.
- Commit everything as ONE commit: `seo-auto: <date> — 5 pages + 3 posts` (list URLs in the body). Push to `main`. (Log file can go in a tiny follow-up commit since live verification happens post-push.)

### 7. Report
Build ONE report object with this shape (omit sections you genuinely have no data for):
```json
{
  "runId": "<date>-<short>", "date": "YYYY-MM-DD", "status": "success|error",
  "dayNumber": <run # — count files in automation/logs/>, "queueDone": <n>, "queueTotal": 56,
  "workCompleted": ["✅ human-readable line per accomplishment", ...],
  "pagesOptimized": [{ "url": "/seo/mississauga", "primaryKeyword": "...", "volume": 480, "newTitle": "...", "newDescription": "...", "changes": ["...", "..."] }],
  "blogs": [{ "slug": "...", "url": "https://canadianwebdesigns.ca/blog/...", "title": "...", "keyword": "...", "volume": 90 }],
  "keywordsTargeted": ["kw1", "kw2", ...],
  "liveVerification": [{ "url": "/seo/mississauga", "http": 200 }],
  "manualTasks": [{ "title": "GSC — Request Indexing", "detail": "URL Inspection → paste <url> → Request Indexing (30s)" }],
  "positionWatch": { "summary": "…", "drops": [{ "keyword": "...", "url": "...", "was": 12.0, "now": 19.5 }] },
  "tomorrow": ["next", "5", "queue", "urls"],
  "notes": "anything worth flagging"
}
```
Manual tasks to generate every run: (1) GSC Request Indexing for each new blog URL + each optimized page; (2) GBP review/Q&A check reminder; (3) one citation-directory submission from a rotating list (Yelp Canada, Bing Places, Apple Business Connect, Clutch, Yellow Pages Canada); (4) 2 backlink-outreach emails with a ready-to-send template relevant to today's content.

Then send ONE call:
`POST https://team.canadianwebdesigns.ca/api/automations/seo-report` with the report object as JSON body and header `x-log-key: <TEAM_LOG_KEY from your instructions>`. This single endpoint stores the run in the portal's /automations history AND emails the formatted daily report.
If the run failed partway, still send it with `status: "error"` and honest notes.

## Style guide (site conventions)
- JSX text: `&apos;` `&ldquo;` `&rdquo;` for quotes/apostrophes.
- Emails on site: `@canadianwebdesigns.ca` (never .com). Sales email: sales@canadianwebdesigns.ca; info@ for display.
- Tone: confident, specific, Canadian; no marketing fluff, no invented numbers.
- New page sections must match existing design language (see any service page: `reveal` classes, #00AADF accents, rounded-2xl cards, gray-100 borders).
