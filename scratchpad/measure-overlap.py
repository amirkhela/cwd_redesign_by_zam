#!/usr/bin/env python
"""
measure-overlap.py — reproduce every number in cannibalisation-2026-09-05.md.

    python scratchpad/measure-overlap.py [--base https://canadianwebdesigns.ca]

Answers three questions against the LIVE site, in order of how cheap they are to
rule out:

  1. Is anything broken at the crawl/index layer?   (status, redirects, canonical)
  2. Are the money pages under-linked internally?   (full inbound link graph)
  3. Are they competing with each other?            (8-gram shingle overlap)

WHY IT EXISTS. The homepage takes 73% of this site's Search Console impressions
while the pages built for those exact queries take almost none. That has several
plausible causes and they are not equally easy to check. Guessing wrong here is
expensive: the "fix" for cannibalisation is de-indexing live pages that currently
rank. This measures instead.

Two things it deliberately does NOT do:

  - It does not touch the repo or the site. Read-only, GET requests only.
  - It does not recommend. It prints numbers; the decision about consolidating or
    rewriting pages belongs to whoever owns the content.

Shingle note: containment (intersection / smaller set) is reported alongside
Jaccard because the pages differ a lot in length — /locations/toronto is 2,695
words against /services/web-design-development's 1,291, and Jaccard alone would
understate how completely the smaller page is contained in the larger.
"""
import argparse
import concurrent.futures as cf
import itertools
import re
import urllib.request
from collections import Counter

UA = {"User-Agent": "Mozilla/5.0 (compatible; cwd-measure-overlap/1.0)"}
SHINGLE_N = 8          # 8 words: long enough that a shared phrase is not a coincidence
THIN_BYTES = 20000


def fetch(url, timeout=30):
    return urllib.request.urlopen(
        urllib.request.Request(url, headers=UA), timeout=timeout
    ).read().decode("utf-8", "replace")


def visible_text(html):
    # Drop nav/header/footer so boilerplate chrome does not inflate the overlap:
    # the question is whether the BODY copy is duplicated, not whether both pages
    # carry the same menu.
    html = re.sub(r"(?is)<(script|style|noscript|nav|footer|header)[^>]*>.*?</\1>", " ", html)
    text = re.sub(r"(?s)<[^>]+>", " ", html)
    text = re.sub(r"&[a-z#0-9]+;", " ", text)
    return re.sub(r"\s+", " ", text).strip().lower()


def shingles(text, n=SHINGLE_N):
    w = text.split()
    return {" ".join(w[i:i + n]) for i in range(max(0, len(w) - n))}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default="https://canadianwebdesigns.ca")
    args = ap.parse_args()
    base = args.base.rstrip("/")

    urls = re.findall(r"<loc>([^<]+)</loc>", fetch(base + "/sitemap.xml"))
    print(f"sitemap URLs: {len(urls)}\n")

    # ---- 1. crawl / index -------------------------------------------------
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, req, fp, code, msg, headers, newurl):
            raise urllib.error.HTTPError(req.full_url, code, f"REDIR->{newurl}", headers, fp)

    def check(u):
        try:
            r = urllib.request.build_opener(NoRedirect).open(
                urllib.request.Request(u, headers=UA), timeout=25)
            html = r.read().decode("utf-8", "replace")
            m = re.search(r'(?is)<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)', html)
            return (u, r.status, m.group(1) if m else "", len(html), html)
        except urllib.error.HTTPError as e:
            return (u, e.code, str(e.reason)[:70], 0, "")
        except Exception as e:                                    # noqa: BLE001
            return (u, -1, f"{type(e).__name__}: {e}"[:70], 0, "")

    with cf.ThreadPoolExecutor(max_workers=10) as ex:
        res = list(ex.map(check, urls))

    bad = [r for r in res if r[1] != 200]
    mismatch = [(u, c) for u, s, c, _, _ in res if s == 200 and c and c.rstrip("/") != u.rstrip("/")]
    nocanon = [u for u, s, c, _, _ in res if s == 200 and not c]
    thin = [(u, n) for u, s, _, n, _ in res if s == 200 and n < THIN_BYTES]
    print("=== 1. crawl / index ===")
    print(f"  non-200            : {len(bad)}")
    for u, s, c, _, _ in bad[:10]:
        print(f"      {s}  {u}  {c}")
    print(f"  canonical mismatch : {len(mismatch)}")
    print(f"  missing canonical  : {len(nocanon)}")
    print(f"  thin (<{THIN_BYTES}B)   : {len(thin)}\n")

    # ---- 2. internal link graph -------------------------------------------
    inbound = Counter()
    for _, s, _, _, html in res:
        if s != 200:
            continue
        for href in {h for h in re.findall(r'<a\b[^>]*href="(/[^"#?]*)"', html)}:
            inbound[href.rstrip("/") or "/"] += 1
    n = len([r for r in res if r[1] == 200])
    boiler = {k for k, v in inbound.items() if v >= n - 3}
    paths = {u.replace(base, "") or "/" for u in urls}
    print("=== 2. internal links ===")
    print(f"  pages crawled            : {n}")
    print(f"  global nav/footer links  : {len(boiler)}")
    orphans = [p for p in paths if inbound.get(p.rstrip("/") or "/", 0) == 0]
    print(f"  ORPHANS (0 inbound)      : {len(orphans)}")
    for o in orphans[:10]:
        print(f"      {o}")
    print()

    # ---- 3. overlap between the competing cluster --------------------------
    cluster = ["/", "/web-design-company", "/web-design-agency", "/web-designers-near-me",
               "/services/web-design-development", "/locations/toronto",
               "/ecommerce-website-design-toronto"]
    docs = {}
    for p in cluster:
        try:
            docs[p] = visible_text(fetch(base + p))
        except Exception as e:                                    # noqa: BLE001
            print(f"  skip {p}: {e}")
    sh = {p: shingles(t) for p, t in docs.items()}
    print(f"=== 3. {SHINGLE_N}-gram overlap, head-term cluster ===")
    for p in docs:
        print(f"  {p:36s} {len(docs[p].split()):5d} words")
    print()
    rows = []
    for a, b in itertools.combinations(docs, 2):
        A, B = sh[a], sh[b]
        if not A or not B:
            continue
        inter = len(A & B)
        rows.append((inter / min(len(A), len(B)), inter / len(A | B), a, b))
    for cont, jac, a, b in sorted(rows, reverse=True):
        if cont < 0.10:
            continue
        flag = "   <== HIGH" if cont > 0.30 else ""
        print(f"  {a:34s} vs {b:34s} jaccard {jac:.3f}  containment {cont:.3f}{flag}")

    # ---- 4. city-page templating ------------------------------------------
    cities = ["/locations/toronto", "/locations/calgary", "/locations/halifax", "/locations/winnipeg"]
    cd = {}
    for p in cities:
        try:
            cd[p] = shingles(visible_text(fetch(base + p)))
        except Exception:                                          # noqa: BLE001
            pass
    if len(cd) >= 2:
        common = set.intersection(*cd.values())
        print(f"\n=== 4. city-page templating ({len(cd)} pages) ===")
        for p, s in cd.items():
            print(f"  {p:28s} shingles {len(s):5d}  shared-by-all {len(common):5d}"
                  f"  = {100 * len(common) / len(s):.1f}% boilerplate")


if __name__ == "__main__":
    main()
