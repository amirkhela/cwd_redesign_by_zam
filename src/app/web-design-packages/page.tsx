import type { Metadata } from "next";
import Link from "next/link";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingCards, { offerCatalog } from "@/components/PricingCards";
import { WEBSITE_PACKAGES } from "@/lib/packages";
import { getConfig, reviewCountPlus } from "@/lib/client-config";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Website Design Packages Canada | From $129 | Canadian Web Designs" },
  description:
    "Affordable website design packages in Canada from $129. Small business websites, WordPress sites, Shopify + WooCommerce stores and custom portals. Flat prices, free quote.",
  alternates: { canonical: "/web-design-packages" },
  openGraph: {
    title: "Website Design Packages Canada | From $129 | Canadian Web Designs",
    description:
      "Small business website packages from $129, ecommerce websites from $899 and custom web portals. Mobile responsive, SEO friendly, built by a Canadian team.",
    url: "https://canadianwebdesigns.ca/web-design-packages",
  },
};

const faqs = [
  {
    q: "How much does a website cost in Canada?",
    a: "With Canadian Web Designs a small business website starts at $129 for up to 3 pages. A 7 page WordPress website is $449, a 15 page professional website with booking and payments is $699, ecommerce stores start at $899 and custom web portals start at $3,499. Prices are one-time, in Canadian dollars, plus HST.",
  },
  {
    q: "Which website package is right for my business?",
    a: "Most service businesses (trades, clinics, consultants, salons, law and accounting firms) pick the Professional Website because it includes online booking, payments, a blog and a full SEO setup. If you only need a simple online presence, start with the Basic or Startup package. If you sell products, choose Startup Ecommerce for up to 75 products or Pro Ecommerce for an unlimited catalogue.",
  },
  {
    q: "Are there monthly fees?",
    a: "No. Every package is a one-time price for the design and build. Hosting, domain names and paid plugins or Shopify plans are billed by those providers. If you want us to look after updates, backups and security after launch, our website maintenance plans are optional.",
  },
  {
    q: "How long does it take to build my website?",
    a: "You see the first design mockup within 48 hours of receiving your content. Basic and Startup websites usually go live in 1 to 2 weeks, Professional and ecommerce websites in 2 to 4 weeks, and custom portals are scheduled with you during planning.",
  },
  {
    q: "Are your websites SEO friendly and mobile responsive?",
    a: "Yes. Every package is mobile responsive and includes on-page SEO. The Professional, ecommerce and portal packages add schema markup, an XML sitemap and a Google indexing request so Google can find and rank every page.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes. You only pay the difference between your current package and the new one, and we keep your existing design and content.",
  },
  {
    q: "Do you build apps as well as websites?",
    a: "Yes. We build iOS and Android apps and web apps for Canadian businesses. See our app development packages for pricing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${config.domain}/web-design-packages#service`,
  name: "Website Design Packages",
  serviceType: "Web design",
  description: "Affordable website design packages for Canadian businesses: small business websites, WordPress websites, ecommerce stores and custom web portals.",
  areaServed: { "@type": "Country", name: "Canada" },
  provider: { "@id": `https://${config.domain}/#organization` },
  hasOfferCatalog: offerCatalog("Website Design Packages", WEBSITE_PACKAGES),
};

const included = [
  { title: "Mobile Responsive", body: "Every website is tested on phones, tablets and desktops, so customers can call, book or buy from any screen." },
  { title: "SEO Friendly Build", body: "Clean code, fast pages, titles and meta descriptions written for the keywords your customers search." },
  { title: "No Templates Reused", body: "Your layout is designed for your business and your brand colours, not a theme shared with thousands of sites." },
  { title: "You Own It", body: "The website, domain and content are yours. No lock-in contracts and no hidden fees." },
];

export default function WebDesignPackagesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Web Design Packages", href: "/web-design-packages" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                  Flat Prices. {reviewCountPlus(config.reviewCount)} Google Reviews.
                </span>
              </div>
              <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
                Website Design Packages{" "}
                <span className="gradient-text-animated">From $129</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
                Affordable web design for Canadian small businesses. Pick a package for a business website,
                a WordPress site, a Shopify or WooCommerce online store, or a custom web portal. One flat price,
                built by our in-house team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#packages"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base"
                  style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                  See Packages
                </a>
                <a href={`tel:${config.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                  Call {config.phone}
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="web-design-packages" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section id="packages" className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Affordable Web Design Pricing for Every Business</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From a small business website to a full ecommerce store. Every package includes custom design,
              mobile responsive pages, SEO basics and complete deployment.
            </p>
          </div>
          <PricingCards plans={WEBSITE_PACKAGES} />
          <p className="text-center text-xs text-gray-400 mt-8">
            Prices are one-time, in Canadian dollars, plus HST. Hosting, domain and third-party subscriptions (e.g. Shopify plans) are billed by the provider.
          </p>
        </div>
      </section>

      {/* ─── INCLUDED ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">In Every Package</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What You Get With Canadian Web Designs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {included.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 reveal">
                <h3 className="text-base font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl p-8 lg:p-10 text-center" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
            <h3 className="text-2xl font-black text-white mb-3">Need a Mobile App?</h3>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              We also design and build iOS, Android and cross-platform apps for Canadian businesses.
            </p>
            <Link href="/services/app-development"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#003B6F] font-bold text-sm hover:bg-white/90">
              See App Development Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Website Package Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source="web-design-packages" />
    </>
  );
}
