/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*\\.(jpg|jpeg|png|gif|svg|ico|webp|avif|woff|woff2|ttf|otf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["react", "react-dom", "next"],
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
      // Old WordPress /web-designs/[city]/ → /locations/[city]
      // Consolidates ~30,000 GSC impressions split across WP-era URLs
      // ============================================
      { source: "/web-designs/:city", destination: "/locations/:city", permanent: true },
      { source: "/web-designs/:city/", destination: "/locations/:city", permanent: true },

      
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

      // /about → /who-we-are (common alternate URL)
      { source: "/about", destination: "/who-we-are", permanent: true },
      { source: "/about/", destination: "/who-we-are", permanent: true },

      // ============================================
      // Old /seo/:city/ pages → /locations/:city
      //
      // RESTORED 2026-07-21: burnaby, victoria, surrey, halifax, barrie and
      // kitchener removed from this redirect. Search Console showed these six
      // held ~245,000 impressions across 520 SEO-intent queries before the
      // redirect sent them to /locations/:city, which sells web design, not SEO.
      // Google dropped the SEO vertical entirely: 163,749 impressions/mo → 48.
      // All six already have real, differentiated pages (dedicated routes for
      // burnaby/victoria/surrey, src/app/seo/[city] for the rest), so this is
      // purely a routing fix — no content work required.
      //
      // (toronto was already excluded — it has a dedicated /seo/toronto page)
      //
      // RESTORED 2026-07-23 (second pass): the 2026-07-21 fix restored six
      // cities but missed NINE more that also have real, rendering pages and
      // were still being shadowed by this redirect:
      //   dedicated routes  — brampton, mississauga, north-york
      //   /seo/[city] map   — calgary, vancouver, ottawa, edmonton, london, windsor
      // Year-ago 90-day impressions on these URLs: calgary 45,698 · ottawa
      // 42,656 · mississauga 23,056 · brampton 13,125 · north-york 4,333.
      // They now render instead of 301'ing to /locations/:city (web design).
      //
      // Only cities with NO page may remain below. Before adding one back,
      // confirm there is no src/app/seo/<city>/page.tsx AND the city is not a
      // key in the `cities` map inside src/app/seo/[city]/page.tsx.
      // ============================================
      {
        source: "/seo/:city(hamilton|winnipeg|richmond-hill|markham|oakville|kingston|sudbury)",
        destination: "/locations/:city",
        permanent: true,
      },
      {
        source: "/seo/:city(hamilton|winnipeg|richmond-hill|markham|oakville|kingston|sudbury)/",
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
      // Retired ghost posts (2026-07-23) — pre-2026 posts that earned zero
      // clicks AND zero impressions over a 478-day GSC window while live on
      // indexed WordPress URLs. Consolidated into the closest money page.
      // Both /blog/:slug and the legacy root-level WP URL are redirected.
      // ============================================
      { source: "/blog/toronto-small-business-website-care-why-regular-updates-keep-your-brand-credible-google-friendly", destination: "/services/website-maintenance", permanent: true },
      { source: "/toronto-small-business-website-care-why-regular-updates-keep-your-brand-credible-google-friendly", destination: "/services/website-maintenance", permanent: true },
      { source: "/toronto-small-business-website-care-why-regular-updates-keep-your-brand-credible-google-friendly/", destination: "/services/website-maintenance", permanent: true },
      { source: "/blog/5-ways-to-improve-your-websites-seo-in-2025", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/5-ways-to-improve-your-websites-seo-in-2025", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/5-ways-to-improve-your-websites-seo-in-2025/", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/blog/why-every-business-needs-a-mobile-first-website", destination: "/mobile-web-design-in-toronto", permanent: true },
      { source: "/why-every-business-needs-a-mobile-first-website", destination: "/mobile-web-design-in-toronto", permanent: true },
      { source: "/why-every-business-needs-a-mobile-first-website/", destination: "/mobile-web-design-in-toronto", permanent: true },
      { source: "/blog/website-development-for-canadian-businesses", destination: "/services/web-design-development", permanent: true },
      { source: "/website-development-for-canadian-businesses", destination: "/services/web-design-development", permanent: true },
      { source: "/website-development-for-canadian-businesses/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/enhancing-your-online-visibility-the-power-of-seo-in-toronto-canada", destination: "/services/seo", permanent: true },
      { source: "/enhancing-your-online-visibility-the-power-of-seo-in-toronto-canada", destination: "/services/seo", permanent: true },
      { source: "/enhancing-your-online-visibility-the-power-of-seo-in-toronto-canada/", destination: "/services/seo", permanent: true },
      { source: "/blog/crafting-digital-landscapes-exploring-the-essence-of-canadian-web-design-in-toronto", destination: "/locations/toronto", permanent: true },
      { source: "/crafting-digital-landscapes-exploring-the-essence-of-canadian-web-design-in-toronto", destination: "/locations/toronto", permanent: true },
      { source: "/crafting-digital-landscapes-exploring-the-essence-of-canadian-web-design-in-toronto/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/canada-web-design-elevating-your-online-presence", destination: "/blog/best-web-design-canada", permanent: true },
      { source: "/canada-web-design-elevating-your-online-presence", destination: "/blog/best-web-design-canada", permanent: true },
      { source: "/canada-web-design-elevating-your-online-presence/", destination: "/blog/best-web-design-canada", permanent: true },
      { source: "/blog/mastering-web-design-fundamentals", destination: "/services/web-design-development", permanent: true },
      { source: "/mastering-web-design-fundamentals", destination: "/services/web-design-development", permanent: true },
      { source: "/mastering-web-design-fundamentals/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/5-best-strategies-for-incorporating-chatgpt-into-your-business", destination: "/blog/top-10-ai-tools-for-digital-marketing", permanent: true },
      { source: "/5-best-strategies-for-incorporating-chatgpt-into-your-business", destination: "/blog/top-10-ai-tools-for-digital-marketing", permanent: true },
      { source: "/5-best-strategies-for-incorporating-chatgpt-into-your-business/", destination: "/blog/top-10-ai-tools-for-digital-marketing", permanent: true },
      { source: "/blog/5-tips-on-how-to-enhance-website-security", destination: "/services/website-maintenance", permanent: true },
      { source: "/5-tips-on-how-to-enhance-website-security", destination: "/services/website-maintenance", permanent: true },
      { source: "/5-tips-on-how-to-enhance-website-security/", destination: "/services/website-maintenance", permanent: true },
      { source: "/blog/5-ways-usability-analysis-to-enhance-website-performance", destination: "/services/web-design-development", permanent: true },
      { source: "/5-ways-usability-analysis-to-enhance-website-performance", destination: "/services/web-design-development", permanent: true },
      { source: "/5-ways-usability-analysis-to-enhance-website-performance/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/blockchain-technology", destination: "/blog", permanent: true },
      { source: "/blockchain-technology", destination: "/blog", permanent: true },
      { source: "/blockchain-technology/", destination: "/blog", permanent: true },
      { source: "/blog/chatbots-and-its-importance", destination: "/services/ai-consultation", permanent: true },
      { source: "/chatbots-and-its-importance", destination: "/services/ai-consultation", permanent: true },
      { source: "/chatbots-and-its-importance/", destination: "/services/ai-consultation", permanent: true },
      { source: "/blog/create-a-magnificent-entrepreneurial-journey-with-canadian-website-designs", destination: "/services/web-design-development", permanent: true },
      { source: "/create-a-magnificent-entrepreneurial-journey-with-canadian-website-designs", destination: "/services/web-design-development", permanent: true },
      { source: "/create-a-magnificent-entrepreneurial-journey-with-canadian-website-designs/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/different-digital-business-or-services-ideas", destination: "/blog", permanent: true },
      { source: "/different-digital-business-or-services-ideas", destination: "/blog", permanent: true },
      { source: "/different-digital-business-or-services-ideas/", destination: "/blog", permanent: true },
      { source: "/blog/digital-marketing-a-successful-journey", destination: "/services/seo", permanent: true },
      { source: "/digital-marketing-a-successful-journey", destination: "/services/seo", permanent: true },
      { source: "/digital-marketing-a-successful-journey/", destination: "/services/seo", permanent: true },
      { source: "/blog/enhance-your-site-speed-easy-optimization-techniques-available", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/enhance-your-site-speed-easy-optimization-techniques-available", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/enhance-your-site-speed-easy-optimization-techniques-available/", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/blog/how-wordpress-themes-influence-your-sites-seo", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/how-wordpress-themes-influence-your-sites-seo", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/how-wordpress-themes-influence-your-sites-seo/", destination: "/blog/on-page-optimization", permanent: true },
      { source: "/blog/programmatic-advertising", destination: "/services/google-ads-management", permanent: true },
      { source: "/programmatic-advertising", destination: "/services/google-ads-management", permanent: true },
      { source: "/programmatic-advertising/", destination: "/services/google-ads-management", permanent: true },
      { source: "/blog/website-designs-and-its-basic-elements", destination: "/services/web-design-development", permanent: true },
      { source: "/website-designs-and-its-basic-elements", destination: "/services/web-design-development", permanent: true },
      { source: "/website-designs-and-its-basic-elements/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/website-designs-optimizing-with-the-ux-design-honeycomb", destination: "/services/web-design-development", permanent: true },
      { source: "/website-designs-optimizing-with-the-ux-design-honeycomb", destination: "/services/web-design-development", permanent: true },
      { source: "/website-designs-optimizing-with-the-ux-design-honeycomb/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/website-designs-using-social-proofing-techniques", destination: "/services/web-design-development", permanent: true },
      { source: "/website-designs-using-social-proofing-techniques", destination: "/services/web-design-development", permanent: true },
      { source: "/website-designs-using-social-proofing-techniques/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/banner-design-services", destination: "/services/graphic-design", permanent: true },
      { source: "/banner-design-services", destination: "/services/graphic-design", permanent: true },
      { source: "/banner-design-services/", destination: "/services/graphic-design", permanent: true },
      { source: "/blog/best-graphic-design-service-canada", destination: "/services/graphic-design", permanent: true },
      { source: "/best-graphic-design-service-canada", destination: "/services/graphic-design", permanent: true },
      { source: "/best-graphic-design-service-canada/", destination: "/services/graphic-design", permanent: true },
      { source: "/blog/consulting-services", destination: "/services/ai-consultation", permanent: true },
      { source: "/consulting-services", destination: "/services/ai-consultation", permanent: true },
      { source: "/consulting-services/", destination: "/services/ai-consultation", permanent: true },
      { source: "/blog/integrated-marketing-tools", destination: "/services/seo", permanent: true },
      { source: "/integrated-marketing-tools", destination: "/services/seo", permanent: true },
      { source: "/integrated-marketing-tools/", destination: "/services/seo", permanent: true },

      // ============================================
      // Blog posts cannibalizing a live money page (2026-07-23)
      // Each duplicated the topic of an existing service/location page while
      // ranking far below it. NOTE: web-designers-near-me,
      // ecommerce-website-design-toronto and mobile-web-design-in-toronto are
      // ALSO real top-level routes — only the /blog/ prefix may be redirected
      // for those three, or the root URL would redirect to itself.
      // ============================================
      { source: "/blog/canadian-web-designs-in-brampton", destination: "/locations/brampton", permanent: true },
      { source: "/canadian-web-designs-in-brampton", destination: "/locations/brampton", permanent: true },
      { source: "/canadian-web-designs-in-brampton/", destination: "/locations/brampton", permanent: true },
      { source: "/blog/top-5-web-design-companies-in-toronto", destination: "/web-design-company", permanent: true },
      { source: "/top-5-web-design-companies-in-toronto", destination: "/web-design-company", permanent: true },
      { source: "/top-5-web-design-companies-in-toronto/", destination: "/web-design-company", permanent: true },
      { source: "/blog/web-designers-near-me", destination: "/web-designers-near-me", permanent: true },
      { source: "/blog/ecommerce-website-design-toronto", destination: "/ecommerce-website-design-toronto", permanent: true },
      { source: "/blog/mobile-web-design-in-toronto", destination: "/mobile-web-design-in-toronto", permanent: true },

      // Blog consolidations (duplicate/cannibalizing posts → canonical post)
      // WordPress-cost cluster → /blog/how-much-does-a-wordpress-website-cost
      { source: "/blog/how-much-does-a-wordpress-website-cost-in-canada",                    destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/how-much-does-a-wordpress-website-cost-in-canada",                         destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/blog/understanding-basic-wordpress-website-costs-in-toronto-and-the-gta",  destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/understanding-basic-wordpress-website-costs-in-toronto-and-the-gta",       destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      // Maintenance-cost cluster → /blog/how-much-does-website-maintenance-really-cost
      { source: "/blog/understanding-website-maintenance-costs-in-toronto-a-comprehensive-guide", destination: "/blog/how-much-does-website-maintenance-really-cost", permanent: true },
      { source: "/understanding-website-maintenance-costs-in-toronto-a-comprehensive-guide",      destination: "/blog/how-much-does-website-maintenance-really-cost", permanent: true },
      { source: "/blog/understanding-website-maintenance-costs-in-toronto",                       destination: "/blog/how-much-does-website-maintenance-really-cost", permanent: true },
      { source: "/understanding-website-maintenance-costs-in-toronto",                            destination: "/blog/how-much-does-website-maintenance-really-cost", permanent: true },
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
