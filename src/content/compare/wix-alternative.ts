import type { Comparison } from "./types";

/**
 * /wix-alternative -- for the Canadian business that wants to own its website.
 *
 * Every statement about Wix on this page is taken from a wix.com help-center
 * article, linked in `sources` and re-checked on `reviewedOn`. Nothing here
 * says Wix is "bad for SEO" and nothing quotes a Wix price: their pricing
 * pages are region-detected and a CAD figure copied today may not be what a
 * reader sees tomorrow. Where we build on Wix ourselves, the page says so.
 */
export const WIX_ALTERNATIVE: Comparison = {
  kind: "compare",
  slug: "wix-alternative",
  usLabel: "Canadian Web Designs",
  themLabel: "Wix",
  h1: "A Wix alternative for Canadian businesses that want to own their website",
  metaTitle: "Wix Alternative for Canadian Businesses | Own Your Website | Canadian Web Designs",
  metaDescription:
    "Looking for a Wix alternative in Canada? Compare a custom-built site you own outright with a Wix site, using Wix's own help pages as the source. Honest rows, no scare tactics.",
  intro:
    "Wix is a reasonable way to get a first website up, and we build on it for clients who ask us to. This page is for the business owner who has outgrown that stage and wants a site they own outright: the files, the hosting, the domain and the freedom to move it. Every row about Wix below links to the Wix help article it came from, so you can check it yourself.",
  rows: [
    {
      feature: "Where your site lives",
      us: "On hosting you choose, under your own account. You hold the files and the database, and you can move them to any host at any time.",
      them: "Wix's help page on exporting says that, because Wix is a SaaS solution, your site must run on Wix's servers.",
      win: true,
      source: { label: "Wix Help Center: Exporting or Embedding Your Wix Site Elsewhere", url: "https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere", checkedOn: "2026-09-13" },
    },
    {
      feature: "Someone else's branding on your site",
      us: "None. No banner, no badge, no third-party favicon, on any plan, ever.",
      them: "Wix's help page says a free site includes a Wix banner ad at the top and a Wix favicon in the browser tab, and that removing them requires upgrading to a Premium plan that includes those features.",
      win: true,
      source: { label: "Wix Help Center: Removing the Wix Banner Ad and Favicon", url: "https://support.wix.com/en/article/removing-the-wix-banner-ad-and-favicon", checkedOn: "2026-09-13" },
    },
    {
      feature: "Handing the site over when you sell the business",
      us: "The site is an asset like any other: you hand over the code, the hosting login and the domain. Nothing about it is tied to our account.",
      them: "Wix's help page says you can transfer ownership of a premium site to another Wix account, and lists things that cannot be transferred with it, such as Wix Payments accounts.",
      source: { label: "Wix Help Center: Transferring a Premium Site to Another Wix Account", url: "https://support.wix.com/en/article/transferring-a-premium-site-to-another-wix-account", checkedOn: "2026-09-13" },
    },
    {
      feature: "Who does the work",
      us: "We do. Design, build, copy, images, on-page SEO and launch, with you reviewing at each step.",
      them: "Do-it-yourself in the Wix editor, or hire a designer. We build on Wix too, if that is the right fit for you.",
    },
    {
      feature: "Design and functionality",
      us: "Custom design and custom code. If your business needs something a template does not do, we build it.",
      them: "What you can change depends on the plan and editor you pick. Check Wix's own feature pages for what your plan includes.",
    },
    {
      feature: "Search engine set-up",
      us: "Title tags, structured data, sitemap, Search Console and Google Business Profile set-up are part of every build, not an add-on.",
      them: "Any platform can rank when the SEO work is actually done. The question is who does that work and whether it is included.",
    },
    {
      feature: "Price",
      us: "Custom websites from $299, quoted in full before we start, with no percentage mark-ups. Maintenance plans from $99 a month.",
      them: "Not listed here. Wix's pricing is shown by region on wix.com; check there for current pricing in Canadian dollars.",
    },
  ],
  reasons: [
    {
      title: "You own it outright",
      body: "When the project is done, the site is yours in every sense: the code, the content, the hosting account and the domain. You can hire any developer, change hosts or take it in-house, and nothing stops working because a subscription lapsed.",
    },
    {
      title: "One team does the whole job",
      body: "You are not choosing a template and hoping. Our in-house team designs, writes, builds and launches the site, then sets up the search and analytics tools around it. You review, we revise, and you get a site built for how your customers actually search.",
    },
    {
      title: "Built for Canadian search",
      body: "We serve businesses across Canada and build for the searches they win: city and neighbourhood pages, Google Business Profile set-up, and content written in Canadian English for Canadian customers.",
    },
  ],
  faqs: [
    {
      q: "Is Wix a bad choice?",
      a: "No. Wix is a sound way to get a first website live without hiring anyone, and we build on Wix for clients who prefer it. This page is for a business that has reached the point where owning the site, moving it freely and having custom work done matters more than the do-it-yourself editor.",
    },
    {
      q: "Can you move my existing Wix site to a site I own?",
      a: "We rebuild it rather than move it. Wix's own help page says a Wix site must run on Wix's servers, so there is no export of the site itself. What we do is copy your content and images across, rebuild the design (or improve it), and redirect every old URL to its new home so the search rankings you have earned are kept.",
    },
    {
      q: "Do you build on Wix as well?",
      a: "Yes. If Wix is the right fit for your budget or the way you want to work, we design and build on it. See our Wix website design service. We would rather you pick the platform that suits you than pick us for the wrong reasons.",
    },
    {
      q: "Can I keep my domain name?",
      a: "Yes. A domain registered anywhere can be pointed at the new site. If it is registered through Wix, Wix's help centre covers transferring it out; we handle the DNS side and the redirects.",
    },
    {
      q: "What does a custom website cost compared with Wix?",
      a: "Our custom websites start at $299, quoted in full before work begins, and maintenance plans start at $99 a month. We do not quote Wix's prices here because their pricing pages are shown by region and change over time; check wix.com for current Canadian pricing and compare it against a written quote from us.",
    },
  ],
  disclaimer:
    "Wix is a trademark of Wix.com Ltd. Canadian Web Designs is not affiliated with, endorsed by or sponsored by Wix.com Ltd. Statements about Wix on this page are drawn from Wix's own public help pages, linked below, and were last re-checked on the date shown. If a linked page has changed, the row it supports is out of date, not the other way round.",
  reviewedOn: "2026-09-13",
  sources: [
    { label: "Wix Help Center: Exporting or Embedding Your Wix Site Elsewhere", url: "https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere", checkedOn: "2026-09-13" },
    { label: "Wix Help Center: Removing the Wix Banner Ad and Favicon", url: "https://support.wix.com/en/article/removing-the-wix-banner-ad-and-favicon", checkedOn: "2026-09-13" },
    { label: "Wix Help Center: Transferring a Premium Site to Another Wix Account", url: "https://support.wix.com/en/article/transferring-a-premium-site-to-another-wix-account", checkedOn: "2026-09-13" },
  ],
  related: ["squarespace-alternative"],
};
