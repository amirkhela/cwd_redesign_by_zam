import { getConfig } from "@/lib/client-config";

const config = getConfig();

// Phone-only bar pinned to the bottom of every page (SiteShell; not /contact or
// /lp): one tap to call, one tap to a quote form (#quote in the homepage hero,
// /contact elsewhere). tel: clicks are counted by LeadClickTracker like every
// other phone link. Hidden from lg up, where the header phone is always in view.
export default function MobileCallBar({ quoteHref = "/contact" }: { quoteHref?: string }) {
  return (
    <>
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 px-3 pt-2"
        style={{
          background: "rgba(1,12,30,0.96)",
          borderTop: "1px solid rgba(0,170,223,0.3)",
          paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))",
        }}
      >
        <a
          href={`tel:${config.phone}`}
          className="flex items-center justify-center gap-2 min-h-[48px] rounded-xl text-white font-bold text-sm"
          style={{ background: "#00AADF" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call Now
        </a>
        <a
          href={quoteHref}
          className="flex items-center justify-center min-h-[48px] rounded-xl text-white font-bold text-sm"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          Free Quote
        </a>
      </div>
      {/* Keeps the end of the footer clear of the bar on phones */}
      <div className="lg:hidden h-20 bg-dark" aria-hidden="true" />
    </>
  );
}
