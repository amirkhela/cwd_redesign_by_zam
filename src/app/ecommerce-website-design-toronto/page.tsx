import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "Ecommerce Website Design Toronto | Shopify & WooCommerce | From $2,499 | 80+ Stores | Free Quote",
  description:
    "Toronto e-commerce stores built to rank on Google & generate sales. Shopify, WooCommerce & headless from $2,499. 80+ stores launched, avg 3.4× conversion lift. Free quote: (647) 689-6069.",
  alternates: { canonical: "/ecommerce-website-design-toronto" },
  openGraph: {
    title: "Ecommerce Website Design Toronto | Shopify & WooCommerce | From $2,499 | 80+ Stores | Free Quote",
    description:
      "Custom online stores for Toronto businesses — built to rank Page 1 on Google & convert visitors into buyers. Shopify, WooCommerce & headless from $2,499. Free quote.",
    url: `https://${config.domain}/ecommerce-website-design-toronto`,
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Ecommerce Website Design Toronto" }],
  },
};

const platforms = [
  {
    name: "Shopify",
    icon: "🛍️",
    desc: "The world's leading ecommerce platform. Fast setup, powerful apps, and built-in payment processing — ideal for product-based businesses scaling fast.",
  },
  {
    name: "WooCommerce",
    icon: "⚙️",
    desc: "Full control over your online store with the power of WordPress. Perfect for businesses that need flexibility and deep customization.",
  },
  {
    name: "Next.js / Headless",
    icon: "⚡",
    desc: "Blazing-fast, SEO-optimized ecommerce using a headless architecture. Ideal for high-traffic stores where performance and rankings are critical.",
  },
];

const features = [
  { title: "Mobile-First Design", body: "Over 70% of ecommerce traffic comes from mobile. Every store we build is optimized for phone buyers first." },
  { title: "Google Shopping Ready", body: "Product schema, structured data, and sitemap setup so your products appear in Google Shopping results." },
  { title: "Core Web Vitals Optimized", body: "Fast load times and high PageSpeed scores — key ranking factors for ecommerce pages in 2026." },
  { title: "Conversion Rate Optimization", body: "Strategic CTAs, trust signals, urgency elements, and checkout UX designed to maximize your revenue per visitor." },
  { title: "Local SEO for Toronto", body: "Rank for 'buy [product] toronto', '[product] store near me', and other high-intent local searches." },
  { title: "Ongoing Support", body: "We don't disappear after launch. Monthly maintenance, updates, and SEO keep your store competitive." },
];

