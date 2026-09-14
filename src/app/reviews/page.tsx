import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import QuoteFormSection from "@/components/QuoteFormSection";
import LastReviewed from "@/components/LastReviewed";
import { REVIEWS_PAGE as data } from "@/content/compare";

/**
 * /reviews -- the Google reviews, verbatim (nine since the 2026-09-14 re-check).
 *
 * Schema on this page is the breadcrumb (which carries the WebPage node) and
 * one FAQPage. Nothing else: the site-wide LocalBusiness in layout.tsx already
 * emits the one aggregateRating verify-seo asserts, and Google treats a
 * business marking up reviews about itself as self-serving. No score and no
 * review count appear in this page's own copy -- those are Google's to state.
 */

const BASE = "https://canadianwebdesigns.ca";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `${BASE}/${data.slug}`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const AVATAR_COLORS = ["#4285F4", "#EA4335", "#34A853", "#FBBC05", "#FF6D00", "#9C27B0", "#0097A7", "#E91E63", "#00BCD4", "#FF5722"];

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Reviews", href: `/${data.slug}` }]} description={data.metaDescription} />

      {/* ─── HERO ─── */}
      <section
        className="relative py-20 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Client Reviews — Quoted Verbatim</span>
            </div>
            <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={data.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
              >
                Read them on Google
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                See the work they describe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE REVIEWS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">In Their Words</span>
            <h2 className="text-3xl font-black text-gray-900">What clients wrote on Google</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {data.reviews.map((r, i) => (
              <figure
                key={`${r.author}-${i}`}
                className="bg-gray-50 rounded-2xl p-6 md:p-7 border border-gray-100 flex flex-col gap-4"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <blockquote className="text-gray-700 leading-relaxed text-[15px]">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3 pt-3 border-t border-gray-200">
                  <span className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                      aria-hidden="true"
                    >
                      {initialsOf(r.author)}
                    </span>
                    <span className="font-semibold text-gray-900 text-sm truncate">{r.author}</span>
                  </span>
                  <a
                    href={r.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00AADF] text-xs font-semibold hover:underline shrink-0 py-2"
                  >
                    On Google
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <LastReviewed
              reviewedOn={data.reviewedOn}
              note="Each quote was re-checked against the Google listing on this date."
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">About these reviews</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {data.faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
            Want to see the work these clients describe? See our{" "}
            <Link href="/portfolio" className="text-[#00AADF] font-semibold hover:underline">portfolio</Link>.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <QuoteFormSection source="reviews" showReviews={false} />
    </>
  );
}
