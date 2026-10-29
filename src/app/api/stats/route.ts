import { apiJson, catalogStats } from "@/lib/catalog-api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(catalogStats());
}
