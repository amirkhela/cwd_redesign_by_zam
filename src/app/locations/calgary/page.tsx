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

const TITLE = "Web Design Calgary | Fixed-Price Websites | Canadian Web Designs";
const DESCRIPTION = `Calgary web design at fixed prices from ${basicPrice}. WordPress, Shopify and local SEO for Calgary and Alberta businesses, built by a Canadian team you talk to directly.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/locations/calgary" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://canadianwebdesigns.ca/locations/calgary",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Web design in Calgary, Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does website design cost in Calgary?",
    a: `Our website packages are fixed-price: ${basicPrice} for a basic 3-page site, ${startupPrice} for a WordPress site you can edit yourself and ${proPrice} for a 15-page site with booking and payments. Online stores start at ${storePrice}. Prices are in Canadian dollars. For an Alberta business we add 5% GST, not HST. Hosting and domain are separate.`,
  },
  {
    q: "Do you have an office in Calgary?",
    a: "No. Our offices are in Toronto and Brampton, and we work with Calgary businesses by phone and video call. You still talk to the person building your site, you see the design before anything goes live, and you sign off on each step.",
  },
  {
    q: "What about the time difference?",
    a: "We are open Monday to Friday, 8 am to 6 pm Eastern time, which is 6 am to 4 pm in Calgary. Most clients book calls in their morning. Email and form messages are answered the same business day.",
  },
  {
    q: "How long does a Calgary website take to build?",
    a: "A standard business website usually takes 3 to 4 weeks from the first call to launch. Online stores and sites with booking or custom features usually take 5 to 8 weeks. We agree on the timeline before we start.",
  },
  {
    q: "Do you build websites for trades, construction and energy services?",
    a: "Yes. For contractors, trades and field service companies we focus on clear service pages, project photos, quote and job application forms, and a phone number that is one tap away on a job site.",
  },
  {
    q: "Can my site show up for Calgary and the rest of Alberta?",
    a: "Yes. We can set up a main Calgary page plus pages for the other places you serve, such as Airdrie, Cochrane, Okotoks or Edmonton, each with real details about the work you do there. For ongoing ranking work, see our Calgary SEO service.",
  },
  {
    q: "Will I own my website?",
    a: "Yes. When the site is paid for, the website, the content and the domain are yours. If you ever move to another company, we hand everything over.",
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
  "@id": `https://${config.domain}/locations/calgary#service`,
  name: "Web Design in Calgary, AB",
  serviceType: "Web design",
  description:
    "Fixed-price website design for Calgary and Alberta businesses, delivered remotely by Canadian Web Designs.",
  url: `https://${config.domain}/locations/calgary`,
  provider: { "@id": `https://${config.domain}/#organization` },
  areaServed: {
    "@type": "City",
    name: "Calgary",
    containedInPlace: { "@type": "AdministrativeArea", name: "AB" },
  },
};

const CALGARY_AREAS = [
  "Downtown Calgary", "Beltline", "Kensington", "Inglewood",
  "Mission", "Bridgeland", "Marda Loop", "East Village",
  "Crowfoot", "Seton", "Airdrie", "Cochrane", "Okotoks",
];

const CALGARY_NEEDS = [
  {
    icon: "🛠️",
    title: "Trades, Construction and Field Services",
    body: "Calgary has a large building, renovation and energy services sector. These sites need service pages, project galleries, quote forms and job application forms that work on a phone.",
  },
  {
    icon: "🏔️",
    title: "Reaching Customers Across Alberta",
    body: "Many Calgary businesses also serve Airdrie, Cochrane, Okotoks or Edmonton. We give each area its own page with real details, so Google can match the right page to the right search.",
  },
  {
    icon: "🧾",
    title: "Clear Prices and Quote Requests",
    body: "Customers want to know what something costs or how to get a quote fast. We put prices or a short quote form on the pages people actually land on.",
  },
  {
    icon: "📱",
    title: "Built for Phones First",
    body: "Most local searches happen on a phone. Every site is designed for a small screen first, with fast pages and buttons that are easy to tap.",
  },
  {
    icon: "🎥",
    title: "Working Together Remotely",
    body: "We work with Calgary clients by phone, video call and email. You see the design before it goes live, approve each step, and own the site and domain when it is done.",
  },
];

const CALGARY_SERVICES = [
  {
    title: "Custom Web Design Calgary",
    desc: "Custom, mobile-first websites for Calgary businesses, designed around the calls, bookings and quote requests you want.",
    href: "/services/web-design-development",
  },
  {
    title: "WordPress Websites",
    desc: "A WordPress site you can update yourself, with training at handover so your team can add pages and posts.",
    href: "/services/wordpress-website-design",
  },
  {
    title: "Shopify and Online Stores",
    desc: "Shopify and WooCommerce stores for Calgary retailers and brands, with payments, shipping and GST set up.",
    href: "/services/shopify-website-design",
  },
  {
    title: "Websites for Contractors",
    desc: "Service pages, project galleries and quote forms for Calgary builders, renovators and trades.",
    href: "/web-design-for-contractors",
  },
  {
    title: "Websites for Realtors",
    desc: "Listing-friendly sites for Calgary agents and brokerages, with neighbourhood pages and lead forms.",
    href: "/web-design-for-realtors",
  },
  {
    title: "Calgary SEO",
    desc: "Ongoing local SEO, Google Business Profile work and monthly ranking reports for Calgary businesses.",
    href: "/seo/calgary",
  },
];

