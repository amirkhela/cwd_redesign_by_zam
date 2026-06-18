import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: "Burnaby Web Design 2026 | 180+ Reviews | Free Quote",
  description:
    "Burnaby's top-rated web design agency in 2026. Custom sites from $1,499, rank on Google in 30–60 days. 180+ reviews. Free quote — call (647) 689-6069 now.",
  alternates: { canonical: "/locations/burnaby" },
  openGraph: {
    title: "Burnaby Web Design 2026 | 180+ Reviews | Free Quote",
    description:
      "Top-rated web design & SEO in Burnaby BC for 2026. 180+ five-star reviews. Custom sites from $1,499 serving Metrotown, Brentwood & Lougheed. Free quote — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/locations/burnaby",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "SEO and Web Design Burnaby — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does SEO cost for a Burnaby business?",
    a: "Our Burnaby SEO packages start at $499/month and scale based on the competitiveness of your keywords, number of target pages, and your growth goals. Every package includes keyword research, on-page optimization, local citation building, Google Business Profile management, and monthly ranking reports. Contact us for a free Burnaby SEO audit and custom quote.",
  },
  {
    q: "How long does SEO take to work in Burnaby?",
    a: "Burnaby keywords like 'burnaby seo', 'web design burnaby', and '[service] burnaby' have significantly lower difficulty than Vancouver — meaning you can see meaningful ranking movement in 30–60 days. For competitive Burnaby searches, most of our clients reach page 1 within 90 days with our full SEO program. We provide monthly ranking reports so you can track progress every step of the way.",
  },
  {
    q: "Do you offer both web design and SEO in Burnaby?",
    a: "Yes — and combining both is always the strongest approach. We build every Burnaby website with SEO baked in from day one: proper site structure, fast loading speeds, mobile optimization, keyword-rich content, and schema markup. Pairing a well-built site with our ongoing Burnaby SEO program delivers compounding results that a website alone cannot achieve.",
  },
  {
    q: "Why should I choose a local Burnaby SEO agency?",
    a: "Local market knowledge makes a measurable difference. We understand that Burnaby searches compete heavily with Vancouver results — and we build geo-targeted content specifically for Burnaby neighbourhoods like Brentwood, Metrotown, Lougheed, and Edmonds. We know which directories matter for Burnaby citations, which SERP features appear for local queries, and how to differentiate your business from Vancouver-based competitors targeting the same searches.",
  },
  {
    q: "Can you help my Burnaby business rank in Google Maps?",
    a: "Yes — Google Business Profile (Maps) optimization is a core part of every Burnaby SEO package. We optimize your listing with keyword-rich descriptions, service areas covering Burnaby neighbourhoods, high-quality photos, regular posts, and a review generation strategy. Ranking in Burnaby's Google local pack (the map results at the top of the page) is one of the highest-ROI moves a local business can make.",
  },
  {
    q: "What industries do you serve with Burnaby SEO?",
    a: "We serve all major Burnaby industries: tech companies, retail, healthcare clinics, contractors and trades, restaurants, professional services, and education. Burnaby's diverse business ecosystem means each sector has unique SEO needs — we tailor every strategy to your specific industry, competitors, and target customers.",
  },
  {
    q: "How much does a website cost for a Burnaby business?",
    a: "Burnaby website packages start at $1,499 for a professional 5-page site and scale based on your scope — number of pages, e-commerce functionality, custom integrations, and design complexity. Every website includes mobile optimization, on-page SEO, Google Analytics setup, and 30 days of post-launch support. Contact us for a free, no-obligation quote.",
  },
  {
    q: "What's the difference between SEO and Google Ads for a Burnaby business?",
    a: "SEO builds long-term organic rankings — free traffic that compounds over time — but takes 30–60 days to show movement. Google Ads deliver immediate visibility at the top of Burnaby search results, but stop when you stop paying. Most Burnaby businesses benefit from both: Google Ads for immediate leads while SEO builds sustainable authority. Burnaby's exceptionally low keyword difficulty (as low as 12) means your SEO investment pays off faster here than almost anywhere else in Metro Vancouver.",
  },
  {
    q: "How do you build local citations for a Burnaby business?",
    a: "We submit your business to the 50+ most important Canadian and BC directories: Google Business Profile, Bing Places, Apple Maps, Yelp Canada, Yellow Pages Canada, Canada411, Chamber of Commerce listings, industry-specific directories, and Burnaby and Metro Vancouver regional sites. Consistent NAP (name, address, phone) data across authoritative directories sends Google powerful local relevance signals — one of the top 3 ranking factors for Burnaby's local pack results.",
  },
  {
    q: "Do you work with tech companies and startups in Burnaby?",
    a: "Yes — Burnaby is home to major tech employers like Electronic Arts, BCIT, and Simon Fraser University, and we've worked with Burnaby tech companies on both B2C and B2B SEO strategies. For tech companies, we focus on content marketing (blog posts, whitepapers, thought leadership), conversion rate optimization for SaaS-style funnels, and technical SEO for complex web applications. We understand Burnaby's tech ecosystem and can position your company to rank for the specialized searches that matter in your industry.",
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
  "@id": "https://canadianwebdesigns.ca/locations/burnaby",
  name: "Canadian Web Designs — Burnaby SEO & Web Design",
  description:
    "Professional SEO services and web design for businesses in Burnaby, BC. Rank on Google, get more leads, and grow your business online.",
  url: "https://canadianwebdesigns.ca/locations/burnaby",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  areaServed: [
    { "@type": "City", name: "Burnaby", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "Neighborhood", name: "Brentwood, Burnaby" },
    { "@type": "Neighborhood", name: "Metrotown, Burnaby" },
    { "@type": "Neighborhood", name: "Lougheed, Burnaby" },
    { "@type": "Neighborhood", name: "Edmonds, Burnaby" },
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
    reviewCount: "180",
  },
};

