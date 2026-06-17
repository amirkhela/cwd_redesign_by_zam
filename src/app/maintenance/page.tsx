import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: "Website Maintenance Services Canada | From $99/mo | 24/7 Security & Uptime | CWD",
  description:
    "Keep your website fast, secure & ranking — maintenance plans from $99/mo. Daily backups, 24/7 uptime monitoring, malware removal & plugin updates. No contracts. 200+ Canadian sites protected. Free audit today.",
  alternates: { canonical: "/maintenance" },
  openGraph: {
    title: "Website Maintenance Canada | Plans from $99/mo | No Contracts | CWD",
    description:
      "Professional website maintenance across Canada from $99/mo. Security updates, daily backups, 24/7 uptime monitoring & SEO checks. Free audit for new clients.",
    url: "https://canadianwebdesigns.ca/maintenance",
  },
};

const faq = [
  {
    q: "What does a website maintenance service include?",
    a: "Our website maintenance services include WordPress/plugin/theme updates, daily backups, 24/7 uptime monitoring, malware scanning and removal, speed optimization, SSL certificate management, and monthly reporting. Every plan includes a dedicated point of contact — no ticket queues.",
  },
  {
    q: "How much does website maintenance cost in Canada?",
    a: "Our plans start at $99/month for basic maintenance (updates, backups, monitoring) and scale up to $349/month for full-service maintenance including content updates, SEO monitoring, and priority support. All plans are month-to-month with no long-term contracts.",
  },
  {
    q: "Do you maintain websites you didn't build?",
    a: "Yes — we maintain WordPress, Shopify, Webflow, and custom-coded sites built by any agency or developer. We perform a free audit of your site before onboarding to identify any security, speed, or structural issues.",
  },
  {
    q: "What happens if my site gets hacked?",
    a: "If your site is compromised, we respond immediately to isolate the issue, remove malicious code, restore from a clean backup, and patch the vulnerability. Clients on our maintenance plans have never experienced lasting downtime from a hack — our monitoring catches intrusions before they escalate.",
  },
  {
    q: "How often do you run updates and backups?",
    a: "Core, plugin, and theme updates are applied as they're released — we test in a staging environment first for production sites. Backups run daily and are stored off-site for 30 days. You can request a restore at any time. Learn why regular backups are non-negotiable in our guide: The Importance of Regular Website Backups.",
  },
  {
    q: "Do you offer website maintenance for Toronto and other Canadian cities?",
    a: "Yes — we provide website maintenance services across all of Canada: Toronto, Mississauga, Brampton, Vancouver, Calgary, Ottawa, Winnipeg, and beyond. Everything is managed remotely so your location doesn't matter. Most clients communicate via email and we report monthly.",
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

const plans = [
  {
    name: "Essential",
    price: "$99",
    period: "/month",
    desc: "For small business sites that need to stay secure and online.",
    features: [
      "WordPress core + plugin + theme updates",
      "Daily off-site backups (30-day retention)",
      "24/7 uptime monitoring",
      "Monthly security scan",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    desc: "For growing businesses that need faster response and content updates.",
    features: [
      "Everything in Essential",
      "Staging environment for safe updates",
      "2 hours/month content updates",
      "Core Web Vitals monitoring",
      "Priority email + phone support",
      "Quarterly SEO health check",
      "Malware removal included",
    ],
    cta: "Get Professional",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$349",
    period: "/month",
    desc: "For high-traffic sites, WooCommerce stores, and multi-location businesses.",
    features: [
      "Everything in Professional",
      "5 hours/month content + development",
      "Weekly backups + instant restore",
      "WooCommerce & eCommerce support",
      "Google Analytics + Search Console review",
      "Dedicated account manager",
      "SLA: 4-hour response time",
    ],
    cta: "Get Enterprise",
    highlight: false,
  },
];

const included = [
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Security Updates",
    desc: "Every plugin, theme, and core update applied safely — tested before deployment so your site never breaks.",
  },
  {
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25v6.75m-16.5-6.75v6.75",
    title: "Daily Backups",
    desc: "Your site backed up every 24 hours. 30-day retention. One-click restore if anything goes wrong.",
  },
  {
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    title: "Performance Monitoring",
    desc: "Core Web Vitals, page speed, and uptime tracked monthly. Fixes applied before Google notices.",
  },
  {
    icon: "M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z",
    title: "Malware Scanning",
    desc: "Automated daily scans for malware, suspicious code, and blacklist status. Removal included on all plans.",
  },
  {
    icon: "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z",
    title: "SSL Management",
    desc: "SSL certificates monitored and renewed before expiry. No more browser security warnings that kill conversions.",
  },
  {
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    title: "Monthly Reports",
    desc: "Clear monthly report: what was updated, backup status, uptime %, speed scores, and any issues found.",
  },
];

export default function MaintenancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/website-maintenance" },
          { name: "Website Maintenance", href: "/maintenance" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[10%] w-[480px] h-[480px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(130px)", opacity: 0.2 }} />
        <div className="absolute bottom-0 right-[5%] w-72 h-72 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(100px)", opacity: 0.28, animationDelay: "2s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Canada-Wide — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="font-black text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              Website Maintenance{" "}
              <span className="gradient-text-animated">Services Canada</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Keep your website secure, fast, and always online. Professional website maintenance
              plans for Canadian businesses — from $99/month, no lock-in contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Get a Free Website Audit
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
              {["Plans from $99/mo", "No Lock-In Contracts", "Month-to-Month", "180+ Happy Clients"].map((t) => (
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

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What&apos;s Included</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Complete Website Maintenance — Nothing Left to Chance
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Every plan covers the six pillars of professional website maintenance. No extras to buy, no surprises on your invoice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((item, i) => (
              <div key={item.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY MAINTENANCE MATTERS ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why It Matters</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                A Neglected Website Is a Liability — Not Just a Risk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Over 30,000 websites are hacked every day. The vast majority run on outdated WordPress
                installations with unpatched plugins — the exact attack vector that brought down thousands
                of Canadian businesses last year alone. A single compromise can mean lost revenue,
                Google blacklisting, and weeks of recovery work.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Beyond security, an unmaintained site drifts in the wrong direction: plugins conflict,
                page speed degrades, broken links accumulate, and Google&apos;s Core Web Vitals scores
                drop. Sites that aren&apos;t actively maintained lose organic traffic — quietly, steadily,
                and often without obvious warning signs until it&apos;s too late.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our website maintenance services prevent all of this. We handle everything — updates,
                backups, monitoring, performance — so you don&apos;t have to think about it.
                Your site stays secure, fast, and ranking while you focus on running your business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "99.9%", label: "Uptime guaranteed" },
                  { value: "30k+", label: "Sites hacked daily" },
                  { value: "7%", label: "Revenue lost per 1s delay" },
                  { value: "180+", label: "Clients protected" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-5 border border-gray-100" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                    <p className="text-2xl font-black text-gray-900 mb-1" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</p>
                    <p className="text-gray-500 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal delay-2 space-y-4">
              {[
                { title: "WordPress Sites", desc: "Core, plugins, themes — all updated, tested, and deployed safely. We handle WooCommerce and complex plugin stacks that require careful sequencing." },
                { title: "Shopify Stores", desc: "Theme updates, app compatibility checks, checkout flow monitoring, and speed optimization. We keep your storefront converting at its best." },
                { title: "Custom & Webflow Sites", desc: "Non-WordPress sites maintained with the same discipline — backups, monitoring, code updates, and content changes as needed." },
                { title: "Multi-Location Businesses", desc: "Enterprise maintenance plans covering multiple sites under one account. Consolidated reporting, bulk pricing, and a single point of contact." },
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

      <GoogleReviews />

      {/* ─── PRICING ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Website Maintenance Plans — No Surprises</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Flat monthly rate. Cancel anytime. We keep your business by delivering results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {plans.map((plan) => (
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
          <p className="text-center text-gray-400 text-sm">All plans include a free site audit. Month-to-month — no setup fees, no lock-in.</p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Website Maintenance — Common Questions</h2>
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

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Get a Free Website{" "}
            <span className="gradient-text-animated">Maintenance Audit</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            We&apos;ll audit your site for security vulnerabilities, outdated software, speed issues,
            and backup gaps — then recommend the right plan for your business. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Audit
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
