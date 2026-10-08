// GA4 lead events. gtag.js loads lazyOnload, so a lead can happen before it
// exists -- when it does, the event is queued on dataLayer in gtag's own
// argument format and gtag.js replays it on load. Never throws.
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    const w = window as any;
    if (typeof w.gtag === "function") {
      w.gtag("event", name, params);
    } else {
      w.dataLayer = w.dataLayer || [];
      // eslint-disable-next-line prefer-rest-params
      (function gtag(..._args: unknown[]) { w.dataLayer.push(arguments); })("event", name, params);
    }
  } catch { /* analytics must never break a form */ }
}

// Fire ONLY after /api/contact has answered success -- a click is not a lead.
export function trackLead(formId: string) {
  trackEvent("generate_lead", { form_id: formId, page_path: window.location.pathname });
}