const services = [
  {
    title: "Burnaby SEO",
    desc: "Rank on the first page of Google for Burnaby searches. Local SEO strategies that drive real leads, phone calls, and booked appointments — not just impressions.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Web Design Burnaby",
    desc: "Custom, conversion-focused websites for Burnaby businesses. Mobile-first, fast-loading, and built with SEO baked in from the first line of code.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3",
  },
  {
    title: "Google Business Profile",
    desc: "Dominate Burnaby's Google local pack. We optimize your GBP listing, add neighbourhood-specific content, and build a review generation system.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "Local Citation Building",
    desc: "Get listed in every major Canadian and BC-specific directory. Consistent citations across 50+ sites are a top-3 local ranking factor for Burnaby searches.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Content Marketing",
    desc: "Burnaby-specific blog posts, service pages, and neighbourhood landing pages that build topical authority and capture long-tail searches month after month.",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
  },
  {
    title: "Google Ads — Burnaby",
    desc: "Immediate visibility on Burnaby searches while your SEO builds. We manage targeted Google Ads campaigns for Burnaby businesses that need results now.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
];

const process = [
  { step: "01", title: "Free Burnaby SEO Audit", desc: "We analyze your current rankings, website health, Google Business Profile, and top Burnaby competitors — then show you exactly what it will take to reach page 1." },
  { step: "02", title: "Keyword & Competitor Research", desc: "We identify the highest-value Burnaby keywords for your business: the searches your ideal customers are making right now, with realistic paths to page 1." },
  { step: "03", title: "On-Page & Technical SEO", desc: "We optimize every page of your site — titles, meta descriptions, content, schema markup, site speed, mobile experience, and internal linking structure." },
  { step: "04", title: "Local Authority Building", desc: "We build Burnaby-specific citations, optimize your Google Business Profile, generate reviews, and earn backlinks that signal trust to Google for Burnaby searches." },
];

const neighbourhoods = [
  "Brentwood", "Metrotown", "Lougheed", "Edmonds", "Burnaby Lake",
  "Capitol Hill", "Willingdon Heights", "Oakalla", "Big Bend", "Burnaby Mountain",
];

const industries = [
  "Tech & Software Companies", "Retail & Shopping", "Healthcare & Clinics",
  "Restaurants & Hospitality", "Contractors & Construction", "Professional Services",
  "Real Estate & Mortgage", "Education & Training",
];

export default function BurnabyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Locations", href: "/locations/toronto" },
          { name: "Burnaby", href: "/locations/burnaby" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/web-design-company.png"
          alt="SEO and web design services for Burnaby businesses"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }}
        />
        <div
          className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }}
        />
        <div
          className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Burnaby, BC — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}
            >
              Burnaby SEO &amp;{" "}
              <span className="gradient-text-animated">Web Design</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google. Get more calls, leads, and customers from Burnaby
              and Metro Vancouver. No contracts. Results guaranteed.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
              >
                Free Burnaby SEO Audit
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:6476896069"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                (647) 689-6069
              </a>
            </div>

            {/* Trust row */}
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {[
                { label: "180+ Google Reviews", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
                { label: "Page 1 Results or We Keep Working", icon: "M4.5 12.75l6 6 9-13.5" },
                { label: "Burnaby SEO Specialists", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              What We Do in Burnaby
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              SEO &amp; Web Design Services for Burnaby Businesses
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Everything your Burnaby business needs to rank on Google, get more leads, and
              grow online — under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "180+", label: "Five-Star Reviews" },
                { value: "30–60", label: "Days to First Results" },
                { value: "Diff 12", label: "Burnaby SEO Difficulty" },
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

      {/* ─── ABOUT BURNABY SEO ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Burnaby SEO &amp; Web Design
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Why Burnaby Businesses Need Local SEO
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Burnaby is one of BC&apos;s most competitive and diverse business markets — home to tech giants
                like Electronic Arts, BCIT, and Simon Fraser University alongside thousands of small businesses in
                Metrotown, Brentwood, Lougheed, and Edmonds. With Metro Vancouver&apos;s massive consumer base on
                your doorstep, appearing on the first page of Google is no longer optional — it&apos;s the single
                most powerful growth lever available to a Burnaby business.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The good news: Burnaby SEO is significantly easier to win than Vancouver SEO. Burnaby-specific
                keywords like &quot;burnaby seo&quot;, &quot;web design burnaby&quot;, and &quot;[your service] burnaby&quot; have keyword
                difficulty scores as low as 12 — meaning a well-optimized website and local SEO strategy can
                deliver page 1 rankings in 30–60 days. Most Burnaby businesses have weak online presences, leaving
                enormous opportunity for businesses willing to invest in search.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Canadian Web Designs has helped dozens of Burnaby businesses in tech, retail, healthcare, trades, and
                professional services rank on the first page of Google for their most valuable keywords. We build
                Burnaby-specific content, optimize your Google Business Profile for Brentwood, Metrotown, and
                Lougheed searches, and build the citation authority that signals trust to Google for local queries.
                Our Burnaby SEO clients consistently see 3–5× more organic traffic within the first 6 months.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Unlike Vancouver-based agencies that treat Burnaby as an afterthought, we build city-specific
                strategies that target Burnaby keywords, Burnaby neighbourhoods, and Burnaby buyers. Whether
                you&apos;re a Burnaby contractor trying to rank above the Vancouver agencies, a Metrotown retailer
                competing for local shopping searches, or a Brentwood clinic fighting for patient bookings — we
                build the SEO strategy that puts you in front of Burnaby customers at the exact moment they&apos;re
                searching for your services.
              </p>

              {/* Neighbourhoods */}
              <h3 className="text-xl font-black text-gray-900 mb-4">Burnaby Neighbourhoods We Serve</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    {n}
                  </span>
                ))}
              </div>

              {/* Industries */}
              <h3 className="text-xl font-black text-gray-900 mb-4">Industries We Serve in Burnaby</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
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
                  Why Burnaby Businesses Choose CWD
                </h3>
                <div className="space-y-4">
                  {[
                    "Burnaby SEO keyword difficulty is as low as 12 — one of BC's easiest local markets to rank in",
                    "Metrotown is BC's second-largest shopping destination — retail and restaurant businesses need strong local SEO",
                    "Burnaby searches compete directly with Vancouver results — local geo-targeting is essential",
                    "BCIT and SFU create a young, tech-savvy consumer base with high online purchase intent",
                    "Most Burnaby businesses have weak online presences — early movers win disproportionately",
                    "We've ranked Burnaby businesses in tech, healthcare, trades, retail, and professional services",
                  ].map((fact, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                      >
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  >
                    Get Your Free Burnaby SEO Audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Contact card */}
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
              How We Rank Burnaby Businesses on Google
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              A proven 4-step process built specifically for Burnaby&apos;s local search landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-4xl font-black mb-4"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {p.step}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Transparent Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">SEO & Web Design Pricing for Burnaby Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">No hidden fees. No lock-in contracts. Clear deliverables and results you can measure every single month.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Starter",
                price: "$1,499",
                period: "one-time",
                desc: "Perfect for Burnaby small businesses launching or refreshing their web presence.",
                features: ["5-page custom website", "Mobile-first responsive design", "On-page SEO foundation", "Google Analytics + Search Console", "Contact form + click-to-call", "30 days post-launch support"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$3,499",
                period: "one-time + $499/mo SEO",
                desc: "The complete package for Burnaby businesses ready to dominate local search results.",
                features: ["10–15 page custom website", "Burnaby-specific SEO strategy", "Google Business Profile optimization", "Local citation building (50+ sites)", "Monthly ranking reports", "Dedicated account manager"],
                cta: "Get Growth Plan",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "quote",
                desc: "For larger Burnaby businesses, tech companies, e-commerce stores, or aggressive growth goals.",
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
          <p className="text-center text-gray-400 text-sm">All plans include a free Burnaby consultation and SEO audit. SEO packages are month-to-month — no lock-in contracts.</p>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Your SEO Journey</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What Burnaby SEO Looks Like Month by Month</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">We set realistic expectations from day one — and then work to exceed them. Here&apos;s what a typical Burnaby SEO engagement delivers.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { month: "Month 1", title: "Audit, Strategy & Technical Foundation", desc: "We run a complete Burnaby SEO audit: your current rankings, website technical health, Google Business Profile status, and competitor keyword gaps across Brentwood, Metrotown, and Lougheed. We fix all on-site technical issues, optimize meta titles and descriptions for your target Burnaby keywords, update your GBP listing, and submit your first 20 priority citations. By end of Month 1, your foundation is solid." },
              { month: "Months 2–3", title: "Content Optimization & Local Signal Building", desc: "We optimize every key page for your target Burnaby search terms and publish neighbourhood-specific content targeting Brentwood, Metrotown, Lougheed, and Edmonds buyers. Citation building continues across 50+ directories. Most Burnaby SEO clients see their first ranking movements in weeks 6–8 — pages start climbing from positions 20–40 into the top 15, and your GBP begins showing up in local pack results." },
              { month: "Months 3–6", title: "Page 1 Rankings & Measurable Traffic Growth", desc: "Lower-difficulty Burnaby keywords break into page 1 — and with difficulty as low as 12, this can happen faster than in any other Metro Vancouver market. Organic traffic grows measurably. Your Google Business Profile gains impressions, calls, and direction requests. Monthly reports show exactly where you rank for Burnaby searches and how fast you&apos;re climbing against Vancouver-based competitors." },
              { month: "Month 6+", title: "Compound Growth & Sustained Market Dominance", desc: "Rankings compound — each new piece of content and each new citation multiplies the authority of everything else. You appear in Burnaby&apos;s Google local pack for your primary service searches. Organic leads become a consistent, growing channel that doesn&apos;t stop when an ad budget runs out. With Burnaby&apos;s low difficulty, early movers build leads that are extremely hard for late entrants to overcome." },
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

      {/* ─── FAQ ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">
              Burnaby SEO &amp; Web Design — Common Questions
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
            Also serving across Metro Vancouver and Canada:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/locations/toronto"
              className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
            >
              Web Design Toronto ↗
            </Link>
            {[
              { name: "Surrey", slug: "surrey" },
              { name: "Vancouver", slug: "vancouver" },
              { name: "North York", slug: "north-york" },
              { name: "Calgary", slug: "calgary" },
              { name: "Winnipeg", slug: "winnipeg" },
              { name: "Ottawa", slug: "ottawa" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/seo-services-london-ontario.png"
          alt="Grow your Burnaby business with SEO and web design"
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }}
        />
        <div
          className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }}
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
            Ready to Rank Your{" "}
            <span className="gradient-text-animated">Burnaby Business on Google?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you exactly where you rank today,
            who&apos;s beating you, and how we&apos;ll fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
            >
              Get Your Free Burnaby SEO Audit
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:6476896069"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300"
            >
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
