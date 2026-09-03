"""Schema audit for canadianwebdesigns.ca.

Pull sitemap.xml, fetch every URL, extract every
<script type="application/ld+json"> block, validate with json.loads,
check the page-appropriate type is present, and lint each block for:
smart quotes / non-ASCII, priceRange, '&' in text values, and missing
@id architecture (Organization/WebSite @ids, WebPage node).
Outputs schema_audit.csv and schema_audit_summary.json next to itself.
"""
import csv
import json
import re
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

BASE = "https://canadianwebdesigns.ca"
OUT = Path(__file__).parent
HEADERS = {"User-Agent": "cwd-schema-audit/2.0 (python-stdlib)"}
LD_RE = re.compile(
    r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
    re.DOTALL | re.IGNORECASE,
)
SMART_CHARS = "‘’“”–—… "


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def all_types(node, acc):
    if isinstance(node, list):
        for n in node:
            all_types(n, acc)
    elif isinstance(node, dict):
        t = node.get("@type")
        if isinstance(t, list):
            acc.append(",".join(t))
        elif t:
            acc.append(str(t))
        for key in ("@graph", "mainEntity", "itemListElement"):
            if key in node:
                all_types(node[key], acc)
    return acc


def walk_strings(node):
    if isinstance(node, list):
        for n in node:
            yield from walk_strings(n)
    elif isinstance(node, dict):
        for v in node.values():
            yield from walk_strings(v)
    elif isinstance(node, str):
        yield node


def walk_keys(node):
    if isinstance(node, list):
        for n in node:
            yield from walk_keys(n)
    elif isinstance(node, dict):
        for k, v in node.items():
            yield k, v
            yield from walk_keys(v)


def expected_types(path: str):
    """Return (label, [acceptable types]) for what the page SHOULD carry."""
    if path.startswith("/blog/") and path.count("/") == 2 and path not in (
        "/blog/web-design", "/blog/seo", "/blog/digital-marketing",
    ):
        return "BlogPosting", ["BlogPosting", "Article"]
    if path.startswith("/blog"):
        return "CollectionPage/Blog", ["CollectionPage", "Blog"]
    if path.startswith("/services/"):
        return "Service", ["Service"]
    if path.startswith("/locations/"):
        return "LocalBusiness", ["LocalBusiness", "LocalBusiness,ProfessionalService"]
    if path.startswith("/seo/") or path == "/seo":
        return "LocalBusiness/Service", ["LocalBusiness", "LocalBusiness,ProfessionalService", "Service"]
    if path == "/contact":
        return "ContactPage", ["ContactPage"]
    if path in ("/who-we-are", "/our-story"):
        return "AboutPage", ["AboutPage"]
    if path == "/":
        return "Organization/LocalBusiness + WebSite", ["Organization", "LocalBusiness", "LocalBusiness,ProfessionalService"]
    return "WebPage (generic)", ["WebPage"]


