import Link from "next/link";
import { Card } from "@/siteplane/components/card";
import type { Metadata } from "next";
import { AGENTS } from "@/lib/taxonomy";
import { getSkillsByAgent } from "@/lib/skills";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Agents",
  description: "Use UI Skillbook with your coding agent of choice.",
  path: "/agents",
});

export default function AgentsPage() {
  const agents = AGENTS.filter((a) => a.slug !== "universal");

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="display text-4xl">Agents</h1>
      <p className="mt-2 text-muted-foreground">
        Give your coding agent better taste. Skills work with any agent that can read markdown.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {agents.map((agent) => (
          <Card key={agent.slug} render={<Link href={`/agents/${agent.slug}`} />} className="p-5">
            <h2 className="text-base font-medium text-foreground">{agent.label}</h2>
            <p className="mt-2 text-[13px] text-muted-foreground">
              {getSkillsByAgent(agent.slug).length} compatible skills
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
