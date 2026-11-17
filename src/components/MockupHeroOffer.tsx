import Link from "next/link";

/**
 * Free-mockup offer that sits in every page hero, above the H1.
 * Links to /free-website-mockup. `variant` picks the look:
 *  A "card"     white card, cyan border (default)
 *  B "gradient" brand-gradient card, white text, mini browser sketch
 *  C "pill"     slim one-line glass pill with a green FREE chip
 *  D "browser"  mini browser window sketch + two-line pitch
 *  E "ribbon"   amber "FREE" ribbon card for maximum contrast
 */
export type MockupOfferVariant = "card" | "gradient" | "pill" | "browser" | "ribbon";

const HREF = "/free-website-mockup";
const TITLE = "Free website mockup with your quote";
const SUB = "See your new site before you decide. No cost, no obligation.";

const Arrow = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const ScreenIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path strokeLinecap="round" d="M3 8h18M7 12h6M7 15h4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.5l1.5 1.5 3-3" />
  </svg>
);

/** Tiny drawn browser window: reads as "your new website" at a glance. */
const MiniBrowser = ({ dark = false, small = false }: { dark?: boolean; small?: boolean }) => (
  <span
    aria-hidden="true"
    className={`shrink-0 block rounded-lg overflow-hidden ${small ? "w-[56px] h-[40px]" : "w-[88px] h-[60px]"}`}
    style={{
      background: dark ? "rgba(255,255,255,0.12)" : "#fff",
      border: dark ? "1px solid rgba(255,255,255,0.35)" : "1px solid #cfe9f5",
      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    }}
  >
    <span className={`flex gap-1 ${small ? "px-1 py-0.5" : "px-1.5 py-1"}`} style={{ background: dark ? "rgba(255,255,255,0.18)" : "#eef7fb" }}>
      <span className={`${small ? "w-1 h-1" : "w-1.5 h-1.5"} rounded-full bg-[#ff5f57]`} />
      <span className={`${small ? "w-1 h-1" : "w-1.5 h-1.5"} rounded-full bg-[#febc2e]`} />
      <span className={`${small ? "w-1 h-1" : "w-1.5 h-1.5"} rounded-full bg-[#28c840]`} />
    </span>
    <span
      className={`block rounded ${small ? "mx-1 mt-1 h-2.5" : "mx-1.5 mt-1.5 h-4"}`}
      style={{ background: dark ? "rgba(255,255,255,0.85)" : "linear-gradient(135deg, #005B9A, #00AADF)" }}
    />
    <span className={`flex gap-1 ${small ? "mx-1 mt-1" : "mx-1.5 mt-1.5"}`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`flex-1 rounded-sm ${small ? "h-2" : "h-2.5"}`}
          style={{ background: dark ? "rgba(255,255,255,0.4)" : "#d7ecf5" }}
        />
      ))}
    </span>
  </span>
);

