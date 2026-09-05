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
        ],
      },
      // Live retrieval agents: they fetch a page because a user asked a question,
      // then cite and link back. Allowed so the site can surface in AI answers.
      { userAgent: "ChatGPT-User",  allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Claude-User",   allow: "/" },
      // Claude-SearchBot is the crawler that builds the index Claude answers FROM.
      // It was never listed, so it only ever inherited the "*" allow -- explicit is
      // better here because the block list below names three other Anthropic/OpenAI
      // agents, and an unlisted search crawler sitting next to blocked siblings is
      // the kind of thing a future edit turns off by accident. Claude-Web is retired
      // by Anthropic and was dropped.
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      // Perplexity-User is the user-directed fetch (someone asked a question and it
      // goes and reads the page to cite it) -- the same role ChatGPT-User plays.
      { userAgent: "Perplexity-User", allow: "/" },
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
