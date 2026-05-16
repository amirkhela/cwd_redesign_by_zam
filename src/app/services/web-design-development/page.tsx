import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "web-design-development")!;

export const metadata: Metadata = {
  title: "Professional Web Design & Development in Canada",
  description: "Custom web design and development services across Canada. Mobile-first, SEO-optimized, high-converting websites built by Canadian Web Designs.",
  alternates: { canonical: "/services/web-design-development" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a professional website cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Our custom websites typically range from $1,500 to $10,000+ depending on the scope, features, and complexity. We offer transparent, flat-rate pricing with no hidden fees. Contact us for a free quote tailored to your business." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: { "@type": "Answer", text: "Our average project launch time is 30 days. Simple websites can be ready in 2 weeks, while complex e-commerce or custom web applications may take 6–8 weeks. We provide a clear timeline at the start of every project." },
    },
    {
      "@type": "Question",
      name: "Do you build websites on WordPress or custom code?",
      acceptedAnswer: { "@type": "Answer", text: "We build on both — WordPress/WooCommerce for content-driven sites and blogs, Shopify for e-commerce, and fully custom Next.js/React applications for high-performance needs. We recommend the right platform based on your goals." },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Every website we build is mobile-first and fully responsive. We test across all major devices and browsers before launch to ensure a flawless experience for every visitor." },
    },
    {
      "@type": "Question",
      name: "Do you provide website hosting and maintenance?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We offer managed hosting, security monitoring, regular updates, and ongoing maintenance packages. Our maintenance plans start at an affordable monthly rate and keep your site secure, fast, and up-to-date." },
    },
  ],
};

const packages = [
  {
    name: "Starter",
    price: "$1,499",
    ideal: "New businesses & startups",
    features: ["Up to 5 pages", "Mobile-responsive design", "Contact form integration", "Basic SEO setup", "1-month support"],
  },
  {
    name: "Business",
    price: "$3,499",
    ideal: "Growing SMBs",
    features: ["Up to 15 pages", "Custom design + branding", "CMS integration (WordPress)", "Advanced SEO + speed optimization", "E-commerce ready", "3-month support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    ideal: "Large orgs & complex projects",
    features: ["Unlimited pages", "Full custom Next.js / React build", "API & third-party integrations", "Performance SLA", "Dedicated project manager", "Ongoing retainer available"],
  },
];

const process = [
  { step: "01", title: "Discovery Call", body: "We learn your business goals, audience, and competitors. You get a custom project brief with scope, timeline, and flat-rate quote — no surprises." },
  { step: "02", title: "Design & Prototype", body: "Our designers craft mockups aligned with your brand. You review and approve before a single line of code is written." },
  { step: "03", title: "Development", body: "We build your site on the right platform for your needs — WordPress, Shopify, or custom Next.js — with SEO, speed, and conversions baked in." },
  { step: "04", title: "Launch & Handoff", body: "We test across all devices, configure analytics, and launch. You get full ownership of your site plus a training session so your team can manage it." },
];

const cities = [
  { name: "Toronto", url: "/locations/toronto" },
  { name: "Brampton", url: "/locations/brampton" },
  { name: "Mississauga", url: "/locations/mississauga" },
  { name: "Calgary", url: "/locations/calgary" },
  { name: "Vancouver", url: "/locations/vancouver" },
  { name: "Kitchener", url: "/locations/kitchener" },
  { name: "Surrey", url: "/locations/surrey" },
  { name: "Burnaby", url: "/locations/burnaby" },
];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ── Process Section ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Our Web Design Process — From Idea to Launch in 30 Days
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Every website we build follows a proven four-step process. No surprises, no scope creep — just a clear path from brief to launch.
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
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Web Design Pricing in Canada</h3>
            <p className="text-gray-500 max-w-xl mx-auto">Flat-rate pricing — no hourly billing, no hidden fees. Every project includes mobile-responsive design, SEO setup, and a dedicated project manager.</p>
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
                  Get a Free Quote
                </Link>
              </div>
            ))}
          </div>

          {/* Cities + Stats */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-gray-900 mb-2">Web Design Services Across Canada</h3>
            <p className="text-gray-500 max-w-xl mx-auto text-sm mb-8">We serve businesses in every major Canadian city. Click your city to learn more about our local web design services.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {cities.map((city) => (
              <Link
                key={city.url}
                href={city.url}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#00AADF] hover:text-[#00AADF] transition-all duration-200"
              >
                <span className="text-[#00AADF]">📍</span> {city.name}
              </Link>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { label: "Websites launched", value: "500+" },
                { label: "Average launch time", value: "30 days" },
                { label: "Five-star reviews", value: "150+" },
                { label: "Cities served", value: "24+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-black text-[#00AADF] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
