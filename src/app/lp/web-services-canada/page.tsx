"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import GoogleReviews from "@/components/GoogleReviews";

const serviceCards = [
  {
    icon: "💻",
    title: "Web Design & Development",
    desc: "Custom, mobile-first websites that load fast, rank on Google, and convert visitors into paying customers.",
    badge: "Most Popular",
    href: "/services/web-design-development",
  },
  {
    icon: "⚡",
    title: "Custom Website Development",
    desc: "High-end, codebase websites built with React & Next.js. No templates — engineered from scratch for performance.",
    badge: "Premium",
    href: "/services/web-design-development",
  },
  {
    icon: "🛒",
    title: "Shopify Website Design",
    desc: "Professional Shopify stores designed to maximize sales. Custom themes, product setup & payment integration.",
    badge: null,
    href: "/services/web-design-development",
  },
  {
    icon: "🔵",
    title: "WordPress Website Design",
    desc: "Beautiful, fast WordPress websites with custom themes. Easy to manage with powerful SEO capabilities built in.",
    badge: null,
    href: "/services/web-design-development",
  },
  {
    icon: "📈",
    title: "SEO Services",
    desc: "Local and national SEO strategies that put your business on page 1 of Google across Canada.",
    badge: null,
    href: "/services/seo",
  },
  {
    icon: "🔧",
    title: "Website Maintenance",
    desc: "Keep your site secure, updated, and running at peak performance. Monthly maintenance plans available.",
    badge: null,
    href: "/services/website-maintenance",
  },
  {
    icon: "🎨",
    title: "Graphic Design & Branding",
    desc: "Logos, brand identity, business cards & marketing materials that make your Canadian business unforgettable.",
    badge: null,
    href: "/services/graphic-design",
  },
  {
    icon: "📣",
    title: "Google Ads & PPC Management",
    desc: "Data-driven paid advertising campaigns that generate leads and maximize your return on ad spend.",
    badge: null,
    href: "/services/google-ads-management",
  },
];

