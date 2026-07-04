import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "website-maintenance")!;

export const metadata: Metadata = {
  title: { absolute: "Website Maintenance Canada | From $99/mo | CWD" },
  description: "Expert website maintenance from $99/mo — daily backups, 24/7 uptime monitoring, malware removal, speed & Core Web Vitals tuning. No lock-in. Free audit: (647) 689-6069.",
  alternates: { canonical: "/services/website-maintenance" },
  openGraph: {
    title: "Website Maintenance Canada — From $99/mo | Canadian Web Designs",
    description: "Expert website maintenance from $99/mo — daily backups, 24/7 uptime monitoring, malware removal & Core Web Vitals tuning. 180+ reviews. No lock-in. Free audit: (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/services/website-maintenance",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Website Maintenance Canada 2026 — Canadian Web Designs" }],
  },
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
      acceptedAnswer: { "@type": "Answer", text: "Cost depends on your site's size, platform, and the level of support you need. We offer flexible month-to-month plans with no long-term contracts — contact us for a free quote." },
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

          {/* CTA */}
          <div className="text-center mb-14">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Let&apos;s Protect Your Website</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">We maintain WordPress, Shopify, Webflow, and custom-built sites. Month-to-month, no setup fees. Tell us about your site and we&apos;ll recommend the right plan.</p>
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
