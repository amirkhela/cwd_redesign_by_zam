"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// One delegated listener for every tel: and mailto: link on the site
// (header, hero buttons, footer, page copy) -- no per-link wiring to forget.
export default function LeadClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href, page_path: window.location.pathname });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_url: href, page_path: window.location.pathname });
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
