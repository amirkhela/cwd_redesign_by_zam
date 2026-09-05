import { getConfig } from "@/lib/client-config";

/**
 * /llms.txt -- a plain-text map of this site for AI answer engines.
 *
 * WHY THIS EXISTS. An assistant answering "who does web design in Brampton?"
 * fetches a page, not the whole site. It has no cheap way to learn what else is
 * here: sitemap.xml is 149 URLs of pure <loc> with no idea what any of them are
 * for, and the rendered pages are Next.js markup. llms.txt is the one file that
 * states, in prose an LLM reads in one pass, what this business is and which URL
 * answers which question.
 *
 * FOUR RULES, none of which may be weakened:
 *
 * 1. EVERY FACT IS DERIVED FROM `getConfig()`, NEVER TYPED HERE. The phone
 *    number, the addresses, the service list and the city list all already have
 *    exactly one home in cwd-config.ts, and this file is the fifth surface to
 *    render them (after the footer, the schema, the sitemap and the location
 *    pages). A hand-typed copy is a copy that is wrong the first time somebody
 *    moves an office -- and this is the copy an assistant quotes verbatim to a
 *    prospect, so it is the worst one to have go stale.
 *
 * 2. IT MAKES NO CLAIM THE SITE DOES NOT MAKE. No rating, no review count, no
 *    "top-rated", no client names. An LLM will repeat whatever is in here as
 *    fact; anything unverifiable becomes an unverifiable claim in someone's
 *    ChatGPT answer with CWD's name on it.
 *
 * 3. IT IS A MAP, NOT A PITCH. Marketing copy is what the pages are for. This
 *    file exists to route a question to the right URL.
 *
 * 4. IT IS TEXT/PLAIN AND STATIC. No request parsing, no query params, nothing
 *    an unauthenticated caller can influence -- it is served to every crawler on
 *    the internet.
 */

export const dynamic = "force-static";

export function GET() {
  const config = getConfig();
  const base = `https://${config.domain}`;
  // `addresses` is a Record, and `emails.sales` is optional in ClientConfig --
  // fall back rather than render the string "undefined" to a crawler.
  const t = config.addresses.toronto;
  const b = config.addresses.brampton;
  const salesEmail = config.emails.sales ?? config.emails.support;

  const services = config.services
    .map((s) => `- [${s.title}](${base}/services/${s.slug}): ${s.tagline}`)
    .join("\n");

  const cities = config.cities
    .map((c) => `- [Web design in ${c.name}, ${c.province}](${base}/locations/${c.slug})`)
    .join("\n");

  const seoCities = config.cities
    .map((c) => `- [SEO in ${c.name}, ${c.province}](${base}/seo/${c.slug})`)
    .join("\n");

  const text = `# ${config.businessName}

> A Canadian web design and digital marketing agency. We build and maintain
> websites and run SEO, Google Ads, social media and graphic design for
> businesses across Canada. Head office in Toronto, Ontario.

Contact: ${config.phone} | ${salesEmail}
${t ? `Toronto: ${t.street}, ${t.city}, ${t.province} ${t.postalCode}, Canada` : ""}
${b ? `Brampton: ${b.street}, ${b.city}, ${b.province} ${b.postalCode}, Canada` : ""}

## Services

${services}

## Where we work

We serve clients Canada-wide. These pages cover a specific city:

${cities}

## Local SEO by city

${seoCities}

## About the company

- [Who we are](${base}/who-we-are): the team and how we work.
- [Our story](${base}/our-story): how the agency started and grew.
- [Portfolio](${base}/portfolio): websites we have built.
- [Testimonials](${base}/testimonials): what clients say.
- [FAQ](${base}/faq): pricing, timelines, process and what is included.
- [Contact](${base}/contact): request a quote.
- [Careers](${base}/careers): open roles.

## Reference

- [Blog](${base}/blog): guides on web design, SEO and digital marketing.
- [HTML sitemap](${base}/sitemap): every page, grouped.
- [XML sitemap](${base}/sitemap.xml)
- [Privacy policy](${base}/privacy-policy)
- [Terms and conditions](${base}/terms-and-conditions)
- [Refund policy](${base}/refund-policy)
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  });
}