def audit(url: str) -> dict:
    path = url.replace(BASE, "") or "/"
    row = {"url": path, "blocks": 0, "types": "", "expected": "", "type_ok": "",
           "errors": []}
    try:
        html = fetch(url)
    except Exception as e:  # noqa: BLE001
        row["errors"].append(f"FETCH: {e}")
        return row

    raw_blocks = LD_RE.findall(html)
    row["blocks"] = len(raw_blocks)
    parsed = []
    for i, raw in enumerate(raw_blocks):
        try:
            parsed.append(json.loads(raw))
        except json.JSONDecodeError as e:
            row["errors"].append(f"block{i}: invalid JSON ({e.msg} @ {e.pos})")

    types = []
    for p in parsed:
        all_types(p, types)
    row["types"] = ";".join(dict.fromkeys(types))

    label, accept = expected_types(path)
    row["expected"] = label
    top_types = set()
    for p in parsed:
        t = p.get("@type") if isinstance(p, dict) else None
        if isinstance(t, list):
            top_types.add(",".join(t))
        elif t:
            top_types.add(str(t))
        if isinstance(p, dict) and "@graph" in p:
            for n in p["@graph"]:
                tt = n.get("@type")
                if tt:
                    top_types.add(tt if isinstance(tt, str) else ",".join(tt))
    row["type_ok"] = "YES" if any(a in top_types for a in accept) else "NO"

    # ---- lint every parsed block ----
    has_webpage = False
    has_org_id = False
    has_website_id = False
    for p in parsed:
        nodes = p["@graph"] if isinstance(p, dict) and "@graph" in p else [p]
        for n in nodes if isinstance(nodes, list) else [nodes]:
            if not isinstance(n, dict):
                continue
            t = n.get("@type", "")
            t = ",".join(t) if isinstance(t, list) else str(t)
            if "WebPage" in t or t in ("AboutPage", "ContactPage", "CollectionPage"):
                has_webpage = True
            if t in ("Organization",) or "LocalBusiness" in t:
                if n.get("@id"):
                    has_org_id = True
            if t == "WebSite" and n.get("@id"):
                has_website_id = True
        for k, v in walk_keys(p):
            if k == "priceRange":
                row["errors"].append("priceRange present")
        for s in walk_strings(p):
            bad = [c for c in s if c in SMART_CHARS]
            if bad:
                row["errors"].append(
                    "smart/non-ascii chars: " + "".join(sorted(set(bad)))[:6])
            if not s.isascii() and not bad:
                nonascii = sorted({c for c in s if not c.isascii()})
                row["errors"].append("non-ascii: " + "".join(nonascii)[:6])
            if " & " in s:
                row["errors"].append("'&' in text (want 'and')")
    if not has_webpage:
        row["errors"].append("no WebPage-type node")
    if not has_org_id:
        row["errors"].append("Organization/LocalBusiness lacks @id")
    if not has_website_id:
        row["errors"].append("WebSite lacks @id")
    # dedupe error list, keep order
    row["errors"] = list(dict.fromkeys(row["errors"]))
    return row


def main():
    sm = fetch(BASE + "/sitemap.xml")
    urls = re.findall(r"<loc>([^<]+)</loc>", sm)
    print(f"sitemap URLs: {len(urls)}", file=sys.stderr)

    with ThreadPoolExecutor(max_workers=8) as ex:
        rows = list(ex.map(audit, urls))

    with open(OUT / "schema_audit.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["URL", "schema blocks", "types found", "expected type",
                    "correct type", "errors"])
        for r in rows:
            w.writerow([r["url"], r["blocks"], r["types"], r["expected"],
                        r["type_ok"], " | ".join(r["errors"])])

    summary = {
        "total": len(rows),
        "no_schema": [r["url"] for r in rows if r["blocks"] == 0],
        "type_not_ok": [r["url"] for r in rows if r["type_ok"] == "NO"],
        "with_priceRange": [r["url"] for r in rows if any("priceRange" in e for e in r["errors"])],
        "with_smart_chars": [r["url"] for r in rows if any("smart" in e for e in r["errors"])],
        "with_amp": [r["url"] for r in rows if any("'&'" in e for e in r["errors"])],
        "no_webpage_node": len([r for r in rows if "no WebPage-type node" in r["errors"]]),
        "no_org_id": len([r for r in rows if "Organization/LocalBusiness lacks @id" in r["errors"]]),
        "no_website_id": len([r for r in rows if "WebSite lacks @id" in r["errors"]]),
        "invalid_json": [r["url"] for r in rows if any("invalid JSON" in e for e in r["errors"])],
        "fetch_errors": [r["url"] for r in rows if any(e.startswith("FETCH") for e in r["errors"])],
    }
    (OUT / "schema_audit_summary.json").write_text(json.dumps(summary, indent=1))
    print(json.dumps(summary, indent=1))


if __name__ == "__main__":
    main()
