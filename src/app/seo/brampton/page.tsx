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
  title: { absolute: "SEO Brampton | SEO Company & Services | Canada Website Design" },
  description:
    "Brampton SEO that reaches page 1 faster than Toronto — Downtown, Bramalea & Castlemore specialists. 200+ reviews. Free audit — (647) 689-6069.",
  alternates: { canonical: "/seo/brampton" },
  openGraph: {
    title: "SEO Brampton | SEO Company & Services | Canada Website Design",
    description:
      "Expert SEO services in Brampton, ON. Get your Brampton business to page 1 of Google. 200+ five-star reviews. Free SEO audit — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/seo/brampton",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Brampton — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does SEO cost for a Brampton business?",
    a: "Our Brampton SEO packages are scoped to your goals. Every package includes keyword research, on-page optimization, Google Business Profile management, local citation building (50+ sites), and monthly ranking reports. Package pricing scales based on your industry's competitiveness and how many Brampton keyword clusters you want to target. We offer a free SEO audit before any commitment so you know exactly what&apos;s possible for your specific business.",
  },
  {
    q: "How long does SEO take to show results in Brampton?",
    a: "Brampton SEO keywords have a difficulty of 22 — moderate but very achievable. For lower-competition Brampton searches like '[service] brampton' or neighbourhood-specific terms, we typically see page 1 movement in 60–90 days. More competitive terms take 3–4 months. We track every keyword monthly so you can see exactly where you're climbing.",
  },
  {
    q: "Why does my Brampton business need local SEO specifically?",
    a: "Brampton sits inside the GTA, which means your Google search results compete directly with Toronto, Mississauga, and Vaughan businesses. Without Brampton-specific SEO signals — local content, Brampton citations, GBP optimization for Brampton neighbourhoods — Google treats your business as a generic GTA company and ranks you below competitors who have optimized for Brampton searches. City-specific SEO is how you break out of that pool.",
  },
  {
    q: "Do you serve all parts of Brampton including Bramalea and Castlemore?",
    a: "Yes — we build neighbourhood-specific content and citation strategies targeting all major Brampton areas: Downtown Brampton, Bramalea, Castlemore, Heart Lake, Springdale, Sandalwood, and more. Neighbourhood targeting is one of the most effective ways to capture long-tail Brampton searches from customers who identify with a specific area rather than just 'Brampton'.",
  },
  {
    q: "Can you get my Brampton business into the Google local pack?",
    a: "Yes — Google Business Profile optimization is core to every Brampton SEO package. We optimize your GBP with service areas covering all Brampton neighbourhoods, keyword-rich business descriptions, regular photo updates, weekly posts, and a review generation system. The Brampton local pack is extremely winnable — most competitors have underdeveloped GBP listings, meaning an optimized profile can break into the top 3 within 60–90 days.",
  },
  {
    q: "What industries do you serve with Brampton SEO?",
    a: "All major Brampton industries: healthcare clinics, logistics and distribution, restaurants and food service, retail, contractors and trades, real estate, professional services, and tech. Brampton's diverse economy means each sector has unique keyword opportunities — we tailor every strategy to your specific industry, Brampton neighbourhood, and competitive environment.",
  },
  {
    q: "How do you build local citations for a Brampton business?",
    a: "We submit to 50+ Canadian and Ontario-specific directories: Google Business Profile, Bing Places, Apple Maps, Yelp Canada, Yellow Pages Canada, Canada411, Ontario Chamber directories, Brampton Board of Trade, and industry-specific sites. Consistent NAP (Name, Address, Phone) data across authoritative directories is one of the top three local ranking factors and directly impacts your Brampton local pack position.",
  },
  {
    q: "Do you offer web design and SEO packages for Brampton businesses?",
    a: "Yes — we offer both standalone Brampton SEO and combined web design + SEO packages tailored to your scope. Combining both is always the most effective approach: we build every website with Brampton SEO architecture from day one — proper URL structure, fast loading speeds, mobile optimization, local schema markup, and keyword-rich content for Brampton neighbourhoods. Contact us for a free consultation and custom quote.",
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
  "@id": "https://canadianwebdesigns.ca/seo/brampton",
  name: "Canadian Web Designs — SEO Brampton",
  description:
    "Expert SEO services for Brampton businesses. Rank on Google page 1, get more leads, and grow your business online.",
  url: "https://canadianwebdesigns.ca/seo/brampton",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  areaServed: [
    { "@type": "City", name: "Brampton", containedInPlace: { "@type": "AdministrativeArea", name: "ON" } },
    { "@type": "Neighborhood", name: "Downtown Brampton" },
    { "@type": "Neighborhood", name: "Bramalea" },
    { "@type": "Neighborhood", name: "Castlemore" },
    { "@type": "Neighborhood", name: "Heart Lake" },
    { "@type": "Neighborhood", name: "Springdale" },
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
    title: "Local SEO Brampton",
    desc: "Rank for 'seo brampton', 'brampton seo company', and neighbourhood searches across Downtown, Bramalea, Heart Lake, and Springdale. Strategy built for Brampton's fast-growing competitive landscape.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Google Business Profile",
    desc: "Dominate Brampton's local pack. We optimize your GBP listing with Brampton-specific service areas, keyword descriptions, weekly posts, and a review generation strategy that builds month over month.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "On-Page SEO",
    desc: "Every page optimized for Brampton keyword intent — title tags, meta descriptions, content depth, schema markup, and internal linking structure that signals relevance to Google.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Citation Building",
    desc: "50+ Canadian and Ontario-specific directory submissions. Consistent NAP data across authoritative directories is one of the top three local ranking factors for Brampton searches.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Content Marketing",
    desc: "Brampton-specific blog posts and service pages targeting Bramalea, Heart Lake, Castlemore, and Springdale buyers. Content that builds topical authority and captures long-tail Brampton searches.",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
  },
  {
    title: "Technical SEO Audit",
    desc: "Full site crawl identifying speed issues, indexing errors, mobile usability problems, and Core Web Vitals failures that are actively suppressing your Brampton search rankings.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
];

const process = [
  {
    step: "01",
    title: "Free Brampton SEO Audit",
    desc: "We audit your current Brampton keyword rankings, site health, GBP listing, backlink profile, and top local competitors — then show you exactly what it takes to reach page 1 for your most valuable Brampton searches.",
  },
  {
    step: "02",
    title: "Brampton Keyword Research",
    desc: "We identify high-ROI Brampton keywords across Downtown, Bramalea, Heart Lake, and Castlemore — ranked by search volume, difficulty, and commercial intent, with realistic timelines to page 1.",
  },
  {
    step: "03",
    title: "On-Page & Technical Fixes",
    desc: "We optimize every key page for your Brampton target keywords — content depth, title tags, meta descriptions, schema markup, internal linking, and any technical issues suppressing your rankings.",
  },
  {
    step: "04",
    title: "Local Authority Building",
    desc: "Brampton-specific citations across 50+ Canadian and Ontario directories, GBP weekly posts and photo updates, review generation, and link building from Ontario business publications.",
  },
];

const neighbourhoods = [
  "Downtown Brampton", "Bramalea", "Castlemore", "Heart Lake",
  "Springdale", "Sandalwood", "Brampton East", "Fletcher's Creek",
  "Gore", "Credit Valley",
];

const industries = [
  "Logistics & Distribution", "Healthcare & Medical Clinics",
  "Restaurants & Food Service", "Retail & Shopping",
  "Contractors & Trades", "Professional Services",
  "Real Estate & Mortgage", "Tech & Manufacturing",
];

export default function SeoBramptonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "SEO Brampton", href: "/seo/brampton" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/posts/SEARCH-ENGINE-OPTIMIZATION-1.png"
          alt="Expert SEO services for Brampton businesses"
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
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Brampton, ON — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Brampton{" "}
              <span className="gradient-text-animated">SEO Services</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google in Brampton. Get more calls, leads, and customers from
              organic search — for less than the cost of one Google Ads click per day.
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
              {["200+ Google Reviews", "Custom-Quoted Packages", "No Lock-In Contracts"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="seo-brampton" />
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
              Brampton SEO Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Everything Your Brampton Business Needs to Rank on Google
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Results-focused SEO for Brampton businesses — neighbourhood-specific strategies
              that drive real leads from Downtown to Castlemore.
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
                { value: "480/mo", label: "Brampton SEO Search Volume" },
                { value: "Diff 22", label: "Keyword Difficulty" },
                { value: "60–90", label: "Days to Page 1" },
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

      {/* ─── ABOUT BRAMPTON SEO ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                SEO in Brampton
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Why Brampton Businesses Need Hyper-Local SEO
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Brampton is one of Canada&apos;s fastest-growing cities — 700,000+ people, the third-largest
                city in Ontario, and one of the most economically diverse municipalities in the country. From
                logistics hubs along Highway 410 to restaurants in downtown Brampton&apos;s Garden Square, from
                healthcare clinics serving Bramalea to tech companies in Springdale — Brampton&apos;s business
                landscape is as varied as its population. And for every one of these businesses, ranking on
                page 1 of Google is the fastest path to more customers.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Brampton SEO keywords like &quot;brampton seo&quot; and &quot;seo brampton company&quot; see 480
                monthly searches with a difficulty score of 22 — well below Toronto (65+), making Brampton an
                accessible market for businesses willing to invest in search. The GTA competitive overlap means
                Brampton businesses are often competing against Toronto agencies in search results without the
                Toronto keyword authority. The solution is hyper-local Brampton content that signals
                geo-relevance to Google.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Brampton&apos;s multicultural demographics — large South Asian, Caribbean, and African communities
                — create unique search intent patterns that generic SEO agencies miss. Searches happen in English
                but with culturally specific terminology, neighbourhood references (Bramalea, Castlemore, Heart
                Lake), and industry contexts specific to Brampton&apos;s business ecosystem. Our Brampton SEO
                strategies are built with this specificity in mind.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Canadian Web Designs builds Brampton SEO programs from the ground up: keyword research targeting
                what Brampton customers are actually searching, content optimized for Bramalea and Heart Lake
                neighbourhood intent, Google Business Profile management, and citation building across
                Ontario-specific directories. The result is sustainable page 1 rankings that drive real Brampton
                leads — not just impressions.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Brampton Neighbourhoods We Target</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    {n}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Brampton Industries We Serve</h3>
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Brampton Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "480 monthly searches for 'seo brampton' — significant volume at accessible difficulty (22)",
                    "Brampton is Canada's fastest-growing city — the demand for local services grows every year",
                    "GTA overlap means Brampton businesses compete with Toronto results — local signals are critical",
                    "Bramalea, Heart Lake, and Castlemore each have distinct search intent — neighbourhood targeting matters",
                    "Most Brampton businesses have minimal SEO — early movers build durable rankings",
                    "We’ve ranked Brampton businesses in healthcare, logistics, retail, food service, and professional services",
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
                    Get Your Free Brampton SEO Audit
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
                  { name: "Starter SEO", price: "$199/mo", desc: "Local SEO + GBP + citations" },
                  { name: "Growth SEO", price: "$399/mo", desc: "Full SEO + content + link building" },
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Rank Brampton Businesses on Google</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              A proven, transparent 4-step SEO process built for Brampton&apos;s fast-growing local market.
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Brampton SEO Pricing — No Surprises</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Flat-rate monthly packages. No hidden fees, no lock-in contracts. Cancel anytime — we keep your business by delivering results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Starter",
                price: "$199",
                period: "/mo",
                desc: "For Brampton small businesses starting their SEO journey — clinics, trades, restaurants, retail.",
                features: ["Local keyword research", "On-page optimization (up to 5 pages)", "Google Business Profile management", "20 local citation submissions", "Monthly ranking report", "Free technical audit"],
                cta: "Start Ranking",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$399",
                period: "/mo",
                desc: "The complete Brampton SEO package for businesses ready to dominate multiple keyword clusters.",
                features: ["Full keyword strategy (50+ targets)", "On-page optimization (unlimited pages)", "GBP + local pack optimization", "50+ citation submissions", "Monthly content (1 blog + 1 landing page)", "Link building — Canadian publications", "Weekly ranking updates", "Dedicated account manager"],
                cta: "Get Growth Plan",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "tailored scope",
                desc: "For multi-location Brampton businesses, healthcare groups, logistics companies, and e-commerce brands.",
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
          <p className="text-center text-gray-400 text-sm">All plans include a free Brampton SEO audit. Monthly packages — no lock-in, cancel anytime.</p>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Your SEO Journey</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What Brampton SEO Looks Like Month by Month</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Brampton&apos;s keyword difficulty of 22 makes it one of the most achievable SEO markets in the GTA. Here&apos;s the realistic timeline for what our clients achieve.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { month: "Month 1", title: "Audit, Strategy & Technical Foundation", desc: "We run a complete Brampton SEO audit: your current keyword positions, site technical health, Google Business Profile status, backlink profile, and competitor keyword gaps across your target Brampton neighbourhoods. We fix all critical on-site technical issues, optimize meta titles and descriptions for your core Brampton keywords, update your GBP listing, and submit the first batch of 20 priority citations. Month 1 ends with a solid SEO foundation." },
              { month: "Months 2–3", title: "Content Optimization & Citation Building", desc: "We optimize every key service page for Brampton search intent and publish neighbourhood-specific content targeting Downtown, Bramalea, Heart Lake, and Castlemore. Citation building continues across 50+ directories. Most Brampton SEO clients see their first ranking movements in weeks 6–8 — pages start climbing from positions 25–50 into the top 20, and your GBP begins gaining impressions for local pack queries." },
              { month: "Months 3–6", title: "Page 1 Rankings for Targeted Keywords", desc: "Lower-difficulty Brampton keywords break into page 1 — particularly neighbourhood-specific searches like 'seo company brampton' and service combinations with Bramalea, Heart Lake, or Castlemore. Organic traffic grows measurably. Your Google Business Profile gains calls, direction requests, and website visits from Brampton local pack appearances. Monthly reports show exactly where you rank against key Brampton competitors." },
              { month: "Month 6+", title: "Compounding Authority & Sustained Growth", desc: "Higher-volume Brampton keywords move into the top 20–30 as domain authority grows. Rankings compound — each new piece of content and citation multiplies the authority of everything else. Organic becomes a consistent, growing lead channel. The low keyword difficulty in Brampton means that businesses investing in SEO now are building durable rankings that will be difficult for new entrants to displace for years." },
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
              Brampton SEO — Common Questions
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
              { name: "SEO North York", slug: "north-york" },
              { name: "SEO Winnipeg", slug: "winnipeg" },
              { name: "SEO Calgary", slug: "calgary" },
              { name: "SEO Ottawa", slug: "ottawa" },
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
        <Image src="/blog/posts/SEARCH-ENGINE-OPTIMIZATION-1.png" alt="Expert SEO for Brampton businesses" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your Brampton Business{" "}
            <span className="gradient-text-animated">on Page 1?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you exactly where you rank today,
            who&apos;s beating you in Brampton, and how we&apos;ll get you to page 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Brampton SEO Audit
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

      <QuoteFormSection source="seo-brampton" mobileOnly />
    </>
  );
}
