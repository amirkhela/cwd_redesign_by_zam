import type { Metadata } from "next";
import Link from "next/link";
import SeoAuditForm from "@/components/SeoAuditForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

// Keyword research (SE Ranking, Canada, 26 Nov 2026): "seo audit service(s)" 320/mo, difficulty 8-9;
// "free seo audit" 210/mo, difficulty 72; "seo audit toronto" 30/mo, difficulty 6; "local seo audit" 30/mo, difficulty 0.
const TITLE = "Free SEO Audit & SEO Audit Services | Canadian Web Designs";
const DESCRIPTION =
  "Find out why your website isn't ranking on Google. Our free SEO audit checks your rankings, Google Business Profile and site issues, with a clear list of fixes.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/free-seo-audit" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://canadianwebdesigns.ca/free-seo-audit",
  },
};

const faqs = [
  {
    q: "Is the SEO audit really free?",
    a: "Yes. The SEO audit is free and comes with no obligation. You do not give us a credit card and you do not have to hire us. If you want help fixing what we find, we will tell you what it costs. If not, you keep the report.",
  },
  {
    q: "What does your SEO audit check?",
    a: "Where you rank on Google for the searches your customers make, your Google Business Profile and map pack position, the competitors ranking above you, your page titles, descriptions and service pages, technical issues like speed, mobile and indexing, and your reviews and local listings.",
  },
  {
    q: "How is this different from a free SEO checker tool?",
    a: "An automated SEO checker scans one page and gives you a score. Our free SEO audit is done by a person on our team: we search Google from your city, compare you with the businesses that outrank you and explain in plain English what to fix first and why.",
  },
  {
    q: "How long does it take to get my SEO audit report?",
    a: "Our team reaches out within 24 hours of your request. The report itself usually takes a few business days, because we check your rankings and competitors by hand.",
  },
  {
    q: "Do you offer local SEO audits for Toronto and other Canadian cities?",
    a: "Yes. We check how you show up in your own city, not just Canada-wide, because Google Maps and local results change with where the customer is searching. We audit businesses in Toronto, the GTA and across Canada.",
  },
  {
    q: "What happens after the audit?",
    a: "You get the report and a short call or email to walk through it if you want one. You can fix the issues yourself, hand the list to your web person, or ask us to do it. Our SEO plans start at $299 a month, or $250 a month on a 12-month plan.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const checks = [
  { title: "Your Google rankings", desc: "Where you rank for the searches your customers actually make, checked from your own city." },
  { title: "Google Maps and your Business Profile", desc: "Whether you show in the map pack, and what is missing from your profile: categories, services, photos and reviews." },
  { title: "Who outranks you, and why", desc: "The businesses above you on Google and what they have that your site does not." },
  { title: "Your pages and content", desc: "Page titles, descriptions, headings and service pages. Google ranks pages, so missing pages mean missing searches." },
  { title: "Technical health", desc: "Speed, mobile, indexing and broken pages: the problems that stop Google from showing your site at all." },
  { title: "AI search visibility", desc: "Whether Google's AI answers and ChatGPT mention your business when people ask for what you do." },
];

const steps = [
  { step: "01", title: "Send us your website", desc: "Your name, email and website. That is all we need, and it takes under a minute." },
  { step: "02", title: "We check it by hand", desc: "We search Google from your area, look at your rankings, your Google listing and your competitors, and go through your site." },
  { step: "03", title: "Get your free report", desc: "A plain-English SEO audit report with what is holding you back and what to fix first. No cost, no obligation." },
];

const check = (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function FreeSeoAuditPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Free SEO Audit", href: "/free-seo-audit" }]} />

      {/* ─── HERO + FORM ─── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div
          className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
                <span className="text-white/80 text-sm font-medium tracking-wide">
                  Free SEO Audit &middot; Done by a Person, Not a Tool
                </span>
              </div>
              <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
                Free SEO Audit:{" "}
                <span className="gradient-text-animated">Find Out Why You&rsquo;re Not Ranking on Google</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                Send us your website and we will check where you rank, how your Google listing compares with your
                competitors and what is holding your site back. You get a free SEO audit report with a clear list
                of fixes. No cost and no obligation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Your rankings, checked from your own city",
                  "Google Maps and Business Profile review",
                  "Who outranks you, and why",
                  "A plain-English list of what to fix first",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="text-[#00AADF]">{check}</span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                Prefer to talk? Call {config.phone}
              </a>
            </div>

            <div className="relative">
              <SeoAuditForm id="seo-audit-form" source="free-seo-audit" showHowItWorks={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE CHECK ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Check</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What&rsquo;s in Your Free SEO Audit Report</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              The same checks we run before taking on any SEO client, written so you can act on them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checks.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 reveal border border-gray-100"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  {check}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How Your Free SEO Audit Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-4xl font-black mb-4"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {s.step}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOOL vs AUDIT + PROOF ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">SEO Audit Services</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                A Real SEO Audit, Not an Automated Score
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Free SEO checker tools scan one page and hand you a number. They can&rsquo;t tell you that a competitor
                down the street has 90 more reviews, that your services page is empty, or that Google shows your old
                hours. Our SEO audit is done by a person who searches Google the way your customers do.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is the same process behind our{" "}
                <Link href="/seo-packages" className="text-[#00AADF] font-semibold hover:underline">
                  SEO packages
                </Link>{" "}
                and our local SEO work in{" "}
                <Link href="/seo/toronto" className="text-[#00AADF] font-semibold hover:underline">
                  Toronto
                </Link>{" "}
                and across Canada.
              </p>
            </div>
            <div
              className="reveal delay-2 rounded-2xl p-8 border border-[#00AADF]"
              style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" }}
            >
              <h3 className="text-white font-black text-xl mb-2">What this work looks like: Cloud Pharmacy, Toronto</h3>
              <p className="text-white/85 text-sm leading-relaxed mb-5">
                An independent pharmacy we do the SEO for. Ask ChatGPT for the top pharmacies in Toronto and Cloud
                Pharmacy comes up first.
              </p>
              <ul className="space-y-3">
                {[
                  "1,500+ visits a month from Google search",
                  "300+ calls a month from their Google listing",
                  "4.9 stars from over 800 Google reviews",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                    <span className="text-white mt-0.5">{check}</span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/pharmacy-seo"
                className="mt-7 flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm bg-white text-[#003B6F] hover:bg-white/90 transition-all duration-300"
              >
                See the case study
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Free SEO Audit FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Find Out Why You&rsquo;re <span className="gradient-text-animated">Not Ranking</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
            Your free SEO audit is one short form away: your name, email and website.
          </p>
          <a
            href="#seo-audit-form"
            className="btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
            style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
          >
            Get My Free SEO Audit
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
