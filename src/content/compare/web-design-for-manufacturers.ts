import type { IndustryPage } from "./types";

/**
 * /web-design-for-manufacturers -- manufacturers and industrial companies.
 *
 * Targets "web design for manufacturers", "manufacturing website design" and
 * "manufacturing seo" (about 100/mo combined, SE Ranking CA, 2026-10-19); GSC
 * already shows the site for manufacturing and metal-fabrication searches
 * with no page to rank.
 *
 * Rules that bind this copy: no invented results or RFQ numbers, and client
 * names only where the site is in src/components/PortfolioGrid.tsx.
 */
export const WEB_DESIGN_FOR_MANUFACTURERS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-manufacturers",
  audience: "Manufacturers",
  audienceSingular: "manufacturing",
  hubBlurb: "Capabilities pages, product catalogues, RFQ forms and manufacturing SEO for manufacturers and fabricators.",
  h1: "Website design for manufacturers and industrial companies",
  metaTitle: "Manufacturing Website Design & SEO | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian manufacturers and fabricators: capabilities and equipment pages, product catalogues, RFQ forms with file uploads and SEO.",
  intro:
    "Engineers and buyers sourcing a supplier want facts, not slogans: what you make, what equipment and materials you work with, which certifications you hold, and how to send a drawing for a quote. We build manufacturing websites that put those facts first: capabilities and equipment pages, a product or parts catalogue, an RFQ form that accepts drawings, and SEO built around the processes buyers search for. Websites start at $299.",
  painPoints: [
    {
      title: "Capabilities buried or missing",
      body: "Buyers screen suppliers by process, tolerance, material and capacity. If your site does not spell these out, you are dropped from the shortlist before anyone calls.",
    },
    {
      title: "No easy way to request a quote",
      body: "A buyer with a drawing ready wants to upload it and get a quote. A generic contact form with no file upload sends them to a supplier that makes it easy.",
    },
    {
      title: "A site that looks decades old",
      body: "An outdated site makes a modern shop look behind the times. Buyers judge your quality systems partly by how current and organized your website is.",
    },
    {
      title: "Not found for the processes you run",
      body: "Buyers search for the process and material, such as \"stainless steel fabrication Ontario\". Without a page for each capability, you do not appear for those searches.",
    },
  ],
  whatYouGet: [
    {
      title: "Capabilities and equipment pages",
      body: "A page for each process you run, such as machining, fabrication, welding, finishing or assembly, with materials, tolerances, capacities and the equipment on your floor.",
      href: "/services/web-design-development",
    },
    {
      title: "RFQ form with file upload",
      body: "A request-for-quote form that accepts drawings and specs, asks for quantity, material and timeline, and sends everything to your estimating team.",
    },
    {
      title: "Product and parts catalogue",
      body: "A searchable catalogue of products or standard parts with specifications and downloadable data sheets, which your team can update without a developer.",
    },
    {
      title: "Certifications and quality",
      body: "Your ISO or CWB certifications, quality process, industries served and photos of your facility shown clearly, because buyers check these first.",
    },
    {
      title: "Industries served pages",
      body: "Pages for the industries you supply, such as automotive, aerospace, food processing or construction, so buyers in each one see relevant work.",
    },
    {
      title: "Manufacturing SEO",
      body: "With an SEO plan: keyword research around your processes and materials, capability and industry pages, technical SEO and reporting on RFQs from search.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Industrial and construction sites in our portfolio", href: "/portfolio" },
    { label: "Web design for contractors", href: "/web-design-for-contractors" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Have you built websites for manufacturers?",
      a: "Yes. Our portfolio includes industrial companies such as Stainless Industries, Heavy Iron Plant, Tank X and Royal Crown Plywood. You can see them on our portfolio page.",
    },
    {
      q: "Can buyers upload drawings with their quote request?",
      a: "Yes. The RFQ form accepts common drawing and document files and sends them with the request to your estimating team, so nothing gets lost in an email thread.",
    },
    {
      q: "Can you build a product catalogue with spec sheets?",
      a: "Yes. We build catalogues with categories, filters, specifications and downloadable PDF data sheets, and your team can add or edit products themselves.",
    },
    {
      q: "What does manufacturing SEO include?",
      a: "Our SEO plans start at $250 a month and cover research into the processes and materials buyers search for, capability and industry pages, technical fixes and a monthly report on traffic and RFQs.",
    },
    {
      q: "What does a manufacturing website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
