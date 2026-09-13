import type { Comparison } from "./types";

/**
 * /squarespace-alternative -- for the Canadian business that wants to own its
 * website. Same rules as wix-alternative.ts: every statement about Squarespace
 * comes from a support.squarespace.com article linked in `sources`, no prices
 * are quoted for Squarespace, and nothing claims it is "bad for SEO".
 */
export const SQUARESPACE_ALTERNATIVE: Comparison = {
  kind: "compare",
  slug: "squarespace-alternative",
  usLabel: "Canadian Web Designs",
  themLabel: "Squarespace",
  h1: "A Squarespace alternative for Canadian businesses that want to own their website",
  metaTitle: "Squarespace Alternative for Canadian Businesses | Own Your Site | Canadian Web Designs",
  metaDescription:
    "Looking for a Squarespace alternative in Canada? Compare a custom site you own outright with a Squarespace site, using Squarespace's own help pages as the source. Honest rows, no scare tactics.",
  intro:
    "Squarespace makes a good-looking first website possible without hiring anyone, and for some businesses that is exactly right. This page is for the owner who wants more: a site they own outright, custom work when the template runs out, and a team doing the building. Every row about Squarespace below links to the Squarespace help article it came from, so you can check it yourself.",
  rows: [
    {
      feature: "Taking your site with you",
      us: "You hold the code, the content and the database. Move to any host, hand it to any developer, at any time.",
      them: "Squarespace's help page says you can export certain content into an .xml file, and that store pages, custom CSS, style settings and several other page types are not included in the export.",
      win: true,
      source: { label: "Squarespace Help Center: Exporting your site", url: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site", checkedOn: "2026-09-13" },
    },
    {
      feature: "Custom code",
      us: "Custom code is how we build. Anything your business needs that a template does not do, we write, and we support it after launch.",
      them: "Squarespace's help page says code injection is available in the Core, Plus, Advanced and some legacy plans, and that custom code modifications fall outside the scope of its support.",
      win: true,
      source: { label: "Squarespace Help Center: Using code injection", url: "https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection", checkedOn: "2026-09-13" },
    },
    {
      feature: "Custom CSS",
      us: "Every line of the stylesheet is ours to change, and changing it is part of the job.",
      them: "Squarespace's help page says the CSS editor is available on all plans, and that adding code to your site is an advanced modification that falls outside the scope of Squarespace support.",
      source: { label: "Squarespace Help Center: Add custom code to your site", url: "https://support.squarespace.com/hc/en-us/articles/205815928-Adding-custom-CSS", checkedOn: "2026-09-13" },
    },
    {
      feature: "Handing the site over when you sell the business",
      us: "The site is an asset like any other: you hand over the code, the hosting login and the domain. Nothing about it depends on our account.",
      them: "Squarespace's help page says only the current site owner can transfer ownership, and that the new owner must first be invited as a contributor and accept.",
      source: { label: "Squarespace Help Center: Change the site owner", url: "https://support.squarespace.com/hc/en-us/articles/206537197-Changing-site-ownership", checkedOn: "2026-09-13" },
    },
    {
      feature: "Who does the work",
      us: "We do. Design, build, copy, images, on-page SEO and launch, with you reviewing at each step.",
      them: "Do-it-yourself in the Squarespace editor, or hire a designer who works in it.",
    },
    {
      feature: "Search engine set-up",
      us: "Title tags, structured data, sitemap, Search Console and Google Business Profile set-up are part of every build, not an add-on.",
      them: "Any platform can rank when the SEO work is actually done. The question is who does that work and whether it is included.",
    },
    {
      feature: "Price",
      us: "Custom websites from $299, quoted in full before we start, with no percentage mark-ups. Maintenance plans from $99 a month.",
      them: "Not listed here. Squarespace's pricing is shown by region on squarespace.com; check there for current pricing in Canadian dollars.",
    },
  ],
  reasons: [
    {
      title: "You own it outright",
      body: "When the project is done, the site is yours in every sense: the code, the content, the hosting account and the domain. You can hire any developer, change hosts or take it in-house, and nothing stops working because a subscription lapsed.",
    },
    {
      title: "Custom work is the job, not an exception",
      body: "A template is a starting point that ends where its options end. Our in-house team writes the code, so a booking flow, a bilingual layout, a product configurator or a client portal is a build, not a workaround.",
    },
    {
      title: "Built for Canadian search",
      body: "We serve businesses across Canada and build for the searches they win: city and neighbourhood pages, Google Business Profile set-up, and content written in Canadian English for Canadian customers. Most of our builds run on WordPress, which we also maintain.",
    },
  ],
  faqs: [
    {
      q: "Is Squarespace a bad choice?",
      a: "No. Squarespace is a well-regarded way to get a polished first website live without a developer, and plenty of good businesses run on it. This page is for a business that has reached the point where owning the site, custom functionality and having the work done for it matter more than the do-it-yourself editor.",
    },
    {
      q: "Can you move my existing Squarespace site to a site I own?",
      a: "Partly by export and partly by rebuild. Squarespace's own help page says its export covers certain content as an .xml file and leaves out store pages, custom CSS and style settings, so we import what exports cleanly, rebuild the rest, and redirect every old URL to its new home to keep the rankings you have earned.",
    },
    {
      q: "What do you build on instead?",
      a: "Most often WordPress, on hosting in your name, because it is open-source, widely supported and easy for any developer to take over. Where a business needs something WordPress does not do well, we build custom. Our Squarespace vs WordPress guide walks through the trade-offs in more detail.",
    },
    {
      q: "Can I keep my domain name?",
      a: "Yes. A domain registered anywhere can be pointed at the new site. If it is registered through Squarespace, their help centre covers transferring it out; we handle the DNS side and the redirects.",
    },
    {
      q: "What does a custom website cost compared with Squarespace?",
      a: "Our custom websites start at $299, quoted in full before work begins, and maintenance plans start at $99 a month. We do not quote Squarespace's prices here because their pricing pages are shown by region and change over time; check squarespace.com for current Canadian pricing and compare it against a written quote from us.",
    },
  ],
  disclaimer:
    "Squarespace is a trademark of Squarespace, Inc. Canadian Web Designs is not affiliated with, endorsed by or sponsored by Squarespace, Inc. Statements about Squarespace on this page are drawn from Squarespace's own public help pages, linked below, and were last re-checked on the date shown. If a linked page has changed, the row it supports is out of date, not the other way round.",
  reviewedOn: "2026-09-13",
  sources: [
    { label: "Squarespace Help Center: Exporting your site", url: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site", checkedOn: "2026-09-13" },
    { label: "Squarespace Help Center: Using code injection", url: "https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection", checkedOn: "2026-09-13" },
    { label: "Squarespace Help Center: Add custom code to your site", url: "https://support.squarespace.com/hc/en-us/articles/205815928-Adding-custom-CSS", checkedOn: "2026-09-13" },
    { label: "Squarespace Help Center: Change the site owner", url: "https://support.squarespace.com/hc/en-us/articles/206537197-Changing-site-ownership", checkedOn: "2026-09-13" },
  ],
  related: ["wix-alternative"],
};
