import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import QuoteFormSection from "@/components/QuoteFormSection";
import LastReviewed from "@/components/LastReviewed";
import { COMPARISONS } from "@/content/compare";
import type { Comparison } from "@/content/compare/types";

/**
 * Renders one "<competitor> alternative" page from its data file.
 *
 * Schema: the breadcrumb (which carries the WebPage node) plus one inline
 * FAQPage, exactly as web-design-agency/page.tsx does. NOTHING ELSE. The
 * site-wide LocalBusiness in layout.tsx already emits the one aggregateRating
 * verify-seo asserts; a Service or Review node here would be a duplicate @id.
 *
 * Every row whose `them` cell states a fact about the other party carries a
 * `source`, rendered as a link beside the cell. The disclaimer and the sources
 * list are rendered on every compare page, and the Last-reviewed stamp is the
 * date the cross-repo refresh job last re-fetched each source.
 *
 * Judged at 390px: the three-column table becomes stacked cards below `md`.
 */
export default function ComparePage({
  data,
  stayOn,
}: {
  data: Comparison;
  /** "Prefer to stay on X? We build on it too" -- the honest row's link. */
  stayOn?: { label: string; href: string };
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const related = (data.related ?? [])
    .map((slug) => COMPARISONS[slug])
    .filter((c): c is Comparison => Boolean(c));

  return (
    <>
      <BreadcrumbSchema items={[{ name: `${data.themLabel} alternative`, href: `/${data.slug}` }]} description={data.metaDescription} />

      {/* ─── HERO ─── */}
      <section
        className="relative py-20 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">{data.usLabel} vs {data.themLabel}</span>
            </div>
            <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Side By Side</span>
            <h2 className="text-3xl font-black text-gray-900">{data.usLabel} vs {data.themLabel}</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              Rows marked <span className="font-semibold text-gray-700">source</span> quote {data.themLabel}&apos;s own help pages.
              Rows without one make no claim about {data.themLabel} at all.
            </p>
          </div>

          {/* md and up: a real table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <th scope="col" className="px-5 py-4 text-white/80 font-bold uppercase tracking-wider text-xs w-[22%]">Feature</th>
                  <th scope="col" className="px-5 py-4 text-white font-black text-base w-[39%]">{data.usLabel}</th>
                  <th scope="col" className="px-5 py-4 text-white/90 font-bold text-base w-[39%]">{data.themLabel}</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <th scope="row" className="px-5 py-5 align-top font-bold text-gray-900 text-left">{row.feature}</th>
                    <td className="px-5 py-5 align-top text-gray-700 leading-relaxed">
                      {row.win && (
                        <span className="inline-flex items-center gap-1 text-[#00AADF] text-xs font-bold uppercase tracking-wider mb-1">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                          Our pick
                        </span>
                      )}
                      <p>{row.us}</p>
                    </td>
                    <td className="px-5 py-5 align-top text-gray-600 leading-relaxed">
                      <p>{row.them}</p>
                      {row.source && (
                        <a href={row.source.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-block mt-2 text-xs font-semibold text-[#00AADF] hover:underline">
                          source: {row.source.label} ↗
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* below md: one card per row */}
          <div className="md:hidden space-y-4">
            {data.rows.map((row) => (
              <div key={row.feature} className="rounded-2xl border border-gray-100 overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div className="px-5 py-3 text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>{row.feature}</div>
                <div className="px-5 py-4 border-b border-gray-100">
                  <p className="text-[#00AADF] text-xs font-bold uppercase tracking-wider mb-1">{data.usLabel}{row.win ? " · our pick" : ""}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{row.us}</p>
                </div>
                <div className="px-5 py-4 bg-gray-50">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{data.themLabel}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{row.them}</p>
                  {row.source && (
                    <a href={row.source.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-block mt-2 py-1 text-xs font-semibold text-[#00AADF] hover:underline">
                      source: {row.source.label} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {stayOn && (
            <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
              Prefer to stay on {data.themLabel}? We build on it too:{" "}
              <Link href={stayOn.href} className="text-[#00AADF] font-semibold hover:underline">{stayOn.label}</Link>.
            </p>
          )}
        </div>
      </section>

      {/* ─── THREE REASONS ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why Switch</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Three reasons businesses choose {data.usLabel}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.reasons.map((r, i) => (
              <div key={r.title} className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div className="text-4xl font-black mb-4" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  0{i + 1}
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-3">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">{data.themLabel} alternative — common questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {data.faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source={data.slug} />

      {/* ─── SOURCES, DISCLAIMER, LAST REVIEWED ─── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6">
          {data.sources && data.sources.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#00AADF] mb-3">Sources</h2>
              <ul className="space-y-2 text-sm">
                {data.sources.map((s) => (
                  <li key={s.url} className="text-gray-600 leading-relaxed">
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-gray-800 font-semibold hover:text-[#00AADF] hover:underline py-1 inline-block">
                      {s.label}
                    </a>
                    <span className="text-gray-400"> — checked {s.checkedOn}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-xs text-gray-500 leading-relaxed">{data.disclaimer}</p>
          <LastReviewed reviewedOn={data.reviewedOn} />
          {related.length > 0 && (
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">More comparisons</p>
              <div className="flex flex-wrap gap-3">
                {related.map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">
                    {c.themLabel} alternative
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
