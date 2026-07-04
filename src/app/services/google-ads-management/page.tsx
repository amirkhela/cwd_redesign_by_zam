import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Google Ads Management Canada | From $499/mo | CWD" },
  description: "Certified Google Ads management from $499/mo, no contracts — our experts cut wasted spend and lower your cost per lead. 180+ five-star reviews. Free audit: (647) 689-6069.",
  alternates: { canonical: "/services/google-ads-management" },
  openGraph: {
    title: "Google Ads Management Canada — From $499/mo | Canadian Web Designs",
    description: "Certified Google Ads management from $499/mo, no contracts — cut wasted spend and lower cost per lead. 180+ five-star reviews. Free audit: (647) 689-6069.",
    url: "https://canadianwebdesigns.ca/services/google-ads-management",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Google Ads Management Canada 2026 — Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How much does Google Ads management cost in Toronto?",
    a: "Our Google Ads management starts at $499/month flat fee — no percentage-of-spend markup. Your ad budget goes entirely to Google, and our fee covers full campaign management: keyword research, ad copywriting, negative keyword expansion, bid optimization, conversion tracking, and monthly reporting. Ad spend is separate and we recommend a minimum of $1,000/month for Toronto campaigns to generate meaningful data.",
  },
  {
    q: "How quickly will I see results from Google Ads?",
    a: "Google Ads can deliver leads within 24–48 hours of campaign launch — it's the fastest lead generation channel available. However, the first 30 days are a learning phase where the algorithm gathers conversion data and we expand negative keywords. Most campaigns reach peak efficiency at months 3–4 once we have enough data to optimize bidding strategies properly.",
  },
  {
    q: "What's the minimum Google Ads budget for Toronto?",
    a: "We recommend a minimum of $1,000–$1,500/month in ad spend for Toronto service businesses. Below this threshold, you'll get too few clicks per day to gather meaningful data or generate consistent lead volume. For competitive industries like legal, mortgage, and home services in Toronto, $2,000–$3,000/month is a more realistic starting point.",
  },
  {
    q: "Do you manage Google Shopping and Performance Max campaigns?",
    a: "Yes — in addition to Search campaigns, we manage Google Shopping (for product-based businesses), Performance Max (which combines all Google channels: Search, Display, YouTube, Gmail, and Maps), and Remarketing campaigns. We recommend the right mix based on your business type, budget, and goals.",
  },
  {
    q: "Will I own my Google Ads account?",
    a: "Yes — always. We set up campaigns inside your own Google Ads account, which you own and control from day one. If you ever leave, you keep your account, your history, your conversion data, and all your audience lists. We never run campaigns from a shared agency account.",
  },
  {
    q: "How is your Google Ads management different from doing it myself?",
    a: "DIY Google Ads campaigns typically miss three critical optimizations: (1) Negative keyword lists that block irrelevant traffic (most DIY campaigns waste 30–50% of budget on non-converting clicks), (2) Proper campaign structure with tightly themed ad groups that improve Quality Scores and reduce CPC, and (3) Conversion tracking that connects ad spend to actual leads. Professional management typically reduces cost per lead by 30–50% within the first 60 days versus unmanaged campaigns.",
  },
  {
    q: "Do you also offer SEO alongside Google Ads management?",
    a: "Yes — and combining both is the strongest long-term strategy. Google Ads generate immediate leads while your SEO builds organic authority that delivers free traffic over time. We offer bundled packages where the same team manages both your paid and organic search — ensuring your keyword strategy is consistent across channels and your landing pages are optimized for both ad traffic and organic rankings.",
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
  "@id": "https://canadianwebdesigns.ca/services/google-ads-management",
  name: "Google Ads Management Toronto",
  description: "Professional Google Ads management for Toronto and Canadian businesses. Campaign setup, keyword research, negative keyword management, conversion tracking, and monthly reporting.",
  provider: {
    "@type": "Organization",
    name: "Canadian Web Designs",
    url: "https://canadianwebdesigns.ca",
    telephone: "(647) 689-6069",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "180" },
  },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "North York" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Vancouver" },
  ],
  offers: {
    "@type": "Offer",
    price: "499",
    priceCurrency: "CAD",
    priceSpecification: { "@type": "UnitPriceSpecification", price: "499", priceCurrency: "CAD", unitText: "month" },
  },
};

