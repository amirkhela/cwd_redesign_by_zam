import type { Metadata } from "next";
import Link from "next/link";
import { getConfig, reviewCountPlus } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import { WEBSITE_PACKAGES } from "@/lib/packages";

const config = getConfig();

// Single source for the price and what the package includes: the Custom Web
// Application card in src/lib/packages.ts (also shown on /web-design-packages).
const WEB_APP_PLAN = WEBSITE_PACKAGES.find((p) => p.name === "Custom Web Application")!;
const PRICE = WEB_APP_PLAN.price; // "$3,499"
const PRICE_VALUE = PRICE.replace(/[^0-9]/g, ""); // "3499"

const TITLE = "Web Application Development Canada | Custom Web Apps";
const DESCRIPTION = `Custom web application development in Canada: portals, booking systems, dashboards and SaaS on Next.js, React, Laravel or Node.js. From ${PRICE}.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/services/web-app-development" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://canadianwebdesigns.ca/services/web-app-development",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Custom web application development in Canada, Canadian Web Designs" }],
  },
};

const faq = [
  {
    q: "How much does a custom web application cost in Canada?",
    a: `Our custom web applications start at ${PRICE} plus HST. That covers a focused first version: user logins and roles, a dashboard, an admin panel and the core feature your business needs. The final price depends on how many user types, screens and integrations the app has, so we quote after a short discovery call and put every feature in writing before work starts.`,
  },
  {
    q: "What is the difference between a website and a web application?",
    a: "A website mainly gives information: your services, prices and contact details. A web application lets people do something: log in, book, pay, upload files, track an order or manage their account. If your users need their own account and their own data, you need a web app.",
  },
  {
    q: "Should I build a web app or a mobile app?",
    a: "If your users mostly work on a computer, or you need one product that works on every device without an app store, start with a web app. It runs in any browser and can be installed on a phone as a progressive web app (PWA). If you need phone features such as push notifications, the camera or offline use as the main experience, look at our app development service for iOS and Android.",
  },
  {
    q: "Which technologies do you use?",
    a: "We build on Next.js, React, Laravel or Node.js, picked to suit the project and the team that will look after it. If you already have a system in a particular framework, we can work in that instead.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes. You get the full source code and own it outright. There is no licence fee to keep using it, and any developer can pick it up later.",
  },
  {
    q: "Can the app take payments and subscriptions?",
    a: "Yes. We connect payment providers for one-time payments and recurring subscriptions, managed from the user dashboard and the admin panel.",
  },
  {
    q: "Can it connect to the software we already use?",
    a: "Usually, yes. We build APIs and connect third-party tools such as payment processors, accounting software, CRMs, email and calendar services, as long as the tool offers an API.",
  },
  {
    q: "What happens after launch?",
    a: "Every custom web application includes 90 days of free support after launch for bug fixes and small adjustments. After that, you can keep us on for updates and new features, or take the code in-house.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://canadianwebdesigns.ca/services/web-app-development",
  name: "Custom Web Application Development",
  serviceType: "Web application development",
  description: "Custom web application development for Canadian businesses: client portals, booking systems, dashboards, CRMs, LMS platforms, marketplaces and SaaS products on Next.js, React, Laravel or Node.js.",
  provider: { "@id": `https://${config.domain}/#organization` },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Vancouver" },
    { "@type": "Country", name: "Canada" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    // The published starting price, so price and priceCurrency go in TOGETHER.
    price: PRICE_VALUE,
    priceCurrency: "CAD",
  },
};

const appTypes = [
  {
    title: "Client & Customer Portals",
    desc: "A secure place for your clients to log in, see their files, invoices, orders or project status, and send you documents without email back-and-forth.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    title: "Booking & Scheduling Systems",
    desc: "Online booking built around how you actually work: staff calendars, service lengths, deposits, reminders and an admin view of the whole day.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    title: "Dashboards & Internal Tools",
    desc: "Replace the spreadsheets and copy-paste. One dashboard where your team enters, tracks and reports on the work, with the right access for each role.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Custom CRMs",
    desc: "A CRM shaped to your sales process instead of the other way round: leads, follow-ups, quotes and pipeline stages that match how your team sells.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Learning Platforms (LMS)",
    desc: "Courses, lessons, quizzes and progress tracking for training staff or selling courses, with paid access and certificates when you need them.",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
  },
  {
    title: "Marketplaces & SaaS Products",
    desc: "Multi-user platforms with sign-up, subscriptions and an admin panel, from a first version you can put in front of customers to a product that grows with them.",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.696 2.075-3.27 2.454-4.568.048-.168.073-.34.073-.518a2.25 2.25 0 00-2.25-2.25h-2.25",
  },
];

