import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import QuoteFormSection from "@/components/QuoteFormSection";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Wix Website Design Canada | Wix Studio Experts & Redesigns" },
  description: "Professional Wix website design on Wix Studio, redesigns of DIY sites, proper Wix SEO setup — and Wix-to-WordPress migration when you outgrow the platform.",
  alternates: { canonical: "/services/wix-website-design" },
  openGraph: {
    title: "Wix Website Design Canada | Wix Studio Experts & Redesigns",
    description: "Professional Wix website design on Wix Studio, redesigns of DIY sites, proper Wix SEO setup — and Wix-to-WordPress migration when you outgrow the platform.",
    url: "https://canadianwebdesigns.ca/services/wix-website-design",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Wix website design and redesign in Canada — Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How much does professional Wix website design cost in Canada?",
    a: "Wix projects are quoted individually — free and with no obligation — because scope varies more on Wix than any other platform we work on. A polish-and-fix pass on a DIY site is a very different project from a ground-up Wix Studio build with e-commerce. What we'll always tell you up front: your Wix plan subscription is a separate ongoing cost paid to Wix, and we'll recommend the cheapest plan tier that actually fits your needs.",
  },
  {
    q: "Can you redesign the Wix site I built myself?",
    a: "Yes — DIY rescues are the most common Wix project we take on. Typical fixes: replacing the stretched template look with a proper layout system, rebuilding pages so they don't collapse on mobile, compressing the oversized images that make Wix sites feel slow, setting up the SEO settings that were skipped (page titles, descriptions, alt text, redirects), and connecting analytics so you can finally see what's working. Often we keep your existing content and rebuild the presentation around it.",
  },
  {
    q: "Is Wix good for SEO?",
    a: "Better than its old reputation, worse than its marketing. Modern Wix generates clean enough code, supports custom titles and metas, redirects, structured data, and connects properly to Google Search Console — a well-built Wix site can absolutely rank for local and small-business searches. The honest limits: you have less technical control than WordPress, URL structures are partly fixed, and large-scale content operations get awkward. For a 5–20 page local business site, Wix SEO done properly is rarely the bottleneck — the skipped setup work is.",
  },
  {
    q: "Should I choose Wix or WordPress?",
    a: "Wix is the right call when you want one predictable monthly bill covering hosting and software, a visual editor you can safely touch yourself, and a site that launches fast — typical for local service businesses, portfolios, and simple stores. WordPress wins when content marketing is central to your growth plan, when you need functionality beyond what Wix apps offer, or when you want to own the site outright with no platform subscription. We build on both, so you'll get a recommendation based on your business — not the platform we happen to sell.",
  },
  {
    q: "Can you move my Wix site to WordPress without losing my Google rankings?",
    a: "Yes — this is the part DIY migrations get wrong. Wix cannot export a site, so content is rebuilt in WordPress; the ranking risk lives in the URLs. We inventory every page Google has indexed, mirror or 301-map each URL on the new site, carry over your titles and meta descriptions, and resubmit your sitemap so Google reconnects your history to the new pages. Done in that order, rankings transfer; skipped, they reset.",
  },
  {
    q: "What is Wix Studio, and do you build on it?",
    a: "Wix Studio is Wix's professional platform for agencies and designers — the successor to the classic editor for serious builds, with a true responsive layout system, custom breakpoints, reusable design components, and Velo for custom code when it's needed. Yes, it's what we build on: it removes most of the 'Wix sites all look the same' problem, because layouts are designed rather than assembled from template blocks.",
  },
  {
    q: "Do I keep control of my Wix account?",
    a: "Always. Your Wix account, your domain, your billing relationship with Wix — we work as a collaborator on your site, not as the owner of it. If we part ways, nothing about your site changes. The one thing to understand about any closed platform, Wix included: the site itself can't be exported and moved elsewhere. That's not a CWD limitation — it's how Wix works, and it's exactly why we offer the WordPress migration path when businesses outgrow it.",
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
  "@id": "https://canadianwebdesigns.ca/services/wix-website-design",
  name: "Wix Website Design & Redesign",
  description: "Professional Wix website design on Wix Studio, redesigns of DIY Wix sites, Wix SEO setup, Wix eCommerce, and Wix-to-WordPress migrations for Canadian businesses.",
  provider: {
    "@type": "Organization",
    name: "Canadian Web Designs",
    url: "https://canadianwebdesigns.ca",
    telephone: "(647) 689-6069",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: String(config.reviewCount) },
  },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Vancouver" },
    { "@type": "Country", name: "Canada" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "CAD",
  },
};

