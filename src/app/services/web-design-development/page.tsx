import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "web-design-development")!;

export const metadata: Metadata = {
  title: "Web Design Canada | Custom Sites From $1,499 | Page 1 Google | 180+ Reviews | Free Quote",
  description: "Custom websites from $1,499 — built to rank Page 1 on Google & convert visitors into leads. Mobile-first, SEO-ready on day one, no templates. 180+ five-star reviews. Free quote: (647) 689-6069.",
  alternates: { canonical: "/services/web-design-development" },
  openGraph: {
    title: "Web Design Canada | Custom Sites From $1,499 | Page 1 Google | 180+ Reviews | Free Quote",
    description: "Custom websites from $1,499 — built to rank Page 1 on Google & convert visitors into leads. Mobile-first, SEO-ready on day one. 180+ reviews. Free quote: (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/services/web-design-development",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Web Design Toronto 2026 — Canadian Web Designs" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a professional website cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Every project is scoped individually — cost depends on the number of pages, features, and complexity. Contact us for a free, no-obligation quote tailored to your business." },
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
    {
      "@type": "Question",
      name: "What makes Canadian Web Designs the best web design company in Toronto?",
      acceptedAnswer: { "@type": "Answer", text: "We combine deep Toronto market knowledge, proven local SEO expertise, and 180+ five-star reviews to deliver websites that rank on Google and convert visitors into customers. Unlike agencies that use templates, we build every site from scratch — custom to your brand and industry. Our results guarantee means we keep working at no extra charge if your site doesn't perform." },
    },
    {
      "@type": "Question",
      name: "Do you offer affordable web design for small businesses in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We offer transparent, flat-rate pricing starting from $1,499 with no hidden fees. We believe every Canadian small business deserves a professional website — our packages are designed to fit SMB budgets while delivering enterprise-quality design, SEO, and performance." },
    },
    {
      "@type": "Question",
      name: "What web design services are included with every website?",
      acceptedAnswer: { "@type": "Answer", text: "Every website we build includes mobile-first responsive design, on-page SEO (meta tags, headings, canonical URLs, sitemap), Google Analytics integration, contact form setup, SSL certificate configuration, and 30 days of post-launch support. Higher-tier packages add e-commerce functionality, blog setup, custom animations, CRO optimization, and extended maintenance." },
    },
    {
      "@type": "Question",
      name: "How do I choose the best web design company in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Look for three things: proven results (real rankings and traffic growth, not just pretty portfolios), transparent pricing (flat-rate quotes with no hidden fees), and strong reviews (180+ five-star Google reviews is a meaningful signal). Ask whether they build custom sites or use templates, and whether SEO is included or an add-on. Canadian Web Designs checks all of these boxes — and backs every project with a results guarantee." },
    },
  ],
};

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

          {/* CTA */}
          <div className="text-center mb-14">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Ready to Build Your Website?</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">Every project is scoped individually — no templates, no guesswork. Tell us about your business and we&apos;ll send you a free, no-obligation quote.</p>
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

          {/* ── From the Blog ── */}
          <div className="mt-16">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">From the Blog — Web Design Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Web Design Services Canada: What to Look For, What to Pay, and Who to Trust",
                  desc: "A no-fluff guide to hiring a web design agency in Canada — pricing, what's included, and how to avoid agencies that overpromise.",
                  href: "/blog/web-design-services-canada-complete-guide",
                },
                {
                  title: "How Long Does It Take to Build a Website in Canada?",
                  desc: "Realistic 2026 timelines by project type — and the specific client-side factors that slow builds down the most.",
                  href: "/blog/how-long-does-it-take-to-build-a-website-canada",
                },
                {
                  title: "Affordable Web Design Canada: A Small Business Guide",
                  desc: "How to get a professional, SEO-ready website without overpaying — and what \"affordable\" actually means in 2026.",
                  href: "/blog/affordable-web-design-canada-small-business-guide",
                },
              ].map((post) => (
                <Link key={post.href} href={post.href} className="group block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-[#00AADF]/40 hover:shadow-md transition-all duration-200">
                  <h4 className="font-black text-gray-900 text-sm mb-2 group-hover:text-[#00AADF] transition-colors">{post.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{post.desc}</p>
                  <span className="text-[#00AADF] text-xs font-bold">Read the guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
