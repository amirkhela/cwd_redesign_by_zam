import type { PricingPlan } from "@/components/PricingCards";

// The website package ladder. One source for every city location page and
// /web-design-packages, so a price changed here changes everywhere at once.
// Kept to one short line and 8 features per card so the grid stays scannable.
export const WEBSITE_PACKAGES: PricingPlan[] = [
  {
    name: "Basic Website",
    price: "$299",
    desc: "A professional small business website.",
    features: [
      "Up to 3 pages",
      "Custom layout design",
      "Mobile responsive",
      "5 stock photos + 1 banner",
      "Contact form",
      "Basic on-page SEO",
      "Free SSL setup",
      "Complete deployment",
    ],
  },
  {
    name: "Startup Website",
    price: "$449",
    desc: "A WordPress website you can edit yourself.",
    features: [
      "Up to 7 pages",
      "WordPress CMS",
      "Interactive custom design",
      "8 stock images + 3 banners",
      "On-page SEO on every page",
      "Google Analytics setup",
      "Speed optimization",
      "Dedicated project manager",
    ],
  },
  {
    name: "Professional Website",
    price: "$699",
    badge: "Most Popular",
    highlight: true,
    desc: "High-end website with booking, payments and full SEO setup.",
    features: [
      "Up to 15 pages",
      "High-end custom design",
      "Online booking + payments",
      "Lead capture forms",
      "Blog + newsletter signup",
      "Schema + XML sitemap",
      "WhatsApp / live chat button",
      "30 days free support",
    ],
  },
  {
    name: "Startup Ecommerce",
    price: "$899",
    desc: "An online store ready to sell across Canada.",
    features: [
      "Up to 75 products",
      "Shopify or WooCommerce",
      "Cart + secure checkout",
      "Stripe, PayPal or Square",
      "Shipping + GST/HST setup",
      "Product page SEO",
      "2 promo banners",
      "Dedicated account manager",
    ],
  },
  {
    name: "Pro Ecommerce",
    price: "$1,699",
    badge: "Best For Stores",
    desc: "A custom store built to sell at scale.",
    features: [
      "Unlimited products",
      "Custom ecommerce design",
      "Inventory + order management",
      "Dropshipping integration",
      "Abandoned cart emails",
      "Product reviews",
      "Google Merchant Center feed",
      "60 days free support",
    ],
  },
  {
    name: "Custom Web Application",
    price: "$3,499",
    badge: "Custom Build",
    desc: "Custom web app on Next.js, Laravel or your framework.",
    features: [
      "Next.js, React, Laravel or Node.js",
      "Portal, booking, LMS, CRM or marketplace",
      "User dashboard + admin panel",
      "Secure logins + user roles",
      "Payments + subscriptions",
      "API + third-party integrations",
      "Full source code ownership",
      "90 days free support",
    ],
  },
];

// ---------------------------------------------------------------------------
// 2026-11-25 bundle ladder (Zam: "offer more at less price than market").
// Every "Save $X" below is the sum of items that are ALSO sold on their own on
// this site at the listed price (website package + logo/brand package + one
// year of the Hosting Plan). Keep it that way: a saving is only a true claim
// under the Competition Act while each separate item really is for sale at that
// price. No struck-through "was" prices (no sales history at a higher price).
// ---------------------------------------------------------------------------

// Hosting after year one. Not part of the maintenance plans (Zam, 25 Nov).
export const HOSTING_PLAN = {
  name: "Hosting Plan",
  price: "$199",
  storePrice: "$299",
  note: "Per year, CAD + HST",
  features: [
    "Fast Canadian-managed hosting",
    "SSL certificate",
    "Domain renewal (.ca or .com)",
    "1 business email account",
    "Daily server backups",
  ],
};

