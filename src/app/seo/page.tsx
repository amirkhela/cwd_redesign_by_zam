import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import QuoteFormSection from "@/components/QuoteFormSection";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "SEO Services Canada | Local SEO Experts in 21 Cities" },
  description: "SEO services across Canada — local SEO, Google Business Profile, content, and technical SEO from a 200+ five-star reviewed Canadian team. Pick your city.",
  alternates: { canonical: "/seo" },
  openGraph: {
    title: "SEO Services Canada | Local SEO Experts in 21 Cities",
    description: "SEO services across Canada — local SEO, Google Business Profile, content, and technical SEO from a 200+ five-star reviewed Canadian team. Pick your city.",
    url: "https://canadianwebdesigns.ca/seo",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "SEO services across Canada — Canadian Web Designs" }],
  },
};

// The three markets with the largest historical search demand get featured cards.
const featured = [
  { slug: "mississauga", name: "Mississauga", blurb: "One of the GTA's most competitive local markets — Mississauga businesses fight Toronto giants and local specialists at the same time. We build the local relevance that wins the map pack." },
  { slug: "calgary", name: "Calgary", blurb: "Calgary's economy rewards visibility fast — trades, energy services, and professional firms live and die on “near me” searches. Local SEO built for Alberta's biggest market." },
  { slug: "ottawa", name: "Ottawa", blurb: "Bilingual market, government-adjacent buyers, and fierce professional-services competition. Ottawa SEO that understands how the capital actually searches." },
];

const cities: { slug: string; name: string }[] = [
  { slug: "toronto", name: "Toronto" },
  { slug: "vancouver", name: "Vancouver" },
  { slug: "edmonton", name: "Edmonton" },
  { slug: "brampton", name: "Brampton" },
  { slug: "north-york", name: "North York" },
  { slug: "london", name: "London" },
  { slug: "windsor", name: "Windsor" },
  { slug: "montreal", name: "Montreal" },
  { slug: "halifax", name: "Halifax" },
  { slug: "surrey", name: "Surrey" },
  { slug: "burnaby", name: "Burnaby" },
  { slug: "victoria", name: "Victoria" },
  { slug: "saskatoon", name: "Saskatoon" },
  { slug: "oshawa", name: "Oshawa" },
  { slug: "barrie", name: "Barrie" },
  { slug: "vaughan", name: "Vaughan" },
  { slug: "kitchener", name: "Kitchener" },
  { slug: "ladner", name: "Ladner" },
];

export default function SeoHubPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "SEO Services", href: "/services/seo" }, { name: "SEO by City", href: "/seo" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">SEO Services — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              SEO Services{" "}<span className="gradient-text-animated">Across Canada</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Local SEO built city by city — because ranking in Mississauga takes different work than ranking in Calgary. Pick your market below, or call us and we&apos;ll map it for you.
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
              {["21 Canadian Markets", "No Lock-In Contracts", "Custom-Quoted Packages"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CITY-BY-CITY */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Local SEO Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-5">Why We Do SEO City by City</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Google&apos;s local results are decided market by market: the competitors you face in Mississauga, the search phrasing buyers use in Montreal, and the map-pack thresholds in Saskatoon are all different. A generic &ldquo;Canada SEO package&rdquo; averages those differences away — which is why generic packages plateau.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Our local SEO engagements start from your city&apos;s actual data: who ranks, what they rank for, and where the gaps are. Then we build what closes them — Google Business Profile optimization, city-relevant content and landing pages, local citations, review strategy, and the technical foundation that lets it all rank. Every engagement is custom-quoted, month-to-month, no lock-in.
            </p>
          </div>

          {/* Featured markets */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {featured.map((c, i) => (
              <Link key={c.slug} href={`/seo/${c.slug}`} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/40 hover:shadow-xl transition-all duration-300 block" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">SEO {c.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.blurb}</p>
                <span className="text-[#00AADF] text-sm font-bold">Explore {c.name} SEO →</span>
              </Link>
            ))}
          </div>

          {/* All cities */}
          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <h3 className="text-gray-900 font-black text-lg mb-5 text-center">All SEO Service Cities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {cities.map((c) => (
                <Link key={c.slug} href={`/seo/${c.slug}`} className="flex items-center gap-2 rounded-xl px-4 py-3 border border-gray-100 hover:border-[#00AADF]/40 hover:bg-[#00AADF]/5 transition-colors" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                  <span className="text-sm font-semibold text-gray-700">SEO {c.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              Not in one of these cities? We serve businesses across Canada —{" "}
              <Link href="/contact" className="text-[#00AADF] font-semibold hover:underline">get a free SEO consultation</Link>{" "}
              or explore our{" "}
              <Link href="/services/seo" className="text-[#00AADF] font-semibold hover:underline">full SEO services</Link>.
            </p>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* RELATED */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">SEO works best alongside a fast, conversion-ready website:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/seo" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>SEO Services Overview ↗</Link>
            {[
              { name: "Web Design & Development", href: "/services/web-design-development" },
              { name: "Google Ads Management", href: "/services/google-ads-management" },
              { name: "WordPress Design", href: "/services/wordpress-website-design" },
              { name: "Website Maintenance", href: "/maintenance" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source="seo-hub" />
    </>
  );
}
