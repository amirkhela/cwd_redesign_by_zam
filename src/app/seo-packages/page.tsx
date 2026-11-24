import MockupHeroOffer from "@/components/MockupHeroOffer";
import type { Metadata } from "next";
import Link from "next/link";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingCards from "@/components/PricingCards";
import { SEO_PACKAGES, SEO_TERMS, WEBSITE_SEO_BUNDLES } from "@/lib/packages";
import { getConfig, reviewCountPlus } from "@/lib/client-config";

const config = getConfig();

// "From $250/mo" = Starter SEO on a 12-month plan ($3,000 prepaid). Month to
// month it is $299. Toronto added 2026-11-25: "seo packages toronto" is this
// page's biggest commercial query (390/mo in SE Ranking, CPC $6.53).
export const metadata: Metadata = {
  title: { absolute: "SEO Packages Toronto & Canada | From $250/mo | Canadian Web Designs" },
  description:
    "Affordable SEO packages from $250/month on a 12-month plan, or $299 month to month. Local SEO, articles, citations and link building. Free SEO audit.",
  alternates: { canonical: "/seo-packages" },
  openGraph: {
    title: "SEO Packages Toronto & Canada | From $250/mo | Canadian Web Designs",
    description: "SEO packages for Canadian businesses: $299/month month to month, $250/month on a 12-month plan. 3, 6 and 12 month terms. Content, citations, on-page SEO and reporting.",
    url: "https://canadianwebdesigns.ca/seo-packages",
  },
};

const faqs = [
  {
    q: "How much does SEO cost in Canada?",
    a: "Starter SEO is $299 a month, or $250 a month on a 12-month plan ($3,000 prepaid). Growth SEO is $399 a month, or $3,990 for 12 months prepaid. Multi-location and ecommerce businesses get a custom quote. Prices are in Canadian dollars, plus HST.",
  },
  {
    q: "Is there a contract?",
    a: "No. You can pay month to month with no lock-in, or save by prepaying 6 or 12 months. When a term ends it continues month to month at the regular price, and you can cancel with 30 days' notice.",
  },
  {
    q: "What can I expect in 3, 6 and 12 months?",
    a: "The first 3 months are setup and first wins: Google Business Profile, citations, on-page fixes, the first articles and tracking. By 6 months most local businesses see movement on neighbourhood and service keywords. Google says SEO usually needs four months to a year, so 12 months is when competitive local rankings become realistic. No one can guarantee a #1 ranking.",
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
              <MockupHeroOffer className="!mt-0 !mb-6" />

              <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
                SEO Packages in Toronto &amp; Canada{" "}
                <span className="gradient-text-animated">From $250/mo</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
                Affordable SEO for Canadian businesses: $299 a month month to month, or $250 a month on a 12-month plan.
                Blog content, local citations, on-page SEO and clear reporting, so more customers find you on Google.
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
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Flat monthly packages. No hidden fees. Pay month to month, or prepay a term and save.</p>
          </div>
          <PricingCards plans={SEO_PACKAGES} />
        </div>
      </section>

      {/* ─── SEO TERMS ─── */}
      <section id="seo-terms" className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">3, 6 or 12 Months</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">SEO Packages by Term</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Every term includes the same monthly work as the plan you choose. Prepay 6 or 12 months to save. After the
              term, the plan continues month to month at the regular price; cancel with 30 days&apos; notice.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th className="p-4 font-black">Term</th>
                  <th className="p-4 font-black">Starter SEO</th>
                  <th className="p-4 font-black">Growth SEO</th>
                  <th className="p-4 font-black">What to expect</th>
                </tr>
              </thead>
              <tbody>
                {SEO_TERMS.map((t) => (
                  <tr key={t.name} className="border-t border-gray-100 align-top">
                    <td className="p-4"><span className="font-black text-gray-900">{t.name}</span><br /><span className="text-gray-500">{t.term}, {t.pay.toLowerCase()}</span></td>
                    <td className="p-4 font-bold text-gray-900">{t.starter}</td>
                    <td className="p-4 font-bold text-gray-900">{t.growth}</td>
                    <td className="p-4 text-gray-600">{t.goal}{t.saving && <><br /><span className="text-emerald-700 font-bold">{t.saving}</span></>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Prices in Canadian dollars, plus HST. SEO is sold on the work delivered each month; no one can guarantee a #1 ranking on Google.</p>

          <div className="mt-12 rounded-2xl p-8 lg:p-10" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
            <h3 className="text-2xl font-black text-white mb-3 text-center">Need a Website Too? Get Both in One Price</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 text-center">
              Business Complete (15-page website, brand kit, hosting and domain) with Starter SEO:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {WEBSITE_SEO_BUNDLES.map((b, i) => (
                <div key={b.name} className="rounded-xl bg-white/10 p-5 text-center">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">{SEO_TERMS[i].term}</p>
                  <p className="text-3xl font-black text-white">{b.price}</p>
                  <p className="text-white/70 text-xs mt-1">{b.save} vs separately</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6">
              <Link href="/web-design-packages#website-seo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#003B6F] font-bold text-sm hover:bg-white/90">
                See Website + SEO Packages
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">SEO Package Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-7 reveal border border-gray-100">
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
