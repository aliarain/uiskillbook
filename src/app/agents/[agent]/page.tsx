import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AGENTS, agentLabel } from "@/lib/taxonomy";
import { getSkillsByAgent } from "@/lib/skills";
import { SkillRow } from "@/components/skill-row";
import { CopyCodeBlock } from "@/components/copy-code-block";

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

      <div className="card mt-6 space-y-5 p-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">CLI</p>
          <p className="mt-1.5 text-sm text-secondary">
            Browse and fetch skills from a terminal or an agent&apos;s shell tool.
          </p>
          <div className="mt-2">
            <CopyCodeBlock code={`npx uiskillbook start\nnpx uiskillbook list --category motion\nnpx uiskillbook get pressed-button-feedback`} />
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">MCP</p>
          <p className="mt-1.5 text-sm text-secondary">
            Connect {label} to the catalog over Model Context Protocol —{" "}
            <code className="text-primary">list_skills</code> and{" "}
            <code className="text-primary">get_skill</code> tools. Setup varies by agent;
            point it at the endpoint below.
          </p>
          <div className="mt-2">
            <CopyCodeBlock code="https://uiskillbook.com/mcp" />
          </div>
        </div>
        <p className="text-xs text-muted">
          Or skip both — every skill page has a &ldquo;Copy for agent&rdquo; button you can
          paste directly into a session.
        </p>
      </div>

      <div className="mt-10 space-y-0.5">
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
