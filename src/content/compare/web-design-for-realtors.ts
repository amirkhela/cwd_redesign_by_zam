import type { IndustryPage } from "./types";

/**
 * /web-design-for-realtors -- the sales page for the blog post
 * content/blog/realtor-website-design.md.
 *
 * Targets "realtor website design", "real estate website design" and "web
 * design for real estate" (SE Ranking CA, 2026-10-19).
 *
 * Rules that bind this copy: no invented results or sales numbers, no claims
 * about any board's or CREA's feed terms (access depends on the agent's own
 * membership, so the copy says "where you have access"), and the FAQs are
 * this page's own.
 */
export const WEB_DESIGN_FOR_REALTORS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-realtors",
  audience: "Realtors",
  audienceSingular: "realtor",
  hubBlurb: "Listings, neighbourhood pages, home valuation requests and buyer and seller lead capture for agents and teams.",
  h1: "Realtor and real estate website design that brings in leads",
  metaTitle: "Realtor & Real Estate Web Design | Canadian Web Designs",
  metaDescription:
    "Real estate websites for Canadian realtors: listings, neighbourhood pages, home valuation requests, instant lead alerts and local SEO. From $299.",
  intro:
    "Buyers and sellers check out an agent online before they ever pick up the phone. A brokerage template page tells them nothing about you. We build realtor websites that do: your listings, a page for each neighbourhood you know, a home valuation request for sellers, and lead forms that reach your phone the moment someone asks a question. Websites start at $299.",
  painPoints: [
    {
      title: "A brokerage template that looks like everyone else",
      body: "The page your brokerage gives you is the same page every other agent in the office has. It does not show a seller why they should list with you.",
    },
    {
      title: "Visitors browse and leave",
      body: "Without a reason to leave their details, such as a valuation, saved searches or a neighbourhood guide, most visitors look at a few listings and disappear.",
    },
    {
      title: "Nothing about the areas you know best",
      body: "Agents win on local knowledge. A site with no neighbourhood pages gives buyers no proof of that and gives Google nothing to rank for those area searches.",
    },
    {
      title: "Leads that arrive too late",
      body: "A buyer who asks about a listing on Saturday and hears back on Monday has already booked a showing with someone else. Leads have to reach you instantly.",
    },
  ],
  whatYouGet: [
    {
      title: "Your listings on your own site",
      body: "Your current and sold listings, and a listings search through your board's IDX feed or CREA's data feed where you have access to one, so buyers browse on your site, not a portal.",
      href: "/services/web-design-development",
    },
    {
      title: "Home valuation requests",
      body: "A \"What is my home worth?\" form for sellers that asks for the address and a few details and sends you a ready-to-call lead.",
    },
    {
      title: "Neighbourhood pages",
      body: "A page for each area you work in, covering schools, transit, character and recent sales, written with you, which build trust and rank for local searches.",
      href: "/seo",
    },
    {
      title: "Instant lead alerts",
      body: "Every enquiry goes straight to your phone and inbox, and can feed into your CRM, so you can reply while the buyer is still on the site.",
    },
    {
      title: "Your brand and your brokerage, done right",
      body: "Your personal brand front and centre, with your brokerage shown the way your provincial regulator and brokerage require.",
    },
    {
      title: "Real estate SEO",
      body: "With an SEO plan: Google Business Profile set-up, neighbourhood and listing pages built for search, consistent listings and monthly reporting.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Read: realtor website design, what generates leads", href: "/blog/realtor-website-design" },
    { label: "Our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Can the site show MLS listings?",
      a: "Yes, where you have access to a feed. Most agents can show listings through their real estate board's IDX program or CREA's data feed, depending on their membership. We connect the feed you are approved for, and we can always feature your own listings by hand.",
    },
    {
      q: "Will the website belong to me or to my brokerage?",
      a: "To you. The site, the domain and the leads it collects are yours, so they move with you if you ever change brokerages.",
    },
    {
      q: "Can you build a site for a real estate team?",
      a: "Yes. Teams get a shared site with a profile page for each agent, lead routing to the right person, and listings for the whole team.",
    },
    {
      q: "Can leads go into my CRM?",
      a: "In most cases, yes. Where your CRM accepts web form leads by email parsing, a form integration or an API, we connect the site's forms to it. We confirm which CRM you use before quoting.",
    },
    {
      q: "What does a realtor website cost?",
      a: "Websites start at $299 with a written quote before work begins, maintenance plans start at $99 a month, and SEO plans start at $250 a month. A listings feed may add to the quote depending on the provider.",
    },
  ],
  reviewedOn: "2026-10-19",
};
