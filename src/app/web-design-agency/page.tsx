import type { Metadata } from "next";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Design Agency Canada | Full-Service | Canadian Web Designs" },
  description:
    "Full-service web design agency in Canada — web, SEO, Google Ads, branding & social under one roof. Your long-term growth partner. Free quote.",
  alternates: { canonical: "/web-design-agency" },
  openGraph: {
    title: "Web Design Agency Canada | Full-Service | Canadian Web Designs",
    description:
      "A full-service web design agency in Toronto & across Canada. Web design, SEO, Google Ads, branding and social media handled by one in-house team.",
    url: "https://canadianwebdesigns.ca/web-design-agency",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a web design agency do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A web design agency plans, designs, builds and maintains websites — but a full-service agency goes further. It handles strategy, UX and UI design, development, copywriting, SEO, and ongoing optimization so your website is treated as a living marketing asset, not a one-time deliverable. At Canadian Web Designs, our agency team also connects your site to the channels that drive traffic to it: search, paid ads, social media and email — so every piece works toward the same growth goal.",
      },
    },
    {
      "@type": "Question",
      name: "What services does a full-service web design agency offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full-service agency offers everything needed to launch and grow an online presence under one roof: web design and development, search engine optimization (SEO), Google Ads and PPC management, social media marketing, graphic design and branding, content and copywriting, plus ongoing maintenance and reporting. Because these disciplines share the same team, your brand, messaging, and data stay consistent across every channel instead of being split across disconnected vendors.",
      },
    },
    {
      "@type": "Question",
      name: "Web design agency vs freelancer — what's the difference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A freelancer is usually one person delivering one skill — great for a small, well-defined task, but limited when you need design, development, SEO and marketing to work together. An agency gives you a dedicated multi-disciplinary team with backup coverage, defined processes, and accountability. If a freelancer gets busy or moves on, your project stalls; an agency keeps your website supported for years and can scale services up as your business grows.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a web design agency cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agency pricing depends on scope — a focused website project costs far less than an ongoing growth partnership that bundles design, SEO, ads and content. Rather than a one-size-fits-all rate, Canadian Web Designs starts with a free consultation to understand your goals, then provides a tailored quote with clear deliverables. You only pay for the services you actually need, and there are no lock-in contracts.",
      },
    },
    {
      "@type": "Question",
      name: "Why hire a full-service agency instead of separate vendors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When your web designer, SEO consultant, ad manager and social team are separate companies, they rarely talk to each other — and you end up as the project manager stitching it all together. A full-service agency removes that friction: one team, one point of contact, one strategy, and shared data. Your ad landing pages are SEO-ready, your branding is consistent everywhere, and results are reported in one place instead of five conflicting dashboards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Launch is the start of the relationship, not the end. Our agency offers ongoing maintenance, security updates, performance monitoring, content updates and continuous SEO and conversion optimization. As a long-term growth partner we track your results month over month and adjust strategy based on real data — so your website keeps improving long after it goes live.",
      },
    },
  ],
};

const services = [
  {
    title: "Web Design & Development",
    href: "/services/web-design-development",
    desc: "Strategy-led, conversion-focused websites — custom design, fast performance, and clean development built to grow with your business.",
  },
  {
    title: "Search Engine Optimization",
    href: "/services/seo",
    desc: "On-page and technical SEO baked into every build, plus ongoing content and link strategy to earn rankings that compound over time.",
  },
  {
    title: "Google Ads & PPC",
    href: "/services/google-ads-management",
    desc: "Managed paid search and shopping campaigns with landing pages built by the same team — so your ad spend converts, not just clicks.",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-optimization",
    desc: "Consistent, on-brand social presence that feeds your funnel and keeps your audience engaged between website visits.",
  },
  {
    title: "Graphic Design & Branding",
    href: "/services/graphic-design",
    desc: "Logos, brand systems, and visual assets that carry a single identity across your site, ads, and social channels.",
  },
  {
    title: "Ongoing Maintenance",
    href: "/contact",
    desc: "Security, updates, backups, and continuous optimization — your website stays fast, safe, and improving long after launch.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We map your goals, audience, and competitors, then build a channel strategy that connects your website to search, ads, and social.",
  },
  {
    step: "02",
    title: "Design & Build",
    desc: "Our in-house designers and developers create your site with SEO, branding, and conversion structure baked in from the first wireframe.",
  },
  {
    step: "03",
    title: "Launch & Amplify",
    desc: "We launch, then activate the growth channels — SEO, Google Ads, and social — so traffic starts flowing to a site that's ready to convert.",
  },
  {
    step: "04",
    title: "Grow & Report",
    desc: "As your partner, we track results monthly, optimize continuously, and adjust strategy based on real data — not guesswork.",
  },
];

