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
      // ============================================
      // Retired ghost posts (2026-07-24) — full corpus consolidation down to
      // the 53 optimized posts. Every removed post 301s to the closest
      // keeper or money page. .md files archived in scratchpad/retired-blogs-2026-07-24/.
      // ============================================
      { source: "/blog/affordable-seo-services-for-small-businesses", destination: "/services/seo", permanent: true },
      { source: "/affordable-seo-services-for-small-businesses", destination: "/services/seo", permanent: true },
      { source: "/affordable-seo-services-for-small-businesses/", destination: "/services/seo", permanent: true },
      { source: "/blog/search-engine-optimization-how-it-can-affect-your-business-website", destination: "/services/seo", permanent: true },
      { source: "/search-engine-optimization-how-it-can-affect-your-business-website", destination: "/services/seo", permanent: true },
      { source: "/search-engine-optimization-how-it-can-affect-your-business-website/", destination: "/services/seo", permanent: true },
      { source: "/blog/why-you-need-seo-in-your-business", destination: "/services/seo", permanent: true },
      { source: "/why-you-need-seo-in-your-business", destination: "/services/seo", permanent: true },
      { source: "/why-you-need-seo-in-your-business/", destination: "/services/seo", permanent: true },
      { source: "/blog/what-is-technical-seo-beginners-guide", destination: "/services/seo", permanent: true },
      { source: "/what-is-technical-seo-beginners-guide", destination: "/services/seo", permanent: true },
      { source: "/what-is-technical-seo-beginners-guide/", destination: "/services/seo", permanent: true },
      { source: "/blog/how-to-get-your-website-on-google-canada", destination: "/services/seo", permanent: true },
      { source: "/how-to-get-your-website-on-google-canada", destination: "/services/seo", permanent: true },
      { source: "/how-to-get-your-website-on-google-canada/", destination: "/services/seo", permanent: true },
      { source: "/blog/2026-06-09-signs-your-website-is-hurting-google-rankings", destination: "/services/seo", permanent: true },
      { source: "/2026-06-09-signs-your-website-is-hurting-google-rankings", destination: "/services/seo", permanent: true },
      { source: "/2026-06-09-signs-your-website-is-hurting-google-rankings/", destination: "/services/seo", permanent: true },
      { source: "/blog/2026-06-10-why-website-not-ranking-google", destination: "/services/seo", permanent: true },
      { source: "/2026-06-10-why-website-not-ranking-google", destination: "/services/seo", permanent: true },
      { source: "/2026-06-10-why-website-not-ranking-google/", destination: "/services/seo", permanent: true },
      { source: "/blog/google-analytics-4-vs-universal-analytics", destination: "/services/seo", permanent: true },
      { source: "/google-analytics-4-vs-universal-analytics", destination: "/services/seo", permanent: true },
      { source: "/google-analytics-4-vs-universal-analytics/", destination: "/services/seo", permanent: true },
      { source: "/blog/what-is-local-seo-canada-guide", destination: "/services/seo", permanent: true },
      { source: "/what-is-local-seo-canada-guide", destination: "/services/seo", permanent: true },
      { source: "/what-is-local-seo-canada-guide/", destination: "/services/seo", permanent: true },
      { source: "/blog/local-seo-guide-for-canadian-small-businesses", destination: "/services/seo", permanent: true },
      { source: "/local-seo-guide-for-canadian-small-businesses", destination: "/services/seo", permanent: true },
      { source: "/local-seo-guide-for-canadian-small-businesses/", destination: "/services/seo", permanent: true },
      { source: "/blog/2026-06-25-local-seo-canada-small-business-guide-2026", destination: "/services/seo", permanent: true },
      { source: "/2026-06-25-local-seo-canada-small-business-guide-2026", destination: "/services/seo", permanent: true },
      { source: "/2026-06-25-local-seo-canada-small-business-guide-2026/", destination: "/services/seo", permanent: true },
      { source: "/blog/local-seo-benefits-2021", destination: "/blog/how-does-local-seo-benefit-your-business-in-2023", permanent: true },
      { source: "/local-seo-benefits-2021", destination: "/blog/how-does-local-seo-benefit-your-business-in-2023", permanent: true },
      { source: "/local-seo-benefits-2021/", destination: "/blog/how-does-local-seo-benefit-your-business-in-2023", permanent: true },
      { source: "/blog/learn-how-to-set-up-your-google-my-business-gmb-listings", destination: "/blog/local-seo-and-gmb-optimization", permanent: true },
      { source: "/learn-how-to-set-up-your-google-my-business-gmb-listings", destination: "/blog/local-seo-and-gmb-optimization", permanent: true },
      { source: "/learn-how-to-set-up-your-google-my-business-gmb-listings/", destination: "/blog/local-seo-and-gmb-optimization", permanent: true },
      { source: "/blog/local-seo-and-custom-web-design-for-toronto-businesses", destination: "/seo/toronto", permanent: true },
      { source: "/local-seo-and-custom-web-design-for-toronto-businesses", destination: "/seo/toronto", permanent: true },
      { source: "/local-seo-and-custom-web-design-for-toronto-businesses/", destination: "/seo/toronto", permanent: true },
      { source: "/blog/affordable-seo-services-toronto", destination: "/seo/toronto", permanent: true },
      { source: "/affordable-seo-services-toronto", destination: "/seo/toronto", permanent: true },
      { source: "/affordable-seo-services-toronto/", destination: "/seo/toronto", permanent: true },
      { source: "/blog/local-seo-services-toronto", destination: "/seo/toronto", permanent: true },
      { source: "/local-seo-services-toronto", destination: "/seo/toronto", permanent: true },
      { source: "/local-seo-services-toronto/", destination: "/seo/toronto", permanent: true },
      { source: "/blog/toronto-seo-web-design-building-websites-that-rank-and-convert", destination: "/seo/toronto", permanent: true },
      { source: "/toronto-seo-web-design-building-websites-that-rank-and-convert", destination: "/seo/toronto", permanent: true },
      { source: "/toronto-seo-web-design-building-websites-that-rank-and-convert/", destination: "/seo/toronto", permanent: true },
      { source: "/blog/seo-services-london-ontario-how-local-businesses-can-rank-higher-on-google", destination: "/seo/london", permanent: true },
      { source: "/seo-services-london-ontario-how-local-businesses-can-rank-higher-on-google", destination: "/seo/london", permanent: true },
      { source: "/seo-services-london-ontario-how-local-businesses-can-rank-higher-on-google/", destination: "/seo/london", permanent: true },
      { source: "/blog/2026-06-18-seo-services-surrey-bc", destination: "/seo/surrey", permanent: true },
      { source: "/2026-06-18-seo-services-surrey-bc", destination: "/seo/surrey", permanent: true },
      { source: "/2026-06-18-seo-services-surrey-bc/", destination: "/seo/surrey", permanent: true },
      { source: "/blog/white-hat-seo-strategies-ethical-techniques-to-boost-your-website", destination: "/blog/black-hat-seo-vs-white-hat-seo", permanent: true },
      { source: "/white-hat-seo-strategies-ethical-techniques-to-boost-your-website", destination: "/blog/black-hat-seo-vs-white-hat-seo", permanent: true },
      { source: "/white-hat-seo-strategies-ethical-techniques-to-boost-your-website/", destination: "/blog/black-hat-seo-vs-white-hat-seo", permanent: true },
      { source: "/blog/2026-06-10-best-web-design-company-toronto-2026", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-10-best-web-design-company-toronto-2026", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-10-best-web-design-company-toronto-2026/", destination: "/web-design-company", permanent: true },
      { source: "/blog/2026-06-25-best-web-design-company-canada-what-to-look-for", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-25-best-web-design-company-canada-what-to-look-for", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-25-best-web-design-company-canada-what-to-look-for/", destination: "/web-design-company", permanent: true },
      { source: "/blog/2026-06-29-how-to-choose-best-web-design-company-canada", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-29-how-to-choose-best-web-design-company-canada", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-29-how-to-choose-best-web-design-company-canada/", destination: "/web-design-company", permanent: true },
      { source: "/blog/how-to-choose-best-web-design-company-toronto", destination: "/web-design-company", permanent: true },
      { source: "/how-to-choose-best-web-design-company-toronto", destination: "/web-design-company", permanent: true },
      { source: "/how-to-choose-best-web-design-company-toronto/", destination: "/web-design-company", permanent: true },
      { source: "/blog/how-to-choose-the-best-web-design-company-in-canada-2026-guide", destination: "/web-design-company", permanent: true },
      { source: "/how-to-choose-the-best-web-design-company-in-canada-2026-guide", destination: "/web-design-company", permanent: true },
      { source: "/how-to-choose-the-best-web-design-company-in-canada-2026-guide/", destination: "/web-design-company", permanent: true },
      { source: "/blog/2026-06-23-web-design-company-canada-how-to-choose-the-right-agency", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-23-web-design-company-canada-how-to-choose-the-right-agency", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-23-web-design-company-canada-how-to-choose-the-right-agency/", destination: "/web-design-company", permanent: true },
      { source: "/blog/2026-07-02-web-design-agency-canada-how-to-choose-the-right-one", destination: "/web-design-company", permanent: true },
      { source: "/2026-07-02-web-design-agency-canada-how-to-choose-the-right-one", destination: "/web-design-company", permanent: true },
      { source: "/2026-07-02-web-design-agency-canada-how-to-choose-the-right-one/", destination: "/web-design-company", permanent: true },
      { source: "/blog/2026-06-03-toronto-web-design-agency-how-to-choose-the-right-one", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-03-toronto-web-design-agency-how-to-choose-the-right-one", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-03-toronto-web-design-agency-how-to-choose-the-right-one/", destination: "/web-design-company", permanent: true },
      { source: "/blog/2026-06-29-toronto-web-design-agency-what-to-expect-in-2026", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-29-toronto-web-design-agency-what-to-expect-in-2026", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-29-toronto-web-design-agency-what-to-expect-in-2026/", destination: "/web-design-company", permanent: true },
      { source: "/blog/guide-to-choosing-a-canadian-web-design-company-in-toronto", destination: "/web-design-company", permanent: true },
      { source: "/guide-to-choosing-a-canadian-web-design-company-in-toronto", destination: "/web-design-company", permanent: true },
      { source: "/guide-to-choosing-a-canadian-web-design-company-in-toronto/", destination: "/web-design-company", permanent: true },
      { source: "/blog/web-design-agency-in-toronto-gta", destination: "/web-design-agency", permanent: true },
      { source: "/web-design-agency-in-toronto-gta", destination: "/web-design-agency", permanent: true },
      { source: "/web-design-agency-in-toronto-gta/", destination: "/web-design-agency", permanent: true },
      { source: "/blog/2026-06-12-web-design-company-toronto-custom-websites-that-rank-and-convert", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-12-web-design-company-toronto-custom-websites-that-rank-and-convert", destination: "/web-design-company", permanent: true },
      { source: "/2026-06-12-web-design-company-toronto-custom-websites-that-rank-and-convert/", destination: "/web-design-company", permanent: true },
      { source: "/blog/web-development-company-canada-how-to-choose", destination: "/web-design-company", permanent: true },
      { source: "/web-development-company-canada-how-to-choose", destination: "/web-design-company", permanent: true },
      { source: "/web-development-company-canada-how-to-choose/", destination: "/web-design-company", permanent: true },
      { source: "/blog/how-a-professional-website-design-company-can-transform-your-business-online", destination: "/web-design-company", permanent: true },
      { source: "/how-a-professional-website-design-company-can-transform-your-business-online", destination: "/web-design-company", permanent: true },
      { source: "/how-a-professional-website-design-company-can-transform-your-business-online/", destination: "/web-design-company", permanent: true },
      { source: "/blog/2026-06-09-how-much-does-a-website-cost-in-toronto-2026", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/2026-06-09-how-much-does-a-website-cost-in-toronto-2026", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/2026-06-09-how-much-does-a-website-cost-in-toronto-2026/", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/blog/how-much-does-a-website-cost-in-canada", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/how-much-does-a-website-cost-in-canada", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/how-much-does-a-website-cost-in-canada/", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/blog/the-hidden-costs-of-web-design-what-canadian-businesses-should-know", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/the-hidden-costs-of-web-design-what-canadian-businesses-should-know", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/the-hidden-costs-of-web-design-what-canadian-businesses-should-know/", destination: "/blog/how-much-does-a-wordpress-website-cost", permanent: true },
      { source: "/blog/2026-06-17-website-maintenance-canada-what-to-expect-cost-services-2026", destination: "/services/website-maintenance", permanent: true },
      { source: "/2026-06-17-website-maintenance-canada-what-to-expect-cost-services-2026", destination: "/services/website-maintenance", permanent: true },
      { source: "/2026-06-17-website-maintenance-canada-what-to-expect-cost-services-2026/", destination: "/services/website-maintenance", permanent: true },
      { source: "/blog/website-maintenance-keep-your-website-secure-fast-and-updated", destination: "/services/website-maintenance", permanent: true },
      { source: "/website-maintenance-keep-your-website-secure-fast-and-updated", destination: "/services/website-maintenance", permanent: true },
      { source: "/website-maintenance-keep-your-website-secure-fast-and-updated/", destination: "/services/website-maintenance", permanent: true },
      { source: "/blog/importance-of-regular-website-backups", destination: "/services/website-maintenance", permanent: true },
      { source: "/importance-of-regular-website-backups", destination: "/services/website-maintenance", permanent: true },
      { source: "/importance-of-regular-website-backups/", destination: "/services/website-maintenance", permanent: true },
      { source: "/blog/website-security", destination: "/services/website-maintenance", permanent: true },
      { source: "/website-security", destination: "/services/website-maintenance", permanent: true },
      { source: "/website-security/", destination: "/services/website-maintenance", permanent: true },
      { source: "/blog/wordpress-safety-101-the-4-key-standards-of-protection", destination: "/services/website-maintenance", permanent: true },
      { source: "/wordpress-safety-101-the-4-key-standards-of-protection", destination: "/services/website-maintenance", permanent: true },
      { source: "/wordpress-safety-101-the-4-key-standards-of-protection/", destination: "/services/website-maintenance", permanent: true },
      { source: "/blog/hosting-and-managed-services-your-digital-foundation-in-toronto-gta", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/hosting-and-managed-services-your-digital-foundation-in-toronto-gta", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/hosting-and-managed-services-your-digital-foundation-in-toronto-gta/", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/blog/web-hosting-provider", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/web-hosting-provider", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/web-hosting-provider/", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/blog/10-common-web-hosting-myths-debunked", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/10-common-web-hosting-myths-debunked", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/10-common-web-hosting-myths-debunked/", destination: "/blog/web-development-and-hosting-tips-and-guides", permanent: true },
      { source: "/blog/differences-between-woocommerce-vs-shopify", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/differences-between-woocommerce-vs-shopify", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/differences-between-woocommerce-vs-shopify/", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/blog/which-website-cms-is-better-for-seo", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/which-website-cms-is-better-for-seo", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/which-website-cms-is-better-for-seo/", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/blog/enhancing-wordpress-speed-8-proven-strategies", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/enhancing-wordpress-speed-8-proven-strategies", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/enhancing-wordpress-speed-8-proven-strategies/", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/blog/wordpress-and-analytics-using-tools-to-analyze-your-sites-performance", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/wordpress-and-analytics-using-tools-to-analyze-your-sites-performance", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/wordpress-and-analytics-using-tools-to-analyze-your-sites-performance/", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/blog/wordpress-for-e-commerce-a-toolbox-for-building-your-online-store", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/wordpress-for-e-commerce-a-toolbox-for-building-your-online-store", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/wordpress-for-e-commerce-a-toolbox-for-building-your-online-store/", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/blog/wix-to-wordpress-migration-tutorial-for-beginners", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/wix-to-wordpress-migration-tutorial-for-beginners", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/wix-to-wordpress-migration-tutorial-for-beginners/", destination: "/blog/how-to-migrate-from-shopify-to-woocommerce", permanent: true },
      { source: "/blog/webflow-vs-squarespace-vs-wordpress", destination: "/blog/ultimate-guide-to-the-best-website-builders", permanent: true },
      { source: "/webflow-vs-squarespace-vs-wordpress", destination: "/blog/ultimate-guide-to-the-best-website-builders", permanent: true },
      { source: "/webflow-vs-squarespace-vs-wordpress/", destination: "/blog/ultimate-guide-to-the-best-website-builders", permanent: true },
      { source: "/blog/wordpress-developer-toronto", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/wordpress-developer-toronto", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/wordpress-developer-toronto/", destination: "/blog/10-reasons-to-choose-wordpress-as-your-cms", permanent: true },
      { source: "/blog/2026-06-17-ecommerce-website-design-canada-how-to-build-an-online-store-that-sells", destination: "/ecommerce-website-design-toronto", permanent: true },
      { source: "/2026-06-17-ecommerce-website-design-canada-how-to-build-an-online-store-that-sells", destination: "/ecommerce-website-design-toronto", permanent: true },
      { source: "/2026-06-17-ecommerce-website-design-canada-how-to-build-an-online-store-that-sells/", destination: "/ecommerce-website-design-toronto", permanent: true },
      { source: "/blog/ecommerce-web-design-toronto", destination: "/ecommerce-website-design-toronto", permanent: true },
      { source: "/ecommerce-web-design-toronto", destination: "/ecommerce-website-design-toronto", permanent: true },
      { source: "/ecommerce-web-design-toronto/", destination: "/ecommerce-website-design-toronto", permanent: true },
      { source: "/blog/canadian-website-design-a-blend-of-creativity-and-user-experience", destination: "/services/web-design-development", permanent: true },
      { source: "/canadian-website-design-a-blend-of-creativity-and-user-experience", destination: "/services/web-design-development", permanent: true },
      { source: "/canadian-website-design-a-blend-of-creativity-and-user-experience/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/discovering-brilliance-the-marvels-of-canadian-web-design", destination: "/services/web-design-development", permanent: true },
      { source: "/discovering-brilliance-the-marvels-of-canadian-web-design", destination: "/services/web-design-development", permanent: true },
      { source: "/discovering-brilliance-the-marvels-of-canadian-web-design/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/discover-the-best-in-canadian-web-design-digital-innovation", destination: "/services/web-design-development", permanent: true },
      { source: "/discover-the-best-in-canadian-web-design-digital-innovation", destination: "/services/web-design-development", permanent: true },
      { source: "/discover-the-best-in-canadian-web-design-digital-innovation/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/innovative-web-design-in-canada-transform-your-site-today", destination: "/services/web-design-development", permanent: true },
      { source: "/innovative-web-design-in-canada-transform-your-site-today", destination: "/services/web-design-development", permanent: true },
      { source: "/innovative-web-design-in-canada-transform-your-site-today/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/top-notch-website-design-services-in-ontario", destination: "/services/web-design-development", permanent: true },
      { source: "/top-notch-website-design-services-in-ontario", destination: "/services/web-design-development", permanent: true },
      { source: "/top-notch-website-design-services-in-ontario/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/professional-web-page-design-solutions", destination: "/services/web-design-development", permanent: true },
      { source: "/professional-web-page-design-solutions", destination: "/services/web-design-development", permanent: true },
      { source: "/professional-web-page-design-solutions/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/professional-web-design-services-in-canada-a-complete-guide-for-business-owners", destination: "/services/web-design-development", permanent: true },
      { source: "/professional-web-design-services-in-canada-a-complete-guide-for-business-owners", destination: "/services/web-design-development", permanent: true },
      { source: "/professional-web-design-services-in-canada-a-complete-guide-for-business-owners/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/top-canada-web-design-services-for-businesses-in-2026", destination: "/services/web-design-development", permanent: true },
      { source: "/top-canada-web-design-services-for-businesses-in-2026", destination: "/services/web-design-development", permanent: true },
      { source: "/top-canada-web-design-services-for-businesses-in-2026/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/web-design-services-canada-complete-guide", destination: "/services/web-design-development", permanent: true },
      { source: "/web-design-services-canada-complete-guide", destination: "/services/web-design-development", permanent: true },
      { source: "/web-design-services-canada-complete-guide/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/2026-06-03-affordable-web-design-canada", destination: "/services/web-design-development", permanent: true },
      { source: "/2026-06-03-affordable-web-design-canada", destination: "/services/web-design-development", permanent: true },
      { source: "/2026-06-03-affordable-web-design-canada/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/affordable-web-design-canada-small-business-guide", destination: "/services/web-design-development", permanent: true },
      { source: "/affordable-web-design-canada-small-business-guide", destination: "/services/web-design-development", permanent: true },
      { source: "/affordable-web-design-canada-small-business-guide/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/affordable-web-design-for-small-businesses-in-canada-what-you-really-need-in-2026", destination: "/services/web-design-development", permanent: true },
      { source: "/affordable-web-design-for-small-businesses-in-canada-what-you-really-need-in-2026", destination: "/services/web-design-development", permanent: true },
      { source: "/affordable-web-design-for-small-businesses-in-canada-what-you-really-need-in-2026/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/web-development-services-in-canada", destination: "/services/web-design-development", permanent: true },
      { source: "/web-development-services-in-canada", destination: "/services/web-design-development", permanent: true },
      { source: "/web-development-services-in-canada/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/website-design-and-development", destination: "/services/web-design-development", permanent: true },
      { source: "/website-design-and-development", destination: "/services/web-design-development", permanent: true },
      { source: "/website-design-and-development/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/why-is-it-important-to-get-website-development", destination: "/blog/why-website-development-is-important", permanent: true },
      { source: "/why-is-it-important-to-get-website-development", destination: "/blog/why-website-development-is-important", permanent: true },
      { source: "/why-is-it-important-to-get-website-development/", destination: "/blog/why-website-development-is-important", permanent: true },
      { source: "/blog/how-long-does-it-take-to-build-a-website-canada", destination: "/services/web-design-development", permanent: true },
      { source: "/how-long-does-it-take-to-build-a-website-canada", destination: "/services/web-design-development", permanent: true },
      { source: "/how-long-does-it-take-to-build-a-website-canada/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/website-redesign-canada-when-why-and-how-much", destination: "/services/web-design-development", permanent: true },
      { source: "/website-redesign-canada-when-why-and-how-much", destination: "/services/web-design-development", permanent: true },
      { source: "/website-redesign-canada-when-why-and-how-much/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/revamp-your-website-with-trusted-website-redesign-service", destination: "/services/web-design-development", permanent: true },
      { source: "/revamp-your-website-with-trusted-website-redesign-service", destination: "/services/web-design-development", permanent: true },
      { source: "/revamp-your-website-with-trusted-website-redesign-service/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/8-types-of-websites", destination: "/services/web-design-development", permanent: true },
      { source: "/8-types-of-websites", destination: "/services/web-design-development", permanent: true },
      { source: "/8-types-of-websites/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/5-tips-on-how-we-develop-exceptional-home-service-website-designs", destination: "/services/web-design-development", permanent: true },
      { source: "/5-tips-on-how-we-develop-exceptional-home-service-website-designs", destination: "/services/web-design-development", permanent: true },
      { source: "/5-tips-on-how-we-develop-exceptional-home-service-website-designs/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/top-10-business-website-design-ideas-for-home-service-contractors", destination: "/services/web-design-development", permanent: true },
      { source: "/top-10-business-website-design-ideas-for-home-service-contractors", destination: "/services/web-design-development", permanent: true },
      { source: "/top-10-business-website-design-ideas-for-home-service-contractors/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/canadian-web-designs-marketing-strategies-for-home-service-business", destination: "/services/web-design-development", permanent: true },
      { source: "/canadian-web-designs-marketing-strategies-for-home-service-business", destination: "/services/web-design-development", permanent: true },
      { source: "/canadian-web-designs-marketing-strategies-for-home-service-business/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/custom-web-development-in-toronto", destination: "/locations/toronto", permanent: true },
      { source: "/custom-web-development-in-toronto", destination: "/locations/toronto", permanent: true },
      { source: "/custom-web-development-in-toronto/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/custom-web-design-toronto-building-websites-that-convert", destination: "/locations/toronto", permanent: true },
      { source: "/custom-web-design-toronto-building-websites-that-convert", destination: "/locations/toronto", permanent: true },
      { source: "/custom-web-design-toronto-building-websites-that-convert/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/toronto-web-design-for-businesses", destination: "/locations/toronto", permanent: true },
      { source: "/toronto-web-design-for-businesses", destination: "/locations/toronto", permanent: true },
      { source: "/toronto-web-design-for-businesses/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/2026-06-12-website-design-toronto-what-to-expect-from-a-top-agency-in-2026", destination: "/locations/toronto", permanent: true },
      { source: "/2026-06-12-website-design-toronto-what-to-expect-from-a-top-agency-in-2026", destination: "/locations/toronto", permanent: true },
      { source: "/2026-06-12-website-design-toronto-what-to-expect-from-a-top-agency-in-2026/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/2026-07-02-toronto-web-design-2026-complete-guide", destination: "/locations/toronto", permanent: true },
      { source: "/2026-07-02-toronto-web-design-2026-complete-guide", destination: "/locations/toronto", permanent: true },
      { source: "/2026-07-02-toronto-web-design-2026-complete-guide/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/web-design-toronto-2026-costs-trends-and-what-businesses-need-to-know", destination: "/locations/toronto", permanent: true },
      { source: "/web-design-toronto-2026-costs-trends-and-what-businesses-need-to-know", destination: "/locations/toronto", permanent: true },
      { source: "/web-design-toronto-2026-costs-trends-and-what-businesses-need-to-know/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/website-redesign-toronto", destination: "/locations/toronto", permanent: true },
      { source: "/website-redesign-toronto", destination: "/locations/toronto", permanent: true },
      { source: "/website-redesign-toronto/", destination: "/locations/toronto", permanent: true },
      { source: "/blog/2026-06-18-web-design-london-ontario", destination: "/locations/london", permanent: true },
      { source: "/2026-06-18-web-design-london-ontario", destination: "/locations/london", permanent: true },
      { source: "/2026-06-18-web-design-london-ontario/", destination: "/locations/london", permanent: true },
      { source: "/blog/custom-web-design-vs-website-templates-which-is-right-for-your-business", destination: "/blog/custom-web-design-canada-tips-and-guides", permanent: true },
      { source: "/custom-web-design-vs-website-templates-which-is-right-for-your-business", destination: "/blog/custom-web-design-canada-tips-and-guides", permanent: true },
      { source: "/custom-web-design-vs-website-templates-which-is-right-for-your-business/", destination: "/blog/custom-web-design-canada-tips-and-guides", permanent: true },
      { source: "/blog/who-truly-benefits-from-having-a-website", destination: "/blog/why-busines-needs-website", permanent: true },
      { source: "/who-truly-benefits-from-having-a-website", destination: "/blog/why-busines-needs-website", permanent: true },
      { source: "/who-truly-benefits-from-having-a-website/", destination: "/blog/why-busines-needs-website", permanent: true },
      { source: "/blog/online-presence-how-this-works", destination: "/blog/why-busines-needs-website", permanent: true },
      { source: "/online-presence-how-this-works", destination: "/blog/why-busines-needs-website", permanent: true },
      { source: "/online-presence-how-this-works/", destination: "/blog/why-busines-needs-website", permanent: true },
      { source: "/blog/common-mistakes-in-website-designs-you-should-know-and-how-to-fix-them", destination: "/blog/responsive-web-design-how-to-overcome-9-common-mistakes", permanent: true },
      { source: "/common-mistakes-in-website-designs-you-should-know-and-how-to-fix-them", destination: "/blog/responsive-web-design-how-to-overcome-9-common-mistakes", permanent: true },
      { source: "/common-mistakes-in-website-designs-you-should-know-and-how-to-fix-them/", destination: "/blog/responsive-web-design-how-to-overcome-9-common-mistakes", permanent: true },
      { source: "/blog/top-5-web-design-trends-in-2021", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/top-5-web-design-trends-in-2021", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/top-5-web-design-trends-in-2021/", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/blog/top-modern-web-design-trends", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/top-modern-web-design-trends", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/top-modern-web-design-trends/", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/blog/top-7-different-unique-styles-in-creating-stunning-website-design", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/top-7-different-unique-styles-in-creating-stunning-website-design", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/top-7-different-unique-styles-in-creating-stunning-website-design/", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/blog/parallax-scrolling-web-design", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/parallax-scrolling-web-design", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/parallax-scrolling-web-design/", destination: "/blog/5-essential-web-design-trends-from-canada-to-upgrade-your-website", permanent: true },
      { source: "/blog/typography-and-typefaces", destination: "/blog/what-is-flat-design", permanent: true },
      { source: "/typography-and-typefaces", destination: "/blog/what-is-flat-design", permanent: true },
      { source: "/typography-and-typefaces/", destination: "/blog/what-is-flat-design", permanent: true },
      { source: "/blog/psychology-of-web-design", destination: "/services/web-design-development", permanent: true },
      { source: "/psychology-of-web-design", destination: "/services/web-design-development", permanent: true },
      { source: "/psychology-of-web-design/", destination: "/services/web-design-development", permanent: true },
      { source: "/blog/chatgpts-impact-on-digital-marketing", destination: "/services/ai-consultation", permanent: true },
      { source: "/chatgpts-impact-on-digital-marketing", destination: "/services/ai-consultation", permanent: true },
      { source: "/chatgpts-impact-on-digital-marketing/", destination: "/services/ai-consultation", permanent: true },
      { source: "/blog/what-is-the-importance-of-ai-automation", destination: "/services/ai-consultation", permanent: true },
      { source: "/what-is-the-importance-of-ai-automation", destination: "/services/ai-consultation", permanent: true },
      { source: "/what-is-the-importance-of-ai-automation/", destination: "/services/ai-consultation", permanent: true },
      { source: "/blog/digital-marketing-services-toronto", destination: "/services/seo", permanent: true },
      { source: "/digital-marketing-services-toronto", destination: "/services/seo", permanent: true },
      { source: "/digital-marketing-services-toronto/", destination: "/services/seo", permanent: true },
      { source: "/blog/what-do-we-do-as-digital-marketers", destination: "/services/seo", permanent: true },
      { source: "/what-do-we-do-as-digital-marketers", destination: "/services/seo", permanent: true },
      { source: "/what-do-we-do-as-digital-marketers/", destination: "/services/seo", permanent: true },
      { source: "/blog/strategic-social-media-marketing-for-canadian-web-designs", destination: "/services/social-media-optimization", permanent: true },
      { source: "/strategic-social-media-marketing-for-canadian-web-designs", destination: "/services/social-media-optimization", permanent: true },
      { source: "/strategic-social-media-marketing-for-canadian-web-designs/", destination: "/services/social-media-optimization", permanent: true },
      { source: "/blog/social-media-optimization-effective-strategies-to-follow", destination: "/services/social-media-optimization", permanent: true },
      { source: "/social-media-optimization-effective-strategies-to-follow", destination: "/services/social-media-optimization", permanent: true },
      { source: "/social-media-optimization-effective-strategies-to-follow/", destination: "/services/social-media-optimization", permanent: true },
      { source: "/blog/tips-and-tricks-for-effective-social-media-optimization-in-2023", destination: "/services/social-media-optimization", permanent: true },
      { source: "/tips-and-tricks-for-effective-social-media-optimization-in-2023", destination: "/services/social-media-optimization", permanent: true },
      { source: "/tips-and-tricks-for-effective-social-media-optimization-in-2023/", destination: "/services/social-media-optimization", permanent: true },
      { source: "/blog/social-media-management-toronto", destination: "/services/social-media-optimization", permanent: true },
      { source: "/social-media-management-toronto", destination: "/services/social-media-optimization", permanent: true },
      { source: "/social-media-management-toronto/", destination: "/services/social-media-optimization", permanent: true },
      { source: "/blog/why-you-need-pay-per-click-like-google-ads", destination: "/blog/google-ads-management", permanent: true },
      { source: "/why-you-need-pay-per-click-like-google-ads", destination: "/blog/google-ads-management", permanent: true },
      { source: "/why-you-need-pay-per-click-like-google-ads/", destination: "/blog/google-ads-management", permanent: true },
      { source: "/blog/google-ads-management-toronto", destination: "/services/google-ads-management", permanent: true },
      { source: "/google-ads-management-toronto", destination: "/services/google-ads-management", permanent: true },
      { source: "/google-ads-management-toronto/", destination: "/services/google-ads-management", permanent: true },
      { source: "/blog/holy-grail-for-classified-marketing", destination: "/blog/kijiji-ads-marketing-strategy-for-local-businesses", permanent: true },
      { source: "/holy-grail-for-classified-marketing", destination: "/blog/kijiji-ads-marketing-strategy-for-local-businesses", permanent: true },
      { source: "/holy-grail-for-classified-marketing/", destination: "/blog/kijiji-ads-marketing-strategy-for-local-businesses", permanent: true },
      { source: "/blog/repeat-and-referring-client", destination: "/testimonials", permanent: true },
      { source: "/repeat-and-referring-client", destination: "/testimonials", permanent: true },
      { source: "/repeat-and-referring-client/", destination: "/testimonials", permanent: true },
      { source: "/blog/brand-authority-and-review-management", destination: "/blog/social-proof-marketing-in-social-media", permanent: true },
      { source: "/brand-authority-and-review-management", destination: "/blog/social-proof-marketing-in-social-media", permanent: true },
      { source: "/brand-authority-and-review-management/", destination: "/blog/social-proof-marketing-in-social-media", permanent: true },
      { source: "/blog/how-to-create-a-high-converting-landing-page", destination: "/blog/what-is-a-landing-page", permanent: true },
      { source: "/how-to-create-a-high-converting-landing-page", destination: "/blog/what-is-a-landing-page", permanent: true },
      { source: "/how-to-create-a-high-converting-landing-page/", destination: "/blog/what-is-a-landing-page", permanent: true },
    ];
  },
};

export default nextConfig;
