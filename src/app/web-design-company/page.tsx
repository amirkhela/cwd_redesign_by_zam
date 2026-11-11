import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import { getConfig, reviewCountPlus } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import PricingCards from "@/components/PricingCards";
import { WEBSITE_PACKAGES } from "@/lib/packages";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Design Company in Canada | Canadian Web Designs" },
  description:
    "A Canadian web design company building custom, SEO-ready websites for businesses in 24 cities, from Vancouver to Halifax. Prices in CAD. Free quote.",
  alternates: { canonical: "/web-design-company" },
  openGraph: {
    title: "Web Design Company in Canada | Canadian Web Designs",
    description:
      "A Canadian web design company building custom, SEO-ready websites for businesses in 24 cities, from Vancouver to Halifax. Prices in CAD. Free quote.",
    url: "https://canadianwebdesigns.ca/web-design-company",
  },
};

// Every city here has a live /locations/<slug> page.
const provinces: { name: string; cities: { label: string; slug: string }[] }[] = [
  {
    name: "Ontario",
    cities: [
      { label: "Toronto", slug: "toronto" },
      { label: "North York", slug: "north-york" },
      { label: "Mississauga", slug: "mississauga" },
      { label: "Brampton", slug: "brampton" },
      { label: "Vaughan", slug: "vaughan" },
      { label: "Richmond Hill", slug: "richmond-hill" },
      { label: "Oshawa", slug: "oshawa" },
      { label: "Hamilton", slug: "hamilton" },
      { label: "Kitchener", slug: "kitchener" },
      { label: "London", slug: "london" },
      { label: "Windsor", slug: "windsor" },
      { label: "Barrie", slug: "barrie" },
      { label: "Ottawa", slug: "ottawa" },
    ],
  },
  {
    name: "British Columbia",
    cities: [
      { label: "Vancouver", slug: "vancouver" },
      { label: "Burnaby", slug: "burnaby" },
      { label: "Surrey", slug: "surrey" },
      { label: "Victoria", slug: "victoria" },
      { label: "Ladner", slug: "ladner" },
    ],
  },
  {
    name: "Alberta",
    cities: [
      { label: "Calgary", slug: "calgary" },
      { label: "Edmonton", slug: "edmonton" },
    ],
  },
  { name: "Quebec", cities: [{ label: "Montreal", slug: "montreal" }] },
  { name: "Manitoba", cities: [{ label: "Winnipeg", slug: "winnipeg" }] },
  { name: "Saskatchewan", cities: [{ label: "Saskatoon", slug: "saskatoon" }] },
  { name: "Nova Scotia", cities: [{ label: "Halifax", slug: "halifax" }] },
];

const canadaNeeds = [
  {
    title: "Prices in Canadian dollars",
    desc: "Every quote is in CAD with HST shown as its own line, so there is no exchange-rate surprise and your accountant gets a clean invoice.",
  },
  {
    title: "CASL-ready forms",
    desc: "Canada's Anti-Spam Legislation needs consent before you email someone. We build newsletter and quote forms with an unticked consent box and a working unsubscribe path.",
  },
  {
    title: "A privacy policy that matches the site",
    desc: "PIPEDA expects you to say what you collect and why. We list the forms, analytics and cookies your site actually uses. If you serve Quebec, we can add a cookie banner for Law 25.",
  },
  {
    title: "Accessibility for Ontario's AODA",
    desc: "Ontario organizations with 50 or more employees must meet WCAG 2.0 AA. We build to that standard: colour contrast, keyboard use, labelled forms and alt text.",
  },
  {
    title: "Found on Google.ca and Maps",
    desc: "Local SEO is built in: your city in titles and headings, LocalBusiness schema, and a site that lines up with your Google Business Profile so you show up in the map pack.",
  },
  {
    title: "One team, every time zone",
    desc: "We work Monday to Friday, 8 to 6 Eastern, and run projects over video calls and shared previews, so a client in Vancouver or Halifax gets the same process as one in Toronto.",
  },
];

const steps = [
  {
    step: "01",
    title: "Free call",
    desc: "A video call about your business, your customers and where they search. You get a written scope and a fixed quote in CAD.",
  },
  {
    step: "02",
    title: "Design & copy",
    desc: "Our in-house designers and writers build the pages around the searches people in your city actually use.",
  },
  {
    step: "03",
    title: "Preview link",
    desc: "You review the site on a private preview link from any device, wherever you are in Canada, and ask for changes before anything goes public.",
  },
  {
    step: "04",
    title: "Launch & support",
    desc: "We launch, connect Google Search Console and Analytics, and stay on for updates, maintenance and SEO after go-live.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with businesses outside Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our team is based in Toronto, but we build websites for businesses across Canada, including Vancouver, Calgary, Edmonton, Winnipeg, Saskatoon, Montreal and Halifax. Calls, previews and approvals all happen online, so where you are does not change the process or the price.",
      },
    },
    {
      "@type": "Question",
      name: "Are your prices in Canadian dollars?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every quote and invoice is in Canadian dollars, with HST listed separately. There are no US-dollar fees or exchange charges.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a web design company in Canada charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the number of pages, whether you sell online, and how much SEO and copywriting you need. Our packages start at $299 for a basic 3-page site, $449 for a WordPress site you can edit yourself and $699 for a 15-page site with booking and payments. Online stores start at $899. All prices are in Canadian dollars, and you can compare every option on our web design packages page.",
      },
    },
    {
      "@type": "Question",
      name: "Can you make my website CASL, PIPEDA and AODA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build forms with proper CASL consent, write the privacy policy around what your site actually collects, can add a cookie banner for Quebec's Law 25, and design to WCAG 2.0 AA for Ontario's AODA. We are web designers, not lawyers, so for legal sign-off we recommend a quick review by your own counsel.",
      },
    },
    {
      "@type": "Question",
      name: "Do you outsource your web design work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Design, development, copy and SEO are done by our own in-house team. The people you speak with on the first call are the people building your site.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website usually takes 3 to 4 weeks from the first call to launch. Larger custom builds with e-commerce, several locations or custom features usually take 5 to 8 weeks. We agree on the timeline before we start.",
      },
    },
  ],
};

