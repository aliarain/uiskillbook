/** Canonical origin. The apex domain 308s here, so every absolute URL uses www. */
export const SITE_URL = "https://www.uiskillbook.com";
export const SITE_NAME = "UI Skillbook";
export const SITE_DESCRIPTION =
  "Curated UI skills and instructions for people and coding agents.";
export const MCP_URL = `${SITE_URL}/mcp`;
/** Child metadata replaces the parent openGraph object, so every page names its image explicitly. */
const DEFAULT_OG_IMAGE = "/opengraph-image";

type PageMetaInput = {
  title: string;
  description: string;
  /** Site-relative path, e.g. `/skills/spacing-rhythm`. */
  path: string;
  type?: "website" | "article";
  image?: string;
};

/** Title, description, canonical URL and matching Open Graph / Twitter fields. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: PageMetaInput) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type, siteName: SITE_NAME, images: image },
    twitter: { card: "summary_large_image" as const, title, description, images: image },
  };
}
