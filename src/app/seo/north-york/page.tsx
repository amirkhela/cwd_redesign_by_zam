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
  title: { absolute: "SEO North York | SEO Services | Canadian Web Designs" },
  description:
    "North York SEO that beats downtown Toronto agencies — lower difficulty, same buyer intent. 200+ reviews. Free audit — (647) 689-6069.",
  alternates: { canonical: "/seo/north-york" },
  openGraph: {
    title: "SEO North York | SEO Services | Canadian Web Designs",
    description:
      "Expert SEO services in North York, ON. Rank on Google page 1 for North York searches. 200+ five-star reviews. Free audit — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/seo/north-york",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "SEO North York — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does SEO cost for a North York business?",
    a: "Our North York SEO packages are scoped to your goals. Every package includes keyword research, on-page optimization, Google Business Profile management, local citation building, and monthly ranking reports. North York sits inside Toronto, which means GTA competition — but North York-specific search terms have much lower difficulty, making it very achievable to rank page 1 for 'seo north york' and related searches within 60–90 days.",
  },
  {
    q: "How long does SEO take in North York?",
    a: "North York keyword difficulty is moderate — lower than downtown Toronto but competitive given its population. For neighbourhood-specific searches like 'seo company north york' and 'north york seo agency', most clients see page 1 movement in 60–90 days. More competitive terms take 3–5 months. We track every keyword monthly and show you exactly where you're climbing.",
  },
  {
    q: "Is North York SEO different from Toronto SEO?",
    a: "Yes — and the difference matters. North York sits within Toronto's city limits, so without North York-specific optimization, your business ranks in the general Toronto search pool where competition is extremely high. By building North York-specific content, citations, and Google Business Profile signals, we differentiate your business geographically and capture the lower-competition North York keyword cluster — which has significantly less competition than broad Toronto terms.",
  },
  {
    q: "Do you serve all of North York?",
    a: "Yes — we build neighbourhood-specific content and citation strategies for all major North York areas: North York Centre (Yonge & Sheppard, Yonge & Eglinton), Willowdale, Bayview Village, Don Mills, Jane & Finch, York Mills, and Lawrence Park North. Hyper-local targeting captures long-tail searches from customers who identify with a specific North York area.",
  },
  {
    q: "Can you get my North York business into the Google local pack?",
    a: "Yes — Google Business Profile optimization is included in every North York SEO package. We optimize your GBP with service areas covering all North York neighbourhoods, keyword-rich descriptions, regular photo updates, weekly posts, and a review generation system. North York's local pack is very winnable — most local competitors have underdeveloped GBP listings.",
  },
  {
    q: "What industries do you serve with North York SEO?",
    a: "All major North York sectors: healthcare and medical clinics (near Humber River Hospital and North York General), financial services, legal practices, restaurants and hospitality, real estate and mortgage, professional services, retail, and contractors. North York's dense professional services sector means strong ROI on local SEO — residents search Google before calling any service provider.",
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
  serviceType: "Web design and digital marketing",
  "@id": "https://canadianwebdesigns.ca/seo/north-york#service",
  provider: { "@id": `https://${config.domain}/#organization` },
  name: "Canadian Web Designs — SEO North York",
  description: "Expert SEO services for North York businesses. Rank on Google page 1 and get more local leads.",
  url: "https://canadianwebdesigns.ca/seo/north-york",
  areaServed: [
    { "@type": "City", name: "North York", containedInPlace: { "@type": "AdministrativeArea", name: "ON" } },
    { "@type": "Place", name: "Willowdale" },
    { "@type": "Place", name: "Bayview Village" },
    { "@type": "Place", name: "Don Mills" },
    { "@type": "Place", name: "North York Centre" },
  ],
};

