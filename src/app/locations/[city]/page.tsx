import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

const cityBlurbs: Record<string, string> = {
  toronto: "As Canada's largest city and business capital, Toronto businesses face fierce online competition. We help Toronto companies rank on Google, convert visitors, and grow sustainably — with 200+ five-star reviews to back it up.",
  mississauga: "One of the GTA's largest business hubs, Mississauga is home to thousands of SMBs in finance, healthcare, logistics, and tech. A professional website that ranks locally is essential to stand out in this competitive market.",
  brampton: "Brampton is one of Canada's fastest-growing cities with a diverse business community spanning trucking, food, retail, and healthcare. Local search dominance starts with a great, fast-loading website.",
  edmonton: "As Alberta's capital city, Edmonton's economy spans oil & gas, government, retail, and a growing tech sector. We help Edmonton businesses build websites that capture local search traffic and convert visitors into customers.",
  surrey: "Surrey is one of BC's fastest-growing cities, with a booming real estate, construction, and retail sector. We help Surrey businesses build an online presence that ranks on Google and drives consistent leads.",
  vancouver: "Vancouver's tech-forward business culture means customers expect polished, fast-loading websites. We build Vancouver businesses websites that compete with larger agencies at a fraction of the cost.",
  "richmond-hill": "A thriving business community north of Toronto, Richmond Hill is home to restaurants, clinics, law firms, and contractors all competing for local customers. A strong web presence separates you from the competition.",
  oshawa: "Known as the 'Motor City' of Canada, Oshawa is seeing rapid commercial growth beyond auto manufacturing. Local service businesses here benefit enormously from a well-optimized website that captures Durham Region searches.",
  vaughan: "One of Canada's fastest-growing cities, Vaughan is packed with construction, landscaping, restaurants, and professional services all competing for the same local customers online.",
  calgary: "Calgary's business landscape ranges from energy sector professionals to retail and hospitality. With the city's ongoing diversification, a strong digital presence has never been more important.",
  ottawa: "The nation's capital has a unique business environment blending government contractors, tech startups, and local retail. Ottawa businesses trust us for SEO-ready websites that drive measurable results.",
  montreal: "Montreal's bilingual market presents unique SEO opportunities. We build websites for Montreal businesses that capture both English and French search traffic across the city.",
  kitchener: "The Kitchener-Waterloo tech corridor is growing fast. Whether you're a startup or an established local business, a high-performing website is your most powerful growth tool.",
  halifax: "Halifax is a thriving maritime hub with strong tourism, seafood, and professional services sectors. We help Halifax businesses build credibility online and attract more local customers.",
  barrie: "Barrie's growing population and proximity to Toronto make it an attractive market for local service businesses. We help Barrie companies capture search traffic from across Simcoe County.",
  london: "London, Ontario's diverse economy spans education, healthcare, manufacturing, and finance. Our web design and SEO services help London businesses dominate local search results.",
  windsor: "As a border city with strong ties to the auto industry, Windsor businesses have a unique opportunity to serve both Canadian and American customers online.",
  "north-york": "North York's dense commercial strips and diverse business community require a hyper-local SEO strategy. We help North York businesses get found by nearby customers searching on Google.",
  burnaby: "Burnaby is home to some of BC's largest tech companies and a growing SMB ecosystem. We build websites that help Burnaby businesses compete effectively in Metro Vancouver's digital marketplace.",
  saskatoon: "Saskatoon is Saskatchewan's economic engine, with strong agriculture, mining, and health sectors. A professionally designed website puts your Saskatoon business on the map — literally and on Google.",
  victoria: "Victoria's tourism-driven economy and thriving local business scene mean customers research everything online. We help Victoria businesses make a strong first impression and rank for local searches.",
  ladner: "Ladner's tight-knit community and local businesses thrive on word-of-mouth — but a strong website and local SEO extend your reach well beyond the neighbourhood.",
};

function getCityBySlug(slug: string) {
  return config.cities.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return config.cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const cityData = getCityBySlug(params.city);
  const cityName = cityData?.name ?? params.city;
  return {
    title: `Web Design ${cityName} | ${config.businessName}`,
    description: `Professional web design, SEO, and digital marketing services in ${cityName}. ${config.businessName} — ${config.reviewCount}+ five-star reviews. Call ${config.phone}.`,
    alternates: { canonical: `/locations/${params.city}` },
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const cityData = getCityBySlug(params.city);
  const city = cityData?.name ?? params.city;
  const province = cityData?.province ?? "ON";
  const cityBlurb = cityBlurbs[params.city] ?? `${city} businesses rely on us for custom websites, local SEO, and digital marketing that drives real leads. We've served clients across ${province} and all of Canada — and we know what it takes to rank locally.`;
  const primaryAddress = Object.values(config.addresses)[0];

  const services = [
    { title: "Web Design", desc: `Custom, conversion-focused websites built for ${city} businesses. Mobile-first, fast, and SEO-ready from day one.` },
    { title: "SEO", desc: `Rank on the first page of Google in ${city}. Local SEO strategies that drive real leads and calls.` },
    { title: "Digital Marketing", desc: `Full-service digital marketing in ${city} — social media, paid ads, content, and more.` },
    { title: "Graphic Design", desc: `Logos, branding, and print collateral that make your ${city} business stand out.` },
    { title: "Website Maintenance", desc: `Keep your site fast, secure, and up-to-date with our monthly maintenance packages.` },
    { title: "AI Consultation", desc: `Leverage AI tools to automate operations and grow your ${city} business smarter.` },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", href: "/locations/toronto" }, { name: city, href: `/locations/${params.city}` }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image src="/blog/web-design-company.png" alt="Web design services for Canadian businesses" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />

        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">{city}, {province} — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              Web Design in{" "}
              <span className="gradient-text-animated">{city}</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Professional web design, SEO, and digital marketing for businesses in {city}. Results guaranteed.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
              >
                Get a Free Quote
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                {config.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SERVICES GRID
          ============================================= */}
      <section className="py-14 relative" style={{ background: "#ffffff" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Offer in {city}</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Growing Businesses in {city}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { value: `${config.reviewCount}+`, label: "Five-Star Reviews" },
                { value: `${config.cities.length}+`, label: "Cities Served" },
                { value: "100%", label: "Results Guaranteed" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          CITY BLURB
          ============================================= */}
      <section className="py-10" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Web Design for {city} Businesses</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{cityBlurb}</p>
          </div>
        </div>
      </section>

      {/* =============================================
          CTA BAND
          ============================================= */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image src="/blog/seo-services-london-ontario.png" alt="Professional SEO and digital marketing services across Canada" fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-black text-white mb-6 reveal"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Ready to Grow Your{" "}
            <span className="gradient-text-animated">{city} Business?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free consultation, no commitment. We&apos;ll show you exactly how we&apos;ll get you results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
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
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${config.businessName} - ${city} Web Design`,
            description: `Affordable website design and development for small businesses in ${city}, ${province}`,
            url: `https://${config.domain}/locations/${params.city}`,
            telephone: config.phone,
            email: config.emails.sales,
            areaServed: { "@type": "City", name: city, containedInPlace: { "@type": "AdministrativeArea", name: province } },
            address: primaryAddress ? {
              "@type": "PostalAddress",
              streetAddress: primaryAddress.street,
              addressLocality: primaryAddress.city,
              addressRegion: primaryAddress.province,
              postalCode: primaryAddress.postalCode,
              addressCountry: "CA",
            } : undefined,
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: String(config.rating),
              reviewCount: String(config.reviewCount),
            },
            sameAs: config.socialLinks.map((link) => link.href),
          }),
        }}
      />
    </>
  );
}
