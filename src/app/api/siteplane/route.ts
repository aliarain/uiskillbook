import { apiJson, siteplaneCatalog } from "@/lib/catalog-api";

export function GET(request: Request) {
  return apiJson(siteplaneCatalog(new URL(request.url).searchParams.get("group") ?? undefined));
}
