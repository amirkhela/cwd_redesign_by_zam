import MockupHeroOffer from "@/components/MockupHeroOffer";
import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebDesignPackages from "@/components/WebDesignPackages";
import GoogleReviews from "@/components/GoogleReviews";
import { getConfig, reviewCountPlus } from "@/lib/client-config";
import { WEBSITE_PACKAGES } from "@/lib/packages";

const config = getConfig();
const office = config.addresses.brampton;
const telHref = `tel:${config.phone}`;
const phoneLabel = "(647) 689-6069";

// Prices come from the one package ladder, so this page never drifts from
// /web-design-packages.
const priceOf = (name: string, fallback: string) =>
  WEBSITE_PACKAGES.find((p) => p.name === name)?.price ?? fallback;
const basicPrice = priceOf("Basic Website", "$299");
const startupPrice = priceOf("Startup Website", "$449");
const proPrice = priceOf("Professional Website", "$699");
const storePrice = priceOf("Startup Ecommerce", "$899");

const MAPS_PROFILE = "https://maps.google.com/?cid=3493474530954667891";
const MAPS_EMBED =
  "https://www.google.com/maps?q=5+Cherrycrest+Drive,+Brampton,+ON&output=embed";

const TITLE = "Web Design Brampton | Local Office on Cherrycrest Drive | Canadian Web Designs";
const DESCRIPTION = `Brampton web design from our office at 5 Cherrycrest Drive. Fixed-price websites from ${basicPrice}, WordPress, Shopify and local SEO for Brampton businesses.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/locations/brampton" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://canadianwebdesigns.ca/locations/brampton",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Web design in Brampton, Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does website design cost in Brampton?",
    a: `Our website packages are fixed-price: ${basicPrice} for a basic 3-page site, ${startupPrice} for a WordPress site you can edit yourself and ${proPrice} for a 15-page site with booking and payments. Online stores start at ${storePrice}. All prices are in Canadian dollars plus HST, and hosting and domain are separate.`,
  },
  {
    q: "Where is your Brampton office?",
    a: `Our Brampton office is at ${office.street}, ${office.city}, ${office.province} ${office.postalCode}. We are open Monday to Friday, 8 am to 6 pm. Please call ${phoneLabel} to book a time before you visit, so the right person is there to meet you.`,
  },
  {
    q: "Can I meet my web designer in person in Brampton?",
    a: "Yes. You can book a meeting at our Cherrycrest Drive office, or we can do everything by phone and video call if that is easier. Either way, you talk to the person building your site.",
  },
  {
    q: "How long does a Brampton website take to build?",
    a: "A standard business website usually takes 3 to 4 weeks from the first call to launch. Online stores and sites with booking or custom features usually take 5 to 8 weeks. We agree on the timeline before we start.",
  },
  {
    q: "Do you build websites in more than one language?",
    a: "Yes. Many Brampton businesses serve customers in Punjabi, Hindi, Urdu and other languages as well as English. We can build your site with pages in more than one language, each with its own address so Google can show the right one. You supply or approve the translated wording.",
  },
  {
    q: "Do you build websites for trucking, trades and logistics companies?",
    a: "Yes. A lot of Brampton businesses are carriers, freight brokers, contractors and trades. For these we focus on clear service pages, quote and driver application forms, and click-to-call buttons that work well on a phone.",
  },
  {
    q: "Will my business show up on Google Maps in Brampton?",
    a: "Every website we build includes on-page SEO basics: a clear title for each page, your address and phone number in the right places, and a fast mobile layout. For ongoing work on your Google Business Profile and map rankings, see our Brampton SEO service.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${config.domain}/locations/brampton#service`,
  name: "Web Design in Brampton, ON",
  serviceType: "Web design",
  description:
    "Fixed-price website design for Brampton businesses, from the Canadian Web Designs office on Cherrycrest Drive.",
  url: `https://${config.domain}/locations/brampton`,
  provider: { "@id": `https://${config.domain}/#organization` },
  areaServed: {
    "@type": "City",
    name: "Brampton",
    containedInPlace: { "@type": "AdministrativeArea", name: "ON" },
  },
};

const BRAMPTON_AREAS = [
  "Downtown Brampton", "Bramalea", "Heart Lake", "Springdale",
  "Castlemore", "Bram East", "Bram West", "Mount Pleasant",
  "Fletcher's Meadow", "Sandalwood", "Peel Village", "Gore Meadows",
];

