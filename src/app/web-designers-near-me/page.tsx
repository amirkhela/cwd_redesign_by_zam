import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Designers Near Me | Custom Website Design | Canadian Web Designs" },
  description:
    "Top-rated web designers serving Toronto, Vancouver, Calgary, Mississauga & 20+ Canadian cities. Custom sites with SEO included. 200+ five-star reviews.",
  alternates: { canonical: "/web-designers-near-me" },
  openGraph: {
    title: "Web Designers Near Me | Custom Website Design | Canadian Web Designs",
    description:
      "Looking for web designers near you? We serve 20+ Canadian cities from Toronto to Vancouver — custom sites with SEO included. Free quote: (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/web-designers-near-me",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find a good web designer near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best web designers near you will have a portfolio of real client results, verifiable reviews, and clear pricing. Look for an agency that specializes in your city — they'll understand local SEO, local competition, and what your target customers are searching for. Canadian Web Designs serves 20+ Canadian cities with city-specific SEO strategies built into every website.",
      },
    },
    {
      "@type": "Question",
      name: "Does it matter if my web designer is local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For modern web design, physical proximity matters less than local market knowledge. What matters is whether your designer understands your city's competitive landscape, local SEO, and target audience. Canadian Web Designs has built websites for businesses across Toronto, Mississauga, Vancouver, Calgary, Ottawa, and 20+ other Canadian cities — with location-specific SEO strategies for each.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a web designer near me cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web design costs in Canada vary with the scope of your project — from a simple small business site to a full custom build with SEO and advanced features. Canadian Web Designs offers transparent pricing with options for every budget, and we provide a tailored quote after a free consultation. Every build includes SEO optimization.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in a local web designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Portfolio of local businesses with measurable results, verified Google reviews, transparent pricing with no hidden fees, a clear process, and SEO expertise. Many web designers near you build attractive sites that don't rank on Google — make sure your designer includes on-page SEO, proper meta tags, schema markup, and mobile optimization as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Do web designers near me build WordPress websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most local Canadian web designers work with WordPress — it powers 43% of all websites and is the best platform for SEO flexibility. Canadian Web Designs builds on WordPress for most projects, with WooCommerce for e-commerce and our AI WebSuite platform for businesses that want a managed, lower-cost solution.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard small business website takes 3–4 weeks from kickoff to launch. Custom WordPress builds with e-commerce or complex features typically take 5–8 weeks. We provide a detailed timeline at project start and keep you updated throughout — no disappearing for weeks without communication.",
      },
    },
  ],
};

const cities = [
  { name: "Toronto", slug: "toronto", province: "ON" },
  { name: "Mississauga", slug: "mississauga", province: "ON" },
  { name: "Brampton", slug: "brampton", province: "ON" },
  { name: "North York", slug: "north-york", province: "ON" },
  { name: "Vaughan", slug: "vaughan", province: "ON" },
  { name: "Markham", slug: "markham", province: "ON" },
  { name: "Vancouver", slug: "vancouver", province: "BC" },
  { name: "Burnaby", slug: "burnaby", province: "BC" },
  { name: "Surrey", slug: "surrey", province: "BC" },
  { name: "Calgary", slug: "calgary", province: "AB" },
  { name: "Edmonton", slug: "edmonton", province: "AB" },
  { name: "Ottawa", slug: "ottawa", province: "ON" },
  { name: "Winnipeg", slug: "winnipeg", province: "MB" },
  { name: "Hamilton", slug: "hamilton", province: "ON" },
  { name: "London", slug: "london", province: "ON" },
  { name: "Kitchener", slug: "kitchener", province: "ON" },
  { name: "Victoria", slug: "victoria", province: "BC" },
  { name: "Halifax", slug: "halifax", province: "NS" },
  { name: "Oshawa", slug: "oshawa", province: "ON" },
  { name: "Saskatoon", slug: "saskatoon", province: "SK" },
];

const process = [
  {
    step: "01",
    title: "Free Strategy Call",
    desc: "We learn your business, competitors, and goals. You get a clear scope, timeline, and quote — no vague estimates.",
  },
  {
    step: "02",
    title: "Design & Content",
    desc: "We design your site in your brand colours and write SEO-optimized content targeting your local market.",
  },
  {
    step: "03",
    title: "Build & Review",
    desc: "Your site is built on WordPress or our AI platform, tested on all devices, and reviewed with you before launch.",
  },
  {
    step: "04",
    title: "Launch & Rank",
    desc: "We launch, submit to Google Search Console, set up Analytics, and your site starts ranking from day one.",
  },
];

