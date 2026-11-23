import { getConfig } from "@/lib/client-config";

const config = getConfig();

// Floating call bubble, bottom-LEFT, mirroring WhatsAppButton on the right.
// On phones with MobileCallBar (hasCallBar) it is hidden, because the bar
// already has "Call Now"; from lg up the bar is gone so it shows in the corner
// with the number. tel: clicks are counted as phone_click by LeadClickTracker.
export default function CallButton({ hasCallBar }: { hasCallBar: boolean }) {
  return (
    <a
      href={`tel:${config.phone}`}
      aria-label={`Call us at ${config.phone}`}
      title={`Call us at ${config.phone}`}
      className={`group fixed left-4 z-40 items-center gap-2 rounded-full text-white font-bold text-sm shadow-lg transition-transform duration-200 hover:scale-105 lg:left-6 lg:bottom-6 lg:flex ${
        hasCallBar ? "hidden" : "flex bottom-[calc(1rem+env(safe-area-inset-bottom))]"
      }`}
      style={{ background: "#00AADF", boxShadow: "0 6px 24px rgba(0,170,223,0.45)" }}
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </span>
      <span className="hidden lg:inline pr-5 -ml-2">{config.phone}</span>
    </a>
  );
}
