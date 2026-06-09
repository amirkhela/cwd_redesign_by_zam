import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "social-media-optimization")!;

export const metadata: Metadata = {
  title: "Social Media Management Canada | Content, Ads & Growth | CWD",
  description: "Professional social media management for Canadian businesses. Content creation, paid ads, Instagram, Facebook, LinkedIn & TikTok. Results-driven campaigns. Free strategy call today.",
  alternates: { canonical: "/services/social-media-optimization" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which social media platforms do you manage?",
      acceptedAnswer: { "@type": "Answer", text: "We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), Pinterest, and YouTube. We recommend the best platforms for your industry and audience — not all platforms make sense for every business." },
    },
    {
      "@type": "Question",
      name: "How often will you post on my social media accounts?",
      acceptedAnswer: { "@type": "Answer", text: "Posting frequency depends on your package and platform. Typically we post 3–7 times per week per platform, with a content calendar approved by you in advance. Consistency is key to growing your following." },
    },
    {
      "@type": "Question",
      name: "Do you create the social media content or do I need to provide it?",
      acceptedAnswer: { "@type": "Answer", text: "We handle everything — copywriting, graphic design, video editing, and scheduling. You simply review and approve the monthly content calendar. You can also supply your own photos or videos if you prefer a more personal touch." },
    },
    {
      "@type": "Question",
      name: "How do you measure social media success?",
      acceptedAnswer: { "@type": "Answer", text: "We track follower growth, engagement rate, reach, impressions, click-through rates, and leads generated. Monthly reports are provided so you always know how your social media is performing." },
    },
  ],
};

const platforms = [
  { name: "Instagram", icon: "📸", desc: "Visual storytelling and Reels to reach a younger, highly engaged audience." },
  { name: "Facebook", icon: "📘", desc: "Community building, local ads, and targeted campaigns for Canadian consumers." },
  { name: "LinkedIn", icon: "💼", desc: "B2B lead generation and thought leadership for professional service businesses." },
  { name: "TikTok", icon: "🎵", desc: "Short-form video content that drives massive organic reach and brand awareness." },
];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ── Platform + Pricing Section ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Platform Expertise</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Social Media Management Toronto &amp; Across Canada
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We manage social media for businesses across Canada — from small local shops to national brands. Our strategies are tailored to your audience, industry, and city, not copy-pasted from a template.
            </p>
          </div>

          {/* Platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {platforms.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mb-14">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Ready to Grow Your Social Presence?</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">We scope every social media plan around your platforms, goals, and audience. No lock-in contracts — get a free quote and we&apos;ll recommend the right approach.</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Why Social Media Management Matters for Canadian Businesses</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  94% of Canadians use social media regularly — and they are buying from brands they follow. But posting inconsistently, using generic graphics, or ignoring comments kills trust faster than having no social presence at all. Effective social media management means showing up with the right content, on the right platform, at the right time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We have managed social media for service businesses, retailers, restaurants, and professional firms across Toronto, Brampton, Calgary, and Vancouver. Our team creates scroll-stopping content that builds real audiences — not just vanity metrics.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Accounts managed", value: "120+" },
                  { label: "Avg. engagement increase", value: "4.2×" },
                  { label: "Monthly posts created", value: "2,000+" },
                  { label: "Industries served", value: "30+" },
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
