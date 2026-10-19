import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import QuoteFormSection from "@/components/QuoteFormSection";
import GoogleReviews from "@/components/GoogleReviews";
import { INDUSTRIES } from "@/content/compare";

/**
 * /industries -- the hub for every "web design for <industry>" page.
 *
 * Reads INDUSTRIES, so a new data file appears here, in the sitemap and in
 * /llms.txt with no edit to this page. CollectionPage is unambiguously true:
 * the page is a list of links to the industry pages and nothing else.
 */
const BASE = "https://canadianwebdesigns.ca";
const TITLE = "Industries We Serve | Canadian Web Designs";
const DESCRIPTION =
  "Websites and SEO built for your industry: contractors, roofers, plumbers, restaurants, clinics, pharmacies, dentists, lawyers, realtors and salons.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/industries" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${BASE}/industries` },
};

export default function IndustriesPage() {
  const pages = Object.values(INDUSTRIES).sort((a, b) => a.audience.localeCompare(b.audience));

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Industries", href: "/industries" }]} pageType="CollectionPage" description={DESCRIPTION} />

      {/* ─── HERO ─── */}
      <section
        className="relative py-20 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Industries We Serve</span>
            </div>
            <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              Websites built for your industry
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
              A roofer, a pharmacy and a law firm each need something different from a website. A roofer needs the phone to ring
              during a storm, a pharmacy needs refill requests, and a law firm needs consultation bookings. Pick your industry to see
              what we build into its website, how we help it get found on Google, and what it costs.
            </p>
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY GRID ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Choose Your Industry</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web design and SEO by industry</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00AADF]/40 hover:shadow-lg transition-all duration-300 block"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                <h3 className="text-gray-900 font-black text-lg mb-3 group-hover:text-[#00AADF] transition-colors">
                  Web design for {p.audience.toLowerCase()}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.hubBlurb ?? p.metaDescription}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-10">
            Your industry is not listed? We build websites for every kind of business.{" "}
            <Link href="/portfolio" className="text-[#00AADF] font-semibold hover:underline">See our portfolio</Link>{" "}
            or <Link href="/web-design-packages" className="text-[#00AADF] font-semibold hover:underline">compare website packages</Link>.
          </p>
        </div>
      </section>

      <GoogleReviews />

      <QuoteFormSection source="industries" />
    </>
  );
}