export default function WebDesignCompanyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/web-design-development" },
          { name: "Web Design Company in Canada", href: "/web-design-company" },
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
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Canadian-owned · 24 cities · {reviewCountPlus(config.reviewCount)} Google reviews
              </span>
            </div>
            <h1 className="font-black text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              Web Design Company in Canada,{" "}
              <span className="gradient-text-animated">From Vancouver to Halifax</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Canadian Web Designs is a Canadian-owned web design company with an in-house team in
              Toronto. We build custom, SEO-ready websites for businesses across the country, priced in
              Canadian dollars and built for how Canadians search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
            <div className="flex flex-wrap justify-center gap-6">
              {["Prices in CAD", "In-house team", "Serving 24 cities", `${reviewCountPlus(config.reviewCount)} Reviews`].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="web-design-company" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── A CANADIAN COMPANY ─── */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Made in Canada</span>
            <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
              Why Hire a Canadian Web Design Company?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              A website for a Canadian business has a few jobs that an overseas template shop rarely
              thinks about. It has to rank on Google.ca for the cities you serve, quote prices your
              customers expect, follow Canadian rules on email consent and privacy, and, in Ontario,
              meet the accessibility standard set by the AODA. We deal with these on every project,
              so you don&apos;t have to learn them yourself.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Our designers, developers, writers and SEO specialists all work in-house. You get one
              team from the first call to launch, and the same team afterwards for updates and{" "}
              <Link href="/services/seo" className="text-[#00AADF] font-semibold hover:underline">search engine optimization</Link>.
              If you are still deciding between a firm and a single designer, our{" "}
              <Link href="/agency-vs-freelancer" className="text-[#00AADF] font-semibold hover:underline">agency vs freelancer guide</Link>{" "}
              lays out the trade-offs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Need something specific? See our{" "}
              <Link href="/services/web-design-development" className="text-[#00AADF] font-semibold hover:underline">custom web design and development</Link>{" "}
              service, our{" "}
              <Link href="/ecommerce-website-design-toronto" className="text-[#00AADF] font-semibold hover:underline">e-commerce websites</Link>, or the{" "}
              <Link href="/industries" className="text-[#00AADF] font-semibold hover:underline">industries we build for</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT CANADIAN SITES NEED ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Built for Canada</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              What Every Canadian Business Website Needs
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              These are included as standard on every site we build, not sold as add-ons.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canadaNeeds.map((item, i) => (
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
          <p className="text-center text-gray-500 text-sm mt-8">
            More on accessibility:{" "}
            <Link href="/blog/aoda-website-compliance" className="text-[#00AADF] font-semibold hover:underline">AODA website compliance explained</Link>.
          </p>
        </div>
      </section>

      {/* ─── WHERE WE WORK ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Across Canada</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Web Design in 24 Canadian Cities
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Each city has its own page. Pick yours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {provinces.map((p) => (
              <div key={p.name} className="rounded-2xl p-6 border border-gray-100 bg-gray-50 reveal">
                <h3 className="text-gray-900 font-black text-base mb-3">{p.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {p.cities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/locations/${c.slug}`}
                        className="inline-block px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-[#00AADF] hover:text-[#00AADF] transition-colors">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Looking for search rankings in your city? See{" "}
            <Link href="/seo" className="text-[#00AADF] font-semibold hover:underline">local SEO by city</Link>.
          </p>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── PROCESS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Working With Us From Anywhere in Canada</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Four steps, all online, with a project lead you can call directly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((p, i) => (
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
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing in CAD</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Ways to Work With Us</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Every project starts with a free call and a quote in Canadian dollars. Full details on our{" "}
              <Link href="/web-design-packages" className="text-[#00AADF] font-semibold hover:underline">web design packages</Link> page.
            </p>
          </div>
          <PricingCards plans={WEBSITE_PACKAGES.slice(0, 3)} />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Hiring a Web Design Company in Canada</h2>
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
            Talk to a Canadian Web Design Team{" "}
            <span className="gradient-text-animated">Today</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Book a free call. We&apos;ll look at your current site, tell you what we&apos;d change and
            send a quote in Canadian dollars. No pressure, no obligation.
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
            <a href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.phone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <QuoteFormSection source="web-design-company" mobileOnly />
    </>
  );
}
