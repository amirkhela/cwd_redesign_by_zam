"use client";

import { useId, useState } from "react";
import { trackLead } from "@/lib/analytics";
import { getRecaptchaToken, loadRecaptcha } from "@/lib/recaptcha";

/**
 * Free website mockup request form (/free-website-mockup). Posts to /api/contact
 * like every other form; business name and current website travel as their own
 * fields so a URL never lands in `message` (the route treats links there as spam).
 */
export default function MockupRequestForm({ source = "free-website-mockup" }: { source?: string }) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    business: "",
    website: "",
    industry: "",
    goals: "",
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const hp = (e.currentTarget.elements.namedItem("_hp") as HTMLInputElement | null)?.value || "";
    setStatus("sending");
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          service: "Free Website Mockup",
          business: form.business,
          website: form.website,
          message:
            `Free website mockup + quote request.\n\n` +
            `Industry: ${form.industry || "Not given"}\n\n` +
            `What the new site should do:\n${form.goals || "Not given"}`,
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
      <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center" style={{ ...card, minHeight: 420 }}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-5"
          style={{ background: "rgba(0,208,132,0.15)", border: "2px solid rgba(0,208,132,0.4)" }}
        >
          ✓
        </div>
        <h3 className="text-white font-black text-xl mb-2">Your Free Mockup Is Booked In!</h3>
        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
          A designer will reach out within 24 hours with a few quick questions, then send your free mockup
          together with your free quote.
        </p>
      </div>
    );
  }

  return (
    <form id="mockup-form" onSubmit={submit} onFocus={() => { loadRecaptcha(); }} className="rounded-2xl p-6" style={card}>
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
            100% Free &middot; No Obligation
          </span>
        </div>
        <h2 className="text-white font-black text-lg leading-tight">Get Your Free Mockup + Free Quote</h2>
        <p className="text-white/45 text-xs mt-1">No credit card. No payment. Reply within 24 hrs.</p>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${uid}-firstName`} className={labelCls}>First name *</label>
            <input id={`${uid}-firstName`} type="text" placeholder="e.g. John" required value={form.firstName} onChange={set("firstName")} className={field} style={fieldStyle} />
          </div>
          <div>
            <label htmlFor={`${uid}-lastName`} className={labelCls}>Last name *</label>
            <input id={`${uid}-lastName`} type="text" placeholder="e.g. Smith" required value={form.lastName} onChange={set("lastName")} className={field} style={fieldStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${uid}-email`} className={labelCls}>Email *</label>
            <input id={`${uid}-email`} type="email" placeholder="you@company.com" required value={form.email} onChange={set("email")} className={field} style={fieldStyle} />
          </div>
          <div>
            <label htmlFor={`${uid}-phone`} className={labelCls}>Phone</label>
            <input id={`${uid}-phone`} type="tel" placeholder="(647) 555-0123" value={form.phone} onChange={set("phone")} className={field} style={fieldStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${uid}-business`} className={labelCls}>Business name *</label>
            <input id={`${uid}-business`} type="text" placeholder="e.g. Smith Plumbing" required value={form.business} onChange={set("business")} className={field} style={fieldStyle} />
          </div>
          <div>
            <label htmlFor={`${uid}-industry`} className={labelCls}>Industry</label>
            <input id={`${uid}-industry`} type="text" placeholder="e.g. Plumbing, dental, law" value={form.industry} onChange={set("industry")} className={field} style={fieldStyle} />
          </div>
        </div>

        <div>
          <label htmlFor={`${uid}-website`} className={labelCls}>Current website (if you have one)</label>
          <input id={`${uid}-website`} type="text" inputMode="url" placeholder="yourbusiness.ca" value={form.website} onChange={set("website")} className={field} style={fieldStyle} />
        </div>

        <div>
          <label htmlFor={`${uid}-goals`} className={labelCls}>What should your new site do?</label>
          <textarea
            id={`${uid}-goals`}
            rows={3}
            placeholder="e.g. get more calls, take bookings, sell online"
            value={form.goals}
            onChange={set("goals")}
            className={field}
            style={fieldStyle}
          />
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
          {status === "sending" ? "Sending…" : "Get My Free Mockup & Quote"}
        </button>

        {status === "error" && (
          <p className="text-red-400 text-xs text-center">Something went wrong. Please call us or try again.</p>
        )}
      </div>

      <p className="text-white/25 text-xs text-center mt-4">🔒 Secure & confidential. No spam.</p>
    </form>
  );
}
