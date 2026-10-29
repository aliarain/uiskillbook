import { apiError, apiJson, skillDetail } from "@/lib/catalog-api";
import { getAllSkills } from "@/lib/skills";

export function generateStaticParams() {
  return getAllSkills().map((s) => ({ slug: s.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = skillDetail(slug);
  return skill ? apiJson(skill) : apiError(`Unknown skill "${slug}"`, 404);
}
