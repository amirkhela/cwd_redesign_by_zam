import type { IndustryPage } from "./types";

/**
 * /web-design-for-hvac -- heating, cooling and HVAC contractors.
 *
 * Targets "hvac website design" and, above all, "hvac seo" (110/mo, SE Ranking
 * CA, 2026-10-19), which is why SEO gets real room on this page.
 *
 * Rules that bind this copy: no invented results or call numbers, no claims
 * about rebate programs' terms, client names only where the site is in
 * src/components/PortfolioGrid.tsx, and the FAQs are this page's own.
 */
export const WEB_DESIGN_FOR_HVAC: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-hvac",
  audience: "HVAC Companies",
  audienceSingular: "heating and cooling company",
  hubBlurb: "No-heat and no-cool call buttons, service and area pages, maintenance plan sign-ups and HVAC SEO.",
  h1: "HVAC website design and HVAC SEO",
  metaTitle: "HVAC Website Design & HVAC SEO | Canadian Web Designs",
  metaDescription:
    "HVAC websites and HVAC SEO in Canada: click-to-call for no-heat calls, furnace and AC service pages, maintenance plan sign-ups and area pages. From $299.",
  intro:
    "HVAC customers usually find you in one of two moments: the furnace has stopped on a cold night, or they are planning a new furnace, air conditioner or heat pump and comparing quotes. We build HVAC websites for both: a call button that is always on screen, a fast service request, a page for every system you install and repair, and a page for every area you cover so you show up when people search for heating and cooling near them. Websites start at $299.",
  painPoints: [
    {
      title: "Emergency calls going to a competitor",
      body: "A family with no heat calls the first company that is easy to reach on a phone. If your number is hard to find or the site is slow on mobile, that urgent job goes to someone else.",
    },
    {
      title: "One page for every system",
      body: "Furnaces, air conditioners, heat pumps, boilers, water heaters and duct cleaning on one Services page give Google nothing specific to rank and give a homeowner nothing specific to read.",
    },
    {
      title: "Busy in winter, quiet in spring",
      body: "Without maintenance plans, tune-up bookings and replacement quotes coming through the site, the slow months stay slow. The website should help fill them.",
    },
    {
      title: "Only found near your shop",
      body: "Most HVAC companies serve a whole region but rank only near their address. Without area pages and a tuned Google Business Profile, the towns you drive to every day never see you.",
    },
  ],
  whatYouGet: [
    {
      title: "Click-to-call on every screen",
      body: "A call button that stays visible on mobile and a clear no-heat and no-cool line, so an urgent customer reaches you in one tap, day or night.",
    },
    {
      title: "Service and quote requests",
      body: "Short forms for repairs, tune-ups and replacement quotes that ask for the system, the problem and the address, delivered to your inbox and phone.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for every system",
      body: "Furnaces, air conditioners, heat pumps, boilers, water heaters, indoor air quality and ductwork each get their own page, with the brands you install and the questions homeowners ask.",
    },
    {
      title: "Maintenance plans and financing",
      body: "A clear page for your maintenance plan with an online sign-up, plus financing options and any rebates you help customers apply for, explained plainly.",
    },
    {
      title: "Service-area pages",
      body: "A page for each town or region you cover, so you can rank for heating and cooling searches across your whole territory and not only where your shop is.",
      href: "/seo",
    },
    {
      title: "HVAC SEO",
      body: "Google Business Profile set-up and posting, local structured data, review requests after each job, consistent directory listings and a monthly report on calls and requests.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Construction and trades sites in our portfolio", href: "/portfolio" },
    { label: "Web design for plumbers", href: "/web-design-for-plumbers" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Local SEO by city", href: "/seo" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Have you built websites for trades companies?",
      a: "Yes. Construction and trades is one of the largest groups in our portfolio, including AD Plumbing Services, Meganet Electric and North 5 Contracting. You can see each one on our portfolio page.",
    },
    {
      q: "What does HVAC SEO include?",
      a: "Our SEO plans start at $250 a month and cover your Google Business Profile, system and area pages, review requests, directory listings, technical fixes and a monthly report. The goal is more calls and service requests from your own service area.",
    },
    {
      q: "Can customers sign up for a maintenance plan online?",
      a: "Yes. We build a maintenance plan page with a sign-up form, or connect the plan sign-up from your field service software if it offers one. Either way, the request reaches your office with the details you need.",
    },
    {
      q: "Can the site connect to our scheduling or field service software?",
      a: "Often, yes. Where your software offers online booking or a web form integration, we place it on the site. Where it does not, requests come to you by email and text. We confirm which applies before quoting.",
    },
    {
      q: "What does an HVAC website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the photos and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
