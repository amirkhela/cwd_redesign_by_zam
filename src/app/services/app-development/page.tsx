import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PricingCards, { offerCatalog, type PricingPlan } from "@/components/PricingCards";

const config = getConfig();
const service = config.services.find((s) => s.slug === "app-development")!;

export const metadata: Metadata = {
  title: { absolute: "App Development Canada | iOS & Android Apps | Canadian Web Designs" },
  description:
    "Mobile app development in Canada from $2,999. iOS, Android and cross-platform apps (Flutter, React Native), web apps and admin panels. Free app quote.",
  alternates: { canonical: "/services/app-development" },
  openGraph: {
    title: "App Development Canada | iOS & Android Apps | Canadian Web Designs",
    description:
      "Affordable mobile app development for Canadian businesses. iOS and Android apps, web apps, UI/UX design and App Store launch, from $2,999.",
    url: "https://canadianwebdesigns.ca/services/app-development",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "App Development Canada | Canadian Web Designs" }],
  },
};

const APP_PACKAGES: PricingPlan[] = [
  {
    name: "Starter App",
    price: "$2,999",
    desc: "A simple, polished app to put your business in your customers' pockets.",
    features: [
      "iOS + Android (one cross-platform codebase)",
      "Up to 8 screens",
      "Custom UI/UX design",
      "User sign up + login",
      "Push notifications",
      "Contact, booking or enquiry form",
      "Google Maps + click to call",
      "Basic admin panel to edit content",
      "Analytics setup",
      "App Store + Google Play submission",
      "30 days free support after launch",
    ],
  },
  {
    name: "Business App",
    price: "$5,499",
    badge: "Most Popular",
    highlight: true,
    desc: "A full business app with payments, bookings and a backend you control.",
    features: [
      "iOS + Android (Flutter or React Native)",
      "Up to 20 screens",
      "Clickable prototype before development",
      "User profiles + social login",
      "In-app payments (Stripe, Apple Pay, Google Pay)",
      "Booking, ordering or loyalty features",
      "Push notifications + email alerts",
      "Cloud backend + database",
      "Full admin dashboard (web)",
      "Third-party API integrations",
      "App Store + Google Play launch",
      "60 days free support after launch",
      "Dedicated project manager",
    ],
  },
  {
    name: "Advanced App",
    price: "$8,999",
    badge: "Marketplaces",
    desc: "On-demand, marketplace and multi-user apps with real-time features.",
    features: [
      "iOS + Android + web app",
      "Unlimited screens",
      "Multiple user types (e.g. customer, driver, vendor, admin)",
      "Real-time GPS tracking",
      "In-app chat",
      "Payments, payouts + commissions",
      "Ratings + reviews",
      "Advanced admin panel + reports",
      "Scalable cloud architecture",
      "Security testing before launch",
      "App Store + Google Play launch",
      "90 days free support after launch",
      "Dedicated project manager",
    ],
  },
];

const faqs = [
  {
    q: "How much does app development cost in Canada?",
    a: "Our app development packages start at $2,999 for a Starter App (iOS and Android, up to 8 screens). A Business App with payments, bookings and an admin dashboard is $5,499, and an Advanced App for marketplaces and on-demand services is $8,999. Larger or enterprise apps get a fixed quote after a free consultation. Prices are in Canadian dollars, plus HST.",
  },
  {
    q: "Do you build apps for both iPhone and Android?",
    a: "Yes. We build cross-platform apps with Flutter or React Native, so one codebase runs on iPhone, iPad and Android phones. That keeps the cost lower and both versions stay in sync.",
  },
  {
    q: "How long does it take to build an app?",
    a: "A Starter App usually takes 4 to 6 weeks, a Business App 8 to 12 weeks and an Advanced App 12 to 16 weeks, depending on features and how quickly content and feedback come in. You see designs and test builds along the way.",
  },
  {
    q: "Will you publish my app to the App Store and Google Play?",
    a: "Yes. We prepare the store listings, screenshots and builds, and handle the submission and review process. The app is published under your own Apple Developer and Google Play accounts (Apple charges US$99 per year, Google a one-time US$25), so you own it.",
  },
  {
    q: "Can you build a web app instead of a mobile app?",
    a: "Yes. For tools used mostly on a computer, such as dashboards, portals and booking systems, a web app or progressive web app (PWA) is often the better choice. See our custom web portal package on the website packages page.",
  },
  {
    q: "Who owns the app and source code?",
    a: "You do. Once the project is paid in full you receive the source code, and the app lives in your own store accounts and cloud account.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

// Separate node from the template's #service: this one carries the priced catalogue.
const catalogSchema = {
  "@context": "https://schema.org",
  ...offerCatalog("App Development Packages", APP_PACKAGES),
  "@id": `https://${config.domain}/services/app-development#packages`,
};

const appTypes = [
  { title: "Booking + Appointment Apps", body: "Clinics, salons, trainers and service businesses. Customers book, pay and get reminders." },
  { title: "Ecommerce + Ordering Apps", body: "Sell products, take food orders or run a loyalty program right from the phone." },
  { title: "On-Demand + Marketplace Apps", body: "Ride-share, delivery, rentals and service marketplaces with live tracking and payouts." },
  { title: "Education + Membership Apps", body: "Online courses, member content, schools and communities with secure logins." },
  { title: "Business + Field Service Apps", body: "Internal tools for teams: job tracking, forms, photos, signatures and reports." },
  { title: "Web Apps + Portals", body: "Dashboards and client portals that run in the browser on any device." },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ─── APP PACKAGES ─── */}
      <section id="packages" className="py-16 border-t border-gray-100" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Mobile App Development Packages</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Affordable app development for Canadian businesses. Every package includes design, development,
              testing and launch on the App Store and Google Play.
            </p>
          </div>
          <PricingCards plans={APP_PACKAGES} />
          <p className="text-center text-xs text-gray-400 mt-8">
            Prices are in Canadian dollars, plus HST. Apple and Google developer account fees and cloud hosting are paid to those providers.
            Need something bigger? <Link href="/contact" className="text-[#00AADF] font-bold hover:underline">Ask for an enterprise app quote</Link>.
          </p>
        </div>
      </section>

      {/* ─── APP TYPES ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Build</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Custom Apps for Canadian Businesses</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {appTypes.map((t) => (
              <div key={t.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 reveal">
                <h3 className="text-base font-black text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
            Need a website to go with your app? See our{" "}
            <Link href="/web-design-packages" className="font-bold text-[#00AADF] hover:underline">website design packages</Link>.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">App Development Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
