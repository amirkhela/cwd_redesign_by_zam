import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "seo")!;

export const metadata: Metadata = {
  title: "SEO Services Canada | Affordable Local SEO for Canadian Businesses",
  description: "Affordable SEO services for Canadian businesses. We offer local SEO in Toronto, Calgary, Vancouver and more — transparent pricing, no contracts, real results.",
  alternates: { canonical: "/services/seo" },
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
  packages: [
    {
      name: "Starter",
      price: "$399",
      period: "/mo",
      ideal: "New businesses & startups",
      features: ["5 target keywords", "On-page optimization", "Google Business Profile setup", "Monthly ranking report"],
    },
    {
      name: "Growth",
      price: "$799",
      period: "/mo",
      ideal: "SMBs ready to compete",
      features: ["20 target keywords", "Technical SEO audit", "Local citation building", "Content creation (2 posts/mo)", "Competitor gap analysis"],
      highlight: true,
    },
    {
      name: "Authority",
      price: "$1,499",
      period: "/mo",
      ideal: "Established businesses scaling fast",
      features: ["Unlimited keywords", "Full site technical SEO", "Link building campaign", "4 blog posts/mo", "Dedicated SEO strategist"],
    },
  ],
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services Canada",
  provider: {
    "@type": "Organization",
    name: "Canadian Web Designs",
    url: "https://canadianwebdesigns.ca",
  },
  areaServed: "Canada",
  offers: [
    {
      "@type": "Offer",
      name: "Starter SEO Package",
      price: "399",
      priceCurrency: "CAD",
      priceSpecification: { "@type": "UnitPriceSpecification", unitText: "month" },
      description: "5 target keywords, on-page optimization, Google Business Profile setup, monthly ranking report",
    },
    {
      "@type": "Offer",
      name: "Growth SEO Package",
      price: "799",
      priceCurrency: "CAD",
      priceSpecification: { "@type": "UnitPriceSpecification", unitText: "month" },
      description: "20 target keywords, technical SEO audit, local citation building, content creation, competitor gap analysis",
    },
    {
      "@type": "Offer",
      name: "Authority SEO Package",
      price: "1499",
      priceCurrency: "CAD",
      priceSpecification: { "@type": "UnitPriceSpecification", unitText: "month" },
      description: "Unlimited keywords, full site technical SEO, link building campaign, 4 blog posts/mo, dedicated SEO strategist",
    },
  ],
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
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

          {/* Affordable SEO Packages */}
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Affordable SEO Packages</h3>
            <p className="text-gray-500 max-w-xl mx-auto">Transparent, flat-rate pricing — no hidden fees, no lock-in contracts. Every package includes monthly reporting and a dedicated SEO point of contact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {localSeoContent.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 border-2 flex flex-col ${pkg.highlight ? "border-[#00AADF] shadow-lg shadow-[#00AADF]/10" : "border-gray-100"}`}
                style={pkg.highlight ? { background: "linear-gradient(135deg, #f0fbff, #fff)" } : {}}
              >
                {pkg.highlight && (
                  <span className="inline-block bg-[#00AADF] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">Most Popular</span>
                )}
                <h4 className="text-xl font-black text-gray-900 mb-1">{pkg.name}</h4>
                <p className="text-sm text-gray-400 mb-4">{pkg.ideal}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-gray-900">{pkg.price}</span>
                  <span className="text-gray-400 text-sm">{pkg.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#00AADF] font-bold mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 ${pkg.highlight ? "bg-[#00AADF] text-white hover:opacity-90" : "border-2 border-gray-200 text-gray-700 hover:border-[#00AADF] hover:text-[#00AADF]"}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Why Our Local SEO Works</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most affordable SEO services cut corners — thin content, low-quality backlinks, and cookie-cutter audits. We don&apos;t. Our local SEO services in Toronto and across Canada are built on three pillars: technical excellence, hyper-local content, and authoritative link earning.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When someone in Toronto searches &ldquo;local SEO services near me,&rdquo; your business should be the first thing they see. We make that happen through Google Business Profile optimization, structured data markup, local citation building, and neighbourhood-level keyword targeting — the kind of work that moves the needle.
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
    </>
  );
}
