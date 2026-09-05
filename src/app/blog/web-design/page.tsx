import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: { absolute: "Web Design Tips & Guides for Canadian Businesses | Canadian Web Designs" },
  description: "Expert web design tips, trends & tutorials for Canadian businesses — responsive design, UX best practices, conversion rate optimization, and building websites that generate real customers.",
  alternates: { canonical: "/blog/web-design" },
  openGraph: {
    title: "Web Design Articles for Canadian Businesses | Canadian Web Designs Blog",
    description: "Web design tips, trends, and tutorials for Canadian businesses.",
    url: `https://${config.domain}/blog/web-design`,
    siteName: config.businessName,
    locale: "en_CA",
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Web Design Articles for Canadian Businesses — Canadian Web Designs Blog",
  description: "Web design tips, trends, and tutorials for Canadian businesses. Responsive design, UX, and conversion optimization from Canada's top web design agency.",
  // This page already declares a CollectionPage, so it carries the canonical
  // #webpage @id and BreadcrumbSchema is told not to emit a second node.
  "@id": `https://${config.domain}/blog/web-design#webpage`,
  url: `https://${config.domain}/blog/web-design`,
  isPartOf: { "@id": `https://${config.domain}/#website` },
  about: { "@id": `https://${config.domain}/#organization` },
  inLanguage: "en-CA",
  publisher: { "@id": `https://${config.domain}/#organization` },
};

export default function WebDesignCategoryPage() {
  const posts = getAllPosts().filter((p) =>
    p.category?.toLowerCase().includes("web design") ||
    p.category?.toLowerCase().includes("web development") ||
    p.category?.toLowerCase().includes("website")
  );

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }, { name: "Web Design", href: "/blog/web-design" }]} emitWebPage={false} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Web Design Articles</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}>
              Web Design Articles for{" "}<span className="gradient-text-animated">Canadian Businesses</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed">
              Practical web design tips, industry trends, and best practices written specifically for Canadian businesses. Whether you&apos;re building your first website or optimizing an existing one, our guides cover responsive design, mobile UX, conversion rate optimization, page speed, and everything in between — so your website actually works as your best salesperson.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-section-y bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No web design articles found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300 reveal"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                  {post.featuredImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.featuredImage} alt={post.title} className="w-full h-44 object-cover" />
                  )}
                  <div className="p-6">
                    <span className="text-xs font-bold text-[#00AADF] uppercase tracking-widest">{post.category}</span>
                    <h2 className="text-gray-900 font-black text-lg mt-2 mb-2 line-clamp-2 group-hover:text-[#00AADF] transition-colors duration-200">{post.title}</h2>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{post.description}</p>
                    <time className="block text-xs text-gray-400 mt-4">
                      {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#00AADF] text-[#00AADF] font-bold rounded-btn hover:bg-[#00AADF] hover:text-white transition-all duration-300">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
