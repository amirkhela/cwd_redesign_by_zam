import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingCards from "@/components/PricingCards";
import { SEO_PACKAGES } from "@/lib/packages";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

/**
 * /pharmacy-seo: SEO for independent pharmacies, led by the Cloud Pharmacy
 * case study. Added 2026-11-23 for the pharmacy outreach.
 *
 * Every number here has a source and a date (see the note under the stats):
 * - 4.9 stars / 804 Google reviews: Google Maps, checked 2026-11-23.
 * - Listed first by ChatGPT for "top pharmacies toronto": ChatGPT answer seen 2026-11-23.
 * - 1,500+ visits / 300+ calls a month: Google Search Console + Business Profile, September 2026.
 * Reviews are earned by the pharmacy team, so the copy never credits SEO for them.
 * No health or drug claims. Volumes are SE Ranking, Canada, monthly.
 */

export const metadata: Metadata = {
  title: { absolute: "Pharmacy SEO Canada | Cloud Pharmacy Case Study | Canadian Web Designs" },
  description:
    "SEO for independent pharmacies in Canada. See how Cloud Pharmacy in Toronto gets 1,500+ Google visits and 300+ calls a month. Plans from $250/month.",
  alternates: { canonical: "/pharmacy-seo" },
  openGraph: {
    title: "Pharmacy SEO Canada | Cloud Pharmacy Case Study",
    description:
      "How Cloud Pharmacy in downtown Toronto gets found on Google and ChatGPT, and how we do the same for independent pharmacies across Canada.",
    url: "https://canadianwebdesigns.ca/pharmacy-seo",
  },
};

const stats = [
  { value: "4.9 ★", label: "from 804 Google reviews" },
  { value: "#1", label: "pharmacy ChatGPT lists for Toronto" },
  { value: "1,500+", label: "visits a month from Google search" },
  { value: "300+", label: "calls a month from Google" },
];

const builtPages = [
  "Drug coverage in Ontario (ODB, Trillium, OHIP+)",
  "MedsCheck and medication reviews",
  "Minor ailment prescribing",
  "Blister packs and compliance packaging",
  "Medication synchronization",
  "Prescription refills and transfers",
  "Pharmacist consultations",
  "Smoking cessation support",
  "Free prescription delivery",
  "A services hub linking every page",
];

const searches = [
  { term: "trillium drug program", volume: "8,000" },
  { term: "ontario drug benefit", volume: "2,400" },
  { term: "ohip drug coverage", volume: "590" },
  { term: "minor ailments ontario", volume: "480" },
  { term: "bubble pack medication", volume: "320" },
  { term: "blister packaging pharmacy", volume: "260" },
  { term: "medscheck", volume: "170" },
];

const includes = [
  {
    title: "A page for every service",
    body: "Minor ailments, drug coverage, MedsCheck, blister packs, vaccines, delivery and refills, each on its own page and written for the searches people actually make in your province.",
  },
  {
    title: "Found on Google Maps",
    body: "Local SEO so you show up when people nearby search for a pharmacy: consistent name, address and phone across the web, plus local directory listings.",
  },
  {
    title: "Ready for AI search",
    body: "Clear service pages and pharmacy structured data, so tools like ChatGPT and Google's AI answers can understand what you offer and where you are.",
  },
  {
    title: "Speed and technical fixes",
    body: "Fast pages on phones, clean titles and descriptions, a proper sitemap and fixes for anything that stops Google from reading your site.",
  },
  {
    title: "Fresh content every month",
    body: "Helpful articles on the questions your patients ask, reviewed by your pharmacist before anything goes live.",
  },
  {
    title: "Plain monthly reporting",
    body: "Google visits, calls and the searches you rank for, in a short report you can read in two minutes.",
  },
];

