import Link from "next/link";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Image from "next/image";
import type { ClientService } from "@/lib/client-config";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

export default function ServicePageTemplate({ service }: { service: ClientService }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services/web-design-development" }, { name: service.title, href: `/services/${service.slug}` }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/blog/web-design-company.png" alt="Canadian web design and digital marketing agency team" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.82) 50%, rgba(1,12,30,0.72) 100%)" }} />

        {/* Orbs */}
        <div className="absolute top-0 left-[5%] w-[520px] h-[520px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(150px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(120px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none animate-orb"
          style={{ background: "#33C2E8", filter: "blur(100px)", opacity: 0.15, animationDelay: "1.2s" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Canadian Web Designs</span>
            </div>

            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              <span className="gradient-text-animated">{service.title}</span>
            </h1>

            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              {service.tagline}
            </p>

            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${config.phone}`}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {config.phone}
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source={`service-${service.title}`} />
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* =============================================
          DESCRIPTION + FEATURES (single section)
          ============================================= */}
      <section
        className="py-14 relative"
        style={{ background: "#ffffff" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Description + Trust sidebar */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start mb-10">

            {/* Description */}
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">About This Service</span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.1 }}>
                What We Deliver
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </div>

            {/* Trust sidebar */}
            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-xl mb-6">Why Choose Us?</h3>
                <div className="space-y-5">
                  {[
                    { icon: "★", label: `${config.reviewCount}+ Five-Star Reviews` },
                    { icon: "✓", label: "Results Guaranteed" },
                    { icon: "⚡", label: "30-Day Average Launch" },
                    { icon: "⊕", label: `${config.cities.length}+ Cities Served` },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                        style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                      >
                        {item.icon}
                      </span>
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-shimmer mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-bold rounded-btn text-sm transition-all duration-300"
                  style={{ background: "#00AADF", boxShadow: "0 4px 20px rgba(0,170,223,0.4)" }}
                >
                  Start Today — It&apos;s Free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="border-t border-gray-100 pt-10">
            <div className="text-center mb-8 reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What&apos;s Included</span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Everything You Need to Win</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={feature}
                  className="group bg-gray-50 rounded-2xl p-6 flex items-start gap-4 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium leading-snug pt-1.5">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          RELATED READING
          ============================================= */}
      {(() => {
        const relatedMap: Record<string, { title: string; slug: string }[]> = {
          "web-design-development": [
            { title: "Custom Web Design vs. Website Templates: Which Is Right?", slug: "custom-web-design-vs-website-templates-which-is-right-for-your-business" },
            { title: "How a Professional Website Design Company Can Transform Your Business", slug: "how-a-professional-website-design-company-can-transform-your-business-online" },
            { title: "5 Essential Web Design Trends from Canada to Upgrade Your Website", slug: "5-essential-web-design-trends-from-canada-to-upgrade-your-website" },
            { title: "Mastering Web Design Fundamentals", slug: "mastering-web-design-fundamentals" },
          ],
          "seo": [
            { title: "Affordable SEO Services for Small Businesses", slug: "affordable-seo-services-for-small-businesses" },
            { title: "How Does Local SEO Benefit Your Business?", slug: "how-does-local-seo-benefit-your-business-in-2023" },
            { title: "Black Hat SEO vs. White Hat SEO: What You Need to Know", slug: "black-hat-seo-vs-white-hat-seo" },
            { title: "Top 10 Tips for Boosting SEO in 2024", slug: "top-10-tips-for-boosting-seo-for-2023" },
          ],
          "graphic-design": [
            { title: "Elevating Your Brand: The Essential Role of Canadian Graphic Design", slug: "elevating-your-brand-the-essential-role-of-canadian-graphic-design" },
            { title: "Banner Design Services: How to Stand Out", slug: "banner-design-services" },
            { title: "The Power of Infographics in Marketing", slug: "infographics" },
            { title: "Best Graphic Design Service in Canada", slug: "best-graphic-design-service-canada" },
          ],
          "social-media-optimization": [
            { title: "Tips and Tricks for Effective Social Media Optimization in 2024", slug: "tips-and-tricks-for-effective-social-media-optimization-in-2023" },
            { title: "Strategic Social Media Marketing for Canadian Businesses", slug: "strategic-social-media-marketing-for-canadian-web-designs" },
            { title: "Social Proof Marketing in Social Media", slug: "social-proof-marketing-in-social-media" },
            { title: "ChatGPT's Impact on Digital Marketing", slug: "chatgpts-impact-on-digital-marketing" },
          ],
          "website-maintenance": [
            { title: "The Importance of Regular Website Backups", slug: "importance-of-regular-website-backups" },
            { title: "How Much Does Website Maintenance Really Cost?", slug: "how-much-does-website-maintenance-really-cost" },
            { title: "Website Maintenance: Keep Your Website Secure, Fast, and Updated", slug: "website-maintenance-keep-your-website-secure-fast-and-updated" },
            { title: "Toronto Website Maintenance & SEO: Keeping Your Site Google-Ready", slug: "toronto-website-maintenance-seo-optimization-keeping-your-site-fast-secure-and-google-ready" },
          ],
          "ai-consultation": [
            { title: "5 Best Strategies for Incorporating ChatGPT Into Your Business", slug: "5-best-strategies-for-incorporating-chatgpt-into-your-business" },
            { title: "What Is the Importance of AI Automation?", slug: "what-is-the-importance-of-ai-automation" },
            { title: "Top 10 AI Tools for Digital Marketing", slug: "top-10-ai-tools-for-digital-marketing" },
            { title: "ChatGPT's Impact on Digital Marketing", slug: "chatgpts-impact-on-digital-marketing" },
          ],
        };
        const posts = relatedMap[service.slug];
        if (!posts) return null;
        return (
          <section className="py-14 bg-gray-50 border-t border-gray-100">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-3">Further Reading</span>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-3 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#00AADF]/40 hover:shadow-md transition-all duration-200"
                    style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-[#00AADF] leading-snug transition-colors">
                      {post.title}
                    </span>
                    <span className="mt-auto flex items-center gap-1 text-xs font-bold text-[#00AADF]">
                      Read more
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* =============================================
          CTA BAND
          ============================================= */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/blog/web-design-company.png" alt="" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(90px)", opacity: 0.3, animationDelay: "2s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-6 reveal">
            Get Started Today
          </span>
          <h2
            className="font-black text-white mb-6 reveal delay-1"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Ready to Take Your Business to{" "}
            <span className="gradient-text-animated">the Next Level?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-2">
            Get a free consultation and see exactly how our {service.title} service can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-3">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
            >
              Get Your Free Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.phone}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10 reveal delay-4">
            {["No long-term contracts", "Free initial consultation", "Results guaranteed"].map((t) => (
              <span key={t} className="text-white/40 text-sm flex items-center gap-2">
                <span className="text-accent">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            // Page-scoped @id so this service is one identifiable node rather than an
            // anonymous one repeated per page. #service keeps it clear of the page's
            // own #webpage node.
            "@id": `https://${config.domain}/services/${service.slug}#service`,
            name: service.title,
            description: service.description,
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              // No priceCurrency here. schema.org Offer takes price and priceCurrency
              // TOGETHER; a currency with no price announces a price and then withholds
              // it, which Google reads as an incomplete Offer rather than a cheap one.
              // These services are quoted, not listed, so availability is the only
              // honest claim. Add BOTH fields back the day a real number is published.
              // Reference, not a stub -- `seller` is the seventh key this same
              // defect has hidden behind (provider, publisher, isPartOf, about,
              // parentOrganization, mainEntityOfPage were the others).
              seller: { "@id": `https://${config.domain}/#organization` },
            },
            // No aggregateRating here: Google rejects review ratings on @type
            // "Service" ("Invalid object type for field"). The business rating
            // lives on the global LocalBusiness schema (layout.tsx) instead.
            provider: { "@id": `https://${config.domain}/#organization` },
          }),
        }}
      />

      <QuoteFormSection source={`service-${service.title}`} mobileOnly />
    </>
  );
}
