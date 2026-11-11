import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import Image from "next/image";
import { getConfig, reviewCountPlus } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebDesignPackages from "@/components/WebDesignPackages";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Design Surrey BC | Custom Websites | Canadian Web Designs" },
  description:
    "Custom web design for Surrey BC businesses in Newton, Cloverdale, Guildford and South Surrey. Mobile-first websites with booking and quote forms. Free quote.",
  alternates: { canonical: "/locations/surrey" },
  openGraph: {
    title: "Web Design Surrey BC | Custom Websites | Canadian Web Designs",
    description:
      `Custom web design in Surrey BC. ${reviewCountPlus(config.reviewCount)} Google reviews. Mobile-first websites for businesses from Newton to South Surrey.`,
    url: "https://canadianwebdesigns.ca/locations/surrey",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Web Design Surrey BC, Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How much does a website cost for a Surrey BC business?",
    a: "Our packages start at $299 for a basic 3-page site, $449 for a WordPress site you can edit yourself and $699 for a 15-page site with booking and payments. Online stores start at $899. All prices are in Canadian dollars, and every site includes mobile optimization, on-page SEO basics and Google Analytics setup.",
  },
  {
    q: "How long does it take to build a website for a Surrey business?",
    a: "A standard business website usually takes 3 to 4 weeks from the first call to launch. Online stores and sites with booking systems or custom features usually take 5 to 8 weeks. We agree on the timeline before we start.",
  },
  {
    q: "Do you build websites for Surrey trades and contractors?",
    a: "Yes, trades and construction are among our most common Surrey clients. We build fast, mobile-first sites with click-to-call buttons, quote request forms, service-area pages for Newton, Cloverdale and South Surrey, and a project gallery so customers can see your work.",
  },
  {
    q: "Can you redesign my existing Surrey website without losing my Google rankings?",
    a: "Yes. Before launch we map every old page to its new address and set up redirects, keep the titles and content that already rank, and check the new site in Google Search Console after it goes live.",
  },
  {
    q: "Can I meet with you if I'm in Surrey?",
    a: "Our team is based in Toronto, so Surrey projects run over video calls and a private preview link. You see the site on your own phone and computer as it's built, and you can ask for changes before anything goes public.",
  },
  {
    q: "Do you also offer SEO for Surrey businesses?",
    a: "Yes. Every website we build has on-page SEO basics included. For ongoing work such as Google Business Profile, local citations and monthly ranking reports, see our Surrey SEO service page.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  // A Service provided BY the one org, not a second LocalBusiness for the
  // same company at the same address. See locations/[city]/page.tsx for the
  // full reasoning; business-level facts (address, phone, email, hours,
  // rating) live on the org node in layout.tsx and are inherited by @id.
  "@type": "Service",
  serviceType: "Web design",
  "@id": "https://canadianwebdesigns.ca/locations/surrey#service",
  provider: { "@id": `https://${config.domain}/#organization` },
  name: "Canadian Web Designs, Web Design Surrey BC",
  description: "Custom web design for businesses in Surrey, BC: mobile-first websites, online stores, booking and quote forms.",
  url: "https://canadianwebdesigns.ca/locations/surrey",
  areaServed: [
    { "@type": "City", name: "Surrey", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "Place", name: "Newton, Surrey BC" },
    { "@type": "Place", name: "Guildford, Surrey BC" },
    { "@type": "Place", name: "Cloverdale, Surrey BC" },
    { "@type": "Place", name: "South Surrey, BC" },
    { "@type": "Place", name: "Whalley, Surrey BC" },
    { "@type": "Place", name: "Fleetwood, Surrey BC" },
  ],
};

