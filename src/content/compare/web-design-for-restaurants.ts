import type { IndustryPage } from "./types";

/**
 * /web-design-for-restaurants -- the sales page for the blog post
 * content/blog/restaurant-web-design.md.
 *
 * Targets "restaurant website design", "web design for restaurants" and
 * "restaurant seo" (SE Ranking CA, 2026-10-19). Ordering and reservation
 * platforms are named only as things we connect to, never compared.
 *
 * Rules that bind this copy: no invented results or cover counts, client names
 * only where the site is in src/components/PortfolioGrid.tsx, and the FAQs are
 * this page's own.
 */
export const WEB_DESIGN_FOR_RESTAURANTS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-restaurants",
  audience: "Restaurants",
  audienceSingular: "restaurant",
  hubBlurb: "Menus that load on a phone, reservations, online ordering and local SEO for restaurants, cafes and lounges.",
  h1: "Restaurant web design: a website that fills tables",
  metaTitle: "Restaurant Website Design Canada | Canadian Web Designs",
  metaDescription:
    "Restaurant websites in Canada: a menu that reads well on a phone, reservations, online ordering, current hours and local SEO. From $299.",
  intro:
    "Most people looking at a restaurant website are standing on a sidewalk or sitting on a couch with a phone, and they want four answers: what is on the menu, what it costs, are you open, and can I book or order right now. We build restaurant websites that answer all four in the first few seconds: a real menu page instead of a PDF, reservations and ordering one tap away, and hours that match your Google listing. Websites start at $299.",
  painPoints: [
    {
      title: "The menu is a PDF",
      body: "A PDF menu is slow on a phone, hard to read without zooming, and invisible to Google. A diner searching for a dish you serve never finds out you serve it.",
    },
    {
      title: "Booking means a phone call",
      body: "Many diners decide where to eat late in the evening, after you are busy or closed. If they cannot reserve or order online, they pick a place that lets them.",
    },
    {
      title: "Hours that do not match Google",
      body: "Holiday hours on the website, different hours on Google, a third set on a delivery app. One wasted trip to a locked door costs you that customer for good.",
    },
    {
      title: "Not showing up for \"near me\"",
      body: "People search \"restaurants near me\" or a dish plus their neighbourhood. Without local SEO and a complete Google Business Profile, a busier listing down the street takes those diners.",
    },
  ],
  whatYouGet: [
    {
      title: "A menu built for phones",
      body: "Your menu as a real web page with sections, prices and dietary notes, fast on mobile and readable by Google. You can update a price or a special yourself in minutes.",
      href: "/services/web-design-development",
    },
    {
      title: "Reservations and ordering one tap away",
      body: "We connect the booking and ordering tools you already use, such as OpenTable, Resy, Toast, Square or your own delivery partners, with a clear button on every page.",
    },
    {
      title: "Photos that make people hungry",
      body: "Your food, your room and your team instead of stock photos. We plan a short shot list with you so the site shows the place a diner is about to walk into.",
    },
    {
      title: "Hours, location and parking up front",
      body: "Hours, holiday changes, address, a map, parking and accessibility details on every page footer, kept in step with your Google Business Profile.",
    },
    {
      title: "Events, catering and private dining",
      body: "Separate pages and enquiry forms for private bookings, catering and events, so larger and more valuable requests reach you with the details you need to quote.",
    },
    {
      title: "Restaurant SEO",
      body: "With an SEO plan: Google Business Profile set-up and posting, menu and restaurant structured data, review management and consistent listings across the sites diners check.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Read: restaurant web design, what gets tables booked", href: "/blog/restaurant-web-design" },
    { label: "Food and beverage sites in our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Can I update the menu and prices myself?",
      a: "Yes. The menu is built as editable sections, so changing a price, adding a special or marking an item sold out takes a couple of minutes from a phone or laptop. We show you how at launch.",
    },
    {
      q: "Can you connect our reservation or ordering system?",
      a: "In most cases, yes. If your reservation or ordering platform offers a booking widget or an ordering link, we place it on the site with a clear button on every page. We confirm which tools you use before quoting.",
    },
    {
      q: "Do we need online ordering on our own site if we are on delivery apps?",
      a: "Not always, but it helps. Delivery apps are where people browse; your own site is where regulars go to order directly. We can link to both, or add direct ordering through your point-of-sale provider where it offers one.",
    },
    {
      q: "Can one website cover several locations?",
      a: "Yes. Each location gets its own page with its own menu differences, hours, address and booking link, under one brand, so each one can be found on its own local searches.",
    },
    {
      q: "What does a restaurant website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, maintenance plans start at $99 a month, and SEO plans start at $250 a month. The site, the photos and the domain are yours.",
    },
  ],
  reviewedOn: "2026-10-19",
};
