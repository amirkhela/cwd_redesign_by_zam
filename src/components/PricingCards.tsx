import Link from "next/link";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export interface PricingPlan {
  name: string;
  price: string;
  note?: string;
  desc: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
}

// Package grid shared by /web-design-packages and /services/app-development.
// Each card ends with the same two actions as the rest of the site: call, or
// start a quote on /contact.
export default function PricingCards({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div key={plan.name}
          className={`relative flex flex-col rounded-2xl p-7 sm:p-8 reveal border transition-all duration-300 ${plan.highlight ? "border-[#00AADF]" : "border-gray-100 bg-white hover:border-[#00AADF]/30 hover:shadow-lg"}`}
          style={plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 40px rgba(0,170,223,0.3)" } : { boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
          {plan.badge && (
            <span className={`absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase ${plan.highlight ? "bg-white text-[#003B6F]" : "bg-[#00AADF] text-white"}`}>
              {plan.badge}
            </span>
          )}
          <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${plan.highlight ? "text-white/80" : "text-[#00AADF]"}`}>{plan.name}</h3>
          <p className={`text-4xl font-black mb-0.5 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</p>
          <p className={`text-xs mb-4 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.note ?? "One-time, CAD + HST"}</p>
          <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/85" : "text-gray-600"}`}>{plan.desc}</p>
          <ul className="space-y-2.5 mb-8">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <svg className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-[#00AADF]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-2.5">
            <Link href="/contact"
              className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${plan.highlight ? "bg-white text-[#003B6F] hover:bg-white/90" : "text-white hover:opacity-90"}`}
              style={!plan.highlight ? { background: "linear-gradient(135deg, #003B6F, #00AADF)" } : {}}>
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href={`tel:${config.phone}`}
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm border transition-colors ${plan.highlight ? "border-white/40 text-white hover:bg-white/10" : "border-gray-200 text-gray-700 hover:border-[#00AADF] hover:text-[#00AADF]"}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.phone}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// schema.org OfferCatalog for a set of plans. Every Offer carries price AND
// priceCurrency together (see the note in ServicePageTemplate) and points at the
// one Organization node instead of a stub.
export function offerCatalog(name: string, plans: PricingPlan[]) {
  return {
    "@type": "OfferCatalog",
    name,
    itemListElement: plans
      .filter((p) => /^\$[\d,]+$/.test(p.price))
      .map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.desc,
        price: p.price.replace(/[$,]/g, ""),
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        seller: { "@id": `https://${config.domain}/#organization` },
      })),
  };
}
