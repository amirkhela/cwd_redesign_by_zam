import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "SEO Toronto 2026 | Page 1 Google in 60–90 Days | 180+ Reviews | Free Audit | CWD" },
  description:
    "Toronto SEO with real 2026 results — neighbourhood-targeted strategy for Etobicoke, Scarborough & North York. Clients ranking page 1 for competitive keywords. 180+ five-star reviews. Free SEO audit — (647) 689-6069.",
  alternates: { canonical: "/seo/toronto" },
  openGraph: {
    title: "SEO Toronto 2026 | Page 1 Results in 60–90 Days | Canadian Web Designs",
    description:
      "Toronto's trusted SEO agency — 180+ five-star reviews, proven 2026 rankings across every GTA neighbourhood. Free audit — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/seo/toronto",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Toronto — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does SEO cost in Toronto?",
    a: "Our Toronto SEO packages start at $499/month and are scoped based on your industry, target keywords, and goals. Every package includes keyword research, on-page optimization, Google Business Profile management, local citation building, content strategy, and monthly ranking reports. We also offer one-time SEO audits starting at $299 for businesses that want a roadmap before committing to a monthly retainer. Contact us for a free Toronto SEO audit and custom quote.",
  },
  {
    q: "How long does SEO take to work in Toronto?",
    a: "Toronto is Canada's most competitive SEO market. For high-volume keywords like 'seo toronto' or 'lawyer toronto', expect 4–8 months of consistent SEO to reach page 1. For lower-competition Toronto searches — 'affordable seo toronto', '[neighbourhood] [service]', or long-tail queries — most clients see meaningful page 1 movement within 60–90 days. We provide monthly ranking reports so you always know exactly where you stand.",
  },
  {
    q: "What does affordable SEO in Toronto actually include?",
    a: "Affordable doesn't mean cutting corners — it means being strategic about where your budget delivers the most ranking impact. Our Toronto SEO packages include: full technical site audit, on-page optimization for all service pages, keyword research targeting your actual customers, Google Business Profile optimization, local citation building in 50+ Canadian directories, monthly content (blog posts or landing pages), and detailed monthly reports. We focus on the work that moves rankings, not busywork.",
  },
  {
    q: "Do you offer local SEO for Toronto small businesses?",
    a: "Yes — the majority of our Toronto SEO clients are small and medium businesses: clinics, law firms, contractors, restaurants, retail shops, and professional services providers. We understand that small businesses need ROI-focused SEO, not vanity metrics. Every campaign is tied to measurable outcomes: ranking positions, organic traffic growth, and most importantly, leads and calls generated from search.",
  },
  {
    q: "Can you get my Toronto business into the Google local pack?",
    a: "Yes — Google Business Profile (Maps) optimization is a core part of every Toronto SEO package. We optimize your GBP with keyword-rich descriptions, service areas covering Toronto neighbourhoods, high-quality photos, regular weekly posts, Q&A optimization, and a systematic review generation strategy. Ranking in Toronto's local pack for your primary service keywords is one of the highest-ROI SEO outcomes available to local businesses.",
  },
  {
    q: "What industries do you serve with Toronto SEO?",
    a: "We serve all major Toronto industries: healthcare and medical clinics, law firms and legal services, real estate and mortgage, contractors and trades, restaurants and hospitality, tech and SaaS, retail, professional services, and e-commerce. Toronto's diversity means every industry has unique keyword opportunities — we build strategies specific to your sector and competition level.",
  },
  {
    q: "How is Canadian Web Designs different from other Toronto SEO agencies?",
    a: "Three differences: we focus on rankings that drive revenue (not just impressions), we're transparent about what we're doing and why, and we back our work with a results guarantee. With 180+ five-star Google reviews and clients across every major Toronto neighbourhood and industry, our track record is publicly verifiable. We don't lock you into long contracts — we earn your business month after month.",
  },
  {
    q: "Do you work with Toronto businesses in competitive industries like law and healthcare?",
    a: "Yes — law and healthcare are among our most common Toronto verticals. Both industries have high keyword difficulty but also high customer lifetime value, making SEO an exceptional ROI. For law firms, we target practice-area + neighbourhood combinations ('personal injury lawyer etobicoke', 'family lawyer north york'). For healthcare, we target condition and service searches ('physiotherapy toronto', 'walk-in clinic scarborough') and comply fully with PIPEDA and professional advertising standards.",
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
  "@id": "https://canadianwebdesigns.ca/seo/toronto",
  name: "Canadian Web Designs — SEO Toronto",
  description:
    "Affordable SEO services for Toronto businesses. Rank on Google page 1, get more leads, and grow your business online.",
  url: "https://canadianwebdesigns.ca/seo/toronto",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  areaServed: [
    { "@type": "City", name: "Toronto", containedInPlace: { "@type": "AdministrativeArea", name: "ON" } },
    { "@type": "Neighborhood", name: "Downtown Toronto" },
    { "@type": "Neighborhood", name: "North York" },
    { "@type": "Neighborhood", name: "Scarborough" },
    { "@type": "Neighborhood", name: "Etobicoke" },
    { "@type": "Neighborhood", name: "East York" },
    { "@type": "Neighborhood", name: "York" },
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
    title: "Local SEO Toronto",
    desc: "Rank for 'seo toronto', '[service] toronto', and neighbourhood-specific searches. Local SEO strategies targeting Toronto's most valuable customer searches.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Google Business Profile",
    desc: "Dominate Toronto's local pack for your service keywords. GBP optimization covering Downtown, North York, Scarborough, Etobicoke, and the full GTA.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "On-Page SEO",
    desc: "Every service page optimized for high-intent Toronto keywords — titles, meta descriptions, headers, content, internal linking, and schema markup.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Technical SEO Audit",
    desc: "Full site crawl identifying speed issues, indexing errors, broken links, duplicate content, and Core Web Vitals problems that are actively suppressing your rankings.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
  {
    title: "Content & Link Building",
    desc: "Toronto-specific blog posts, service pages, and neighbourhood landing pages that build topical authority. Plus white-hat link building from Canadian publications.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "SEO Reporting",
    desc: "Monthly ranking reports, traffic analysis, and lead attribution so you know exactly which keywords are driving revenue — not just impressions.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
];

const process = [
  { step: "01", title: "Free Toronto SEO Audit", desc: "We analyze your current rankings, site health, GBP, backlink profile, and top Toronto competitors — then show you exactly what it takes to reach page 1 for your most valuable keywords." },
  { step: "02", title: "Toronto Keyword Research", desc: "We identify the highest-ROI Toronto keywords for your business — what your customers are actually searching, how difficult each keyword is to rank for, and which ones will drive real leads." },
  { step: "03", title: "On-Page & Technical Fixes", desc: "We optimize every page targeting your Toronto keywords — content depth, title tags, schema markup, site speed, internal linking, and any technical issues suppressing your rankings." },
  { step: "04", title: "Authority & Citation Building", desc: "Local citations in 50+ Canadian directories, GBP weekly posts, review generation, and white-hat link building that tell Google you're the most trusted answer for Toronto searches." },
];

const neighbourhoods = [
  "Downtown Core", "North York", "Scarborough", "Etobicoke",
  "East York", "York", "Midtown", "West End",
  "Beaches", "Leslieville", "Roncesvalles", "The Annex",
  "Yorkville", "Liberty Village", "Distillery District", "Corktown",
];

const industries = [
  "Law Firms & Legal Services", "Healthcare & Medical Clinics",
  "Real Estate & Mortgage", "Contractors & Trades",
  "Restaurants & Hospitality", "Tech & SaaS",
  "Retail & E-Commerce", "Professional Services",
];

export default function SeoTorontoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "SEO Toronto", href: "/seo/toronto" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/web-design-company.png"
          alt="Affordable SEO services for Toronto businesses"
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
                Toronto, ON — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Affordable{" "}
              <span className="gradient-text-animated">SEO Toronto</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google in Toronto. More leads, more calls, more customers
              from search — without the big-agency price tag.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Free Toronto SEO Audit
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
              {["180+ Google Reviews", "Affordable Packages from $499/mo", "No Long-Term Contracts"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t}
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
              Toronto SEO Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Everything Your Toronto Business Needs to Rank on Google
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Affordable, results-focused SEO for Toronto businesses — no fluff, no vanity metrics,
              just rankings that drive real leads.
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
                { value: "180+", label: "Five-Star Reviews" },
                { value: "$499", label: "Packages Starting At" },
                { value: "300%+", label: "Avg Traffic Growth" },
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

      {/* ─── ABOUT TORONTO SEO ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                SEO in Toronto
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Why Toronto Businesses Need Affordable, Strategic SEO
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Toronto is Canada&apos;s most competitive digital market — over 3 million people and hundreds of
                thousands of businesses all competing for the same Google searches. &quot;SEO toronto&quot; alone
                gets 1,300 searches every month. For service-based businesses, ranking on page 1 for your core
                service keywords is the difference between a full appointment book and an empty one.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The challenge most Toronto businesses face isn&apos;t understanding that SEO matters — it&apos;s
                finding affordable SEO services in Toronto that actually deliver results. The Toronto market is full
                of agencies charging $3,000–$10,000/month for work that amounts to monthly reports and minor tweaks.
                Canadian Web Designs takes a different approach: we focus exclusively on the activities that move
                rankings — on-page optimization, local citation building, Google Business Profile management, and
                targeted content that captures the searches your customers are already making.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Our Toronto SEO strategy is built around your specific market position. If you&apos;re a new
                business, we target lower-competition long-tail searches first to build momentum before competing
                for high-volume head terms. If you&apos;re an established Toronto business with an existing web
                presence, we identify the quickest ranking improvements and compound from there. Every client gets
                a strategy built from their actual keyword data — not a template.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Toronto&apos;s Google local pack — the map results that dominate the top of the page for searches
                like &quot;seo agency toronto&quot;, &quot;dentist near me&quot;, or &quot;contractor north york&quot;
                — is often the most winnable SEO objective for local businesses. Appearing in Toronto&apos;s local
                pack requires a well-optimized Google Business Profile, consistent local citations, authentic
                reviews, and proximity signals. We manage all of it as part of every Toronto SEO package.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Toronto Neighbourhoods We Target</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    {n}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Toronto Industries We Serve</h3>
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Toronto Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "Affordable packages starting at $499/mo — no bloated retainers, no busywork line items",
                    "180+ five-star Google reviews — the most publicly verifiable track record in Toronto",
                    "No long-term contracts — we earn your business month after month with results",
                    "Monthly ranking reports showing exactly which keywords moved and by how much",
                    "300%+ average organic traffic growth within 12 months for Toronto clients",
                    "Google Business Profile + local pack optimization included in every package",
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
                    Get Your Free Toronto SEO Audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Pricing card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-3">Pricing</p>
                {[
                  { name: "Starter SEO", price: "$499/mo", desc: "Local SEO + GBP + citations" },
                  { name: "Growth SEO", price: "$899/mo", desc: "Full SEO + content + link building" },
                  { name: "Enterprise", price: "Custom", desc: "Multi-location + e-commerce" },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{pkg.name}</p>
                      <p className="text-xs text-gray-500">{pkg.desc}</p>
                    </div>
                    <span className="text-sm font-black text-[#00AADF]">{pkg.price}</span>
                  </div>
                ))}
                <Link href="/contact" className="mt-4 flex items-center justify-center gap-1 text-sm font-bold text-[#00AADF] hover:underline">
                  Get a custom quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Rank Toronto Businesses on Google</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              A proven, transparent 4-step SEO process built for Toronto&apos;s competitive search landscape.
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

      {/* ─── PRICING ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Transparent Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Affordable Toronto SEO Pricing — No Surprises</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Flat monthly packages. No hidden fees, no lock-in contracts. Cancel anytime — we earn your business by delivering results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/month",
                desc: "For Toronto small businesses ready to start ranking — clinics, trades, restaurants, retail, professional services.",
                features: ["Local keyword research", "On-page optimization (up to 5 pages)", "Google Business Profile management", "20 local citation submissions", "Monthly ranking report", "Free technical audit"],
                cta: "Start Ranking",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$899",
                period: "/month",
                desc: "The complete Toronto SEO package for businesses ready to dominate their category across Toronto neighbourhoods.",
                features: ["Full keyword strategy (50+ targets)", "On-page optimization (unlimited pages)", "GBP + local pack optimization", "50+ citation submissions", "Monthly content (1 blog + 1 landing page)", "Link building — Canadian publications", "Weekly ranking updates", "Dedicated account manager"],
                cta: "Get Growth Plan",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "quote",
                desc: "For multi-location Toronto businesses, healthcare groups, law firms, and e-commerce brands with aggressive growth goals.",
                features: ["Multi-location keyword strategy", "E-commerce SEO", "Full content marketing program", "Google Ads integration", "CRO + conversion tracking", "Priority support + monthly strategy call"],
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
          <p className="text-center text-gray-400 text-sm">All plans include a free Toronto SEO audit. Month-to-month — no lock-in, cancel anytime.</p>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Your SEO Journey</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What Toronto SEO Looks Like Month by Month</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Toronto is Canada&apos;s most competitive SEO market. Here&apos;s an honest, realistic timeline for what our clients achieve.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { month: "Month 1", title: "Audit, Strategy & Technical Foundation", desc: "We run a complete Toronto SEO audit: your current keyword positions, site technical health, Google Business Profile status, backlink profile, and competitor keyword gaps across your target Toronto neighbourhoods. We fix all critical on-site technical issues, optimize meta titles and descriptions for your core Toronto keywords, update your GBP listing, and submit the first batch of 20 priority citations. Month 1 ends with a solid SEO foundation in place." },
              { month: "Months 2–3", title: "Content Optimization & Citation Building", desc: "We optimize every key service page for Toronto search intent and publish neighbourhood-specific content targeting Downtown, North York, Scarborough, and Etobicoke. Citation building continues across 50+ directories. Most Toronto SEO clients see their first ranking movements in weeks 6–8 — pages start climbing from positions 30–60 into the top 25, and your GBP begins gaining impressions for local pack queries." },
              { month: "Months 3–6", title: "Page 1 Rankings for Targeted Keywords", desc: "Lower-difficulty Toronto keywords break into page 1 — particularly neighbourhood-specific searches and service + neighbourhood combinations ('affordable seo north york', 'seo agency etobicoke'). Organic traffic grows measurably. Your GBP gains calls, direction requests, and website visits from Toronto local pack appearances. Monthly ranking reports show exactly where you rank against key Toronto competitors." },
              { month: "Month 6+", title: "Compounding Authority & Sustained Growth", desc: "Higher-volume Toronto keywords like 'seo toronto' and 'affordable seo toronto' move into the top 15–20 as domain authority compounds. Each new piece of content and citation multiplies the authority of everything already built. Toronto's competitive market rewards persistence — businesses that invest consistently for 6–12 months build rankings that are extremely difficult for new entrants to displace." },
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
              Toronto SEO — Common Questions
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

      {/* ─── RELATED ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Also serving SEO across Canada:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/toronto"
              className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
              Web Design Toronto ↗
            </Link>
            {[
              { name: "SEO Mississauga", slug: "mississauga" },
              { name: "SEO Brampton", slug: "brampton" },
              { name: "SEO North York", slug: "north-york" },
              { name: "SEO Halifax", slug: "halifax" },
              { name: "SEO Calgary", slug: "calgary" },
              { name: "SEO Ottawa", slug: "ottawa" },
            ].map((c) => (
              <Link key={c.slug} href={`/seo/${c.slug}`}
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
        <Image src="/blog/seo-services-london-ontario.png" alt="Affordable SEO for Toronto businesses" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your Toronto Business{" "}
            <span className="gradient-text-animated">on Page 1?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you exactly where you rank today,
            who&apos;s beating you in Toronto, and how we&apos;ll fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Toronto SEO Audit
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
