import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "SEO Victoria BC | SEO Company & Services | Canada Web Designs" },
  description:
    "Victoria BC SEO — lower keyword difficulty than Vancouver, same buyer intent. Downtown, Oak Bay & Saanich. 180+ reviews. Free audit — (647) 689-6069.",
  alternates: { canonical: "/seo/victoria" },
  openGraph: {
    title: "SEO Victoria BC | SEO Company & Services | Canada Web Designs",
    description:
      "Expert SEO services in Victoria, BC — rank page 1, grow your business, and win more leads from search. Free SEO audit — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/seo/victoria",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Victoria BC — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does SEO cost for a Victoria business?",
    a: "Our Victoria SEO packages scale based on your industry competitiveness, keyword targets, and growth goals. Every package includes Victoria keyword research, on-page optimization, Google Business Profile management, local citation building, and monthly ranking reports. Victoria's low keyword difficulty means most businesses see meaningful page 1 movement within 60 days. Contact us for a free Victoria SEO audit.",
  },
  {
    q: "How long does SEO take in Victoria, BC?",
    a: "Victoria keywords like 'seo victoria' and '[service] victoria bc' have a difficulty score of 15 — much lower than Vancouver or Toronto. Most Victoria businesses we work with see first page-1 rankings within 4–8 weeks for lower-competition searches, and 90 days for more competitive terms. We provide monthly ranking reports so you can track every position.",
  },
  {
    q: "What industries do you serve with Victoria SEO?",
    a: "All major Victoria sectors: tourism and hospitality, government and public sector, tech companies, healthcare, legal and professional services, retail, restaurants, and real estate. Victoria's economy is diverse — we build industry-specific strategies for each sector rather than applying a generic template.",
  },
  {
    q: "Can you help my Victoria hospitality business rank for tourist searches?",
    a: "Yes — tourism SEO is one of our Victoria specializations. We optimize for high-intent tourist searches: 'things to do in victoria bc', 'victoria bc restaurants downtown', 'victoria tours', and hundreds of related queries. Tourism SEO in Victoria requires seasonal content strategies, structured data for ratings/hours/menus, and GBP optimization for tourist searchers who haven't visited before.",
  },
  {
    q: "Do you offer web design and SEO together for Victoria businesses?",
    a: "Yes — and combining both delivers the strongest results. Every website we build is structured for SEO from day one: proper URL architecture, fast loading times, mobile optimization, local schema markup, and keyword-rich content. Standalone Victoria SEO packages are also available if you have an existing site.",
  },
  {
    q: "How do you handle Victoria's unique island geography for local citations?",
    a: "Victoria's island geography means we include both Vancouver Island-specific directories and Lower Mainland Canadian directories in our citation strategy. We submit to Google Business Profile, Bing Places, Apple Maps, Yelp Canada, Yellow Pages, Canada411, Tourism Victoria, Victoria Chamber of Commerce listings, and industry-specific directories. This dual-market citation approach gives Victoria businesses strong signals in both island and national local searches.",
  },
  {
    q: "Can you rank my Victoria law firm or healthcare clinic?",
    a: "Yes — law and healthcare are among our most common Victoria verticals. For law firms, we target practice-area + neighbourhood combinations: 'family lawyer victoria bc', 'personal injury lawyer saanich'. For healthcare, we target condition and service searches: 'physiotherapy victoria', 'naturopath fairfield victoria'. Both sectors comply fully with BC Law Society and CPBC advertising guidelines.",
  },
  {
    q: "How is CWD different from a local Victoria SEO agency?",
    a: "Two key advantages: scale and track record. We've ranked businesses in every major Canadian city — which means our Victoria strategies are informed by what actually works across competitive markets, not just Victoria. We also have 180+ verifiable five-star Google reviews from clients across Canada. We're based in Canada (not offshore), which means everything is communicated in real-time during business hours, and we understand the Canadian search landscape at a national level.",
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
  "@id": "https://canadianwebdesigns.ca/seo/victoria",
  name: "Canadian Web Designs — SEO Victoria BC",
  description:
    "Expert SEO services for Victoria, BC businesses. Rank on Google page 1, get more leads, and grow your business online.",
  url: "https://canadianwebdesigns.ca/seo/victoria",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  areaServed: [
    { "@type": "City", name: "Victoria", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "Neighborhood", name: "Downtown Victoria" },
    { "@type": "Neighborhood", name: "James Bay" },
    { "@type": "Neighborhood", name: "Fairfield" },
    { "@type": "Neighborhood", name: "Oak Bay" },
    { "@type": "Neighborhood", name: "Saanich" },
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
    title: "Local SEO Victoria",
    desc: "Rank for 'seo victoria', '[service] victoria bc', and Downtown, Saanich, and Oak Bay searches. Victoria-specific strategies that target island searchers, not mainland traffic.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Google Business Profile",
    desc: "Dominate Victoria's local pack across Downtown, Fairfield, Oak Bay, and Saanich. GBP optimization built for Victoria's tourism-heavy and government-adjacent search landscape.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "On-Page SEO",
    desc: "Every page optimized for Victoria keyword intent — service pages, location pages, and blog content targeting the searches your Victoria customers are actually making.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Citation Building",
    desc: "50+ Canadian and BC directory submissions — including Victoria-specific and Vancouver Island directories. Consistent NAP across directories is a top local ranking signal.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Tourism & Hospitality SEO",
    desc: "Victoria's #1 industry is tourism. We rank hotels, tours, restaurants, and hospitality businesses for the high-volume traveller searches that drive Victoria's economy.",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
  },
  {
    title: "Technical SEO Audit",
    desc: "Full crawl identifying speed problems, indexing errors, and Core Web Vitals issues suppressing your Victoria rankings. Fast sites rank — we make yours fast.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
];

const process = [
  { step: "01", title: "Free Victoria SEO Audit", desc: "We analyze your current Victoria keyword positions, site health, Google Business Profile, backlinks, and top Victoria competitors — then map out exactly what's needed to reach page 1." },
  { step: "02", title: "Victoria Keyword Research", desc: "We identify the highest-ROI Victoria keywords: what your customers search in Downtown, Saanich, Oak Bay, and Langford — and rank them by difficulty, volume, and commercial intent." },
  { step: "03", title: "On-Page & Technical Fixes", desc: "We optimize every service page, fix technical issues, add schema markup, improve page speed, and build internal links — all targeting your Victoria search terms." },
  { step: "04", title: "Local Authority Building", desc: "Victoria-specific citations across 50+ directories, GBP optimization for Victoria neighbourhoods, review generation, and link building from BC and Vancouver Island publications." },
];

const neighbourhoods = [
  "Downtown Victoria", "James Bay", "Fairfield", "Oak Bay",
  "Saanich", "Langford", "Colwood", "Esquimalt",
  "View Royal", "Sidney", "Sooke", "Gordon Head",
];

const industries = [
  "Tourism & Hospitality", "Government & Public Sector",
  "Tech & Software", "Healthcare & Medical",
  "Legal & Professional Services", "Retail & Restaurants",
  "Real Estate", "Education & Training",
];

export default function SeoVictoriaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "SEO Victoria", href: "/seo/victoria" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/posts/Local-SEO1.jpg"
          alt="SEO services for Victoria BC businesses"
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
              SEO Victoria{" "}
              <span className="gradient-text-animated">BC</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google in Victoria. More organic leads for your Victoria business —
              from tourism and hospitality to government services and tech.
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
              {["180+ Google Reviews", "Custom-Quoted Packages", "No Lock-In Contracts"].map((t) => (
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
              Victoria SEO Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Everything Your Victoria Business Needs to Rank on Google
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Results-focused SEO for Victoria businesses — keyword difficulty of 15 means faster page 1 rankings
              than Vancouver, Toronto, or Calgary.
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
                { value: "590/mo", label: "'SEO Victoria' Search Volume" },
                { value: "Diff 15", label: "Victoria Keyword Difficulty" },
                { value: "4–8 Wk", label: "Avg. to First Page Results" },
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
                SEO in Victoria
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Why Victoria Businesses Need Victoria-Specific SEO
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Victoria is BC&apos;s capital city — Greater Victoria has over 400,000 residents, making it
                Canada&apos;s top tourism destination, home to the BC provincial government, the University of
                Victoria, and a fast-growing tech sector. Search intent in Victoria is uniquely diverse: government
                workers searching professional services, tourists searching restaurants and tours, students searching
                education and housing, and residents searching home services. No other Canadian city packs this range
                of commercial intent into a single local search landscape.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Victoria SEO has a keyword difficulty of 15 — dramatically lower than Vancouver (55+) or Toronto
                (65+). &quot;Seo victoria&quot; gets 590 searches per month with a difficulty of just 15, meaning a
                well-executed SEO strategy can break into page 1 in 4–8 weeks. Most Victoria businesses have weak
                or non-existent SEO investment, leaving first-mover advantage open for businesses willing to invest
                early in their Victoria search presence.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Victoria&apos;s geographic isolation as an island city creates a unique SEO opportunity. Mainland
                agencies can&apos;t credibly target &quot;victoria bc [service]&quot; searches without local content
                and citation authority. CWD builds Victoria-specific content targeting Downtown, Fairfield, Oak Bay,
                Saanich, Langford, and Colwood — the neighbourhoods and surrounding communities that drive real
                Victoria search traffic. Island-specific directories and the Victoria Chamber of Commerce are also
                part of every citation-building campaign.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                From tourism operators on Government Street to tech startups in Yates Street co-working spaces,
                Victoria businesses need SEO strategies calibrated to their specific customer. Our Victoria SEO work
                covers keyword research, content creation, GBP optimization, and citation building — everything
                required to rank in Victoria&apos;s local pack and organic results. Every campaign is tracked with
                monthly position reports so you see exactly what&apos;s moving and why.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Victoria Neighbourhoods We Target</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    {n}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Victoria Industries We Serve</h3>
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Victoria Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "Victoria SEO keyword difficulty of 15 — significantly lower than Vancouver, faster path to page 1",
                    "590 monthly searches for 'seo victoria' alone — substantial traffic for a city of this size",
                    "Tourism dominates Victoria's economy — hospitality businesses with strong SEO capture year-round bookings",
                    "Government and university presence creates diverse, high-income searcher demographics",
                    "Most Victoria businesses have minimal SEO investment — early movers gain durable ranking advantages",
                    "We build Victoria-specific content targeting island searchers, not mainland B.C. traffic",
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

              {/* Pricing card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-3">Pricing</p>
                {[
                  { name: "Starter", price: "$199", desc: "Local SEO + GBP + citations" },
                  { name: "Growth", price: "$399", desc: "Full SEO + content + link building" },
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Rank Victoria Businesses on Google</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              A proven, transparent 4-step SEO process built for Victoria&apos;s island search landscape.
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
              Victoria SEO — Common Questions
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
              { name: "SEO Burnaby", slug: "burnaby" },
              { name: "SEO Surrey", slug: "surrey" },
              { name: "SEO Vancouver", slug: "vancouver" },
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
        <Image src="/blog/posts/Local-SEO1.jpg" alt="SEO services for Victoria BC businesses" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your Victoria Business{" "}
            <span className="gradient-text-animated">on Page 1?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you where you rank today,
            who&apos;s outranking you in Victoria, and the fastest route to page 1.
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
