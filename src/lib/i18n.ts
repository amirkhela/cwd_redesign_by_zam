import { getConfig } from "./client-config";

const config = getConfig();
const BASE = `https://${config.domain}`;

/**
 * Bilingual (EN/FR) hreflang scaffold.
 *
 * The site is English-only today (the "FR / Bientôt" toggle is a coming-soon
 * placeholder). hreflang MUST point at real, live URLs — emitting a fr-CA
 * annotation for a French version that doesn't exist yet would be invalid and
 * could *cause* the duplicate-content confusion we want to avoid. So while
 * FR_ENABLED is false, every page emits only en-CA + x-default (pointing to
 * itself), which is the correct EN-only setup. No fr-CA is rendered.
 *
 * hreflang is emitted centrally by <HreflangTags /> (rendered once in the root
 * layout, so it covers every page automatically via usePathname()).
 *
 * ── To launch French (the "one-line flip") ─────────────────────────────────
 * 1. Publish the French pages at `${FR_PREFIX}${path}` (e.g. /fr/services/seo).
 * 2. Set FR_ENABLED = true below — every page then also emits fr-CA, and the
 *    /fr pages emit the mirror set automatically (the leading /fr is stripped so
 *    they resolve to the same EN counterpart). No per-page edits required.
 */
export const FR_ENABLED = false;
export const FR_PREFIX = "/fr";

/**
 * hreflang <link> entries for the current page. Works for both EN and FR URLs:
 * a leading /fr is stripped so an FR page maps back to its EN counterpart and
 * both language versions advertise the same alternate set.
 */
export function hreflangEntries(pathname: string): { hrefLang: string; href: string }[] {
  const enPath = pathname.startsWith(FR_PREFIX)
    ? pathname.slice(FR_PREFIX.length) || "/"
    : pathname;
  const entries = [
    { hrefLang: "en-CA", href: `${BASE}${enPath}` },
    { hrefLang: "x-default", href: `${BASE}${enPath}` },
  ];
  if (FR_ENABLED) {
    entries.push({ hrefLang: "fr-CA", href: `${BASE}${FR_PREFIX}${enPath}` });
  }
  return entries;
}
