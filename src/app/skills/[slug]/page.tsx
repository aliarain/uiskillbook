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
import { groupAnchor } from "@/lib/siteplane";
import { Markdown } from "@/components/markdown";
import { Badge } from "@/siteplane/components/badge";
import { ArrowUpRight } from "lucide-react";
import { CopyButtons, ExternalCopyButton } from "@/components/copy-buttons";
import { SkillRow } from "@/components/skill-row";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/siteplane/components/button";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/siteplane/components/accordion";
import { RawSkillDrawer } from "@/components/raw-skill-drawer";
import { InstallPrompt } from "@/components/install-prompt";
import { AuthorBadge, StarCount } from "@/components/skill-meta";
import { AddToAgent } from "@/components/add-to-agent";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

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
  const install = installTargets(skill);
  const faq = [
    { q: `What does ${skill.title} do?`, a: skill.description },
    {
      q: `How do I install ${skill.title}?`,
      a: install[0].prompt.replace(/`/g, ""),
    },
    {
      q: "Which coding agents does it work with?",
      a: `${skill.agents.map(agentLabel).join(", ")}. Any agent that reads SKILL.md files or Markdown instructions can use it.`,
    },
    {
      q: "Who maintains it?",
      a: skill.external
        ? `${skill.author.name}, in ${skill.source?.repository ?? "its source repository"}. UI Skillbook indexes it.`
        : "UI Skillbook. The source is in the uiskillbook repository on GitHub.",
    },
  ];

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
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
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
              ]
            : [
                { label: "Skills", href: "/skills" },
                { label: categoryLabel(skill.categories[0]), href: `/skills?category=${skill.categories[0]}` },
              ]
        }
      />

      <h1 className="display mt-4 text-3xl sm:text-4xl">{skill.siteplane?.title ?? skill.title}</h1>
      <p className="mt-3 text-lg text-ink-2 text-pretty">{skill.description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        {skill.author.url ? (
          <a href={skill.author.url} target="_blank" rel="noreferrer" className="rounded-input">
            <AuthorBadge skill={skill} />
          </a>
        ) : (
          <AuthorBadge skill={skill} />
        )}
        <StarCount skill={skill} />
        {skill.source?.repository && (
          <a
            href={skill.source.repository}
            target="_blank"
            rel="noreferrer"
            className="link rounded-input text-sm"
          >
            Source on GitHub
          </a>
        )}
        {skill.siteplane && (
          <Button variant="outline" size="sm" render={<a href={skill.siteplane.docs} target="_blank" rel="noreferrer" />}>
            Siteplane docs
            <ArrowUpRight aria-hidden />
          </Button>
        )}
        {skill.siteplane && <Badge variant="accent">Siteplane UI {skill.version}</Badge>}
        {skill.external && (
          <span className="rounded-full bg-tag-violet-bg px-2.5 py-0.5 text-[13px] font-medium text-tag-violet">
            External
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="label mr-1">Works with</span>
        {skill.agents.map((a) => (
          <span key={a} className="rounded-full border border-line px-2.5 py-0.5 text-[13px] text-ink-2">
            {agentLabel(a)}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <InstallPrompt targets={install} />
      </div>

      {skill.external ? (
        <ExternalSkillBody slug={skill.slug} sourceUrl={skill.source?.repository} rawUrl={skill.source?.rawUrl} />
      ) : (
        <LocalSkillBody slug={skill.slug} body={skill.body ?? ""} />
      )}

      <div className="mt-12">
        <AddToAgent slug={skill.slug} />
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-ink">Questions</h2>
        <Accordion className="mt-3">
          {faq.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionPanel>
                <p className="text-sm leading-relaxed text-ink-2">{f.a}</p>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

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
        <Link href={skill.siteplane ? "/siteplane-ui" : "/skills"} className="link rounded-input text-sm">
          {skill.siteplane ? "Back to Siteplane UI" : "Back to all skills"}
        </Link>
      </div>
    </div>
  );
}

async function LocalSkillBody({ slug, body }: { slug: string; body: string }) {
  // The page already shows the title, so the body's own leading H1 (after any comment) is dropped.
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
        <div className="mt-3 flex gap-4 text-sm">
          <RawSkillDrawer slug={slug} raw={raw} />
        </div>
      </div>

      <Markdown tree={tree} className="mt-12" />
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
    <div className="card mt-6 p-5">
      <h2 className="text-base font-semibold text-ink">Hosted in an external repository</h2>
      <p className="mt-2 text-sm text-ink-2">
        This skill&apos;s full instructions live in its source repository, not on UI
        Skillbook. Open it on GitHub to read it, or copy a prompt that points your agent
        straight at it.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {sourceUrl && (
          <Button variant="outline" render={<a href={sourceUrl} target="_blank" rel="noreferrer" />}>
            View on GitHub
          </Button>
        )}
        <ExternalCopyButton slug={slug} agentPrompt={agentPrompt} />
      </div>
    </div>
  );
}
