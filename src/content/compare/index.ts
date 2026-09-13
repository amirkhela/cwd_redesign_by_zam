/**
 * Barrel for the bottom-of-funnel data files. Pages, the sitemap and the
 * "More comparisons" chips read from here; the cross-repo refresh job reads
 * the per-page files directly (see types.ts for the literal contract).
 */
import type { Comparison, IndustryPage, ReviewsPage } from "./types";
import { REVIEWS_PAGE } from "./reviews";

export type { Comparison, IndustryPage, ReviewsPage, CompareRow, Faq, QuotedReview, Source } from "./types";

export const COMPARISONS: Record<string, Comparison> = {};

export const INDUSTRIES: Record<string, IndustryPage> = {};

export { REVIEWS_PAGE };
