import type { Metadata } from "next";
import ComparePage from "@/components/ComparePage";
import { COMPARISONS } from "@/content/compare";

const data = COMPARISONS["godaddy-website-builder-alternative"];
const BASE = "https://canadianwebdesigns.ca";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: `${BASE}/${data.slug}` },
};

/**
 * The verdict lives here, not in the data file (see ComparePage). Every point
 * about GoDaddy restates a sourced row; nothing new is claimed in a card.
 */
const VERDICT = [
  {
    title: "Choose Canadian Web Designs if",
    points: [
      "You want a team to plan, write and build the site, not a tool to do it yourself.",
      "You want one price agreed before work starts, not a plan with monthly credits.",
      "You want on-page SEO, Analytics and Search Console set up for you at launch.",
    ],
  },
  {
    title: "Stay with GoDaddy's builder if",
    points: [
      "You like building it yourself and want to be live today.",
      "You want to start for free and grow into a paid plan later.",
      "You want the builder, hosting and your domain with one company, with 24/7 phone and chat support.",
    ],
  },
  {
    title: "Don't switch yet if",
    points: [
      "Your current site already brings in calls and enquiries and only needs small changes.",
      "You can't yet say what the new site must do better. Write that down first; it makes any quote, ours included, more accurate.",
      "You're in your busiest season and can't spare an hour a week to review pages.",
    ],
  },
];

export default function GoDaddyWebsiteBuilderAlternativePage() {
  return (
    <ComparePage
      data={data}
      verdict={VERDICT}
      sourceNote="Rows marked source quote GoDaddy's own website and help pages. Rows without one make no claim about GoDaddy at all."
    />
  );
}