// Website + brand + first year of hosting in one price. Separate prices used for
// each saving: Essentials = Startup $449 + Logo $299 + Hosting $199 = $947;
// Business = Professional $699 + Brand Starter $599 + Hosting $199 = $1,497;
// Brand & Business = Professional $699 + Brand Identity $999 + Hosting $199 = $1,897;
// Store = Startup Ecommerce $899 + Brand Starter $599 + store hosting $299 = $1,797.
export const COMPLETE_PACKAGES: PricingPlan[] = [
  {
    name: "Essentials Complete",
    price: "$599",
    save: "Save $348 vs buying separately",
    desc: "Website, logo and the first year of hosting in one price.",
    features: [
      "7-page WordPress website",
      "Custom logo (3 concepts, vector files)",
      "1 year of hosting + SSL included",
      "Domain (.ca or .com) for 1 year",
      "2 business email accounts",
      "Google Business Profile setup",
      "On-page SEO on every page",
      "Hosting $199/yr from year 2",
    ],
  },
  {
    name: "Business Complete",
    price: "$999",
    badge: "Most Popular",
    highlight: true,
    save: "Save $498 vs buying separately",
    desc: "Website, brand kit, hosting and Google setup for a growing business.",
    features: [
      "15-page website with booking + payments",
      "Brand Starter kit: logo suite, colours, fonts",
      "1 year of hosting, domain + SSL included",
      "3 business email accounts",
      "Google Business Profile setup",
      "Schema, XML sitemap + Google indexing",
      "30 days free support",
      "Hosting $199/yr from year 2",
    ],
  },
  {
    name: "Brand & Business Complete",
    price: "$1,499",
    save: "Save $398 vs buying separately",
    desc: "A full brand identity and a 15-page website, launched together.",
    features: [
      "15-page website with booking + payments",
      "Full Brand Identity with brand guide",
      "Business card, letterhead + social kit",
      "1 year of hosting, domain + SSL included",
      "5 business email accounts",
      "Google Business Profile setup",
      "60 days free support",
      "Hosting $199/yr from year 2",
    ],
  },
  {
    name: "Store Complete",
    price: "$1,299",
    badge: "For Online Stores",
    save: "Save $498 vs buying separately",
    desc: "An online store with your brand kit and the first year of store hosting.",
    features: [
      "Up to 75 products (WooCommerce)",
      "Brand Starter kit: logo suite, colours, fonts",
      "Cart, checkout + Stripe, PayPal or Square",
      "Shipping + GST/HST setup",
      "1 year of store hosting + domain included",
      "Product page SEO",
      "Store hosting $299/yr from year 2",
    ],
  },
];

// Branding leads graphic design; single items are listed underneath.
export const BRANDING_PACKAGES: PricingPlan[] = [
  {
    name: "Logo Design",
    price: "$299",
    desc: "A custom logo for a new or growing business.",
    features: [
      "3 logo concepts",
      "2 rounds of revisions",
      "Colour + black and white versions",
      "PNG, JPG, SVG + PDF files",
      "Website favicon",
      "$299 credited if you upgrade within 60 days",
    ],
  },
  {
    name: "Brand Starter",
    price: "$599",
    badge: "Most Popular",
    highlight: true,
    desc: "Your logo plus the brand basics to look consistent everywhere.",
    features: [
      "3 logo concepts + 3 revision rounds",
      "Logo suite: primary, stacked + icon",
      "Colour palette + font pairing",
      "1-page brand board",
      "Social media profile images",
      "Email signature",
      "All source + export files",
    ],
  },
  {
    name: "Brand Identity",
    price: "$999",
    desc: "A complete identity for print, web and social media.",
    features: [
      "Everything in Brand Starter",
      "4 logo concepts + 4 revision rounds",
      "Brand guide (PDF)",
      "Business card + letterhead design",
      "Social kit: profile, cover + 6 Canva templates",
      "Google Business Profile visuals",
      "Print-ready + web files",
    ],
  },
];

// Single design items, sold on their own (also the basis for package savings).
export const DESIGN_ITEMS: { name: string; price: string }[] = [
  { name: "Business card design", price: "$79" },
  { name: "Flyer design (single-sided)", price: "$99" },
  { name: "Flyer design (double-sided)", price: "$149" },
  { name: "Letterhead design", price: "$59" },
  { name: "Restaurant menu design", price: "$149" },
  { name: "Tri-fold brochure design", price: "$199" },
  { name: "Social media kit", price: "$199" },
  { name: "Extra revision round", price: "$59" },
];

// Monthly maintenance (Zam, 25 Nov: $25 / $50 / $75). Hosting is NOT included.
export const MAINTENANCE_PLANS: PricingPlan[] = [
  {
    name: "Basic Care",
    price: "$25",
    note: "Per month, CAD + HST",
    desc: "Keep a small website updated, backed up and online.",
    features: [
      "WordPress core, plugin + theme updates",
      "Weekly off-site backups",
      "24/7 uptime monitoring",
      "Monthly security scan",
      "Email support",
    ],
  },
  {
    name: "Standard Care",
    price: "$50",
    note: "Per month, CAD + HST",
    badge: "Most Popular",
    highlight: true,
    desc: "For business websites that change often.",
    features: [
      "Everything in Basic Care",
      "Daily off-site backups (30-day retention)",
      "1 hour of content updates a month",
      "Malware removal included",
      "Core Web Vitals monitoring",
      "Monthly performance report",
    ],
  },
  {
    name: "Pro Care",
    price: "$75",
    note: "Per month, CAD + HST",
    desc: "For busy websites and online stores.",
    features: [
      "Everything in Standard Care",
      "Staging site for safe updates",
      "2 hours of content updates a month",
      "WooCommerce + Shopify support",
      "Priority email + phone support",
      "Quarterly SEO health check",
    ],
  },
];

