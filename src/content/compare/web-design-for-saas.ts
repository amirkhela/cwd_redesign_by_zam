import type { IndustryPage } from "./types";

/**
 * /web-design-for-saas -- SaaS companies and startups.
 *
 * Targets "saas website design" (70/mo) and "saas seo" (50/mo), plus "web
 * design for startups" (SE Ranking CA, 2026-10-19). Links to the app
 * development service, which is where a startup building a product lands.
 *
 * Rules that bind this copy: no invented results, conversion rates or growth
 * numbers, and tools are named only as things we connect to.
 */
export const WEB_DESIGN_FOR_SAAS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-saas",
  audience: "SaaS & Startups",
  audienceSingular: "SaaS or startup",
  hubBlurb: "Product pages, pricing pages, demo and trial sign-ups, docs and SaaS SEO for software companies and startups.",
  h1: "SaaS website design and SaaS SEO for startups",
  metaTitle: "SaaS & Startup Website Design | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian SaaS companies and startups: clear product and pricing pages, demo and trial sign-ups, fast load times and SaaS SEO. From $299.",
  intro:
    "A software buyer gives your website a few seconds to answer what the product does, who it is for, what it costs and how to try it. We build SaaS and startup websites that answer those questions plainly: a clear product story, a pricing page people understand, a demo or free-trial sign-up on every page, and content built to rank for the problems your customers search for. Websites start at $299.",
  painPoints: [
    {
      title: "Visitors cannot tell what you do",
      body: "Vague headlines and abstract graphics leave buyers guessing. If someone cannot explain your product after the first screen, they leave before they reach the demo button.",
    },
    {
      title: "Pricing that raises more questions",
      body: "A confusing pricing page, or no pricing at all, slows deals down. Buyers want to see plans, limits and what happens after the trial before they sign up.",
    },
    {
      title: "A site only developers can change",
      body: "When every headline change waits for an engineer, marketing stops testing. Founders and marketers need to edit pages themselves.",
    },
    {
      title: "No organic traffic",
      body: "Paid ads get expensive fast. Without pages and articles that rank for the problems your product solves, every new user costs money.",
    },
  ],
  whatYouGet: [
    {
      title: "Product and feature pages",
      body: "A clear home page that says what the product does and for whom, with feature, use-case and integration pages that answer buyers' real questions.",
      href: "/services/web-design-development",
    },
    {
      title: "A pricing page people understand",
      body: "Plans, limits, a comparison table and FAQs laid out plainly, with the sign-up or contact-sales button right where a buyer decides.",
    },
    {
      title: "Demo and trial sign-ups",
      body: "Demo booking and free-trial sign-ups on every page, connected to the tools you use, such as HubSpot, Calendly or your own app's sign-up flow.",
    },
    {
      title: "Fast and easy to edit",
      body: "Fast load times, clean code and a content system your team can update without an engineer, so you can change messaging as the product changes.",
    },
    {
      title: "Product and web app development",
      body: "If you are still building the product, our team also builds web and mobile apps, so the marketing site and the app can come from one team.",
      href: "/services/app-development",
    },
    {
      title: "SaaS SEO",
      body: "With an SEO plan: keyword research around the problems you solve, comparison and use-case pages, technical SEO and monthly reporting on sign-ups from search.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Our portfolio", href: "/portfolio" },
    { label: "App development", href: "/services/app-development" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Can you build our app as well as the marketing site?",
      a: "Yes. We build web and mobile applications as well as websites. Many startups have us build the marketing site first and the product after, or both together.",
    },
    {
      q: "What does SaaS SEO include?",
      a: "Our SEO plans start at $250 a month. For software companies that means research into what your buyers search for, use-case and comparison pages, articles, technical fixes and reporting on sign-ups and demos from search.",
    },
    {
      q: "Can the site connect to our CRM and analytics?",
      a: "Yes. We connect forms and sign-ups to tools such as HubSpot or Salesforce and set up analytics events for demo requests and trial sign-ups, so you can see which pages bring in users.",
    },
    {
      q: "We are pre-launch. Can you build a landing page first?",
      a: "Yes. A single landing page with a waitlist sign-up is a common starting point. We build it so it can grow into the full site after launch without starting over.",
    },
    {
      q: "What does a SaaS website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. Most SaaS sites sit in our larger packages because of the number of pages. The site, the code and the domain are yours.",
    },
  ],
  reviewedOn: "2026-10-19",
};
