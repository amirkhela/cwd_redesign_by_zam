import type { IndustryPage } from "./types";

/**
 * /web-design-for-roofers -- roofing websites and roofing SEO.
 *
 * Targets "roofing website design", "web design for roofers" and, above all,
 * "roofing seo" (320/mo, difficulty 19, SE Ranking CA, 2026-10-19), which is
 * why SEO gets more room here than on the other industry pages.
 *
 * Rules that bind this copy: no invented results or lead numbers, no claims
 * about insurers, client names only where the site is in
 * src/components/PortfolioGrid.tsx, and the FAQs are this page's own.
 */
export const WEB_DESIGN_FOR_ROOFERS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-roofers",
  audience: "Roofers",
  audienceSingular: "roofing company",
  hubBlurb: "Click-to-call for leaks, before and after galleries, service-area pages and roofing SEO.",
  h1: "Roofing website design and roofing SEO",
  metaTitle: "Roofing Website Design & SEO | Canadian Web Designs",
  metaDescription:
    "Roofing websites and roofing SEO in Canada: click-to-call for leaks, before and after galleries, inspection requests and service-area pages. From $299.",
  intro:
    "Roofing customers come in two moods. One has water coming through the ceiling and wants someone on the phone now. The other is planning a replacement and is comparing three quotes. We build roofing websites for both: a call button that is always on screen, a fast inspection request, a gallery of finished roofs, and a page for every area you cover so you show up when people search for a roofer near them. Websites start at $299.",
  painPoints: [
    {
      title: "A leak call that goes to someone else",
      body: "A homeowner with a leak calls the first roofer that is easy to reach on their phone. If your number is buried or the site is slow on mobile, that urgent and valuable job goes elsewhere.",
    },
    {
      title: "No proof of finished roofs",
      body: "Every roofer says they do quality work. Before and after photos of real jobs in the client's own area are what make a homeowner trust you with a five-figure replacement.",
    },
    {
      title: "Only found in your own town",
      body: "Most roofers work across a whole region but rank only near their office. Without a page for each area, the towns you drive to every week never see you in search.",
    },
    {
      title: "Paying for leads instead of earning them",
      body: "Lead sites sell the same homeowner to several roofers. Ranking for roofing searches in your own area brings people who chose you, not a list of names.",
    },
  ],
  whatYouGet: [
    {
      title: "Click-to-call on every screen",
      body: "A call button that stays visible on mobile and a clear emergency or leak line, so an urgent customer reaches you in one tap.",
    },
    {
      title: "Free inspection request",
      body: "A short form for address, roof type, the problem and photos, delivered to your inbox and phone so you can book the inspection while the customer is still deciding.",
      href: "/services/web-design-development",
    },
    {
      title: "Before and after gallery",
      body: "Finished roofs grouped by type, such as asphalt shingle, metal, flat roofs and repairs, with the area and scope, which you can add to yourself after every job.",
      href: "/portfolio",
    },
    {
      title: "Service and area pages",
      body: "A page for each service, from replacements to repairs, eavestroughs and skylights, and a page for each town you cover, so you can rank for roofer searches across your territory.",
      href: "/seo",
    },
    {
      title: "Warranties, insurance and financing",
      body: "Manufacturer certifications, workmanship warranty, WSIB and liability insurance, and financing options shown clearly, because these decide a replacement job.",
    },
    {
      title: "Roofing SEO",
      body: "Google Business Profile set-up and posting, local structured data, review requests after each job, consistent directory listings and monthly reporting on calls and form requests.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Construction and trades sites in our portfolio", href: "/portfolio" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Local SEO by city", href: "/seo" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Have you built websites for roofing companies?",
      a: "Yes. Our portfolio includes Awash Roofing along with a wide range of construction and trades companies, such as Awash Construction, McLaren Masonry and North 5 Contracting.",
    },
    {
      q: "What does roofing SEO include?",
      a: "Our SEO plans start at $250 a month and cover your Google Business Profile, service and area pages, review requests, directory listings, technical fixes and a monthly report. The goal is more calls and inspection requests from your own service area.",
    },
    {
      q: "How long does roofing SEO take to work?",
      a: "Most local roofing businesses see movement in the map results and in area-page rankings within the first few months, and stronger results over six to twelve months. It depends on your area, your competition and your reviews, so we set expectations for your market before you start.",
    },
    {
      q: "Can the site handle storm season and emergency calls?",
      a: "Yes. We can switch on an emergency banner and a priority call button when weather hits, and turn it off afterwards, without a redesign.",
    },
    {
      q: "What does a roofing website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the photos and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
