import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import QuoteFormSection from "@/components/QuoteFormSection";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "WordPress Website Design Canada | Custom WordPress Experts" },
  description: "Custom WordPress website design & development — hand-coded themes, no bloated page builders, speed and SEO built in. 200+ five-star reviews. From $299.",
  alternates: { canonical: "/services/wordpress-website-design" },
  openGraph: {
    title: "WordPress Website Design Canada | Custom WordPress Experts",
    description: "Custom WordPress website design & development — hand-coded themes, no bloated page builders, speed and SEO built in. 200+ five-star reviews. From $299.",
    url: "https://canadianwebdesigns.ca/services/wordpress-website-design",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "WordPress website design and development in Canada — Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How much does a WordPress website cost in Canada?",
    a: "Our WordPress websites start at $299 for a professionally designed business site — one of the most competitive rates in Canada for custom (not template-flipped) work. Larger builds with custom functionality, WooCommerce stores, or membership features are quoted individually based on scope. The bigger cost trap to avoid isn't the build price — it's an agency that locks you into proprietary page builders and premium plugin licenses you have to keep paying for. Everything we build runs on standard WordPress that any developer can maintain.",
  },
  {
    q: "Do you use page builders like Elementor or Divi?",
    a: "No — and this is the single biggest difference in how your site will perform. Drag-and-drop page builders load hundreds of kilobytes of scripts and styles on every page whether you use them or not, which hurts Largest Contentful Paint and the other Core Web Vitals that Google uses as ranking signals. We build lightweight custom themes on the native WordPress block editor, with editable sections powered by custom fields. You get the same easy editing experience — without the bloat penalty.",
  },
  {
    q: "How long does a WordPress website take to build?",
    a: "A standard business website typically takes 2–4 weeks from kickoff to launch: discovery and sitemap in week one, design and development in weeks two and three, then content loading, SEO setup, and quality assurance before launch. WooCommerce stores and sites with custom functionality take longer depending on scope — we give you a realistic timeline in your quote, not an optimistic one.",
  },
  {
    q: "Can you migrate my site from Wix, Squarespace, or Shopify to WordPress?",
    a: "Yes — platform migrations to WordPress are one of our most common projects. The critical part isn't moving the content; it's preserving your search equity. We map every existing URL to its new WordPress equivalent with 301 redirects, carry over your page titles and meta descriptions, and resubmit your sitemap to Google — so your rankings transfer instead of resetting to zero. If you're on Wix specifically, see our Wix services page for the full migration process.",
  },
  {
    q: "Will I own my WordPress website?",
    a: "Completely. WordPress is open-source software — there's no platform holding your site hostage and no monthly platform fee just to keep it online. You own the domain, the hosting account, the theme, and every line of content. If you ever want to switch hosts or developers, you can take everything with you. That's the fundamental difference between WordPress and closed platforms like Wix or Squarespace.",
  },
  {
    q: "Do you maintain WordPress websites after launch?",
    a: "Yes — our WordPress maintenance plans start at $99/month and cover core, theme, and plugin updates, daily backups, security monitoring, uptime monitoring, and content changes. Outdated plugins are the number-one way WordPress sites get hacked, so keeping the stack current isn't optional — it's the difference between a site that quietly works for years and one that becomes an emergency.",
  },
  {
    q: "Can you fix or redesign my existing WordPress site?",
    a: "Yes. We regularly take over WordPress sites that are slow, hacked, stuck on an abandoned theme, or built by a developer who disappeared. We start with a free audit: plugin stack, page speed, security posture, and SEO basics. Sometimes the right answer is a cleanup and speed pass; sometimes it's a rebuild on a lighter theme. We'll tell you honestly which one you need.",
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
  "@id": "https://canadianwebdesigns.ca/services/wordpress-website-design",
  name: "WordPress Website Design & Development",
  description: "Custom WordPress website design and development for Canadian businesses: hand-coded themes, WooCommerce stores, speed optimization, security hardening, and migrations from Wix, Squarespace, and Shopify.",
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
    price: "299",
  },
};

