import { apiError, apiJson, designMdDetail } from "@/lib/catalog-api";
import { getAllDesignMds } from "@/lib/design-md";

export function generateStaticParams() {
  return getAllDesignMds().map((d) => ({ slug: d.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = designMdDetail(slug);
  return entry ? apiJson(entry) : apiError(`Unknown Design.md "${slug}"`, 404);
}
