import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebDesignPackages from "@/components/WebDesignPackages";
import GoogleReviews from "@/components/GoogleReviews";
import { getConfig, reviewCountPlus } from "@/lib/client-config";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Design Services Toronto & GTA | Canadian Web Designs" },
  description:
    "Web design services for Toronto neighbourhoods and the GTA: Downtown, North York, Scarborough and Etobicoke. Custom, mobile-first sites from $299 CAD. Free quote.",
  alternates: { canonical: "/locations/toronto" },
  openGraph: {
    title: "Web Design Services Toronto & GTA | Canadian Web Designs",
    description:
      "Web design services for Toronto neighbourhoods and the GTA. Custom, mobile-first websites from $299 CAD. Free quote.",
    url: "https://canadianwebdesigns.ca/locations/toronto",
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Web design services in Toronto, Canadian Web Designs",
      },
    ],
  },
};

const faq = [
  {
    q: "How much do web design services cost in Toronto?",
    a: "Our packages start at $299 for a basic 3-page site, $449 for a WordPress site you can edit yourself and $699 for a 15-page site with booking and payments. Online stores start at $899. All prices are in Canadian dollars plus HST, and every site includes mobile optimization, on-page SEO basics and Google Analytics setup.",
  },
  {
    q: "How long does a Toronto website take to build?",
    a: "A standard business website usually takes 3 to 4 weeks from the first call to launch. Online stores and sites with booking or custom features usually take 5 to 8 weeks. We agree on the timeline before we start.",
  },
  {
    q: "Do you work with small businesses in Toronto?",
    a: "Most of our Toronto clients are small and medium businesses: trades, clinics, law firms, restaurants and professional services. Every site is custom (no templates) and includes 30 days of support after launch.",
  },
  {
    q: "Which parts of Toronto and the GTA do you serve?",
    a: "All of them. We build websites for businesses Downtown, in Midtown, the Annex, Leslieville, Liberty Village, Scarborough, Etobicoke and East York, and across the GTA. North York, Mississauga, Brampton, Vaughan and Richmond Hill each have their own page on our site.",
  },
  {
    q: "Do you build e-commerce websites for Toronto businesses?",
    a: "Yes. We build Shopify and WooCommerce stores for Toronto retailers, food brands and product businesses, with payments, shipping, HST and local pickup set up. See our Toronto e-commerce web design page for details.",
  },
  {
    q: "Can you redesign my Toronto website without losing my Google rankings?",
    a: "Yes. Before launch we map every old page to its new address and set up redirects, keep the titles and content that already rank, and check the new site in Google Search Console after it goes live.",
  },
  {
    q: "Do you also do SEO for Toronto businesses?",
    a: "Every website we build has on-page SEO basics included. For ongoing work such as Google Business Profile, local citations and monthly ranking reports, see our Toronto SEO service page.",
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
          alt="Web design services in Toronto"
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
                Toronto, ON · {reviewCountPlus(config.reviewCount)} Google Reviews
              </span>
            </div>

            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.05 }}
            >
              Web Design Services in Toronto{" "}
              <span className="gradient-text-animated">and Across the GTA</span>
            </h1>

            <p className="hero-fade-up-2 text-xl text-white/65 leading-relaxed mb-4 max-w-2xl">
              Custom websites for Toronto businesses, from the Financial District and Liberty Village to Scarborough and Etobicoke. Fast, mobile-first and built around how your customers search.
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
                { value: reviewCountPlus(config.reviewCount), label: "Google Reviews" },
                { value: "500+", label: "Toronto Websites Built" },
                { value: "11", label: "Years Serving Toronto" },
                { value: "$299", label: "Packages From (CAD)" },
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
                  Toronto is Canada&apos;s most competitive market for local businesses. With close to 3 million residents and a huge number of small businesses, customers have plenty of choice, and a slow or dated website sends them straight to the next result.
                </p>
                <p>
                  Most Toronto customers search before they buy, book or call, usually on a phone and usually for something nearby: a contractor in Etobicoke, a clinic in North York, a restaurant in the Distillery District. The website they land on has a few seconds to show it&apos;s the right business and make the next step easy.
                </p>
                <p>
                  Canadian Web Designs has been building high-performance websites for Toronto businesses since 2014. We&apos;ve worked with healthcare clinics on Yonge Street, law firms in the Financial District, contractors in Etobicoke, restaurants in Leslieville, and retailers across the GTA. We know the neighbourhoods and the competition, and we build each site for the part of the city its customers come from.
                </p>
                <p>
                  Every Toronto website we build is mobile-first, fast, and written around the services and areas your customers actually search for. We don&apos;t use templates and we don&apos;t outsource.
                </p>
                <p>
                  Want to know more about us? Start with our{" "}
                  <Link href="/" className="text-[#00AADF] font-semibold hover:underline">Toronto web design company</Link>{" "}
                  homepage. For ongoing rankings work there&apos;s our{" "}
                  <Link href="/seo/toronto" className="text-[#00AADF] font-semibold hover:underline">Toronto SEO service</Link>, and{" "}
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
                  body: "A Yorkville boutique and a Scarborough contractor need very different websites. We design for your neighbourhood and your customers, not a generic Canada-wide template.",
                },
                {
                  icon: "⚡",
                  title: "Sites That Load Under 2 Seconds",
                  body: "Toronto customers on their phones leave slow pages quickly, and Google favours fast sites. Every site we build passes Core Web Vitals with a 90+ PageSpeed score.",
                },
                {
                  icon: "📍",
                  title: "Pages for the Areas You Serve",
                  body: "If you serve several parts of the city, we build a page for each one, so a customer in Leslieville or Etobicoke finds the page that speaks to them.",
                },
                {
                  icon: "🤝",
                  title: "You Talk to Your Developer Directly",
                  body: "No account managers, no ticket systems, no runaround. You have direct access to the person building your site throughout the project.",
                },
                {
                  icon: "🔒",
                  title: "No Lock-In Contracts",
                  body: "You own your website and your domain. Maintenance is month-to-month, and we don't build sites and disappear.",
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
              Web Design Services for Toronto Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Custom Web Design Toronto",
                desc: "Custom, mobile-first websites for Toronto businesses, designed around the calls, bookings and quote requests you want.",
                href: "/services/web-design-development",
              },
              {
                title: "E-Commerce Websites Toronto",
                desc: "Shopify and WooCommerce stores for Toronto retailers, with payments, shipping, HST and local pickup set up.",
                href: "/ecommerce-website-design-toronto",
              },
              {
                title: "WordPress Websites",
                desc: "A WordPress site you can update yourself, with training at handover so your team can add pages and posts.",
                href: "/services/wordpress-website-design",
              },
              {
                title: "Shopify Stores",
                desc: "Shopify setup and custom themes for Toronto brands that want a store they can run without a developer.",
                href: "/services/shopify-website-design",
              },
              {
                title: "Web Apps & Portals",
                desc: "Client portals, booking systems and custom tools for Toronto businesses that have outgrown a standard website.",
                href: "/services/web-app-development",
              },
              {
                title: "Website Maintenance Toronto",
                desc: "Monthly updates, backups, security checks and small content changes, so your Toronto site stays fast after launch.",
                href: "/services/website-maintenance",
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

      {/* ─── PRICING ─── */}
      <WebDesignPackages city="Toronto" />

      {/* ─── CTA ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center reveal">
          <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Get Started</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Ready to Grow Your Toronto Business Online?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Every project is custom-scoped, with no templates and no guesswork. Tell us about your Toronto business and we&apos;ll send you a free, no-obligation quote within 24 hours.
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
                Websites Built for Your Part of Toronto
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  A Yorkville law firm, a Leslieville café and a Scarborough contractor have very different customers. We build each website around who those customers are, what they search for and what they need to see before they call.
                </p>
                <p>
                  That often means pages for the specific areas you serve, such as &quot;dentist Etobicoke&quot; or &quot;contractor Scarborough&quot;, with real photos, directions and opening hours. These local details are what turn a visitor from down the street into a customer.
                </p>
                <p>
                  We&apos;ve built websites for businesses on the Danforth, in the Financial District, in Parkdale and across the city. See real client feedback on our{" "}
                  <Link href="/testimonials" className="text-[#00AADF] font-semibold hover:underline">testimonials page</Link>, or read our{" "}
                  <Link href="/blog/your-guide-to-choosing-a-web-design-company-in-toronto-and-the-gta" className="text-[#00AADF] font-semibold hover:underline">guide to choosing a Toronto web design company</Link>{" "}
                  and{" "}
                  <Link href="/blog/local-seo-checklist-for-small-businesses" className="text-[#00AADF] font-semibold hover:underline">local SEO checklist</Link>{" "}
                  for more on getting found locally.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
              >
                Get a Free Toronto Quote
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
            Ready for a Better Toronto Website?{" "}
            <span className="gradient-text-animated">Let&apos;s Talk.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free consultation, no commitment. We&apos;ll look at your current website and show you what we&apos;d build for your Toronto business.
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
            {["No long-term contracts", "Free initial review", "Prices in CAD"].map((t) => (
              <span key={t} className="text-white/40 text-sm flex items-center gap-2">
                <span className="text-[#00AADF]">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <QuoteFormSection source="location-toronto" mobileOnly />
    </>
  );
}
