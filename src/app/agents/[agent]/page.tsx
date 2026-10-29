import Link from "next/link";
import { Card } from "@/siteplane/components/card";
import { Code } from "@/siteplane/components/code";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AGENTS, agentLabel } from "@/lib/taxonomy";
import { getSkillsByAgent } from "@/lib/skills";
import { SkillRow } from "@/components/skill-row";
import { CopyCodeBlock } from "@/components/copy-code-block";
import { MCP_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

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
  return pageMetadata({
    title: `UI Skillbook for ${agentLabel(agent)}`,
    description: `UI skills, MCP and CLI setup for ${agentLabel(agent)}.`,
    path: `/agents/${agent}`,
  });
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
      <Breadcrumbs items={[{ label: "Agents", href: "/agents" }, { label }]} />
      <h1 className="display mt-3 text-3xl sm:text-4xl">
        UI Skillbook for {label}
      </h1>
      <p className="mt-3 max-w-lg text-muted-foreground">
        Give {label} access to UI Skillbook&apos;s design knowledge. Open any skill below
        and use &ldquo;Copy for agent&rdquo; to paste it directly into your session.
      </p>

      <Card className="mt-6 space-y-5 p-5">
        <div>
          <p className="label">CLI</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Browse and fetch skills from a terminal or an agent&apos;s shell tool.
          </p>
          <div className="mt-2">
            <CopyCodeBlock code={`npx uiskillbook start\nnpx uiskillbook list --category motion\nnpx uiskillbook get pressed-button-feedback\nnpx uiskillbook siteplane`} />
          </div>
        </div>
        <div>
          <p className="label">MCP</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Connect {label} to the catalog over Model Context Protocol —{" "}
            <Code>list_skills</Code>, <Code>get_skill</Code> and{" "}
            <Code>list_siteplane_components</Code> tools. Setup varies by agent;
            point it at the endpoint below.
          </p>
          <div className="mt-2">
            <CopyCodeBlock code={MCP_URL} />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Or skip both — every skill page has a &ldquo;Copy for agent&rdquo; button you can
          paste directly into a session.
        </p>
      </Card>

      <div className="mt-10 space-y-0.5">
        {skills.length === 0 ? (
          <p className="py-10 text-sm text-muted-foreground">No skills tagged for {label} yet.</p>
        ) : (
          skills.map((skill, i) => <SkillRow key={skill.slug} skill={skill} index={i + 1} />)
        )}
      </div>

      <div className="mt-10">
        <Link href="/agents" className="link rounded-control text-sm">
          Back to all agents
        </Link>
      </div>
    </div>
  );
}
