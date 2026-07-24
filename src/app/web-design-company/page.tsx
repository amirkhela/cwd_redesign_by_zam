import type { Metadata } from "next";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Design Company Canada | Custom Sites | Canada Web Designs" },
  description:
    "Canada's trusted web design company — a 25+ person in-house team, 500+ sites built, 200+ five-star reviews. Custom sites with SEO. Free quote.",
  alternates: { canonical: "/web-design-company" },
  openGraph: {
    title: "Web Design Company Canada | Custom Sites | Canada Web Designs",
    description:
      "Canada's trusted web design company — a 25+ person in-house team, 500+ websites built, 200+ five-star reviews. Custom sites with SEO included.",
    url: "https://canadianwebdesigns.ca/web-design-company",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a good web design company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good web design company has a real, verifiable track record — a portfolio of live client sites, hundreds of genuine reviews, and a team you can actually reach. Look for an in-house staff rather than subcontractors, a documented process from discovery to launch, SEO built into every build, and no long lock-in contracts. Canadian Web Designs has operated since 2016 with a 25+ person in-house team, 500+ websites delivered, and 200+ verified five-star reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Web design company vs freelancer — which is better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A freelancer can be a fine choice for a very small one-off project, but a web design company gives you continuity, backup, and range. If a single freelancer gets sick, takes another contract, or disappears, your project stalls. A firm like Canadian Web Designs has designers, developers, SEO specialists, and a dedicated account manager on staff — so your project keeps moving, and there is always someone to support your site after launch.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a web design company charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends entirely on scope — the number of pages, whether you need e-commerce or custom functionality, content and copywriting needs, and the level of SEO work. Rather than quote a one-size-fits-all figure, we offer a free consultation and then a tailored quote based on exactly what your business needs. There are no hidden fees and no obligation to proceed.",
      },
    },
    {
      "@type": "Question",
      name: "Is Canadian Web Designs a full-service web design company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle strategy, design, copywriting, development, on-page SEO, hosting, and ongoing maintenance under one roof. Because every discipline sits on the same in-house team, there are no hand-offs between separate vendors and no finger-pointing when something needs fixing. You get one accountable partner for your entire web presence.",
      },
    },
    {
      "@type": "Question",
      name: "Do you outsource your web design work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All of our design and development work is done in-house by our Canadian team — nothing is sent overseas to low-cost subcontractors. This is how we keep quality consistent, protect your data, and give you a single point of contact who actually knows your project. When you hire Canadian Web Designs, the people you speak with are the people building your site.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website typically takes 3–4 weeks from kickoff to launch. Larger custom builds with e-commerce, multiple locations, or advanced functionality usually run 5–8 weeks. We agree on a clear timeline before we start and keep you updated at every milestone — no going quiet for weeks at a time.",
      },
    },
  ],
};

const lookFor = [
  {
    title: "A real, verifiable track record",
    desc: "Ask how long the company has operated and how many sites it has actually shipped. We have built 500+ websites since 2016 and can show you live client work — not stock mockups.",
  },
  {
    title: "Genuine, independent reviews",
    desc: "Testimonials on a company's own site are easy to fake. Look for reviews you can verify. We hold 200+ five-star reviews from real Canadian businesses.",
  },
  {
    title: "An in-house team, not subcontractors",
    desc: "Many agencies are a single salesperson who ships your project overseas. Our 25+ person team of designers, developers, and SEO specialists is entirely in-house.",
  },
  {
    title: "SEO built in, not bolted on",
    desc: "A beautiful site that never ranks is a wasted investment. Every build includes on-page SEO, clean markup, schema, and speed optimization as standard.",
  },
  {
    title: "A transparent, documented process",
    desc: "You should always know what stage your project is at and who is responsible. We assign a dedicated account manager and share a clear scope and timeline up front.",
  },
  {
    title: "No lock-in contracts",
    desc: "A confident firm earns your ongoing business through results, not restrictive agreements. You are never locked into a long-term contract with us.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Your dedicated account manager learns your business, market, and goals, then maps a clear scope, timeline, and quote — no vague estimates.",
  },
  {
    step: "02",
    title: "Design & Copy",
    desc: "Our in-house designers craft your site in your brand identity while our writers produce SEO-optimized content that speaks to your customers.",
  },
  {
    step: "03",
    title: "Build & Test",
    desc: "Our developers build your site, then test it across every device and browser. You review a live staging version before anything goes public.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We launch, connect Google Search Console and Analytics, and stay on as your team for updates, maintenance, and growth — long after go-live.",
  },
];

