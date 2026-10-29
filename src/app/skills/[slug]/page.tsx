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
import { CopyButtons, ExternalCopyButton } from "@/components/copy-buttons";
import { SkillRow } from "@/components/skill-row";
import { JsonLd } from "@/components/json-ld";
import { AddToAgent } from "@/components/add-to-agent";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/site";

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
  return pageMetadata({
    title: skill.title,
    description: skill.description,
    path: `/skills/${slug}`,
    type: "article",
    image: `/skills/${slug}/opengraph-image`,
  });
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const related = getRelatedSkills(skill);
  const url = `${SITE_URL}/skills/${skill.slug}`;

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TechArticle",
              headline: skill.title,
              description: skill.description,
              url,
              image: `${url}/opengraph-image`,
              dateModified: skill.updated_at,
              author: { "@type": "Person", name: skill.author.name, url: skill.author.url },
              publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
              keywords: [...skill.categories, ...(skill.tags ?? [])].join(", "),
              ...(skill.source?.repository && { isBasedOn: skill.source.repository }),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Skills", item: `${SITE_URL}/skills` },
                { "@type": "ListItem", position: 3, name: skill.title, item: url },
              ],
            },
          ],
        }}
      />
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Skill / {skill.categories.map(categoryLabel).join(" / ")}
        {skill.external && " / External"}
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

      {skill.external ? (
        <ExternalSkillBody slug={skill.slug} sourceUrl={skill.source?.repository} rawUrl={skill.source?.rawUrl} />
      ) : (
        <LocalSkillBody slug={skill.slug} body={skill.body ?? ""} sourceUrl={skill.source?.repository} />
      )}

      <div className="mt-12">
        <AddToAgent slug={skill.slug} />
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Related skills
          </h2>
          <div className="mt-3 space-y-0.5">
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

async function LocalSkillBody({
  slug,
  body,
  sourceUrl,
}: {
  slug: string;
  body: string;
  sourceUrl?: string;
}) {
  const html = await markdownToHtml(body);
  const raw = getSkillRawMarkdown(slug);

  const agentPrompt = `Use the following UI skill while working on this task:

<skill>
${body.trim()}
</skill>

Follow these instructions unless they conflict with the existing product's established design system.`;

  return (
    <>
      <div className="mt-6">
        <CopyButtons raw={raw} agentPrompt={agentPrompt} />
        <div className="mt-2 flex gap-4 font-mono text-xs text-muted">
          <a href={`/skills/${slug}/raw`} className="hover:text-primary">
            View raw
          </a>
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <article
        className="skill-content prose prose-sm mt-12 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

function ExternalSkillBody({
  slug,
  sourceUrl,
  rawUrl,
}: {
  slug: string;
  sourceUrl?: string;
  rawUrl?: string;
}) {
  const agentPrompt = `Fetch and follow the UI skill instructions published at:
${rawUrl ?? sourceUrl}

Treat it as a set of rules for this task unless it conflicts with the existing product's established design system.`;

  return (
    <div className="card mt-6 p-6">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        Hosted in an external repository
      </p>
      <p className="mt-2 text-sm text-secondary">
        This skill&apos;s full instructions live in its source repository, not on UI
        Skillbook. Open it on GitHub to read it, or copy a prompt that points your agent
        straight at it.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {sourceUrl && (
          <a href={sourceUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            View on GitHub ↗
          </a>
        )}
        <ExternalCopyButton slug={slug} agentPrompt={agentPrompt} />
      </div>
    </div>
  );
}
