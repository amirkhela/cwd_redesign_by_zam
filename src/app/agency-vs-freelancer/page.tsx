import type { Metadata } from "next";
import ComparePage from "@/components/ComparePage";
import { COMPARISONS } from "@/content/compare";

const data = COMPARISONS["agency-vs-freelancer"];
const BASE = "https://canadianwebdesigns.ca";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: `${BASE}/${data.slug}` },
};

/**
 * The verdict lives here, not in the data file (see ComparePage). It makes no
 * claim about any freelancer: each card is a test the reader applies to their
 * own project, and the middle card is meant to send some readers elsewhere.
 */
const VERDICT = [
  {
    title: "Hire an agency if",
    points: [
      "The website is how most customers find you, so it has to keep working for years.",
      "You want design, copy, SEO set-up and upkeep from one team.",
      "You don't have time to manage the project yourself.",
    ],
  },
  {
    title: "A freelancer or Fiverr is fine if",
    points: [
      "The job is small and clear: a landing page, a logo or a fix to an existing site.",
      "You know what you want and can judge the work yourself.",
      "You have found someone whose past work and reviews you trust.",
    ],
  },
  {
    title: "Don't hire anyone yet if",
    points: [
      "You can't yet say what the site must do: bring calls, take bookings, sell or build trust.",
      "Your current site works and only needs a few words changed.",
      "You haven't set a budget. Write one down; it makes every quote easier to compare.",
    ],
  },
];

export default function AgencyVsFreelancerPage() {
  return (
    <ComparePage
      data={data}
      verdict={VERDICT}
      sourceNote="Rows marked source quote Fiverr's own help pages. Rows about freelancers in general make no claim about any one person."
      reasonsEyebrow="Why An Agency"
      faqHeading="Agency or freelancer — common questions"
    />
  );
}
