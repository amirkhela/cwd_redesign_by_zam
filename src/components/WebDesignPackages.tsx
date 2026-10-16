import Link from "next/link";
import PricingCards from "@/components/PricingCards";
import { WEBSITE_PACKAGES } from "@/lib/packages";

// The pricing band used on every /locations page. `city` only changes the
// heading and intro so each page targets "<city> web design packages".
export default function WebDesignPackages({ city }: { city?: string }) {
  const place = city ?? "Canada";
  return (
    <section className="py-16" style={{ background: "#f8fafc" }} id="packages">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900">{place} Web Design Packages</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
            Affordable website design packages for {city ? `${city} businesses` : "Canadian businesses"}, from a starter site to a full online store or custom portal. Flat prices, no hidden fees, and every website is mobile responsive and SEO friendly from day one.
          </p>
        </div>
        <PricingCards plans={WEBSITE_PACKAGES} />
        <p className="text-center text-sm text-gray-500 mt-10">
          Need an app too? See our{" "}
          <Link href="/services/app-development" className="font-bold text-[#00AADF] hover:underline">app development packages</Link>
          {" "}or{" "}
          <Link href="/web-design-packages" className="font-bold text-[#00AADF] hover:underline">compare all website packages</Link>.
        </p>
      </div>
    </section>
  );
}
