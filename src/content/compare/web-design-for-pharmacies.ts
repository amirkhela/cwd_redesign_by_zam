import type { IndustryPage } from "./types";

/**
 * /web-design-for-pharmacies -- independent and community pharmacies.
 *
 * Added on the owner's call (2026-10-19) even though CA search data for
 * "pharmacy website design" is thin: we have built one (Cloud Pharmacy, in
 * src/components/PortfolioGrid.tsx) and it is a market we sell into.
 *
 * Rules that bind this copy: no health or drug claims, no invented results.
 * What a pharmacist may do (prescribing, injections) varies by province, so
 * the copy says "where your province allows". Pharmacy regulators restrict
 * testimonials in advertising, so reviews are offered only where permitted.
 */
export const WEB_DESIGN_FOR_PHARMACIES: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-pharmacies",
  audience: "Pharmacies",
  audienceSingular: "pharmacy",
  hubBlurb: "Refill requests, transfers, service pages and local SEO for independent and community pharmacies.",
  h1: "Pharmacy web design for independent pharmacies",
  metaTitle: "Pharmacy Website Design Canada | Canadian Web Designs",
  metaDescription:
    "Websites for independent Canadian pharmacies: refill and transfer requests, a page per service, delivery and hours up front, and local SEO. From $299.",
  intro:
    "An independent pharmacy competes with chains on service, not size, and the website is where that should show. Patients want to request a refill without waiting on hold, transfer a prescription easily, and know whether you offer vaccines, delivery or minor-ailment care. We build pharmacy websites that make those things simple: refill and transfer requests, a clear page for each service, and hours, delivery and location on every page. Websites start at $299.",
  painPoints: [
    {
      title: "Refills only by phone",
      body: "Patients call to request refills while your team is counting and counselling. Every refill request that could have come through a form is a phone call that interrupts the dispensary.",
    },
    {
      title: "Services nobody knows you offer",
      body: "Vaccines, medication reviews, minor-ailment care, compression fittings, compounding, blister packs. If they are not on the website, patients assume you do not offer them.",
    },
    {
      title: "Losing transfers to the chains",
      body: "Moving a prescription feels like a hassle. Without a simple transfer request, a patient who would rather support a local pharmacy stays where they are.",
    },
    {
      title: "Not found for \"pharmacy near me\"",
      body: "Most pharmacy searches are local and on a phone. Without a complete Google listing and local SEO, the chain with a bigger marketing budget shows up first.",
    },
  ],
  whatYouGet: [
    {
      title: "Refill and transfer requests",
      body: "Short refill and transfer request forms that reach the pharmacy, with the fields agreed with your pharmacist and a clear note on what not to send. Where your pharmacy software offers online refills, we link to it instead.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for every service",
      body: "Vaccinations, medication reviews, minor-ailment assessments where your province allows them, travel health, compounding, home delivery and more, each on its own page so patients and Google can find it.",
    },
    {
      title: "Hours, delivery and location everywhere",
      body: "Opening hours, holiday changes, delivery areas, parking and accessibility in the footer of every page, kept in step with your Google Business Profile.",
    },
    {
      title: "Your team, not stock photos",
      body: "Photos of your pharmacists, your counter and your store, so patients see the people who know them by name. That is the advantage a chain cannot copy.",
    },
    {
      title: "Accessible for every patient",
      body: "Large readable text, strong contrast and forms that work with screen readers, built toward WCAG 2.0 AA for older and disabled patients.",
      href: "/blog/aoda-website-compliance",
    },
    {
      title: "Pharmacy SEO",
      body: "With an SEO plan: Google Business Profile set-up and posting, pharmacy structured data, service pages built for local searches and monthly reporting.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Cloud Pharmacy and other health sites in our portfolio", href: "/portfolio" },
    { label: "Web design for medical clinics", href: "/web-design-for-medical-clinics" },
    { label: "Read: AODA website compliance in Ontario", href: "/blog/aoda-website-compliance" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Have you built a pharmacy website before?",
      a: "Yes. We built the website for Cloud Pharmacy, and health and wellness sites are a large part of our portfolio. You can see it on our portfolio page.",
    },
    {
      q: "Can patients request refills online?",
      a: "Yes. Either through a refill request form that reaches your pharmacy, or by linking to the online refill tool your pharmacy software or banner already provides. We agree with your pharmacist what the form asks for before it goes live.",
    },
    {
      q: "Can you show patient reviews on the site?",
      a: "Only where your provincial pharmacy regulator permits it. Some restrict testimonials in pharmacy advertising, so we check what applies and leave reviews off where they are not allowed.",
    },
    {
      q: "Can we sell products online too?",
      a: "Yes, for front-store products that can legally be sold online. We can add a shop with delivery or in-store pickup. Prescription medication is never sold through the shop.",
    },
    {
      q: "What does a pharmacy website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
