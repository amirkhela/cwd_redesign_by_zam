import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { BLOG_SLUGS } from "@/lib/blog-slugs";

/**
 * Known app routes — root-level paths that are NOT old WordPress blog slugs.
 * Any root-level path not in this set (and not a file/Next internal) is assumed
 * to be an old WordPress blog post and 301-redirected to /blog/:slug.
 *
 * This recovers the pre-migration blog: ~126 old root-level URLs still hold
 * Google rankings (~222k impressions over 16 months) but 404'd after the move to
 * /blog/:slug. Redirecting them reconnects that authority to the live posts.
 *
 * NOTE: must live in src/ (project uses a src/ dir) — a root middleware.ts is ignored.
 */
const KNOWN_ROUTES = new Set([
  "blog",
  "careers",
  "contact",
  "faq",
  "locations",
  "our-story",
  "portfolio",
  "privacy-policy",
  "refund-policy",
  "services",
  "terms-and-conditions",
  "testimonials",
  "who-we-are",
  "api",
  "seo",
  "maintenance",
  "web-designers-near-me",
  "mobile-web-design-in-toronto",
  "ecommerce-website-design-toronto",
  "web-design-company",
  "web-design-agency",
  "lp",
  // Old service URLs — 308-redirected to /services/* by next.config.mjs
  "about-us",
  "get-in-touch",
  "quote",
  "our-portfolio",
  "terms-of-service",
  "website-design-development",
  "search-engine-optimization",
  "graphic-design",
  "social-media-optimization",
  "ai-consultation",
  "web-designs",
  "web-design",
  // WordPress system paths
  "wp-admin",
  "wp-login.php",
  "wp-content",
  "wp-includes",
  "wp-json",
  "xmlrpc.php",
  "feed",
  "category",
  "tag",
  "author",
  "page",
  "comments",
]);

/**
 * Dead URL patterns from the old classifieds/marketplace module and the past
 * casino/betting hack. Return 410 Gone so Google drops them fast (not 404).
 */
const GONE_PREFIXES = ["/items/", "/detail/", "/cate-", "/shop/", "/case-study/"];

function isGoneUrl(pathname: string): boolean {
  return GONE_PREFIXES.some((p) => pathname === p.replace(/\/$/, "") || pathname.startsWith(p));
}

const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>410 — Page Removed</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;padding:20px}a{color:#00AADF}</style></head><body><div><h1>410 — This page has been permanently removed</h1><p>This page no longer exists. Visit <a href="https://canadianwebdesigns.ca">canadianwebdesigns.ca</a> for our current services.</p></div></body></html>`;

const PAGE_REDIRECTS: Record<string, string> = {
  "what-we-do": "/services/web-design-development",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Permanently-removed legacy junk → 410 Gone.
  if (isGoneUrl(pathname)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
    });
  }

  // 2. Internal search result pages (/?s=...) → noindex (already robots-disallowed).
  if (request.nextUrl.searchParams.has("s")) {
    const res = NextResponse.next();
    res.headers.set("x-robots-tag", "noindex");
    return res;
  }

  // Only process root-level paths (single segment, no nested slashes).
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length !== 1) return NextResponse.next();

  const slug = segments[0];

  // 3. Explicit page redirects.
  if (PAGE_REDIRECTS[slug]) {
    const url = request.nextUrl.clone();
    url.pathname = PAGE_REDIRECTS[slug];
    return NextResponse.redirect(url, 301);
  }

  // 4. Known routes / files / Next internals pass through untouched
  //    (city slugs, /about, service aliases etc. are handled by next.config.mjs).
  if (KNOWN_ROUTES.has(slug) || slug.startsWith("_next") || slug.includes(".")) {
    return NextResponse.next();
  }

  // 5. Old WordPress root-level blog slug → 301 to /blog/:slug (recover rankings).
  //    Gated on the real blog-slug set so only genuine posts redirect; everything
  //    else falls through to next.config redirects or a proper 404.
  if (BLOG_SLUGS.has(slug)) {
    const url = request.nextUrl.clone();
    url.pathname = `/blog/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|icons).*)",
  ],
};
