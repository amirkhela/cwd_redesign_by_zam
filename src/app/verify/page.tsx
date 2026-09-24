import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getConfig } from "@/lib/client-config";

/**
 * /verify -- how a client checks that a message or an invoice is really from us.
 *
 * WHY THIS EXISTS. Scammers email CWD clients from look-alike Gmail addresses,
 * pretending to be Amir Khela, and ask them to pay. One client sent a real
 * Interac e-Transfer to a stranger because she never checked the recipient name
 * her bank showed her before she confirmed it.
 *
 * THE PAGE IS BUILT AROUND THE PAYMENT CHECK ON PURPOSE. It must never claim "we
 * never use Gmail" or "every email from us ends in our domain": some CWD system
 * mail still comes from Gmail, and a scammer can send from any address at all.
 * The recipient name a banking app shows before an e-Transfer is confirmed is the
 * one check that works whatever address the email came from.
 *
 * Schema: the breadcrumb (which carries the WebPage node) and nothing else, as on
 * /reviews. The site-wide organization node in layout.tsx stays the one entity.
 *
 * No `.reveal` classes and no client JS: every word is visible on first paint,
 * because the reader is often a worried client on a phone, mid-payment.
 *
 * Judged at 390px.
 */

const config = getConfig();

const TITLE = "Is this email really from Canadian Web Designs? | How to verify us";
const DESCRIPTION =
  "Scam warning: someone is emailing our clients pretending to be Amir Khela and Canadian Web Designs. How to tell a real invoice from a fake one before you pay.";

// The payment facts this page exists to state. They are CWD's own and appear
// nowhere else in the config, so they live here, in one place, rather than being
// re-typed through the JSX.
const PAYEE_NAME = "CANADIAN WEBSITE DESIGNS INC.";
const ETRANSFER_EMAIL = "etransfer@canadianwebdesigns.ca";

// Addresses the scammers have actually used. Add new ones as they appear; the
// copy under the list already tells the reader the list cannot be complete.
const KNOWN_FAKE_ADDRESSES = [
  "amircanadianwebdesignkhela@gmail.com",
  "info.canadianwebdesigns@gmail.com",
];

// config.phone is the one source for the number; it is stored as 647-689-6069
// and shown the way a person reads it aloud.
const PHONE_DIGITS = config.phone.replace(/\D/g, "");
const PHONE_DISPLAY =
  PHONE_DIGITS.length === 10
    ? `(${PHONE_DIGITS.slice(0, 3)}) ${PHONE_DIGITS.slice(3, 6)}-${PHONE_DIGITS.slice(6)}`
    : config.phone;
const PHONE_HREF = `tel:${config.phone}`;

// Canadian Anti-Fraud Centre.
const CAFC_PHONE = "1-888-495-8501";
const CAFC_HOST = "antifraudcentre-centreantifraude.ca";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/verify" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://${config.domain}/verify`,
    type: "website",
    siteName: config.businessName,
    locale: "en_CA",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "How to check it's really Canadian Web Designs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero-leading-web-design.jpg"],
  },
};

/** An email address that may wrap at the "@" on a narrow screen, never mid-word. */
function BreakableAddress({ address }: { address: string }) {
  const at = address.indexOf("@");
  if (at < 1) return <>{address}</>;
  return (
    <>
      {address.slice(0, at)}
      <wbr />
      {address.slice(at)}
    </>
  );
}

const iconProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
} as const;

