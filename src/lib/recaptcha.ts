// reCAPTCHA v3 for the site forms. The script loads on the first touch of a form
// (not on page load), so the 40+ pages with a hero form don't pay for it up front.
// Never throws and never blocks a submit: no token just means the server sees "unverified".
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

let loading: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return Promise.resolve();
  if ((window as any).grecaptcha) return Promise.resolve();
  if (!loading) {
    loading = new Promise<void>((resolve) => {
      const s = document.createElement("script");
      s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => { loading = null; resolve(); };
      document.head.appendChild(s);
    });
  }
  return loading;
}

export async function getRecaptchaToken(action = "contact"): Promise<string> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return "";
  try {
    await loadRecaptcha();
    const gc = (window as any).grecaptcha;
    if (!gc) return "";
    const token = new Promise<string>((resolve) => {
      const run = () => {
        try {
          const result = gc.execute(RECAPTCHA_SITE_KEY, { action });
          if (result && typeof result.then === "function") {
            result.then((t: string) => resolve(t || "")).catch(() => resolve(""));
          } else {
            resolve("");
          }
        } catch {
          resolve("");
        }
      };
      if (typeof gc.ready === "function") gc.ready(run);
      else run();
    });
    // a slow or blocked reCAPTCHA must not hold up a real lead
    const timeout = new Promise<string>((resolve) => setTimeout(() => resolve(""), 5000));
    return await Promise.race([token, timeout]);
  } catch {
    return "";
  }
}
