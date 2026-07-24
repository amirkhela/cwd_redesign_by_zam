import Link from "next/link";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

// Site-wide service-areas band rendered above the footer (SiteShell skips it on /contact).
// This is the sitewide internal-link source for all /locations/<city> pages.
export default function ServiceAreasSection() {
  return (
    <section className="py-10 border-t border-gray-100" style={{ background: "#f8fafc" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-[#00AADF] text-xs font-bold tracking-[0.2em] uppercase mb-5">
          Service Areas — Proudly Serving Businesses Across Canada
        </p>
        <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-[0.8rem]">
          <Link
            href="/locations/toronto"
            className="px-2.5 py-1.5 font-semibold text-[#00AADF] hover:text-[#003B6F] transition-colors duration-200"
          >
            Web Design Toronto ↗
          </Link>
          {config.cities.filter((c) => c.slug !== "toronto").map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="px-2.5 py-1.5 text-gray-500 hover:text-[#00AADF] transition-colors duration-200"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
