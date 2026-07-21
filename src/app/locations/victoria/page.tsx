import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Victoria BC Web Design | SEO & Custom Sites | Canada Website Design" },
  description:
    "Victoria BC's top-rated web design & SEO agency — Oak Bay, Langford & James Bay specialists. Custom websites built to rank on Google. 200+ reviews.",
  alternates: { canonical: "/locations/victoria" },
  openGraph: {
    title: "Victoria BC Web Design | SEO & Custom Sites | Canada Website Design",
    description:
      "Top-rated web design & SEO in Victoria BC. 200+ five-star reviews. Custom websites built to rank on Google across Greater Victoria.",
    url: "https://canadianwebdesigns.ca/locations/victoria",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Victoria BC and Web Design — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does SEO cost in Victoria BC?",
    a: "Our Victoria SEO packages are scoped based on your industry competitiveness, target keywords, and growth goals. Every package includes keyword research, on-page optimization, Google Business Profile management, local citation building across BC and national directories, and monthly ranking reports. Contact us for a free Victoria SEO audit and custom quote.",
  },
  {
    q: "How long does SEO take to work for a Victoria business?",
    a: "Victoria BC is a strong SEO market for local businesses because keyword difficulty is significantly lower than Vancouver. Keywords like 'seo victoria', 'victoria seo', and '[service] victoria bc' have difficulty scores as low as 8 — meaning most Victoria businesses can see meaningful page 1 movement within 30–60 days. For moderately competitive terms, expect 90 days. We provide monthly ranking reports throughout.",
  },
  {
    q: "What makes Victoria BC SEO different from Vancouver SEO?",
    a: "Victoria is a geographically distinct market from Vancouver — it's on Vancouver Island, and Google treats it as its own local search ecosystem. Victoria-specific searches have much lower competition than Metro Vancouver, meaning your investment goes further. That said, you still need city-specific content, local citations pointing to Victoria, a well-optimized Google Business Profile, and a Victoria-focused internal linking strategy to win local pack and organic results.",
  },
  {
    q: "Can you help my Victoria business rank in Google Maps?",
    a: "Yes — Google Business Profile optimization is a core part of every Victoria SEO package. We optimize your listing with keyword-rich descriptions, service areas covering Greater Victoria (Saanich, Oak Bay, Esquimalt, Langford, Colwood), high-quality photos, regular posts, and a review generation strategy. Victoria's local pack is extremely winnable — most businesses in the top 3 have fewer than 50 reviews, making it one of the easiest markets in BC to dominate Maps.",
  },
  {
    q: "Do you offer both web design and SEO in Victoria BC?",
    a: "Yes — and combining both is always the most effective approach. We build every Victoria website with SEO baked in from the start: proper URL structure, fast loading times, mobile optimization, keyword-rich service pages, and schema markup. Pairing a well-built Victoria website with our ongoing SEO program creates compounding results that either service alone cannot achieve.",
  },
  {
    q: "What industries do you serve with Victoria BC SEO?",
    a: "We serve all major Victoria industries including government and public sector businesses, tech and software companies, tourism and hospitality, healthcare and wellness clinics, law firms, trades and contractors, retail, and real estate. Victoria's unique economy — built around government, tourism, tech, and education — means each sector has distinct SEO needs. We tailor every strategy to your specific market.",
  },
  {
    q: "How do I get started with SEO for my Victoria business?",
    a: "The first step is a free Victoria SEO audit. We analyze your current rankings, website health, Google Business Profile, top competitors, and keyword opportunities — then show you exactly what it will take to reach page 1. No commitment required. Call (647) 689-6069 or fill out our contact form to book your free audit.",
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
  "@id": "https://canadianwebdesigns.ca/locations/victoria",
  name: "Canadian Web Designs — SEO Victoria BC & Web Design",
  description:
    "Professional SEO services and web design for businesses in Victoria, BC. Rank on Google, get more leads, and grow your business online.",
  url: "https://canadianwebdesigns.ca/locations/victoria",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  areaServed: [
    { "@type": "City", name: "Victoria", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "Neighborhood", name: "Saanich, Victoria BC" },
    { "@type": "Neighborhood", name: "Oak Bay, Victoria BC" },
    { "@type": "Neighborhood", name: "Esquimalt, Victoria BC" },
    { "@type": "Neighborhood", name: "Langford, Victoria BC" },
    { "@type": "Neighborhood", name: "Colwood, Victoria BC" },
    { "@type": "Neighborhood", name: "Saanichton, Victoria BC" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(config.reviewCount),
  },
};

const services = [
  {
    title: "SEO Victoria BC",
    desc: "Rank on page 1 of Google for Victoria searches. Local SEO strategies built for Victoria's unique market — government, tourism, tech, and professional services.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Web Design Victoria",
    desc: "Custom, fast-loading websites for Victoria BC businesses. Mobile-first, SEO-ready from day one, and designed to convert visitors into inquiries and bookings.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3",
  },
  {
    title: "Google Business Profile",
    desc: "Dominate Victoria's Google local pack and Maps results. We optimize your GBP for Greater Victoria including Saanich, Oak Bay, Langford, and Colwood.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "Local Citation Building",
    desc: "Get listed in every major BC and Canadian directory. 50+ consistent citations are one of the top local ranking factors for Victoria searches.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Content & Blog Strategy",
    desc: "Victoria-specific content that builds topical authority and captures long-tail searches — neighbourhood pages, service area content, and industry blog posts.",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
  },
  {
    title: "Google Ads — Victoria",
    desc: "Immediate top-of-page visibility for Victoria searches while your SEO compounds. We manage targeted Google Ads campaigns for Victoria businesses that need leads now.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
];

const process = [
  { step: "01", title: "Free Victoria SEO Audit", desc: "We analyze your current rankings, website health, Google Business Profile, and top Victoria competitors — then walk you through exactly what it will take to reach page 1 for your most valuable searches." },
  { step: "02", title: "Victoria Keyword Research", desc: "We identify the highest-ROI Victoria keywords for your business: what your ideal customers are searching, what difficulty each keyword has, and the fastest realistic path to ranking." },
  { step: "03", title: "On-Page & Technical Optimization", desc: "We optimize every page of your site for Victoria search intent — titles, content, schema markup, internal links, site speed, and mobile experience." },
  { step: "04", title: "Local Authority Building", desc: "Victoria-specific citations, GBP optimization, review generation, and backlinks that signal to Google you are the authoritative answer for Victoria searches in your industry." },
];

const neighbourhoods = [
  "Saanich", "Oak Bay", "Esquimalt", "Langford", "Colwood",
  "Saanichton", "Sidney", "James Bay", "Fernwood", "Fairfield",
  "Gordon Head", "View Royal",
];

const industries = [
  "Government & Public Sector", "Tech & Software", "Tourism & Hospitality",
  "Healthcare & Wellness", "Law Firms", "Trades & Contractors",
  "Retail & Boutiques", "Real Estate & Mortgage",
];

export default function VictoriaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Locations", href: "/locations/toronto" },
          { name: "Victoria BC", href: "/locations/victoria" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/web-design-company.png"
          alt="SEO and web design services for Victoria BC businesses"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Victoria, BC — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              SEO Victoria BC &amp;{" "}
              <span className="gradient-text-animated">Web Design</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google in Victoria. Get more calls, bookings, and
              leads from Greater Victoria. Results guaranteed — no long-term contracts.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Free Victoria SEO Audit
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:6476896069"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                (647) 689-6069
              </a>
            </div>

            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {[
                { label: "200+ Google Reviews" },
                { label: "Victoria SEO Difficulty as Low as 8" },
                { label: "Results or We Keep Working" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Victoria BC Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              SEO &amp; Web Design Services for Victoria Businesses
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Everything your Victoria BC business needs to rank on Google, get more leads,
              and outgrow your competitors — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div key={s.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "200+", label: "Five-Star Reviews" },
                { value: "Diff 8", label: "Victoria SEO Difficulty" },
                { value: "30–60", label: "Days to First Rankings" },
                { value: "100%", label: "Results Guaranteed" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── ABOUT VICTORIA SEO ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                SEO in Victoria BC
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Why Victoria BC is One of Canada&apos;s Best SEO Markets
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Victoria is the capital of British Columbia — a city of approximately 400,000 people in Greater
                Victoria, built on government, tourism, technology, healthcare, and a thriving small business
                community. The University of Victoria and Camosun College anchor a young, educated population, while
                tens of thousands of government employees and growing tech sector workers create a consumer base with
                strong spending power and heavy online search habits.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                What makes Victoria remarkable from an SEO perspective is the opportunity gap. Victoria keywords —
                &quot;seo victoria bc&quot;, &quot;victoria seo&quot;, &quot;search engine optimization victoria bc&quot;,
                &quot;web design victoria&quot; — have keyword difficulty scores as low as 8 and rarely exceed 30.
                This is dramatically lower than Vancouver (where similar terms score 50–80+). Most Victoria businesses
                have outdated websites, no Google Business Profile strategy, and zero local citation presence. The
                businesses that invest in SEO now are capturing disproportionate market share with minimal competition.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Canadian Web Designs builds Victoria-specific SEO strategies that account for the city&apos;s unique
                search landscape. We create geo-targeted content for Greater Victoria and its surrounding municipalities
                — Saanich, Oak Bay, Esquimalt, Langford, Colwood, and Sidney. We build local citations in BC-specific
                directories, optimize your Google Business Profile for the Victoria local pack, and develop the
                on-page authority that Google requires to rank you above Victoria competitors.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Victoria&apos;s Google local pack — the map results that appear at the top of the page for searches
                like &quot;seo agency victoria&quot; or &quot;web designer victoria bc&quot; — is particularly
                winnable. Most businesses currently showing in the local pack have fewer than 50 Google reviews and
                minimal SEO optimization. With the right strategy, most Victoria businesses can break into the local
                pack within 60–90 days and see organic ranking movement within 30 days.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Greater Victoria Areas We Serve</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    {n}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Industries We Serve in Victoria</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
                    style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 mb-5" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-xl mb-5">
                  Why Victoria Businesses Choose CWD
                </h3>
                <div className="space-y-4">
                  {[
                    "Victoria SEO keyword difficulty starts at 8 — one of Canada's easiest local markets to dominate",
                    "Most Victoria businesses have no SEO strategy — early movers win disproportionate market share",
                    "Victoria's local pack is winnable with fewer than 50 reviews — most cities require hundreds",
                    "Government, tourism, and tech create a high-spending consumer base that searches before buying",
                    "Vancouver Island geography means Victoria searches are a closed ecosystem — less Vancouver bleed-over than you'd expect",
                    "We build Greater Victoria content for Saanich, Langford, Colwood, Oak Bay, and Sidney — not just the city centre",
                  ].map((fact, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Get Your Free Victoria SEO Audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-3">Contact Us</p>
                <a href="tel:6476896069" className="flex items-center gap-2 text-gray-900 font-black text-lg hover:text-[#00AADF] transition-colors mb-2">
                  (647) 689-6069
                </a>
                <p className="text-gray-500 text-sm mb-1">info@canadianwebdesigns.ca</p>
                <p className="text-gray-500 text-sm">Mon–Fri: 8:00 AM – 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEO PROCESS ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              How We Rank Victoria Businesses on Google
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              A proven 4-step process calibrated for Victoria BC&apos;s local search landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-black mb-4"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {p.step}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">
              Victoria BC SEO &amp; Web Design — Common Questions
            </h2>
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

      {/* ─── RELATED CITIES ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">
            Also serving across BC and all of Canada:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/toronto"
              className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
              Web Design Toronto ↗
            </Link>
            {[
              { name: "Burnaby", slug: "burnaby" },
              { name: "Surrey", slug: "surrey" },
              { name: "Vancouver", slug: "vancouver" },
              { name: "Calgary", slug: "calgary" },
              { name: "Winnipeg", slug: "winnipeg" },
              { name: "Ottawa", slug: "ottawa" },
            ].map((c) => (
              <Link key={c.slug} href={`/locations/${c.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/seo-services-london-ontario.png" alt="Grow your Victoria BC business with SEO and web design" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your{" "}
            <span className="gradient-text-animated">Victoria Business on Google?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you your current rankings, who&apos;s
            beating you, and exactly how we&apos;ll fix it — specific to Victoria BC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Victoria SEO Audit
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href="tel:6476896069"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (647) 689-6069
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
