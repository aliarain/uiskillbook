import { getDesignMdBySlug, getDesignMdRaw, getOriginalDesignMds, officialRawUrl } from "@/lib/design-md";

export function generateStaticParams() {
  return getOriginalDesignMds().map((d) => ({ slug: d.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getDesignMdBySlug(slug);
  if (!entry) return new Response("Not found", { status: 404 });
  // Link-only entries: send agents to the brand's own file.
  if (entry.origin === "official" && entry.official) return Response.redirect(officialRawUrl(entry.official.url), 307);
  return new Response(getDesignMdRaw(slug), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