export default function WebDesignCompanyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/web-design-development" },
          { name: "Web Design Company", href: "/web-design-company" },
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
                Canadian-Owned Since 2016 — {config.reviewCount}+ Five-Star Reviews
              </span>
            </div>
            <h1 className="font-black text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              The Web Design Company{" "}
              <span className="gradient-text-animated">Canada Trusts</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              When you hire a web design company, you&apos;re choosing a partner — not gambling on a
              freelancer who might vanish. Canadian Web Designs is a 25+ person in-house team that has
              built 500+ websites for businesses across the country since 2016.
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
              {["25+ In-House Team", "500+ Sites Built", "No Work Outsourced", `${config.reviewCount}+ Reviews`].map((t) => (
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

      {/* ─── WHY THE FIRM YOU HIRE MATTERS ─── */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">The Firm You Hire</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Why the Web Design Company Behind Your Site Matters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Anyone can call themselves a web designer. The real question when you hire a web design
                company is who actually stands behind the work — and whether they&apos;ll still be there in
                a year when you need an update. Canadian Web Designs is a registered, Canadian-owned and
                operated firm that has been building websites since 2016. We are not a marketplace, a
                reseller, or a single freelancer with a logo. We are a stable company with a team you
                can name, call, and hold accountable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                That stability shows up in the details. Our 25+ person in-house team includes dedicated
                designers, front-end and back-end developers, SEO specialists, and copywriters — all on
                staff, all in Canada. Nothing is outsourced to overseas contractors who never speak to
                you. When you choose us as your{" "}
                <Link href="/web-design-agency" className="text-[#00AADF] font-semibold hover:underline">full-service web design agency</Link>,
                you get one team that owns the entire outcome, from the first wireframe to the day your
                site ranks on Google.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Over 500 businesses have trusted us with their web presence, and we hold {config.reviewCount}+
                verified five-star reviews to show for it. Whether you need a{" "}
                <Link href="/services/web-design-development" className="text-[#00AADF] font-semibold hover:underline">custom website designed and developed</Link>{" "}
                from scratch, are comparing us against{" "}
                <Link href="/web-designers-near-me" className="text-[#00AADF] font-semibold hover:underline">local web designers near you</Link>,
                or want a company that understands the{" "}
                <Link href="/locations/toronto" className="text-[#00AADF] font-semibold hover:underline">Toronto</Link>{" "}
                market specifically, you get the same in-house quality and the same transparent process.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "25+", label: "In-house team members" },
                  { value: "500+", label: "Websites delivered" },
                  { value: `${config.reviewCount}+`, label: "Five-star reviews" },
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
                <h3 className="text-gray-900 font-black text-lg mb-4">Why Choose Our Company</h3>
                <div className="space-y-3">
                  {[
                    "25+ person in-house team — no subcontractors",
                    "Canadian-owned and operated since 2016",
                    "500+ websites built and launched",
                    "200+ verified five-star reviews",
                    "No work outsourced overseas",
                    "Dedicated account manager on every project",
                    "Transparent process — you always know the status",
                    "No lock-in contracts — earn your business every month",
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
                    Get a Free Quote
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

      {/* ─── WHAT TO LOOK FOR ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Your Checklist</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              What to Look For in a Web Design Company
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Choosing the right firm is a business decision, not just a design one. Use these six
              criteria to separate a serious company from a risky one — and see how we measure up.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lookFor.map((item, i) => (
              <div key={item.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.08}s` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPANY VS FREELANCER ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Company vs Freelancer</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Web Design Company vs Freelancer
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A freelancer can work for a tiny one-off project. But for a website your business
              depends on, the difference between a firm and an individual is the difference between
              a partner and a single point of failure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 border border-gray-100 bg-gray-50" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
              <h3 className="text-gray-900 font-black text-lg mb-5">A Solo Freelancer</h3>
              <ul className="space-y-3">
                {[
                  "One person handling design, code, and SEO — often stretched thin",
                  "Project stalls if they get sick or take other work",
                  "Limited support once the site is delivered",
                  "Skill gaps in whatever they don't specialize in",
                  "Hard to verify their track record or reviews",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 border border-[#00AADF]"
              style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" }}>
              <h3 className="text-white font-black text-lg mb-5">A Web Design Company (CWD)</h3>
              <ul className="space-y-3">
                {[
                  "Specialists for design, development, SEO, and copy — all in-house",
                  "Team continuity — your project never depends on one person",
                  "Ongoing maintenance, hosting, and support after launch",
                  "Depth across every discipline your site needs",
                  "200+ verifiable reviews and 500+ live client sites",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-white/90 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            See the work for yourself —{" "}
            <Link href="/portfolio" className="text-[#00AADF] font-semibold hover:underline">browse our portfolio</Link>{" "}
            of live client websites.
          </p>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── PROCESS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How Our Web Design Company Works</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">A transparent, four-stage process with a dedicated account manager guiding you from first call to launch.</p>
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

      {/* ─── PRICING ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Engagements</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Ways to Work With Our Company</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Every engagement starts with a free consultation and a tailored quote scoped to exactly what your business needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "AI WebSuite",
                price: "$299",
                period: "",
                desc: "For businesses that need a professional, fully managed website fast — built and maintained by our team.",
                features: ["AI-built professional website", "Hosting & SSL included", "Monthly content updates", "SEO-optimized from day one", "Mobile-first design", "Managed by our in-house team"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Custom Website",
                price: "$599",
                period: "",
                desc: "A fully custom site designed, coded, and SEO-optimized by our in-house designers and developers.",
                features: ["Custom design (no templates)", "On-page SEO included", "Dedicated account manager", "Copywriting & content", "Mobile & speed optimized", "Multiple rounds of revisions"],
                cta: "Get a Quote",
                highlight: true,
              },
              {
                name: "Enterprise & eCommerce",
                price: "Custom",
                period: "",
                desc: "WooCommerce stores, multi-location sites, custom functionality, and complex integrations at scale.",
                features: ["WooCommerce / eCommerce", "Multi-location & multi-page", "Custom features & integrations", "CRM & booking connections", "Advanced analytics setup", "Priority team support"],
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
            <h2 className="text-3xl font-black text-gray-900">Choosing a Web Design Company — Common Questions</h2>
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
            Hire a Web Design Company{" "}
            <span className="gradient-text-animated">You Can Count On</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Book a free consultation with our team. We&apos;ll walk you through how we&apos;d approach your
            project, what it would involve, and how long it would take. No pressure, no obligation.
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

      <QuoteFormSection source="web-design-company" />
    </>
  );
}
