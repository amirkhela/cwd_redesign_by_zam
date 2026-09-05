import { getConfig } from "@/lib/client-config";
import { getAllPosts } from "@/lib/blog";

/**
 * /llms-full.txt — the expanded companion to /llms.txt.
 *
 * WHY BOTH. `llms.txt` is a MAP: what this business is and which URL answers
 * which question, short enough that an assistant reads it in one pass before
 * deciding where to go. That file must stay short, so it deliberately says
 * nothing about the 74 articles this site has published — which is exactly the
 * material an assistant needs for "has anyone written about X", and it is the
 * one thing on the site a competitor cannot copy quickly.
 *
 * So the catalogue lives here instead of bloating the map. `llms.txt` links to
 * it; an assistant that only wants the map pays nothing for the catalogue.
 *
 * FIVE RULES, none of which may be weakened:
 *
 * 1. EVERY WORD IS THE POST'S OWN. Title, date, category and description come
 *    from each article's front matter through getAllPosts(). Nothing here is
 *    written for this file, and nothing is summarised — a summary of a summary
 *    is where an assistant starts citing claims the article does not make.
 *
 * 2. IT MAKES NO CLAIM THE SITE DOES NOT MAKE. No rating, no review count, no
 *    client names, no "top-rated". An LLM repeats this verbatim; the same rule
 *    llms.txt carries, and `verify-seo` asserts it on llms.txt for exactly this
 *    reason.
 *
 * 3. DATES ARE PUBLISHED, NOT INVENTED. A stale guide is still useful if the
 *    reader can see it is from 2024. Omitting the date is what makes old advice
 *    look current.
 *
 * 4. IT IS DERIVED, NEVER HAND-MAINTAINED. A hand-written list of 74 posts is
 *    wrong the first time somebody publishes the 75th. This renders from the
 *    same source the blog pages render from, so it cannot drift.
 *
 * 5. TEXT/PLAIN AND STATIC. No request parsing, nothing an unauthenticated
 *    caller can influence — it is served to every crawler on the internet.
 */

export const dynamic = "force-static";

export function GET() {
  const config = getConfig();
  const base = `https://${config.domain}`;

  const posts = getAllPosts();

  // Group by the post's own category so the catalogue is navigable rather than
  // a flat wall of 74 lines. Order inside a group is newest first: an assistant
  // scanning for current advice should meet the current advice.
  const byCategory = new Map<string, typeof posts>();
  for (const p of posts) {
    const key = (p.category || "Uncategorised").trim();
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key)!.push(p);
  }

  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
  };

  const sections = [...byCategory.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .map(([category, list]) => {
      const lines = [...list]
        .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
        .map((p) => {
          const date = fmtDate(p.date);
          const when = date ? ` (${date})` : "";
          const desc = p.description ? `\n  ${p.description}` : "";
          return `- [${p.title}](${base}/blog/${p.slug})${when}${desc}`;
        })
        .join("\n");
      return `### ${category}\n\n${lines}`;
    })
    .join("\n\n");

  const text = `# ${config.businessName} — full content index

> The expanded companion to ${base}/llms.txt, which is the short map of this
> business and its services. This file is the article catalogue: every guide
> published on the site, with its own title, date and description.
>
> Every line below is the article's own front matter. Nothing here is
> summarised or rewritten, and no claim is made that the pages do not make.

Site map: ${base}/llms.txt
Blog index: ${base}/blog
Articles: ${posts.length}

## Guides

${sections}
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  });
}
