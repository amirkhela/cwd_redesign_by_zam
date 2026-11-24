import MockupHeroOffer from "@/components/MockupHeroOffer";
import type { Metadata } from "next";
import Link from "next/link";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingCards, { offerCatalog } from "@/components/PricingCards";
import { WEBSITE_PACKAGES, COMPLETE_PACKAGES, HOSTING_PLAN, WEBSITE_SEO_BUNDLES, SEO_TERMS } from "@/lib/packages";
import { getConfig, reviewCountPlus } from "@/lib/client-config";

const config = getConfig();

// Title targets the queries Search Console shows this page and the homepage for
// (website design packages toronto, web design packages, website packages,
// business website packages). Rewritten 2026-11-25 with the Complete packages.
export const metadata: Metadata = {
  title: { absolute: "Website Design Packages Toronto & Canada | From $299" },
  description:
    "Website design packages from $299. Complete packages with a logo, hosting and domain from $599. WordPress sites, online stores and custom builds. Flat prices + HST.",
  alternates: { canonical: "/web-design-packages" },
  openGraph: {
    title: "Website Design Packages Toronto & Canada | From $299",
    description:
      "Complete website packages with logo, brand kit, hosting and domain from $599, website-only packages from $299 and ecommerce stores from $899. Built by a Canadian team.",
    url: "https://canadianwebdesigns.ca/web-design-packages",
  },
};

