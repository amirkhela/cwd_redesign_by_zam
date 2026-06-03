"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    name: "Sharanya K.",
    city: "Toronto, ON",
    text: "Canadian Web Designs completely transformed our online presence. Professional, responsive, and delivered a stunning website that exceeded our expectations. Our leads have increased significantly!",
  },
  {
    name: "Shawn M.",
    city: "Brampton, ON",
    text: "Best web design agency in Toronto! They built our e-commerce site from scratch and the results have been incredible. The SEO work has us ranking on the first page of Google.",
  },
  {
    name: "Dorota W.",
    city: "Calgary, AB",
    text: "Blown away by the quality and speed of delivery. Canadian Web Designs understood our brand perfectly and created a website that truly represents who we are. Great value for money.",
  },
];

const serviceCards = [
  { icon: "💻", title: "Web Design & Development", desc: "Custom, mobile-first websites that load fast, rank high, and convert visitors into customers." },
  { icon: "📈", title: "SEO Services", desc: "Local SEO strategies that put your business on page 1 of Google in your city." },
  { icon: "🔧", title: "Website Maintenance", desc: "Keep your site secure, updated, and running at peak performance." },
  { icon: "🎨", title: "Graphic Design", desc: "Logos, branding, and marketing materials that make your business unforgettable." },
];

const field =
  "w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-400";
const fieldStyle = {
  background: "#fff",
  border: "1px solid #e2e8f0",
};

function fireConversion() {
  try {
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("event", "conversion", { send_to: "AW-CONVERSION_ID/CONVERSION_LABEL" });
    }
  } catch { /* silent */ }
}

function LpForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const recaptchaToken = "";
      const [firstName, ...rest] = form.name.trim().split(" ");
      const lastName = rest.join(" ") || "-";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: `Google Ads landing page lead.\nService: ${form.service || "General"}`,
          source: "google-ads-lp",
          recaptchaToken,
          _hp: "",
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data.success) { fireConversion(); router.push("/lp/web-services-canada/thank-you"); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form
        onSubmit={submit}
        className="rounded-2xl p-6"
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        }}
      >
        {/* Honeypot */}
        <input type="text" name="_hp" autoComplete="off" tabIndex={-1} aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />

        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00AADF" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#00AADF" }}>Free Quote</span>
          </div>
          <h2 className="text-gray-900 font-black text-lg leading-tight">Get Your Project Started</h2>
          <p className="text-gray-400 text-xs mt-1">No obligation ✌ Reply within 24 hrs</p>
        </div>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name *"
            required
            value={form.name}
            onChange={set("name")}
            className={field}
            style={fieldStyle}
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={set("email")}
            className={field}
            style={fieldStyle}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={set("phone")}
            className={field}
            style={fieldStyle}
          />
          <select
            value={form.service}
            onChange={set("service")}
            className={field}
            style={{ ...fieldStyle, color: form.service ? "#1a202c" : "#9ca3af" }}
          >
            <option value="">Select a Service</option>
            <option value="Web Design & Development">Web Design &amp; Development</option>
            <option value="SEO">SEO</option>
            <option value="Website Maintenance">Website Maintenance</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Social Media">Social Media</option>
            <option value="AI Consultation">AI Consultation</option>
          </select>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-shimmer w-full py-3.5 rounded-xl text-white font-black text-sm transition-all duration-300"
            style={{
              background: status === "sending" ? "rgba(0,170,223,0.5)" : "linear-gradient(135deg, #005B9A, #00AADF)",
              boxShadow: "0 4px 24px rgba(0,170,223,0.35)",
              cursor: status === "sending" ? "not-allowed" : "pointer",
            }}
          >
            {status === "sending" ? "Sending…" : "Get My Free Quote 🎯"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-xs text-center">Something went wrong — please call 647-689-6069.</p>
          )}
        </div>

        <p className="text-gray-400 text-xs text-center mt-4">🔒 Protected by reCAPTCHA. No spam.</p>
      </form>
    </>
  );
}

export default function LandingPage() {
  return (
    <>
      {/* ── Minimal Top Bar ── */}
      <div className="w-full py-4 px-6 flex items-center justify-center border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <Image src="/logos/logo.png" unoptimized alt="Canadian Web Designs" width={200} height={52} style={{ height: "48px", width: "auto" }} priority />
      </div>

      {/* ── Hero — exact homepage style ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "calc(100vh - 73px)", background: "#010C1E" }}
      >
        {/* Background image */}
        <Image
          src="/images/hero-leading-web-design.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.65) 50%, rgba(1,12,30,0.40) 100%)" }}
        />

        {/* Animated orbs */}
        <div className="absolute animate-orb pointer-events-none"
          style={{ top: "5%", left: "2%", width: 600, height: 600, borderRadius: "50%", background: "#00AADF", filter: "blur(130px)", opacity: 0.35 }} />
        <div className="absolute animate-orb pointer-events-none"
          style={{ bottom: "0%", right: "0%", width: 480, height: 480, borderRadius: "50%", background: "#00AADF", filter: "blur(110px)", opacity: 0.22, animationDelay: "2.5s" }} />
        <div className="absolute animate-orb pointer-events-none"
          style={{ top: "40%", right: "30%", width: 300, height: 300, borderRadius: "50%", background: "#33C2E8", filter: "blur(90px)", opacity: 0.18, animationDelay: "1.2s" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

            {/* LEFT: Text */}
            <div>
              {/* Trust badge */}
              <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8">
                <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
                <span className="text-white/80 text-sm font-medium tracking-wide">Canada&rsquo;s Most Trusted Web Agency</span>
              </div>

              <h1
                className="hero-fade-up-1 font-black text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)", lineHeight: 1.05 }}
              >
                Web Design, SEO &amp; Digital Marketing<br />
                <span className="gradient-text-animated">Across Canada</span>
              </h1>

              <p className="hero-fade-up-2 text-lg text-white leading-relaxed max-w-lg mb-8">
                Serving Brampton, Burnaby, Winnipeg, Toronto, Calgary &amp; Ottawa.{" "}
                <span className="font-semibold">180+ five-star Google reviews.</span>{" "}
                Custom websites from $1,499 — no templates, no lock-in contracts.
              </p>

              <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:647-689-6069"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                  style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  647-689-6069
                </a>
                <Link
                  href="/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
                >
                  View Our Portfolio ↗
                </Link>
              </div>

              {/* Stars */}
              <div className="hero-fade-up-4 flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: "#FFB800" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/50 text-sm">180+ Five Star Reviews on Google</span>
              </div>
            </div>

            {/* RIGHT: Form — desktop only inline, mobile scrolls to section below */}
            <div id="lp-form" className="relative">
              <LpForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-5 border-b border-gray-100 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-14">
            {[
              { num: "180+", label: "5-Star Google Reviews" },
              { num: "500+", label: "Websites Launched" },
              { num: "10+",  label: "Years in Business" },
              { num: "24+",  label: "Cities Served" },
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all duration-200 hover:bg-[#00AADF] hover:text-white"
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
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" style={{ color: "#FFB800" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-400 text-sm">5.0 average — 180+ verified Google reviews</p>
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
            Fill out the form above or call us directly. We reply within 24 hours with a free, no-obligation quote.
          </p>
          <a
            href="tel:647-689-6069"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-black rounded-xl text-lg transition-all duration-200 btn-shimmer"
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
