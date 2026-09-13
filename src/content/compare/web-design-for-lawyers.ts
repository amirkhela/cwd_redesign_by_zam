import type { IndustryPage } from "./types";

/**
 * /web-design-for-lawyers -- the sales page for the blog post
 * content/blog/lawyer-website-design.md.
 *
 * Rules that bind this copy: no case numbers or results, no claim about any
 * law society beyond "we follow your provincial rules", no invented outcomes,
 * and the FAQs are this page's own -- the blog's `faq:` frontmatter stays on
 * the blog.
 */
export const WEB_DESIGN_FOR_LAWYERS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-lawyers",
  audience: "Lawyers",
  h1: "Web design for lawyers: a website built to win the consultation",
  metaTitle: "Web Design for Lawyers Canada | Law Firm Websites That Convert | Canadian Web Designs",
  metaDescription:
    "Law firm website design for Canadian lawyers: a page per practice area, lawyer profiles that build trust, a clear next step on every page, your Google reviews on show, and local SEO from day one.",
  intro:
    "Someone looking for a lawyer is usually comparing three or four firms in other tabs, under stress, deciding who to trust with something that matters. We build law firm websites that make that decision easy: a page for each practice area, lawyer profiles with real photos and real credentials, a clear next step on every page, and your Google reviews where a client can see them. We write to your province's advertising rules and you approve every word. Built and hosted in your name, in Canada, from $299.",
  painPoints: [
    {
      title: "A generic hero and nothing specific",
      body: "A stock gavel and \"we fight for you\" tell a visitor nothing. What earns trust fast is specific: who the lawyers are, where they are called to the bar, and exactly what the firm handles.",
    },
    {
      title: "One Practice Areas page",
      body: "Family, real estate, personal injury, employment and wills on one page means the visitor searching for one of them reads about all of them, and Google has no page to rank for any of them.",
    },
    {
      title: "No obvious next step",
      body: "A visitor who has decided to reach out still has to find out how. If the consultation request is not on the page they are reading, the firm in the next tab gets the call.",
    },
    {
      title: "Copy that ignores the advertising rules",
      body: "Every province's law society has rules on how legal services may be advertised. A site written without them in mind creates a compliance problem the firm then has to fix.",
    },
  ],
  whatYouGet: [
    {
      title: "A page for every practice area",
      body: "Each area gets its own page, written for the question a client actually has, with the next step at the end of it.",
      href: "/services/web-design-development",
    },
    {
      title: "Lawyer profiles that build trust",
      body: "Real headshots, year of call, jurisdiction, education and the areas each lawyer handles, laid out so a visitor can find the right person quickly.",
    },
    {
      title: "A clear next step on every page",
      body: "Book a consultation, call, or send a short intake form: whichever the firm prefers, it is on every page, and the form is built with confidentiality in mind.",
      href: "/services/web-design-development",
    },
    {
      title: "Your Google reviews on the site",
      body: "Where your provincial rules permit testimonials, real reviews shown with the reviewer's name and a link back to your Google listing. Where they do not, we leave them off.",
      href: "/reviews",
    },
    {
      title: "Local SEO from day one",
      body: "Google Business Profile set-up, structured data for a legal practice, Search Console, and consistent name, address and phone across the directories clients use.",
      href: "/services/seo",
    },
    {
      title: "Written to your province's rules",
      body: "We follow your provincial law society's advertising rules as you and your firm understand them, and you approve every page before it is published. We do not publish results claims or guarantees.",
    },
  ],
  proofLinks: [
    { label: "Read: lawyer website design, what actually wins clients", href: "/blog/lawyer-website-design" },
    { label: "Our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Local SEO by city", href: "/seo" },
    { label: "Web design and development", href: "/services/web-design-development" },
  ],
  faqs: [
    {
      q: "How do you handle law society advertising rules?",
      a: "We write to your province's rules as your firm understands them, we avoid results claims, guarantees and comparative language by default, and nothing is published until your firm has approved it. We are web designers, not lawyers, so the final say on compliance is always yours.",
    },
    {
      q: "Can the intake form handle confidential information?",
      a: "The form is served over HTTPS and delivers to the mailbox or intake system your firm chooses. We recommend keeping the form short and deliberately not asking for matter details online, and we can add a notice that the form does not create a lawyer-client relationship.",
    },
    {
      q: "Can you build a bilingual English and French site?",
      a: "Yes. We build bilingual sites with each language on its own URLs, so both versions can be found on their own searches and each page has a matching page in the other language.",
    },
    {
      q: "What does a law firm website cost, and who owns it?",
      a: "Custom websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain are yours; we host it in your name and you can take it anywhere.",
    },
  ],
  reviewedOn: "2026-09-13",
};
