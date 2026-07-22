import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  description: string;
  keywords: string[];
  category: string;
  featuredImage?: string;
  content?: string;
  updated?: string;
  faq?: { q: string; a: string }[];
}

const postsDirectory = path.join(process.cwd(), "content/blog");
// Strip images still hosted on the decommissioned WordPress domain
const OLD_WP = /^https?:\/\/old\.canadianwebdesigns\.ca\//;
// Leading "YYYY-MM-DD-" that the daily automation prepends to filenames/slugs.
const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

// The canonical, indexable slug for a post. Prefer the frontmatter `slug`,
// fall back to the filename, then strip any leading date prefix so URLs are
// clean (e.g. /blog/toronto-web-design-2026-complete-guide, NOT
// /blog/2026-07-02-toronto-web-design-2026-complete-guide). This is the single
// source of truth used by getAllPosts, getAllSlugs (sitemap + static params)
// and getPostBySlug so links, canonical tags and redirects all agree.
function canonicalSlug(fileName: string, data: { slug?: unknown }): string {
  const base =
    (typeof data.slug === "string" && data.slug.trim()) ||
    fileName.replace(/\.md$/, "");
  return base.replace(DATE_PREFIX, "");
}

// Map every recognized alias (canonical slug, raw frontmatter slug, bare
// filename) -> filename, so historical/ugly URLs still resolve to the post and
// can be 301'd to the canonical slug. Memoized: post files are fixed per build.
let aliasMap: Map<string, string> | null = null;
function getAliasMap(): Map<string, string> {
  if (aliasMap) return aliasMap;
  const map = new Map<string, string>();
  if (!fs.existsSync(postsDirectory)) return (aliasMap = map);
  for (const fileName of fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"))) {
    const { data } = matter(fs.readFileSync(path.join(postsDirectory, fileName), "utf8"));
    const fileNoExt = fileName.replace(/\.md$/, "");
    const aliases = [canonicalSlug(fileName, data), fileNoExt];
    if (typeof data.slug === "string" && data.slug.trim()) aliases.push(data.slug.trim());
    for (const a of aliases) if (a && !map.has(a)) map.set(a, fileName);
  }
  return (aliasMap = map);
}

function sanitizeHtml(raw: string): string {
  return raw
    // Remove injected <script> tags (WordPress malware / SEO spam)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi, "")
    // Drop <figure> blocks whose image is hosted on the dead WordPress domain
    // (old.canadianwebdesigns.ca returns 404) so nothing renders broken.
    .replace(
      /<figure\b[^>]*>\s*(?:<a\b[^>]*>\s*)?<img\b[^>]*old\.canadianwebdesigns\.ca[^>]*>(?:\s*<\/a>)?(?:\s*<figcaption[^>]*>[\s\S]*?<\/figcaption>)?\s*<\/figure>/gi,
      ""
    )
    // Drop bare <img> tags pointing at the dead WordPress domain.
    .replace(/<img\b[^>]*old\.canadianwebdesigns\.ca[^>]*>/gi, "");
}

// Coerce author to a string. Some older posts store author as an object
// { name, picture }; rendering that object directly crashes prerendering
// (React child error) and breaks the whole production build. Always return
// a display name, defaulting to "Amir Khela" for E-E-A-T byline consistency.
function normalizeAuthor(author: unknown): string {
  const name =
    author && typeof author === "object"
      ? (author as { name?: string }).name
      : (author as string | undefined);
  return name && name !== "Canadian Web Designs" ? name : "Amir Khela";
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    const slug = canonicalSlug(fileName, data);

    const rawImage: string | undefined = data.featuredImage;
    const featuredImage =
      rawImage && !OLD_WP.test(rawImage) ? rawImage : undefined;

    return {
      slug,
      title: data.title,
      date: data.date,
      author: normalizeAuthor(data.author),
      description: data.description,
      keywords: data.keywords ?? [],
      category: data.category,
      featuredImage,
    } as BlogPost;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Resolve the requested slug (canonical, raw frontmatter, or bare filename)
  // to the actual file so old/ugly URLs still return the post.
  const fileName = getAliasMap().get(slug);
  if (!fileName) return null;
  const fullPath = path.join(postsDirectory, fileName);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content: rawContent } = matter(fileContents);

  let content: string;
  const trimmed = rawContent.trim();
  if (trimmed.startsWith("<")) {
    content = sanitizeHtml(trimmed);
  } else {
    const processed = await remark().use(html).process(rawContent);
    content = sanitizeHtml(processed.toString());
  }

  const rawImage: string | undefined = data.featuredImage;
  const featuredImage =
    rawImage && !OLD_WP.test(rawImage) ? rawImage : undefined;

  return {
    slug: canonicalSlug(fileName, data),
    title: data.title,
    date: data.date,
    author: (data.author && data.author !== "Canadian Web Designs") ? data.author : "Amir Khela",
    description: data.description,
    keywords: data.keywords ?? [],
    category: data.category,
    featuredImage,
    content,
    updated: typeof data.updated === "string" ? data.updated : undefined,
    faq: Array.isArray(data.faq) ? data.faq : undefined,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const { data } = matter(fs.readFileSync(path.join(postsDirectory, fileName), "utf8"));
      return canonicalSlug(fileName, data);
    });
}