const BRAMPTON_NEEDS = [
  {
    icon: "🌐",
    title: "Pages in More Than One Language",
    body: "Brampton customers often search and read in Punjabi, Hindi or Urdu as well as English. We can add language versions of your key pages, each on its own address.",
  },
  {
    icon: "🚚",
    title: "Trucking, Logistics and Trades Sites",
    body: "Carriers, freight brokers and contractors need quote forms, driver or job application forms and a phone number that is one tap away. We build these in from the start.",
  },
  {
    icon: "📍",
    title: "Showing Up on Google Maps",
    body: "Most local searches end on the map. We set up your address, phone number, service areas and page titles so Google can match your site to your Business Profile.",
  },
  {
    icon: "📱",
    title: "Built for Phones First",
    body: "Most local searches happen on a phone. Every site is designed for a small screen first, with fast pages and buttons that are easy to tap.",
  },
  {
    icon: "🤝",
    title: "A Local Team You Can Meet",
    body: "You can sit down with us at our Cherrycrest Drive office, or work with us by phone and video. You own your website and your domain when it is done.",
  },
];

const BRAMPTON_SERVICES = [
  {
    title: "Custom Web Design Brampton",
    desc: "Custom, mobile-first websites for Brampton businesses, designed around the calls, bookings and quote requests you want.",
    href: "/services/web-design-development",
  },
  {
    title: "WordPress Websites",
    desc: "A WordPress site you can update yourself, with training at handover so your team can add pages and posts.",
    href: "/services/wordpress-website-design",
  },
  {
    title: "Shopify and Online Stores",
    desc: "Shopify and WooCommerce stores for Brampton retailers and food brands, with payments, shipping and HST set up.",
    href: "/services/shopify-website-design",
  },
  {
    title: "Websites for Contractors",
    desc: "Service pages, project galleries and quote forms for Brampton builders, renovators and trades.",
    href: "/web-design-for-contractors",
  },
  {
    title: "Websites for Clinics",
    desc: "Clear service pages and online booking for Brampton medical, dental and wellness clinics.",
    href: "/web-design-for-medical-clinics",
  },
  {
    title: "Brampton SEO",
    desc: "Ongoing local SEO, Google Business Profile work and monthly ranking reports for Brampton businesses.",
    href: "/seo/brampton",
  },
];

