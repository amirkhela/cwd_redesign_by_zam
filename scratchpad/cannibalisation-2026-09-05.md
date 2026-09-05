# Why the homepage answers everything — measured, 2026-09-05

Search Console says `/` takes **113,974 of 155,127 impressions (73%)** at position
22.8, while `/web-design-company` and `/web-design-agency` — pages built for
exactly those queries — get almost none. Google answers "web design company" with
the homepage at position 16.7 and 0 clicks.

Three explanations were on the table. Two are now ruled out by measurement.

## Ruled out: crawling and indexing

All **149** sitemap URLs fetched directly:

| check | result |
|---|---|
| HTTP status | **149/149 return 200** |
| redirect chains | none |
| canonical matches its sitemap URL | **149/149** |
| missing canonical | 0 |
| thin pages (<20 KB) | 0 |

Nothing here is broken.

## Ruled out: internal linking

Full link graph built from all 149 live pages. **Zero orphans** — every sitemap URL
has at least one inbound internal link, and the money pages are linked from every
page on the site:

```
/web-design-company                inbound=149  (nav/footer, every page)
/web-design-agency                 inbound=149  (nav/footer, every page)
/services/web-design-development   inbound=149  (nav/footer, every page)
/locations/toronto                 inbound=148
/seo                               inbound=149
```

So the money pages are not under-linked. That hypothesis is dead — **51 links are
global nav/footer boilerplate on every page**, which is arguably too many and
dilutes each link's weight, but reachability is not the problem.

## The one that survives: five pages are the same page

8-gram shingle overlap between the pages competing for the head term. *Containment*
= what share of the smaller page's phrases also appear on the larger one.

| pair | Jaccard | containment |
|---|---|---|
| `/services/web-design-development` vs `/locations/toronto` | 0.213 | **54.7%** |
| `/services/web-design-development` vs `/web-designers-near-me` | 0.289 | **53.7%** |
| `/services/web-design-development` vs `/web-design-company` | 0.242 | **53.7%** |
| `/services/web-design-development` vs `/web-design-agency` | 0.237 | **53.6%** |
| `/web-design-company` vs `/web-designers-near-me` | 0.223 | **41.2%** |
| `/web-design-agency` vs `/web-designers-near-me` | 0.210 | **39.7%** |
| `/web-design-company` vs `/web-design-agency` | 0.185 | **31.6%** |

**Over half the eight-word phrases on `/services/web-design-development` appear
verbatim on four other pages.** Five URLs, one topic, one intent, largely one body
of text.

That is textbook keyword cannibalisation, and it predicts exactly the symptom
observed: when several near-identical pages compete for a query, Google frequently
declines to pick among them and falls back to the homepage — which is precisely
what the GSC page report shows.

## The city pages have the same shape

Comparing four `/locations/*` pages, phrases shared by **all four**:

| page | shingles | shared with all 4 | boilerplate |
|---|---|---|---|
| `/locations/toronto` | 2,654 | 777 | 29.3% |
| `/locations/calgary` | 1,687 | 777 | **46.1%** |
| `/locations/halifax` | 1,664 | 777 | **46.7%** |
| `/locations/winnipeg` | 1,590 | 777 | **48.9%** |

Toronto is the fullest at 29% boilerplate; the rest are roughly half template. With
21 `/locations/*` and 21 `/seo/*` pages on the same pattern, that is 42 pages where
about half the text is interchangeable — the shape Google's guidance on
mass-produced pages describes.

Not an emergency: these pages *do* rank (`/seo/burnaby` pulled 1,505 impressions in
28 days) and each carries genuine city-specific material — neighbourhood lists,
local FAQs. But the ratio is the thing to watch, and it is measurable now.

## What this does NOT justify doing

**Nothing here should be "fixed" mechanically, and none of it was.** The available
levers all change what the site says:

- Consolidating the five-page cluster means picking one canonical page and
  redirecting or de-indexing the others. That removes live pages that currently
  hold rankings — a decision with revenue attached, not a cleanup.
- Rewriting the shared body copy to differentiate them is a content project.
- Thinning the 51 global nav/footer links is a navigation redesign.

Each is Amir's call. What this file supplies is the measurement, so the call can be
made on numbers rather than on a hunch.

## Reproduce it

```
node scripts/verify-seo.mjs          # entity graph (separate concern)
python scratchpad/measure-overlap.py # the tables above, live
```

`measure-overlap.py` beside this file re-runs the crawl, the link graph and the
shingle comparison against production. Every number here came out of it.
