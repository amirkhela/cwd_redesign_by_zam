import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "graphic-design")!;

export const metadata: Metadata = {
  title: "Graphic Design Canada 2026 | Custom Logos From $299 | 72-Hr Rush | 180+ Reviews | Free Quote",
  description: "Build a brand that gets remembered — custom logos from $299, full identity packages, print & digital. 72-hr rush available. Trusted by 500+ Canadian businesses. 180+ five-star reviews. Free quote: (647) 689-6069.",
  alternates: { canonical: "/services/graphic-design" },
  openGraph: {
    title: "Graphic Design Canada 2026 | Custom Logos From $299 | 72-Hr Rush | 180+ Reviews | Free Quote",
    description: "Custom logos from $299, full brand identity packages & print. 72-hr rush available. 500+ Canadian businesses served. 180+ five-star reviews. Free quote: (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/services/graphic-design",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Graphic Design Canada 2026 — Canadian Web Designs" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does logo design cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Cost depends on the scope — a standalone logo vs. a full brand identity package are very different engagements. Contact us for a free quote and we'll scope the right package for your business." },
    },
    {
      "@type": "Question",
      name: "How many revisions are included in graphic design packages?",
      acceptedAnswer: { "@type": "Answer", text: "All packages include at least 2 rounds of revisions. Our Business and Brand packages include unlimited revisions until you are completely satisfied. We work collaboratively to ensure the final design is exactly what you envisioned." },
    },
    {
      "@type": "Question",
      name: "What file formats will I receive?",
      acceptedAnswer: { "@type": "Answer", text: "You receive all source files plus export-ready formats: AI, EPS, PDF (vector), PNG, JPG, and SVG. Print-ready files are supplied at 300 DPI. We also provide web-optimized versions at 72 DPI for digital use." },
    },
    {
      "@type": "Question",
      name: "Can you match my existing brand colours and style?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. We review your existing brand assets before starting any project. Whether you need a fresh start or want to extend an existing visual identity, our designers adapt to your brand standards and aesthetic." },
    },
    {
      "@type": "Question",
      name: "How long does a graphic design project take?",
      acceptedAnswer: { "@type": "Answer", text: "Most logo and branding projects are delivered within 7 business days. Larger brand identity packages with marketing collateral typically take 2–3 weeks. Rush delivery is available — let us know your deadline when you request a quote." },
    },
    {
      "@type": "Question",
      name: "Do you design menus, brochures, and print materials?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Beyond logos, we design restaurant menus, brochures, business cards, flyers, trade-show banners, and social media graphics. All print materials are delivered press-ready at 300 DPI with correct bleed and margins." },
    },
  ],
};

const process = [
  { step: "01", title: "Brief & Discovery", body: "We learn your brand story, audience, and competitors. You fill out a simple design brief — the clearer your vision, the better the first concepts." },
  { step: "02", title: "Concept Design", body: "Our designers create 2–3 distinct concepts. Each explores a different visual direction so you can see range before committing." },
  { step: "03", title: "Refine & Revise", body: "You pick your favourite direction and we refine it together. Revisions are collaborative and structured — no endless back-and-forth." },
  { step: "04", title: "File Delivery", body: "You receive a complete file package: vector source files, web exports, and print-ready files — everything you will ever need." },
];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ── Process + Pricing Section ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Design Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Professional Graphic Design for Canadian Businesses
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Great design is strategic, not decorative. Every project we take on is rooted in your business goals — so your brand does not just look good, it works hard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-sm mb-5"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mb-14">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Ready to Elevate Your Brand?</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">Whether you need a logo, a full brand identity, or marketing materials — we&apos;ll scope the right package for your goals. Get a free quote with no obligation.</p>
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

          {/* Stats + Why section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Why Invest in Professional Graphic Design?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Consumers form an opinion about your brand in 0.05 seconds. A professionally designed logo and consistent visual identity signal trust, quality, and credibility — before a single word is read. Businesses with strong branding consistently outperform competitors with inconsistent or DIY visuals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our graphic design team has worked with businesses across <Link href="/locations/toronto" className="text-[#00AADF] hover:underline">Toronto</Link>, <Link href="/locations/calgary" className="text-[#00AADF] hover:underline">Calgary</Link>, <Link href="/locations/vancouver" className="text-[#00AADF] hover:underline">Vancouver</Link>, and beyond. Whether you are launching a new brand or refreshing an outdated look, we create designs that are timeless, versatile, and built to scale. Pair your new brand with a <Link href="/services/web-design-development" className="text-[#00AADF] hover:underline">custom website</Link> and <Link href="/services/social-media-optimization" className="text-[#00AADF] hover:underline">social media content</Link> for a consistent identity everywhere customers find you.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Brands designed", value: "300+" },
                  { label: "Industries served", value: "40+" },
                  { label: "Avg. turnaround", value: "7 days" },
                  { label: "Client satisfaction", value: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-3xl font-black text-[#00AADF] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FAQ (visible) ── */}
          <div className="mt-16">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center">Graphic Design FAQs</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <details key={item.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 group">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none">{item.name}</summary>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
