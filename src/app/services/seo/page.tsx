import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "seo")!;

export const metadata: Metadata = {
  title: { absolute: "SEO Services Canada | Local & National SEO That Ranks | CWD" },
  description: "Grow your organic traffic with Canada's trusted SEO team — technical audits, local targeting, content & link building. 180+ five-star reviews. Free SEO audit: (647) 689-6069.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Services Canada — Local & National SEO That Ranks | Canadian Web Designs",
    description: "Climb Google and grow organic traffic with local & national SEO — audits, content & link building. 180+ five-star reviews. Free SEO audit: (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/services/seo",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "SEO Services Canada 2026 — Canadian Web Designs" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: { "@type": "Answer", text: "Most clients see measurable improvement in rankings and organic traffic within 3–6 months. Competitive industries may take 6–12 months. We provide monthly reporting so you can track progress every step of the way." },
    },
    {
      "@type": "Question",
      name: "What is included in your SEO service?",
      acceptedAnswer: { "@type": "Answer", text: "Our SEO service includes a full technical audit, on-page optimization, keyword research, content strategy, link building, local SEO (Google Business Profile), and monthly performance reports." },
    },
    {
      "@type": "Question",
      name: "Do you offer local SEO for Canadian businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We specialize in local SEO across all major Canadian cities including Toronto, Brampton, Mississauga, Calgary, and Vancouver. We optimize your Google Business Profile, build local citations, and create geo-targeted content." },
    },
    {
      "@type": "Question",
      name: "Can you guarantee first-page Google rankings?",
      acceptedAnswer: { "@type": "Answer", text: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is complex and constantly changing. What we guarantee is a proven, white-hat strategy and transparent reporting. Our average client sees 300%+ organic traffic growth within 12 months." },
    },
    {
      "@type": "Question",
      name: "How much do SEO services cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Our Canadian SEO packages are tailored to your market, competition, and goals. We offer flexible, no-contract pricing with no lock-in. Contact us for a free strategy call and a custom quote — most small business packages start at an affordable monthly rate with clear deliverables and monthly reporting." },
    },
    {
      "@type": "Question",
      name: "Do you offer ecommerce SEO for Canadian online stores?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Our ecommerce SEO services cover product page optimization, category keyword targeting, schema markup, technical speed optimization, and link building. We work with Shopify, WooCommerce, and custom ecommerce platforms across Canada." },
    },
    {
      "@type": "Question",
      name: "Do you offer SEO services specifically for Toronto businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Toronto SEO is one of our core specialties. Toronto is Canada's most competitive search market, and our local SEO strategies are calibrated for Toronto's landscape: neighbourhood-level content targeting (Etobicoke, North York, Scarborough, Yorkville), Google Business Profile optimization for the Toronto local pack, and city-specific link building. We've helped dozens of Toronto businesses reach Google page 1 in competitive niches including law, healthcare, trades, and real estate." },
    },
    {
      "@type": "Question",
      name: "How much do SEO services cost for a Toronto business?",
      acceptedAnswer: { "@type": "Answer", text: "Toronto SEO pricing depends on your industry competition, target keywords, and goals. Most Toronto small business SEO retainers range from $500–$2,500/month. We offer no-contract, transparent monthly retainers with clear deliverables and monthly ranking reports — no lock-in and no surprise fees. Contact us for a free SEO audit and custom Toronto quote." },
    },
  ],
};

const localSeoContent = {
  cities: [
    { name: "Toronto", url: "/locations/toronto" },
    { name: "Brampton", url: "/locations/brampton" },
    { name: "Mississauga", url: "/locations/mississauga" },
    { name: "North York", url: "/locations/north-york" },
    { name: "Calgary", url: "/locations/calgary" },
    { name: "Vancouver", url: "/locations/vancouver" },
    { name: "Ottawa", url: "/locations/ottawa" },
    { name: "Hamilton", url: "/locations/hamilton" },
  ],
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ── Local SEO Services Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Local SEO Specialists</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Local SEO Services Toronto &amp; Across Canada
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide affordable local SEO services to businesses in every major Canadian city. Our hyper-targeted strategies help you dominate the Google Maps pack and rank for searches that actually convert.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {localSeoContent.cities.map((city) => (
              <Link
                key={city.url}
                href={city.url}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#00AADF] hover:text-[#00AADF] transition-all duration-200"
              >
                <span className="text-[#00AADF]">📍</span> {city.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mb-14">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Ready to Grow Your Organic Traffic?</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">Every SEO engagement is scoped to your market, goals, and competition. Get a free strategy call and custom quote — no contracts, no lock-in.</p>
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

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Why Our Local SEO Works</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most affordable SEO services cut corners — thin content, low-quality backlinks, and cookie-cutter audits. We don&apos;t. Our local SEO services in Toronto and across Canada are built on three pillars: technical excellence, hyper-local content, and authoritative link earning.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When someone in Toronto searches &ldquo;local SEO services near me,&rdquo; your business should be the first thing they see. We make that happen through Google Business Profile optimization, structured data markup, local citation building, and neighbourhood-level keyword targeting — the kind of work that moves the needle. New to local SEO? Read our <Link href="/blog/what-is-local-seo-canada-guide" className="text-[#00AADF] hover:underline">complete guide to local SEO in Canada</Link>.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Avg. traffic increase", value: "312%" },
                  { label: "Cities served", value: "24+" },
                  { label: "Google Business Profiles optimized", value: "200+" },
                  { label: "Avg. ranking improvement", value: "18 spots" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-5 text-center shadow-sm">
                    <div className="text-3xl font-black text-[#00AADF] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CITY SEO LINKS ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-600 mb-5">Local SEO services across Canada — find your city:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "SEO Toronto", slug: "toronto" },
              { name: "SEO Mississauga", slug: "mississauga" },
              { name: "SEO Brampton", slug: "brampton" },
              { name: "SEO North York", slug: "north-york" },
              { name: "SEO Ottawa", slug: "ottawa" },
              { name: "SEO Vancouver", slug: "vancouver" },
              { name: "SEO Burnaby", slug: "burnaby" },
              { name: "SEO Surrey", slug: "surrey" },
              { name: "SEO Calgary", slug: "calgary" },
              { name: "SEO Edmonton", slug: "edmonton" },
              { name: "SEO Halifax", slug: "halifax" },
              { name: "SEO Kitchener", slug: "kitchener" },
            ].map((c) => (
              <Link key={c.slug} href={`/seo/${c.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
