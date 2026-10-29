import { getAllDesignMds, getDesignMdBySlug, getDesignMdRaw } from "@/lib/design-md";

export function generateStaticParams() {
  return getAllDesignMds().map((d) => ({ slug: d.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getDesignMdBySlug(slug)) return new Response("Not found", { status: 404 });
  return new Response(getDesignMdRaw(slug), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
