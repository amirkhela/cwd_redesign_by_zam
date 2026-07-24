import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: { absolute: "Web Design Toronto | Custom Websites That Rank | Canadian Website Design" },
  description:
    "Toronto's top-rated web design agency — 200+ five-star reviews. Custom websites built to rank and convert, serving Etobicoke, Scarborough & Yorkville.",
  alternates: { canonical: "/locations/toronto" },
  openGraph: {
    title: "Web Design Toronto | Custom Websites That Rank | Canadian Website Design",
    description:
      "Toronto's top-rated web design agency. 200+ five-star reviews. Custom websites that rank on Google & win customers across the GTA.",
    url: "https://canadianwebdesigns.ca/locations/toronto",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Web Design Toronto — Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much does web design cost in Toronto?",
    a: "Cost depends on the scope — the number of pages, features, and level of customization. We provide free, no-obligation quotes tailored to your specific goals. Every project includes mobile optimization, on-page SEO, and Google Analytics setup.",
  },
  {
    q: "How long does it take to rank on Google in Toronto?",
    a: "Toronto is Canada's most competitive SEO market. For high-volume keywords like 'web design toronto' or 'lawyer toronto', expect 4–8 months of consistent SEO to reach page 1. For location-specific searches ('web design north york', 'dentist etobicoke'), you can often see page 1 movement within 6–12 weeks. We provide monthly ranking reports so you always know where you stand.",
  },
  {
    q: "Do you work with small businesses in Toronto?",
    a: "The majority of our Toronto clients are small and medium businesses — trades, clinics, law firms, restaurants, and professional services. Every project is fully custom (no templates) and includes mobile optimization, local SEO setup, and 30 days of post-launch support. We've built websites for hundreds of Toronto SMBs across every major neighbourhood and industry.",
  },
  {
    q: "Can you help my Toronto business show up in Google Maps?",
    a: "Yes — Google Business Profile (Maps) optimization is included in all our Toronto SEO packages. We optimize your listing, write keyword-rich descriptions, build local citations across Canadian directories, add photos and service areas, and help generate authentic 5-star reviews. Appearing in Toronto's Google local pack (the map results at the top of the page) is one of the highest-ROI moves a local business can make.",
  },
  {
    q: "What makes Canadian Web Designs different from other Toronto web agencies?",
    a: "Three things: results, transparency, and communication. Unlike agencies that hand you off to a junior account manager, you work directly with your developer throughout the project. We show you real ranking data, not vanity metrics. And we back every website with a results guarantee — if you don't see movement within our agreed timeline, we keep working at no charge. With 200+ five-star Google reviews, our track record speaks for itself.",
  },
  {
    q: "Do you build e-commerce websites for Toronto businesses?",
    a: "Yes — e-commerce is one of our fastest-growing Toronto specialties. We build Shopify, WooCommerce, and custom e-commerce sites for Toronto retailers, food brands, and product-based businesses. Every e-commerce site includes product SEO, speed optimization, payment gateway integration, and mobile-first design. Our Toronto e-commerce clients typically see 30–50% higher conversion rates than their previous sites.",
  },
  {
    q: "What is the best web design agency in Toronto?",
    a: "Canadian Web Designs is consistently ranked as one of Toronto's top web design agencies based on Google reviews, client results, and search performance. With 200+ five-star reviews, a proven track record of ranking Toronto businesses on Google page 1, and fully custom (no-template) websites, we stand out from the hundreds of Toronto agencies that use cookie-cutter approaches. See our portfolio and reviews at canadianwebdesigns.ca.",
  },
  {
    q: "How much does a web design company in Toronto charge?",
    a: "Toronto web design costs vary widely — from budget template builders to enterprise custom development. For a professional, custom, SEO-optimized website from a reputable Toronto agency, pricing depends on your project scope. Canadian Web Designs offers flat-rate pricing with no surprises — we provide a tailored quote after a free consultation.",
  },
  {
    q: "Do you work with Toronto tech startups and SaaS companies?",
    a: "Yes — tech is one of our fastest-growing Toronto verticals. We build SaaS marketing sites, product landing pages, and investor-ready web presences for Toronto startups from pre-seed through Series B. We understand what Toronto's tech ecosystem needs: fast, modern, and built to convert high-intent B2B visitors.",
  },
  {
    q: "How do I find a reliable web design company in Toronto?",
    a: "Look for three things: verifiable reviews, real portfolio case studies with measurable results, and transparent pricing. Avoid agencies that can't show you ranking data for their own clients. Canadian Web Designs has 200+ Google reviews, a public portfolio at canadianwebdesigns.ca/portfolio, transparent flat-rate pricing, and a results guarantee — if you don't see movement, we keep working at no charge.",
  },
  {
    q: "What should I expect from a Toronto web design agency?",
    a: "A professional Toronto web design agency should deliver a mobile-first, SEO-optimized website with clear timelines, transparent pricing, and ongoing communication. You should receive Google Analytics setup, on-page SEO, and at least 30 days of post-launch support. Red flags include templates passed off as custom work, no pricing on their own site, and lack of Google reviews. Canadian Web Designs is fully custom, fully transparent, and has 11+ years of Toronto-specific results to back it up.",
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
  "@id": "https://canadianwebdesigns.ca/locations/toronto",
  name: "Canadian Web Designs — Toronto Web Design Agency",
  description:
    "Toronto's top-rated web design agency offering custom websites, local SEO, Google Ads, social media, and digital marketing for businesses across Toronto, North York, Scarborough, Etobicoke, and the GTA.",
  url: "https://canadianwebdesigns.ca/locations/toronto",
  telephone: "647-689-6069",
  email: "sales@canadianwebdesigns.ca",
  priceRange: "$$",
  image: "https://canadianwebdesigns.ca/images/hero-leading-web-design.jpg",
  logo: "https://canadianwebdesigns.ca/logos/logo.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2967 Dundas St W #718",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6P 1Z2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  hasMap: "https://www.google.com/maps/search/Canadian+Web+Designs+Toronto",
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "North York" },
    { "@type": "City", name: "Scarborough" },
    { "@type": "City", name: "Etobicoke" },
    { "@type": "City", name: "East York" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Shawn M." },
      reviewBody:
        "Best web design agency in Toronto! They built our e-commerce site from scratch and the results have been incredible. The SEO work they did has us ranking on the first page of Google for 'toronto e-commerce web design'. Highly recommend.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sharanya K." },
      reviewBody:
        "Canadian Web Designs completely transformed our Toronto clinic's online presence. Our patient inquiries increased by over 300% within the first month. They understood exactly what a Toronto healthcare business needs.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "GTA Grizzly" },
      reviewBody:
        "The best web design company in Canada. Their Toronto SEO work put us on the first page of Google within weeks. Professional, fast, and the results speak for themselves.",
    },
  ],
  sameAs: [
    "https://facebook.com/canadianwebdesigns",
    "https://instagram.com/canadianwebdesigns",
    "https://linkedin.com/company/canadianwebdesigns",
  ],
};

