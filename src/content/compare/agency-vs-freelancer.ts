import type { Comparison } from "./types";

/**
 * /agency-vs-freelancer -- hiring a web design agency like us, a freelancer, or
 * a Fiverr gig.
 *
 * Two kinds of row, and the page must keep them apart:
 *
 *  - A row about FIVERR states only what a help.fiverr.com article says, and
 *    carries that article as its `source`.
 *  - A row about FREELANCERS IN GENERAL makes no factual claim at all. There is
 *    no source that speaks for every freelancer, so those cells say what to ask,
 *    never what a freelancer is like.
 *
 * Fiverr's fee is quoted as its help page writes it, "$3.50" and "$200" with no
 * currency named, and the page says so rather than guessing one. No gig prices
 * are quoted: each seller sets their own.
 *
 * help.fiverr.com refuses the refresh job's plain HTTP client (403), so every
 * source is registered `manual` in BST_VID_MAKER's money-pages registry.
 */
export const AGENCY_VS_FREELANCER: Comparison = {
  kind: "compare",
  slug: "agency-vs-freelancer",
  usLabel: "Canadian Web Designs",
  themLabel: "Freelancer or Fiverr",
  navLabel: "Agency vs freelancer",
  h1: "Web design agency or freelancer? An honest comparison for Canadian businesses",
  metaTitle: "Web Design Agency vs Freelancer or Fiverr | Canadian Web Designs",
  metaDescription:
    "Should you hire a web design agency, a freelancer or a Fiverr gig? An honest comparison for Canadian businesses, sourced from Fiverr's own help pages, including when a freelancer is the better pick.",
  intro:
    "Plenty of good websites are built by freelancers, and a Fiverr gig can be the right call for a small, clear job. An agency is not always needed. This page sets out the trade-offs plainly so you can pick what fits. Every row about Fiverr links to the Fiverr help article it came from. Rows about freelancers in general make no claim about any one person.",
  rows: [
    {
      feature: "Who does the work",
      us: "Our in-house team covers design, build, copy and on-page SEO, so the project does not stall if one person is away.",
      them: "Usually one person, sometimes with help they bring in. A skilled freelancer can do excellent work; ask who will do each part.",
      win: true,
    },
    {
      feature: "What you pay on top",
      us: "Our written quote lists the full project price before work begins.",
      them: "Fiverr's help page says it adds a service fee at checkout: 5.5% of the purchase amount, plus $3.50 on orders under $200 (amounts as written on Fiverr's page). Each payment, such as an extra or a tip, carries its own fee.",
      source: { label: "Fiverr Help Center: Paying for orders, extras, or custom offers", url: "https://help.fiverr.com/hc/en-us/articles/37332672658193-Paying-for-orders-extras-or-custom-offers", checkedOn: "2026-10-15" },
    },
    {
      feature: "Reviewing the work",
      us: "You review the site as it is built and ask for changes before launch.",
      them: "Fiverr's help page says that after a delivery you have three days to accept it, ask for a revision or extend the review time, and the order completes automatically if you do nothing.",
      source: { label: "Fiverr Help Center: The complete guide to your Fiverr order", url: "https://help.fiverr.com/hc/en-us/articles/37332473202065-The-complete-guide-to-your-Fiverr-order-Statuses-and-process", checkedOn: "2026-10-15" },
    },
    {
      feature: "If things go wrong",
      us: "You deal with us directly, by phone or email. Refund requests are looked at case by case, based on the work done and the stage of the project.",
      them: "Fiverr's help page says you can ask to cancel an active order in its Resolution Center. The freelancer has 48 hours to accept or decline, and the order is cancelled automatically if they do not respond.",
      source: { label: "Fiverr Help Center: How cancellations work for clients", url: "https://help.fiverr.com/hc/en-us/articles/12864193979793-How-cancellations-work-for-clients", checkedOn: "2026-10-15" },
    },
    {
      feature: "A guarantee for bigger projects",
      us: "No platform in the middle: the written quote and our refund policy are between you and us.",
      them: "Fiverr's help page says Fiverr Pro managed services come with a money-back satisfaction guarantee on eligible orders, if you ask within 14 days of the order being completed.",
      source: { label: "Fiverr Help Center: How cancellations work for clients", url: "https://help.fiverr.com/hc/en-us/articles/12864193979793-How-cancellations-work-for-clients", checkedOn: "2026-10-15" },
    },
    {
      feature: "After launch",
      us: "Maintenance plans from $99 a month cover updates, daily backups and uptime monitoring. We also maintain sites built by other developers.",
      them: "It depends on the person. Before you hire, ask who will update the site a year from now and what that costs.",
      win: true,
    },
    {
      feature: "Price",
      us: "$299 for a 2–3 page website and $599 for up to 12 pages, quoted in full before work begins.",
      them: "Fiverr's help page says freelancers set their own Gig or hourly prices, so compare written quotes for the same scope.",
      source: { label: "Fiverr Help Center: Price upfront", url: "https://help.fiverr.com/hc/en-us/articles/44500911930129-Price-upfront-Clear-and-predictable-pricing", checkedOn: "2026-10-15" },
    },
  ],
  reasons: [
    {
      title: "A team, not one person",
      body: "Design, writing, SEO set-up and support sit with different people on one in-house team. Your project keeps moving through holidays, sick days and busy weeks.",
    },
    {
      title: "Everything in one written quote",
      body: "Pages, copy, on-page SEO and launch are scoped and priced before we start, so you can compare us line by line with any freelancer's quote.",
    },
    {
      title: "Still here after launch",
      body: "A website needs updates, backups and the odd change for years. Maintenance plans start at $99 a month, from the team that built the site.",
    },
  ],
  faqs: [
    {
      q: "Is a freelancer cheaper than an agency?",
      a: "Often, but not always. Each freelancer sets their own price. Compare written quotes for the same scope: how many pages, who writes the copy, what SEO set-up is included and what happens after launch. On Fiverr, also allow for the service fee its help page describes.",
    },
    {
      q: "Can I hire a web designer on Fiverr?",
      a: "Yes. Fiverr's help pages explain how orders, revisions and cancellations work, and Fiverr Pro adds a money-back satisfaction guarantee on eligible orders. Read the seller's past work and reviews, and agree the scope in writing before you order.",
    },
    {
      q: "What does an agency do that a freelancer can't?",
      a: "A good freelancer can do all of it. The difference is cover and continuity: with an agency, design, writing, SEO and support do not depend on one person's calendar.",
    },
    {
      q: "Can you take over a site a freelancer built?",
      a: "Yes. We maintain websites built by other agencies and developers. We start with a full audit of the site to find any security or speed problems, then quote to maintain, improve or rebuild it.",
    },
    {
      q: "What does Canadian Web Designs charge?",
      a: "$299 for a 2–3 page website and $599 for up to 12 pages, quoted in full before work begins. Maintenance plans start at $99 a month.",
    },
  ],
  disclaimer:
    "Fiverr is a trademark of Fiverr International Ltd. Canadian Web Designs is not affiliated with, endorsed by or sponsored by Fiverr International Ltd. Statements about Fiverr on this page are drawn from Fiverr's own public help pages, linked below, and were last re-checked on the date shown. Statements about freelancers in general describe what to ask, not what any one freelancer offers. If a linked page has changed, the row it supports is out of date, not the other way round.",
  reviewedOn: "2026-10-15",
  sources: [
    { label: "Fiverr Help Center: Paying for orders, extras, or custom offers", url: "https://help.fiverr.com/hc/en-us/articles/37332672658193-Paying-for-orders-extras-or-custom-offers", checkedOn: "2026-10-15" },
    { label: "Fiverr Help Center: The complete guide to your Fiverr order", url: "https://help.fiverr.com/hc/en-us/articles/37332473202065-The-complete-guide-to-your-Fiverr-order-Statuses-and-process", checkedOn: "2026-10-15" },
    { label: "Fiverr Help Center: How cancellations work for clients", url: "https://help.fiverr.com/hc/en-us/articles/12864193979793-How-cancellations-work-for-clients", checkedOn: "2026-10-15" },
    { label: "Fiverr Help Center: Price upfront", url: "https://help.fiverr.com/hc/en-us/articles/44500911930129-Price-upfront-Clear-and-predictable-pricing", checkedOn: "2026-10-15" },
  ],
  related: ["godaddy-website-builder-alternative", "wix-alternative", "squarespace-alternative"],
};
