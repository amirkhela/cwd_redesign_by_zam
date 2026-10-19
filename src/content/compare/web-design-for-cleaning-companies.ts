import type { IndustryPage } from "./types";

/**
 * /web-design-for-cleaning-companies -- residential and commercial cleaners.
 *
 * Added on the owner's call (2026-10-19) even though CA search data for
 * "cleaning company website design" is thin: it is a market we sell into, and
 * the portfolio has Springview Window Cleaning (src/components/PortfolioGrid.tsx).
 *
 * Rules that bind this copy: no invented results or job numbers, and client
 * names only where the site is in the portfolio.
 */
export const WEB_DESIGN_FOR_CLEANING_COMPANIES: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-cleaning-companies",
  audience: "Cleaning Companies",
  audienceSingular: "cleaning company",
  hubBlurb: "Instant quote forms, online booking, service-area pages and local SEO for residential and commercial cleaners.",
  h1: "Web design for cleaning companies that books jobs",
  metaTitle: "Cleaning Company Website Design | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian cleaning companies: instant quote requests, online booking, a page per service and area, trust signals and local SEO. From $299.",
  intro:
    "People hiring a cleaner want to know three things: what it will cost, whether they can trust you in their home or office, and how soon you can come. We build cleaning company websites that answer all three: a quick quote or booking form on every page, a clear page for each service, and your insurance, bonding and reviews right where a careful customer looks. Websites start at $299.",
  painPoints: [
    {
      title: "No idea what it costs",
      body: "Customers want a price before they talk to anyone. A site that only says \"call for a quote\" loses them to a company with a quick quote form or clear starting prices.",
    },
    {
      title: "Trust is not on the page",
      body: "Letting a cleaner into a home or office takes trust. If your insurance, bonding, staff screening and guarantee are not shown clearly, visitors assume you do not have them.",
    },
    {
      title: "Residential and commercial mixed together",
      body: "A homeowner wanting a deep clean and a property manager wanting nightly office cleaning need different pages, different photos and different forms.",
    },
    {
      title: "Not found in nearby neighbourhoods",
      body: "Cleaning searches are local. Without a page for each area you serve and a complete Google listing, you only show up near your own address.",
    },
  ],
  whatYouGet: [
    {
      title: "Quote and booking form on every page",
      body: "A short form for home size or square footage, service type, frequency and preferred date, sent straight to your phone. We can connect online booking from your scheduling software too.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for each service",
      body: "Regular and deep cleaning, move-in and move-out, post-construction, office and commercial, windows and carpets, each on its own page with what is included.",
    },
    {
      title: "Trust signals up front",
      body: "Insurance, bonding, WSIB, staff screening, your satisfaction policy and real reviews, shown clearly on the home page and every service page.",
    },
    {
      title: "Residential and commercial sections",
      body: "Separate paths for homeowners and businesses, each with its own photos, services and quote form, so both see what matters to them.",
    },
    {
      title: "Service-area pages",
      body: "A page for each neighbourhood or city you cover, so you can be found on local cleaning searches across your whole service area.",
      href: "/seo",
    },
    {
      title: "Local SEO for cleaners",
      body: "With an SEO plan: Google Business Profile set-up and posting, review requests after each clean, consistent listings and monthly reporting.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Home services sites in our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Local SEO by city", href: "/seo" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Have you built a website for a cleaning company?",
      a: "Yes. Our portfolio includes Springview Window Cleaning along with other home services companies. You can see it on our portfolio page.",
    },
    {
      q: "Can customers book and pay online?",
      a: "Yes. Where your scheduling software, such as Jobber or Housecall Pro, offers online booking, we place it on the site. Otherwise the quote form reaches you instantly and you confirm the booking yourself.",
    },
    {
      q: "Should we show prices on the website?",
      a: "Usually it helps. Starting prices or a simple price guide reduce calls from people who are only price shopping and make serious customers more likely to book. We can set it up either way.",
    },
    {
      q: "Can one site cover residential and commercial cleaning?",
      a: "Yes. We split the site into residential and commercial sections with their own service pages and quote forms, under one brand.",
    },
    {
      q: "What does a cleaning company website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, maintenance plans start at $99 a month, and SEO plans start at $250 a month. The site and the domain are yours.",
    },
  ],
  reviewedOn: "2026-10-19",
};
