import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categorySlug, designMdGroup, getDesignMdBody, getDesignMdBySlug, getDesignMdRaw, getOriginalDesignMds } from "@/lib/design-md";
import { markdownToHast } from "@/lib/markdown";
import { Markdown } from "@/components/markdown";
import { BrandTile } from "@/components/brand-tile";
import { CopyButtons } from "@/components/copy-buttons";
import { pageMetadata } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

// Our originals are prerendered; the ~1,400 community files render on first
// request and are then cached, which keeps the build short.
export function generateStaticParams() {
  return getOriginalDesignMds().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDesignMdBySlug(slug);
  if (!entry) return {};
  return pageMetadata({
    title: `${entry.name} DESIGN.md`,
    description: entry.description,
    path: `/design-md/${slug}`,
    type: "article",
  });
}

export default async function DesignMdDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getDesignMdBySlug(slug);
  if (!entry) notFound();

  // The page header already shows the brand name, so drop the file's own H1.
  const tree = await markdownToHast(getDesignMdBody(slug).replace(/^\s*# .*\n/, ""));
  const group = designMdGroup(entry);
  const raw = getDesignMdRaw(slug);
  const agentPrompt = `Save the following as DESIGN.md in the project root and follow it for all UI work:\n\n${raw}`;

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Design.md", href: "/design-md" },
          { label: group, href: `/design-md?category=${categorySlug(group)}` },
        ]}
      />
      <div className="group mt-4 flex items-center gap-4">
        <BrandTile entry={entry} size="lg" />
        <div>
          <h1 className="display text-3xl sm:text-4xl">
            {entry.name}
          </h1>
          {entry.website ? (
            <a
              href={entry.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-input text-sm text-link underline-offset-2 hover:underline"
            >
              {entry.website.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          ) : (
            <p className="text-sm text-ink-3">{entry.category}</p>
          )}
        </div>
      </div>
      <p className="mt-4 text-base text-ink-2">{entry.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CopyButtons raw={raw} agentPrompt={agentPrompt} rawLabel="Copy DESIGN.md" />
        <a href={`/design-md/${slug}/raw`} className="link inline-block rounded-input py-1 text-sm">
          Raw DESIGN.md
        </a>
      </div>

      {entry.source && (
        <aside className="mt-6 rounded-card border border-line bg-panel p-4 text-sm text-ink-2">
          <p>
            Community file from{" "}
            <a href={`https://github.com/${entry.source.repo}`} target="_blank" rel="noreferrer" className="text-link underline-offset-2 hover:underline">
              {entry.source.repo}
            </a>{" "}
            ({entry.source.license}), pinned to commit{" "}
            <a href={entry.source.url} target="_blank" rel="noreferrer" className="font-mono text-link underline-offset-2 hover:underline">
              {entry.source.commit.slice(0, 7)}
            </a>
            . Not written by UI Skillbook or the brand. It passed our automated safety scan before listing.
          </p>
          <p className="mt-1">
            <a
              href={`https://github.com/${entry.source.repo}/blob/${entry.source.commit}/LICENSE`}
              target="_blank"
              rel="noreferrer"
              className="text-link underline-offset-2 hover:underline"
            >
              License and copyright notice
            </a>
          </p>
        </aside>
      )}

      <div lang={entry.language}>
        <Markdown tree={tree} className="mt-10" />
      </div>

      <div className="mt-10">
        <Link href="/design-md" className="link rounded-input text-sm">
          Back to all Design.md files
        </Link>
      </div>
    </div>
  );
}