const whyUs = [
  { icon: "🇨🇦", title: "Canadian-Owned Agency", desc: "We understand the Canadian market. Based in Ontario, serving businesses coast to coast." },
  { icon: "🚫", title: "No Lock-In Contracts", desc: "Month-to-month. You stay because we deliver results — not because you're trapped in a contract." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Most websites launch within 2–4 weeks. No endless delays, no excuses, no surprises." },
  { icon: "📊", title: "Results-Focused", desc: "We build sites that rank on Google and convert visitors into actual paying customers." },
  { icon: "🤝", title: "Dedicated Support", desc: "Direct access to your team. Real humans — not bots or offshore call centres." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. Custom websites tailored to your needs. You always know what you pay." },
];

const cities = [
  "Toronto", "Brampton", "Mississauga", "Winnipeg",
  "Vancouver", "Calgary", "Ottawa", "Edmonton",
  "Burnaby", "Richmond Hill", "Markham", "Hamilton",
  "Kitchener", "London", "Surrey", "Oshawa",
];

const featuredProjects = [
  { name: "Cloud Pharmacy",       url: "cloudpharmacy.ca",      img: "/portfolio/cloud-pharmacy.png",       category: "Health & Wellness" },
  { name: "Evolve Media Group",   url: "evolvemediagroup.ca",   img: "/portfolio/evolve-media-group.jpg",   category: "Business & Professional" },
  { name: "Palazzo Talenti",      url: "palazzotalenti.ca",     img: "/portfolio/palazzo-talenti.png",      category: "Events & Entertainment" },
  { name: "Remove My Walls",      url: "removemywalls.ca",      img: "/portfolio/remove-my-walls.jpg",      category: "Construction & Trades" },
  { name: "Rejuvenation by Dale", url: "rejuvenationbydale.ca", img: "/portfolio/rejuvenation-by-dale.jpg", category: "Health & Wellness" },
  { name: "MOS Solutions",        url: "mossolutions.ca",       img: "/portfolio/mos-solutions.jpg",        category: "Business & Professional" },
];

const field =
  "w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-400";
const fieldStyle = { background: "#fff", border: "1px solid #e2e8f0" };

function fireConversion() {
  try {
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("event", "lp_quote_submit", { currency: "CAD", value: 1 });
    }
  } catch { /* silent */ }
}

function LpForm({ heading = "Get Your Project Started" }: { heading?: string }) {
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
          recaptchaToken: "",
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
    <form
      onSubmit={submit}
      className="rounded-2xl p-6"
      style={{ background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
    >
      {/* Honeypot */}
      <input type="text" name="_hp" autoComplete="off" tabIndex={-1} aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />

      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00AADF" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#00AADF" }}>Free Quote — No Obligation</span>
        </div>
        <h2 className="text-gray-900 font-black text-lg leading-tight">{heading}</h2>
        <p className="text-gray-400 text-xs mt-1">✌ We reply within 24 hours — guaranteed</p>
      </div>

      <div className="space-y-3">
        <input type="text" placeholder="Your Full Name *" required value={form.name} onChange={set("name")} className={field} style={fieldStyle} />
        <input type="email" placeholder="Email Address *" required value={form.email} onChange={set("email")} className={field} style={fieldStyle} />
        <input type="tel" placeholder="Phone Number" value={form.phone} onChange={set("phone")} className={field} style={fieldStyle} />
        <select value={form.service} onChange={set("service")} className={field} style={{ ...fieldStyle, color: form.service ? "#1a202c" : "#9ca3af" }}>
          <option value="">Select a Service</option>
          <option value="Web Design & Development">Web Design &amp; Development</option>
          <option value="Custom Website Development">Custom Website Development</option>
          <option value="Shopify Website Design">Shopify Website Design</option>
          <option value="WordPress Website Design">WordPress Website Design</option>
          <option value="SEO Services">SEO Services</option>
          <option value="Website Maintenance">Website Maintenance</option>
          <option value="Graphic Design & Branding">Graphic Design &amp; Branding</option>
          <option value="Google Ads / PPC Management">Google Ads / PPC Management</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="AI Consultation">AI Consultation</option>
          <option value="Other / Not Sure">Other / Not Sure</option>
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
          <p className="text-red-400 text-xs text-center">
            Something went wrong — call us at{" "}
            <a href="tel:647-689-6069" className="underline font-bold">647-689-6069</a>
          </p>
        )}
      </div>

      <p className="text-gray-400 text-xs text-center mt-4">🔒 Your info is safe. No spam, ever.</p>
    </form>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <>
      {/* ── Top Bar ── */}
      <div className="w-full py-3 px-6 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <Image src="/logos/logo.png" unoptimized alt="Canadian Web Designs — Web Design Agency Canada" width={180} height={48} style={{ height: "44px", width: "auto" }} priority />
        <a
          href="tel:647-689-6069"
          className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm"
          style={{ background: "linear-gradient(135deg, #005B9A, #00AADF)" }}
        >
          <PhoneIcon />
          <span className="hidden sm:inline">647-689-6069</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: "calc(100vh - 65px)", background: "#010C1E" }}>
        <Image src="/images/hero-leading-web-design.jpg" alt="Web Design Agency Canada — Canadian Web Designs" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.93) 0%, rgba(1,12,30,0.68) 50%, rgba(1,12,30,0.42) 100%)" }} />
        <div className="absolute animate-orb pointer-events-none" style={{ top: "5%", left: "2%", width: 600, height: 600, borderRadius: "50%", background: "#00AADF", filter: "blur(130px)", opacity: 0.35 }} />
        <div className="absolute animate-orb pointer-events-none" style={{ bottom: "0%", right: "0%", width: 480, height: 480, borderRadius: "50%", background: "#00AADF", filter: "blur(110px)", opacity: 0.22, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <div>
              <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8">
                <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
                <span className="text-white/80 text-sm font-medium tracking-wide">Canada&rsquo;s Most Trusted Web Agency</span>
              </div>

              <h1 className="hero-fade-up-1 font-black text-white leading-tight mb-6" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
                Web Design &amp; Digital Marketing<br />
                <span className="gradient-text-animated">for Canadian Businesses</span>
              </h1>

              <p className="hero-fade-up-2 text-lg text-white/80 leading-relaxed max-w-lg mb-8">
                Serving Toronto, Brampton, Winnipeg, Vancouver, Calgary &amp; across Canada.{" "}
                <strong className="text-white">200+ five-star Google reviews.</strong>{" "}
                Custom websites — no templates, no lock-in contracts.
              </p>

              <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#lp-form"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base"
                  style={{ background: "linear-gradient(135deg, #005B9A, #00AADF)", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}
                >
                  Get a Free Quote →
                </a>
                <a
                  href="tel:647-689-6069"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
                >
                  <PhoneIcon />
                  647-689-6069
                </a>
              </div>

              <div className="hero-fade-up-4 hidden sm:flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: "#FFB800" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/60 text-sm">200+ Five-Star Reviews on Google</span>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div id="lp-form" className="relative order-first lg:order-none">
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
              { num: "200+", label: "5-Star Google Reviews" },
              { num: "500+", label: "Websites Launched" },
              { num: "10+",  label: "Years in Business" },
              { num: "24+",  label: "Cities Across Canada" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black" style={{ color: "#00AADF" }}>{s.num}</div>
                <div className="text-xs text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <GoogleReviews />

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(0,170,223,0.1)", color: "#00AADF" }}>Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Everything Your Business Needs Online</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">One Canadian agency. All digital services. No juggling multiple vendors across Canada.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {serviceCards.map((s) => (
              <Link key={s.title} href={s.href} target="_blank" rel="noopener noreferrer"
                className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 group block">
                {s.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ background: "rgba(0,170,223,0.15)", color: "#00AADF" }}>{s.badge}</span>
                )}
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-gray-900 text-base mb-2 group-hover:text-[#00AADF] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-3 inline-block text-xs font-bold" style={{ color: "#00AADF" }}>Learn more →</span>
              </Link>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="rounded-2xl p-8 lg:p-12" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 100%)" }}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">Not Sure Which Service You Need?</h3>
                <p className="text-white/60 max-w-lg">Book a free 15-minute call. We&rsquo;ll assess your business and tell you exactly what will drive the best ROI.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a href="#bottom-form" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-base whitespace-nowrap" style={{ background: "#00AADF", boxShadow: "0 4px 24px rgba(0,170,223,0.4)" }}>
                  Get a Free Quote →
                </a>
                <a href="tel:647-689-6069" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-white/20 text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap">
                  <PhoneIcon />
                  647-689-6069
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(0,170,223,0.1)", color: "#00AADF" }}>Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Why 180+ Canadian Businesses Choose Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From Toronto to Vancouver — here&rsquo;s what makes Canadian Web Designs different from other web agencies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-black text-gray-900 text-base mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#bottom-form" className="btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-4 text-white font-bold rounded-xl text-base" style={{ background: "linear-gradient(135deg, #005B9A, #00AADF)", boxShadow: "0 4px 24px rgba(0,170,223,0.35)" }}>
              Start Your Project Today →
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(0,170,223,0.1)", color: "#00AADF" }}>Our Work</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Websites We&rsquo;ve Built for Canadian Businesses</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Custom, high-performance websites across every industry — no templates, built from scratch.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((p) => (
              <a
                key={p.name}
                href={`https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 block bg-white"
              >
                <div className="overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={p.img}
                    alt={`${p.name} website designed by Canadian Web Designs`}
                    width={600}
                    height={338}
                    unoptimized
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold tracking-wide" style={{ color: "#00AADF" }}>{p.category}</span>
                  <h3 className="font-black text-gray-900 mt-1 text-base">{p.name}</h3>
                  <span className="text-xs text-gray-400">{p.url}</span>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sky-400 transition-all duration-300 pointer-events-none" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base border-2 transition-all duration-200 hover:bg-[#00AADF] hover:text-white"
              style={{ borderColor: "#00AADF", color: "#00AADF" }}
            >
              View Our Full Portfolio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
            <p className="text-gray-400 text-xs mt-2">Opens in a new tab — come back and get your quote</p>
          </div>
        </div>
      </section>

      {/* ── Cities Served ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Web Design Services Across Canada</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">We serve businesses in every major Canadian city. Wherever you are, we&rsquo;re your trusted Canadian web design agency.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {cities.map((city) => (
              <span key={city} className="px-4 py-2 rounded-full text-sm font-semibold border bg-white" style={{ borderColor: "#e2e8f0", color: "#374151" }}>
                📍 {city}
              </span>
            ))}
          </div>
          <a href="#bottom-form" className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-base" style={{ background: "linear-gradient(135deg, #005B9A, #00AADF)" }}>
            Get a Free Quote for Your City →
          </a>
        </div>
      </section>

      {/* ── Bottom Form ── */}
      <section id="bottom-form" className="py-20" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(0,170,223,0.2)", color: "#00AADF" }}>Get Started Today</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Ready to Grow Your Business Online?</h2>
              <p className="text-white/60 mb-8 text-lg">Fill out the form and we&rsquo;ll send a free, no-obligation quote within 24 hours. Or call us directly — we pick up.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "✅ Free consultation — no pressure, no obligation",
                  "✅ Custom quote tailored to your business & budget",
                  "✅ Response within 24 hours, guaranteed",
                  "✅ 100% Canadian team, Canadian support",
                  "✅ No lock-in contracts — ever",
                ].map((item) => (
                  <li key={item} className="text-white/80 text-sm">{item}</li>
                ))}
              </ul>
              <a
                href="tel:647-689-6069"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 text-white font-black rounded-xl text-base"
                style={{ background: "#00AADF", boxShadow: "0 4px 24px rgba(0,170,223,0.4)" }}
              >
                <PhoneIcon />
                Call 647-689-6069
              </a>
              <p className="text-white/30 text-xs mt-3">Mon–Fri, 8am–6pm EST</p>
            </div>
            <div>
              <LpForm heading="Get Your Free Quote" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