export default function BramptonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Locations", href: "/locations/toronto" },
          { name: "Brampton", href: "/locations/brampton" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/web-design-company.png"
          alt="Web design in Brampton"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.96) 0%, rgba(1,12,30,0.87) 50%, rgba(1,12,30,0.78) 100%)" }}
        />
        <div
          className="absolute top-0 left-[8%] w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.24 }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <MockupHeroOffer className="!mt-0 !mb-6" />

              <h1
                className="hero-fade-up-1 font-black text-white mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.05 }}
              >
                Web Design in Brampton{" "}
                <span className="gradient-text-animated">From a Local Office</span>
              </h1>

              <p className="hero-fade-up-2 text-xl text-white/65 leading-relaxed mb-4 max-w-2xl">
                Canadian Web Designs has a Brampton office at 5 Cherrycrest Drive, Unit 202. We build websites for Brampton businesses at fixed prices, from a {basicPrice} starter site to full online stores, and can meet you in person.
              </p>
              <p className="hero-fade-up-2 text-base text-white/50 leading-relaxed mb-8 max-w-2xl">
                Serving Downtown Brampton, Bramalea, Springdale, Castlemore, Heart Lake and the rest of Peel Region.
              </p>

              <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={telHref}
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                  style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {phoneLabel}
                </a>
                <a
                  href="#brampton-office"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
                >
                  Find Our Brampton Office
                </a>
              </div>

              <div className="hero-fade-up-4 flex flex-wrap gap-8">
                {[
                  { value: reviewCountPlus(config.reviewCount), label: "Google Reviews" },
                  { value: String(config.founded ?? 2014), label: "In Business Since" },
                  { value: basicPrice, label: "Packages From (CAD)" },
                  { value: "Mon-Fri", label: "Open 8 am to 6 pm" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-white">{s.value}</p>
                    <p className="text-white/40 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="location-brampton" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAMPTON OFFICE ─── */}
      <section id="brampton-office" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Our Brampton Office
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                A Brampton Web Design Company You Can Visit
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Brampton office is on Cherrycrest Drive in the east end of the city. If you would rather talk through your website across a table than over email, book a time and come in. Bring your logo, your photos and a list of the services you want customers to find.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <h3 className="font-black text-gray-900 text-base mb-2">Address</h3>
                  <address className="not-italic text-gray-600 text-sm leading-relaxed">
                    {config.businessName}<br />
                    {office.street}<br />
                    {office.city}, {office.province} {office.postalCode}
                  </address>
                </div>
                <div className="p-5 rounded-2xl border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <h3 className="font-black text-gray-900 text-base mb-2">Hours</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Monday to Friday: 8 am to 6 pm<br />
                    Saturday and Sunday: closed<br />
                    Visits by appointment
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <h3 className="font-black text-gray-900 text-base mb-2">Phone</h3>
                  <a href={telHref} className="text-[#00AADF] font-bold text-sm hover:underline">{phoneLabel}</a>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">Call to book a meeting or ask for a quote.</p>
                </div>
                <div className="p-5 rounded-2xl border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <h3 className="font-black text-gray-900 text-base mb-2">Directions</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Open the map for turn-by-turn directions from anywhere in Brampton.
                  </p>
                  <a
                    href={MAPS_PROFILE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-[#00AADF] font-bold text-sm hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
              >
                Book a Meeting in Brampton
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="reveal delay-2">
              <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <iframe
                  src={MAPS_EMBED}
                  title="Map of the Canadian Web Designs office at 5 Cherrycrest Drive, Brampton"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <GoogleReviews />

      {/* ─── WHAT BRAMPTON CLIENTS USUALLY NEED ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Website Design in Brampton
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                What Brampton Businesses Usually Need From a Website
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Brampton is one of the largest and fastest-growing cities in Canada, and its business mix is its own. Trucking and logistics companies sit near the 410 and 407. Clinics, restaurants, salons and shops serve neighbourhoods like Springdale, Bramalea and Mount Pleasant. Contractors and trades work across all of Peel Region.
                </p>
                <p>
                  These businesses rarely need a big, complicated website. They need a clear one: what you do, where you work, what it costs or how to get a quote, and a phone number that is easy to tap. That is what we build, and the price is agreed before we start.
                </p>
                <p>
                  Many of our Brampton clients also serve customers in more than one language. If that is you, we can add Punjabi, Hindi or Urdu versions of your main pages so customers can read about your services in the language they are most comfortable with.
                </p>
                <p>
                  Once the site is live, our{" "}
                  <Link href="/seo/brampton" className="text-[#00AADF] font-semibold hover:underline">Brampton SEO service</Link>{" "}
                  covers the ongoing work: your Google Business Profile, local listings and a ranking report every month. You can also{" "}
                  <Link href="/web-design-packages" className="text-[#00AADF] font-semibold hover:underline">compare every website package</Link>{" "}
                  or look through our{" "}
                  <Link href="/portfolio" className="text-[#00AADF] font-semibold hover:underline">recent work</Link>.
                </p>
              </div>
            </div>

            <div className="reveal delay-2 space-y-5">
              {BRAMPTON_NEEDS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#00AADF]/30 hover:shadow-md transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES FOR BRAMPTON ─── */}
      <section className="py-16 relative" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Brampton Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Website Design Services for Brampton Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRAMPTON_SERVICES.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300 block"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <WebDesignPackages city="Brampton" />

      {/* ─── AREAS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Across Brampton
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                Brampton Neighbourhoods We Work In
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  We work with businesses in every part of Brampton, from the shops and offices around Downtown Brampton and Queen Street to the plazas of Springdale and Castlemore and the industrial units in Bram West.
                </p>
                <p>
                  If you serve more than one part of the city, we can build a page for each area, with your real service details, so a customer in Heart Lake or Mount Pleasant lands on the page written for them.
                </p>
              </div>
            </div>

            <div className="reveal delay-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {BRAMPTON_AREAS.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
                    style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Common Questions from Brampton Businesses</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED CITIES ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6">Also serving the rest of the Greater Toronto Area:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Toronto", slug: "toronto" },
              { name: "Mississauga", slug: "mississauga" },
              { name: "Vaughan", slug: "vaughan" },
              { name: "North York", slug: "north-york" },
              { name: "Richmond Hill", slug: "richmond-hill" },
              { name: "Hamilton", slug: "hamilton" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200"
              >
                Web Design {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div
          className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.28 }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-black text-white mb-6 reveal"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Need a Website for Your Brampton Business?{" "}
            <span className="gradient-text-animated">Let&apos;s Talk.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Tell us what your business does and we&apos;ll send a fixed quote. Call, send the form, or book a time at our Cherrycrest Drive office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
            >
              Get Your Free Brampton Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300"
            >
              {phoneLabel}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10 reveal delay-3">
            {["Fixed, upfront pricing", "No long-term contracts", "Prices in CAD"].map((t) => (
              <span key={t} className="text-white/40 text-sm flex items-center gap-2">
                <span className="text-[#00AADF]">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <QuoteFormSection source="location-brampton" mobileOnly />
    </>
  );
}
