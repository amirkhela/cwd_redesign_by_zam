import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import QuoteFormSection from "@/components/QuoteFormSection";
import GoogleReviews from "@/components/GoogleReviews";
import LastReviewed from "@/components/LastReviewed";
import type { IndustryPage as IndustryData } from "@/content/compare/types";

/**
 * Renders one "web design for <industry>" page from its data file.
 *
 * Same chrome and the same schema budget as ComparePage: the breadcrumb (with
 * its WebPage node) plus one inline FAQPage, nothing else. The FAQs are the
 * page's own -- never the matching blog post's `faq:` frontmatter, which would
 * put one FAQPage on two URLs. Copy makes no invented results claim and no
 * patient or case numbers; those rules live in each data file's docstring.
 */
export default function IndustryPage({ data }: { data: IndustryData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services/web-design-development" },
          { name: `Web Design for ${data.audience}`, href: `/${data.slug}` },
        ]}
        description={data.metaDescription}
      />

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
              <span className="text-white/80 text-sm font-medium tracking-wide">Web Design for {data.audience}</span>
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
              <a
                href="tel:6476896069"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (647) 689-6069
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">The Problem</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Why most {data.audience.toLowerCase()} websites do not bring in work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.painPoints.map((p, i) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div className="text-4xl font-black mb-4" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  0{i + 1}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What You Get</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What we build into a {data.audience.toLowerCase().replace(/s$/, "")} website</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whatYouGet.map((w) => {
              const inner = (
                <>
                  <h3 className="text-gray-900 font-black text-lg mb-3 group-hover:text-[#00AADF] transition-colors">{w.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{w.body}</p>
                  {w.href && (
                    <span className="inline-flex items-center gap-1.5 text-[#00AADF] text-sm font-semibold">
                      Learn more
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  )}
                </>
              );
              const cls = "group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00AADF]/40 hover:shadow-lg transition-all duration-300 block";
              const style = { boxShadow: "0 2px 16px rgba(0,0,0,0.06)" };
              return w.href ? (
                <Link key={w.title} href={w.href} className={cls} style={style}>{inner}</Link>
              ) : (
                <div key={w.title} className={cls} style={style}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── PROOF ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">See For Yourself</span>
            <h2 className="text-3xl font-black text-gray-900">Read more before you decide</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {data.proofLinks.map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Web design for {data.audience.toLowerCase()} — common questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {data.faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <LastReviewed reviewedOn={data.reviewedOn} note="Every claim on this page was re-checked on this date." />
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <QuoteFormSection source={data.slug} />
    </>
  );
}
