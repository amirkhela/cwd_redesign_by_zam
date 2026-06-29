import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: "Mobile Web Design Toronto | Loads Under 2s | Core Web Vitals Pass | 180+ Reviews | Free Audit",
  description:
    "70%+ of Toronto searches happen on mobile — is your site ready? We build responsive sites that load under 2s, pass Core Web Vitals & rank Page 1 on Google. Free mobile audit: (647) 689-6069.",
  alternates: { canonical: "/mobile-web-design-in-toronto" },
  openGraph: {
    title: "Mobile Web Design Toronto | Fast & Responsive | Core Web Vitals | Free Audit",
    description:
      "Mobile-first web design for Toronto businesses — responsive sites that load under 2s, rank on Google & convert mobile visitors. Free audit — (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/mobile-web-design-in-toronto",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Mobile Web Design Toronto" }],
  },
};

const faq = [
  {
    q: "What is mobile web design and why does it matter for Toronto businesses?",
    a: "Mobile web design means building your website so it looks and functions perfectly on smartphones and tablets — not just desktops. Over 70% of Toronto searches happen on mobile devices. Google uses mobile-first indexing, meaning it primarily uses your site's mobile version to determine search rankings. A site that doesn't perform on mobile loses both rankings and customers.",
  },
  {
    q: "What's the difference between responsive design and a separate mobile site?",
    a: "Responsive design uses a single codebase that adapts to any screen size — the recommended approach since 2015. A separate mobile site (m.dot) creates duplicate content issues and requires double the maintenance. All Canadian Web Designs websites are built responsive from day one — one site, every device, zero duplication.",
  },
  {
    q: "How much does mobile web design cost in Toronto?",
    a: "Our responsive websites start at $1,499 for a complete custom build. All sites include full mobile optimization, Core Web Vitals compliance, fast loading speeds, and on-page SEO. There are no add-on fees for mobile — responsiveness is built into every project as standard.",
  },
  {
    q: "Will a mobile-optimized website rank higher on Google in Toronto?",
    a: "Yes — Google uses Core Web Vitals (loading speed, interactivity, layout stability) as ranking signals, and these are measured primarily on mobile. A fast, mobile-optimized Toronto website will rank above a slow desktop-only site for the same keywords. Mobile optimization is one of the highest-ROI technical SEO investments a Toronto business can make.",
  },
  {
    q: "How fast should a Toronto mobile website load?",
    a: "Google recommends under 2.5 seconds for Largest Contentful Paint (LCP). Every site we build is optimized for sub-2-second mobile load times using modern image formats (WebP/AVIF), lazy loading, minified code, and CDN delivery. Slow sites lose rankings and conversions — we build fast.",
  },
  {
    q: "Do you rebuild existing Toronto websites to be mobile-friendly?",
    a: "Yes — mobile redesigns are among our most common projects. We audit your current site's mobile performance, Core Web Vitals scores, and responsiveness, then either rebuild or retrofit depending on your platform and goals. We maintain your existing URL structure and content to protect current rankings during the transition.",
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

const features = [
  {
    title: "Responsive Layouts",
    desc: "Fluid grids and flexible images that adapt perfectly from 320px to 4K — one codebase, every device, zero compromise.",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3",
  },
  {
    title: "Core Web Vitals Optimized",
    desc: "LCP under 2.5s, FID under 100ms, CLS under 0.1. We build to Google's performance standards — not just visual standards.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Touch-First Navigation",
    desc: "Tap targets sized for thumbs, swipe-friendly carousels, sticky CTAs, and click-to-call buttons — designed for how Toronto customers actually use their phones.",
    icon: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5",
  },
  {
    title: "Mobile SEO Built In",
    desc: "Mobile-first meta tags, structured data, canonical URLs, and hreflang — every technical SEO element configured for Google's mobile-first crawler from day one.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Fast Image Delivery",
    desc: "WebP and AVIF formats, responsive srcsets, lazy loading below the fold, and CDN delivery. Images load in milliseconds even on LTE — not seconds.",
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    title: "Conversion-Optimized Mobile UX",
    desc: "Sticky headers with click-to-call, mobile lead forms above the fold, reduced friction checkout flows, and A/B tested layouts — mobile design that drives leads, not just visits.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
];

const stats = [
  { value: "70%+", label: "Toronto searches happen on mobile" },
  { value: "53%", label: "Users leave if site loads > 3s" },
  { value: "7%", label: "Conversions lost per 1s delay" },
  { value: "#1", label: "Mobile-first indexing by Google" },
];

export default function MobileWebDesignTorontoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/web-design-development" },
          { name: "Mobile Web Design Toronto", href: "/mobile-web-design-in-toronto" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Toronto — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              Mobile Web Design{" "}
              <span className="gradient-text-animated">Toronto</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Over 70% of Toronto searches happen on mobile. We build responsive, lightning-fast
              websites that rank on Google and convert visitors into customers — on every device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Get a Free Mobile Audit
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:6476896069"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                (647) 689-6069
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {["Websites from $1,499", "Mobile-First by Default", "Core Web Vitals Certified", `${config.reviewCount}+ Reviews`].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center reveal">
                <p className="text-4xl font-black text-gray-900 mb-1"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY MOBILE FIRST ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why It Matters</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Toronto Searches on Mobile.<br />Google Ranks on Mobile. Your Site Should Be Built for Mobile.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Google switched to mobile-first indexing in 2019 — meaning it primarily crawls and ranks your
                website based on its mobile version, not desktop. A Toronto business with a desktop-only or
                poorly optimized mobile site is ranking below its potential, regardless of how good the
                desktop experience is.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Beyond rankings, mobile UX directly drives conversions. A site that takes 4 seconds to load
                on an iPhone loses 53% of visitors before they even see your homepage. A form that&apos;s
                hard to fill on a touchscreen loses inquiries. A phone number that isn&apos;t click-to-call
                loses calls. Every friction point on mobile is lost revenue.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We build every Toronto website mobile-first — not as an afterthought, but as the primary
                design constraint. Desktop is an enhancement of the mobile experience, not the other way
                around. The result: websites that rank higher, load faster, and convert better across all
                of your customers&apos; devices.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                Get a Free Mobile Performance Audit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="reveal delay-2 space-y-4">
              {[
                { title: "Google Mobile-First Indexing", desc: "Google ranks your mobile site. A slow or broken mobile experience directly suppresses your Toronto search rankings — regardless of how good your desktop site looks." },
                { title: "Toronto's Mobile Search Share", desc: "Over 70% of local Toronto searches happen on smartphones. If your website isn't optimized for mobile, you're losing the majority of your potential customers before they ever reach your contact form." },
                { title: "Page Speed as a Ranking Signal", desc: "Core Web Vitals — LCP, FID, and CLS — are Google ranking factors. We build every site to pass Google's performance thresholds, giving you a measurable ranking advantage over competitors with slow sites." },
                { title: "Click-to-Call Conversions", desc: "Mobile visitors who call convert at 3x the rate of desktop form submissions. We design Toronto mobile websites with prominent click-to-call buttons, sticky headers, and phone number schema markup." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Build</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Mobile Web Design That Performs — Not Just Displays
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Every feature is built for the mobile experience first. Desktop gets an enhanced version.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={f.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── PRICING ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Mobile Web Design Toronto — Transparent Pricing</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Mobile-first is standard on every project — no extra fees for responsiveness.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "AI WebSuite",
                price: "$40",
                period: "/month",
                desc: "Mobile-optimized AI-powered website. Fully managed, hosted, and updated monthly.",
                features: ["Responsive on all devices", "Core Web Vitals compliant", "Click-to-call integration", "SEO-optimized from day one", "Hosting & SSL included", "Monthly content updates"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Custom WordPress",
                price: "$1,499",
                period: "one-time",
                desc: "Full custom responsive WordPress site — mobile-first design, SEO-optimized for Toronto.",
                features: ["Mobile-first responsive design", "Core Web Vitals certified", "Touch-optimized navigation", "Click-to-call + lead forms", "On-page SEO for Toronto", "3 rounds of revisions"],
                cta: "Get a Quote",
                highlight: true,
              },
              {
                name: "Mobile Redesign",
                price: "From $799",
                period: "one-time",
                desc: "Existing site not mobile-friendly? We audit, redesign, and relaunch — protecting your current rankings.",
                features: ["Mobile UX audit included", "Responsive rebuild/retrofit", "URL structure preserved", "Current SEO protected", "Core Web Vitals optimization", "Post-launch monitoring"],
                cta: "Get a Quote",
                highlight: false,
              },
            ].map((plan) => (
              <div key={plan.name}
                className={`rounded-2xl p-8 reveal border transition-all duration-300 ${plan.highlight ? "border-[#00AADF]" : "border-gray-100 bg-white"}`}
                style={plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" } : { boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className={`text-sm font-bold tracking-widest uppercase mb-2 ${plan.highlight ? "text-white/70" : "text-[#00AADF]"}`}>{plan.name}</p>
                <p className={`text-4xl font-black mb-0.5 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</p>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.period}</p>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>{plan.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-white" : "text-[#00AADF]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${plan.highlight ? "bg-white text-[#003B6F] hover:bg-white/90" : "text-white hover:opacity-90"}`}
                  style={!plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)" } : {}}>
                  {plan.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Mobile Web Design Toronto — Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Explore our web design services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/web-design-development"
              className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
              Web Design Services ↗
            </Link>
            {[
              { name: "Web Design Toronto", href: "/locations/toronto" },
              { name: "SEO Toronto", href: "/seo/toronto" },
              { name: "Website Maintenance", href: "/maintenance" },
              { name: "Web Designers Near Me", href: "/web-designers-near-me" },
              { name: "Web Design Canada", href: "/" },
            ].map((c) => (
              <Link key={c.name} href={c.href}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Build a Toronto Website That Wins{" "}
            <span className="gradient-text-animated">on Mobile</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free mobile performance audit — we&apos;ll test your current site on mobile, score your Core Web Vitals,
            and show you exactly what&apos;s costing you rankings and customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Mobile Audit
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href="tel:6476896069"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (647) 689-6069
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
