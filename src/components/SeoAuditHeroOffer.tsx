import Link from "next/link";

/**
 * Free SEO audit offer for the hero of every SEO page, in place of the free-mockup
 * badge (MockupHeroOffer). Same "gradient" look so the heroes stay consistent.
 * Links to /free-seo-audit.
 */
export default function SeoAuditHeroOffer({ className = "" }: { className?: string }) {
  return (
    <div className={`my-5 ${className}`}>
      <Link
        href="/free-seo-audit"
        className="group transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-3 max-w-full rounded-xl pl-2.5 pr-3 py-2 text-left text-white"
        style={{ background: "linear-gradient(120deg, #005B9A 0%, #00AADF 100%)", boxShadow: "0 8px 26px rgba(0,170,223,0.4)" }}
      >
        <span
          aria-hidden="true"
          className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)" }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path strokeLinecap="round" d="M15.5 15.5L21 21" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.5l2-2.5 2 1.5 2-3" />
          </svg>
        </span>
        <span className="min-w-0">
          <span className="block font-black text-lg sm:text-xl leading-tight">Free SEO Audit Report</span>
          <span className="block text-white/85 text-xs mt-0.5">Find out why you&rsquo;re not ranking on Google</span>
        </span>
        <span className="hidden sm:flex shrink-0 w-7 h-7 rounded-full bg-white text-[#005B9A] items-center justify-center group-hover:translate-x-0.5 transition-transform">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
