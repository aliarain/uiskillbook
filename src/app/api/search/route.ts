import { apiError, apiJson, searchCatalog } from "@/lib/catalog-api";

export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const q = params.get("q")?.trim();
  if (!q) return apiError("Missing required query parameter: q", 400);
  const results = searchCatalog(q, Number(params.get("limit")) || 20);
  return apiJson({ q, total: results.length, results });
}
