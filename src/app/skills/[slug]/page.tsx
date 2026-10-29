import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllSkills,
  getSkillBySlug,
  getSkillRawMarkdown,
  getRelatedSkills,
  installTargets,
} from "@/lib/skills";
import { categoryLabel, agentLabel } from "@/lib/taxonomy";
import { markdownToHast } from "@/lib/markdown";
import { Markdown } from "@/components/markdown";
import { Badge } from "@/siteplane/components/badge";
import { Button } from "@/siteplane/components/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/siteplane/components/card";
import { ArrowUpRight } from "lucide-react";
import { CopyButtons, ExternalCopyButton } from "@/components/copy-buttons";
import { SkillRow } from "@/components/skill-row";
import { JsonLd } from "@/components/json-ld";
import { InstallPrompt } from "@/components/install-prompt";
import { AuthorBadge, StarCount } from "@/components/skill-meta";
import { AddToAgent } from "@/components/add-to-agent";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { groupAnchor } from "@/lib/siteplane";

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
      <Breadcrumbs
        items={
          skill.siteplane
            ? [
                { label: "Siteplane UI", href: "/siteplane-ui" },
                { label: skill.siteplane.group, href: `/siteplane-ui#${groupAnchor(skill.siteplane.group)}` },
                { label: skill.siteplane.title },
              ]
            : [
                { label: "Skills", href: "/skills" },
                { label: categoryLabel(skill.categories[0]), href: `/skills?category=${skill.categories[0]}` },
                { label: skill.title },
              ]
        }
      />

      <h1 className="display mt-4 text-3xl sm:text-4xl">{skill.siteplane?.title ?? skill.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground text-pretty">{skill.description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        {skill.author.url ? (
          <a href={skill.author.url} target="_blank" rel="noreferrer" className="rounded-control">
            <AuthorBadge skill={skill} />
          </a>
        ) : (
          <AuthorBadge skill={skill} />
        )}
        <StarCount skill={skill} />
        {skill.source?.repository && (
          <Button variant="link" size="sm" render={<a href={skill.source.repository} target="_blank" rel="noreferrer" />}>
            Source on GitHub
          </Button>
        )}
        {skill.siteplane && (
          <Button variant="outline" size="sm" render={<a href={skill.siteplane.docs} target="_blank" rel="noreferrer" />}>
            Siteplane docs
            <ArrowUpRight aria-hidden />
          </Button>
        )}
        {skill.siteplane && <Badge variant="accent">Siteplane UI {skill.version}</Badge>}
        {skill.external && <Badge variant="info">External</Badge>}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="label mr-1">Works with</span>
        {skill.agents.map((a) => (
          <Badge key={a} variant="outline">
            {agentLabel(a)}
          </Badge>
        ))}
      </div>

      <div className="mt-8">
        <InstallPrompt targets={installTargets(skill)} />
      </div>

      {skill.external ? (
        <ExternalSkillBody sourceUrl={skill.source?.repository} rawUrl={skill.source?.rawUrl} />
      ) : (
        <LocalSkillBody slug={skill.slug} body={skill.body ?? ""} />
      )}

      <div className="mt-12">
        <AddToAgent slug={skill.slug} />
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="label">
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
        <Button variant="ghost" size="sm" render={<Link href={skill.siteplane ? "/siteplane-ui" : "/skills"} />}>
          {skill.siteplane ? "Back to Siteplane UI" : "Back to all skills"}
        </Button>
      </div>
    </div>
  );
}

async function LocalSkillBody({ slug, body }: { slug: string; body: string }) {
  // The page already shows the title, so the body's own leading H1 is dropped.
  const tree = await markdownToHast(body.replace(/^\s*(<!--[\s\S]*?-->\s*)?# .*\n/, ""));
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
        <Button variant="link" size="sm" className="mt-2 px-0" render={<a href={`/skills/${slug}/raw`} />}>
          View raw SKILL.md
        </Button>
      </div>

      <Markdown tree={tree} className="mt-10" />
    </>
  );
}

function ExternalSkillBody({
  sourceUrl,
  rawUrl,
}: {
  sourceUrl?: string;
  rawUrl?: string;
}) {
  const agentPrompt = `Fetch and follow the UI skill instructions published at:
${rawUrl ?? sourceUrl}

Treat it as a set of rules for this task unless it conflicts with the existing product's established design system.`;

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Hosted in an external repository</CardTitle>
        <CardDescription>
          This skill&apos;s full instructions live in its source repository, not on UI Skillbook. Open it on
          GitHub to read it, or copy a prompt that points your agent straight at it.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-wrap gap-2">
        {sourceUrl && (
          <Button variant="outline" render={<a href={sourceUrl} target="_blank" rel="noreferrer" />}>
            View on GitHub
          </Button>
        )}
        <ExternalCopyButton agentPrompt={agentPrompt} />
      </CardFooter>
    </Card>
  );
}