const pricing = [
  {
    name: "Starter Store",
    price: "$2,499",
    note: "one-time",
    items: [
      "Up to 50 products",
      "Shopify or WooCommerce",
      "Mobile-first responsive design",
      "Payment gateway setup",
      "Basic on-page SEO",
      "Google Analytics integration",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth Store",
    price: "$4,999",
    note: "one-time",
    items: [
      "Up to 250 products",
      "Custom design + CRO",
      "Product schema & Google Shopping",
      "Advanced SEO setup",
      "Email marketing integration",
      "3 months post-launch support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "contact us",
    items: [
      "Unlimited products",
      "Headless / custom architecture",
      "Multi-currency & multi-language",
      "ERP / POS integrations",
      "Priority support SLA",
      "Dedicated project manager",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How long does it take to build an ecommerce website in Toronto?",
    a: "A Starter Store typically takes 3–4 weeks. A Growth Store takes 5–7 weeks. Enterprise projects are scoped individually. We always provide a detailed timeline before starting.",
  },
  {
    q: "Which ecommerce platform is best for my Toronto business?",
    a: "Shopify is ideal for product-based businesses that want to launch quickly. WooCommerce is best if you're already on WordPress or need more flexibility. Headless Next.js is for high-traffic stores prioritizing speed and SEO.",
  },
  {
    q: "Will my ecommerce store rank on Google?",
    a: "Yes — SEO is built into every store we deliver. We set up product schema, sitemap, canonical tags, page speed optimization, and on-page content so your products rank for relevant searches in Toronto and across Canada.",
  },
  {
    q: "Do you offer ongoing maintenance for ecommerce stores?",
    a: "Absolutely. We offer monthly maintenance plans starting at $199/month covering security updates, plugin updates, backups, and performance monitoring.",
  },
  {
    q: "Can you migrate my existing store to a new platform?",
    a: "Yes. We handle full migrations from Magento, BigCommerce, Wix, Squarespace, or any other platform to Shopify, WooCommerce, or a custom solution — with zero data loss.",
  },
  {
    q: "How much does ecommerce website design cost in Toronto?",
    a: "Toronto ecommerce websites start at $2,499 for a Starter Store (up to 50 products), $4,999 for a Growth Store (up to 250 products with custom design and CRO), and custom pricing for Enterprise builds. All packages include mobile-first design, SEO setup, and payment gateway integration. Contact us for a free, detailed quote.",
  },
  {
    q: "Do you offer ecommerce SEO for Toronto online stores?",
    a: "Yes — every store we build includes a full Toronto-specific ecommerce SEO foundation: product schema markup, keyword-optimized product and category pages, sitemap configuration, and Google Shopping integration. We also offer ongoing monthly ecommerce SEO retainers for Toronto stores that want to dominate competitive product searches.",
  },
];

export default function EcommerceTorontoPage() {
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `https://${config.domain}/` },
          { name: "Ecommerce Website Design Toronto", url: `https://${config.domain}/ecommerce-website-design-toronto` },
        ]}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Toronto Ecommerce Experts
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Ecommerce Website Design Toronto — Built to Rank. Built to Sell.
            </h1>
            <p className="text-lg text-white/70 mb-8">
              We build custom online stores for Toronto businesses that show up on Google and turn visitors into buyers.
              {config.reviewCount}+ five-star reviews. No templates. No guesswork.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/60 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Stores Launched", value: "80+" },
              { label: "Avg. Traffic Increase", value: "3.4×" },
              { label: "Five-Star Reviews", value: `${config.reviewCount}+` },
              { label: "Years in Business", value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Platforms We Build On</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            We recommend the right platform for your business — not the easiest one for us to build.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((p) => (
              <div key={p.name} className="bg-light rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-3">{p.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">
            What Every Store We Build Includes
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            We don&apos;t just design — we build stores that rank on Google, load fast, and convert visitors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 flex gap-4 border border-gray-100">
                <span className="text-primary text-xl mt-0.5">✓</span>
                <div>
                  <h3 className="font-bold text-dark mb-1">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Transparent Pricing</h2>
          <p className="text-muted text-center mb-12 max-w-xl mx-auto">
            No hidden fees. No monthly lock-ins unless you want ongoing support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-primary text-white shadow-xl scale-105"
                    : "bg-light text-dark border border-gray-100"
                }`}
              >
                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-dark"}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-dark"}`}>
                    {plan.price}
                  </div>
                  <div className={`text-sm ${plan.highlight ? "text-white/70" : "text-muted"}`}>{plan.note}</div>
                </div>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-white/90" : "text-dark/80"}`}>
                      <span className={plan.highlight ? "text-white" : "text-primary"}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center font-semibold px-6 py-3 rounded-xl transition-colors ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Ecommerce Website Design Toronto — FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted mb-6">Related services for Toronto businesses</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/web-design-development" className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
              Web Design & Development
            </Link>
            <Link href="/services/seo" className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
              SEO Services Toronto
            </Link>
            <Link href="/locations/toronto" className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
              Web Design Toronto
            </Link>
            <Link href="/services/website-maintenance" className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
              Website Maintenance
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your Toronto Ecommerce Store?
          </h2>
          <p className="text-white/70 mb-8">
            Tell us about your products and goals. We&apos;ll put together a custom plan and quote — no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-lg"
          >
            Get Your Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
