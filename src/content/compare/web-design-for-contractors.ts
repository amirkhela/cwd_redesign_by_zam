import type { IndustryPage } from "./types";

/**
 * /web-design-for-contractors -- the sales page for the blog post
 * content/blog/construction-company-website-design.md.
 *
 * Targets "web design for contractors", "construction website design" and
 * "contractor seo" (SE Ranking CA, 2026-10-19). The blog post stays the
 * informational answer; this page is where someone ready to hire lands.
 *
 * Rules that bind this copy: no invented results or lead numbers, client names
 * only where the site is in src/components/PortfolioGrid.tsx, and the FAQs are
 * this page's own.
 */
export const WEB_DESIGN_FOR_CONTRACTORS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-contractors",
  audience: "Contractors",
  audienceSingular: "contractor or construction company",
  hubBlurb: "Project galleries, estimate requests and service-area pages for general contractors, builders and trades.",
  h1: "Web design for contractors and construction companies",
  metaTitle: "Contractor Website Design & SEO | Canadian Web Designs",
  metaDescription:
    "Contractor and construction websites in Canada: project galleries, an estimate request on every page, service-area pages and contractor SEO. From $299.",
  intro:
    "A homeowner or property manager looking for a contractor wants three things fast: proof you have done this kind of job before, a sense that you work in their area, and an easy way to ask for an estimate. We build contractor and construction websites around exactly that: a project gallery organized by job type, a page for each service and each area you cover, and an estimate request on every page. Websites start at $299.",
  painPoints: [
    {
      title: "Great work, no photos of it",
      body: "Most contractors finish dozens of jobs a year and show none of them online. A visitor comparing three companies picks the one whose finished kitchens, additions or commercial builds they can actually see.",
    },
    {
      title: "The phone is the only way in",
      body: "You are on site all day. If the website only lists a number, the client who calls while you are on a ladder moves to the next company on the list. An estimate form waits for you.",
    },
    {
      title: "One page for every service",
      body: "Renovations, additions, basements, decks and commercial fit-outs crammed onto one Services page give Google nothing to rank and give the client nothing specific to read.",
    },
    {
      title: "Not showing up in your own area",
      body: "Clients search \"contractor\" plus their town, not your company name. Without pages for the areas you serve and a tuned Google Business Profile, the company with the better map listing gets the call.",
    },
  ],
  whatYouGet: [
    {
      title: "A project gallery that sells",
      body: "Finished jobs grouped by type, with before and after photos, the scope of work and the area, so a client can find a job like theirs in a few seconds. You can add new projects yourself.",
      href: "/portfolio",
    },
    {
      title: "Estimate request on every page",
      body: "A short form in the header and at the end of every service page: job type, address, timeline and photos. It lands in your inbox and on your phone, even when you are on site.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for each service",
      body: "Renovations, additions, basements, roofing, concrete, commercial work: each service you offer gets its own page, written plainly, with photos of that kind of job and the questions clients ask about it.",
    },
    {
      title: "Service-area pages",
      body: "A page for each town or region you cover, with jobs completed there, so you can be found on local searches across your whole territory and not only where your office is.",
      href: "/seo",
    },
    {
      title: "Licences, insurance and warranties up front",
      body: "Your WSIB clearance, liability insurance, licences, memberships and workmanship warranty shown clearly. These are the details a careful client checks before they call.",
    },
    {
      title: "Contractor SEO",
      body: "With an SEO plan: Google Business Profile set-up and posting, structured data for a local contractor, consistent listings across the directories clients use, and monthly reporting.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Read: construction company website design, what converts", href: "/blog/construction-company-website-design" },
    { label: "Construction and trades sites in our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Have you built websites for contractors before?",
      a: "Yes. Construction and trades is one of the largest groups in our portfolio, including Awash Construction, D Squared Construction, North 5 Contracting, McLaren Masonry and Remove My Walls. You can see each one on our portfolio page.",
    },
    {
      q: "Can I add new projects to the gallery myself?",
      a: "Yes. We build the gallery so you can add a project from your phone: upload the photos, pick the job type and area, write a line or two, and publish. We show you how at launch.",
    },
    {
      q: "Do you offer SEO for contractors as well as the website?",
      a: "Yes. Our SEO plans start at $250 a month and cover your Google Business Profile, service and area pages, directory listings and monthly reporting. A website alone gives you the foundation; ongoing SEO is what moves you up the local results.",
    },
    {
      q: "We do both residential and commercial work. Can one site cover both?",
      a: "Yes. We split the site into residential and commercial sections with their own service pages, galleries and calls to action, so a homeowner and a property manager each see the work that matters to them.",
    },
    {
      q: "What does a contractor website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the photos and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
