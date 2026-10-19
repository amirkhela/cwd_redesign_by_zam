/**
 * Barrel for the bottom-of-funnel data files. Pages, the sitemap and the
 * "More comparisons" chips read from here; the cross-repo refresh job reads
 * the per-page files directly (see types.ts for the literal contract).
 */
import type { Comparison, IndustryPage, ReviewsPage } from "./types";
import { REVIEWS_PAGE } from "./reviews";
import { WIX_ALTERNATIVE } from "./wix-alternative";
import { SQUARESPACE_ALTERNATIVE } from "./squarespace-alternative";
import { GODADDY_WEBSITE_BUILDER_ALTERNATIVE } from "./godaddy-website-builder-alternative";
import { AGENCY_VS_FREELANCER } from "./agency-vs-freelancer";
import { WEB_DESIGN_FOR_PLUMBERS } from "./web-design-for-plumbers";
import { WEB_DESIGN_FOR_DENTISTS } from "./web-design-for-dentists";
import { WEB_DESIGN_FOR_LAWYERS } from "./web-design-for-lawyers";
import { WEB_DESIGN_FOR_CONTRACTORS } from "./web-design-for-contractors";
import { WEB_DESIGN_FOR_RESTAURANTS } from "./web-design-for-restaurants";
import { WEB_DESIGN_FOR_ROOFERS } from "./web-design-for-roofers";
import { WEB_DESIGN_FOR_MEDICAL_CLINICS } from "./web-design-for-medical-clinics";
import { WEB_DESIGN_FOR_PHARMACIES } from "./web-design-for-pharmacies";
import { WEB_DESIGN_FOR_REALTORS } from "./web-design-for-realtors";
import { WEB_DESIGN_FOR_NONPROFITS } from "./web-design-for-nonprofits";
import { WEB_DESIGN_FOR_SALONS } from "./web-design-for-salons";

export type { Comparison, IndustryPage, ReviewsPage, CompareRow, Faq, QuotedReview, Source } from "./types";

export const COMPARISONS: Record<string, Comparison> = {
  [WIX_ALTERNATIVE.slug]: WIX_ALTERNATIVE,
  [SQUARESPACE_ALTERNATIVE.slug]: SQUARESPACE_ALTERNATIVE,
  [GODADDY_WEBSITE_BUILDER_ALTERNATIVE.slug]: GODADDY_WEBSITE_BUILDER_ALTERNATIVE,
  [AGENCY_VS_FREELANCER.slug]: AGENCY_VS_FREELANCER,
};

export const INDUSTRIES: Record<string, IndustryPage> = {
  [WEB_DESIGN_FOR_PLUMBERS.slug]: WEB_DESIGN_FOR_PLUMBERS,
  [WEB_DESIGN_FOR_DENTISTS.slug]: WEB_DESIGN_FOR_DENTISTS,
  [WEB_DESIGN_FOR_LAWYERS.slug]: WEB_DESIGN_FOR_LAWYERS,
  [WEB_DESIGN_FOR_CONTRACTORS.slug]: WEB_DESIGN_FOR_CONTRACTORS,
  [WEB_DESIGN_FOR_RESTAURANTS.slug]: WEB_DESIGN_FOR_RESTAURANTS,
  [WEB_DESIGN_FOR_ROOFERS.slug]: WEB_DESIGN_FOR_ROOFERS,
  [WEB_DESIGN_FOR_MEDICAL_CLINICS.slug]: WEB_DESIGN_FOR_MEDICAL_CLINICS,
  [WEB_DESIGN_FOR_PHARMACIES.slug]: WEB_DESIGN_FOR_PHARMACIES,
  [WEB_DESIGN_FOR_REALTORS.slug]: WEB_DESIGN_FOR_REALTORS,
  [WEB_DESIGN_FOR_NONPROFITS.slug]: WEB_DESIGN_FOR_NONPROFITS,
  [WEB_DESIGN_FOR_SALONS.slug]: WEB_DESIGN_FOR_SALONS,
};

export { REVIEWS_PAGE };
