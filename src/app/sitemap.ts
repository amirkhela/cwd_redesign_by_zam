import type { MetadataRoute } from "next";
import { getConfig } from "@/lib/client-config";
import { getAllPosts } from "@/lib/blog";

const config = getConfig();
const BASE_URL = `https://${config.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL },
    { url: `${BASE_URL}/who-we-are` },
    { url: `${BASE_URL}/our-story` },
    { url: `${BASE_URL}/portfolio` },
    { url: `${BASE_URL}/contact` },
    { url: `${BASE_URL}/testimonials` },
    { url: `${BASE_URL}/blog` },
    { url: `${BASE_URL}/faq` },
    { url: `${BASE_URL}/seo/toronto` },
    { url: `${BASE_URL}/seo/mississauga` },
    { url: `${BASE_URL}/seo/brampton` },
    { url: `${BASE_URL}/seo/north-york` },
    { url: `${BASE_URL}/seo/burnaby` },
    { url: `${BASE_URL}/seo/victoria` },
  ];

  const servicePages: MetadataRoute.Sitemap = config.services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
  }));

  const locationPages: MetadataRoute.Sitemap = config.cities.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => {
    const d = new Date(post.date);
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: isNaN(d.getTime()) ? new Date() : d,
    };
  });

  return [...staticPages, ...servicePages, ...locationPages, ...blogPosts];
}