const campaignTypes = [
  {
    title: "Google Search Ads",
    desc: "Appear at the top of Google when your ideal customers search for your services. We build tightly structured campaigns targeting your highest-converting keywords in Toronto, your city, or across Canada.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Google Shopping Campaigns",
    desc: "Product-based businesses: get your products in front of buyers with Shopping ads that show product images, prices, and reviews directly in Google search results.",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.696 2.075-3.27 2.454-4.568.048-.168.073-.34.073-.518a2.25 2.25 0 00-2.25-2.25h-2.25",
  },
  {
    title: "Remarketing Campaigns",
    desc: "Re-engage visitors who browsed your site but didn't convert. Remarketing keeps your brand visible to warm audiences across Google's Display Network — turning browsers into buyers.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
  {
    title: "Performance Max",
    desc: "Google's all-in-one campaign type that runs across Search, Display, YouTube, Gmail, and Maps simultaneously. Best for businesses with strong creative assets and a clear conversion goal.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Local Service Ads",
    desc: "For trades, legal, healthcare, and home services — Local Service Ads appear above everything else in Google and only charge per verified lead call. We set up and verify your business for LSA eligibility.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "Call-Only Campaigns",
    desc: "For service businesses that close deals over the phone, call-only ads skip the landing page entirely — users tap to call directly from the ad. Perfect for emergency services, trades, and healthcare.",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
];

const process = [
  { step: "01", title: "Free Google Ads Audit", desc: "We audit your current Google Ads account (or competitor landscape if you're starting fresh): wasted spend, keyword gaps, Quality Score issues, missing conversions, and quick wins. We show you exactly what a well-managed campaign should deliver for your budget." },
  { step: "02", title: "Campaign Architecture & Setup", desc: "We build tightly themed ad groups around your highest-converting keyword clusters, write 3–5 ad variations per group for A/B testing, set up conversion tracking for calls and form fills, and build an initial negative keyword list (100–200 terms) to block irrelevant traffic from day one." },
  { step: "03", title: "Active Optimization (Ongoing)", desc: "Weekly Search Terms review to expand negatives and find new opportunities. Monthly bid strategy adjustments based on conversion data. A/B test winners rolled out. Landing page feedback provided. Quality Scores monitored. Most campaigns reduce cost per lead 30–50% within the first 60 days." },
  { step: "04", title: "Monthly Reporting & Strategy", desc: "You receive a clear monthly report: cost per lead, total leads generated, top-performing keywords, waste eliminated, and recommendations for the next month. No vanity metrics — every number ties directly to leads and business outcomes." },
];

const industries = [
  "Law Firms & Legal Services", "Home Renovation & Trades", "Healthcare & Clinics",
  "Real Estate & Mortgage", "Restaurants & Catering", "Dental & Orthodontics",
  "Financial Services", "Retail & E-commerce", "Education & Tutoring",
  "Auto Services", "Cleaning & Janitorial", "Moving & Storage",
];

export default function GoogleAdsManagementPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services/web-design-development" }, { name: "Google Ads Management", href: "/services/google-ads-management" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/web-design-company.png" alt="Google Ads management for Toronto and Canadian businesses" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Google Ads Management — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Google Ads Management{" "}<span className="gradient-text-animated">Toronto & Canada</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Stop wasting ad budget. We build Google Ads campaigns that generate qualified leads at the lowest possible cost per conversion — with full transparency and no long-term contracts.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                Free Google Ads Audit
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <a href="tel:6476896069" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">(647) 689-6069</a>
            </div>
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {["You Own Your Account", "Flat Monthly Fee — No % Markup", "Leads in 24–48 Hours"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN TYPES */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Campaign Types</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Every Google Ads Format, Managed by Experts</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">We manage all Google Ads campaign types and recommend the right mix based on your business, budget, and goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {campaignTypes.map((s, i) => (
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
              {[{ value: "30–50%", label: "Avg. Cost-Per-Lead Reduction" }, { value: "24–48h", label: "Time to First Leads" }, { value: "180+", label: "Five-Star Reviews" }, { value: "100%", label: "Account Ownership — Always" }].map((s) => (
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
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Google Ads Management Toronto</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>Why Most Toronto Businesses Waste Their Google Ads Budget</h2>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Toronto is one of Canada&apos;s most competitive Google Ads markets. Terms like &ldquo;toronto plumber,&rdquo; &ldquo;toronto lawyer,&rdquo; and &ldquo;toronto web design&rdquo; can cost $8–$30+ per click — because businesses that win these auctions consistently generate high-value leads. But winning the auction is only half the equation. The other half is making sure the clicks you pay for actually convert into calls, form fills, and booked appointments.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Most Toronto businesses running Google Ads without professional management make three critical mistakes: (1) Using broad match keywords that match irrelevant searches and burn 30–50% of budget on non-converting traffic, (2) Skipping negative keyword management — the single highest-ROI activity in Google Ads, and (3) Running campaigns without proper conversion tracking, so they have no idea which keywords are generating leads and which are generating waste.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Professional Google Ads management fixes all three. Within the first 60 days, most of our Toronto clients see cost per lead drop 30–50% versus what they were paying before — not because we&apos;re spending less, but because we&apos;re spending smarter. We block irrelevant searches before they happen, structure campaigns to maximize Quality Scores (which directly reduces your CPC), and optimize bids based on real conversion data rather than gut feel.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Unlike agencies that charge a percentage of your ad spend (which incentivizes them to grow your budget rather than improve efficiency), we charge a flat monthly management fee. Our incentive is to reduce your cost per lead — because that&apos;s what earns referrals and retains clients long-term.
              </p>

              <h3 className="text-xl font-black text-gray-900 mb-4">Industries We Manage Google Ads For</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 mb-5" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-xl mb-5">Why Toronto Businesses Choose CWD for Google Ads</h3>
                <div className="space-y-4">
                  {[
                    "You own your Google Ads account — we never hold your data hostage",
                    "Flat monthly fee — our incentive is efficiency, not growing your spend",
                    "Weekly Search Terms review — we block waste proactively, not monthly",
                    "Proper conversion tracking from day one — every lead tied to a keyword",
                    "No long-term contracts — we earn your business month by month",
                    "In-house team — no offshore outsourcing, no account manager turnover",
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
                    Get Your Free Google Ads Audit
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
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Manage Google Ads in Toronto</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">A proven 4-step process that reduces wasted spend and drives more leads from the same budget.</p>
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

      {/* PRICING */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Transparent Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Google Ads Management Pricing</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Flat monthly management fees — your ad spend goes entirely to Google, not to us. No percentage-of-spend markups.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/month management",
                adSpend: "Recommended ad spend: $1,000–$2,000/mo",
                desc: "For small and medium Toronto businesses running their first Google Ads campaigns.",
                features: ["1 campaign, up to 5 ad groups", "Search ads setup + copywriting", "Negative keyword management", "Conversion tracking setup", "Monthly performance report", "You own the account — always"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$799",
                period: "/month management",
                adSpend: "Recommended ad spend: $2,000–$5,000/mo",
                desc: "For established Toronto businesses scaling campaigns across multiple services or locations.",
                features: ["Up to 3 campaigns, 15 ad groups", "Search + Shopping or Remarketing", "Weekly Search Terms review", "A/B ad copy testing", "Competitor landscape analysis", "Bi-weekly strategy calls"],
                cta: "Get Growth Plan",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "quote",
                adSpend: "Ad spend $5,000+/mo",
                desc: "For multi-location businesses, e-commerce stores, or agencies needing white-label management.",
                features: ["Unlimited campaigns and ad groups", "All campaign types (Search, Shopping, PMax, LSA)", "Dedicated account manager", "Custom reporting dashboard", "Landing page optimization included", "Priority support + SLA"],
                cta: "Get a Custom Quote",
                highlight: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 reveal border transition-all duration-300 ${plan.highlight ? "border-[#00AADF]" : "border-gray-100 bg-white"}`} style={plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" } : { boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <p className={`text-sm font-bold tracking-widest uppercase mb-2 ${plan.highlight ? "text-white/70" : "text-[#00AADF]"}`}>{plan.name}</p>
                <p className={`text-4xl font-black mb-0.5 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</p>
                <p className={`text-sm mb-1 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.period}</p>
                <p className={`text-xs font-semibold mb-4 ${plan.highlight ? "text-white/50" : "text-gray-400"}`}>{plan.adSpend}</p>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>{plan.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-white" : "text-[#00AADF]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${plan.highlight ? "bg-white text-[#003B6F] hover:bg-white/90" : "text-white hover:opacity-90"}`} style={!plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)" } : {}}>
                  {plan.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">All plans are month-to-month. Ad spend is billed directly by Google — separate from our management fee.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Google Ads Management — Common Questions</h2>
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
          <p className="text-center text-sm text-gray-500 mb-5">Pair Google Ads with our other digital marketing services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/seo" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>SEO Services ↗</Link>
            {[
              { name: "Web Design", slug: "web-design-development" },
              { name: "Social Media", slug: "social-media-optimization" },
              { name: "AI Consultation", slug: "ai-consultation" },
            ].map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{s.name}</Link>
            ))}
            <Link href="/locations/toronto" className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">Toronto</Link>
            <Link href="/locations/north-york" className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">North York</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/seo-services-london-ontario.png" alt="Start generating leads with Google Ads management from Canadian Web Designs" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Stop Wasting{" "}<span className="gradient-text-animated">Google Ads Budget?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">Free Google Ads audit — we&apos;ll review your current campaigns (or your competitors&apos;) and show you exactly how many leads you should be generating from your budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Google Ads Audit
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <a href="tel:6476896069" className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              (647) 689-6069
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
