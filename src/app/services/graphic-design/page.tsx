import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "graphic-design")!;

export const metadata: Metadata = {
  title: "Graphic Design Services Canada | Logo, Branding & Print Design",
  description: "Professional graphic design services for Canadian businesses. Logo design, brand identity, marketing materials, and print design. Get a free quote from Canadian Web Designs.",
  alternates: { canonical: "/services/graphic-design" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does logo design cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Our logo design packages start at $299 for a professional logo with 3 concepts. Full brand identity packages (logo, colours, typography, brand guidelines) start at $799. All designs are delivered in vector format for unlimited scalability." },
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
  ],
};

const packages = [
  {
    name: "Logo",
    price: "$299",
    ideal: "New businesses needing a logo",
    features: ["3 logo concepts", "2 revision rounds", "Vector files (AI, EPS, SVG)", "PNG & JPG exports", "Black/white variations"],
  },
  {
    name: "Brand Identity",
    price: "$799",
    ideal: "Businesses building a full brand",
    features: ["Logo + colour palette", "Typography selection", "Brand guidelines PDF", "Business card design", "Social media kit", "Unlimited revisions"],
    highlight: true,
  },
  {
    name: "Marketing Suite",
    price: "$1,499",
    ideal: "Established brands needing marketing assets",
    features: ["Full brand identity", "Brochure or flyer design", "Email template design", "Infographic creation", "Banner ads (3 sizes)", "Print-ready files included"],
  },
];

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

          {/* Pricing */}
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Graphic Design Pricing</h3>
            <p className="text-gray-500 max-w-xl mx-auto">Transparent, flat-rate pricing. No hourly billing, no surprise invoices. All packages include vector source files and a satisfaction guarantee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {packages.map((pkg) => (
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

          {/* Stats + Why section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Why Invest in Professional Graphic Design?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Consumers form an opinion about your brand in 0.05 seconds. A professionally designed logo and consistent visual identity signal trust, quality, and credibility — before a single word is read. Businesses with strong branding consistently outperform competitors with inconsistent or DIY visuals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our graphic design team has worked with businesses across Toronto, Calgary, Vancouver, and beyond. Whether you are launching a new brand or refreshing an outdated look, we create designs that are timeless, versatile, and built to scale.
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
        </div>
      </section>
    </>
  );
}
