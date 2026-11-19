import googleRating from "@/lib/google-rating.json";

/**
 * /google-rating.json -- Canadian Web Designs' Google stars and review count, as a feed.
 *
 * narccount.ca names Canadian Website Designs Inc. as the company that signs its Kroll
 * set-up, and shows these reviews when a pharmacist hovers that name. It reads this file
 * hourly (narccount src/lib/kroll/setup-publisher-server.ts) instead of keeping its own
 * copy, so the two sites can never disagree. Suggestion 1795112530081, 2026-11-19.
 *
 * The numbers are src/lib/google-rating.json, the same file cwd-config.ts reads. BST_VID_MAKER
 * rewrites it after its daily read of the Toronto listing, only when a number changes, and
 * the push rebuilds this route. Nothing here is typed by hand and nothing is computed.
 * noindex: a data feed is not a page.
 */
export const dynamic = "force-static";

export function GET() {
  const { listing, city, cid, url, rating, reviewCount, readOn } = googleRating;
  return Response.json(
    { listing, city, cid, url, rating, reviewCount, readOn },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "X-Robots-Tag": "noindex",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
