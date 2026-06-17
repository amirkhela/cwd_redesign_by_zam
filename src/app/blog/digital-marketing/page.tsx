import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "Digital Marketing Guides for Canadian Businesses | CWD Blog",
  description: "Practical digital marketing strategies, Google Ads tips & social media guides for Canadian businesses — from Canada's top-rated full-service digital agency. Grow smarter.",
  alternates: { canonical: "/blog/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Strategies for Canadian Companies | Canadian Web Designs Blog",
    description: "Digital marketing strategies, Google Ads tips, and social media guides for Canadian businesses.",
    url: `https://${config.domain}/blog/digital-marketing`,
    siteName: config.businessName,
    locale: "en_CA",
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Digital Marketing Strategies for Canadian Companies — Canadian Web Designs Blog",
  description: "Digital marketing strategies, Google Ads tips, and social media guides for Canadian businesses. Expert advice from Canada's top digital marketing agency.",
  url: `https://${config.domain}/blog/digital-marketing`,
  publisher: {
    "@type": "Organization",
    name: config.businessName,
    url: `https://${config.domain}`,
    logo: { "@type": "ImageObject", url: `https://${config.domain}/logos/logo.webp` },
  },
};

export default function DigitalMarketingCategoryPage() {
  const posts = getAllPosts().filter((p) =>
    p.category?.toLowerCase().includes("digital marketing") ||
    p.category?.toLowerCase().includes("marketing") ||
    p.category?.toLowerCase().includes("social media") ||
    p.category?.toLowerCase().includes("google ads") ||
    p.category?.toLowerCase().includes("ppc")
  );

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }, { name: "Digital Marketing", href: "/blog/digital-marketing" }]} />
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
              <span className="text-white/80 text-sm font-medium tracking-wide">Digital Marketing Strategies</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}>
              Digital Marketing Strategies for{" "}<span className="gradient-text-animated">Canadian Companies</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed">
              Proven digital marketing strategies written for Canadian business owners. Our guides cover Google Ads, social media marketing, content marketing, email campaigns, and more — with a focus on what actually works in the Canadian market. Learn how to attract more customers online, spend your marketing budget wisely, and measure the results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-section-y bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No digital marketing articles found.</p>
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
