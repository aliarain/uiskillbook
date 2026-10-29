import type { Metadata } from "next";
import { CopyCodeBlock } from "@/components/copy-code-block";
import { Code } from "@/raptrx-ui/components/code";
import { MCP_URL, pageMetadata, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "API",
  description: "Free, read-only JSON API and MCP server for the UI Skillbook catalog.",
  path: "/api-docs",
});

const ENDPOINTS = [
  {
    path: "/api/skills",
    params: "q, category, agent, role, sort (recommended | newest | stars | az), page, limit (max 100)",
    returns: "total, page, pages, limit, skills[]",
  },
  { path: "/api/skills/{slug}", params: "none", returns: "One skill with install prompts and, for local skills, full content" },
  { path: "/api/search", params: "q (required), limit", returns: "Skills, guides, collections and Design.md matches" },
  { path: "/api/stats", params: "none", returns: "Totals, per-category and per-agent counts" },
  { path: "/api/siteplane", params: "group", returns: "Every Siteplane UI component by group, with install commands and docs links" },
  { path: "/api/design-md", params: "none", returns: "All Design.md entries" },
  { path: "/api/design-md/{slug}", params: "none", returns: "One entry with its DESIGN.md content" },
];

export default function ApiDocsPage() {
  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="display text-4xl">API</h1>
      <p className="mt-3 text-ink-2 text-pretty">
        The same catalog as this site, as JSON. No key, open CORS, cached for an hour at the edge.
        Agents can use the MCP server instead, which exposes the same data as tools.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-ink">Endpoints</h2>
      <div className="mt-4 divide-y divide-line rounded-card border border-line">
        {ENDPOINTS.map((e) => (
          <div key={e.path} className="p-4">
            <p className="font-mono text-sm text-ink">
              <span className="mr-2 text-ink-3">GET</span>
              {e.path}
            </p>
            <p className="mt-1.5 text-sm text-ink-2">
              <span className="text-ink-3">Params:</span> {e.params}
            </p>
            <p className="mt-0.5 text-sm text-ink-2">
              <span className="text-ink-3">Returns:</span> {e.returns}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold text-ink">Example</h2>
      <div className="mt-4">
        <CopyCodeBlock code={`curl "${SITE_URL}/api/skills?category=motion&sort=stars&limit=5"`} />
      </div>

      <h2 className="mt-12 text-xl font-semibold text-ink">MCP server</h2>
      <p className="mt-2 text-sm text-ink-2">
        Tools: <Code>list_skills</Code>, <Code>get_skill</Code>, <Code>search</Code>, <Code>get_stats</Code>,{" "}
        <Code>get_design_md</Code>, <Code>list_siteplane_components</Code>.
      </p>
      <div className="mt-4">
        <CopyCodeBlock code={MCP_URL} />
      </div>
    </div>
  );
}