const TORONTO_NEIGHBOURHOODS = [
  "Downtown Core", "Financial District", "North York", "Scarborough",
  "Etobicoke", "East York", "Midtown", "Leslieville",
  "Kensington Market", "The Annex", "Yorkville", "Liberty Village",
  "Danforth / Greektown", "Distillery District", "Rosedale", "Parkdale",
];

const TORONTO_INDUSTRIES = [
  { name: "Healthcare & Clinics", icon: "🏥" },
  { name: "Law Firms & Legal", icon: "⚖️" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Restaurants & Hospitality", icon: "🍽️" },
  { name: "Contractors & Trades", icon: "🔧" },
  { name: "Retail & eCommerce", icon: "🛍️" },
  { name: "Financial Services", icon: "💼" },
  { name: "Education & Training", icon: "🎓" },
];

export default function TorontoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Locations", href: "/locations/toronto" },
          { name: "Toronto", href: "/locations/toronto" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/web-design-company.png"
          alt="Web design Toronto — Canadian Web Designs agency"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.96) 0%, rgba(1,12,30,0.87) 50%, rgba(1,12,30,0.78) 100%)" }}
        />
        <div
          className="absolute top-0 left-[8%] w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.24 }}
        />
        <div
          className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.32, animationDelay: "2.5s" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }}
              />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Toronto, ON — 200+ Five-Star Google Reviews
              </span>
            </div>

            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.05 }}
            >
              Web Design Agency Toronto —{" "}
              <span className="gradient-text-animated">Built to Rank. Built to Convert.</span>
            </h1>

            <p className="hero-fade-up-2 text-xl text-white/65 leading-relaxed mb-4 max-w-2xl">
              Toronto&apos;s most-trusted web design agency since 2014. Custom websites that rank on Google, load in under 2 seconds, and turn visitors into paying customers.
            </p>
            <p className="hero-fade-up-2 text-base text-white/50 leading-relaxed mb-8 max-w-2xl">
              Serving Downtown Toronto, North York, Scarborough, Etobicoke, and the entire GTA.
            </p>

            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:647-689-6069"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (647) 689-6069
              </a>
              <Link href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                View Our Work
              </Link>
            </div>

            {/* Stats bar */}
            <div className="hero-fade-up-4 flex flex-wrap gap-8">
              {[
                { value: "200+", label: "5-Star Reviews" },
                { value: "500+", label: "Toronto Websites Built" },
                { value: "11", label: "Years Serving Toronto" },
                { value: "100%", label: "Results Guaranteed" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="location-toronto" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <GoogleReviews />

      {/* ─── WHY TORONTO BUSINESSES NEED BETTER WEB DESIGN ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Toronto&apos;s Digital Landscape
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Why Toronto Businesses Can&apos;t Afford a Mediocre Website
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Toronto is Canada&apos;s most competitive digital market — and the gap between a page-1 website and a page-3 website is the difference between a thriving business and an invisible one. With over 3 million people, hundreds of thousands of SMBs, and some of the highest commercial intent search volumes in North America, the Toronto market rewards businesses that invest in professional web design and local SEO.
                </p>
                <p>
                  The average Toronto consumer Googles before they buy, book, or call. Whether they&apos;re searching for a contractor in Etobicoke, a clinic in North York, or a restaurant in the Distillery District — the businesses on page 1 capture 90%+ of that traffic. Position 1 alone captures 27–34% of all clicks. If your Toronto website isn&apos;t on page 1, you&apos;re invisible to the customers who are ready to spend money right now.
                </p>
                <p>
                  Canadian Web Designs has been building high-performance websites for Toronto businesses since 2014. We&apos;ve worked with healthcare clinics on Yonge Street, law firms in the Financial District, contractors in Etobicoke, restaurants in Leslieville, and retailers across the GTA. We know Toronto — the neighbourhoods, the competition, the search patterns — and we build websites specifically engineered to win here.
                </p>
                <p>
                  Every Toronto website we build is mobile-first (70%+ of Toronto searches happen on smartphones), loads in under 2 seconds, and is optimized for the exact keywords your ideal customers are searching. We don&apos;t use templates. We don&apos;t outsource. And we back every project with a results guarantee.
                </p>
                <p>
                  Looking to grow beyond web design? We offer comprehensive{" "}
                  <Link href="/services/seo" className="text-[#00AADF] font-semibold hover:underline">SEO services in Toronto</Link>{" "}
                  to drive sustained organic traffic, and{" "}
                  <Link href="/ecommerce-website-design-toronto" className="text-[#00AADF] font-semibold hover:underline">ecommerce website design</Link>{" "}
                  for Toronto retailers ready to sell online at scale.
                </p>
              </div>
            </div>

            <div className="reveal delay-2 space-y-5">
              <h3 className="text-xl font-black text-gray-900">Why 500+ Toronto Businesses Choose CWD</h3>
              {[
                {
                  icon: "📍",
                  title: "Deep Toronto Market Knowledge",
                  body: "We know the difference between a Yorkville boutique's SEO needs and a Scarborough contractor's. Our local strategies are calibrated for Toronto's neighbourhoods, not generic Canada-wide campaigns.",
                },
                {
                  icon: "⚡",
                  title: "Sites That Load Under 2 Seconds",
                  body: "Google's ranking algorithm prioritizes fast sites — and Toronto mobile users bounce in under 3 seconds on slow pages. Every site we build passes Core Web Vitals with a 90+ PageSpeed score.",
                },
                {
                  icon: "📈",
                  title: "Rank on Google in 60–90 Days",
                  body: "Our Toronto SEO process targets quick-win keywords while building long-term authority. Most clients see measurable ranking movement within 60–90 days of launch.",
                },
                {
                  icon: "🤝",
                  title: "You Talk to Your Developer Directly",
                  body: "No account managers, no ticket systems, no runaround. You have direct access to the person building your site throughout the project — a rarity in the Toronto agency world.",
                },
                {
                  icon: "🔒",
                  title: "Results Guarantee — Or We Keep Working",
                  body: "If your Toronto website doesn't perform within the agreed timeline, we keep optimizing at no charge. We don't just build sites and disappear.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#00AADF]/30 hover:shadow-md transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="font-black text-gray-900 text-base mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES FOR TORONTO ─── */}
      <section className="py-16 relative" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Toronto Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Everything Your Toronto Business Needs to Dominate Online
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Web Design & Development Toronto",
                desc: "Custom, conversion-focused websites built for Toronto's competitive market. Mobile-first, fast-loading, and rank-ready from launch day.",
                href: "/services/web-design-development",
              },
              {
                title: "Toronto Local SEO",
                desc: "Rank on the first page of Google for 'web design toronto' and your target keywords. Google Maps, local citations, and content strategy included.",
                href: "/services/seo",
              },
              {
                title: "Google Ads Management Toronto",
                desc: "Drive immediate leads from high-intent Toronto searches. We build, manage, and optimize campaigns that generate real revenue — not just clicks.",
                href: "/contact",
              },
              {
                title: "E-Commerce Websites Toronto",
                desc: "Shopify and WooCommerce stores built for Toronto retailers. Product SEO, payment gateway integration, and mobile-first UX out of the box.",
                href: "/services/web-design-development",
              },
              {
                title: "Website Maintenance Toronto",
                desc: "Keep your Toronto site secure, fast, and up-to-date with monthly maintenance plans. Updates, backups, uptime monitoring, and priority support.",
                href: "/services/website-maintenance",
              },
              {
                title: "Digital Marketing Toronto",
                desc: "Full-service digital marketing for Toronto businesses — social media, content, email, and paid advertising all managed under one roof.",
                href: "/services/social-media-optimization",
              },
            ].map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300 block"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center reveal">
          <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Get Started</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Ready to Grow Your Toronto Business Online?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Every project is custom-scoped — no templates, no guesswork. Tell us about your Toronto business and we&apos;ll send you a free, no-obligation quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-base transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
          >
            Request a Free Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── TORONTO NEIGHBOURHOOD EXPERTISE ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Local Expertise
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                We Know Every Toronto Neighbourhood — and How to Rank In It
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Generic web design agencies build generic websites. We build Toronto-specific websites that are engineered for the exact neighbourhood your customers are searching from. A Yorkville law firm needs different keyword strategy than a Scarborough contractor — and we know the difference.
                </p>
                <p>
                  Our Toronto SEO work goes neighbourhood-deep: we optimize for &quot;web design north york&quot;, &quot;dentist etobicoke&quot;, &quot;contractor scarborough&quot; — the hyper-local searches with high buyer intent and lower competition than broad Toronto terms. These are the keywords that bring in real customers, not just traffic.
                </p>
                <p>
                  We&apos;ve served clients in every major Toronto neighbourhood. Whether you&apos;re on the Danforth, in the Financial District, or in Parkdale — we know your local market and we know how to win it.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
              >
                Get a Free Toronto SEO Analysis
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="reveal delay-2">
              <h3 className="text-lg font-black text-gray-900 mb-5">Toronto Neighbourhoods We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TORONTO_NEIGHBOURHOODS.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
                    style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Industries</span>
            <h2 className="text-3xl font-black text-gray-900">Toronto Industries We Specialize In</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TORONTO_INDUSTRIES.map((ind, i) => (
              <div
                key={ind.name}
                className="bg-gray-50 rounded-2xl p-6 text-center reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <span className="text-3xl block mb-3">{ind.icon}</span>
                <p className="text-sm font-bold text-gray-800">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Common Questions from Toronto Businesses</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED CITIES ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6">Also serving the Greater Toronto Area:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "North York", slug: "north-york" },
              { name: "Mississauga", slug: "mississauga" },
              { name: "Brampton", slug: "brampton" },
              { name: "Vaughan", slug: "vaughan" },
              { name: "Richmond Hill", slug: "richmond-hill" },
              { name: "Oshawa", slug: "oshawa" },
              { name: "Hamilton", slug: "hamilton" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200"
              >
                Web Design {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image
          src="/blog/seo-services-london-ontario.png"
          alt="Grow your Toronto business online with Canadian Web Designs"
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }}
        />
        <div
          className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.28 }}
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
            Ready to Rank #1 in Toronto?{" "}
            <span className="gradient-text-animated">Let&apos;s Talk.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free consultation, no commitment. We&apos;ll audit your current website and show you exactly how to reach page 1 for your Toronto keywords.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
            >
              Get Your Free Toronto Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:647-689-6069"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (647) 689-6069
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10 reveal delay-3">
            {["No long-term contracts", "Free initial audit", "Results guaranteed"].map((t) => (
              <span key={t} className="text-white/40 text-sm flex items-center gap-2">
                <span className="text-[#00AADF]">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <QuoteFormSection source="location-toronto" mobileOnly />
    </>
  );
}