export default function WebDesignersNearMePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/web-design-development" },
          { name: "Web Designers Near Me", href: "/web-designers-near-me" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Serving 20+ Canadian Cities — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="font-black text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              Web Designers Near You —{" "}
              <span className="gradient-text-animated">Across Canada</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Canada&apos;s top-rated web design agency. Whether you&apos;re in Toronto, Vancouver, Calgary,
              or anywhere in between — we build websites that rank on Google and convert visitors
              into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
            <div className="flex flex-wrap justify-center gap-6">
              {["Custom Websites", "SEO Included", "No Lock-In Contracts", `${config.reviewCount}+ Reviews`].map((t) => (
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
              <HeroQuoteForm source="web-designers-near-me" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY LOCAL MATTERS ─── */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why It Matters</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                What &quot;Web Designers Near Me&quot; Actually Means in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                When you search for &quot;web designers near me,&quot; you&apos;re really looking for two things:
                a team you can trust and a team that understands your local market. Physical distance
                matters far less than it used to — what matters is whether your web designer knows
                your city, your competitors, and what your customers are searching for on Google.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Canadian Web Designs builds city-specific websites for businesses across Canada.
                When we build a website for a Toronto plumber, we target &quot;plumber toronto&quot; and
                neighbourhood-specific searches. When we build for a Vancouver restaurant, we
                optimize for &quot;restaurant vancouver&quot; and local dining intent. This isn&apos;t generic
                web design — it&apos;s local SEO baked into every page from day one.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With {config.reviewCount}+ verified five-star reviews from clients in Toronto,
                Mississauga, Brampton, Vancouver, Calgary, and 15+ other cities, we&apos;re the Canadian
                web design agency that businesses across the country trust to get results — not just
                a good-looking website that doesn&apos;t rank.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: `${config.reviewCount}+`, label: "Five-star reviews" },
                  { value: "20+", label: "Canadian cities" },
                  { value: "3–4wk", label: "Avg. launch time" },
                  { value: "2026", label: "Serving Canada since 2016" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-black text-gray-900 mb-1" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</p>
                    <p className="text-gray-500 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-2 space-y-4">
              <div className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-lg mb-4">Why Businesses Choose CWD</h3>
                <div className="space-y-3">
                  {[
                    "SEO-optimized from day one — not an add-on",
                    "City-specific keyword research for your local market",
                    "200+ verified Canadian client reviews",
                    "Transparent pricing — no hidden fees",
                    "No lock-in contracts — cancel anytime",
                    "Websites built to rank AND convert",
                    "WordPress, WooCommerce & AI WebSuite",
                    "Canadian-owned and operated",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Get a Free Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Cities We Serve</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Web Designers Near You — Find Your City
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              We build and rank websites for businesses in 20+ Canadian cities. Click your city for local pricing and examples.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 reveal">
            {cities.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`}
                className="group bg-white rounded-xl px-4 py-4 text-center border border-gray-100 hover:border-[#00AADF]/40 hover:shadow-md transition-all duration-200"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
                <p className="font-bold text-gray-900 text-sm group-hover:text-[#00AADF] transition-colors">{city.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{city.province}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Don&apos;t see your city?{" "}
            <Link href="/contact" className="text-[#00AADF] font-semibold hover:underline">Contact us</Link> — we serve all of Canada.
          </p>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── PROCESS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">From Quote to Launch in 3–4 Weeks</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">No disappearing agencies. Clear timeline, clear deliverables, clear pricing.</p>
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
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Design Pricing — Transparent & Flat Rate</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">No hourly billing. No surprise invoices. Fixed prices with everything included.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "AI WebSuite",
                price: "$299",
                period: "",
                desc: "For small businesses that need a professional online presence fast. AI-powered, fully managed.",
                features: ["AI-built professional website", "Hosting & SSL included", "Monthly content updates", "SEO-optimized from day one", "Mobile-first design", "No setup fee"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Custom WordPress",
                price: "$599",
                period: "",
                desc: "Full custom WordPress website — designed, built, and SEO-optimized for your local market.",
                features: ["Custom design (no templates)", "On-page SEO for your city", "Google Analytics setup", "Contact forms + integrations", "Mobile & speed optimized", "3 rounds of revisions"],
                cta: "Get a Quote",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "WooCommerce stores, multi-location sites, custom functionality, and complex integrations.",
                features: ["WooCommerce / eCommerce", "Multi-location SEO", "Custom post types & features", "CRM & booking integrations", "Advanced analytics setup", "Priority launch support"],
                cta: "Get a Quote",
                highlight: false,
              },
            ].map((plan) => (
              <div key={plan.name}
                className={`rounded-2xl p-8 reveal border transition-all duration-300 ${plan.highlight ? "border-[#00AADF]" : "border-gray-100 bg-white"}`}
                style={plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" } : { boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className={`text-sm font-bold tracking-widest uppercase mb-2 ${plan.highlight ? "text-white/70" : "text-[#00AADF]"}`}>{plan.name}</p>
                <p className={`text-4xl font-black mb-0.5 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</p>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.period}</p>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>{plan.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-white" : "text-[#00AADF]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${plan.highlight ? "bg-white text-[#003B6F] hover:bg-white/90" : "text-white hover:opacity-90"}`}
                  style={!plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)" } : {}}>
                  {plan.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Web Designers Near Me — Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Find the Right Web Designer{" "}
            <span className="gradient-text-animated">Near You</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free consultation — we&apos;ll show you exactly how we&apos;d approach your project,
            what it would cost, and how long it would take. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get a Free Quote
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

      <QuoteFormSection source="web-designers-near-me" mobileOnly />
    </>
  );
}
