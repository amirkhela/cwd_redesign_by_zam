"use client";

import { useId, useState } from "react";
import { trackLead } from "@/lib/analytics";
import { getRecaptchaToken, loadRecaptcha } from "@/lib/recaptcha";

/**
 * Free SEO audit request form, used on every SEO page in place of the free-mockup
 * quote form. Contact details + website only. Posts to /api/contact like every other
 * form; the website travels in its own field so a URL never lands in `message`
 * (the route treats links there as spam).
 */
export default function SeoAuditForm({
  source = "free-seo-audit",
  showHowItWorks = true,
  id,
}: {
  source?: string;
  /** Hide the "How the free SEO audit works" link on /free-seo-audit itself. */
  showHowItWorks?: boolean;
  id?: string;
}) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", website: "" });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const hp = (e.currentTarget.elements.namedItem("_hp") as HTMLInputElement | null)?.value || "";
    setStatus("sending");
    // One "Full name" box; the API still takes first/last, so split on the first space.
    const name = form.fullName.trim().replace(/\s+/g, " ");
    const space = name.indexOf(" ");
    const firstName = space === -1 ? name : name.slice(0, space);
    const lastName = space === -1 ? "" : name.slice(space + 1);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
          service: "Free SEO Audit",
          website: form.website,
          message: `Free SEO audit request from: ${source}.`,
          source,
          recaptchaToken,
          _hp: hp,
        }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      if (data.success && data.counted !== false) trackLead(source);
      setStatus(data.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full px-4 py-3 rounded-xl text-base sm:text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-400";
  const labelCls = "block text-[11px] font-semibold text-white/60 mb-1 pl-1";
  const fieldStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
  };
  const card = {
    background: "rgba(0,10,28,0.95)",
    border: "1px solid rgba(0,170,223,0.3)",
    boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 50px rgba(0,170,223,0.08)",
  };

  if (status === "done") {
    return (
      <div id={id} className="rounded-2xl p-8 flex flex-col items-center justify-center text-center" style={{ ...card, minHeight: 380 }}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-5"
          style={{ background: "rgba(0,208,132,0.15)", border: "2px solid rgba(0,208,132,0.4)" }}
        >
          ✓
        </div>
        <h3 className="text-white font-black text-xl mb-2">Your Free SEO Audit Is Booked In!</h3>
        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
          We will check your website and your Google listing, and our team will reach out within 24 hours about
          your free SEO audit report.
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={submit} onFocus={() => { loadRecaptcha(); }} className="rounded-2xl p-6" style={card}>
      {/* Honeypot: hidden from real users, bots fill it out */}
      <input
        type="text"
        name="_hp"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00AADF" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#00AADF" }}>
            Free SEO Audit Report
          </span>
        </div>
        <h2 className="text-white font-black text-lg leading-tight">Find Out Why You&rsquo;re Not Ranking on Google</h2>
        <p className="text-white/45 text-xs mt-1">We check your site and Google listing. No cost, no obligation.</p>
      </div>

      <div className="space-y-3">
        <div>
          <label htmlFor={`${uid}-fullName`} className={labelCls}>Full name *</label>
          <input id={`${uid}-fullName`} type="text" autoComplete="name" placeholder="e.g. John Smith" required value={form.fullName} onChange={set("fullName")} className={field} style={fieldStyle} />
        </div>

        <div>
          <label htmlFor={`${uid}-email`} className={labelCls}>Email *</label>
          <input id={`${uid}-email`} type="email" autoComplete="email" placeholder="you@company.com" required value={form.email} onChange={set("email")} className={field} style={fieldStyle} />
        </div>

        <div>
          <label htmlFor={`${uid}-phone`} className={labelCls}>Phone</label>
          <input id={`${uid}-phone`} type="tel" autoComplete="tel" placeholder="(647) 555-0123" value={form.phone} onChange={set("phone")} className={field} style={fieldStyle} />
        </div>

        <div>
          <label htmlFor={`${uid}-website`} className={labelCls}>Website *</label>
          <input id={`${uid}-website`} type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.ca" required value={form.website} onChange={set("website")} className={field} style={fieldStyle} />
        </div>

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
          {status === "sending" ? "Sending…" : "Get My Free SEO Audit"}
        </button>

        {status === "error" && (
          <p className="text-red-400 text-xs text-center">Something went wrong. Please call us or try again.</p>
        )}
      </div>

      <p className="text-white/25 text-xs text-center mt-4">🔒 Secure & confidential. No spam.</p>
      {showHowItWorks && (
        <p className="text-center mt-2">
          <a href="/free-seo-audit" className="text-xs font-semibold hover:underline" style={{ color: "#00AADF" }}>
            What&rsquo;s in the free SEO audit →
          </a>
        </p>
      )}
    </form>
  );
}
