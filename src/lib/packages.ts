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

// The monthly SEO ladder for /seo-packages and /llms.txt. Same packages and
// numbers as the /seo/<city> pages; keep them in step.
export const SEO_PACKAGES: PricingPlan[] = [
  {
    name: "Starter SEO",
    price: "$250",
    note: "Per month, CAD + HST",
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
    note: "Per month, CAD + HST",
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
