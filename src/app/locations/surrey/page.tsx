import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Design Surrey BC | Custom Websites | Canadian Web Designs" },
  description:
    "Surrey BC's top-rated web design agency — Newton, Cloverdale & South Surrey specialists. Custom websites built to rank on Google and win local customers.",
  alternates: { canonical: "/locations/surrey" },
  openGraph: {
    title: "Web Design Surrey BC | Custom Websites | Canadian Web Designs",
    description:
      "Top-rated web design & SEO in Surrey BC. 200+ five-star reviews. Custom websites built to rank on Google and win local customers across Metro Vancouver.",
    url: "https://canadianwebdesigns.ca/locations/surrey",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Web Design Surrey BC — Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How much does a website cost for a Surrey BC business?",
    a: "Surrey website pricing depends on your project scope — number of pages, e-commerce functionality, custom integrations, and design complexity. Every website includes mobile optimization, on-page SEO, Google Analytics setup, and 30 days of post-launch support. Contact us for a free, no-obligation quote.",
  },
  {
    q: "How long does SEO take to work in Surrey?",
    a: "Surrey keywords like 'web design surrey' and '[service] surrey bc' have significantly lower difficulty than Vancouver — meaning you can see meaningful ranking movement in 30–60 days. For moderately competitive Surrey searches, most of our clients reach page 1 within 90 days with our full SEO program. We provide monthly ranking reports so you can track progress every step of the way.",
  },
  {
    q: "Do you build websites for Surrey trades and contractors?",
    a: "Trades and construction are among our most common Surrey clients. We build fast-loading, mobile-first sites with click-to-call, quote forms, and Google Maps integration — everything a Surrey contractor needs to win more jobs online. We understand the specific SEO strategies that rank trades businesses in Newton, Cloverdale, and South Surrey.",
  },
  {
    q: "Can you help my Surrey business rank in Google Maps?",
    a: "Yes — Google Business Profile optimization is a core part of every Surrey SEO package. We optimize your listing with keyword-rich descriptions, service areas covering Surrey neighbourhoods (Newton, Guildford, Cloverdale, South Surrey, Whalley, Fleetwood), high-quality photos, and a review generation strategy. Surrey's local pack is very winnable — most businesses there have fewer reviews than you'd expect.",
  },
  {
    q: "Why should I choose a web design agency that knows Surrey?",
    a: "Local market knowledge makes a measurable difference. We know that Surrey searches often compete with Vancouver results — so we build geo-targeted content and local citations specifically for Surrey's distinct neighbourhoods. We understand the demographics of South Surrey vs Newton vs Guildford and tailor your content strategy accordingly.",
  },
  {
    q: "Do you offer ongoing SEO for Surrey businesses?",
    a: "Yes — we offer monthly SEO retainers that include ranking reports, content updates, citation building, and Google Business Profile management. Pricing depends on your industry and growth goals — contact us for a custom quote.",
  },
  {
    q: "What industries do you serve with Surrey web design and SEO?",
    a: "We serve all major Surrey industries: real estate and mortgage brokers, construction and trades, healthcare clinics, law firms, restaurants, professional services, retail, and auto. Surrey's growing economy means each sector has unique SEO needs — we tailor every strategy to your specific industry, competitors, and target customers.",
  },
  {
    q: "What's the difference between SEO and Google Ads for a Surrey business?",
    a: "SEO builds organic rankings that generate free traffic month after month — but takes 30–90 days to show results. Google Ads deliver immediate visibility at the top of Surrey search results, but stop the moment you stop paying. For most Surrey businesses, the ideal strategy combines both: Google Ads for immediate lead generation while your SEO program builds long-term organic authority. Surrey's low keyword difficulty (21) means your SEO compounds quickly and reduces your dependency on paid ads over time.",
  },
  {
    q: "How do you build local citations for a Surrey BC business?",
    a: "We submit your business name, address, phone, and website to the 50+ most important Canadian and BC-specific directories: Google Business Profile, Bing Places, Apple Maps, Yelp Canada, Yellow Pages Canada, Canada411, Chamber of Commerce sites, industry-specific directories, and Surrey regional listings. Consistent citations across authoritative sites send Google powerful local relevance signals — directly improving your ranking in Surrey's Google local pack (the map results at the top of search pages).",
  },
  {
    q: "Can you help an e-commerce business in Surrey rank on Google?",
    a: "Absolutely — e-commerce SEO is a CWD specialty. For Surrey-based online stores, we optimize product and category pages for local and national keywords, set up Google Merchant Center for Shopping results, improve site speed and mobile experience, and run Google Shopping campaigns for immediate product visibility. We've helped Surrey retailers on WooCommerce and Shopify rank for both hyper-local searches like 'outdoor furniture surrey bc' and national product searches competing across Canada.",
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
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://canadianwebdesigns.ca/locations/surrey",
  name: "Canadian Web Designs — Web Design Surrey BC & SEO",
  description: "Professional web design and SEO services for businesses in Surrey, BC. Custom websites that rank on Google and convert visitors into paying customers.",
  url: "https://canadianwebdesigns.ca/locations/surrey",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  areaServed: [
    { "@type": "City", name: "Surrey", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "Neighborhood", name: "Newton, Surrey BC" },
    { "@type": "Neighborhood", name: "Guildford, Surrey BC" },
    { "@type": "Neighborhood", name: "Cloverdale, Surrey BC" },
    { "@type": "Neighborhood", name: "South Surrey, BC" },
    { "@type": "Neighborhood", name: "Whalley, Surrey BC" },
    { "@type": "Neighborhood", name: "Fleetwood, Surrey BC" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: String(config.reviewCount) },
};

const services = [
  { title: "Web Design Surrey", desc: "Custom, conversion-focused websites for Surrey businesses. Mobile-first, fast-loading, and SEO-ready from day one — built to generate leads from Newton to South Surrey.", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" },
  { title: "Surrey SEO", desc: "Rank on the first page of Google for Surrey searches. Local SEO strategies that drive real calls, leads, and bookings for Surrey businesses.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { title: "Google Business Profile", desc: "Dominate Surrey's Google local pack. We optimize your GBP listing for all Surrey neighbourhoods and build a review generation system.", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
  { title: "Local Citation Building", desc: "Get listed in every major BC and Canadian directory. Consistent citations across 50+ sites are a top-3 local ranking factor for Surrey searches.", icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" },
  { title: "eCommerce Web Design", desc: "WooCommerce and Shopify stores built for Surrey retailers and product businesses. Fast, secure, and optimized for local and national sales.", icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.696 2.075-3.27 2.454-4.568.048-.168.073-.34.073-.518a2.25 2.25 0 00-2.25-2.25h-2.25" },
  { title: "Google Ads — Surrey", desc: "Immediate visibility on Surrey searches while your SEO builds. We manage targeted Google Ads campaigns for Surrey businesses that need results now.", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

const process = [
  { step: "01", title: "Free Surrey Website Audit", desc: "We analyze your current site, rankings, Google Business Profile, and top Surrey competitors — then show you exactly what it will take to rank above them." },
  { step: "02", title: "Surrey Keyword Research", desc: "We identify the highest-value Surrey keywords for your business: what your ideal customers are searching, and the fastest realistic path to page 1." },
  { step: "03", title: "Custom Design & Development", desc: "We build your Surrey website from scratch — mobile-first, lightning fast, and SEO-optimized with local schema markup, keyword-rich content, and structured data." },
  { step: "04", title: "Launch & Local SEO", desc: "We launch your site and immediately begin Surrey-specific SEO: GBP optimization, citation building, neighbourhood content, and review generation." },
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
        <Image src="/blog/web-design-company.png" alt="Web design and SEO services for Surrey BC businesses" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Surrey, BC — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Web Design Surrey BC &amp;{" "}<span className="gradient-text-animated">Local SEO</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Custom websites that rank on Google and turn Surrey visitors into paying customers. No contracts. Results guaranteed.
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
              {["200+ Google Reviews", "Surrey SEO Difficulty: 21 — Highly Achievable", "Results or We Keep Working"].map((t) => (
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Design & SEO Services for Surrey Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Everything your Surrey business needs to rank on Google, get more leads, and outgrow your competitors.</p>
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
              {[{ value: "200+", label: "Five-Star Reviews" }, { value: "590/mo", label: "Surrey Web Design Searches" }, { value: "30–90", label: "Days to First Rankings" }, { value: "100%", label: "Results Guaranteed" }].map((s) => (
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
                Surrey is BC&apos;s second-largest city with over 600,000 residents — and one of Canada&apos;s fastest-growing economies. From the industrial corridors of Newton and Whalley to the upscale residential market of South Surrey and White Rock, Surrey businesses span an incredibly diverse range of industries: real estate, construction, healthcare, legal services, food and hospitality, retail, and professional services. Every one of these sectors competes intensely for Google&apos;s first page — and the businesses with strong websites and local SEO win disproportionately.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                What makes Surrey a compelling SEO opportunity is the gap between its size and the digital maturity of its businesses. Surrey has 590 monthly searches for &quot;web design surrey&quot; alone — and keyword difficulty sits at just 21, making it highly achievable compared to Vancouver (where similar searches score 50+). Most Surrey businesses have outdated websites, weak Google Business Profiles, and little to no citation presence. The companies that invest in web design and SEO now are capturing market share that will compound for years.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Canadian Web Designs builds Surrey-specific websites and SEO strategies that account for the city&apos;s geographic and demographic diversity. We create neighbourhood-targeted content for Newton, Guildford, Cloverdale, South Surrey, and Fleetwood. We build Surrey-specific local citations, optimize your Google Business Profile for the Surrey local pack, and develop the on-page content authority that Google needs to rank you above competitors in your area.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you&apos;re a Surrey contractor trying to rank above Vancouver agencies, a South Surrey real estate professional competing for high-intent buyers, a Newton healthcare clinic fighting for patient bookings, or a Guildford retailer trying to drive foot traffic — we build the digital presence that puts you in front of Surrey customers at the exact moment they&apos;re ready to buy.
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
                    "Surrey is BC's second-largest city — 600,000+ residents and growing fast, creating massive search demand",
                    "Web design surrey: 590 monthly searches, difficulty 21 — significantly easier to rank than Vancouver",
                    "Most Surrey businesses have weak digital presences — early movers capture disproportionate market share",
                    "South Surrey/White Rock is a premium market — high-spending buyers expect professional websites",
                    "Newton and Whalley have dense trade and service business populations with strong local search intent",
                    "We build Surrey-specific content, not just generic BC pages — neighbourhoods, industries, and intent all matter",
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Build & Rank Surrey Websites</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">A proven 4-step process built specifically for Surrey BC&apos;s local search landscape.</p>
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

      {/* PRICING */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Transparent Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Design & SEO Pricing for Surrey Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">No hidden fees. No lock-in contracts. Flat-rate pricing with clear deliverables — and results you can measure every month.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Starter",
                price: "$299",
                period: "one-time",
                desc: "Perfect for Surrey small businesses launching or refreshing their online presence.",
                features: ["5-page custom website", "Mobile-first responsive design", "On-page SEO foundation", "Google Analytics + Search Console", "Contact form + click-to-call", "30 days post-launch support"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$599",
                period: "Ongoing SEO available",
                desc: "The complete package for Surrey businesses serious about ranking above their competitors.",
                features: ["10–15 page custom website", "Surrey-specific SEO strategy", "Google Business Profile optimization", "Local citation building (50+ sites)", "Monthly ranking reports", "Dedicated account manager"],
                cta: "Get Growth Plan",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "quote",
                desc: "For larger Surrey businesses, e-commerce stores, or aggressive growth timelines.",
                features: ["Unlimited pages + custom features", "E-commerce (WooCommerce / Shopify)", "Full content marketing program", "Google Ads management", "Multi-location SEO", "Priority support + SLA"],
                cta: "Get a Custom Quote",
                highlight: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 reveal border transition-all duration-300 ${plan.highlight ? "border-[#00AADF]" : "border-gray-100 bg-white"}`} style={plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" } : { boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className={`text-sm font-bold tracking-widest uppercase mb-2 ${plan.highlight ? "text-white/70" : "text-[#00AADF]"}`}>{plan.name}</p>
                <p className={`text-4xl font-black mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</p>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.period}</p>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>{plan.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-white" : "text-[#00AADF]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${plan.highlight ? "bg-white text-[#003B6F] hover:bg-white/90" : "text-white hover:opacity-90"}`} style={!plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)" } : {}}>
                  {plan.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">All plans include a free Surrey consultation and website audit. SEO packages are month-to-month — no lock-in contracts.</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Your SEO Journey</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What Surrey SEO Looks Like Month by Month</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">We set realistic expectations from day one — and then work to exceed them. Here&apos;s what a typical Surrey SEO engagement delivers.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { month: "Month 1", title: "Audit, Strategy & Technical Foundation", desc: "We run a complete Surrey SEO audit: your current rankings, website technical health, Google Business Profile status, and competitor keyword gaps. We fix all on-site technical issues, optimize meta titles and descriptions for your Surrey keywords, update your GBP listing, and submit your first 20 priority citations. By end of Month 1, your foundation is solid and Google is already re-crawling your site." },
              { month: "Months 2–3", title: "Content Optimization & Local Signal Building", desc: "We optimize every key page for your target Surrey search terms and publish neighbourhood-specific content targeting Newton, Guildford, Cloverdale, and South Surrey buyers. Citation building continues across 50+ directories. Most Surrey SEO clients see their first ranking movements in weeks 6–8 — pages start climbing from positions 20–40 into the top 15, and branded searches begin showing your updated GBP prominently." },
              { month: "Months 3–6", title: "Page 1 Rankings & Measurable Traffic Growth", desc: "Lower-difficulty Surrey keywords break into page 1. Organic traffic grows measurably month over month. Your Google Business Profile gains impressions, calls, and direction requests from Surrey searchers. We expand your keyword footprint across more Surrey searches and begin building authority for your most competitive targets. Monthly reports show exactly where you rank and how fast you&apos;re climbing." },
              { month: "Month 6+", title: "Compound Growth & Sustained Market Dominance", desc: "Rankings compound — each new piece of content and each new citation multiplies the authority of everything else. You appear in Surrey&apos;s Google local pack for your primary service searches. Organic leads become a consistent, growing channel that doesn&apos;t stop when an ad budget runs out. Your competitors in Newton, Guildford, and South Surrey start noticing — and it gets harder for them to catch up." },
            ].map((t, i) => (
              <div key={t.month} className="flex gap-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col items-center pt-1">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-sm" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>{i + 1}</div>
                  {i < 3 && <div className="w-0.5 flex-1 mt-2 mb-2" style={{ background: "linear-gradient(to bottom, rgba(0,170,223,0.4), transparent)" }} />}
                </div>
                <div className="pb-10">
                  <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-1">{t.month}</p>
                  <h3 className="text-gray-900 font-black text-lg mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Web Design Surrey BC — Common Questions</h2>
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
        <Image src="/blog/seo-services-london-ontario.png" alt="Grow your Surrey BC business with web design and SEO" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Grow Your{" "}<span className="gradient-text-animated">Surrey Business Online?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">Free consultation, no commitment. We&apos;ll show you exactly how we&apos;ll get you more customers from Google in Surrey.</p>
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