// SEO by term. 3 months is sold on deliverables (setup + first wins), never on
// rankings; Google says SEO takes "four months to a year".
// Starter $299/mo list: 3 mo $897; 6 mo $1,794 -> $1,650 prepaid; 12 mo $3,588 -> $3,000 prepaid ($250/mo).
// Growth $399/mo list: 3 mo $1,197; 6 mo $2,394 -> $2,199 prepaid; 12 mo $4,788 -> $3,990 prepaid.
// The $250/mo 12-month price keeps the locked "From $250/Month" titles true.
export const SEO_TERMS = [
  { name: "SEO Launch", term: "3 months", starter: "$897", growth: "$1,197", pay: "Paid monthly", saving: "", goal: "Setup and first wins: Google Business Profile, citations, on-page fixes, first articles and tracking." },
  { name: "SEO Traction", term: "6 months", starter: "$1,650", growth: "$2,199", pay: "Prepaid", saving: "Save $144 (Starter) / $195 (Growth)", goal: "Early traction on neighbourhood and service keywords, with a steady flow of articles and citations." },
  { name: "SEO Growth Year", term: "12 months", starter: "$3,000", growth: "$3,990", pay: "Prepaid", saving: "Save $588 (Starter) / $798 (Growth)", goal: "The full year Google says SEO needs, when competitive local rankings become realistic." },
];

// Business Complete ($999) + Starter SEO for a term, one price.
// Separately: 3 mo $999 + $897 = $1,896; 6 mo $999 + $1,650 = $2,649; 12 mo $999 + $3,000 = $3,999.
export const WEBSITE_SEO_BUNDLES = [
  { name: "Business Complete + 3 months SEO", price: "$1,799", save: "Save $97" },
  { name: "Business Complete + 6 months SEO", price: "$2,499", save: "Save $150" },
  { name: "Business Complete + 12 months SEO", price: "$3,699", save: "Save $300" },
];

// The monthly SEO ladder for /seo-packages and /llms.txt. Same packages and
// numbers as the /seo/<city> pages; keep them in step.
export const SEO_PACKAGES: PricingPlan[] = [
  {
    name: "Starter SEO",
    price: "$299",
    note: "Per month, CAD + HST. $250/mo on a 12-month plan",
    desc: "For small businesses ready to start ranking.",
    features: [
      "Local keyword research",
      "On-page SEO (up to 5 pages)",
      "4 blog posts per month",
      "10 local citations",
      "Free technical audit",
      "Monthly ranking report",
    ],
  },
  {
    name: "Growth SEO",
    price: "$399",
    note: "Per month, CAD + HST. $3,990 for 12 months prepaid",
    badge: "Most Popular",
    highlight: true,
    desc: "The complete package to lead your category.",
    features: [
      "50+ target keywords",
      "On-page SEO (unlimited pages)",
      "6 articles per month",
      "20 local citations",
      "Link building",
      "Weekly ranking updates",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise SEO",
    price: "Custom",
    note: "Scoped to your goals",
    desc: "Multi-location and ecommerce SEO.",
    features: [
      "Multi-location strategy",
      "Ecommerce SEO",
      "Full content program",
      "Google Ads integration",
      "Conversion tracking",
      "Monthly strategy call",
    ],
  },
];

// Google Ads management: one flat fee per ad account, per month. Read by
// /services/google-ads-management (card + Service schema) and /llms.txt.
// The Business Profile product lists the same number; change both together.
export const GOOGLE_ADS_PLAN = {
  name: "Google Ads Management",
  price: "$75",
  priceValue: 75,
  note: "Per ad account, per month, CAD + HST",
  desc: "One flat fee for each Google Ads account we manage, whatever your ad budget.",
  features: [
    "Keyword research",
    "Ad copywriting",
    "Negative keyword management",
    "Bid optimization",
    "Conversion tracking setup",
    "Monthly performance report",
    "You own the account, always",
  ],
};