export default function WebDesignAgencyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/web-design-development" },
          { name: "Web Design Agency", href: "/web-design-agency" },
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
                Full-Service Digital Agency — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="font-black text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              A Web Design Agency That{" "}
              <span className="gradient-text-animated">Grows With You</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Web design, SEO, Google Ads, branding and social media — all handled by one
              in-house team in Canada. Not a one-off project, but a long-term growth partner
              that makes every channel work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Get a Free Quote
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
              {["Everything In-House", "Strategy-Led", "Dedicated Team", `${config.reviewCount}+ Reviews`].map((t) => (
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

      {/* ─── WHY AN AGENCY ─── */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why An Agency</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                A Growth Partner, Not Just a Website Vendor
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Most businesses don&apos;t just need a website — they need traffic to it, leads from it,
                and a team that keeps improving it. That&apos;s the difference between hiring a web
                designer and partnering with a full-service web design agency. A designer hands you a
                finished site and moves on. An agency treats your website as the hub of a wider growth
                system and stays with you as that system matures.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Canadian Web Designs is a full-service digital agency serving Toronto and businesses
                right across Canada. We bring web design and development, SEO, Google Ads, social
                media, and branding together under one roof. Because the same in-house team owns every
                channel, your brand voice stays consistent, your data flows into one place, and your
                marketing decisions are made with the full picture in view — not in silos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Strategy comes first. Before a single page is designed, we map your goals, your
                competitors, and the search and social behaviour of your customers. Every decision
                after that — layout, copy, keywords, ad targeting — ladders back to that strategy.
                With {config.reviewCount}+ verified five-star reviews, we&apos;re the agency Canadian
                businesses trust for measurable, long-term growth. Prefer to read about the studio
                behind the work? See our{" "}
                <Link href="/web-design-company" className="text-[#00AADF] font-semibold hover:underline">web design company</Link> page.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: `${config.reviewCount}+`, label: "Five-star reviews" },
                  { value: "6+", label: "Services in-house" },
                  { value: "1", label: "Dedicated team" },
                  { value: "2016", label: "Serving Canada since" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-black text-gray-900 mb-1" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</p>
                    <p className="text-gray-500 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-2 space-y-4">
              <div className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-lg mb-4">Why Businesses Partner With CWD</h3>
                <div className="space-y-3">
                  {[
                    "Design, SEO, ads & social from one team",
                    "Strategy-led — every channel shares a plan",
                    "One point of contact, not five vendors",
                    "Consistent branding across every channel",
                    "Data & reporting in a single dashboard",
                    "Ongoing partnership, not a one-off project",
                    "No lock-in contracts — scale up or down",
                    "Canadian-owned, in-house, accountable",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Book a Free Strategy Call
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT A FULL-SERVICE AGENCY DOES ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Services Under One Roof</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              What a Full-Service Web Design Agency Does
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A website is only one piece of your growth. As a full-service agency we own every part
              of the journey — from the first wireframe to the ad that brings a customer back. Here&apos;s
              how the pieces fit together when one team handles them all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00AADF]/40 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 className="text-gray-900 font-black text-lg mb-3 group-hover:text-[#00AADF] transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[#00AADF] text-sm font-semibold">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
            The magic isn&apos;t any single service — it&apos;s the integration. Your SEO content informs
            your ad copy. Your branding shapes your social feed. Your website analytics guide the next
            round of optimization. See the results in our{" "}
            <Link href="/portfolio" className="text-[#00AADF] font-semibold hover:underline">portfolio</Link>.
          </p>
        </div>
      </section>

      {/* ─── AGENCY VS FREELANCER VS DIY ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">How To Choose</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Web Design Agency vs Freelancer vs DIY Builders
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              There&apos;s no single right answer for every business — but understanding the trade-offs
              helps you invest where it counts. Here&apos;s an honest comparison.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "DIY Website Builders",
                tone: "The cheapest start",
                points: [
                  "Lowest upfront cost, fastest to publish",
                  "You do all the design, copy and SEO yourself",
                  "Templates limit branding and performance",
                  "No strategy, no marketing, no support",
                  "Best for a hobby or a temporary placeholder",
                ],
              },
              {
                name: "Freelancer",
                tone: "One skill, one person",
                points: [
                  "Good for a single, well-defined task",
                  "Usually one discipline — design or dev, not both",
                  "Availability and continuity are a risk",
                  "Marketing often falls to you afterward",
                  "Best for small projects with a tight scope",
                ],
              },
              {
                name: "Full-Service Agency",
                tone: "A team that grows with you",
                highlight: true,
                points: [
                  "Design, development, SEO, ads & social together",
                  "Dedicated multi-disciplinary team with backup",
                  "Defined process, accountability and reporting",
                  "Ongoing partnership beyond launch",
                  "Best when growth — not just a site — is the goal",
                ],
              },
            ].map((col) => (
              <div key={col.name}
                className={`rounded-2xl p-8 reveal border transition-all duration-300 ${col.highlight ? "border-[#00AADF]" : "border-gray-100 bg-white"}`}
                style={col.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" } : { boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className={`text-sm font-bold tracking-widest uppercase mb-1 ${col.highlight ? "text-white/70" : "text-[#00AADF]"}`}>{col.name}</p>
                <p className={`text-sm mb-5 ${col.highlight ? "text-white/60" : "text-gray-400"}`}>{col.tone}</p>
                <ul className="space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 ${col.highlight ? "text-white" : "text-[#00AADF]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={`text-sm leading-relaxed ${col.highlight ? "text-white/90" : "text-gray-600"}`}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── PROCESS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Partner With You</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Strategy first, launch fast, then grow together — with clear reporting at every step.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-black mb-4"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {p.step}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING / PACKAGES ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Ways To Work Together</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Agency Packages Built Around Your Goals</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">From a focused website project to a full growth partnership — you only pay for what you need. Every engagement starts with a free consultation and a tailored quote.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Website Project",
                price: "$299",
                period: "",
                desc: "A strategy-led custom website, designed and built by our in-house team — the perfect foundation for growth.",
                features: ["Custom design & development", "On-page SEO baked in", "Copywriting & content", "Mobile & speed optimized", "Analytics & Search Console setup", "Launch support"],
                cta: "Start a Project",
                highlight: false,
              },
              {
                name: "Growth Partnership",
                price: "$599",
                period: "",
                desc: "Your website plus the channels that grow it — SEO, Google Ads and social, managed as one connected strategy.",
                features: ["Everything in Website Project", "Ongoing SEO & content", "Google Ads / PPC management", "Social media marketing", "Branding & graphic design", "Monthly reporting & strategy calls"],
                cta: "Become a Partner",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "Multi-location, eCommerce and custom-functionality builds with a dedicated team and priority support.",
                features: ["WooCommerce / eCommerce builds", "Multi-location & scaled SEO", "Custom features & integrations", "CRM & marketing automation", "Advanced analytics & attribution", "Dedicated account team"],
                cta: "Talk To Us",
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
            <h2 className="text-3xl font-black text-gray-900">Web Design Agency — Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
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
            Ready for an Agency That{" "}
            <span className="gradient-text-animated">Grows With You?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Book a free strategy call. We&apos;ll map how your website, SEO, ads and social can work
            together, then send a tailored plan and quote. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get a Free Quote
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

      <QuoteFormSection source="web-design-agency" />
    </>
  );
}
