import { MAX_LIMIT, SORTS } from "@/lib/catalog-api";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const json = { "application/json": { schema: { type: "object" } } };
const slug = { name: "slug", in: "path", required: true, schema: { type: "string" } };

/** OpenAPI 3.1 description of the read-only JSON API documented at /api-docs. */
export function GET() {
  return Response.json(
    {
      openapi: "3.1.0",
      info: { title: "UI Skillbook API", version: "1", description: "Read-only catalog of UI skills and Design.md files. No key, open CORS." },
      servers: [{ url: SITE_URL }],
      externalDocs: { url: `${SITE_URL}/api-docs` },
      paths: {
        "/api/skills": {
          get: {
            summary: "List skills",
            parameters: [
              { name: "q", in: "query", schema: { type: "string" } },
              { name: "category", in: "query", schema: { type: "string" } },
              { name: "agent", in: "query", schema: { type: "string" } },
              { name: "role", in: "query", schema: { type: "string" } },
              { name: "sort", in: "query", schema: { type: "string", enum: [...SORTS] } },
              { name: "page", in: "query", schema: { type: "integer", minimum: 1 } },
              { name: "limit", in: "query", schema: { type: "integer", minimum: 1, maximum: MAX_LIMIT } },
            ],
            responses: { "200": { description: "A page of skills", content: json } },
          },
        },
        "/api/skills/{slug}": {
          get: { summary: "Get one skill", parameters: [slug], responses: { "200": { description: "The skill", content: json }, "404": { description: "Unknown slug" } } },
        },
        "/api/search": {
          get: {
            summary: "Search skills, guides, collections and Design.md",
            parameters: [
              { name: "q", in: "query", required: true, schema: { type: "string" } },
              { name: "limit", in: "query", schema: { type: "integer" } },
            ],
            responses: { "200": { description: "Matches", content: json }, "400": { description: "Missing q" } },
          },
        },
        "/api/stats": { get: { summary: "Catalog totals", responses: { "200": { description: "Stats", content: json } } } },
        "/api/design-md": { get: { summary: "List Design.md entries", responses: { "200": { description: "Entries", content: json } } } },
        "/api/design-md/{slug}": {
          get: { summary: "Get one Design.md", parameters: [slug], responses: { "200": { description: "The entry", content: json }, "404": { description: "Unknown slug" } } },
        },
      },
    },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
