import { getConfig } from "@/lib/client-config";

const BASE_URL = `https://${getConfig().domain}`;

export interface BreadcrumbItem {
  name: string;
  href?: string;
  url?: string;
}

/**
 * Emits the page's BreadcrumbList AND its WebPage node.
 *
 * WHY THE WEBPAGE NODE LIVES HERE. Until now no page on this site declared what
 * KIND of page it was or which entity it was ABOUT. A crawler saw a company, a
 * website, some services and a trail of breadcrumbs, with nothing joining the
 * page it was actually reading to any of them. For an answer engine deciding
 * whether /contact is where you reach Canadian Web Designs, that link is the
 * whole question.
 *
 * It goes in this component rather than in 39 page files because this component
 * is already on all 39 of them and is already handed exactly the two facts a
 * WebPage node needs: the current page's name and its href, as the last
 * breadcrumb item. Adding it here is one diff instead of thirty-nine, and a page
 * that gains a breadcrumb tomorrow gets its WebPage node for free.
 *
 * Three things that must not be weakened:
 *
 * 1. `isPartOf` and `about` are @id REFERENCES, never inline stubs. An inline
 *    {"@type":"Organization", name: ...} is a new anonymous node that inherits
 *    none of the address, rating, sameAs or areaServed the real one carries.
 *    That was the defect behind eight `provider` stubs and the WebSite node's
 *    `publisher`; it must not come back through this door.
 *
 * 2. The @id carries a #webpage fragment. Bare page URLs are already claimed --
 *    by the canonical, and on city pages by the Service node's own @id. Two
 *    nodes sharing one @id are one merged node with both sets of properties,
 *    which is exactly the ambiguity this file exists to remove.
 *
 * 3. `pageType` defaults to "WebPage" and is only narrowed where the narrower
 *    type is unambiguously true. A wrong subtype is worse than the generic one:
 *    ContactPage on a page with no contact route is a false statement about the
 *    page, and schema is read as a claim.
 */
export type PageSchemaType =
  | "WebPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage"
  | "FAQPage"
  | "ProfilePage";

export default function BreadcrumbSchema({
  items,
  pageType = "WebPage",
  description,
  emitWebPage = true,
}: {
  items: BreadcrumbItem[];
  /** Narrow this only where the narrower type is unambiguously true. */
  pageType?: PageSchemaType;
  /** Optional; omitted from the node entirely when absent rather than emitted empty. */
  description?: string;
  /**
   * Set false on a page that already declares its own WebPage-family node (e.g.
   * /blog's CollectionPage). Two nodes describing one page is the ambiguity this
   * whole component exists to remove, so the page keeps the richer one.
   */
  emitWebPage?: boolean;
}) {
  const trail = items.filter((item) => item.name !== "Home");

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ...trail.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.href ? `${BASE_URL}${item.href}` : (item.url ?? BASE_URL),
      })),
    ],
  };

  // The current page is the last crumb. Without an href there is no URL to key
  // the node on, so no WebPage node is emitted at all -- an @id we had to invent
  // would be worse than the absence.
  const current = trail.length ? trail[trail.length - 1] : undefined;
  const href = current?.href ?? (current?.url?.startsWith(BASE_URL) ? current.url.slice(BASE_URL.length) : undefined);

  const webPage =
    emitWebPage && current && href !== undefined
      ? {
          "@context": "https://schema.org",
          "@type": pageType,
          "@id": `${BASE_URL}${href}#webpage`,
          url: `${BASE_URL}${href}`,
          name: current.name,
          ...(description ? { description } : {}),
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          inLanguage: "en-CA",
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      {webPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
        />
      )}
    </>
  );
}