export default function CalgaryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Locations", href: "/locations/toronto" },
          { name: "Calgary", href: "/locations/calgary" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/web-design-company.png"
          alt="Web design in Calgary"
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
                Web Design in Calgary{" "}
                <span className="gradient-text-animated">at a Fixed Price</span>
              </h1>

              <p className="hero-fade-up-2 text-xl text-white/65 leading-relaxed mb-4 max-w-2xl">
                We build websites for Calgary businesses at prices agreed before we start, from a {basicPrice} starter site to full online stores. You work directly with the people building your site, by phone and video call.
              </p>
              <p className="hero-fade-up-2 text-base text-white/50 leading-relaxed mb-8 max-w-2xl">
                Serving Downtown Calgary, the Beltline, Kensington, Inglewood, Airdrie, Cochrane, Okotoks and the rest of Alberta.
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
                  href="#how-we-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
                >
                  How We Work With Calgary
                </a>
              </div>

              <div className="hero-fade-up-4 flex flex-wrap gap-8">
                {[
                  { value: reviewCountPlus(config.reviewCount), label: "Google Reviews" },
                  { value: String(config.founded ?? 2014), label: "In Business Since" },
                  { value: basicPrice, label: "Packages From (CAD)" },
                  { value: "6 am-4 pm", label: "Calgary time, Mon-Fri" },
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
              <HeroQuoteForm source="location-calgary" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK WITH CALGARY ─── */}
      <section id="how-we-work" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              Building a Calgary Website Without the Runaround
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "1", t: "Call or Send the Form", d: "Tell us what your business does and what you want the site to do. We reply the same business day." },
              { n: "2", t: "Fixed Quote and Free Mockup", d: "You get a fixed price and a design mockup of your home page before you pay anything." },
              { n: "3", t: "Build and Review", d: "We build the site and walk you through it on a video call. You ask for changes before launch." },
              { n: "4", t: "Launch and Hand Over", d: "We launch, connect Google tools and hand over the logins. The site and domain are yours." },
            ].map((s, i) => (
              <div
                key={s.n}
                className="p-6 rounded-2xl border border-gray-100 reveal"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-black"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  {s.n}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2">{s.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <GoogleReviews />

      {/* ─── WHAT CALGARY CLIENTS USUALLY NEED ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Website Design in Calgary
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                What Calgary Businesses Usually Need From a Website
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Calgary&apos;s business mix is broad. Energy and field services companies work out of the industrial parks in the southeast. Builders, renovators and trades follow the new communities on the edges of the city. Restaurants, shops and clinics serve the Beltline, Kensington, Inglewood and Marda Loop.
                </p>
                <p>
                  Most of these businesses do not need a big, complicated website. They need a clear one: what you do, where you work, what it costs or how to get a quote, and a phone number that is easy to tap. That is what we build, and the price is agreed before we start.
                </p>
                <p>
                  Many Calgary companies also work outside the city, in Airdrie, Cochrane, Okotoks or further across Alberta. If that is you, we can add a page for each area you serve, written with real details, so customers there find the right page.
                </p>
                <p>
                  Once the site is live, our{" "}
                  <Link href="/seo/calgary" className="text-[#00AADF] font-semibold hover:underline">Calgary SEO service</Link>{" "}
                  covers the ongoing work: your Google Business Profile, local listings and a ranking report every month. You can also{" "}
                  <Link href="/web-design-packages" className="text-[#00AADF] font-semibold hover:underline">compare every website package</Link>{" "}
                  or look through our{" "}
                  <Link href="/portfolio" className="text-[#00AADF] font-semibold hover:underline">recent work</Link>.
                </p>
              </div>
            </div>

            <div className="reveal delay-2 space-y-5">
              {CALGARY_NEEDS.map((item) => (
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

      {/* ─── SERVICES FOR CALGARY ─── */}
      <section className="py-16 relative" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Calgary Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Website Design Services for Calgary Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CALGARY_SERVICES.map((s, i) => (
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
      <WebDesignPackages city="Calgary" />

      {/* ─── AREAS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Across Calgary
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                Calgary Areas and Nearby Towns We Serve
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  We work with businesses in every part of Calgary, from the offices downtown and in the Beltline to the shops of Kensington and Inglewood and the newer communities like Seton and Crowfoot.
                </p>
                <p>
                  We also build for businesses in the towns around the city. If you serve Airdrie, Cochrane or Okotoks as well as Calgary, each can have its own page on your site.
                </p>
              </div>
            </div>

            <div className="reveal delay-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CALGARY_AREAS.map((n) => (
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
            <h2 className="text-3xl font-black text-gray-900">Common Questions from Calgary Businesses</h2>
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
          <p className="text-center text-sm text-gray-500 mb-6">Also serving Western Canada:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Edmonton", slug: "edmonton" },
              { name: "Vancouver", slug: "vancouver" },
              { name: "Surrey", slug: "surrey" },
              { name: "Burnaby", slug: "burnaby" },
              { name: "Victoria", slug: "victoria" },
              { name: "Toronto", slug: "toronto" },
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
            Need a Website for Your Calgary Business?{" "}
            <span className="gradient-text-animated">Let&apos;s Talk.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Tell us what your business does and we&apos;ll send a fixed quote and a free mockup of your home page. Call or send the form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link
              href="/free-website-mockup"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
            >
              Get Your Free Calgary Mockup
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

      <QuoteFormSection source="location-calgary" mobileOnly />
    </>
  );
}
