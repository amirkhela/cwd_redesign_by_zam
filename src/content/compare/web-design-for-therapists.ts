import type { IndustryPage } from "./types";

/**
 * /web-design-for-therapists -- therapists, counsellors and psychologists.
 *
 * Targets "web design for therapists" and "therapist website design" (90/mo,
 * SE Ranking CA, 2026-10-19); GSC already shows the site at positions 1 to 3
 * for "website designer for therapists" with no page to rank.
 *
 * Rules that bind this copy: no clinical claims of any kind, no client
 * numbers, no invented results. Several colleges restrict testimonials in
 * advertising, so reviews are offered only where the regulator permits them.
 * We do not claim to certify privacy-law compliance; forms are kept to
 * contact details and the practice decides what it collects.
 */
export const WEB_DESIGN_FOR_THERAPISTS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-therapists",
  audience: "Therapists",
  audienceSingular: "therapy practice",
  hubBlurb: "Calm, private-feeling sites with online booking, clear fees and approach pages for therapists and counsellors.",
  h1: "Web design for therapists, counsellors and psychologists",
  metaTitle: "Therapist Website Design | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian therapists, counsellors and psychologists: online booking, clear fees and insurance details, service pages and local SEO. From $299.",
  intro:
    "Someone looking for a therapist is often reading late at night, unsure and a little anxious. They want to know if you work with what they are going through, how sessions work, what it costs, and whether they can book without a phone call. We build therapist websites that answer those questions calmly and clearly, with online booking, plain fee and insurance information, and a page for each area you work in. Websites start at $299.",
  painPoints: [
    {
      title: "Booking means a phone call",
      body: "Picking up the phone is often the hardest step for a new client. If the only way in is a call or a voicemail, many people close the tab and never reach out.",
    },
    {
      title: "No word on fees or insurance",
      body: "Most clients need to know the session fee and whether their benefits cover it before they book. A site that hides this makes them guess, and many move on.",
    },
    {
      title: "A directory profile instead of a real site",
      body: "Directory listings put you next to dozens of other therapists in the same template. Your own site is where a client gets a feel for you and your approach.",
    },
    {
      title: "Not found for local searches",
      body: "People search \"therapist near me\" or a concern plus their city. Without local SEO and a page for each service, they see the large clinics first.",
    },
  ],
  whatYouGet: [
    {
      title: "Online booking",
      body: "A Book a Session or Free Consultation button on every page, connected to the practice software you already use, such as Jane, Owl Practice or SimplePractice.",
      href: "/services/web-design-development",
    },
    {
      title: "Fees, insurance and how sessions work",
      body: "Session fees, sliding scale if you offer one, which benefit plans reimburse you, in-person or virtual options, and what a first session involves, on one clear page.",
    },
    {
      title: "A page for each area of practice",
      body: "Anxiety, couples, trauma, grief, children and teens or whatever you work with, each on its own page in your own words, which you review and approve before it goes live.",
    },
    {
      title: "An about page that sounds like you",
      body: "Your training, credentials, approach and a real photo, written with you, so a client can tell whether you are the right fit before the first session.",
    },
    {
      title: "Careful contact forms",
      body: "Forms limited to the details needed to reply, with a clear note not to share personal health details through them. You decide what the practice collects.",
    },
    {
      title: "Local SEO for therapists",
      body: "With an SEO plan: Google Business Profile set-up, service pages built for local searches, consistent listings and monthly reporting.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Health and wellness sites in our portfolio", href: "/portfolio" },
    { label: "Web design for medical clinics", href: "/web-design-for-medical-clinics" },
    { label: "Read: AODA website compliance in Ontario", href: "/blog/aoda-website-compliance" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Can the site connect to our practice management software?",
      a: "Usually, yes. Where your practice software offers an online booking page or widget, we link to it or embed it on the site. Client records stay in that software; the website does not store them.",
    },
    {
      q: "Who writes the service pages?",
      a: "We draft them from what you tell us, in plain language, and you review and approve every page before it goes live. We describe what you offer and how to book, and we do not make claims about outcomes.",
    },
    {
      q: "Can you show client testimonials?",
      a: "Only where your regulator permits it. Several colleges restrict testimonials in advertising for therapists and psychologists, so we check what applies to you and leave them off where they are not allowed.",
    },
    {
      q: "Can a group practice use one site?",
      a: "Yes. Each therapist gets a profile page with their approach, specialties and their own booking link, under one shared practice brand.",
    },
    {
      q: "What does a therapist website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
