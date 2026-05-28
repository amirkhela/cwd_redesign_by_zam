/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    outputFileTracingIncludes: {
      "/blog": ["./content/blog/**/*.md"],
    },
  },
  async redirects() {
    return [
      // What We Do navigation alias
      { source: "/what-we-do", destination: "/services/web-design-development", permanent: true },
      { source: "/what-we-do/", destination: "/services/web-design-development", permanent: true },

      
      // ============================================
      // Service Slug Aliases
      // ============================================
      {
        source: "/services/web-design",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/services/social-media",
        destination: "/services/social-media-optimization",
        permanent: true,
      },
      {
        source: "/services/maintenance",
        destination: "/services/website-maintenance",
        permanent: true,
      },

      // terms-conditions without 'and'
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms-conditions/",
        destination: "/terms-and-conditions",
        permanent: true,
      },

      // ============================================
      // Service Pages — WordPress → Vercel
      // ============================================
      {
        source: "/website-design-development",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/website-design-development/",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/search-engine-optimization",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/search-engine-optimization/",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/graphic-design",
        destination: "/services/graphic-design",
        permanent: true,
      },
      {
        source: "/graphic-design/",
        destination: "/services/graphic-design",
        permanent: true,
      },
      {
        source: "/social-media-optimization",
        destination: "/services/social-media-optimization",
        permanent: true,
      },
      {
        source: "/social-media-optimization/",
        destination: "/services/social-media-optimization",
        permanent: true,
      },
      {
        source: "/ai-consultation",
        destination: "/services/ai-consultation",
        permanent: true,
      },
      {
        source: "/ai-consultation/",
        destination: "/services/ai-consultation",
        permanent: true,
      },

      // ============================================
      // Page Aliases — WordPress → Vercel
      // ============================================
      {
        source: "/about-us",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/get-in-touch",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/get-in-touch/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/quote/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-portfolio",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/our-portfolio/",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms-of-service/",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/services/web-design-development",
        permanent: true,
      },

      // ============================================
      // Old WordPress Portfolio URLs
      // ============================================
      { source: "/website-portfolio/:slug", destination: "/portfolio", permanent: true },

      // ============================================
      // Old WordPress Landing Pages — redirect to service pages
      // ============================================
      { source: "/mobile-web-design-in-toronto",   destination: "/services/web-design-development", permanent: true },
      { source: "/mobile-web-design-in-toronto/",  destination: "/services/web-design-development", permanent: true },
      { source: "/ecommerce-website-design-toronto",  destination: "/services/web-design-development", permanent: true },
      { source: "/ecommerce-website-design-toronto/", destination: "/services/web-design-development", permanent: true },

      // ============================================
      // Old /seo/:city/ pages → /locations/:city
      // (toronto excluded — has a dedicated /seo/toronto page)
      // ============================================
      {
        source: "/seo/:city(brampton|burnaby|victoria|surrey|mississauga|calgary|vancouver|ottawa|edmonton|hamilton|north-york|barrie|london|kitchener|winnipeg|halifax|richmond-hill|markham|oakville|windsor|kingston|sudbury)",
        destination: "/locations/:city",
        permanent: true,
      },
      {
        source: "/seo/:city(brampton|burnaby|victoria|surrey|mississauga|calgary|vancouver|ottawa|edmonton|hamilton|north-york|barrie|london|kitchener|winnipeg|halifax|richmond-hill|markham|oakville|windsor|kingston|sudbury)/",
        destination: "/locations/:city",
        permanent: true,
      },

      // ============================================
      // Location Pages — /web-designs/:city → /locations/:city
      // ============================================
      {
        source: "/web-designs/:city",
        destination: "/locations/:city",
        permanent: true,
      },
      {
        source: "/web-design/:city",
        destination: "/locations/:city",
        permanent: true,
      },

      // ============================================
      // City slug redirects — /web-design-{city} → /locations/{city}
      // ============================================
      { source: "/web-design-toronto",       destination: "/locations/toronto",       permanent: true },
      { source: "/web-design-mississauga",   destination: "/locations/mississauga",   permanent: true },
      { source: "/web-design-brampton",      destination: "/locations/brampton",      permanent: true },
      { source: "/web-design-calgary",       destination: "/locations/calgary",       permanent: true },
      { source: "/web-design-vancouver",     destination: "/locations/vancouver",     permanent: true },
      { source: "/web-design-montreal",      destination: "/locations/montreal",      permanent: true },
      { source: "/web-design-edmonton",      destination: "/locations/edmonton",      permanent: true },
      { source: "/web-design-ottawa",        destination: "/locations/ottawa",        permanent: true },
      { source: "/web-design-north-york",    destination: "/locations/north-york",    permanent: true },
      { source: "/web-design-richmond-hill", destination: "/locations/richmond-hill", permanent: true },
      { source: "/web-design-kitchener",     destination: "/locations/kitchener",     permanent: true },
      { source: "/web-design-halifax",       destination: "/locations/halifax",       permanent: true },
      { source: "/web-design-surrey",        destination: "/locations/surrey",        permanent: true },
      { source: "/web-design-london",        destination: "/locations/london",        permanent: true },
      { source: "/web-design-victoria",      destination: "/locations/victoria",      permanent: true },
      { source: "/web-design-windsor",       destination: "/locations/windsor",       permanent: true },
      { source: "/web-design-oshawa",        destination: "/locations/oshawa",        permanent: true },
      { source: "/web-design-vaughan",       destination: "/locations/vaughan",       permanent: true },
      { source: "/web-design-burnaby",       destination: "/locations/burnaby",       permanent: true },
      { source: "/web-design-ladner",        destination: "/locations/ladner",        permanent: true },
      { source: "/web-design-saskatoon",     destination: "/locations/saskatoon",     permanent: true },
      { source: "/web-design-barrie",        destination: "/locations/barrie",        permanent: true },

      // ============================================
      // Blog Posts — WordPress root-level → /blog/:slug
      // ============================================
      {
        source: "/5-ways-to-improve-your-websites-seo-in-2025",
        destination: "/blog/5-ways-to-improve-your-websites-seo-in-2025",
        permanent: true,
      },
      {
        source: "/why-every-business-needs-a-mobile-first-website",
        destination: "/blog/why-every-business-needs-a-mobile-first-website",
        permanent: true,
      },
      // Slug-shortened blog posts (old WP slug → current slug)
      { source: "/why-you-need-seo-in-your-business-in-2021",   destination: "/blog/why-you-need-seo-in-your-business",          permanent: true },
      { source: "/why-you-need-seo-in-your-business-in-2021/",  destination: "/blog/why-you-need-seo-in-your-business",          permanent: true },
      { source: "/why-you-need-pay-per-click-like-google-ads-marketing",  destination: "/blog/why-you-need-pay-per-click-like-google-ads", permanent: true },
      { source: "/why-you-need-pay-per-click-like-google-ads-marketing/", destination: "/blog/why-you-need-pay-per-click-like-google-ads", permanent: true },
      { source: "/how-to-migrate-from-shopify-to-woocommerce",  destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/how-to-migrate-from-shopify-to-woocommerce/", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      // Root-level WP blog posts still indexed by Google
      { source: "/top-modern-web-design-trends",                                       destination: "/blog/top-modern-web-design-trends",                                       permanent: true },
      { source: "/top-modern-web-design-trends/",                                      destination: "/blog/top-modern-web-design-trends",                                       permanent: true },
      { source: "/best-web-design-companies-near-me-how-to-choose-the-right-one",     destination: "/blog/best-web-design-companies-near-me-how-to-choose-the-right-one",     permanent: true },
      { source: "/best-web-design-companies-near-me-how-to-choose-the-right-one/",    destination: "/blog/best-web-design-companies-near-me-how-to-choose-the-right-one",     permanent: true },
      { source: "/5-essential-web-design-trends-from-canada-to-upgrade-your-website",  destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/5-essential-web-design-trends-from-canada-to-upgrade-your-website/", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },

      // ============================================
      // WordPress Infrastructure URLs
      // ============================================
      // Preserve legacy logo path used by client sites
      { source: "/wp-content/uploads/2019/07/cwd-white.png", destination: "/logos/cwd-white.png", permanent: false },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-includes/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/xmlrpc.php",
        destination: "/",
        permanent: true,
      },

      // ============================================
      // WordPress Taxonomy & Feed URLs
      // ============================================
      {
        source: "/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/author/:slug",
        destination: "/who-we-are",
        permanent: true,
      },

      // ============================================
      // Common WordPress Pagination
      // ============================================
      {
        source: "/page/:num",
        destination: "/",
        permanent: true,
      },

      // ============================================
      // WordPress Sitemap URLs → New Sitemap
      // ============================================
      {
        source: "/wp-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/wp-sitemap-:path*",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/comments/feed/:path*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
