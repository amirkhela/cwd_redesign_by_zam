import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, SEO & Digital Marketing Canada | Canadian Web Designs",
  description: "Professional web design, custom development, SEO, Shopify & digital marketing for Canadian businesses. Serving Toronto, Brampton, Winnipeg, Vancouver & more. Free quote — no lock-in.",
  alternates: { canonical: "https://canadianwebdesigns.ca/lp/web-services-canada" },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
