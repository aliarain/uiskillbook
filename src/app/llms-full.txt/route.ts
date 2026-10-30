import { getAllSkills, getSkillRawMarkdown } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllDesignMds, getDesignMdRaw } from "@/lib/design-md";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Everything in one file for agents that want the full text: our own skills,
 * guides and Design.md files verbatim, and external skills as links to their
 * raw SKILL.md. llms.txt is the index; this is the content.
 */
export function GET() {
  const skills = getAllSkills();
  const local = skills.filter((s) => !s.external);
  const external = skills.filter((s) => s.external);

  const parts = [
    "# UI Skillbook (full text)",
    "",
    `> Index: ${SITE_URL}/llms.txt. JSON API: ${SITE_URL}/api. MCP: ${SITE_URL}/mcp.`,
    "",
    "## Skills by UI Skillbook",
    "",
    ...local.flatMap((s) => [`### ${s.title}`, `Source: ${SITE_URL}/skills/${s.slug}`, "", getSkillRawMarkdown(s.slug).trim(), ""]),
    "## Guides",
    "",
    ...getAllChapters().flatMap((c) => [`### ${c.title}`, `Source: ${SITE_URL}/chapters/${c.slug}`, "", c.description, "", c.body.trim(), ""]),
    "## Design.md files",
    "",
    ...getAllDesignMds()
      .filter((d) => d.origin === "original")
      .flatMap((d) => [`### ${d.name}`, `Source: ${SITE_URL}/design-md/${d.slug}`, "", getDesignMdRaw(d.slug).trim(), ""]),
    "## Community Design.md files",
    "",
    "> Imported from MIT-licensed collections, credited on each page. Fetch the Markdown from the link.",
    "",
    ...getAllDesignMds()
      .filter((d) => d.origin === "community")
      .map((d) => `- [${d.name}](${SITE_URL}/design-md/${d.slug}.md) (${d.category}): ${d.description}`),
    "## External skills",
    "",
    "> Hosted in their authors' repositories. Fetch the raw SKILL.md from the link.",
    "",
    ...external.map((s) => `- [${s.title}](${s.source?.rawUrl ?? s.source?.repository ?? `${SITE_URL}/skills/${s.slug}`}) by ${s.author.name}: ${s.description}`),
    "",
  ];

  return new Response(parts.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
