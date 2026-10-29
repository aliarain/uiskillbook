import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/** Discovery document pointing MCP clients at the streamable HTTP endpoint. */
export function GET() {
  return Response.json(
    {
      name: SITE_NAME,
      description: "UI skills, guides and Design.md files for coding agents.",
      servers: [{ url: `${SITE_URL}/mcp`, transport: "streamable-http" }],
      documentation: `${SITE_URL}/api-docs`,
    },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
