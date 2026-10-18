import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";

/**
 * Everything is public. AI crawlers are named explicitly (search, training and
 * user-triggered fetchers alike) so the opt-in is unambiguous and survives any
 * future change to the `*` rule.
 */
const aiAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiAgents, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
