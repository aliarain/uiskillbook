import { NextResponse } from "next/server";
import { getAllSkills, getSkillRawMarkdown } from "@/lib/skills";

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
      "List skills from the UI Skillbook catalog (same catalog as `uiskillbook list`). Optionally filter by a text query, category, or agent.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Optional filter over slug, name, or description." },
        category: { type: "string", description: "Optional category slug to filter by." },
        agent: { type: "string", description: "Optional agent slug to filter by." },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_skill",
    description:
      "Fetch full skill content by slug (same content as `uiskillbook get`). Local skills return full instructions; external skills return metadata plus a source URL to fetch directly.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "The skill's slug, e.g. baseline-ui." },
      },
      required: ["slug"],
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
      tools: tools.map((t) => t.name),
    },
    { headers: corsHeaders }
  );
}

export async function POST(request: Request) {
  const baseUrl = new URL(request.url).origin;
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

      if (name === "list_skills") {
        const query = typeof args.query === "string" ? args.query.trim().toLowerCase() : "";
        const category = typeof args.category === "string" ? args.category.trim().toLowerCase() : "";
        const agent = typeof args.agent === "string" ? args.agent.trim().toLowerCase() : "";

        const skills = getAllSkills()
          .filter((s) => {
            if (query) {
              const haystack = `${s.slug} ${s.title} ${s.description}`.toLowerCase();
              if (!haystack.includes(query)) return false;
            }
            if (category && !s.categories.includes(category as never)) return false;
            if (agent && !s.agents.includes(agent as never)) return false;
            return true;
          })
          .map((s) => ({
            slug: s.slug,
            name: s.title,
            description: s.description,
            categories: s.categories,
            external: Boolean(s.external),
            url: `${baseUrl}/skills/${s.slug}`,
          }));

        return jsonRpcResult(body.id, {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                { source: `${baseUrl}/skills/registry.json`, count: skills.length, skills },
                null,
                2
              ),
            },
          ],
        });
      }

      if (name === "get_skill") {
        const slug = typeof args.slug === "string" ? args.slug : "";
        const skill = getAllSkills().find((s) => s.slug === slug);

        if (!skill) {
          return jsonRpcResult(body.id, {
            isError: true,
            content: [{ type: "text", text: `Unknown skill "${slug}". Use list_skills first.` }],
          });
        }

        if (skill.external) {
          const text = [
            `# ${skill.title}`,
            "",
            skill.description,
            "",
            "This skill is hosted in an external repository, not on UI Skillbook.",
            skill.source?.rawUrl && `Raw content: ${skill.source.rawUrl}`,
            skill.source?.repository && `Source: ${skill.source.repository}`,
          ]
            .filter(Boolean)
            .join("\n");
          return jsonRpcResult(body.id, { content: [{ type: "text", text }] });
        }

        try {
          const content = getSkillRawMarkdown(skill.slug);
          return jsonRpcResult(body.id, { content: [{ type: "text", text: content }] });
        } catch {
          return jsonRpcResult(body.id, {
            isError: true,
            content: [{ type: "text", text: `Failed to load skill content for ${skill.slug}` }],
          });
        }
      }

      return jsonRpcError(body.id, -32601, `Unknown tool: ${name}`);
    }

    default:
      return jsonRpcError(body.id, -32601, `Method not found: ${body.method}`);
  }
}
