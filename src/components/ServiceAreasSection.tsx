import Link from "next/link";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

// Site-wide service-areas band rendered above the footer (SiteShell skips it on /contact).
// This is the sitewide internal-link source for all /locations/<city> pages.
export default function ServiceAreasSection() {
  return (
    <section className="relative overflow-hidden py-14" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-[15%] w-72 h-72 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(120px)", opacity: 0.18 }} />
      <div className="absolute bottom-0 right-[12%] w-64 h-64 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(100px)", opacity: 0.28, animationDelay: "2s" }} />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-5">
          <svg className="w-4 h-4 text-[#00AADF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">Service Areas</span>
        </div>

        <h2 className="font-black text-white mb-2" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", lineHeight: 1.15 }}>
          Proudly Serving Businesses{" "}
          <span className="gradient-text-animated">Across Canada</span>
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-xl mx-auto">
          From coast to coast — {config.cities.length} cities and counting, backed by {config.reviewCount}+ five-star reviews.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/locations/toronto"
            className="btn-shimmer inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-bold text-white transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #005B9A, #00AADF)", boxShadow: "0 4px 20px rgba(0,170,223,0.35)" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Web Design Toronto
          </Link>
          {config.cities.filter((c) => c.slug !== "toronto").map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="glass inline-flex items-center px-4 py-2 rounded-full text-[0.8rem] font-medium text-white/70 hover:text-white hover:bg-[#00AADF]/25 transition-all duration-200"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