const services = [
  {
    title: "Local SEO North York",
    desc: "Rank for 'seo north york', 'north york seo company', and neighbourhood searches across Willowdale, Bayview Village, Don Mills, and North York Centre.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Google Business Profile",
    desc: "Dominate North York's local pack. GBP optimization with North York-specific service areas, keyword-rich descriptions, weekly posts, and a review generation system.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "On-Page SEO",
    desc: "Every page optimized for North York keyword intent — title tags, meta descriptions, content depth, schema markup, and internal linking that signals geo-relevance to Google.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Citation Building",
    desc: "50+ Canadian and Ontario-specific directory submissions. Consistent NAP data across authoritative directories is one of the top three local ranking factors for North York searches.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Content Marketing",
    desc: "North York-specific blog posts and service pages targeting Willowdale, Bayview Village, Don Mills, and Jane & Finch buyers. Content that builds topical authority.",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
  },
  {
    title: "Technical SEO Audit",
    desc: "Full site crawl identifying speed issues, indexing errors, mobile usability problems, and Core Web Vitals failures that are suppressing your North York rankings.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.364 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
];

const neighbourhoods = [
  "Willowdale", "Bayview Village", "Don Mills", "North York Centre",
  "Jane & Finch", "York Mills", "Lawrence Park North", "Englemount",
  "Bathurst Manor", "Newtonbrook", "Parkwoods", "Victoria Village",
];

const industries = [
  "Healthcare & Medical Clinics", "Financial Services",
  "Legal Practices", "Restaurants & Hospitality",
  "Real Estate & Mortgage", "Professional Services",
  "Retail & Shopping", "Contractors & Trades",
];

export default function SeoNorthYorkPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "SEO North York", href: "/seo/north-york" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image src="/blog/posts/SEARCH-ENGINE-OPTIMIZATION-1.png" alt="Expert SEO services for North York businesses" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">North York, ON — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              North York{" "}<span className="gradient-text-animated">SEO Services</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google in North York. Get more calls, leads, and customers
              from organic search — without competing against all of Toronto.
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
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="seo-north-york" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">North York SEO Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Everything Your North York Business Needs to Rank</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Results-focused SEO built for North York&apos;s dense professional market — neighbourhood-specific strategies from Willowdale to Don Mills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div key={s.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}>
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
              {[
                { value: "200+", label: "Five-Star Reviews" },
                { value: "200+", label: "Monthly SEO Searches" },
                { value: "Low-Med", label: "Keyword Difficulty" },
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

      {/* ─── ABOUT ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">SEO in North York</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>Why North York Businesses Need Hyper-Local SEO</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                North York is home to 650,000+ residents, two major hospitals (Humber River and North York General),
                one of Toronto&apos;s most concentrated professional services corridors along Yonge Street, and a rapidly
                growing restaurant and retail scene. From the corporate towers at Yonge & Sheppard to the medical
                offices near the hospitals, every North York business depends on local customers finding them online.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The challenge: North York is technically part of Toronto. Without North York-specific optimization,
                your business ranks in the full Toronto search pool — competing with thousands of businesses city-wide.
                The solution is targeting North York-specific keywords like &quot;seo north york&quot;, &quot;seo agency north york&quot;,
                and neighbourhood searches like &quot;seo willowdale&quot; or &quot;don mills seo&quot; — where competition drops sharply
                and page 1 is achievable in 60–90 days rather than 6–12 months.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Canadian Web Designs builds North York SEO programs with this specificity in mind: keyword research
                targeting what North York customers are actually searching, content optimized for Willowdale and
                Bayview Village intent, Google Business Profile management covering all North York service areas, and
                citation building across Ontario directories. The result is page 1 rankings that drive real North York leads.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">North York Neighbourhoods We Target</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>{n}</span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">North York Industries We Serve</h3>
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why North York Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "200+ combined monthly searches across 'seo north york', 'web design north york' & 'seo services north york' — real demand at low competition",
                    "North York inside Toronto = GTA competition without Toronto-specific local signals",
                    "Willowdale, Bayview Village, Don Mills each have distinct search patterns",
                    "Most North York businesses have zero North York-specific SEO — easy to outrank",
                    "Proximity to Humber River & North York General creates strong healthcare demand",
                    "We've ranked North York businesses in healthcare, legal, retail, and professional services",
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
                    Get Your Free North York SEO Audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-3">Pricing</p>
                {[
                  { name: "Starter SEO", price: "$199/mo", desc: "Local SEO + GBP + citations" },
                  { name: "Growth SEO", price: "$399/mo", desc: "Full SEO + content + link building" },
                  { name: "Enterprise", price: "Custom", desc: "Multi-location + e-commerce" },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div><p className="text-sm font-bold text-gray-900">{pkg.name}</p><p className="text-xs text-gray-500">{pkg.desc}</p></div>
                    <span className="text-sm font-black text-[#00AADF]">{pkg.price}</span>
                  </div>
                ))}
                <Link href="/contact" className="mt-4 flex items-center justify-center gap-1 text-sm font-bold text-[#00AADF] hover:underline">Get a custom quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">North York SEO — Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
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
          <p className="text-center text-sm text-gray-500 mb-5">Also serving SEO across the GTA:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/toronto" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
              Web Design Toronto ↗
            </Link>
            {[
              { name: "SEO Mississauga", slug: "mississauga" },
              { name: "SEO Brampton", slug: "brampton" },
              { name: "SEO Vaughan", slug: "vaughan" },
              { name: "SEO Burnaby", slug: "burnaby" },
              { name: "SEO Ottawa", slug: "ottawa" },
            ].map((c) => (
              <Link key={c.slug} href={`/seo/${c.slug}`} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FURTHER READING ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Further reading on local SEO:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Local SEO & Google Business Profile Optimization", slug: "local-seo-and-gmb-optimization" },
              { name: "Local SEO Checklist for Small Businesses", slug: "local-seo-checklist-for-small-businesses" },
              { name: "10 Strategies to Boost SEO Rankings", slug: "top-10-tips-for-boosting-seo-for-2023" },
            ].map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#00AADF]/40 hover:text-[#00AADF] transition-all duration-200">
                {b.name} ↗
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/posts/SEARCH-ENGINE-OPTIMIZATION-1.png" alt="Expert SEO for North York businesses" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your North York Business{" "}
            <span className="gradient-text-animated">on Page 1?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you exactly where you rank, who&apos;s
            beating you in North York, and how we&apos;ll get you to page 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free North York SEO Audit
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

      <QuoteFormSection source="seo-north-york" mobileOnly />
    </>
  );
}
