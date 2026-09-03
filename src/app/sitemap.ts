import type { MetadataRoute } from "next";
import { getConfig } from "@/lib/client-config";
import { getAllPosts } from "@/lib/blog";

const config = getConfig();
const BASE_URL = `https://${config.domain}`;

// Only cities whose /seo/[city] returns 200. The others still 301 to /locations
// (see next.config.mjs), and a sitemap must list final 200 URLs only — declaring
// redirects wastes crawl budget and sends mixed indexing signals. Verified live
// 2026-07-22: these 12 serve 200; mississauga/brampton/north-york/ottawa/windsor/
// richmond-hill/edmonton/vancouver/calgary/london still redirect and are excluded.
// Only cities whose /seo/<city> URL returns 200 belong here — a sitemap must
// never list a redirecting URL. Expanded 2026-07-23 with the nine cities
// un-shadowed in next.config.mjs (they render real pages).
export const SEO_CITIES = [
  "toronto", "burnaby", "victoria", "surrey", "halifax", "oshawa",
  "barrie", "vaughan", "kitchener", "saskatoon", "montreal", "ladner",
  "brampton", "mississauga", "north-york",
  "calgary", "vancouver", "ottawa", "edmonton", "london", "windsor",
];

// Stable content date for the evergreen marketing pages. Using new Date() here
// stamped every single fetch with "modified just now", which trains Google to
// distrust lastmod and wastes crawl budget re-checking unchanged pages.
// Bump this only when these pages genuinely change. Blog posts keep their own
// frontmatter dates and are unaffected.
const CONTENT_UPDATED = new Date("2026-08-29T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = CONTENT_UPDATED;

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/who-we-are`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/our-story`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/blog/web-design`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog/seo`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog/digital-marketing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/maintenance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/web-design-company`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-design-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/web-designers-near-me`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mobile-web-design-in-toronto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ecommerce-website-design-toronto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/sitemap`, lastModified: now, changeFrequency: "weekly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = config.services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = config.cities.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const seoCityPages: MetadataRoute.Sitemap = SEO_CITIES.map((city) => ({
    url: `${BASE_URL}/seo/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => {
    const d = new Date(post.date);
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: isNaN(d.getTime()) ? now : d,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...servicePages, ...locationPages, ...seoCityPages, ...blogPosts];
}
