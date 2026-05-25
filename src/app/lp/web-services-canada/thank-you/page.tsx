import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Thank You | Canadian Web Designs", robots: "noindex" };

export default function ThankYouPage() {
  return (
    <>
      <div className="w-full py-4 px-6 flex items-center justify-center border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <Image src="/logos/logo.png" unoptimized alt="Canadian Web Designs" width={200} height={52} style={{ height: "48px", width: "auto" }} priority />
      </div>

      <section
        className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="text-center max-w-lg">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-8"
            style={{ background: "rgba(0,208,132,0.12)", border: "2px solid rgba(0,208,132,0.4)" }}
          >
            ✓
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
            We Got Your Request!
          </h1>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Our team will review your project and reach out within <span className="text-white font-semibold">24 hours</span> with a free, no-obligation quote.
          </p>

          <a
            href="tel:647-689-6069"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-black rounded-xl text-base mb-4"
            style={{ background: "#00AADF", boxShadow: "0 4px 24px rgba(0,170,223,0.4)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Can&apos;t wait? Call 647-689-6069
          </a>

          <p className="text-white/30 text-xs">Mon–Fri, 8am–6pm EST</p>
        </div>
      </section>
    </>
  );
}
