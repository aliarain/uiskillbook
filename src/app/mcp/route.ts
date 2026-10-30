import { NextResponse } from "next/server";
import {
  catalogStats,
  designMdDetail,
  designMdSummary,
  parseSkillQuery,
  querySkills,
  searchCatalog,
  siteplaneCatalog,
  skillDetail,
  SORTS,
} from "@/lib/catalog-api";
import { getAllDesignMds } from "@/lib/design-md";

const SERVER_NAME = "UI Skillbook";
const SERVER_VERSION = "0.1.0";
const MAX_REQUEST_BYTES = 64 * 1024;

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: Record<string, unknown>;
};

const corsHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Protocol-Version",
};

function jsonRpcResult(id: JsonRpcRequest["id"], result: unknown) {
  return new NextResponse(JSON.stringify({ jsonrpc: "2.0", id: id ?? null, result }), {
    headers: corsHeaders,
  });
}

function jsonRpcError(id: JsonRpcRequest["id"], code: number, message: string, status = 200) {
  return new NextResponse(
    JSON.stringify({ jsonrpc: "2.0", id: id ?? null, error: { code, message } }),
    { status, headers: corsHeaders }
  );
}

const tools = [
  {
    name: "list_skills",
    description:
      "List skills from the UI Skillbook catalog (same data as GET /api/skills). Filter by text, category, agent or role; sort and paginate.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Optional filter over slug, name, description, author and tags." },
        category: { type: "string", description: "Optional category slug, e.g. motion." },
        agent: { type: "string", description: "Optional agent slug, e.g. claude-code." },
        role: { type: "string", description: "Optional role preset, e.g. designers." },
        sort: { type: "string", enum: [...SORTS], description: "Sort order. Default recommended." },
        page: { type: "number", description: "Page number, default 1." },
        limit: { type: "number", description: "Results per page, default 30, max 100." },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_skill",
    description:
      "Fetch one skill by slug (same as GET /api/skills/{slug}). Local skills include full instructions in `content`; external skills include `raw_url` to fetch.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "The skill's slug, e.g. spacing-rhythm." },
      },
      required: ["slug"],
      additionalProperties: false,
    },
  },
  {
    name: "search",
    description:
      "Search skills, guides, collections and Design.md files at once (same as GET /api/search).",
    inputSchema: {
      type: "object",
      properties: {
        q: { type: "string", description: "Search text." },
        limit: { type: "number", description: "Max results, default 20." },
      },
      required: ["q"],
      additionalProperties: false,
    },
  },
  {
    name: "get_stats",
    description: "Catalog totals plus per-category and per-agent counts (same as GET /api/stats).",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_siteplane_components",
    description:
      "Every Siteplane UI component, UI Skillbook's design system, grouped as Siteplane groups them, with a one-line purpose, the shadcn install command and its docs link. Call get_skill with a slug for when to pick it over its neighbours and its usage rules.",
    inputSchema: {
      type: "object",
      properties: {
        group: { type: "string", description: "Optional group name, e.g. \"Overlays & disclosure\"." },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_design_md",
    description:
      "Fetch a brand DESIGN.md (colors, type, spacing, components) by slug. Call without a slug to list available brands.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Brand slug, e.g. linear. Omit to list brands." },
      },
      additionalProperties: false,
    },
  },
];

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export function GET(request: Request) {
  const baseUrl = new URL(request.url).origin;
  return NextResponse.json(
    {
      name: SERVER_NAME,
      version: SERVER_VERSION,
      protocol: "mcp",
      endpoint: `${baseUrl}/mcp`,
      registry: `${baseUrl}/skills/registry.json`,
      api: `${baseUrl}/api`,
      tools: tools.map((t) => t.name),
    },
    { headers: corsHeaders }
  );
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_REQUEST_BYTES) {
    return jsonRpcError(null, -32600, "Request body is too large", 413);
  }

  let body: JsonRpcRequest | null = null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      body = parsed as JsonRpcRequest;
    }
  } catch {
    body = null;
  }

  if (!body || body.jsonrpc !== "2.0" || typeof body.method !== "string") {
    return jsonRpcError(null, -32600, "Invalid Request", 400);
  }

  switch (body.method) {
    case "initialize":
      return jsonRpcResult(body.id, {
        protocolVersion: "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
      });

    case "notifications/initialized":
      return new NextResponse(null, { status: 202, headers: corsHeaders });

    case "tools/list":
      return jsonRpcResult(body.id, { tools });

    case "tools/call": {
      const name = typeof body.params?.name === "string" ? body.params.name : "";
      const args =
        body.params?.arguments && typeof body.params.arguments === "object"
          ? (body.params.arguments as Record<string, unknown>)
          : {};

      const text = (data: unknown) =>
        jsonRpcResult(body.id, {
          content: [{ type: "text", text: typeof data === "string" ? data : JSON.stringify(data, null, 2) }],
        });
      const toolError = (message: string) =>
        jsonRpcResult(body.id, { isError: true, content: [{ type: "text", text: message }] });

      if (name === "list_skills") return text(querySkills(parseSkillQuery(args)));

      if (name === "get_skill") {
        const slug = typeof args.slug === "string" ? args.slug.trim() : "";
        const skill = skillDetail(slug);
        if (!skill) return toolError(`Unknown skill "${slug}". Use list_skills or search first.`);
        // Instructions first so agents can follow them directly; metadata after.
        const { content, ...meta } = skill;
        return text(content ? `${content}\n\n---\n${JSON.stringify(meta, null, 2)}` : meta);
      }

      if (name === "search") {
        const q = typeof args.q === "string" ? args.q : "";
        if (!q.trim()) return toolError("Missing required argument: q");
        const results = searchCatalog(q, typeof args.limit === "number" ? args.limit : 20);
        return text({ q, total: results.length, results });
      }

      if (name === "get_stats") return text(catalogStats());

      if (name === "list_siteplane_components") {
        return text(siteplaneCatalog(typeof args.group === "string" ? args.group : undefined));
      }

      if (name === "get_design_md") {
        const slug = typeof args.slug === "string" ? args.slug.trim() : "";
        const entry = slug ? designMdDetail(slug) : null;
        if (entry) return text(entry.content);
        const needle = slug.toLowerCase();
        const all = getAllDesignMds();
        const matches = (needle ? all.filter((d) => `${d.slug} ${d.name}`.toLowerCase().includes(needle)) : all)
          .slice(0, 50)
          .map(designMdSummary);
        const note = `${all.length} Design.md files. Showing up to 50${needle ? ` matching "${slug}"` : ""}; pass an exact slug for the file, or use GET /api/design-md?q= to page through all.`;
        return slug
          ? toolError(JSON.stringify({ error: `Unknown brand "${slug}"`, note, matches }, null, 2))
          : text({ note, brands: matches });
      }

      return jsonRpcError(body.id, -32601, `Unknown tool: ${name}`);
    }

    default:
      return jsonRpcError(body.id, -32601, `Method not found: ${body.method}`);
  }
}