const faqs = [
  {
    q: "Do you only work with pharmacies in Toronto?",
    a: "No. We work with independent pharmacies across Canada. Drug plans and pharmacist services differ by province, so we build pages around the programs and searches that matter where you are.",
  },
  {
    q: "Will you write health content for our pharmacy?",
    a: "We write it, and your pharmacist reviews it before it is published. We make no health or drug claims, and we keep your pages within your provincial regulator's advertising rules.",
  },
  {
    q: "How much does pharmacy SEO cost?",
    a: "Plans start at $250 a month for Starter SEO and $399 a month for Growth SEO, plus HST. There is no lock-in contract.",
  },
  {
    q: "How long until we see results?",
    a: "Most pharmacies see movement on service searches within 3 to 6 months. Broader searches such as \"pharmacy near me\" take longer and depend on your area and your Google listing.",
  },
  {
    q: "Can you guarantee we will rank first?",
    a: "No one can honestly guarantee a ranking on Google or in ChatGPT. What we can show you is what we did for Cloud Pharmacy, and a free report on where your pharmacy stands today.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function PharmacySeoPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Pharmacy SEO", href: "/pharmacy-seo" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── HERO ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pharmacy SEO</span>
              <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
                SEO for{" "}
                <span className="gradient-text-animated">independent pharmacies</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
                We do the SEO for Cloud Pharmacy in downtown Toronto. Ask ChatGPT for the top pharmacies in
                Toronto and Cloud Pharmacy comes up first. Here is how we helped, and what we can do for your pharmacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base"
                  style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                  Get a Free Google Visibility Check
                </a>
                <a href={`tel:${config.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                  Call {config.phone}
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <HeroQuoteForm source="pharmacy-seo" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Case study</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Cloud Pharmacy, downtown Toronto</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              An independent pharmacy at 55 Dundas St E, competing with the big chains for the same patients.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-6 text-center border border-gray-100 bg-gray-50 reveal">
                <div className="text-3xl lg:text-4xl font-black text-[#00AADF] mb-2">{s.value}</div>
                <div className="text-sm text-gray-600 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Rating from Google Maps and ChatGPT answer for &quot;top pharmacies toronto&quot;, both checked November 2026.
            Visits and calls from Google Search Console and Google Business Profile, September 2026. The reviews are earned
            by the pharmacy&apos;s own team; our job is making sure people searching can find them.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <Image src="/portfolio/cloud-pharmacy.jpg" alt="Cloud Pharmacy website" width={1440} height={900}
                className="rounded-2xl shadow-lg border border-gray-100 w-full h-auto" />
            </div>
            <div className="reveal">
              <h3 className="text-2xl font-black text-gray-900 mb-4">What we did</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Most pharmacy SEO stops at &quot;pharmacy near me&quot;. We looked at what people in Ontario actually search for
                and built a page for each service, so Cloud Pharmacy shows up for the questions patients ask before they
                pick a pharmacy.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                {builtPages.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-[#00AADF] font-bold">✓</span>{p}</li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mt-5 text-sm">
                Plus titles and descriptions on every page, pharmacy structured data, speed fixes and monthly reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REAL SEARCHES ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Where patients come from</span>
            <h2 className="text-3xl font-black text-gray-900">The searches pharmacies miss</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Monthly Google searches in Canada for a few Ontario pharmacy topics. Few independent pharmacies have a page for any of them.
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-100 overflow-hidden reveal">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-left">
                  <th className="px-5 py-3 font-bold">Search</th>
                  <th className="px-5 py-3 font-bold text-right">Searches / month</th>
                </tr>
              </thead>
              <tbody>
                {searches.map((s) => (
                  <tr key={s.term} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-800">{s.term}</td>
                    <td className="px-5 py-3 text-right font-bold text-gray-900">{s.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">Source: SE Ranking, Canada database. Other provinces have their own drug plans and searches.</p>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What you get</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Pharmacy SEO, done for you</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((i) => (
              <div key={i.title} className="rounded-2xl p-7 border border-gray-100 bg-gray-50 reveal">
                <h3 className="font-black text-gray-900 text-lg mb-3">{i.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section id="packages" className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Pharmacy SEO Plans</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Flat monthly plans. No hidden fees, cancel anytime.</p>
          </div>
          <PricingCards plans={SEO_PACKAGES} />
          <p className="text-center text-sm text-gray-500 mt-10">
            Need a new pharmacy website first? See{" "}
            <Link href="/web-design-for-pharmacies" className="font-bold text-[#00AADF] hover:underline">pharmacy web design</Link>.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Pharmacy SEO Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100">
                <h3 className="font-black text-gray-900 text-lg mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="quote">
        <QuoteFormSection source="pharmacy-seo" />
      </div>
    </>
  );
}
