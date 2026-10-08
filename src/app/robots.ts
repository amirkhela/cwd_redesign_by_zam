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
      // Training crawlers: allowed since Oct 2026 (owner's decision). They are what
      // puts the brand into the models' own knowledge, which answers "who builds
      // websites in Toronto?" when no live search runs. Nothing here is paid or
      // private. A named group replaces "*" for that bot, so the /api/ and ?s=
      // exclusions are repeated. "anthropic-ai" was a retired token and was dropped.
      { userAgent: "GPTBot",    allow: "/", disallow: ["/api/", "/*?s="] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/api/", "/*?s="] },
      { userAgent: "CCBot",     allow: "/", disallow: ["/api/", "/*?s="] },
    ],
    sitemap: `https://${config.domain}/sitemap.xml`,
  };
}
