import type { NextConfig } from "next";

// api.pengu.family is a transparent proxy in front of the app's Convex HTTP
// actions (Better Auth, /invite, webhooks). Google's consent screen and the
// iOS sign-in sheet show the domain that serves these routes, so they must be
// on pengu.family rather than *.convex.site. Set CONVEX_SITE_URL in Vercel to
// the production deployment's https://<name>.convex.site URL.
const API_HOST = "api.pengu.family";
const convexSiteUrl = process.env.CONVEX_SITE_URL?.replace(/\/$/, "");

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // dev/build remind about Next.js security advisories (`next upgrade --agent`).
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    if (!convexSiteUrl) return [];
    return {
      // beforeFiles so no landing-page route can shadow a Convex path.
      beforeFiles: [
        {
          source: "/:path*",
          has: [{ type: "host", value: API_HOST }],
          destination: `${convexSiteUrl}/:path*`,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
