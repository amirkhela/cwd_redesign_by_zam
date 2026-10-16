import type { Metadata } from "next";
import Link from "next/link";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingCards, { type PricingPlan } from "@/components/PricingCards";
import { getConfig, reviewCountPlus } from "@/lib/client-config";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "SEO Packages Canada | From $250/mo | Canadian Web Designs" },
  description:
    "Affordable SEO packages in Canada from $250/month. Local SEO, blog content, citations and link building. No lock-in contracts. Free SEO audit.",
  alternates: { canonical: "/seo-packages" },
  openGraph: {
    title: "SEO Packages Canada | From $250/mo | Canadian Web Designs",
    description: "Monthly SEO packages for Canadian businesses from $250/month. Content, citations, on-page SEO and reporting. No lock-in.",
    url: "https://canadianwebdesigns.ca/seo-packages",
  },
};

// Same packages and numbers as the /seo/<city> pages; keep them in step.
const SEO_PACKAGES: PricingPlan[] = [
  {
    name: "Starter SEO",
    price: "$250",
    note: "Per month, CAD + HST",
    desc: "For small businesses ready to start ranking.",
    features: [
      "Local keyword research",
      "On-page SEO (up to 5 pages)",
      "4 blog posts per month",
      "10 local citations",
      "Free technical audit",
      "Monthly ranking report",
    ],
  },
  {
    name: "Growth SEO",
    price: "$399",
    note: "Per month, CAD + HST",
    badge: "Most Popular",
    highlight: true,
    desc: "The complete package to lead your category.",
    features: [
      "50+ target keywords",
      "On-page SEO (unlimited pages)",
      "6 articles per month",
      "20 local citations",
      "Link building",
      "Weekly ranking updates",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise SEO",
    price: "Custom",
    note: "Scoped to your goals",
    desc: "Multi-location and ecommerce SEO.",
    features: [
      "Multi-location strategy",
      "Ecommerce SEO",
      "Full content program",
      "Google Ads integration",
      "Conversion tracking",
      "Monthly strategy call",
    ],
  },
];

const faqs = [
  {
    q: "How much does SEO cost in Canada?",
    a: "Our SEO packages start at $250 per month for Starter SEO and $399 per month for Growth SEO. Multi-location and ecommerce businesses get a custom quote. Prices are in Canadian dollars, plus HST.",
  },
  {
    q: "Is there a contract?",
    a: "No. SEO packages are month to month with no lock-in. You stay because the results are there.",
  },
  {
    q: "How long does SEO take to work?",
    a: "Most local businesses see movement on neighbourhood and service keywords within 3 to 6 months. More competitive city-wide keywords usually follow by months 9 to 12.",
  },
  {
    q: "Do I need a new website before starting SEO?",
    a: "Not always. We start with a free technical audit. If your site is slow or hard for Google to crawl, our website design packages include a full SEO setup from day one.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function SeoPackagesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "SEO Packages", href: "/seo-packages" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── HERO ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
                <span className="text-white/80 text-sm font-medium tracking-wide">
                  No Lock-In. {reviewCountPlus(config.reviewCount)} Google Reviews.
                </span>
              </div>
              <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
                SEO Packages{" "}
                <span className="gradient-text-animated">From $250/mo</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
                Affordable monthly SEO for Canadian businesses. Blog content, local citations, on-page SEO and
                clear reporting, so more customers find you on Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#packages"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base"
                  style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                  See SEO Packages
                </a>
                <a href={`tel:${config.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                  Call {config.phone}
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="seo-packages" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section id="packages" className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Affordable SEO Pricing</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Flat monthly packages. No hidden fees, cancel anytime.</p>
          </div>
          <PricingCards plans={SEO_PACKAGES} />
          <p className="text-center text-sm text-gray-500 mt-10">
            Need a website first? See our{" "}
            <Link href="/web-design-packages" className="font-bold text-[#00AADF] hover:underline">website design packages</Link>.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">SEO Package Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100">
                <h3 className="font-black text-gray-900 text-lg mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source="seo-packages" />
    </>
  );
}
