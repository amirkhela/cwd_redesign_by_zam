import HeroQuoteForm from "@/components/HeroQuoteForm";
import StarRating from "@/components/StarRating";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

/**
 * Hero-style quote form section — mirrors the homepage hero (dark background,
 * ambient glow, dot grid, two-column text + form) so every page can close with
 * the same conversion block. `source` tags the lead with the page it came from.
 */
export default function QuoteFormSection({
  source,
  title,
  subtitle,
}: {
  source: string;
  title?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "#010C1E" }}>
      {/* Ambient glow — same CSS-gradient treatment as the homepage hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 65% 60% at 3% 10%, rgba(0,170,223,0.28) 0%, transparent 52%)",
            "radial-gradient(ellipse 50% 45% at 92% 95%, rgba(0,170,223,0.20) 0%, transparent 52%)",
            "radial-gradient(ellipse 35% 35% at 62% 42%, rgba(51,194,232,0.14) 0%, transparent 58%)",
          ].join(", "),
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: Text */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }}
              />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Free Quote &middot; Reply Within 24 Hours
              </span>
            </div>

            <h2
              className="font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", lineHeight: 1.08 }}
            >
              {title ?? (
                <>
                  Let&rsquo;s Build Something{" "}
                  <span className="gradient-text-animated">Great Together</span>
                </>
              )}
            </h2>

            <p className="text-lg text-white/70 leading-relaxed max-w-lg mb-8">
              {subtitle ??
                "Tell us about your project and get a free, no-obligation quote — most clients hear back within 24 hours."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {config.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <StarRating rating={5} size="md" />
              <span className="text-white/50 text-sm">
                {config.reviewCount}+ Five Star Reviews on Google
              </span>
            </div>
          </div>

          {/* RIGHT: Quote Form */}
          <div className="relative">
            <HeroQuoteForm source={source} />
          </div>
        </div>
      </div>
    </section>
  );
}
