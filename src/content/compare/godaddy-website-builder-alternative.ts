import type { Comparison } from "./types";

/**
 * /godaddy-website-builder-alternative -- for the Canadian business that would
 * rather have a team build its website than build it in GoDaddy's AI builder.
 *
 * Every statement about GoDaddy comes from two GoDaddy pages, read on the
 * en-ca site and linked in `sources`. Two honest points the page must keep:
 *
 *  - GoDaddy's builder now lets you download your project's files and code, so
 *    this page does NOT claim you are locked in. The "Taking your site with you"
 *    row is not marked as our pick.
 *  - No GoDaddy price is quoted. Its plan prices are rendered from a pricing
 *    experiment ("Price Lockup" variants in the page data), so a CAD figure
 *    copied today may not be what a reader is shown tomorrow. The free start
 *    (50 AI credits a month) is quoted because it is plain page text.
 *
 * GoDaddy's servers refuse the refresh job's plain HTTP client (403), so both
 * sources are registered `manual` in BST_VID_MAKER's money-pages registry.
 */
export const GODADDY_WEBSITE_BUILDER_ALTERNATIVE: Comparison = {
  kind: "compare",
  slug: "godaddy-website-builder-alternative",
  usLabel: "Canadian Web Designs",
  themLabel: "GoDaddy Website Builder",
  h1: "A GoDaddy Website Builder alternative for Canadian businesses that want the work done for them",
  metaTitle: "GoDaddy Website Builder Alternative in Canada | Canadian Web Designs",
  metaDescription:
    "Compare GoDaddy's AI website builder with a website built for you by a Canadian web design team. Honest rows sourced from GoDaddy's own pages, including when GoDaddy is the better pick.",
  intro:
    "GoDaddy Website Builder is a quick way to get online. You describe your business, its AI lays out a site in minutes, and you can start for free. For many new businesses that is the right first step. This page is for the owner who would rather hand the job to a team: someone to plan the pages, write the words, set up search and look after the site. Every row about GoDaddy below links to the GoDaddy page it came from, so you can check it yourself.",
  rows: [
    {
      feature: "Who builds the site",
      us: "Our in-house team plans the pages, writes the copy, designs and builds the site. You review each step.",
      them: "GoDaddy's website builder page says you describe your idea and its AI generates your website in minutes, with no coding required.",
      win: true,
      source: { label: "GoDaddy: Website Builder (Canada)", url: "https://www.godaddy.com/en-ca/websites/website-builder", checkedOn: "2026-10-15" },
    },
    {
      feature: "Getting started",
      us: "A free consultation and a written quote before any work begins.",
      them: "GoDaddy's page says you can start for free with 50 AI credits a month, and no credit card is required.",
      source: { label: "GoDaddy: Website Builder (Canada)", url: "https://www.godaddy.com/en-ca/websites/website-builder", checkedOn: "2026-10-15" },
    },
    {
      feature: "How you pay",
      us: "One project price, quoted in full before we start. Websites start at $299.",
      them: "GoDaddy's page says each plan includes a set of credits. If you run out, you can buy more or wait for the next cycle, and unused credits do not roll over.",
      win: true,
      source: { label: "GoDaddy: Website Builder (Canada)", url: "https://www.godaddy.com/en-ca/websites/website-builder", checkedOn: "2026-10-15" },
    },
    {
      feature: "Taking your site with you",
      us: "The site, the content and the domain are yours, and you can move the site to another host at any time.",
      them: "GoDaddy's help page says you can download your Airo AI Builder project as a zip file of your files and code, to back it up, edit it locally or re-import it to Airo or other hosting products.",
      source: { label: "GoDaddy Help: Download my Airo AI Builder files and code", url: "https://www.godaddy.com/en-ca/help/download-my-airo-ai-builder-files-and-code-42993", checkedOn: "2026-10-15" },
    },
    {
      feature: "Hosting and launch",
      us: "We launch the site and set up Google Analytics and Search Console for you.",
      them: "GoDaddy's page says it offers one-click deploy on GoDaddy hosting, with SSL, forms and analytics built in.",
      source: { label: "GoDaddy: Website Builder (Canada)", url: "https://www.godaddy.com/en-ca/websites/website-builder", checkedOn: "2026-10-15" },
    },
    {
      feature: "Search engine set-up",
      us: "On-page SEO is built into every site. Our Growth package adds meta titles and descriptions on every page, schema markup and an XML sitemap.",
      them: "GoDaddy's page says all plans come with built-in SEO tools to help your website show up in search engines like Google.",
      source: { label: "GoDaddy: Website Builder (Canada)", url: "https://www.godaddy.com/en-ca/websites/website-builder", checkedOn: "2026-10-15" },
    },
    {
      feature: "Help when you need it",
      us: "You talk to the team that built your site. Maintenance plans from $99 a month cover updates, daily backups and uptime monitoring.",
      them: "GoDaddy's page says it offers 24/7 expert support by phone and chat, and a professional design service for people who would rather have experts build the site.",
      source: { label: "GoDaddy: Website Builder (Canada)", url: "https://www.godaddy.com/en-ca/websites/website-builder", checkedOn: "2026-10-15" },
    },
    {
      feature: "Price",
      us: "$299 for a 2–3 page website and $599 for up to 12 pages, quoted in full before we start.",
      them: "Not listed here. GoDaddy shows its plan prices in Canadian dollars on its own pricing page; check there for the current price.",
    },
  ],
  reasons: [
    {
      title: "One team does the whole job",
      body: "We plan the pages, write the copy, design, build and launch, then set up Analytics and Search Console. You review and approve. You do not have to learn a builder or write a single prompt.",
    },
    {
      title: "One price, agreed up front",
      body: "You get a written quote before work begins, and the price covers the build. There are no credits to keep track of.",
    },
    {
      title: "Built for Canadian search",
      body: "We serve businesses across Canada and write for the way Canadian customers search: clear service pages, city pages where they help, and copy in Canadian English.",
    },
  ],
  faqs: [
    {
      q: "Is GoDaddy Website Builder a bad choice?",
      a: "No. It is a fast way to get a site live, you can start for free, and GoDaddy's page says support is available 24/7 by phone and chat. This page is for the owner who wants the work done for them rather than doing it in a builder.",
    },
    {
      q: "Can you move my GoDaddy site to a site you build?",
      a: "Yes. GoDaddy's help page says an Airo AI Builder project can be downloaded as a zip file of its files and code. We bring your content and images across, rebuild or improve the design, and redirect every old URL to its new page so the search rankings you have earned are kept.",
    },
    {
      q: "Can I keep my domain name?",
      a: "Yes. A domain registered with GoDaddy can be pointed at a new site, and it can stay registered where it is. We handle the DNS side and the redirects.",
    },
    {
      q: "Doesn't GoDaddy also build websites for you?",
      a: "Yes. GoDaddy's page says it offers professional website design services for people who prefer expert help. If you are weighing that against us, ask both for a written quote that lists the pages, who writes the copy and what happens after launch, and compare them line by line.",
    },
    {
      q: "What does a website from Canadian Web Designs cost?",
      a: "$299 for a 2–3 page website and $599 for up to 12 pages, quoted in full before work begins. Maintenance plans start at $99 a month. We do not quote GoDaddy's prices here because the plan prices on its pricing page can change; check godaddy.com for the current Canadian price.",
    },
  ],
  disclaimer:
    "GoDaddy is a registered trademark of GoDaddy Operating Company, LLC. Canadian Web Designs is not affiliated with, endorsed by or sponsored by GoDaddy. Statements about GoDaddy on this page are drawn from GoDaddy's own public pages, linked below, and were last re-checked on the date shown. If a linked page has changed, the row it supports is out of date, not the other way round.",
  reviewedOn: "2026-10-15",
  sources: [
    { label: "GoDaddy: Website Builder (Canada)", url: "https://www.godaddy.com/en-ca/websites/website-builder", checkedOn: "2026-10-15" },
    { label: "GoDaddy Help: Download my Airo AI Builder files and code", url: "https://www.godaddy.com/en-ca/help/download-my-airo-ai-builder-files-and-code-42993", checkedOn: "2026-10-15" },
  ],
  related: ["wix-alternative", "squarespace-alternative", "agency-vs-freelancer"],
};
