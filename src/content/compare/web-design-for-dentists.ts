import type { IndustryPage } from "./types";

/**
 * /web-design-for-dentists -- the sales page for the blog post
 * content/blog/web-design-for-dentists.md.
 *
 * Rules that bind this copy: no medical claims of any kind, no patient
 * numbers, no invented results, and the FAQs are this page's own -- the
 * blog's `faq:` frontmatter stays on the blog.
 */
export const WEB_DESIGN_FOR_DENTISTS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-dentists",
  audience: "Dentists",
  h1: "Web design for dentists: a website built to book appointments",
  metaTitle: "Web Design for Dentists Canada | Dental Websites That Book | Canadian Web Designs",
  metaDescription:
    "Dental website design for Canadian practices: an appointment request on every page, a page per treatment, real photos of your office, your Google reviews on show, and local SEO from day one.",
  intro:
    "A new patient lands on a dental website with a specific question: do you take my insurance, can I book without phoning, and can I trust you. We build dental websites that answer all three before they close the tab: an appointment request on every page, a clear page for each treatment, real photos of the practice and team, and your Google reviews where a nervous patient can see them. Built and hosted in your name, in Canada, from $299.",
  painPoints: [
    {
      title: "Booking means phoning during office hours",
      body: "Many patients look for a dentist in the evening. If the only way to book is a phone number that rings through to voicemail, that patient books with the practice that offered a form.",
    },
    {
      title: "Stock photos instead of your practice",
      body: "A smiling stock model tells a patient nothing. Photos of your actual reception, treatment rooms and team are what turn an anxious visitor into someone who feels they already know the place.",
    },
    {
      title: "One generic Services list",
      body: "Cleanings, Invisalign, implants, emergency visits and children's dentistry on one page gives Google nothing specific to rank and gives the patient nothing specific to read.",
    },
    {
      title: "Invisible to nearby searches",
      body: "Patients search \"dentist near me\" or \"dentist\" plus their neighbourhood, not your practice name. Without local SEO, the practice closest to them can be the one they never see.",
    },
  ],
  whatYouGet: [
    {
      title: "Appointment request on every page",
      body: "A Book or Request an Appointment button in the header and at the end of every treatment page, with a short form that reaches your front desk and works outside office hours.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for every treatment",
      body: "Hygiene, restorative, cosmetic, orthodontic, emergency and children's dentistry each get their own page, written plainly and structured for how patients search.",
      href: "/services/web-design-development",
    },
    {
      title: "Real photos of your practice",
      body: "We plan the shot list with you: the entrance, the reception, a treatment room, the team. The site then shows a patient the place they will actually walk into.",
    },
    {
      title: "Your Google reviews on the site",
      body: "Real reviews, shown with the reviewer's name and a link back to your Google listing, so the proof is verifiable rather than pasted in.",
      href: "/reviews",
    },
    {
      title: "Local SEO from day one",
      body: "Google Business Profile set-up, structured data for a dental practice, Search Console, and consistent name, address and phone across the directories patients use.",
      href: "/services/seo",
    },
    {
      title: "Insurance and new-patient information up front",
      body: "The questions every new patient asks, answered on a page they can find: which plans you accept, direct billing, what a first visit involves, parking and hours.",
    },
  ],
  proofLinks: [
    { label: "Read: web design for dentists, what gets patients to book", href: "/blog/web-design-for-dentists" },
    { label: "Our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Local SEO by city", href: "/seo" },
    { label: "Web design and development", href: "/services/web-design-development" },
  ],
  faqs: [
    {
      q: "Can the appointment form connect to our practice software?",
      a: "Often, yes. Where your practice management software offers online booking or a web form integration, we connect to it; where it does not, the request form emails your front desk and can be set to send a confirmation to the patient. We confirm which applies before quoting.",
    },
    {
      q: "Do you write the treatment pages, and do we need to review them?",
      a: "We draft them from what you tell us about each service, in plain language, and you review every page before it goes live. Clinical wording is yours to approve: we describe what you offer and how to book it, and we do not make claims about outcomes.",
    },
    {
      q: "Can a multi-location dental group use one site?",
      a: "Yes. Each location gets its own page with its own address, hours, team and booking form, under one shared brand and one set of treatment pages, so each office can be found on its own local searches.",
    },
    {
      q: "What does a dental website cost, and who owns it?",
      a: "Custom websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain are yours; we host it in your name and you can take it anywhere.",
    },
  ],
  reviewedOn: "2026-09-13",
};
