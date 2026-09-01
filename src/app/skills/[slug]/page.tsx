import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllSkills,
  getSkillBySlug,
  getSkillRawMarkdown,
  getRelatedSkills,
} from "@/lib/skills";
import { categoryLabel, agentLabel } from "@/lib/taxonomy";
import { markdownToHtml } from "@/lib/markdown";
import { CopyButtons } from "@/components/copy-buttons";
import { SkillRow } from "@/components/skill-row";

export function generateStaticParams() {
  return getAllSkills().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return {};
  return { title: skill.title, description: skill.description };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const html = await markdownToHtml(skill.body);
  const raw = getSkillRawMarkdown(slug);
  const related = getRelatedSkills(skill);

  const agentPrompt = `Use the following UI skill while working on this task:

<skill>
${skill.body.trim()}
</skill>

Follow these instructions unless they conflict with the existing product's established design system.`;

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Skill / {skill.categories.map(categoryLabel).join(" / ")}
      </p>

      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
        {skill.title}
      </h1>
      <p className="mt-3 text-base text-secondary">{skill.description}</p>

      <p className="mt-4 text-sm text-muted">
        by{" "}
        {skill.author.url ? (
          <a href={skill.author.url} className="text-accent hover:underline">
            {skill.author.name}
          </a>
        ) : (
          skill.author.name
        )}
      </p>

      <div className="mt-4">
        <p className="font-mono text-xs text-muted">Works with</p>
        <p className="mt-1 text-sm text-secondary">
          {skill.agents.map(agentLabel).join(" · ")}
        </p>
      </div>

      <div className="mt-6">
        <CopyButtons raw={raw} agentPrompt={agentPrompt} />
        <div className="mt-2 flex gap-4 font-mono text-xs text-muted">
          <a href={`/skills/${skill.slug}/raw`} className="hover:text-primary">
            View raw
          </a>
          {skill.source?.repository && (
            <a
              href={skill.source.repository}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <article
        className="skill-content prose prose-sm mt-10 max-w-none border-t border-border pt-10"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {related.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Related skills
          </h2>
          <div className="mt-2">
            {related.map((s, i) => (
              <SkillRow key={s.slug} skill={s} index={i + 1} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link href="/skills" className="text-sm text-secondary hover:text-primary">
          ← All skills
        </Link>
      </div>
    </div>
  );
}
