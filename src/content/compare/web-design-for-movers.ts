import type { IndustryPage } from "./types";

/**
 * /web-design-for-movers -- moving companies.
 *
 * Added on the owner's call (2026-10-19) even though CA search data for
 * "moving company website design" is thin: it is a market we sell into, and
 * the portfolio has transportation sites (src/components/PortfolioGrid.tsx).
 *
 * Rules that bind this copy: no invented results or move numbers, and client
 * names only where the site is in the portfolio.
 */
export const WEB_DESIGN_FOR_MOVERS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-movers",
  audience: "Movers",
  audienceSingular: "moving company",
  hubBlurb: "Moving quote forms, local and long-distance pages, trust signals and local SEO for moving companies.",
  h1: "Web design for moving companies that wins quotes",
  metaTitle: "Moving Company Website Design | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian moving companies: a quote form on every page, local and long-distance moves, insurance up front and local SEO. From $299.",
  intro:
    "People hiring movers are trusting a stranger with everything they own, usually on a tight deadline. They want a fast quote, proof you are insured and careful, and a clear idea of how pricing works. We build moving company websites around that: a quote form on every page, a page for each type of move and each area you serve, and your insurance, reviews and real truck and crew photos where nervous customers look for them. Websites start at $299.",
  painPoints: [
    {
      title: "A slow or confusing quote process",
      body: "Customers request quotes from several movers at once. The company that makes it quick to describe the move and replies first usually wins the job.",
    },
    {
      title: "Customers worried about scams",
      body: "Moving scams make people cautious. A site with no address, no insurance details and no real photos of trucks and crew looks risky, even when you are not.",
    },
    {
      title: "Local and long-distance on one page",
      body: "A small apartment move across town and a family moving across provinces need different information. One generic page serves neither well.",
    },
    {
      title: "Paying for leads that go to five movers",
      body: "Lead sites sell the same customer to several companies. Ranking for moving searches in your own area brings people who came to you first.",
    },
  ],
  whatYouGet: [
    {
      title: "Moving quote form on every page",
      body: "A short form for moving from, moving to, date, home size and special items, sent instantly to your phone so you can reply while the customer is still comparing.",
      href: "/services/web-design-development",
    },
    {
      title: "A page for each type of move",
      body: "Local, long-distance, apartment and condo, office and commercial, packing, storage and specialty items such as pianos, each on its own page.",
    },
    {
      title: "Trust signals up front",
      body: "Your real address, cargo and liability insurance, WSIB, how pricing works, and real photos of your trucks and crew, shown clearly on every page.",
    },
    {
      title: "Pricing explained plainly",
      body: "How you charge, hourly or flat rate, what is included and what adds cost, so customers trust the quote and fewer moves end in surprises.",
    },
    {
      title: "Service-area pages",
      body: "A page for each city and region you serve and for your common long-distance routes, so you can be found across your whole territory.",
      href: "/seo",
    },
    {
      title: "Local SEO for movers",
      body: "With an SEO plan: Google Business Profile set-up and posting, review requests after each move, consistent listings and monthly reporting.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Transportation sites in our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Local SEO by city", href: "/seo" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Have you built websites for transportation companies?",
      a: "Yes. Transportation is part of our portfolio, including Transnet Canada and Worldwide White Glove. You can see them on our portfolio page.",
    },
    {
      q: "Can customers get an instant price online?",
      a: "We can build a quote calculator that gives a price range from the home size, distance and date, or a detailed quote form that you price yourself. Many movers start with the form and add a calculator later.",
    },
    {
      q: "Can the site connect to our moving software?",
      a: "Often, yes. Where your moving or CRM software accepts web leads, we connect the quote form to it so every request lands in one place.",
    },
    {
      q: "Do you build pages for long-distance routes?",
      a: "Yes. A page for each common route, such as a city to city move you do often, helps you rank for those searches and answers the questions long-distance customers ask.",
    },
    {
      q: "What does a moving company website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, maintenance plans start at $99 a month, and SEO plans start at $250 a month. The site and the domain are yours.",
    },
  ],
  reviewedOn: "2026-10-19",
};
