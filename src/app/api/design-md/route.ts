import { apiJson, designMdSummary } from "@/lib/catalog-api";
import { getAllDesignMds } from "@/lib/design-md";

export const dynamic = "force-static";

export function GET() {
  const entries = getAllDesignMds().map(designMdSummary);
  return apiJson({ total: entries.length, design_md: entries });
}
