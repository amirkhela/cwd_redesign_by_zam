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
  title: { absolute: "Vancouver Web Design | Custom Sites That Rank | Canada Web Designs" },
  description:
    "Vancouver's top-rated web design agency — Yaletown, Kitsilano & Metro Vancouver. Custom websites built to rank on Google and convert. 200+ reviews.",
  alternates: { canonical: "/locations/vancouver" },
  openGraph: {
    title: "Vancouver Web Design | Custom Sites That Rank | Canada Web Designs",
    description:
      "BC's top-rated web design agency. Custom websites built to rank in Metro Vancouver and convert visitors into customers. 200+ five-star reviews.",
    url: "https://canadianwebdesigns.ca/locations/vancouver",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Web Design Vancouver BC — Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How competitive is web design SEO in Vancouver?",
    a: "Vancouver is one of Canada's most competitive digital markets — keywords like 'web design vancouver' have difficulty scores of 35–50+, meaning ranking requires genuine on-page authority, local citations, and earned backlinks. That said, most Vancouver businesses still have poorly optimized websites, so a well-built site with a real local SEO strategy can reach page 1 within 90–180 days for mid-difficulty keywords. Neighbourhood-specific searches (Kitsilano, Mount Pleasant, Gastown) are significantly easier.",
  },
  {
    q: "How much does a website cost for a Vancouver business?",
    a: "Vancouver website pricing depends on your project scope — number of pages, e-commerce functionality, and design complexity. eCommerce and enterprise projects are scoped separately. All sites include mobile optimization, local SEO foundation, Google Analytics, and 30 days of post-launch support. We provide a tailored quote after a free, no-obligation consultation.",
  },
  {
    q: "Do you offer Vancouver-specific SEO services?",
    a: "Yes — we build Vancouver-specific SEO strategies that target Metro Vancouver searches: city-wide queries, neighbourhood-specific searches (Kitsilano, Yaletown, Commercial Drive, East Van, North Vancouver), and industry-vertical terms. We build Vancouver citations, optimize your Google Business Profile, and develop topical content that builds the local authority Google needs to rank your Vancouver business.",
  },
  {
    q: "Can you help my Vancouver business rank in Google Maps?",
    a: "Yes — Google Business Profile optimization is central to every Vancouver SEO package. Vancouver's local pack is competitive but winnable. We optimize your listing with keyword-rich descriptions, neighbourhood-targeted service areas, high-quality photos, weekly posts, and a systematic review generation program. Appearing in Vancouver's local pack for your core service keyword drives more booked appointments and calls than almost any other digital strategy.",
  },
  {
    q: "Do you work with Vancouver tech and SaaS companies?",
    a: "Yes — tech is one of our largest Vancouver verticals. Vancouver's tech ecosystem (home to Amazon, Apple, Microsoft, and hundreds of scale-ups) means we understand what enterprise-grade and growth-stage companies need from a web presence. We build SaaS marketing sites, product pages, and developer-facing sites that are built to convert high-intent B2B visitors.",
  },
  {
    q: "What's your process for building a Vancouver website?",
    a: "We start with a free discovery call and Vancouver competitor analysis. Then we scope your project, design wireframes, get your approval, build the site, and launch — typically in 3–5 business days for the first draft. After launch, we handle SEO, Google Business Profile optimization, and ongoing support. Every Vancouver project includes a dedicated project lead and transparent timelines.",
  },
  {
    q: "Do you work with Vancouver real estate businesses?",
    a: "Real estate is one of our most common Vancouver verticals. We build real estate agent websites, brokerage sites, and property developer sites with hyper-local content targeting Vancouver neighbourhoods — Kitsilano, Yaletown, West End, East Van, South Granville, Mount Pleasant, and the North Shore. We understand Vancouver's real estate market and build sites that attract the right buyers and sellers.",
  },
  {
    q: "Should a Vancouver business target neighbourhood SEO or city-wide terms first?",
    a: "Neighbourhood SEO first — always. Terms like 'web design kitsilano', 'seo mount pleasant', and 'contractor gastown' have difficulty scores of 15–25, compared to 45+ for 'web design vancouver'. We target Vancouver neighbourhood keywords immediately (quick wins) while building the domain authority to attack city-wide terms at months 3–6. Neighbourhood searches also convert better — someone searching 'physiotherapy kitsilano' is much closer to booking than someone searching 'physiotherapy vancouver'.",
  },
  {
    q: "How do you build local citations for a Vancouver business?",
    a: "We submit your business to 50+ Canadian and BC-specific directories: Google Business Profile, Bing Places, Apple Maps, Yelp Canada, Yellow Pages Canada, Canada411, Metro Vancouver and BC Chamber of Commerce sites, industry directories, and Vancouver neighbourhood directories. Consistent NAP (name, address, phone) data across authoritative sites is a top-3 local ranking factor for Vancouver's Google Maps results — and most Vancouver businesses have citation gaps we can close quickly.",
  },
  {
    q: "Do you work with Vancouver eCommerce businesses selling across Canada?",
    a: "Yes — eCommerce is a growing Vancouver vertical for us. We build WooCommerce and Shopify stores optimized for both local Vancouver searches and national product keywords. For Vancouver-based brands, we combine local SEO (capturing Vancouver shoppers) with national SEO (capturing product-intent searches across Canada). We also set up Google Shopping and Performance Max campaigns for immediate product visibility on Google.",
  },
  {
    q: "What makes Canadian Web Designs the best web design company in Vancouver?",
    a: "We combine Vancouver market expertise, proven local SEO results, and 200+ five-star reviews to deliver websites that actually rank and convert. Unlike most Vancouver web agencies that use templates, we build every site from scratch — custom to your brand, industry, and Metro Vancouver audience. Our results guarantee means we keep working at no extra charge if your site doesn't perform within the agreed timeline.",
  },
  {
    q: "Do you offer affordable web design for Vancouver small businesses?",
    a: "Yes. Vancouver small business websites are offered at a flat-rate, all-inclusive price that covers mobile-first design, on-page SEO, Google Analytics, contact form, and 30 days of post-launch support. No hidden fees, no recurring charges (unless you choose a maintenance plan). Pricing depends on your project scope — we provide a tailored quote after a free consultation.",
  },
  {
    q: "How do you help Vancouver businesses rank for 'web design vancouver' and similar searches?",
    a: "We use a multi-layered approach: a dedicated Vancouver service page with 1,500+ words of unique content targeting Vancouver-specific queries, local schema markup with your Vancouver address and geo-coordinates, internal links from our high-authority pages, Google Business Profile optimization for Vancouver, and citation building across BC-specific directories. Combined, these signals tell Google you are a Vancouver-based business serving the Metro Vancouver market.",
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
  "@id": "https://canadianwebdesigns.ca/locations/vancouver",
  name: "Canadian Web Designs — Web Design Vancouver & SEO",
  description: "Professional web design and SEO services for businesses in Vancouver, BC. Custom websites that rank on Google and convert visitors into paying customers.",
  url: "https://canadianwebdesigns.ca/locations/vancouver",
  telephone: "(647) 689-6069",
  email: "info@canadianwebdesigns.ca",
  geo: { "@type": "GeoCoordinates", latitude: 49.2827, longitude: -123.1207 },
  areaServed: [
    { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "AdministrativeArea", name: "BC" } },
    { "@type": "Neighborhood", name: "Kitsilano, Vancouver" },
    { "@type": "Neighborhood", name: "Yaletown, Vancouver" },
    { "@type": "Neighborhood", name: "Mount Pleasant, Vancouver" },
    { "@type": "Neighborhood", name: "Gastown, Vancouver" },
    { "@type": "Neighborhood", name: "Commercial Drive, Vancouver" },
    { "@type": "Neighborhood", name: "East Vancouver" },
    { "@type": "Neighborhood", name: "West End, Vancouver" },
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
  { title: "Web Design Vancouver", desc: "Custom, conversion-focused websites for Vancouver businesses. Mobile-first, fast-loading, and built to rank for Vancouver-specific searches across all neighbourhoods.", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" },
  { title: "Vancouver SEO", desc: "Rank on page 1 of Google for Vancouver searches. Local SEO strategies built for Metro Vancouver's competitive digital market — from Gastown to UBC.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { title: "Google Business Profile", desc: "Dominate Vancouver's Google Maps results. We optimize your GBP listing for Vancouver's local pack — targeting the neighbourhoods where your best customers search.", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
  { title: "eCommerce Development", desc: "WooCommerce and Shopify stores for Vancouver retailers, brands, and product businesses. Built for performance, SEO, and both local and national sales.", icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.696 2.075-3.27 2.454-4.568.048-.168.073-.34.073-.518a2.25 2.25 0 00-2.25-2.25h-2.25" },
  { title: "Tech & SaaS Websites", desc: "Growth-focused web design for Vancouver's tech ecosystem. We build SaaS marketing sites, developer-facing pages, and enterprise web apps that convert high-intent B2B visitors.", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" },
  { title: "Google Ads — Vancouver", desc: "Immediate top-of-page visibility for Vancouver searches while your organic SEO compounds. We manage targeted campaigns for Vancouver businesses that need leads now.", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

const process = [
  { step: "01", title: "Free Vancouver Audit", desc: "We analyze your current site, Vancouver keyword rankings, Google Business Profile, and top competitors — then show you exactly what it takes to rank above them in Metro Vancouver." },
  { step: "02", title: "Neighbourhood Keyword Strategy", desc: "We identify high-value Vancouver searches across neighbourhoods and industries — targeting terms your ideal customers are actually using, with realistic paths to page 1." },
  { step: "03", title: "Custom Design & Development", desc: "We build your Vancouver website from scratch — fast, mobile-first, with Vancouver-specific schema markup, geo-signals, and content architecture designed to rank." },
  { step: "04", title: "Launch & Vancouver SEO", desc: "We launch and immediately begin Vancouver SEO: GBP optimization for your neighbourhood, BC and Canadian citation building, review generation, and content publishing." },
];

const neighbourhoods = ["Downtown Vancouver", "Kitsilano", "Yaletown", "Mount Pleasant", "Gastown", "Commercial Drive", "East Vancouver", "West End", "South Granville", "UBC", "Fairview", "Hastings-Sunrise"];
const industries = ["Tech & SaaS", "Real Estate & Mortgage", "Healthcare & Wellness", "Restaurants & Hospitality", "Law Firms", "Finance & Accounting", "Retail & eCommerce", "Construction & Trades"];

export default function VancouverPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", href: "/locations/toronto" }, { name: "Vancouver", href: "/locations/vancouver" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/web-design-company.png" alt="Web design and SEO services for Vancouver BC businesses" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Vancouver, BC — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Web Design Vancouver &amp;{" "}<span className="gradient-text-animated">SEO That Ranks</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Custom websites built to rank on Google and convert Vancouver visitors into paying customers. No contracts. Results guaranteed.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Free Vancouver Quote
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <a href="tel:6476896069" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">(647) 689-6069</a>
            </div>
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {["200+ Google Reviews", "Metro Vancouver 2.5M+ Consumer Market", "Results or We Keep Working"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="location-vancouver" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Do in Vancouver</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Design & SEO Services for Vancouver Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Everything your Vancouver business needs to rank on Google, get more leads, and outgrow the competition.</p>
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
              {[{ value: "200+", label: "Five-Star Reviews" }, { value: "2.5M+", label: "Metro Vancouver Consumers" }, { value: "90–180", label: "Days to Page 1 Rankings" }, { value: "100%", label: "Results Guaranteed" }].map((s) => (
                <div key={s.label}><p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p><p className="text-gray-500 text-sm">{s.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ABOUT VANCOUVER */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Web Design in Vancouver BC</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>Why Vancouver Businesses Need Better Websites</h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Vancouver is one of Canada&apos;s most competitive and dynamic business markets — a city of 675,000+ anchored by a thriving tech sector, world-class real estate, a booming hospitality industry, thousands of healthcare providers, and one of Canada&apos;s most diverse small business communities. With Metro Vancouver&apos;s 2.5 million consumers actively searching Google before making buying decisions, the gap between a strong website and a weak one is measured in revenue, not just rankings.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Vancouver is also home to Amazon, Apple, Microsoft, Electronic Arts, Hootsuite, and hundreds of high-growth tech companies — which means the bar for digital professionalism is high. A consumer or business buyer in Vancouver has seen excellent websites and can immediately tell when yours is outdated, slow, or generic. Canadian Web Designs builds Vancouver websites that match the city&apos;s standard: fast, polished, mobile-optimized, and built to rank.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Vancouver&apos;s SEO landscape rewards specificity. Broad terms like &quot;web design vancouver&quot; are competitive, but neighbourhood-specific searches — &quot;web design kitsilano&quot;, &quot;seo mount pleasant&quot;, &quot;website designer gastown&quot; — have dramatically lower difficulty and higher buyer intent. We build neighbourhood-targeted content for Kitsilano, Yaletown, Mount Pleasant, Commercial Drive, and East Vancouver, stacking local authority that compounds across all Vancouver searches over time.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you&apos;re a Gastown retailer competing for tourist and local foot traffic, a Kitsilano wellness clinic fighting for patient bookings, a Yaletown tech company attracting enterprise clients, or a Commercial Drive restaurant trying to fill seats — we build the digital presence that puts you in front of Vancouver customers at the exact moment they&apos;re ready to buy.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Vancouver Neighbourhoods We Serve</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>{n}</span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">Industries We Serve in Vancouver</h3>
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Vancouver Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "Metro Vancouver has 2.5M+ consumers — the digital market is enormous for businesses that rank",
                    "Vancouver is Canada's second-largest tech hub — digital-first buyers expect excellent websites",
                    "Neighbourhood-specific Vancouver searches have low difficulty — Kitsilano, Gastown, Mount Pleasant are all winnable",
                    "We serve both the Vancouver market and surrounding Metro cities: Burnaby, Surrey, North Vancouver, Richmond",
                    "Vancouver's Google local pack rewards businesses with strong GBP, citations, and reviews — we build all three",
                    "We've ranked Vancouver businesses in tech, real estate, healthcare, trades, retail, and professional services",
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
                    Get Your Free Vancouver Quote
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Build & Rank Vancouver Websites</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">A proven 4-step process calibrated for Metro Vancouver&apos;s competitive local search landscape.</p>
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
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Vancouver Web Design Packages</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">Transparent pricing — no hidden fees. Every package includes SEO-optimized architecture and mobile-first responsive design.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <p className="text-sm font-bold text-[#00AADF] tracking-widest uppercase mb-3">Starter</p>
              <p className="text-4xl font-black text-gray-900 mb-1">$299</p>
              <p className="text-gray-400 text-sm mb-6">One-time investment</p>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Up to 5 pages", "Mobile-responsive design", "On-page SEO basics", "Contact form", "Google Analytics setup", "3-week delivery"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00AADF] font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/contact" className="block mt-8 text-center py-3 rounded-xl border-2 border-[#00AADF] text-[#00AADF] font-bold text-sm hover:bg-[#00AADF] hover:text-white transition-all duration-200">Get Started</a>
            </div>
            {/* Growth — highlighted */}
            <div className="rounded-2xl p-8 reveal text-white relative" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 32px rgba(0,170,223,0.35)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <p className="text-sm font-bold tracking-widest uppercase mb-3 text-blue-100">Growth</p>
              <p className="text-4xl font-black mb-1">$599</p>
              <p className="text-blue-200 text-sm mb-1">Ongoing SEO available</p>
              <p className="text-blue-200 text-xs mb-6">One-time build + monthly retainer</p>
              <ul className="space-y-3 text-sm text-blue-50">
                {["Up to 12 pages", "Custom UI/UX design", "Full on-page & technical SEO", "Local SEO + Google Business Profile", "Monthly rank tracking & reporting", "Ongoing content updates"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-yellow-300 font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/contact" className="block mt-8 text-center py-3 rounded-xl bg-white text-[#003B6F] font-black text-sm hover:bg-blue-50 transition-all duration-200">Start Growing</a>
            </div>
            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <p className="text-sm font-bold text-[#00AADF] tracking-widest uppercase mb-3">Enterprise</p>
              <p className="text-4xl font-black text-gray-900 mb-1">Custom</p>
              <p className="text-gray-400 text-sm mb-6">Scoped to your goals</p>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Unlimited pages", "E-commerce / booking systems", "Multi-location SEO strategy", "Custom integrations & APIs", "Dedicated account manager", "SLA-backed support"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00AADF] font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/contact" className="block mt-8 text-center py-3 rounded-xl border-2 border-[#00AADF] text-[#00AADF] font-bold text-sm hover:bg-[#00AADF] hover:text-white transition-all duration-200">Let&apos;s Talk</a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Timeline</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What Vancouver SEO Looks Like Month by Month</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Vancouver&apos;s keyword difficulty averages 45–60+ for city-wide terms. Here&apos;s a realistic roadmap so you know exactly what to expect.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { month: "Month 1", title: "Foundation & Audit", desc: "Full technical SEO audit, keyword mapping, Google Business Profile optimization, and citation cleanup across 50+ BC-specific directories." },
              { month: "Months 2–3", title: "On-Page & Content", desc: "Optimized landing pages for your target Vancouver neighbourhoods (Yaletown, Kitsilano, Burnaby, Surrey), schema markup, and initial link outreach to local publications." },
              { month: "Months 3–6", title: "Authority Building", desc: "Guest posts on Vancouver-focused media, backlink acquisition from Metro Vancouver business directories, and competitive gap analysis against top-ranking local competitors." },
              { month: "Month 6+", title: "Rankings & ROI", desc: "Expect first page visibility for neighbourhood-level keywords. City-wide competitive terms (difficulty 45+) typically hit page one by months 9–12 with consistent execution." },
            ].map((t, i) => (
              <div key={i} className="reveal bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-sm font-black text-[#00AADF] uppercase tracking-widest mb-2">{t.month}</div>
                <h3 className="font-black text-gray-900 text-base mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
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
            <h2 className="text-3xl font-black text-gray-900">Web Design Vancouver — Common Questions</h2>
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
          <p className="text-center text-sm text-gray-500 mb-5">Also serving across Metro Vancouver and all of Canada:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/toronto" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>Web Design Toronto ↗</Link>
            {[{ name: "Burnaby", slug: "burnaby" }, { name: "Surrey", slug: "surrey" }, { name: "Victoria", slug: "victoria" }, { name: "Calgary", slug: "calgary" }, { name: "Edmonton", slug: "edmonton" }, { name: "Ottawa", slug: "ottawa" }].map((c) => (
              <Link key={c.slug} href={`/locations/${c.slug}`} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{c.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/seo-services-london-ontario.png" alt="Grow your Vancouver business with web design and SEO" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Grow Your{" "}<span className="gradient-text-animated">Vancouver Business Online?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">Free consultation, no commitment. We&apos;ll show you exactly how we&apos;ll rank your Vancouver business above competitors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Vancouver Quote
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

      <QuoteFormSection source="location-vancouver" mobileOnly />
    </>
  );
}
