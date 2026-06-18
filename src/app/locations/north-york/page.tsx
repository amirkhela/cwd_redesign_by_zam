import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: "North York Web Design 2026 | 180+ Reviews | Free Quote",
  description:
    "North York's #1 web design agency for 2026. Custom sites from $1,499, page 1 Google results in 30–45 days. 180+ reviews. Free quote — (647) 689-6069.",
  alternates: { canonical: "/locations/north-york" },
  openGraph: {
    title: "North York Web Design 2026 | 180+ Reviews | Free Quote",
    description:
      "Top-rated web design & SEO in North York for 2026. 180+ five-star reviews. Custom sites from $1,499, rank faster than downtown Toronto. Free quote — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/locations/north-york",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Web Design North York — Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How fast can a North York business rank on Google?",
    a: "North York is one of the easiest local markets in the GTA to rank in — keyword difficulty for 'web design north york' is just 9. With proper on-page SEO and Google Business Profile optimization, we regularly see North York businesses reach page 1 for neighbourhood-specific searches within 30–45 days of launch. Broader Toronto terms take longer, but North York-specific keywords are highly achievable quickly.",
  },
  {
    q: "Why is hyper-local SEO important for North York businesses?",
    a: "North York searches are often neighbourhood-specific — 'dentist near Yonge and Sheppard', 'contractor North York', 'restaurant Willowdale' — and these hyper-local queries have high buyer intent and lower competition than broad Toronto keywords. We build content and schema markup that targets Willowdale, Yonge-Eglinton, Bayview Village, Don Mills, and Finch Ave searches specifically.",
  },
  {
    q: "Do you offer website packages for North York small businesses?",
    a: "Yes — we build fully custom websites for North York businesses starting at $1,499. Every package includes custom design, mobile optimization, local SEO foundation, Google Analytics, and 30 days of post-launch support. No templates, no hidden fees — everything built specifically for your North York business and target customers.",
  },
  {
    q: "Can you help my North York clinic or healthcare practice get more patients?",
    a: "Healthcare is one of our most common North York verticals. We've built websites for medical clinics, dental offices, physiotherapy practices, and specialist clinics along the Yonge-Sheppard and Wilson corridors. We understand healthcare SEO, patient intent, and PIPEDA requirements — and we know how to rank for searches like 'family doctor north york' and 'dentist near sheppard'.",
  },
  {
    q: "How do you differentiate North York SEO from general Toronto SEO?",
    a: "North York-specific searches have significantly lower difficulty than generic Toronto searches. 'Web design toronto' has difficulty 40+; 'web design north york' has difficulty 9. We target both — using North York as the primary geographic anchor and Toronto as the secondary — so you capture hyper-local traffic quickly while building authority for broader Toronto terms over time.",
  },
  {
    q: "Do you work with North York law firms and professional services businesses?",
    a: "Yes — professional services (law firms, accounting, financial advisory, consulting) are a major North York vertical for us. We understand the professional tone and credibility signals required in these industries, and we know the specific searches North York professionals need to rank for to attract high-value clients.",
  },
  {
    q: "What does a North York website redesign cost?",
    a: "Website redesign costs depend on your current platform, the number of pages to migrate, and your new feature requirements. We provide a free discovery call and detailed quote with no surprises. Most North York business website redesigns range from $1,499 to $5,999 depending on scope. Contact us to discuss your specific project.",
  },
  {
    q: "What's the difference between North York SEO and Google Ads?",
    a: "With keyword difficulty as low as 9, North York SEO can reach page 1 within 30–45 days — faster than almost anywhere else in the GTA. But Google Ads deliver top-of-page visibility from day one. For businesses that need immediate lead flow, we recommend starting with Google Ads while SEO builds. For businesses playing the long game, SEO compounds to deliver free leads indefinitely. Most established North York businesses run both in parallel.",
  },
  {
    q: "How do you build local citations for a North York business?",
    a: "We submit your business to 50+ Canadian and Ontario-specific directories: Google Business Profile, Bing Places, Apple Maps, Yelp Canada, Yellow Pages Canada, Canada411, Chamber of Commerce listings, healthcare and professional directories where applicable, and Toronto neighbourhood directories. Consistent NAP (name, address, phone) data across all these platforms is a top-3 local ranking factor for North York's Google Maps results — and most North York businesses have major citation gaps that are quick wins.",
  },
  {
    q: "Can you help a North York restaurant or food business get more customers?",
    a: "Restaurants and food businesses are one of our most common North York verticals. We optimize Google Business Profiles for hours, menu photos, and categories that drive 'restaurants near sheppard' and 'best food north york' searches. We build hyper-local content targeting Willowdale diners and corporate lunch crowds near Don Mills office parks. We also run Google Ads targeting mobile searchers actively looking for food near your location — one of the highest-intent audiences available in local advertising.",
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
  "@id": "https://canadianwebdesigns.ca/locations/north-york",
  name: "Canadian Web Designs — Web Design North York & SEO",
  description: "Professional web design and SEO services for businesses in North York, Toronto. Custom websites that rank on Google and convert visitors into customers.",
  url: "https://canadianwebdesigns.ca/locations/north-york",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  geo: { "@type": "GeoCoordinates", latitude: 43.7615, longitude: -79.4111 },
  areaServed: [
    { "@type": "City", name: "North York", containedInPlace: { "@type": "AdministrativeArea", name: "ON" } },
    { "@type": "Neighborhood", name: "Willowdale, North York" },
    { "@type": "Neighborhood", name: "Yonge-Sheppard, North York" },
    { "@type": "Neighborhood", name: "Bayview Village, North York" },
    { "@type": "Neighborhood", name: "Don Mills, North York" },
    { "@type": "Neighborhood", name: "Jane and Finch, North York" },
    { "@type": "Neighborhood", name: "Yonge-Eglinton, North York" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "180" },
};

const services = [
  { title: "Web Design North York", desc: "Custom, conversion-focused websites for North York businesses. Mobile-first, fast-loading, and SEO-optimized for Yonge-Sheppard, Willowdale, Bayview Village, and beyond.", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" },
  { title: "North York Local SEO", desc: "Hyper-local SEO targeting North York neighbourhood searches. Rank for 'your service + north york', 'near sheppard', and 'near yonge and finch' queries with high buyer intent.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { title: "Google Business Profile", desc: "Dominate North York's Google Maps results. We optimize your GBP listing for Willowdale, Sheppard-Yonge, and Bayview Village searches — where your customers are looking.", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
  { title: "Healthcare & Clinic Websites", desc: "Specialized websites for North York clinics, dental offices, physiotherapy, and specialist practices. PIPEDA-compliant, patient-friendly, and built to book appointments.", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { title: "Professional Services Sites", desc: "Credibility-first websites for North York law firms, accountants, financial advisors, and consultants. Built to attract high-value clients and rank for professional service searches.", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" },
  { title: "Google Ads — North York", desc: "Immediate top-of-page visibility for North York searches. We manage targeted Google Ads campaigns that put your business in front of North York customers now.", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

const process = [
  { step: "01", title: "Free North York Audit", desc: "We analyze your current site, neighbourhood rankings, Google Business Profile, and your top North York competitors — then show you exactly what it takes to outrank them." },
  { step: "02", title: "Neighbourhood Keyword Research", desc: "We identify the highest-value North York searches: Willowdale, Sheppard, Bayview, Finch. We target hyper-local queries that convert at higher rates than broad Toronto searches." },
  { step: "03", title: "Custom Design & Local SEO", desc: "We build your North York website from scratch — mobile-first, fast-loading, with North York-specific schema, geo coordinates, and neighbourhood-targeted content." },
  { step: "04", title: "GBP & Citation Building", desc: "We optimize your Google Business Profile for North York, build local citations in Toronto and Ontario directories, and start your review generation program." },
];

const neighbourhoods = ["Willowdale", "Yonge-Sheppard", "Bayview Village", "Don Mills", "Jane-Finch", "Yonge-Eglinton", "North York Centre", "Lawrence Park North", "Newtonbrook", "Bathurst Manor"];
const industries = ["Healthcare & Clinics", "Law Firms & Legal", "Restaurants & Food", "Contractors & Trades", "Real Estate", "Retail & Services", "Financial Services", "Education & Tutoring"];

export default function NorthYorkPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", href: "/locations/toronto" }, { name: "North York", href: "/locations/north-york" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/web-design-company.png" alt="Web design and SEO services for North York businesses" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">North York, Toronto — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Web Design North York &amp;{" "}<span className="gradient-text-animated">Local SEO</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Hyper-local websites and SEO for North York businesses. Rank in Willowdale, Sheppard, Bayview Village, and beyond. Results guaranteed.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Free North York Quote
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <a href="tel:6476896069" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">(647) 689-6069</a>
            </div>
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {["180+ Google Reviews", "North York SEO Difficulty: Only 9", "Page 1 Results in 30–45 Days"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Do in North York</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Design & SEO Services for North York Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Hyper-local web design and SEO for every North York neighbourhood — from Willowdale to Don Mills.</p>
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
              {[{ value: "180+", label: "Five-Star Reviews" }, { value: "Diff 9", label: "North York SEO Difficulty" }, { value: "30–45", label: "Days to First Rankings" }, { value: "100%", label: "Results Guaranteed" }].map((s) => (
                <div key={s.label}><p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p><p className="text-gray-500 text-sm">{s.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ABOUT NORTH YORK */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Web Design in North York</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>The GTA&apos;s Easiest Local SEO Market — North York</h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                North York is one of Toronto&apos;s most commercially active and densely populated districts — spanning major business corridors along Yonge Street, Sheppard Avenue, Wilson Avenue, and Finch Avenue. From Willowdale&apos;s upscale condo towers to the medical offices clustered around Sheppard-Yonge, from the tech companies in Don Mills to the restaurants and retailers lining Bayview, North York is a city within a city — and every business in it is competing for the same local Google searches.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                What makes North York exceptional from an SEO standpoint is its keyword difficulty. &quot;Web design north york&quot; has a difficulty of just 9 — making it one of the easiest local markets in the entire GTA to rank in. Compare that to downtown Toronto (difficulty 40+) or Mississauga (difficulty 25+), and the opportunity becomes clear: North York businesses that invest in a well-optimized website can reach page 1 for North York-specific searches within 30–45 days with the right strategy.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Canadian Web Designs builds websites and SEO strategies specifically for North York businesses. We target hyper-local searches — &quot;dentist near sheppard and yonge&quot;, &quot;contractor north york&quot;, &quot;web design willowdale&quot; — and build the neighbourhood-specific content and local authority that Google needs to rank you above competitors in your corridor. We build schema markup with North York geo-coordinates, optimize your Google Business Profile for Sheppard-Yonge, Bayview Village, and Don Mills, and build local citations in Toronto and Ontario directories.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you&apos;re a clinic on Sheppard trying to book more patients, a law firm on Yonge seeking higher-value clients, a restaurant in Willowdale wanting to drive dinner reservations, or a contractor in Bathurst Manor trying to rank above the big Toronto agencies — we build the digital presence that puts you in front of North York customers at the exact moment they&apos;re ready to call.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">North York Neighbourhoods We Serve</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>{n}</span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Industries We Serve in North York</h3>
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
                    "North York SEO keyword difficulty is just 9 — one of the easiest local markets in the GTA to rank quickly",
                    "Dense residential and commercial corridors mean high local search volume with strong buyer intent",
                    "Yonge-Sheppard and Bayview Village are premium areas — customers expect professional, trustworthy websites",
                    "North York's multicultural population means diverse search patterns — we build for all major demographics",
                    "Competition from downtown Toronto agencies is lower here — local businesses can outrank big agencies",
                    "We've ranked clinics, law firms, contractors, and restaurants in Willowdale, Don Mills, and Sheppard",
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
                    Get Your Free North York Quote
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Rank North York Businesses on Google</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">A proven 4-step process calibrated for North York&apos;s hyper-local search landscape.</p>
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Design & SEO Pricing for North York Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">No hidden fees. No lock-in contracts. Clear pricing, clear deliverables — and results you can measure every month.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Starter",
                price: "$1,499",
                period: "one-time",
                desc: "Perfect for North York small businesses launching or refreshing their digital presence.",
                features: ["5-page custom website", "Mobile-first responsive design", "On-page SEO foundation", "Google Analytics + Search Console", "Contact form + click-to-call", "30 days post-launch support"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$3,499",
                period: "one-time + $499/mo SEO",
                desc: "The complete package for North York businesses serious about ranking above their GTA competitors.",
                features: ["10–15 page custom website", "North York neighbourhood SEO", "Google Business Profile optimization", "Local citation building (50+ sites)", "Monthly ranking reports", "Dedicated account manager"],
                cta: "Get Growth Plan",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "quote",
                desc: "For clinics, law firms, or multi-location North York businesses with complex needs.",
                features: ["Unlimited pages + custom features", "Multi-location SEO strategy", "Full content marketing program", "Google Ads management", "Healthcare / legal compliance", "Priority support + SLA"],
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
          <p className="text-center text-gray-400 text-sm">All plans include a free North York audit and consultation. SEO packages are month-to-month — cancel anytime.</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Your SEO Journey</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What North York SEO Looks Like Month by Month</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">With keyword difficulty of just 9, North York SEO delivers results faster than anywhere else in the GTA. Here&apos;s what the journey looks like.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { month: "Month 1", title: "Audit, Strategy & Technical Foundation", desc: "We run a complete North York SEO audit: your current rankings across Willowdale, Sheppard, and Bayview Village searches, website technical health, and competitor gaps. We fix all on-site technical issues, optimize meta titles and descriptions for your North York keywords, update your GBP listing with neighbourhood-specific content, and submit your first 20 priority citations. By end of Month 1, your foundation is stronger than 90% of your North York competitors." },
              { month: "Weeks 6–8", title: "First Rankings Appear", desc: "North York's low keyword difficulty means movement happens fast. Most clients see their first ranking shifts in weeks 6–8 — pages climbing from positions 20–40 into the top 15 for North York-specific searches. Your Google Business Profile starts gaining impressions for Willowdale, Sheppard-Yonge, and Don Mills queries. Citation building continues across 50+ directories." },
              { month: "Months 2–3", title: "Page 1 for North York Keywords", desc: "Lower-difficulty terms like 'web design north york' and '[your service] willowdale' break onto page 1. Organic traffic becomes measurable. We expand your keyword footprint across more North York neighbourhood searches and begin building authority for broader Toronto terms using your North York wins as the foundation." },
              { month: "Month 3+", title: "Compound Growth Across the GTA", desc: "North York rankings compound into Toronto authority. As your North York pages build domain trust, broader Toronto keywords become reachable. You appear in the Google local pack for your primary North York service searches. Organic leads become a consistent, growing channel — and your early-mover advantage in North York becomes harder for competitors to close." },
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
            <h2 className="text-3xl font-black text-gray-900">Web Design North York — Common Questions</h2>
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
          <p className="text-center text-sm text-gray-500 mb-5">Also serving across the GTA and all of Canada:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/toronto" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>Web Design Toronto ↗</Link>
            {[{ name: "Mississauga", slug: "mississauga" }, { name: "Brampton", slug: "brampton" }, { name: "Vaughan", slug: "vaughan" }, { name: "Richmond Hill", slug: "richmond-hill" }, { name: "Markham", slug: "markham" }, { name: "Burnaby", slug: "burnaby" }].map((c) => (
              <Link key={c.slug} href={`/locations/${c.slug}`} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{c.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/seo-services-london-ontario.png" alt="Grow your North York business with web design and SEO" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your{" "}<span className="gradient-text-animated">North York Business on Google?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">Free consultation, no commitment. We&apos;ll show you exactly how to rank in Willowdale, Sheppard, and beyond.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free North York Quote
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
    </>
  );
}
