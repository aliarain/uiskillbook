import Link from "next/link";
import type { Metadata } from "next";
import { AGENTS } from "@/lib/taxonomy";
import { getSkillsByAgent } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Agents",
  description: "Use UI Skillbook with your coding agent of choice.",
};

export default function AgentsPage() {
  const agents = AGENTS.filter((a) => a.slug !== "universal");

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-primary">Agents</h1>
      <p className="mt-2 text-secondary">
        Give your coding agent better taste. Skills work with any agent that can read markdown.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {agents.map((agent) => (
          <Link
            key={agent.slug}
            href={`/agents/${agent.slug}`}
            className="rounded-md border border-border p-5 transition-colors hover:border-accent/40"
          >
            <h2 className="text-base font-medium text-primary">{agent.label}</h2>
            <p className="mt-2 font-mono text-xs text-muted">
              {getSkillsByAgent(agent.slug).length} compatible skills
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
