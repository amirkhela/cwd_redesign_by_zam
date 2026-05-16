"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const services = [
  "Web Design & Development",
  "SEO Services",
  "Website Maintenance",
  "Graphic Design",
  "Social Media Management",
  "AI Consultation",
  "Other",
];

const cities = ["Brampton", "Burnaby", "Winnipeg", "Toronto", "Calgary", "Ottawa", "Other"];

const testimonials = [
  {
    name: "Sharanya K.",
    city: "Toronto, ON",
    text: "Canadian Web Designs completely transformed our online presence. The team was professional, responsive, and delivered a stunning website that exceeded our expectations. Our leads have increased significantly since launch!",
  },
  {
    name: "Shawn M.",
    city: "Brampton, ON",
    text: "Best web design agency in Toronto! They built our e-commerce site from scratch and the results have been incredible. The SEO work they did has us ranking on the first page of Google. Highly recommend.",
  },
  {
    name: "Dorota W.",
    city: "Calgary, AB",
    text: "I was blown away by the quality of work and speed of delivery. Canadian Web Designs understood our brand perfectly and created a website that truly represents who we are. Great value for money.",
  },
];

const serviceCards = [
  { icon: "💻", title: "Web Design & Development", desc: "Custom, mobile-first websites that load fast, rank high, and convert visitors into customers." },
  { icon: "📈", title: "SEO Services", desc: "Local SEO strategies that put your business on page 1 of Google in your city — guaranteed results." },
  { icon: "🔧", title: "Website Maintenance", desc: "Keep your site secure, updated, and running at peak performance with our monthly maintenance plans." },
  { icon: "🎨", title: "Graphic Design", desc: "Logos, branding, and marketing materials that make your business unforgettable." },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400 font-medium bg-gray-50 border border-gray-200 focus:border-[#00AADF] focus:bg-white focus:ring-2 focus:ring-[#00AADF]/20";

async function getRecaptchaToken(siteKey: string): Promise<string> {
  try {
    const gc = (window as any).grecaptcha;
    if (!gc) return "";
    return await new Promise<string>((resolve) => {
      try {
        const run = () => {
          try {
            const result = gc.execute(siteKey, { action: "lp_contact" });
            if (result && typeof result.then === "function") {
              result.then((token: string) => resolve(token)).catch(() => resolve(""));
            } else { resolve(""); }
          } catch { resolve(""); }
        };
        if (typeof gc.ready === "function") { gc.ready(run); } else { run(); }
      } catch { resolve(""); }
    });
  } catch { return ""; }
}

function fireConversion() {
  try {
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("event", "conversion", { send_to: "AW-CONVERSION_ID/CONVERSION_LABEL" });
    }
  } catch { /* silent */ }
}

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(false);

    try {
      let recaptchaToken = "";
      if (RECAPTCHA_SITE_KEY && typeof window !== "undefined") {
        recaptchaToken = await getRecaptchaToken(RECAPTCHA_SITE_KEY);
      }

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken, source: "google-ads-lp" }),
      });

      if (response.ok) {
        fireConversion();
        setSubmitted(true);
      } else {
        setError(true);
        setSubmitting(false);
      }
    } catch {
      setError(true);
      setSubmitting(false);
    }
  }, [submitting]);

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
      )}

      {/* ── Minimal Top Bar ── */}
      <div className="w-full py-3 px-6 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <Image src="/logos/logo.webp" alt="Canadian Web Designs" width={140} height={36} className="h-8 w-auto object-contain" priority />
        <a
          href="tel:647-689-6069"
          className="inline-flex items-center gap-2 px-5 py-2 text-white font-bold rounded-xl text-sm transition-all duration-200"
          style={{ background: "#00AADF" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          647-689-6069
        </a>
      </div>

      {/* ── Hero + Form ── */}
      <section
        className="relative overflow-hidden py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "#00AADF", filter: "blur(150px)", opacity: 0.2 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "#003B6F", filter: "blur(120px)", opacity: 0.28 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Left — Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: "rgba(0,170,223,0.15)", border: "1px solid rgba(0,170,223,0.3)" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF" }} />
                <span className="text-white/80 text-sm font-medium">Free Quote — No Commitment</span>
              </div>

              <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
                Web Design, SEO &amp; Digital Marketing{" "}
                <span style={{ color: "#00AADF" }}>Across Canada</span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                Serving Brampton, Burnaby, Winnipeg, Toronto, Calgary &amp; Ottawa. Get a custom website or SEO strategy built for your city and your budget.
              </p>

              {/* Trust bullets */}
              <div className="space-y-3 mb-8">
                {[
                  "150+ five-star reviews across Canada",
                  "Custom websites from $1,499 — no templates",
                  "30-day average launch time",
                  "No long-term contracts — cancel anytime",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,170,223,0.25)" }}>
                      <svg className="w-3 h-3" style={{ color: "#00AADF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-white/75 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: "#FFB800" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/60 text-sm">5.0 — 150+ Google Reviews</span>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-2xl p-7 shadow-2xl" style={{ boxShadow: "0 8px 60px rgba(0,0,0,0.35)" }}>
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(0,170,223,0.12)" }}>
                    <svg className="w-7 h-7" style={{ color: "#00AADF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">We Got Your Request!</h3>
                  <p className="text-gray-500 text-sm">Our team will reach out within 24 hours with a custom quote.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-black text-gray-900 mb-1">Get a Free Quote</h2>
                  <p className="text-gray-400 text-sm mb-6">We reply within 24 hours — usually much sooner.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot */}
                    <input type="text" name="_hp" autoComplete="off" tabIndex={-1} aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="lp-firstName" className="block text-xs font-semibold text-gray-600 mb-1">First Name *</label>
                        <input type="text" id="lp-firstName" name="firstName" required placeholder="John" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="lp-lastName" className="block text-xs font-semibold text-gray-600 mb-1">Last Name *</label>
                        <input type="text" id="lp-lastName" name="lastName" required placeholder="Smith" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lp-email" className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
                      <input type="email" id="lp-email" name="email" required placeholder="john@company.com" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="lp-phone" className="block text-xs font-semibold text-gray-600 mb-1">Phone</label>
                      <input type="tel" id="lp-phone" name="phone" placeholder="+1 (416) 000-0000" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="lp-city" className="block text-xs font-semibold text-gray-600 mb-1">Your City *</label>
                      <select id="lp-city" name="city" required className={inputClass}>
                        <option value="">Select your city</option>
                        {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="lp-service" className="block text-xs font-semibold text-gray-600 mb-1">Service Needed *</label>
                      <select id="lp-service" name="service" required className={inputClass}>
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="lp-message" className="block text-xs font-semibold text-gray-600 mb-1">Tell Us About Your Project</label>
                      <textarea id="lp-message" name="message" rows={3} placeholder="Brief description of what you need..."
                        className={`${inputClass} resize-none`} />
                    </div>

                    {error && (
                      <p className="text-sm text-red-500 font-medium">Something went wrong. Please try again or call 647-689-6069.</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 text-white font-black rounded-xl text-base transition-all duration-300 disabled:opacity-60"
                      style={{ background: "#00AADF", boxShadow: "0 4px 20px rgba(0,170,223,0.4)" }}
                    >
                      {submitting ? "Sending..." : "Get My Free Quote →"}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      No spam. No commitment. We reply within 24 hrs.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-5 border-b border-gray-100 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {[
              { num: "150+", label: "5-Star Reviews" },
              { num: "500+", label: "Websites Launched" },
              { num: "10+", label: "Years in Business" },
              { num: "24+", label: "Cities Served" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black" style={{ color: "#00AADF" }}>{s.num}</div>
                <div className="text-xs text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Everything Your Business Needs Online</h2>
            <p className="text-gray-500 max-w-xl mx-auto">One agency. All services. No juggling multiple vendors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {serviceCards.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-gray-900 text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Portfolio button */}
          <div className="text-center">
            <Link
              href="/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all duration-200"
              style={{ borderColor: "#00AADF", color: "#00AADF" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              View Our Portfolio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
            <p className="text-gray-400 text-xs mt-2">Opens in a new tab — come back and get your quote</p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" style={{ color: "#FFB800" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-400 text-sm">5.0 average — 150+ verified Google reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" style={{ color: "#FFB800" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-black text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-white/60 mb-8">
            Fill out the form above or call us directly. We reply within 24 hours with a free, no-obligation quote tailored to your city and budget.
          </p>
          <a
            href="tel:647-689-6069"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-black rounded-xl text-lg transition-all duration-200"
            style={{ background: "#00AADF", boxShadow: "0 4px 24px rgba(0,170,223,0.4)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call 647-689-6069
          </a>
          <p className="text-white/30 text-xs mt-4">Mon–Fri, 8am–6pm EST</p>
        </div>
      </section>

    </>
  );
}