export default function MockupHeroOffer({
  className = "",
  variant = "gradient",
}: {
  className?: string;
  variant?: MockupOfferVariant;
}) {
  const wrap = `my-5 ${className}`;
  const lift = "group transition-all duration-300 hover:-translate-y-0.5";

  if (variant === "gradient") {
    return (
      <div className={wrap}>
        <Link
          href={HREF}
          className={`${lift} inline-flex items-center gap-3 max-w-full rounded-xl pl-2.5 pr-3 py-2 text-left text-white`}
          style={{ background: "linear-gradient(120deg, #005B9A 0%, #00AADF 100%)", boxShadow: "0 8px 26px rgba(0,170,223,0.4)" }}
        >
          <MiniBrowser dark small />
          <span className="min-w-0">
            <span className="block font-black text-lg sm:text-xl leading-tight">Free Website Mockup</span>
            <span className="block text-white/85 text-xs mt-0.5">With your quote &middot; No cost, no obligation</span>
          </span>
          <span className="hidden sm:flex shrink-0 w-7 h-7 rounded-full bg-white text-[#005B9A] items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <Arrow className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div className={wrap}>
        <Link
          href={HREF}
          className={`${lift} inline-flex items-center gap-2.5 max-w-full rounded-full pl-1.5 pr-4 py-1.5 text-left`}
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(0,170,223,0.6)", boxShadow: "0 0 24px rgba(0,170,223,0.35)" }}
        >
          <span className="shrink-0 text-[11px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full text-white" style={{ background: "#00B67A" }}>
            Free
          </span>
          <span className="text-white font-bold text-sm leading-tight">
            Website mockup with your quote
            <span className="hidden sm:inline text-white/60 font-medium"> · see it before you decide</span>
          </span>
          <span className="shrink-0 text-[#33C2E8] group-hover:translate-x-0.5 transition-transform">
            <Arrow />
          </span>
        </Link>
      </div>
    );
  }

  if (variant === "browser") {
    return (
      <div className={wrap}>
        <Link
          href={HREF}
          className={`${lift} inline-flex items-center gap-4 max-w-full rounded-2xl p-3 pr-5 text-left`}
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}
        >
          <MiniBrowser />
          <span className="min-w-0">
            <span className="block text-white font-black text-base sm:text-lg leading-tight">
              See your new website <span className="text-[#33C2E8]">free</span>, before you pay
            </span>
            <span className="block text-white/70 text-xs sm:text-sm mt-1">
              Free mockup with every quote. No cost, no obligation.
            </span>
            <span className="inline-flex items-center gap-1 mt-1.5 text-[#33C2E8] text-sm font-bold">
              Get my free mockup <Arrow className="w-3.5 h-3.5" />
            </span>
          </span>
        </Link>
      </div>
    );
  }

  if (variant === "ribbon") {
    return (
      <div className={wrap}>
        <Link
          href={HREF}
          className={`${lift} relative inline-flex items-center gap-3 sm:gap-4 max-w-full rounded-2xl bg-white pl-4 pr-5 py-3.5 text-left overflow-hidden`}
          style={{ boxShadow: "0 12px 36px rgba(0,0,0,0.35)" }}
        >
          <span
            className="absolute top-0 left-0 bottom-0 w-1.5"
            style={{ background: "linear-gradient(180deg, #FFB800, #FF8A00)" }}
            aria-hidden="true"
          />
          <span
            className="shrink-0 -rotate-6 text-[13px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg text-[#3a2400]"
            style={{ background: "linear-gradient(135deg, #FFD34D, #FFB800)", boxShadow: "0 4px 12px rgba(255,184,0,0.45)" }}
          >
            Free
          </span>
          <span className="min-w-0">
            <span className="block text-gray-900 font-black text-sm sm:text-base leading-tight">{TITLE}</span>
            <span className="block text-gray-600 text-xs sm:text-sm mt-0.5">{SUB}</span>
          </span>
          <span className="hidden sm:inline-flex shrink-0 items-center gap-1 text-sm font-black whitespace-nowrap text-[#005B9A] group-hover:translate-x-0.5 transition-transform">
            See it free <Arrow />
          </span>
        </Link>
      </div>
    );
  }

  // A: "card" (default)
  return (
    <div className={wrap}>
      <Link
        href={HREF}
        className={`${lift} inline-flex items-center gap-3 sm:gap-4 max-w-full rounded-2xl bg-white pl-3 pr-4 py-3 text-left`}
        style={{ border: "2px solid #00AADF", boxShadow: "0 10px 34px rgba(0,170,223,0.35)" }}
      >
        <span
          className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white"
          style={{ background: "linear-gradient(135deg, #005B9A, #00AADF)" }}
          aria-hidden="true"
        >
          <ScreenIcon />
        </span>
        <span className="min-w-0">
          <span className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full text-white" style={{ background: "#00B67A" }}>
              Free
            </span>
            <span className="text-gray-900 font-black text-sm sm:text-base leading-tight">{TITLE}</span>
          </span>
          <span className="block text-gray-600 text-xs sm:text-sm mt-0.5 leading-snug">{SUB}</span>
        </span>
        <span className="hidden sm:inline-flex shrink-0 items-center gap-1 text-sm font-black whitespace-nowrap transition-transform duration-300 group-hover:translate-x-0.5" style={{ color: "#005B9A" }}>
          See it free <Arrow />
        </span>
      </Link>
    </div>
  );
}
