import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Link from "next/link";

const service = getConfig().services.find((s) => s.slug === "ai-consultation")!;

export const metadata: Metadata = {
  title: "AI Consultation Canada | Automate Operations & Outpace Competitors | Free Session | CWD",
  description: "Practical AI strategy for Canadian businesses — automate repetitive tasks, reduce overhead & beat competitors with custom AI workflows. Trusted by 180+ businesses. Book a free strategy session today.",
  alternates: { canonical: "/services/ai-consultation" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI consultation for businesses?",
      acceptedAnswer: { "@type": "Answer", text: "AI consultation helps your business identify opportunities to use artificial intelligence tools — such as chatbots, automated customer responses, predictive analytics, and content generation — to save time, reduce costs, and improve customer experience." },
    },
    {
      "@type": "Question",
      name: "Is AI automation only for large companies?",
      acceptedAnswer: { "@type": "Answer", text: "No. AI tools are now accessible and affordable for small and medium-sized businesses. We help Canadian businesses of all sizes implement practical AI solutions that deliver immediate ROI without complex infrastructure." },
    },
    {
      "@type": "Question",
      name: "What AI tools do you work with?",
      acceptedAnswer: { "@type": "Answer", text: "We work with a range of AI platforms including OpenAI (ChatGPT / GPT-4), Anthropic Claude, Google Gemini, and purpose-built automation tools like Zapier, Make, and n8n. We recommend the best fit for your specific use case and budget." },
    },
    {
      "@type": "Question",
      name: "How long does AI implementation take?",
      acceptedAnswer: { "@type": "Answer", text: "Simple automations like AI-powered email responses or chatbot setup can be deployed in as little as 1–2 weeks. More complex integrations into existing systems may take 4–8 weeks. We provide a detailed project timeline after the discovery session." },
    },
    {
      "@type": "Question",
      name: "How much does AI consultation cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "The initial AI discovery session is free. Implementation costs depend on scope — a single chatbot or automation workflow is far less than a full process overhaul. After discovery, you receive a fixed quote with projected time savings so you can judge the ROI before committing." },
    },
    {
      "@type": "Question",
      name: "Is my business data safe when using AI tools?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — data privacy is part of every implementation. We configure AI tools so your customer data stays protected, recommend Canadian-compliant options where required, and never train public models on your private business data." },
    },
  ],
};

const useCases = [
  { icon: "🤖", title: "AI Chatbots", body: "Deploy a 24/7 AI assistant on your website that answers questions, qualifies leads, and books appointments — without hiring extra staff." },
  { icon: "✍️", title: "Content Automation", body: "Generate SEO-optimized blog posts, product descriptions, and social media content at scale using AI tools tuned to your brand voice." },
  { icon: "📧", title: "Email & CRM Automation", body: "Automate follow-up sequences, lead scoring, and customer segmentation so your sales team focuses on closing, not admin." },
  { icon: "📊", title: "Data & Analytics AI", body: "Use AI to surface insights from your business data — customer behaviour, sales trends, and operational bottlenecks — without a data science team." },
  { icon: "🎧", title: "Customer Support AI", body: "Deflect repetitive support tickets with AI-powered responses trained on your knowledge base. Escalate to humans only when needed." },
  { icon: "⚙️", title: "Process Automation", body: "Connect your existing tools — CRM, billing, scheduling, inventory — with intelligent automation that eliminates manual data entry and errors." },
];

const process = [
  { step: "01", title: "AI Readiness Audit", body: "We map your current workflows, tools, and pain points to identify where AI can deliver the fastest and highest-impact ROI." },
  { step: "02", title: "Strategy & Roadmap", body: "You receive a prioritized AI action plan — what to implement first, what tools to use, and what outcomes to expect in 30, 60, and 90 days." },
  { step: "03", title: "Implementation", body: "Our team builds and integrates the AI solutions — chatbots, automations, or custom pipelines — directly into your existing systems." },
  { step: "04", title: "Training & Handoff", body: "Your team learns how to use, monitor, and iterate on the AI tools. We stay available for questions as you scale." },
];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />

      {/* ── Use Cases + Process + Pricing Section ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">AI Use Cases</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              How Canadian Businesses Are Using AI Right Now
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              AI is not a future technology — it is already transforming how businesses operate, market, and serve customers. These are the highest-ROI use cases we implement for Canadian businesses today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {useCases.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">Our AI Consultation Process</h3>
            <p className="text-gray-500 max-w-xl mx-auto">We do not sell software — we solve business problems with AI. Every engagement starts with understanding your operations, then building what will actually move the needle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-sm mb-5"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Stats + CTA */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">AI Gives Canadian SMBs a Competitive Edge</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The businesses adopting AI now are pulling ahead of competitors who are still doing things manually. A well-implemented AI chatbot can handle 70% of customer inquiries without human intervention. Automated content pipelines can produce a month of SEO content in hours. Process automation can eliminate 10–20 hours of admin work per week.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our AI consultation service is designed for Canadian business owners who want practical results — not jargon, not hype. We identify what you can automate today, implement it, and train your team to keep it running. Many clients pair AI automation with <Link href="/services/seo" className="text-[#00AADF] hover:underline">SEO</Link> and a <Link href="/services/web-design-development" className="text-[#00AADF] hover:underline">conversion-focused website</Link> so the leads AI captures keep growing — see how it fits together in our <Link href="/blog/marketing-automation-software-overview" className="text-[#00AADF] hover:underline">marketing automation guide</Link>.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-xl text-sm transition-all duration-200"
                  style={{ background: "#00AADF" }}
                >
                  Book a Free AI Discovery Session
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Hours saved per client/week", value: "15+" },
                  { label: "AI tools evaluated", value: "50+" },
                  { label: "Avg. support ticket deflection", value: "68%" },
                  { label: "Implementation time", value: "1–4 wks" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-3xl font-black text-[#00AADF] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FAQ (visible) ── */}
          <div className="mt-16">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center">AI Consultation FAQs</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <details key={item.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 group">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none">{item.name}</summary>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
