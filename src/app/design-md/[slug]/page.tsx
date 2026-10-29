import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllDesignMds, getDesignMdBySlug, getDesignMdRaw } from "@/lib/design-md";
import { markdownToHtml } from "@/lib/markdown";
import { BrandTile } from "@/components/brand-tile";
import { CopyButtons } from "@/components/copy-buttons";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return getAllDesignMds().map((d) => ({ slug: d.slug }));
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
  const html = await markdownToHtml(entry.body.replace(/^\s*# .*\n/, ""));
  const raw = getDesignMdRaw(slug);
  const agentPrompt = `Save the following as DESIGN.md in the project root and follow it for all UI work:\n\n${raw}`;

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <p className="label">
        Design.md / {entry.category}
      </p>
      <div className="group mt-4 flex items-center gap-4">
        <BrandTile entry={entry} size="lg" />
        <div>
          <h1 className="display text-3xl sm:text-4xl">
            {entry.name}
          </h1>
          <a
            href={entry.website}
            target="_blank"
            rel="noreferrer"
            className="rounded-input text-sm text-accent underline-offset-2 hover:underline"
          >
            {entry.website.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        </div>
      </div>
      <p className="mt-4 text-base text-secondary">{entry.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CopyButtons raw={raw} agentPrompt={agentPrompt} rawLabel="Copy DESIGN.md" />
        <a href={`/design-md/${slug}/raw`} className="link rounded-input text-sm">
          Raw DESIGN.md
        </a>
      </div>

      <article
        className="skill-content prose prose-sm mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-10">
        <Link href="/design-md" className="link rounded-input text-sm">
          Back to all Design.md files
        </Link>
      </div>
    </div>
  );
}