const services = [
  {
    title: "Custom WordPress Website Design",
    desc: "A design built around your business — not a $60 theme with your logo swapped in. Custom layouts, your brand system, and conversion-focused page structures for every service you offer.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Custom Theme Development",
    desc: "Lightweight themes built on the native block editor with custom fields for every editable section. No Elementor, no Divi, no 400KB of builder scripts dragging down your Core Web Vitals.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    title: "WooCommerce Development",
    desc: "Full e-commerce on WordPress: product architecture, Canadian tax and shipping configuration, payment gateways, and a checkout tuned to reduce abandonment.",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.696 2.075-3.27 2.454-4.568.048-.168.073-.34.073-.518a2.25 2.25 0 00-2.25-2.25h-2.25",
  },
  {
    title: "WordPress Speed Optimization",
    desc: "Image optimization, caching, script cleanup, and hosting recommendations that get Largest Contentful Paint under 2.5 seconds — the threshold Google actually measures you against.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Security Hardening & Malware Cleanup",
    desc: "Login protection, firewall rules, file integrity monitoring, and cleanup of already-infected sites. Most WordPress hacks come through outdated plugins — we close that door and keep it closed.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Migrations to WordPress",
    desc: "Moving from Wix, Squarespace, Shopify, or an old custom CMS? We migrate content, rebuild your design properly, and 301-redirect every old URL so your Google rankings come with you.",
    icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
];

const process = [
  { step: "01", title: "Discovery & Architecture", desc: "We map your services, your customers, and the searches you need to win, then plan the sitemap and page structure around them. Every page gets a defined keyword focus before a single pixel is designed — structure is where WordPress SEO is won or lost." },
  { step: "02", title: "Design & Custom Build", desc: "Your theme is designed for your brand and hand-built on the native block editor. Editable sections use custom fields, so you can update content without breaking layouts — and without a page builder loading its entire library on every visit." },
  { step: "03", title: "Content, SEO & QA", desc: "Page titles, meta descriptions, heading hierarchy, schema markup, image compression, and internal linking — done during the build, not bolted on after. Then a full QA pass: forms, mobile breakpoints, Core Web Vitals, and 301 redirects from any old URLs." },
  { step: "04", title: "Launch & Maintain", desc: "We launch, submit your sitemap to Google Search Console, and monitor the first weeks of crawl data. Maintenance plans from $99/month keep core, theme, and plugins updated with daily backups — the unglamorous work that keeps WordPress sites alive." },
];

export default function WordPressWebsiteDesignPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services/web-design-development" }, { name: "WordPress Website Design", href: "/services/wordpress-website-design" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">WordPress Experts — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              WordPress Website Design{" "}<span className="gradient-text-animated">&amp; Development Canada</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Hand-coded WordPress websites that load fast, rank on Google, and belong entirely to you. No bloated page builders, no license lock-in, no template look-alikes.
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
              {["Custom Themes — No Builder Bloat", "You Own Everything", "Maintenance From $99/mo"].map((t) => (
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
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">WordPress Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Everything Your WordPress Site Needs, Under One Roof</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Design, development, WooCommerce, speed, security, and migrations — handled by one in-house Canadian team.</p>
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
              {[{ value: "41.5%", label: "Of All Websites Run WordPress" }, { value: "$299", label: "WordPress Sites From" }, { value: "200+", label: "Five-Star Reviews" }, { value: "$99/mo", label: "Maintenance Plans From" }].map((s) => (
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
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">WordPress Website Design Canada</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>Why Most WordPress Sites Are Slow — and Ours Are Not</h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                WordPress powers about 41.5% of every website on the internet — roughly nine times the share of its nearest competitor. That popularity is exactly why quality varies so wildly. Anyone can buy a $60 theme, stack thirty plugins on top of it, and call themselves a WordPress designer. The result is the classic bad WordPress site: five seconds to load, a hacked wp-admin within a year, and a layout that looks like ten thousand other businesses.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The single biggest culprit is page-builder bloat. Drag-and-drop builders ship their entire component library — hundreds of kilobytes of JavaScript and CSS — on every page load, whether that page uses one widget or fifty. Since Google made Core Web Vitals a ranking signal, that overhead is no longer just a user-experience problem: a slow Largest Contentful Paint quietly costs you positions against every competitor whose site is lighter than yours.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                We build the opposite way. Every site starts as a lightweight custom theme on the native WordPress block editor, with the sections you need to edit wired up through custom fields. You still update your own content in minutes — but the site ships only the code it actually uses. Plugins are added when they earn their place, not by default; a typical CWD build runs on a fraction of the plugin count of the average small-business WordPress site, which means fewer updates, fewer conflicts, and a dramatically smaller attack surface.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                And because WordPress is open source, everything we build is genuinely yours: no platform subscription to keep the site alive, no proprietary builder holding your layouts hostage, no license fees for functionality you already paid to have built. If you ever leave us — most clients don&apos;t — any competent WordPress developer can pick up exactly where we left off. That&apos;s a guarantee no closed platform can make.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Popular WordPress Resources on Our Site</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "How Much Does a WordPress Website Cost?", href: "/how-much-does-a-wordpress-website-cost" },
                  { label: "10 Reasons to Choose WordPress as Your CMS", href: "/blog/10-reasons-to-choose-wordpress-as-your-cms" },
                  { label: "How Do I Create a WordPress Website?", href: "/blog/how-do-i-create-a-wordpress-website" },
                  { label: "WordPress Maintenance Plans", href: "/maintenance" },
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
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Canadian Businesses Choose CWD for WordPress</h3>
                <div className="space-y-4">
                  {[
                    "Custom themes on the native block editor — no page-builder bloat tax",
                    "Lean plugin stacks: fewer updates, fewer conflicts, smaller attack surface",
                    "Core Web Vitals treated as a launch requirement, not an afterthought",
                    "You own the site outright — open-source WordPress, no license lock-in",
                    "Migrations with full 301 redirect maps, so rankings transfer with you",
                    "In-house Canadian team — the person who built your site answers the phone",
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
                    Get Your Free WordPress Quote
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Build WordPress Websites</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">A 4-step process where SEO and performance are built in from the first wireframe — not patched in after launch.</p>
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
            <h2 className="text-3xl font-black text-gray-900">WordPress Website Design — Common Questions</h2>
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
          <p className="text-center text-sm text-gray-500 mb-5">Pair your WordPress site with our other services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/maintenance" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>WordPress Maintenance ↗</Link>
            {[
              { name: "SEO Services", href: "/services/seo" },
              { name: "Shopify Design", href: "/services/shopify-website-design" },
              { name: "Wix Design & Migration", href: "/services/wix-website-design" },
              { name: "Web Design & Development", href: "/services/web-design-development" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source="service-wordpress-website-design" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
