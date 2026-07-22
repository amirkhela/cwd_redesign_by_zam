"use client";

import { usePathname } from "next/navigation";
import { hreflangEntries } from "@/lib/i18n";

/**
 * Renders hreflang alternate links for the current page. Rendered once in the
 * root layout, so it covers every page. EN-only (en-CA + x-default) until the
 * French site launches — see src/lib/i18n.ts (FR_ENABLED) to flip it on.
 */
export default function HreflangTags() {
  const pathname = usePathname();
  return (
    <>
      {hreflangEntries(pathname).map((e) => (
        <link key={e.hrefLang} rel="alternate" hrefLang={e.hrefLang} href={e.href} />
      ))}
    </>
  );
}
