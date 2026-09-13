/**
 * The shared data contract for the bottom-of-funnel pages (/reviews, the
 * "<competitor> alternative" pages and the "web design for <industry>" pages).
 *
 * The same types exist in the narccount and bst-website repos, and a cross-repo
 * refresh job in BST_VID_MAKER parses each data file with a REGEX, not a
 * TypeScript compiler. That is why the literal shape of a data file matters:
 *
 *   - exactly ONE `reviewedOn: "YYYY-MM-DD"` per data file, on its own line;
 *   - every source written on ONE line as
 *       { label: "...", url: "...", checkedOn: "YYYY-MM-DD" }
 *     (reviews: { platform: "google", url: "...", checkedOn: "YYYY-MM-DD" })
 *     with `url` before `checkedOn`, ASCII double quotes;
 *   - a claim about another party is never made without a `source`.
 *
 * The job re-checks every source and only then moves the dates. A date is
 * earned by a real check, never typed in by hand to look fresh.
 */

/** Any claim about a party other than us carries where it was read and when. */
export type Source = { label: string; url: string; checkedOn: string };
export type Faq = { q: string; a: string };
export type CompareRow = {
  feature: string;
  us: string;
  them: string;
  win?: boolean;
  /** Required whenever `them` states a fact about the other party. */
  source?: Source;
};
export type Comparison = {
  kind: "compare";
  slug: string;
  usLabel: string;
  themLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  rows: CompareRow[];
  reasons: { title: string; body: string }[];
  faqs: Faq[];
  /** Must contain the phrases "not affiliated with" and "trademark". */
  disclaimer: string;
  /** ISO date. Rendered as "Last reviewed …"; moved only by a real re-check. */
  reviewedOn: string;
  sources?: Source[];
  related?: string[];
};
export type QuotedReview = {
  author: string;
  /** Verbatim. Never edited, never truncated. */
  text: string;
  source: { platform: "google"; url: string; checkedOn: string };
  context?: "boarding" | "grooming" | "rehoming" | "web-design";
};
export type ReviewsPage = {
  kind: "reviews";
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  profileUrl: string;
  writeReviewUrl?: string;
  reviews: QuotedReview[];
  faqs: Faq[];
  reviewedOn: string;
};
export type IndustryPage = {
  kind: "industry";
  slug: string;
  audience: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  painPoints: { title: string; body: string }[];
  whatYouGet: { title: string; body: string; href?: string }[];
  proofLinks: { label: string; href: string }[];
  faqs: Faq[];
  reviewedOn: string;
};