const services = [
  {
    title: "Professional Wix Website Design",
    desc: "A Wix site that doesn't look like Wix. Custom layouts, a real brand system, and page structures planned around what your customers search for — built by designers, not assembled from template blocks.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Wix Studio Development",
    desc: "Built on Wix Studio — Wix's professional platform — with true responsive breakpoints, reusable components, and Velo custom code where your project needs behaviour the editor can't provide.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    title: "Wix Redesign & DIY Rescue",
    desc: "Keep your content, fix everything else: broken mobile layouts, oversized images, template sameness, and the SEO settings that were never filled in. Your site, finished properly.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085",
  },
  {
    title: "Wix SEO Setup",
    desc: "Page titles, meta descriptions, heading structure, alt text, redirects, structured data, and Search Console — the setup checklist most DIY Wix sites skip, done completely and verified.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Wix eCommerce",
    desc: "Wix online stores set up properly for Canadian sellers: product architecture, taxes and shipping by province, payment methods your customers trust, and product pages written to convert.",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.696 2.075-3.27 2.454-4.568.048-.168.073-.34.073-.518a2.25 2.25 0 00-2.25-2.25h-2.25",
  },
  {
    title: "Wix-to-WordPress Migration",
    desc: "Outgrown Wix? We rebuild your site on WordPress, map every indexed URL with 301 redirects, and carry over your metadata — so you gain ownership and flexibility without sacrificing rankings.",
    icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
];

const process = [
  { step: "01", title: "Site & Goal Review", desc: "If you have an existing Wix site, we audit it first: mobile layout, image weight, skipped SEO settings, and how it presents against local competitors. If you're starting fresh, we confirm Wix is genuinely the right platform for your plans — and say so honestly if it isn't." },
  { step: "02", title: "Design in Wix Studio", desc: "Layouts designed for your brand and built in Wix Studio with proper responsive breakpoints — so the mobile experience is designed, not an accidental byproduct of the desktop layout. Every page gets a defined search intent before design starts." },
  { step: "03", title: "SEO Setup & QA", desc: "Titles, meta descriptions, heading hierarchy, image alt text and compression, redirects from any old URLs, structured data, and Google Search Console verification. Then QA across devices: forms, booking flows, store checkout, and page speed." },
  { step: "04", title: "Launch & Handoff", desc: "We launch, submit your sitemap, and hand the site back with a walkthrough — because the point of Wix is that you can safely edit it yourself. Prefer not to touch it? Month-to-month support keeps us one email away for changes and campaigns." },
];

export default function WixWebsiteDesignPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services/web-design-development" }, { name: "Wix Website Design", href: "/services/wix-website-design" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Wix Studio Experts — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Wix Website Design{" "}<span className="gradient-text-animated">&amp; Redesign Canada</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Professional Wix Studio builds, rescues of DIY sites, and Wix SEO done properly. And when your business outgrows Wix — we&apos;re the team that migrates you to WordPress without losing your rankings.
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
              {["Wix Studio Builds", "DIY Site Rescues", "Honest Platform Advice"].map((t) => (
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
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Wix Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Every Wix Project — From First Build to Final Migration</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">New Wix Studio builds, rescues of DIY sites, SEO setup, e-commerce — and a WordPress exit path when you need one.</p>
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
              {[{ value: "4.3%", label: "Of All Websites Run on Wix" }, { value: "#3", label: "Most-Used Platform on the Web" }, { value: "200+", label: "Five-Star Reviews" }, { value: "2 Paths", label: "Build on Wix — or Migrate Off It" }].map((s) => (
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
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Wix Website Design Canada</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>The Honest Truth About Wix — From a Team That Builds on Everything</h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Most agencies either sell Wix uncritically or sneer at it. Both are doing you a disservice. Wix runs about 4.3% of all websites — third after WordPress and Shopify — and for a local service business that needs a professional 5–20 page site with one predictable monthly bill, it&apos;s often a perfectly rational choice. The platform isn&apos;t usually the problem. The execution is.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The DIY Wix site we&apos;re asked to rescue looks the same every time: a template stretched around content it wasn&apos;t designed for, a mobile layout nobody checked, ten-megabyte photos straight off a phone, and every SEO field still empty — no page titles, no descriptions, no alt text, Search Console never connected. Google isn&apos;t ignoring the site because it&apos;s Wix; it&apos;s ignoring it because nobody introduced them.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Professional Wix work looks different now because the tooling is different. We build on Wix Studio — Wix&apos;s agency platform — which gives us a true responsive layout system with custom breakpoints, reusable components, and Velo code when a project needs custom behaviour. That&apos;s what eliminates the &ldquo;all Wix sites look the same&rdquo; problem: the layout is designed for your brand, not assembled from the same blocks everyone else drags in.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                And when a business genuinely outgrows Wix — content marketing at scale, custom functionality, or simply wanting to own the site outright — we don&apos;t pretend otherwise, because we&apos;re not locked into selling one platform. Wix can&apos;t export a website, so leaving it takes a careful rebuild: every indexed URL mapped with 301 redirects, metadata carried over, sitemap resubmitted. We&apos;ve done it enough times to know exactly where rankings get lost — and how to make sure yours aren&apos;t.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Deciding Between Platforms? Start Here</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "WordPress Website Design", href: "/services/wordpress-website-design" },
                  { label: "How Much Does a Website Cost in Canada?", href: "/how-much-does-a-wordpress-website-cost" },
                  { label: "Ultimate Guide to Website Builders", href: "/blog/ultimate-guide-to-the-best-website-builders" },
                  { label: "Our Web Design Portfolio", href: "/portfolio" },
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Wix Owners Choose CWD</h3>
                <div className="space-y-4">
                  {[
                    "Wix Studio builds — custom breakpoints, not stretched templates",
                    "We work in your Wix account; you keep full ownership and billing",
                    "DIY rescues that keep your content and fix the presentation",
                    "The full Wix SEO setup checklist, completed and verified",
                    "Honest platform advice — we build on Wix, WordPress, and Shopify",
                    "A proven Wix-to-WordPress migration path if you outgrow the platform",
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
                    Get Your Free Wix Quote
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Approach Wix Projects</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">Whether it&apos;s a new build, a rescue, or a migration off the platform — the process starts with an honest assessment, not a sales pitch.</p>
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
            <h2 className="text-3xl font-black text-gray-900">Wix Website Design — Common Questions</h2>
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
          <p className="text-center text-sm text-gray-500 mb-5">Explore our other platform and marketing services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/wordpress-website-design" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>WordPress Design ↗</Link>
            {[
              { name: "Shopify Design", href: "/services/shopify-website-design" },
              { name: "SEO Services", href: "/services/seo" },
              { name: "Web Design & Development", href: "/services/web-design-development" },
              { name: "Website Maintenance", href: "/maintenance" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source="service-wix-website-design" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
