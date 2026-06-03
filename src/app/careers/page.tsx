import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "Careers at Canadian Web Designs | Join Our Team",
  description:
    "Join Canada's top-rated web design agency. We're hiring Web Designers, Frontend Developers, SEO Specialists, and Marketing Managers. Apply today.",
  alternates: { canonical: "/careers" },
};

const openings = [
  {
    title: "Web Designer",
    type: "Full-Time · Remote",
    description:
      "Design stunning, conversion-focused websites for clients across Canada. You'll own the visual experience from wireframe to final pixel — crafting designs that rank on Google and drive real leads.",
    requirements: [
      "3+ years of web design experience",
      "Proficiency in Figma or Adobe XD",
      "Strong portfolio of client work",
      "Understanding of UI/UX principles and accessibility",
      "Bonus: experience with Next.js or WordPress",
    ],
  },
  {
    title: "Frontend Developer",
    type: "Full-Time · Remote",
    description:
      "Build fast, SEO-optimized websites using our Next.js stack. You'll translate designs into pixel-perfect, performant code that scores well on Core Web Vitals and delights users on every device.",
    requirements: [
      "3+ years of frontend development experience",
      "Strong proficiency in React / Next.js / TypeScript",
      "Experience with Tailwind CSS or CSS Modules",
      "Understanding of web performance and Core Web Vitals",
      "Bonus: experience with headless CMS platforms",
    ],
  },
  {
    title: "SEO Specialist",
    type: "Full-Time · Remote",
    description:
      "Drive organic growth for CWD clients and our own brand. You'll own keyword research, technical SEO audits, content strategy, and reporting — with full access to Google Search Console, GA4, and SE Ranking.",
    requirements: [
      "2+ years of SEO experience in a client or agency setting",
      "Proficiency with GSC, GA4, Ahrefs or SE Ranking",
      "Strong understanding of technical SEO and on-page optimization",
      "Experience writing or directing SEO content",
      "Bonus: local SEO experience for Canadian markets",
    ],
  },
  {
    title: "Marketing Manager",
    type: "Full-Time · Remote",
    description:
      "Lead paid and organic marketing efforts for Canadian Web Designs. You'll manage Google Ads campaigns, social media, email sequences, and brand partnerships — driving leads and growing our presence across Canada.",
    requirements: [
      "3+ years of digital marketing experience",
      "Hands-on Google Ads and Meta Ads experience",
      "Strong analytical mindset with experience in A/B testing",
      "Excellent written communication skills",
      "Bonus: agency or SaaS marketing background",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Careers", href: "/careers" },
        ]}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            We&apos;re Hiring
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Join Canada&apos;s Top-Rated Web Design Agency
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We&apos;re a remote-first team building websites that actually rank and convert. If you care deeply about craft,
            results, and working with great clients — we&apos;d love to meet you.
          </p>
        </div>
      </section>

      {/* Why CWD */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Why Work at Canadian Web Designs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌎",
                title: "100% Remote",
                body: "Work from anywhere in Canada. We believe great work happens when people have the freedom to do their best work.",
              },
              {
                icon: "📈",
                title: "Real Impact",
                body: "Every project we ship ranks on Google and drives real leads for our clients. You'll see your work matter.",
              },
              {
                icon: "🏆",
                title: "Top-Rated Team",
                body: `${config.reviewCount}+ five-star reviews. We hold ourselves to a high standard — and we celebrate wins together.`,
              },
            ].map((item) => (
              <div key={item.title} className="bg-light rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Open Positions</h2>
          <div className="space-y-8">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-dark">{job.title}</h3>
                    <span className="text-sm text-primary font-medium">{job.type}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-center"
                  >
                    Apply Now →
                  </Link>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5">{job.description}</p>
                <ul className="space-y-1.5">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-dark/80">
                      <span className="text-primary mt-0.5">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See the Right Fit?</h2>
          <p className="text-white/70 mb-8">
            We&apos;re always looking for talented people. Send us your portfolio and tell us how you&apos;d contribute to the team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
