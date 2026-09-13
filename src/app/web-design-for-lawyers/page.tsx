import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { INDUSTRIES } from "@/content/compare";

const data = INDUSTRIES["web-design-for-lawyers"];
const BASE = "https://canadianwebdesigns.ca";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: `${BASE}/${data.slug}` },
};

export default function WebDesignForLawyersPage() {
  return <IndustryPage data={data} />;
}
