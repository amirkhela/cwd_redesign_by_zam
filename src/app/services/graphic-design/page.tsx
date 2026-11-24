import type { Metadata } from "next";
import { getConfig, reviewCountPlus } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PricingCards, { offerCatalog } from "@/components/PricingCards";
import { BRANDING_PACKAGES, DESIGN_ITEMS } from "@/lib/packages";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "graphic-design")!;
const config = getConfig();

// Title rewritten 2026-11-25 for the logo searches that convert (SE Ranking, Canada:
// logo design toronto 210/mo KD 9, logo design near me 260, logo designer toronto 90,
// branding toronto 210). "branding packages" itself is ~10/mo, so it is a page label,
// not the title target.
export const metadata: Metadata = {
  title: { absolute: "Logo Design Toronto & Branding Packages | From $299" },
  description: "Logo design from $299, Brand Starter kits for $599 and full brand identity for $999. Business cards, flyers, menus and social kits too. Free quote.",
  alternates: { canonical: "/services/graphic-design" },
  openGraph: {
    title: "Logo Design Toronto & Branding Packages | From $299",
    description: `Custom logos from $299, brand kits from $599 and full brand identity for $999, plus business cards, flyers and social kits. ${reviewCountPlus(getConfig().reviewCount)} Google reviews. Free quote.`,
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
      acceptedAnswer: { "@type": "Answer", text: "Our Logo Design package is $299, the Brand Starter kit (logo suite, colours, fonts, brand board and social images) is $599, and a full Brand Identity with a brand guide, business card, letterhead and social kit is $999. Prices are one-time, in Canadian dollars, plus HST. If you buy a logo and upgrade to a brand package within 60 days, the $299 is credited." },
    },
    {
      "@type": "Question",
      name: "How many revisions are included in graphic design packages?",
      acceptedAnswer: { "@type": "Answer", text: "Logo Design includes 2 rounds of revisions, Brand Starter includes 3 and Brand Identity includes 4. Extra rounds are $59 each. We work collaboratively so the final design is exactly what you envisioned." },
    },
    {
      "@type": "Question",
      name: "Can I get a logo, website and hosting together?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Our Complete website packages include a logo or brand kit, a custom website, the first year of hosting and a domain for one price: $599, $999 or $1,499, and $1,299 for an online store, plus HST. Each one costs less than buying the parts separately." },
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
      acceptedAnswer: { "@type": "Answer", text: "Yes. Business cards are $79, flyers $99 (double-sided $149), letterhead $59, restaurant menus $149, tri-fold brochures $199 and a social media kit $199, plus HST. We also design trade-show banners and other print on quote. All print materials are delivered press-ready at 300 DPI with correct bleed and margins." },
    },
  ],
};

const brandingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${config.domain}/services/graphic-design#branding`,
  name: "Logo Design and Branding Packages",
  serviceType: "Graphic design",
  areaServed: { "@type": "Country", name: "Canada" },
  provider: { "@id": `https://${config.domain}/#organization` },
  hasOfferCatalog: offerCatalog("Logo and Branding Packages", BRANDING_PACKAGES),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ── Branding packages first, single items underneath ── */}
      <section id="branding-packages" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Logo &amp; Branding Packages</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Logo Design and Branding Packages in Toronto</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              A logo on its own is a start. A brand kit makes your website, social media, cards and signs look like one business.
              Pick the package that fits, with flat prices and no surprises.
            </p>
          </div>
          <PricingCards plans={BRANDING_PACKAGES} />
          <p className="text-center text-xs text-gray-400 mt-6">One-time prices in Canadian dollars, plus HST. Rebrands and multi-location identities are quoted.</p>

          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="rounded-2xl border border-gray-100 p-8" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <h3 className="text-xl font-black text-gray-900 mb-2">Single Design Items</h3>
              <p className="text-gray-500 text-sm mb-5">Need just one piece? Every item is also sold on its own.</p>
              <ul className="divide-y divide-gray-100">
                {DESIGN_ITEMS.map((item) => (
                  <li key={item.name} className="flex justify-between py-2.5 text-sm">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-bold text-gray-900">{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4">One-time, CAD + HST.</p>
            </div>
            <div className="rounded-2xl p-8 flex flex-col justify-center" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
              <h3 className="text-2xl font-black text-white mb-3">Logo + Website + Hosting in One Price</h3>
              <p className="text-white/85 leading-relaxed mb-6">
                Our Complete packages bundle your logo or brand kit with a custom website, the first year of hosting, a domain and
                business email, from $599 + HST. Each one costs less than buying the parts separately.
              </p>
              <Link href="/web-design-packages#packages" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#003B6F] font-bold text-sm hover:bg-white/90 self-start">
                See Complete Website Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-gray-500 max-w-xl mx-auto mb-8">Whether you need a logo, a full brand identity, or marketing materials, pick a package above or ask us to recommend one. Free quote, no obligation.</p>
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