const services = [
  { title: "Web Design Surrey", desc: "Custom, mobile-first websites for Surrey businesses, designed around the calls, bookings and quote requests you want from Newton to South Surrey.", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" },
  { title: "Website Redesign", desc: "Replace a dated site without losing what already works. We keep your ranking pages, redirect old addresses and rebuild the rest.", icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" },
  { title: "eCommerce Web Design", desc: "WooCommerce and Shopify stores for Surrey retailers and product businesses, with GST/PST, shipping and local pickup set up.", icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.696 2.075-3.27 2.454-4.568.048-.168.073-.34.073-.518a2.25 2.25 0 00-2.25-2.25h-2.25" },
  { title: "Booking & Quote Forms", desc: "Online booking for clinics and salons, and quote request forms for trades, sent straight to your inbox or phone.", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { title: "Logo & Brand Design", desc: "Starting fresh? Our graphic designers can create your logo, colours and brand look so the Surrey site launches with a consistent identity.", icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.428-3.42" },
  { title: "Website Maintenance", desc: "Updates, backups, security checks and small content changes each month, so your Surrey site stays fast after launch.", icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" },
];

const process = [
  { step: "01", title: "Free call", desc: "A video call about your Surrey business, your customers and your current site. You get a written scope and a fixed quote in CAD." },
  { step: "02", title: "Design & copy", desc: "We design the pages and write the copy around your services and the Surrey neighbourhoods you serve." },
  { step: "03", title: "Preview & changes", desc: "You review the site on a private preview link from your phone and computer, and ask for changes before launch." },
  { step: "04", title: "Launch & support", desc: "We launch, connect Google Analytics and Search Console, and stay on for updates and maintenance." },
];

const neighbourhoods = ["Newton", "Guildford", "Cloverdale", "South Surrey", "Whalley", "Fleetwood", "White Rock", "Morgan Creek", "Ocean Park", "Semiahmoo"];
const industries = ["Real Estate & Mortgage", "Construction & Trades", "Healthcare & Clinics", "Law Firms", "Restaurants & Catering", "Retail & Services", "Auto & Mechanical", "Professional Services"];

export default function SurreyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", href: "/locations/toronto" }, { name: "Surrey BC", href: "/locations/surrey" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/web-design-company.png" alt="Web design for Surrey BC businesses" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Surrey, BC · {reviewCountPlus(config.reviewCount)} Google Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Web Design Surrey BC for{" "}<span className="gradient-text-animated">Local Businesses</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Custom, mobile-first websites that turn Surrey visitors into calls, bookings and quote requests. No lock-in contracts.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${config.phone}`}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {config.phone}
              </a>
              <Link href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                View Our Work
              </Link>
            </div>
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {[`${reviewCountPlus(config.reviewCount)} Google Reviews`, "Newton to South Surrey", "Prices in CAD"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="location-surrey" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Do in Surrey</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Design Services for Surrey Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Websites, stores and forms built for how Surrey customers find and contact a local business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div key={s.title} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {[{ value: reviewCountPlus(config.reviewCount), label: "Google Reviews" }, { value: "3–4", label: "Weeks to Launch" }, { value: "$299", label: "Packages From (CAD)" }, { value: "0", label: "Lock-In Contracts" }].map((s) => (
                <div key={s.label}><p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p><p className="text-gray-500 text-sm">{s.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ABOUT SURREY */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Web Design in Surrey BC</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>Why Surrey Businesses Need a Stronger Online Presence</h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Surrey is one of BC&apos;s largest and fastest-growing cities. From the industrial corridors of Newton and Whalley to the residential streets of South Surrey and White Rock, its businesses cover real estate, construction, healthcare, legal services, food and hospitality, retail and professional services, and each of them needs a website that works as hard as they do.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Surrey customers search on their phones, often for something close by: a dentist in Fleetwood, a contractor in Cloverdale, a restaurant in Guildford. A Surrey business website has to load quickly on mobile, show which neighbourhoods you serve, and make calling or booking a one-tap job. Many local sites still don&apos;t, which makes a well-built site stand out.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Canadian Web Designs builds Surrey websites around those details: service-area pages for Newton, Guildford, Cloverdale, South Surrey and Fleetwood, click-to-call and quote forms, and online booking where it fits. If you also want ongoing rankings work, our{" "}
                <Link href="/seo/surrey" className="text-[#00AADF] font-semibold hover:underline">Surrey SEO service</Link>{" "}
                picks up where the website leaves off.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                A Cloverdale contractor needs a project gallery and a quote form. A South Surrey realtor needs listings that look sharp on a phone. A Newton clinic needs online booking, and a Guildford shop needs opening hours and directions up front. We build each Surrey site around the one thing its customers came to do.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Surrey Neighbourhoods We Serve</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>{n}</span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Industries We Serve in Surrey</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 mb-5" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Surrey Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "Surrey is one of BC's largest and fastest-growing cities, with demand across trades, healthcare, real estate and retail",
                    "Mobile-first builds with click-to-call and quote forms, made for customers searching on their phones",
                    "Logo and brand design available if you're starting a new Surrey business",
                    "South Surrey and White Rock buyers expect a polished, professional website",
                    "Newton and Whalley have many trade and service businesses that win work from local searches",
                    "Surrey-specific pages for your neighbourhoods and services, not a generic BC template",
                  ].map((fact, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Get Your Free Surrey Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-3">Contact Us</p>
                <a href="tel:6476896069" className="flex items-center gap-2 text-gray-900 font-black text-lg hover:text-[#00AADF] transition-colors mb-2">(647) 689-6069</a>
                <p className="text-gray-500 text-sm mb-1">info@canadianwebdesigns.ca</p>
                <p className="text-gray-500 text-sm">Mon–Fri: 8:00 AM – 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Build Surrey Websites</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">Four steps, all online, with a project lead you can call directly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-black mb-4" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.step}</div>
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <WebDesignPackages city="Surrey" />

      {/* SEO HANDOFF */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
          <p className="text-gray-600 text-base leading-relaxed">
            Looking for Google rankings, Google Business Profile work or monthly reports for your Surrey business? That&apos;s our{" "}
            <Link href="/seo/surrey" className="text-[#00AADF] font-semibold hover:underline">Surrey SEO service</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Web Design Surrey BC: Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CITIES */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Also serving across Metro Vancouver and Canada:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/toronto" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>Web Design Toronto ↗</Link>
            {[{ name: "Burnaby", slug: "burnaby" }, { name: "Vancouver", slug: "vancouver" }, { name: "Victoria", slug: "victoria" }, { name: "Calgary", slug: "calgary" }, { name: "Winnipeg", slug: "winnipeg" }, { name: "Ottawa", slug: "ottawa" }].map((c) => (
              <Link key={c.slug} href={`/locations/${c.slug}`} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{c.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/seo-services-london-ontario.png" alt="Grow your Surrey BC business with a new website" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Grow Your{" "}<span className="gradient-text-animated">Surrey Business Online?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">Free consultation, no commitment. We&apos;ll look at your current site and show you what we&apos;d build for your Surrey business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Surrey Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <a href="tel:6476896069" className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              (647) 689-6069
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <QuoteFormSection source="location-surrey" mobileOnly />
    </>
  );
}
