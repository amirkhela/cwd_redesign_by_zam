import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getConfig().services.find((s) => s.slug === "website-maintenance")!;

export const metadata: Metadata = {
  title: "Website Maintenance Plans for Canadian Businesses",
  description: "Affordable monthly website maintenance plans in Canada. Security updates, backups, speed optimization & support — all handled for you. 200+ five-star reviews. Get a free quote.",
  alternates: { canonical: "/services/website-maintenance" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a website maintenance plan include?",
      acceptedAnswer: { "@type": "Answer", text: "Our maintenance plans include regular software and plugin updates, daily backups, uptime monitoring, security scanning, performance optimization, and monthly reporting. We handle everything so you can focus on your business." },
    },
    {
      "@type": "Question",
      name: "How much does website maintenance cost?",
      acceptedAnswer: { "@type": "Answer", text: "Our maintenance packages start at an affordable monthly rate depending on your site's size and needs. Contact us for a custom quote — we offer flexible plans with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "What happens if my website goes down?",
      acceptedAnswer: { "@type": "Answer", text: "We monitor your website 24/7 for downtime. If your site goes down, we're alerted immediately and work to restore it as quickly as possible — typically within minutes for hosting-related issues." },
    },
    {
      "@type": "Question",
      name: "Do you maintain websites you didn't build?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we maintain websites built by other agencies or developers. We perform a full audit of your existing site before onboarding to identify any security or performance issues." },
    },
  ],
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />
    </>
  );
}
