import type { IndustryPage } from "./types";

/**
 * /web-design-for-nonprofits -- non-profits, registered charities and faith
 * communities.
 *
 * Targets "nonprofit website design", "web design for nonprofits" and "church
 * website" (SE Ranking CA, 2026-10-19). GSC shows the site at position 1 for
 * "top web design companies for non profits in canada" with no page to rank.
 *
 * Rules that bind this copy: no invented results or donation numbers, no claim
 * of a non-profit discount (none is published), and payment platforms are named
 * only as things we connect to.
 */
export const WEB_DESIGN_FOR_NONPROFITS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-nonprofits",
  audience: "Non-Profits",
  audienceSingular: "non-profit",
  hubBlurb: "Donations, volunteer sign-ups, events and accessible pages for charities, non-profits, churches and mosques.",
  h1: "Web design for non-profits, charities and churches",
  metaTitle: "Non-Profit & Charity Web Design | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian non-profits, charities and churches: online donations, volunteer sign-ups, events and accessible design. From $299.",
  intro:
    "A non-profit website has more jobs than most: raise money, recruit volunteers, promote events, and show funders and the public the difference you make, often with a small team and no web person on staff. We build websites for non-profits, charities and faith communities that make giving and getting involved easy, and that your staff or volunteers can keep up to date themselves. Websites start at $299.",
  painPoints: [
    {
      title: "Donating takes too many steps",
      body: "Every extra click between \"I want to help\" and a finished donation loses supporters. A donate button that leads to a confusing third-party page costs you gifts.",
    },
    {
      title: "Nobody on staff can update it",
      body: "Events from last year, an old board list, a closed program still on the menu. When only a past volunteer knew how to edit the site, it quietly goes out of date.",
    },
    {
      title: "Your impact is not on the page",
      body: "Funders, donors and new volunteers want to see what you actually do. A site with a mission statement and no stories, photos or results gives them little reason to act.",
    },
    {
      title: "Hard to use for the people you serve",
      body: "Many non-profits serve seniors, newcomers or people with disabilities. Small text, low contrast and forms that do not work with a screen reader shut them out.",
    },
  ],
  whatYouGet: [
    {
      title: "Donations in a few clicks",
      body: "A donate button on every page connected to the platform you use, such as CanadaHelps, Zeffy, PayPal or Stripe, with monthly giving and your charitable registration number shown clearly.",
      href: "/services/web-design-development",
    },
    {
      title: "Volunteer and member sign-ups",
      body: "Simple forms for volunteers, members and newsletter subscribers that reach the right person on your team or flow into your mailing list.",
    },
    {
      title: "Events and services calendar",
      body: "Upcoming events, fundraisers, services or prayer times on a calendar your team updates in minutes, with registration or ticketing where you need it.",
    },
    {
      title: "Impact stories and reports",
      body: "A clear place for program pages, stories, photos and annual reports, so donors and funders can see the work their support makes possible.",
    },
    {
      title: "Easy for your team to edit",
      body: "Built on WordPress so staff and volunteers can update pages, events and news without code. We train your team at launch and leave a short guide.",
      href: "/services/wordpress-website-design",
    },
    {
      title: "Accessible by design",
      body: "Readable text, strong contrast and keyboard-friendly, labelled forms, built toward WCAG 2.0 AA, the standard AODA uses in Ontario.",
      href: "/blog/aoda-website-compliance",
    },
  ],
  proofLinks: [
    { label: "Education and non-profit sites in our portfolio", href: "/portfolio" },
    { label: "Read: AODA website compliance in Ontario", href: "/blog/aoda-website-compliance" },
    { label: "WordPress website design", href: "/services/wordpress-website-design" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Which donation platforms can you connect?",
      a: "Most of the ones Canadian non-profits use, including CanadaHelps, Zeffy, PayPal, Stripe and Donorbox. If you issue tax receipts through one of them already, we keep that in place and make the path to it shorter.",
    },
    {
      q: "Do you build websites for churches and mosques too?",
      a: "Yes. Faith communities get the same features with their own needs in mind: service and prayer times, sermons or talks, events, groups, online giving and a welcome page for newcomers.",
    },
    {
      q: "Can our volunteers update the website?",
      a: "Yes. We build on WordPress with simple editing, give each person their own login, and train your team at launch so anyone can post an event or update a page.",
    },
    {
      q: "Have you worked with non-profits before?",
      a: "Yes. Education and non-profit organizations are part of our portfolio, including Girl Impact. You can see them on our portfolio page.",
    },
    {
      q: "What does a non-profit website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the content and the domain belong to your organization.",
    },
  ],
  reviewedOn: "2026-10-19",
};
