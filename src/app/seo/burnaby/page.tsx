import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: "SEO Burnaby | Metro Vancouver Rankings at Half the Cost | Free Audit | CWD",
  description:
    "Burnaby SEO — Metro Vancouver page 1 results at lower cost than downtown. Keyword difficulty as low as 12. Get more leads fast. 180+ reviews. Free SEO audit — (647) 689-6069.",
  alternates: { canonical: "/seo/burnaby" },
  openGraph: {
    title: "SEO Burnaby | Burnaby SEO Services | Canadian Web Designs",
    description:
      "Top-rated SEO services in Burnaby, BC. Rank on Google page 1, get more leads, and grow your Burnaby business. Keyword difficulty as low as 12. Free SEO audit — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/seo/burnaby",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Burnaby — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does SEO cost for a Burnaby business?",
    a: "Our Burnaby SEO packages start at $499/month and are scoped based on your industry competitiveness, target keywords, and growth goals. Every package includes keyword research, on-page optimization, Google Business Profile management, local citation building (50+ sites), and monthly ranking reports. Burnaby's low keyword difficulty means most packages deliver measurable page 1 results within 60 days. Contact us for a free Burnaby SEO audit and custom quote.",
  },
  {
    q: "How long does SEO take to work in Burnaby?",
    a: "Burnaby is one of the fastest SEO markets in Canada. With keyword difficulties as low as 12 for 'burnaby seo' and related searches, well-optimized sites commonly reach page 1 in 30–60 days — significantly faster than Vancouver, Toronto, or Calgary. We provide monthly ranking reports so you can track progress in real time.",
  },
  {
    q: "What makes Burnaby SEO different from Vancouver SEO?",
    a: "Burnaby and Vancouver keywords are separate SERPs. A business ranking for 'seo vancouver' won't automatically rank for 'seo burnaby' — Google uses geo-targeting to show locally relevant results. Burnaby searches also have dramatically lower competition: 'burnaby seo' has a difficulty of 12 vs. 65+ for 'seo vancouver'. This means Burnaby SEO delivers faster results at lower cost.",
  },
  {
    q: "Can you rank my Burnaby business in the Google local pack?",
    a: "Yes — Google Business Profile optimization is core to every Burnaby SEO package. We optimize your listing with Burnaby-specific service areas (Brentwood, Metrotown, Lougheed, Edmonds), keyword-rich descriptions, high-quality photos, weekly posts, and a systematic review generation strategy. Appearing in Burnaby's local pack is one of the highest-ROI moves a Burnaby business can make.",
  },
  {
    q: "Do you offer both web design and SEO in Burnaby?",
    a: "Yes — we offer both as a combined package or standalone services. Web design and SEO work best together: a site we build is already structured for Burnaby SEO from day one. If you have an existing site, our standalone Burnaby SEO packages start at $499/month. See our full Burnaby web design and SEO page at /locations/burnaby for combined packages.",
  },
  {
    q: "What industries do you serve with Burnaby SEO?",
    a: "All major Burnaby industries: tech companies (including businesses near EA, BCIT, and SFU), retail and e-commerce, healthcare clinics, contractors and trades, restaurants, professional services, and real estate. Burnaby's diverse economy means each sector has unique keyword opportunities — we build strategies specific to your industry and competition level.",
  },
  {
    q: "How do local citations help my Burnaby SEO?",
    a: "Citations — listings of your business name, address, and phone number across directories — are a top-3 local ranking factor for Burnaby's local pack results. We submit to 50+ Canadian and BC-specific directories: Google Business Profile, Bing Places, Apple Maps, Yelp Canada, Yellow Pages, Canada411, BC Chamber directories, and industry-specific sites. Consistent NAP data across authoritative directories tells Google you're a legitimate, established Burnaby business.",
  },
  {
    q: "Why should I invest in SEO rather than Google Ads for my Burnaby business?",
    a: "Both have a role, but SEO offers dramatically better ROI over time. Google Ads deliver immediate Burnaby visibility but stop the moment your budget runs out. SEO builds permanent authority — a page 1 ranking you earn stays (and compounds) without ongoing spend. With Burnaby's keyword difficulty as low as 12, the time-to-ROI for SEO is faster than almost any other Canadian market. Most Burnaby businesses benefit from running both in parallel: Ads for immediate leads while SEO builds your long-term foundation.",
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
  "@id": "https://canadianwebdesigns.ca/seo/burnaby",
  name: "Canadian Web Designs — SEO Burnaby",
  description:
    "Top-rated SEO services for Burnaby businesses. Rank on Google page 1, get more leads, and grow your business online.",
  url: "https://canadianwebdesigns.ca/seo/burnaby",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  areaServed: [
    { "@type": "City", name: "Burnaby", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "Neighborhood", name: "Brentwood" },
    { "@type": "Neighborhood", name: "Metrotown" },
    { "@type": "Neighborhood", name: "Lougheed" },
    { "@type": "Neighborhood", name: "Edmonds" },
    { "@type": "Neighborhood", name: "Capitol Hill" },
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
    title: "Local SEO Burnaby",
    desc: "Rank for 'seo burnaby', '[service] burnaby', and neighbourhood searches in Brentwood, Metrotown, and Lougheed. Strategy built specifically for Burnaby's unique competitive landscape.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Google Business Profile",
    desc: "Dominate Burnaby's local pack. We optimize your GBP for Brentwood, Metrotown, Lougheed, and Edmonds searches — and build a review strategy that compounds monthly.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "On-Page SEO",
    desc: "Every service page optimized for Burnaby keyword variations — titles, meta descriptions, headers, content structure, schema markup, and internal links.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Citation Building",
    desc: "Get listed across 50+ Canadian and BC-specific directories. Consistent NAP citations are a top-3 ranking factor for Burnaby local pack results.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Content Marketing",
    desc: "Neighbourhood-specific blog posts and service pages targeting Brentwood, Metrotown, and Lougheed buyers. Topical authority that compounds month after month.",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
  },
  {
    title: "Technical SEO Audit",
    desc: "Full site crawl for speed issues, indexing errors, Core Web Vitals, and mobile usability problems suppressing your Burnaby rankings.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
];

const process = [
  { step: "01", title: "Free Burnaby SEO Audit", desc: "We analyze your current Burnaby keyword rankings, website health, Google Business Profile, backlink profile, and top local competitors — then show you exactly what it takes to reach page 1." },
  { step: "02", title: "Burnaby Keyword Research", desc: "We identify the highest-ROI Burnaby keywords: what your customers search in Brentwood, Metrotown, and Lougheed — with realistic paths to page 1 given Burnaby's uniquely low difficulty scores." },
  { step: "03", title: "On-Page & Technical Fixes", desc: "We optimize every page targeting your Burnaby keywords — content depth, title tags, schema markup, site speed, mobile usability, and internal linking structure." },
  { step: "04", title: "Local Authority Building", desc: "Burnaby-specific citations across 50+ directories, GBP optimization for Burnaby neighbourhoods, review generation, and white-hat links from BC publications." },
];

const neighbourhoods = [
  "Brentwood", "Metrotown", "Lougheed", "Edmonds",
  "Capitol Hill", "Willingdon Heights", "Oakalla", "Big Bend",
  "Burnaby Mountain", "Burnaby Lake",
];

const industries = [
  "Tech & Software Companies", "Retail & E-Commerce",
  "Healthcare & Medical Clinics", "Restaurants & Food Service",
  "Contractors & Construction", "Professional Services",
  "Real Estate & Mortgage", "Education & Training",
];

export default function SeoByurnabyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "SEO Burnaby", href: "/seo/burnaby" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/posts/Building-website-rank.png"
          alt="SEO services for Burnaby businesses"
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
                Burnaby, BC — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Burnaby{" "}
              <span className="gradient-text-animated">SEO Services</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google for Burnaby searches. Difficulty as low as 12 — faster page 1 results
              than anywhere else in Metro Vancouver.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Free Burnaby SEO Audit
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
              {["180+ Google Reviews", "Positions 1-10 in 30–60 Days", "Burnaby SEO Diff: 12"].map((t) => (
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
              Burnaby SEO Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Everything Your Burnaby Business Needs to Rank on Google
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Results-focused SEO for Burnaby businesses — keyword difficulty as low as 12 means faster page 1
              rankings than anywhere else in Metro Vancouver.
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
                { value: "Diff 12", label: "Burnaby Keyword Difficulty" },
                { value: "30–60", label: "Days to First Results" },
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
                SEO in Burnaby
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Why Burnaby Businesses Need Burnaby-Specific SEO
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Burnaby is Metro Vancouver&apos;s second-largest city — home to over 250,000 residents, Metrotown
                (BC&apos;s second-largest mall), BCIT, Simon Fraser University, Electronic Arts, and thousands of
                small and medium-sized businesses. The city&apos;s dense mix of retail, tech, healthcare, and
                professional services creates a competitive local search environment — but one that remains highly
                beatable for businesses willing to invest in targeted Burnaby SEO.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Burnaby SEO keyword difficulty is exceptionally low compared to other major Canadian markets.
                &quot;Burnaby seo&quot; scores a 12 on SE Ranking&apos;s difficulty index — versus 65+ for &quot;seo
                toronto&quot; and 55+ for &quot;seo vancouver&quot;. This means page 1 rankings for Burnaby
                searches are achievable in 30–60 days with a well-executed strategy, making Burnaby one of the
                fastest-ROI SEO markets in the country.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                A critical mistake Burnaby businesses make is assuming Vancouver SEO will cover them. It won&apos;t.
                Burnaby and Vancouver keywords are separate SERPs — Google uses geo-targeting to surface locally
                relevant results for each city. Without Burnaby-specific SEO signals (a Burnaby-optimized Google
                Business Profile, local content targeting Burnaby neighbourhoods, and citations across Burnaby and
                Metro Vancouver directories), Google treats your business as a Vancouver competitor and you lose to
                businesses that have properly targeted Burnaby search intent.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Canadian Web Designs&apos; Burnaby SEO approach is built on four pillars: auditing your
                Burnaby-specific keyword gaps against real competitors, building neighbourhood-targeted content for
                Brentwood, Metrotown, Lougheed, and Edmonds, optimizing your Google Business Profile for Burnaby
                local pack placement, and building citations across Metro Vancouver and BC-specific directories.
                Every Burnaby SEO campaign is tracked with monthly ranking reports — you see exactly which positions
                moved and what&apos;s next.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Burnaby Neighbourhoods We Target</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    {n}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Burnaby Industries We Serve</h3>
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Burnaby Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "Burnaby SEO difficulty as low as 12 — fastest page 1 results in Metro Vancouver",
                    "Metrotown drives massive retail search intent — local SEO is essential for Burnaby retailers",
                    "Burnaby searches mix with Vancouver results — geo-specific targeting separates you from Vancouver competitors",
                    "BCIT and SFU create a young, tech-savvy consumer base with high online search intent",
                    "Most Burnaby businesses have outdated or non-existent SEO — early movers dominate",
                    "We've ranked Burnaby businesses in tech, healthcare, retail, trades, and professional services",
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
                    Get Your Free Burnaby SEO Audit
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
                  { name: "Starter", price: "$499/mo", desc: "Local SEO + GBP + citations" },
                  { name: "Growth", price: "$899/mo", desc: "Full SEO + content + link building" },
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Rank Burnaby Businesses on Google</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              A proven, transparent 4-step SEO process built for Burnaby&apos;s uniquely low-competition search landscape.
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
              Burnaby SEO — Common Questions
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
              { name: "SEO Vancouver", slug: "vancouver" },
              { name: "SEO Surrey", slug: "surrey" },
              { name: "SEO North York", slug: "north-york" },
              { name: "SEO Calgary", slug: "calgary" },
              { name: "SEO Winnipeg", slug: "winnipeg" },
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
        <Image src="/blog/posts/Building-website-rank.png" alt="SEO services for Burnaby businesses" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your Burnaby Business{" "}
            <span className="gradient-text-animated">on Page 1?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you exactly where you rank today,
            who&apos;s beating you in Burnaby, and the fastest path to page 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Burnaby SEO Audit
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
