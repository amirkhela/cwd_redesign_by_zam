import type { IndustryPage } from "./types";

/**
 * /web-design-for-medical-clinics -- clinics, walk-ins and healthcare practices.
 *
 * Targets "healthcare web design", "medical website design" and "medical seo"
 * (SE Ranking CA, 2026-10-19); GSC already shows the site at position 6 for
 * "healthcare web design company in toronto" with no page to rank.
 *
 * Rules that bind this copy: no medical claims of any kind, no patient numbers,
 * no invented results. Physician regulators restrict testimonials in
 * advertising, so reviews are offered only where permitted. We do not claim to
 * certify privacy-law compliance: forms are kept to call-back details, and the
 * clinic decides what it collects.
 */
export const WEB_DESIGN_FOR_MEDICAL_CLINICS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-medical-clinics",
  audience: "Medical Clinics",
  audienceSingular: "medical clinic",
  hubBlurb: "Hours, booking, new-patient information and accessible pages for walk-ins, family practices and specialty clinics.",
  h1: "Web design for medical clinics and healthcare practices",
  metaTitle: "Medical Clinic Website Design | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian medical clinics: hours and booking up front, new-patient information, accessible pages and healthcare SEO. From $299.",
  intro:
    "A patient looking at a clinic website usually wants one of a few things: are you open today, are you taking new patients, can I book online, and where do I go. We build medical clinic websites that answer those questions on the first screen, with clear hours, booking or virtual-visit links, a page for each service, and accessible design that works for older patients and screen readers. Websites start at $299.",
  painPoints: [
    {
      title: "Hours patients cannot find",
      body: "Walk-in hours, holiday closures and same-day availability buried three clicks deep send patients to the clinic down the road, or to an emergency room they did not need.",
    },
    {
      title: "Phones ringing with the same questions",
      body: "Are you taking new patients? Do you do virtual visits? What do I bring? When the website does not answer these, your front desk does, all day.",
    },
    {
      title: "Hard to use for the patients who need it most",
      body: "Small text, low contrast and forms that do not work with a screen reader shut out older and disabled patients, and in Ontario they can fall short of AODA requirements.",
    },
    {
      title: "Invisible on local searches",
      body: "Patients search \"walk-in clinic near me\" or a service plus their area. Without local SEO and a complete Google listing, they never see you.",
    },
  ],
  whatYouGet: [
    {
      title: "Hours, status and booking on the first screen",
      body: "Today's hours, holiday changes, whether you are taking new patients, and a link to your booking or virtual-care system, right where patients look first.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for every service",
      body: "Family medicine, walk-in care, physiotherapy, imaging, travel health or whatever you offer, each on its own page in plain language, reviewed and approved by your team.",
    },
    {
      title: "New-patient information",
      body: "What to bring, how registration works, which languages your team speaks, parking and accessibility, answered on one page your front desk can point to.",
    },
    {
      title: "Accessible by design",
      body: "Readable text, strong contrast, keyboard-friendly navigation and labelled forms, built toward WCAG 2.0 AA, the standard AODA uses in Ontario.",
      href: "/blog/aoda-website-compliance",
    },
    {
      title: "Careful contact forms",
      body: "Forms limited to the details needed to call a patient back, with a clear note not to send health information through them. You decide what the clinic collects.",
    },
    {
      title: "Healthcare SEO",
      body: "With an SEO plan: Google Business Profile set-up for each location, medical-clinic structured data, service pages built for local searches and monthly reporting.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Health and wellness sites in our portfolio", href: "/portfolio" },
    { label: "Read: AODA website compliance in Ontario", href: "/blog/aoda-website-compliance" },
    { label: "Web design for dentists", href: "/web-design-for-dentists" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Can the website connect to our booking or EMR system?",
      a: "Often, yes. Where your booking or virtual-care platform offers a booking link or web widget, we place it on the site. We do not connect forms directly to patient records; booking runs through the system you already use.",
    },
    {
      q: "Who writes the service pages?",
      a: "We draft them from what you tell us, in plain language, and your team reviews and approves every page before it goes live. We describe what you offer and how to access it, and we do not make claims about outcomes.",
    },
    {
      q: "Can you show patient reviews on the site?",
      a: "Only where your regulator permits it. Some physician colleges restrict testimonials in advertising, so we check what applies to your practice and leave reviews off where they are not allowed.",
    },
    {
      q: "Have you built healthcare websites before?",
      a: "Yes. Health and wellness is a large part of our portfolio, including Oshawa Ultrasound and Cloud Pharmacy. You can see them on our portfolio page.",
    },
    {
      q: "What does a clinic website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
