import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "website-maintenance")!;

export const metadata: Metadata = {
  title: "Website Maintenance Plans Canada | Security, Speed & Support",
  description: "Affordable monthly website maintenance plans in Canada. Security updates, backups, speed optimization & support — all handled for you. 150+ five-star reviews. Get a free quote.",
  alternates: { canonical: "/services/website-maintenance" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a website maintenance plan include?",
      acceptedAnswer: { "@type": "Answer", text: "Our maintenance plans include regular software and plugin updates, daily backups, uptime monitoring, security scanning, performance optimization, and monthly reporting. We handle everything so you can focus on your business." },
    },
    {
      "@type": "Question",
      name: "How much does website maintenance cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Our maintenance packages start at $99/month for basic care. Business plans start at $199/month and include content updates and priority support. We offer flexible plans with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "What happens if my website goes down?",
      acceptedAnswer: { "@type": "Answer", text: "We monitor your website 24/7 for downtime. If your site goes down, we are alerted immediately and work to restore it as quickly as possible — typically within minutes for hosting-related issues." },
    },
    {
      "@type": "Question",
      name: "Do you maintain websites you did not build?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we maintain websites built by other agencies or developers. We perform a full audit of your existing site before onboarding to identify any security or performance issues." },
    },
  ],
};

const packages = [
  {
    name: "Basic Care",
    price: "$99",
    period: "/mo",
    ideal: "Simple brochure sites",
    features: ["Monthly CMS/plugin updates", "Daily cloud backups", "Uptime monitoring", "Monthly security scan", "Monthly status report"],
  },
  {
    name: "Business",
    price: "$199",
    period: "/mo",
    ideal: "Active business websites",
    features: ["Weekly updates & backups", "Content updates (2 hrs/mo)", "Performance optimization", "Priority email support", "Speed & Core Web Vitals check", "Monthly report + call"],
    highlight: true,
  },
  {
    name: "E-Commerce",
    price: "$349",
    period: "/mo",
    ideal: "Online stores & high-traffic sites",
    features: ["Daily updates & backups", "Unlimited content updates", "WooCommerce / Shopify support", "24/7 downtime alerting", "Dedicated support channel", "Quarterly strategy review"],
  },
];

const whyItems = [
  { icon: "🔒", title: "Security Threats Are Constant", body: "Over 30,000 websites are hacked every day. Outdated plugins and CMS software are the #1 attack vector. Regular updates are the single most effective security measure you can take." },
  { icon: "⚡", title: "Speed Affects Revenue", body: "A 1-second delay in page load time reduces conversions by 7%. Google uses Core Web Vitals as a ranking signal. A slow, unoptimized site costs you both traffic and sales." },
  { icon: "💾", title: "Backups Prevent Disasters", body: "Ransomware, server crashes, and accidental deletions happen. Without daily backups, a single incident can mean losing your entire site — and the business it generates." },
  { icon: "📈", title: "Performance Compounds", body: "A well-maintained site loads faster, ranks higher, and converts better over time. Neglected sites drift in the opposite direction — slowly losing traffic and credibility." },
];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ── Why Maintenance Matters ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why It Matters</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Website Maintenance Is Not Optional — It Is Insurance
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Most businesses treat website maintenance as an afterthought — until something breaks. A hacked site, a crashed server, or a Google penalty can wipe out months of SEO progress overnight. Our maintenance plans prevent that.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Website Maintenance Plans</h3>
            <p className="text-gray-500 max-w-xl mx-auto">Month-to-month plans for Canadian businesses. No lock-in contracts, no setup fees. We maintain WordPress, Shopify, Webflow, and custom-built sites.</p>
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

          {/* Stats */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { label: "Sites actively maintained", value: "200+" },
                { label: "Avg. uptime guaranteed", value: "99.9%" },
                { label: "Security incidents prevented", value: "1,200+" },
                { label: "Years in business", value: "10+" },
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