const faqs = [
  {
    q: "How much does a website cost in Canada?",
    a: "With Canadian Web Designs a small business website starts at $299 for up to 3 pages. A 7 page WordPress website is $449, a 15 page professional website with booking and payments is $699, ecommerce stores start at $899 and custom web applications (Next.js, Laravel) start at $3,499. Complete packages that add a logo or brand kit plus the first year of hosting and a domain are $599, $999 and $1,499, and $1,299 for an online store. Prices are one-time, in Canadian dollars, plus HST.",
  },
  {
    q: "What is included in a Complete package?",
    a: "A Complete package is a website, a logo or brand kit, the first year of hosting, SSL and a domain, business email accounts and a Google Business Profile setup, for one price. It costs less than buying the website, the logo package and a year of hosting separately, and the saving is shown on each card.",
  },
  {
    q: "Which website package is right for my business?",
    a: "Most service businesses (trades, clinics, consultants, salons, law and accounting firms) pick Business Complete because it includes a 15 page website with booking and payments, a brand kit, hosting and a Google Business Profile setup. If you already have a logo and hosting, choose a website-only package. If you sell products, choose Store Complete, Startup Ecommerce for up to 75 products or Pro Ecommerce for an unlimited catalogue.",
  },
  {
    q: "Are there monthly fees?",
    a: `No. Every package is a one-time price. Complete packages include the first year of hosting and a domain; from year two our Hosting Plan is ${HOSTING_PLAN.price} a year (${HOSTING_PLAN.storePrice} a year for online stores), plus HST, or you can move the website to any host. Website-only packages do not include hosting or a domain. Maintenance plans from $25 a month and SEO plans are optional.`,
  },
  {
    q: "Who owns the website and the domain?",
    a: "You do. We register the domain in your business name, and the website, content and logo files are yours once the project is paid in full. Licensed themes, plugins, fonts and stock photos stay under their own licences.",
  },
  {
    q: "Can I add SEO to my website package?",
    a: "Yes. Business Complete with Starter SEO is $1,799 for 3 months, $2,499 for 6 months and $3,699 for 12 months, plus HST, which is less than buying them separately. SEO is sold on the work we do each month. No one can guarantee a #1 ranking on Google, and most local businesses see movement in 3 to 6 months.",
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
  description: "Affordable website design packages for Canadian businesses: small business websites, WordPress websites, ecommerce stores and custom web applications (Next.js, Laravel).",
  areaServed: { "@type": "Country", name: "Canada" },
  provider: { "@id": `https://${config.domain}/#organization` },
  hasOfferCatalog: offerCatalog("Website Design Packages", [...COMPLETE_PACKAGES, ...WEBSITE_PACKAGES]),
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
              <MockupHeroOffer className="!mt-0 !mb-6" />

              <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
                Website Design Packages in Toronto &amp; Canada{" "}
                <span className="gradient-text-animated">From $299</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
                Get your website, logo, hosting and domain in one Complete package from $599, or choose a
                website-only package from $299. WordPress sites, Shopify or WooCommerce stores and custom web
                applications, built by our in-house team for one flat price.
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

      {/* ─── COMPLETE PACKAGES ─── */}
      <section id="packages" className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Complete Packages</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Website, Logo, Hosting and Domain in One Price</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Everything a small business needs to launch online: a custom website, a logo or brand kit, the first
              year of hosting and a domain, business email and a Google Business Profile setup.
            </p>
          </div>
          <PricingCards plans={COMPLETE_PACKAGES} cols={4} />
          <p className="text-center text-xs text-gray-400 mt-8 max-w-3xl mx-auto">
            Prices are one-time, in Canadian dollars, plus HST. Each package includes the first year of hosting, SSL and a
            domain registered in your name. From year two the Hosting Plan is {HOSTING_PLAN.price} a year ({HOSTING_PLAN.storePrice} a
            year for online stores), plus HST, or you can move to any host. Savings compare the package with buying the same
            website package, logo or brand package and one year of hosting separately at the prices on this site.
          </p>
        </div>
      </section>

      {/* ─── WEBSITE ONLY ─── */}
      <section id="website-only" className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Website Only</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Affordable Web Design Pricing for Every Business</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Already have a logo and hosting? From a small business website to a full ecommerce store. Every package includes
              custom design, mobile responsive pages, SEO basics and complete deployment.
            </p>
          </div>
          <PricingCards plans={WEBSITE_PACKAGES} />
          <p className="text-center text-xs text-gray-400 mt-8">
            Prices are one-time, in Canadian dollars, plus HST. Website-only packages do not include hosting or a domain; add our
            Hosting Plan for {HOSTING_PLAN.price} a year or use your own. Third-party subscriptions (e.g. Shopify plans) are billed by the provider.
          </p>
        </div>
      </section>

      {/* ─── WEBSITE + SEO ─── */}
      <section id="website-seo" className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Website + SEO</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Website and SEO Packages</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Business Complete with our Starter SEO plan for 3, 6 or 12 months, in one price. SEO is sold on the work we do
              each month: articles, citations, on-page fixes and reporting. No one can guarantee a #1 ranking on Google.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {WEBSITE_SEO_BUNDLES.map((b, i) => (
              <div key={b.name} className={`rounded-2xl p-7 border reveal ${i === 2 ? "border-[#00AADF] bg-white" : "border-gray-100 bg-white"}`} style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 className="text-sm font-bold tracking-widest uppercase text-[#00AADF] mb-2">{SEO_TERMS[i].name}</h3>
                <p className="text-gray-900 font-bold mb-3">{b.name}</p>
                <p className="text-4xl font-black text-gray-900">{b.price}</p>
                <p className="text-xs text-gray-400 mb-3">One price, CAD + HST</p>
                <p className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 bg-emerald-50 text-emerald-700">{b.save} vs buying separately</p>
                <p className="text-sm text-gray-600 leading-relaxed">{SEO_TERMS[i].goal}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            See every SEO plan and term on our{" "}
            <Link href="/seo-packages" className="font-bold text-[#00AADF] hover:underline">SEO packages page</Link>. Need a logo only?
            See our <Link href="/services/graphic-design" className="font-bold text-[#00AADF] hover:underline">logo and branding packages</Link>, and keep
            your site updated with <Link href="/maintenance" className="font-bold text-[#00AADF] hover:underline">maintenance from $25 a month</Link>.
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
