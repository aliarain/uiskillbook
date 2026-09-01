import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AGENTS, agentLabel } from "@/lib/taxonomy";
import { getSkillsByAgent } from "@/lib/skills";
import { SkillRow } from "@/components/skill-row";

export function generateStaticParams() {
  return AGENTS.filter((a) => a.slug !== "universal").map((a) => ({ agent: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ agent: string }>;
}): Promise<Metadata> {
  const { agent } = await params;
  if (!AGENTS.some((a) => a.slug === agent)) return {};
  return { title: `UI Skillbook for ${agentLabel(agent)}` };
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ agent: string }>;
}) {
  const { agent } = await params;
  if (!AGENTS.some((a) => a.slug === agent)) notFound();

  const skills = getSkillsByAgent(agent);
  const label = agentLabel(agent);

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">Agent</span>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
        UI Skillbook for {label}
      </h1>
      <p className="mt-3 max-w-lg text-secondary">
        Give {label} access to UI Skillbook&apos;s design knowledge. Open any skill below
        and use &ldquo;Copy for agent&rdquo; to paste it directly into your session.
      </p>

      <div className="mt-6 rounded-md border border-border bg-surface p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          Coming soon
        </p>
        <p className="mt-2 text-sm text-secondary">
          A CLI and MCP server for one-command installs are on the roadmap. For now,
          skills are copy-paste — every skill page has a &ldquo;Copy for agent&rdquo; button
          formatted for direct use.
        </p>
      </div>

      <div className="mt-10 border-t border-border pt-2">
        {skills.length === 0 ? (
          <p className="py-10 text-sm text-muted">No skills tagged for {label} yet.</p>
        ) : (
          skills.map((skill, i) => <SkillRow key={skill.slug} skill={skill} index={i + 1} />)
        )}
      </div>

      <div className="mt-10">
        <Link href="/agents" className="text-sm text-secondary hover:text-primary">
          ← All agents
        </Link>
      </div>
    </div>
  );
}
