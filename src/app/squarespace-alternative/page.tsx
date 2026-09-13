import type { Metadata } from "next";
import ComparePage from "@/components/ComparePage";
import { COMPARISONS } from "@/content/compare";

const data = COMPARISONS["squarespace-alternative"];
const BASE = "https://canadianwebdesigns.ca";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: `${BASE}/${data.slug}` },
};

export default function SquarespaceAlternativePage() {
  return <ComparePage data={data} stayOn={{ label: "WordPress website design", href: "/services/wordpress-website-design" }} />;
}
