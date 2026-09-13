import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { INDUSTRIES } from "@/content/compare";

const data = INDUSTRIES["web-design-for-plumbers"];
const BASE = "https://canadianwebdesigns.ca";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: `${BASE}/${data.slug}` },
};

export default function WebDesignForPlumbersPage() {
  return <IndustryPage data={data} />;
}
