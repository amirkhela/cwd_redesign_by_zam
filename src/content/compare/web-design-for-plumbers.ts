import type { IndustryPage } from "./types";

/**
 * /web-design-for-plumbers -- the sales page the blog post
 * content/blog/plumber-website-design.md was always pointing towards.
 *
 * Rules that bind this copy: no invented results ("300% more calls"), no
 * customer or job numbers, and the FAQs are this page's own -- the blog's
 * `faq:` frontmatter stays on the blog so one FAQPage never sits on two URLs.
 */
export const WEB_DESIGN_FOR_PLUMBERS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-plumbers",
  audience: "Plumbers",
  h1: "Web design for plumbers: a website built to get the phone ringing",
  metaTitle: "Web Design for Plumbers Canada | Click-to-Call Plumbing Websites | Canadian Web Designs",
  metaDescription:
    "Plumber website design for Canadian plumbing companies: click-to-call on every page, a page per service and per service area, your Google reviews on show, and local SEO from day one.",
  intro:
    "A plumbing customer is often standing in water when they search. They are on a phone, they want a number they can tap, and they will call whoever makes that easiest. We build plumbing websites around that moment: one tap to call, a page for every service you offer and every area you cover, and your real Google reviews where a nervous homeowner can see them. Built and hosted in your name, in Canada, from $299.",
  painPoints: [
    {
      title: "The phone number is buried",
      body: "On many plumbing sites the number sits in a footer or behind a Contact page. A homeowner mid-emergency will not scroll for it; they go back to Google and tap the next result.",
    },
    {
      title: "One generic Services page",
      body: "Drain cleaning, water heaters, sump pumps, emergency calls and bathroom rough-ins all on one page means Google has nothing specific to rank for any of them, and neither does the visitor.",
    },
    {
      title: "No page for the towns you actually serve",
      body: "\"Plumber Mississauga\" and \"plumber Oakville\" are different searches. A single home page with a list of cities in the footer does not compete for either.",
    },
    {
      title: "Reviews live on Google, not on the site",
      body: "You have earned real reviews; the site should show them. A homeowner deciding between two trucks picks the one whose site proves other people already trusted it.",
    },
  ],
  whatYouGet: [
    {
      title: "Click-to-call on every page",
      body: "A tappable phone number fixed in the header on mobile, and a short quote form (name, number, what is wrong) for the jobs that are not urgent.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for every service",
      body: "Drain cleaning, water heater repair and installation, emergency plumbing, leak detection, fixture installation: each gets its own page, written for the way people search.",
      href: "/services/web-design-development",
    },
    {
      title: "Service-area pages",
      body: "One page per city or region you cover, with the right service list and the right map for each, so you show up when a homeowner searches their own town.",
      href: "/seo",
    },
    {
      title: "Your Google reviews on the site",
      body: "Real reviews, shown with the reviewer's name and a link back to your Google listing, so the proof is verifiable rather than pasted in.",
      href: "/reviews",
    },
    {
      title: "Local SEO from day one",
      body: "Google Business Profile set-up, structured data for a local service business, Search Console, and citations that keep your name, address and phone consistent everywhere.",
      href: "/services/seo",
    },
    {
      title: "Real photos, not stock wrenches",
      body: "Your trucks, your team, your finished work. We help you gather and present the photos that show a homeowner there is a real business behind the number.",
    },
  ],
  proofLinks: [
    { label: "Read: plumber website design, what actually gets you calls", href: "/blog/plumber-website-design" },
    { label: "Our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Local SEO by city", href: "/seo" },
    { label: "Web design and development", href: "/services/web-design-development" },
  ],
  faqs: [
    {
      q: "How quickly can a plumbing website be built?",
      a: "A typical plumbing site with a home page, a page per core service and a page per main service area is usually live within a few weeks of receiving your content and photos. Emergency-call sites are deliberately simple, which keeps the build short. We agree a schedule in writing before starting.",
    },
    {
      q: "Can you add online booking for non-emergency jobs?",
      a: "Yes. For scheduled work such as maintenance visits or renovation quotes, we add a booking or request form that lets a customer pick a preferred day and time window, and we connect it to the calendar or job software you already use where that software allows it.",
    },
    {
      q: "Will the site work for an HVAC or general contracting company too?",
      a: "Yes. The structure is the same for any emergency-driven trade: click-to-call, one page per service, one page per service area, and reviews on show. Tell us what you cover and we plan the pages around it.",
    },
    {
      q: "What does a plumber website cost, and who owns it?",
      a: "Custom websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain are yours; we host it in your name and you can take it anywhere.",
    },
  ],
  reviewedOn: "2026-09-13",
};
