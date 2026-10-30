import { AGENTS, agentLabel } from "@/lib/taxonomy";
import { getSkillsByAgent } from "@/lib/skills";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "UI Skillbook for a coding agent";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return AGENTS.filter((a) => a.slug !== "universal").map((a) => ({ agent: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ agent: string }> }) {
  const { agent } = await params;
  const count = getSkillsByAgent(agent).length;
  return renderOgImage({
    eyebrow: "Agents",
    title: `UI skills for ${agentLabel(agent)}`,
    subtitle: `${count} ${count === 1 ? "skill" : "skills"}, plus MCP and CLI setup.`,
  });
}
