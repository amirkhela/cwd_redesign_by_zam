import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import { getAllPosts } from "@/lib/blog";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { SEO_CITIES } from "../sitemap";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Sitemap | Canadian Web Designs" },
  description:
    "Browse every page on Canadian Web Designs — services, locations we serve, SEO city pages, and our full blog archive — all in one place.",
  alternates: { canonical: "/sitemap" },
};

const mainPages = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/our-story", label: "Our Story" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const landingPages = [
  { href: "/seo", label: "SEO Services" },
  { href: "/maintenance", label: "Website Maintenance" },
  { href: "/web-design-company", label: "Web Design Company" },
  { href: "/web-design-agency", label: "Web Design Agency" },
  { href: "/web-designers-near-me", label: "Web Designers Near Me" },
  { href: "/mobile-web-design-in-toronto", label: "Mobile Web Design in Toronto" },
  { href: "/ecommerce-website-design-toronto", label: "eCommerce Website Design Toronto" },
];

const blogCategories = [
  { href: "/blog", label: "All Posts" },
  { href: "/blog/web-design", label: "Web Design" },
  { href: "/blog/seo", label: "SEO" },
  { href: "/blog/digital-marketing", label: "Digital Marketing" },
];

function cityName(slug: string): string {
  return config.cities.find((c) => c.slug === slug)?.name ?? slug;
}

function LinkColumns({ links, cols = 3 }: { links: { href: string; label: string }[]; cols?: 2 | 3 }) {
  return (
    <ul className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""} gap-x-8 gap-y-1`}>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className="inline-block py-1.5 text-muted hover:text-primary transition-colors duration-200">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Sitemap", href: "/sitemap" }]} />

      {/* Hero */}
      <section className="bg-dark text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Sitemap</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every page on our site in one place — services, the cities we serve, and our full blog archive.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">Main Pages</h2>
            <LinkColumns links={mainPages} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">Services</h2>
            <LinkColumns
              links={config.services.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">Popular Searches</h2>
            <LinkColumns links={landingPages} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">Web Design by City</h2>
            <LinkColumns
              links={config.cities.map((c) => ({
                href: `/locations/${c.slug}`,
                label: `Web Design ${c.name}`,
              }))}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">SEO by City</h2>
            <LinkColumns
              links={SEO_CITIES.map((slug) => ({ href: `/seo/${slug}`, label: `SEO ${cityName(slug)}` }))}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">Blog</h2>
            <LinkColumns links={blogCategories} />
            {categories.map((category) => (
              <div key={category} className="mt-8">
                <h3 className="text-lg font-bold text-dark mb-3">{category}</h3>
                <LinkColumns
                  cols={2}
                  links={posts
                    .filter((p) => p.category === category)
                    .map((p) => ({ href: `/blog/${p.slug}`, label: p.title }))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
