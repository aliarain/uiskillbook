import { apiJson, parseSkillQuery, querySkills, API_HEADERS } from "@/lib/catalog-api";

export function GET(request: Request) {
  const query = parseSkillQuery(new URL(request.url).searchParams);
  return apiJson(querySkills(query));
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: API_HEADERS });
}