const process = [
  { step: "01", title: "Discovery & Scope", desc: "We map who uses the app, what each user type needs to do and which systems it has to connect to. You get a written scope with every feature and a quote before any code is written." },
  { step: "02", title: "Design & Prototype", desc: "Screens are designed and linked into a clickable prototype, so you and your users can try the flow before it is built. Changes here cost minutes, not weeks." },
  { step: "03", title: "Build & Test", desc: "We build in short stages and show you working features as they are finished. Logins, roles, payments and integrations are tested with real scenarios before launch." },
  { step: "04", title: "Launch & Support", desc: "We deploy the app and hand it over. The first 90 days of support are included, and you receive the full source code." },
];

export default function WebAppDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services/web-design-development" }, { name: "Web App Development", href: "/services/web-app-development" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Custom Web Apps From {PRICE}</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Custom Web Application{" "}<span className="gradient-text-animated">Development in Canada</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Portals, booking systems, dashboards and SaaS products built for the way your business works. You own the code, and your users can reach it from any browser.
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
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                Get a Free Quote
              </Link>
            </div>
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {["You Own the Source Code", "Next.js, React, Laravel or Node.js", "90 Days Free Support"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <HeroQuoteForm source="service-web-app-development" />
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Build</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Web Applications for Canadian Businesses</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">If your customers or your team need to log in and get something done, it is a web app. These are the ones we build most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {appTypes.map((s, i) => (
              <div key={s.title} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Website or Web App?</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>When a Website Is Not Enough</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                A website tells people about your business. A web application lets them do business with you: log in, book, pay, upload, track and manage their account. Many companies start with a website and a pile of workarounds behind it, such as forms that land in an inbox, spreadsheets passed between staff and the same details typed in three places.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                A custom web app replaces those workarounds with one system built around your process. Each person sees what their role needs, the data lives in one place, and the tools you already pay for, such as payments, accounting or email, are connected instead of copied by hand.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Because it runs in the browser, there is no app store approval and nothing to install. It works on desktops, tablets and phones, and can be added to a phone&apos;s home screen as a progressive web app. If you do need a native iPhone or Android app, see our <Link href="/services/app-development" className="text-[#00AADF] font-semibold hover:underline">mobile app development</Link> service.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Building a software product rather than an internal tool? Our page on <Link href="/web-design-for-saas" className="text-[#00AADF] font-semibold hover:underline">websites for SaaS companies</Link> covers the marketing site that sits in front of it.
              </p>
            </div>

            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <p className="text-xs font-bold text-[#00AADF] uppercase tracking-widest mb-2">{WEB_APP_PLAN.name}</p>
                <p className="text-4xl font-black text-gray-900 mb-1">{PRICE}<span className="text-base font-semibold text-gray-500"> + HST, from</span></p>
                <p className="text-gray-500 text-sm mb-5">{WEB_APP_PLAN.desc}</p>
                <div className="space-y-3">
                  {WEB_APP_PLAN.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Get Your Web App Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                  <p className="text-center text-xs text-gray-400 mt-3">See all packages on our <Link href="/web-design-packages" className="text-[#00AADF] hover:underline">pricing page</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* PROCESS */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How We Build Web Applications</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">A written scope up front, a prototype you can click through, and working features shown as they are finished.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-black mb-4" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.step}</div>
                <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Web Application Development: Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Pair your web app with our other services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Mobile App Development", href: "/services/app-development" },
              { name: "Web Design & Development", href: "/services/web-design-development" },
              { name: "AI Consultation", href: "/services/ai-consultation" },
              { name: "SEO Services", href: "/services/seo" },
              { name: "Website Maintenance", href: "/maintenance" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection source="service-web-app-development" mobileOnly />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
