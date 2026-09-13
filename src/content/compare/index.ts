/**
 * Barrel for the bottom-of-funnel data files. Pages, the sitemap and the
 * "More comparisons" chips read from here; the cross-repo refresh job reads
 * the per-page files directly (see types.ts for the literal contract).
 */
import type { Comparison, IndustryPage, ReviewsPage } from "./types";
import { REVIEWS_PAGE } from "./reviews";
import { WIX_ALTERNATIVE } from "./wix-alternative";
import { SQUARESPACE_ALTERNATIVE } from "./squarespace-alternative";

export type { Comparison, IndustryPage, ReviewsPage, CompareRow, Faq, QuotedReview, Source } from "./types";

export const COMPARISONS: Record<string, Comparison> = {
  [WIX_ALTERNATIVE.slug]: WIX_ALTERNATIVE,
  [SQUARESPACE_ALTERNATIVE.slug]: SQUARESPACE_ALTERNATIVE,
};

export const INDUSTRIES: Record<string, IndustryPage> = {};

export { REVIEWS_PAGE };
