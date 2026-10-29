import { API_VERSION, apiJson } from "@/lib/catalog-api";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return apiJson({
    name: "UI Skillbook API",
    version: API_VERSION,
    docs: `${SITE_URL}/api-docs`,
    mcp: `${SITE_URL}/mcp`,
    endpoints: {
      skills: `${SITE_URL}/api/skills?q=&category=&agent=&role=&sort=recommended|newest|stars|az&page=1&limit=30`,
      skill: `${SITE_URL}/api/skills/{slug}`,
      search: `${SITE_URL}/api/search?q=`,
      stats: `${SITE_URL}/api/stats`,
      siteplane: `${SITE_URL}/api/siteplane?group=`,
      design_md: `${SITE_URL}/api/design-md`,
      design_md_entry: `${SITE_URL}/api/design-md/{slug}`,
    },
  });
}
