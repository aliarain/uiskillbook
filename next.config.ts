import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Siteplane UI component entries live in the skills catalog and their
  // collection; there is no dedicated page for them any more.
  async redirects() {
    return [{ source: "/siteplane-ui", destination: "/collections/siteplane-ui", permanent: true }];
  },
};

export default nextConfig;
