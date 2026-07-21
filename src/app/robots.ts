import type { MetadataRoute } from "next";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*?s=",
          "/detail/",
        ],
      },
      // Live retrieval agents: they fetch a page because a user asked a question,
      // then cite and link back. Allowed so the site can surface in AI answers.
      { userAgent: "ChatGPT-User",  allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Claude-Web",    allow: "/" },
      { userAgent: "Claude-User",   allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      // Bulk training crawlers stay blocked.
      { userAgent: "GPTBot",       disallow: ["/"] },
      { userAgent: "CCBot",        disallow: ["/"] },
      { userAgent: "anthropic-ai", disallow: ["/"] },
      { userAgent: "ClaudeBot",    disallow: ["/"] },
    ],
    sitemap: `https://${config.domain}/sitemap.xml`,
  };
}