export default function VerifyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Verify It's Us", href: "/verify" }]} description={DESCRIPTION} />

      {/* ─── HERO ─── */}
      <section
        className="relative py-14 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-pretty">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Scam warning</span>
            </div>
            <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05 }}>
              How to check it&apos;s really Canadian Web Designs
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed">
              Someone is sending emails that pretend to be Amir Khela and Canadian Web Designs. Here is how to
              tell a real message from a fake one before you pay anything.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW WE BILL YOU ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-pretty">
          <span className="inline-block text-primary-dark text-sm font-bold tracking-[0.2em] uppercase mb-3">The check that matters</span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">How we bill you</h2>

          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-primary-dark" style={{ background: "#E0F5FC" }}>
              <svg className="w-5 h-5" {...iconProps}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </span>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Our invoices come from QuickBooks, from Canadian Website Designs Inc., with a Pay Now button. Paying
              with that button is the safest way: the money goes straight onto your invoice.
            </p>
          </div>

          {/* The one check that stops the scam: the name the bank shows before an
              e-Transfer is confirmed. Deliberately the loudest block on the page. */}
          <div
            className="mt-8 rounded-2xl border-2 border-[#00AADF] p-5 md:p-7"
            style={{ background: "#E0F5FC", boxShadow: "0 6px 24px rgba(0,170,223,0.18)" }}
          >
            <p className="text-gray-900 text-[17px] md:text-lg leading-relaxed">
              If you pay by <span className="whitespace-nowrap">Interac e-Transfer</span>, send it only to
            </p>
            {/* On its own line and with no trailing period: this is the string a
                client types into their bank, so it must never split mid-address or
                pick up a full stop. 15px bold fits the 390px block on one line. */}
            <p className="mt-2 rounded-xl bg-white border border-[#00AADF]/50 px-3 py-3 font-bold text-gray-900 text-[15px] sm:text-lg [overflow-wrap:anywhere]">
              <BreakableAddress address={ETRANSFER_EMAIL} />
            </p>
            <p className="text-gray-900 text-[17px] md:text-lg leading-relaxed mt-5">
              Before you confirm, your banking app shows the recipient&apos;s name. It must say
            </p>
            <div className="mt-3 flex items-center gap-3 rounded-xl bg-white border border-[#00AADF]/50 px-4 py-4">
              <svg className="w-7 h-7 shrink-0 text-[#15803D]" {...iconProps} strokeWidth={2.25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-black text-gray-900 text-lg sm:text-2xl tracking-wide leading-snug">{PAYEE_NAME}</p>
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl px-4 py-3.5" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
              <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#B91C1C]" {...iconProps}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <p className="text-[#7F1D1D] text-[17px] font-semibold leading-relaxed">
                If it shows any other name, stop and call us at{" "}
                <a href={PHONE_HREF} className="underline underline-offset-2 whitespace-nowrap py-3">{PHONE_DISPLAY}</a>.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-[#B91C1C]" style={{ background: "#FEF2F2" }}>
              <svg className="w-5 h-5" {...iconProps}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </span>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              We never ask you to pay a new account, change our banking details by email, or pay upfront for a
              &lsquo;website review&rsquo; or &lsquo;priority plan&rsquo;.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AMIR NEVER ASKS ─── */}
      <section className="py-12 md:py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-pretty">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Amir never asks you for payment</h2>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            Amir Khela does not email clients about invoices or payments. An email from &lsquo;Amir&rsquo; asking
            you to pay is <strong className="text-gray-900">fake</strong>, even if it shows his name, his photo and our logo.
          </p>
        </div>
      </section>

      {/* ─── KNOWN FAKE ADDRESSES ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-pretty">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Fake addresses we know about</h2>
          <ul className="space-y-3">
            {KNOWN_FAKE_ADDRESSES.map((address) => (
              <li
                key={address}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
              >
                <svg className="w-5 h-5 shrink-0 text-[#B91C1C]" {...iconProps}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-[15px] text-gray-900 min-w-0">
                  <BreakableAddress address={address} />
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-gray-700 text-[17px] leading-relaxed">
            New ones may appear. They copy our signature and our real addresses into their emails, so a familiar
            signature proves nothing.
          </p>
        </div>
      </section>

      {/* ─── CALL US ─── */}
      <section className="py-12 md:py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-pretty">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Not sure? Call us</h2>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[56px] px-8 py-4 text-white text-xl font-bold rounded-btn transition-colors duration-200 hover:bg-[#005f80]"
            style={{ background: "#007399", boxShadow: "0 4px 20px rgba(0,115,153,0.3)" }}
          >
            <svg className="w-6 h-6 shrink-0" {...iconProps}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-gray-700 text-[17px] leading-relaxed">
            Monday to Friday, 8 AM to 6 PM Eastern. Use the number on this page, not one printed in an email.
          </p>
          <p className="mt-4 text-gray-700 text-[17px] leading-relaxed">
            Forward a suspicious email to{" "}
            <a href={`mailto:${config.emails.support}`} className="text-primary-dark font-semibold underline underline-offset-2 py-3">
              <BreakableAddress address={config.emails.support} />
            </a>
            .
          </p>
        </div>
      </section>

      {/* ─── ALREADY PAID ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-pretty">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Already paid or replied?</h2>
          <ol className="space-y-5">
            {[
              <>
                Call your bank right away and ask them to open a fraud claim on the{" "}
                <span className="whitespace-nowrap">e-Transfer</span>. Give them the
                reference number and the recipient name you saw.
              </>,
              <>
                Report it to the Canadian Anti-Fraud Centre at{" "}
                <a href={`tel:${CAFC_PHONE}`} className="text-primary-dark font-semibold underline underline-offset-2 whitespace-nowrap py-3">{CAFC_PHONE}</a>{" "}
                or{" "}
                <a
                  href={`https://${CAFC_HOST}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-dark font-semibold underline underline-offset-2 [overflow-wrap:anywhere] py-3"
                >
                  {CAFC_HOST}
                </a>
                , and to your local police.
              </>,
              <>
                Then call us at{" "}
                <a href={PHONE_HREF} className="text-primary-dark font-semibold underline underline-offset-2 whitespace-nowrap py-3">{PHONE_DISPLAY}</a>{" "}
                so we can help.
              </>,
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-white font-black text-sm"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="text-gray-700 text-[17px] leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
