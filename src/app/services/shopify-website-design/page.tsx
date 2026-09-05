import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import QuoteFormSection from "@/components/QuoteFormSection";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Shopify Website Design Canada | Shopify Experts & Developers" },
  description: "Shopify experts & developers in Canada — custom store design, Online Store 2.0 themes, Shopify SEO, and migrations. A Canadian team on Canada's own platform.",
  alternates: { canonical: "/services/shopify-website-design" },
  openGraph: {
    title: "Shopify Website Design Canada | Shopify Experts & Developers",
    description: "Shopify experts & developers in Canada — custom store design, Online Store 2.0 themes, Shopify SEO, and migrations. A Canadian team on Canada's own platform.",
    url: "https://canadianwebdesigns.ca/services/shopify-website-design",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Shopify website design and development in Canada — Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How much does Shopify website design cost in Canada?",
    a: "It depends on scope, so we quote every store individually — free and with no obligation. The main cost drivers are theme scope (customizing a premium theme vs. building sections from scratch), catalogue size and complexity, the apps and integrations you need, and whether we're migrating an existing store. Keep in mind Shopify's own monthly plan fee and app subscriptions are separate ongoing costs — part of our job is keeping your app stack lean so those don't quietly pile up.",
  },
  {
    q: "Should I choose Shopify or WooCommerce for my store?",
    a: "Shopify is the better fit when you want hosting, security, checkout, and PCI compliance handled for you, and you're comfortable with a monthly platform fee plus transaction economics. WooCommerce (WordPress) wins when you need deep content marketing alongside the store, full ownership, or custom functionality that Shopify apps can't cover economically. We build on both platforms, so our recommendation is based on your business — not on the only tool we know. We've written a detailed comparison in our Shopify-to-WooCommerce migration guide.",
  },
  {
    q: "Can you redesign my existing Shopify store without losing my Google rankings?",
    a: "Yes — this is the redesign risk most merchants don't hear about until it's too late. We preserve your URL structure wherever possible, set up URL redirects in Shopify for anything that must change, carry over optimized titles and meta descriptions, and keep your collection architecture intact. Your theme changes; your search equity doesn't.",
  },
  {
    q: "What does Shopify SEO actually involve?",
    a: "More than installing an app. Proper Shopify SEO means fixing the platform's known quirks and building on its strengths: keeping canonical product URLs consistent instead of letting collection-path duplicates dilute them, writing unique collection and product descriptions (not manufacturer boilerplate), adding product structured data so your listings show price and availability in Google, compressing images, and building out collection pages to target the category searches your customers actually make.",
  },
  {
    q: "Can you migrate my store to Shopify from WooCommerce, Wix, or Etsy?",
    a: "Yes. We migrate products, variants, customers, and order history where the source platform allows it, rebuild your design on a clean Online Store 2.0 theme, and map old URLs to new ones with redirects so existing search traffic and backlinks keep working. For Etsy sellers, we set up a proper standalone store so you stop paying marketplace fees on every sale and start owning your customer list.",
  },
  {
    q: "Do I own my Shopify store?",
    a: "You own your Shopify account, your domain, your product data, and your customer list — and we set everything up under your own account from day one, never under an agency account you'd have to fight to get back. The theme code we customize is yours. The honest caveat of any hosted platform: the store runs on Shopify's infrastructure, so you're always subject to their plan pricing — which is also what pays for the hosting, security, and checkout you never have to think about.",
  },
  {
    q: "Do you provide ongoing Shopify support after launch?",
    a: "Yes — theme updates, new sections and landing pages, app troubleshooting, seasonal campaign changes, and conversion optimization based on your store's real analytics. Most stores don't need a full-time developer; they need a reliable team that answers within a business day when something matters. That's what our month-to-month support provides.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://canadianwebdesigns.ca/services/shopify-website-design",
  name: "Shopify Website Design & Development",
  description: "Shopify store design, Online Store 2.0 theme development, Shopify SEO, app integration, and platform migrations for Canadian merchants.",
  provider: { "@id": `https://${config.domain}/#organization` },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Ottawa" },
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Vancouver" },
    { "@type": "Country", name: "Canada" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    // No priceCurrency here. schema.org Offer takes price and priceCurrency
    // TOGETHER; a currency with no price announces a price and then withholds
    // it, which Google reads as an incomplete Offer rather than a cheap one.
    // These services are quoted, not listed, so availability is the only
    // honest claim. Add BOTH fields back the day a real number is published.
  },
};

