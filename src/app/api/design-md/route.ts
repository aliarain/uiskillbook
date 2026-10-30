import { apiJson, designMdSummary, MAX_LIMIT } from "@/lib/catalog-api";
import { categorySlug, designMdGroup, getAllDesignMds } from "@/lib/design-md";

/** GET /api/design-md?q=&category=&origin=original|community&page=1&limit=50 */
export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const q = params.get("q")?.trim().toLowerCase();
  const category = params.get("category");
  const origin = params.get("origin");
  const limit = Math.min(MAX_LIMIT, Math.max(1, Number(params.get("limit")) || 50));
  const all = getAllDesignMds().filter(
    (d) =>
      (!q || `${d.slug} ${d.name} ${d.description}`.toLowerCase().includes(q)) &&
      (!category || categorySlug(designMdGroup(d)) === category) &&
      (!origin || d.origin === origin)
  );
  const pages = Math.max(1, Math.ceil(all.length / limit));
  const page = Math.min(pages, Math.max(1, Number(params.get("page")) || 1));
  return apiJson({
    total: all.length,
    page,
    pages,
    limit,
    design_md: all.slice((page - 1) * limit, page * limit).map(designMdSummary),
  });
}
