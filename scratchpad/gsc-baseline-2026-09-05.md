# Search Console baseline — captured 2026-09-05, the day of the deploy

`gsc-baseline-2026-09-05.json` beside this file is the frozen "before" for the SEO
pass merged as `ec9edc31`. Without it, nobody can say in six weeks whether any of
that work moved anything — which is the difference between an improvement and a
story about one.

Captured **from the live GSC property** through the team portal's own OAuth token
(`GSC_CWD_REFRESH_TOKEN` in the `team-canadianwebdesigns-ca` Vercel env), so it is
real rows, not a third-party tool's model.

## The numbers to beat

| window | clicks | impressions | CTR | avg position |
|---|---|---|---|---|
| 2026-08-06 .. 09-02 (28d) | 192 | 155,127 | **0.1238%** | 25.94 |
| 2026-07-09 .. 08-05 (28d) | 152 | 121,874 | 0.1247% | 23.12 |
| 2026-06-04 .. 09-02 (90d) | 491 | 410,020 | 0.1198% | 23.10 |

By position band, last 28 days — **3,712 queries** total:

| position | queries | impressions | clicks | CTR |
|---|---|---|---|---|
| 1–3 | 248 | 7,274 | 27 | **0.3712%** |
| 3–10 | 403 | 15,397 | 18 | 0.1169% |
| 10–20 | 734 | 50,761 | 23 | 0.0453% |
| 20+ | 2,327 | 65,425 | 11 | 0.0168% |

`/` alone: **113,974 impressions, 160 clicks, position 22.8** — 73% of all site
impressions on one page.

## What the deploy could plausibly move, and what it cannot

**Could move.** The entity work (one `LocalBusiness` instead of two, one canonical
`@id`, live `sameAs` anchors including the verified Google Business Profile, one
brand spelling, `/llms.txt`) is about how confidently Google and the answer engines
resolve *"Canadian Web Designs"* into one company. If it works, it shows up as
knowledge-panel behaviour, brand-query strength and AI citations before it shows up
as CTR.

**Cannot move, and should not be expected to.** The measured cause of the 0.12% CTR
is not on the page — it is that four sponsored results own the fold on the head
terms, and that the queries are list-intent ("web design **companies** in canada")
answered by Clutch and DesignRush listicles that CWD is not in. Schema does not fix
either. See the iteration-4 SERP capture in `ai-seo-audit-2026-09-05.md`.

So: **do not read a flat CTR in six weeks as "the SEO work failed."** Read the
entity signals. The CTR lever is the directory listings, and that is a business
action nobody has taken yet.

## How to compare

```
node scripts/verify-seo.mjs          # the entity graph still holds
```

and re-run the same GSC pull, same three windows and four bands, against this file.
Nothing here is a projection — every number is a measurement, and a later capture
is comparable only if it uses the same windows.

## One caveat worth knowing

Sitemap resubmission through the API returns **403 insufficient authentication
scopes** — the stored refresh token carries `webmasters.readonly`, not write. It
does not matter here: Google downloaded the sitemap at **2026-09-05 09:27 UTC**,
after the deploy, on its own. If a future task genuinely needs to submit, the token
has to be re-consented with the write scope.