const services = [
  {
    title: "Custom Shopify Store Design",
    desc: "A storefront designed around your products and brand — not the same free theme your competitors use. Homepage merchandising, category layouts, and product pages built to earn the click and the sale.",
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72",
  },
  {
    title: "Theme Development (Online Store 2.0)",
    desc: "Custom sections and blocks in Liquid, built on Online Store 2.0 — so you can rearrange and edit every page yourself in the theme editor instead of paying a developer for every change.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    title: "Shopify SEO",
    desc: "Clean canonical URLs, unique collection content, product structured data, and image optimization — so your store ranks for category searches instead of depending entirely on paid ads.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Apps & Custom Functionality",
    desc: "Reviews, subscriptions, bundles, shipping calculators, loyalty — chosen deliberately. Every app adds monthly cost and load time, so we build a lean stack and custom-code what an app would overcharge for.",
    icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.03.75.057 1.123.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
  },
  {
    title: "Migrations to Shopify",
    desc: "From WooCommerce, Wix, Squarespace, or Etsy — products, customers, and order history moved carefully, with redirects mapping every old URL so your traffic and backlinks survive the switch.",
    icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Trust signals, shipping clarity for Canadian buyers, product page copy, and checkout friction fixes — informed by your store's actual analytics, because traffic you don't convert is money spent twice.",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
];

const process = [
  { step: "01", title: "Store & Market Review", desc: "We review your products, margins, competitors, and — if you have an existing store — your analytics: where visitors drop off, which products carry the store, and what the data says about why people leave without buying. Strategy first, pixels second." },
  { step: "02", title: "Design & Theme Build", desc: "Your storefront is designed around your catalogue and built as customizable Online Store 2.0 sections. Product pages get the full conversion treatment: benefit-led copy structure, trust signals, clear shipping expectations for Canadian buyers, and review placement." },
  { step: "03", title: "SEO, Apps & QA", desc: "Collection architecture and canonical URLs set up correctly, product structured data added, images compressed, and a deliberately lean app stack installed. Then full QA: checkout flow, payment gateways, taxes and shipping rates, mobile experience, and page speed." },
  { step: "04", title: "Launch & Grow", desc: "We launch, verify tracking and Search Console, and monitor the first weeks of real customer behaviour. From there, month-to-month support covers new landing pages, seasonal campaigns, and conversion improvements driven by what your analytics actually show." },
];

export default function ShopifyWebsiteDesignPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services/web-design-development" }, { name: "Shopify Website Design", href: "/services/shopify-website-design" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Shopify Experts — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Shopify Website Design{" "}<span className="gradient-text-animated">&amp; Development Canada</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Shopify was built in Canada. So are our stores. Custom storefront design, Online Store 2.0 theme development, and Shopify SEO — engineered to convert, not just to look good.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${config.phone}`}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {config.phone}
              </a>
              <Link href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                View Our Work
              </Link>
            </div>
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {["Canadian Team, Canadian Platform", "Online Store 2.0 Themes", "Lean App Stacks — No Bloat"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Shopify Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Full-Service Shopify — Design, Development &amp; Growth</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">From first store to replatforming an established catalogue — one in-house team handles design, code, SEO, and ongoing optimization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div key={s.title} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {[{ value: "#2", label: "Most-Used Platform on the Web" }, { value: "Ottawa", label: "Where Shopify Was Born" }, { value: "200+", label: "Five-Star Reviews" }, { value: "100%", label: "Store Ownership — Your Account" }].map((s) => (
                <div key={s.label}><p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p><p className="text-gray-500 text-sm">{s.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* WHY CWD */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Shopify Website Design Canada</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>Why Most Shopify Stores Look Fine and Still Don&apos;t Sell</h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Shopify makes it genuinely easy to open a store — which is exactly why so many stores fail quietly. A free theme, thirty apps installed during week one, product descriptions pasted from the supplier, and no plan for where traffic comes from. The store looks fine. It just doesn&apos;t sell, and the monthly app bill keeps growing either way.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The pattern we fix most often is app-stack sprawl. Every app you install adds a monthly subscription and, usually, scripts that slow your storefront down — and page speed is money in e-commerce, where every extra second of load time measurably cuts conversions. We audit the stack, remove what duplicates native Shopify features, and custom-code in Liquid what an app would overcharge for. Merchants are routinely surprised how much of their app bill was paying for things Online Store 2.0 does natively.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The second fix is search. Most Shopify stores live or die on paid ads because nobody built their organic foundation: collection pages with real content targeting category searches, unique product descriptions instead of manufacturer boilerplate, consistent canonical URLs, and product structured data so Google shows price and availability right in the results. That work compounds for years — ads stop working the day you stop paying.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                And there&apos;s a reason Canadian merchants feel at home on Shopify: it&apos;s a Canadian company, founded in Ottawa, and today the second most-used website platform on the internet after WordPress. We&apos;re a Canadian team building on a Canadian platform for Canadian buyers — which shows up in the details that convert here: CAD pricing displayed properly, realistic shipping expectations, taxes configured correctly by province, and trust signals that resonate with local customers.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Selling on Shopify? Also Worth Reading</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "E-commerce Website Design Toronto", href: "/ecommerce-website-design-toronto" },
                  { label: "Shopify vs WooCommerce — Migration Guide", href: "/blog/how-to-migrate-from-shopify-to-woocommerce" },
                  { label: "SEO Services for Online Stores", href: "/services/seo" },
                  { label: "Google Ads for E-commerce", href: "/services/google-ads-management" },
                ].map((r) => (
                  <Link key={r.href} href={r.href} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-[#00AADF]/40 transition-colors" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{r.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 mb-5" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Merchants Choose CWD for Shopify</h3>
                <div className="space-y-4">
                  {[
                    "Everything set up in your own Shopify account — never an agency account",
                    "Lean app stacks: we cut subscriptions that duplicate native features",
                    "Custom Liquid sections you can edit yourself in the theme editor",
                    "Shopify SEO built in: collections, canonicals, and structured data",
                    "Redesigns and migrations with full redirect maps — rankings survive",
                    "Month-to-month support from the same Canadian team that built your store",
                  ].map((fact, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Get Your Free Shopify Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-3">Contact Us</p>
                <a href="tel:6476896069" className="flex items-center gap-2 text-gray-900 font-black text-lg hover:text-[#00AADF] transition-colors mb-2">(647) 689-6069</a>
                <p className="text-gray-500 text-sm mb-1">info@canadianwebdesigns.ca</p>
                <p className="text-gray-500 text-sm">Mon–Fri: 8:00 AM – 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Build Shopify Stores That Sell</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">Conversion and organic traffic are designed in from day one — not retrofitted after the ads budget runs out.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-black mb-4" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.step}</div>
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Shopify Website Design — Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Grow your store with our other services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ecommerce-website-design-toronto" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>E-commerce Web Design ↗</Link>
            {[
              { name: "SEO Services", href: "/services/seo" },
              { name: "Google Ads Management", href: "/services/google-ads-management" },
              { name: "WordPress Design", href: "/services/wordpress-website-design" },
              { name: "Wix Design & Migration", href: "/services/wix-website-design" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source="service-shopify-website-design" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
