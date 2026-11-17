import type { Metadata } from "next";
import Link from "next/link";
import MockupRequestForm from "@/components/MockupRequestForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

const TITLE = "Free Website Mockup + Free Quote | Canadian Web Designs";
const DESCRIPTION =
  "Get a free website mockup: a free sample homepage designed for your business, sent with your free quote. No cost, no obligation. See your new site before you pay.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/free-website-mockup" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://canadianwebdesigns.ca/free-website-mockup",
  },
};

const faqs = [
  {
    q: "Is the website mockup really free?",
    a: "Yes. The mockup is free and the quote is free. You do not pay anything, you do not give us a credit card, and you are under no obligation to hire us. We design the free sample homepage so you can see exactly what you would get before you decide.",
  },
  {
    q: "What is a website mockup?",
    a: "A website mockup is a design of your homepage that shows the layout, colours, fonts, images and sections your new site would have. It is a picture of the finished page, so you can judge the look and feel before any development starts.",
  },
  {
    q: "Do I have to buy a website after I get my free mockup?",
    a: "No. The free mockup and the free quote come with no strings attached. If you like the design, we build the site. If not, you are free to walk away.",
  },
  {
    q: "Can you make a free mockup for a website redesign?",
    a: "Yes. Send us your current website address and we will design a free mockup of how your redesigned homepage could look, then send it with a free redesign quote. Many businesses use this to compare their old site side by side with the new design.",
  },
  {
    q: "What do I need to send for my free website mockup?",
    a: "Your business name, your industry and what you want the site to do. A logo and your current website help, but they are not required. A designer may contact you with a few short questions before starting.",
  },
  {
    q: "What is included in the free quote?",
    a: "Your free quote lists the pages, features and services your site needs, the timeline to launch and the total cost, so there are no surprises. It is written for your project, not copied from a price list.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const steps = [
  {
    step: "01",
    title: "Tell us about your business",
    desc: "Fill in the short form: your business, your industry and what the new site should do. It takes about a minute.",
  },
  {
    step: "02",
    title: "We design your free mockup",
    desc: "A designer on our team creates a free sample homepage in your brand colours, built around your services and your customers.",
  },
  {
    step: "03",
    title: "Get your mockup + free quote",
    desc: "We send your free mockup together with your free quote. Review it, ask for changes, or simply say no thanks.",
  },
];

const included = [
  { title: "Custom homepage design", desc: "A full homepage layout designed for your business, not a stock template." },
  { title: "Your logo and brand colours", desc: "We use your logo and colours so the free mockup looks like your business from day one." },
  { title: "Mobile view", desc: "See how your new homepage looks on a phone, where most of your visitors will find you." },
  { title: "Sections for your services", desc: "Services, reviews, calls to action and contact areas planned around how your customers buy." },
  { title: "Clear calls to action", desc: "Call, book or request a quote buttons placed where visitors actually look." },
  { title: "Free quote to build it", desc: "A written quote with pages, features, timeline and total cost, sent with the mockup." },
];

const check = (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function FreeWebsiteMockupPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Free Website Mockup", href: "/free-website-mockup" }]} />

      {/* ─── HERO + FORM ─── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div
          className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
                <span className="text-white/80 text-sm font-medium tracking-wide">
                  Free Mockup &middot; Free Sample Homepage &middot; Free Quote
                </span>
              </div>
              <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
                Get a Free Website Mockup{" "}
                <span className="gradient-text-animated">With Your Free Quote</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                See your new website before you spend a dollar. Tell us about your business and our designers
                will create a free sample homepage made for you, then send it with your free quote. No cost and
                no obligation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free mockup of your new homepage",
                  "Free sample designed for your business, not a template",
                  "Free quote with pages, timeline and total cost",
                  "No credit card, no payment, no obligation",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="text-[#00AADF]">{check}</span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
              >
                Prefer to talk? Call {config.phone}
              </a>
            </div>

            <div className="relative">
              <MockupRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">How Your Free Website Mockup Works</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Three simple steps from a one-minute form to a free mockup and a free quote in your inbox.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-4xl font-black mb-4"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {s.step}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Included Free</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What&rsquo;s in Your Free Sample Homepage</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Your free website mockup is a real design for your business, so you can judge the look, the layout and
              the message before you commit to anything.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 reveal border border-gray-100"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  {check}
                </div>
                <h3 className="text-gray-900 font-black text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REDESIGN ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Already Have a Site?</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Free Website Redesign Mockup and Free Redesign Quote
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                If your current website looks dated, loads slowly or does not bring in calls, add its address to the
                form. We will design a free mockup of your redesigned homepage so you can compare the old site and
                the new design side by side, and send a free redesign quote with it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Want to know what the full build involves? See our{" "}
                <Link href="/services/web-design-development" className="text-[#00AADF] font-semibold hover:underline">
                  web design and development service
                </Link>{" "}
                or browse{" "}
                <Link href="/portfolio" className="text-[#00AADF] font-semibold hover:underline">
                  websites we have built
                </Link>
                .
              </p>
            </div>
            <div className="reveal delay-2 rounded-2xl p-8 border border-[#00AADF]" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" }}>
              <h3 className="text-white font-black text-xl mb-5">Why We Design a Free Mockup Before You Pay</h3>
              <ul className="space-y-3">
                {[
                  "You see the design first, so there are no surprises later",
                  "You can share it with partners before deciding",
                  "Your quote is based on a real plan, not a guess",
                  "If it is not right for you, you owe nothing",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                    <span className="text-white mt-0.5">{check}</span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#mockup-form"
                className="mt-7 flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm bg-white text-[#003B6F] hover:bg-white/90 transition-all duration-300"
              >
                Get My Free Mockup
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Free Website Mockup FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            See Your New Website <span className="gradient-text-animated">Before You Pay</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
            Your free mockup and free quote are one short form away.
          </p>
          <a
            href="#mockup-form"
            className="btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
            style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
          >
            Get My Free Mockup &amp; Quote
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
