import type { IndustryPage } from "./types";

/**
 * /web-design-for-salons -- hair salons, barbershops, spas and beauty studios.
 *
 * Added on the owner's call (2026-10-19) even though CA search data for "salon
 * website design" is thin: it is a market we sell into, and the portfolio has
 * spa and barber sites (src/components/PortfolioGrid.tsx).
 *
 * Rules that bind this copy: no invented results or booking numbers, no
 * treatment or health claims for spa services, and booking platforms are named
 * only as things we connect to.
 */
export const WEB_DESIGN_FOR_SALONS: IndustryPage = {
  kind: "industry",
  slug: "web-design-for-salons",
  audience: "Salons & Spas",
  audienceSingular: "salon or spa",
  hubBlurb: "Online booking, a service menu with prices, stylist profiles and galleries for salons, barbers and spas.",
  h1: "Salon and spa web design with online booking",
  metaTitle: "Salon & Spa Website Design | Canadian Web Designs",
  metaDescription:
    "Websites for Canadian hair salons, barbershops and spas: online booking, a priced service menu, stylist profiles, a gallery and local SEO. From $299.",
  intro:
    "Clients choose a salon or spa with their eyes and book with their thumbs, usually late in the evening. We build salon and spa websites that show your work at its best and let a new client book in a few taps: online booking on every page, a clear service menu with prices, a profile for each stylist or therapist, and a gallery that looks as good as your Instagram. Websites start at $299.",
  painPoints: [
    {
      title: "Booking means a phone call or a DM",
      body: "Clients who want to book at 11 p.m. will not call, and a DM can sit unanswered for hours. If they cannot pick a time online, they book somewhere that lets them.",
    },
    {
      title: "No prices on the website",
      body: "A service list with no prices makes new clients nervous. Many leave to find a salon that shows what a cut, colour or facial costs before they book.",
    },
    {
      title: "Your best work lives only on Instagram",
      body: "Instagram is great for followers but poor for people searching Google for a salon near them. Your website should show the same work and rank for it.",
    },
    {
      title: "Lost in \"near me\" searches",
      body: "Most salon and spa searches are local and on a phone. Without local SEO and a complete Google listing, a nearby competitor with more reviews gets the booking.",
    },
  ],
  whatYouGet: [
    {
      title: "Online booking on every page",
      body: "A Book Now button in the header and on every service, connected to the booking tool you already use, such as Fresha, Vagaro, Square Appointments, Booksy or GlossGenius.",
      href: "/services/web-design-development",
    },
    {
      title: "A service menu with prices",
      body: "Every service with its price or starting price, duration and a short description, organized the way clients think: cuts, colour, nails, facials, massage.",
    },
    {
      title: "Stylist and therapist profiles",
      body: "A profile for each team member with their specialties, photos of their work and a direct booking link, so clients can book the person they want.",
    },
    {
      title: "A gallery and your Instagram",
      body: "A fast, mobile-friendly gallery of your work and a live feed from your Instagram, so the site stays fresh without extra effort.",
    },
    {
      title: "Gift cards and products",
      body: "Sell gift cards online and, if you like, the retail products you carry, with in-salon pickup or delivery.",
      href: "/ecommerce-website-design-toronto",
    },
    {
      title: "Local SEO for salons and spas",
      body: "With an SEO plan: Google Business Profile set-up and posting, review requests, consistent listings and pages built for the services clients search for in your area.",
      href: "/services/seo",
    },
  ],
  proofLinks: [
    { label: "Health, beauty and wellness sites in our portfolio", href: "/portfolio" },
    { label: "Google reviews, quoted word for word", href: "/reviews" },
    { label: "Ecommerce website design", href: "/ecommerce-website-design-toronto" },
    { label: "SEO packages and prices", href: "/seo-packages" },
    { label: "Website packages and prices", href: "/web-design-packages" },
  ],
  faqs: [
    {
      q: "Can you connect the booking system we already use?",
      a: "In most cases, yes. If your booking platform offers a booking link or widget, we add it to every page and to each stylist profile. If you do not have one yet, we can help you choose one that suits your salon.",
    },
    {
      q: "Do you build websites for barbershops and spas too?",
      a: "Yes. Barbershops, nail studios, lash and brow studios, day spas and massage clinics all use the same core: booking, a priced service menu, team profiles and a gallery. Our portfolio includes Gently Touch Spa and Fade Central.",
    },
    {
      q: "Can I update prices and services myself?",
      a: "Yes. The service menu is built as simple editable sections, so you can change a price or add a service in a couple of minutes. We show you how at launch.",
    },
    {
      q: "Can we sell gift cards online?",
      a: "Yes. Either through the gift card feature in your booking or point-of-sale system, or through a simple online shop on the site. Gift cards are a popular add-on before holidays.",
    },
    {
      q: "What does a salon website cost, and who owns it?",
      a: "Websites start at $299 with a written quote before work begins, and maintenance plans start at $99 a month. The site, the photos and the domain are yours, and you can move the site to another host at any time.",
    },
  ],
  reviewedOn: "2026-10-19",
};
