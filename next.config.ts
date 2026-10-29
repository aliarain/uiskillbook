import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Siteplane UI component entries live in the skills catalog and their
  // collection; there is no dedicated page for them any more.
  async redirects() {
    return [
      { source: "/siteplane-ui", destination: "/collections/siteplane-ui", permanent: true },
      // Paths agents and people guess for the docs and the catalog JSON.
      { source: "/docs", destination: "/api-docs", permanent: true },
      { source: "/api/docs", destination: "/api-docs", permanent: true },
      { source: "/skills.json", destination: "/skills/registry.json", permanent: true },
      { source: "/api/openapi.json", destination: "/openapi.json", permanent: true },
    ];
  },
  // `<page>.md` serves the page's Markdown source, as many agents expect.
  async rewrites() {
    return [
      { source: "/skills/:slug.md", destination: "/skills/:slug/raw" },
      { source: "/design-md/:slug.md", destination: "/design-md/:slug/raw" },
    ];
  },
};

export default nextConfig;
