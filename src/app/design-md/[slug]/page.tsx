import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  COLOR_FAMILIES,
  categorySlug,
  colorFamily,
  designMdGroup,
  fontSlug,
  getDesignMdBody,
  getDesignMdBySlug,
  getDesignMdFont,
  getDesignMdRaw,
  getOriginalDesignMds,
  getRelatedDesignMds,
  inkOn,
  type DesignMd,
} from "@/lib/design-md";
import { markdownToHast } from "@/lib/markdown";
import { Markdown } from "@/components/markdown";
import { BrandTile } from "@/components/brand-tile";
import { CopyButtons, CopyCommand } from "@/components/copy-buttons";
import { DesignMdGrid } from "@/components/design-md-grid";
import { JsonLd } from "@/components/json-ld";
import { MCP_URL, SITE_NAME, SITE_URL, pageMetadata } from "@/lib/site";
import { clip } from "@/lib/design-md-copy";
import { Breadcrumbs } from "@/components/breadcrumbs";

// Our originals are prerendered; the ~1,400 community files render on first
// request and are then cached, which keeps the build short.
export function generateStaticParams() {
  return getOriginalDesignMds().map((d) => ({ slug: d.slug }));
}

/** "Inter and Geist Mono" from the first two fonts, or null. */
function fontPhrase(entry: DesignMd) {
  const fonts = entry.fonts.slice(0, 2);
  return fonts.length ? fonts.join(" and ") : null;
}

/** A description built from what the file declares, then the file's own summary. */
function metaDescription(entry: DesignMd) {
  const fonts = fontPhrase(entry);
  const facts = [
    `${entry.name}'s design language as a DESIGN.md for coding agents`,
    entry.colors.length ? `${entry.colors.length} colors led by ${entry.color.toLowerCase()}` : null,
    fonts ? `set in ${fonts}` : null,
  ].filter(Boolean);
  return clip(`${facts.join(", ")}. ${entry.description}`, 160);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDesignMdBySlug(slug);
  if (!entry) return {};
  return pageMetadata({
    title: `${entry.name} DESIGN.md: colors, fonts and UI rules`,
    description: metaDescription(entry),
    path: `/design-md/${slug}`,
    image: `/design-md/${slug}/opengraph-image`,
    type: "article",
  });
}

export default async function DesignMdDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getDesignMdBySlug(slug);
  if (!entry) notFound();

  // The page header already shows the brand name, so drop the file's own H1.
  const tree = await markdownToHast(getDesignMdBody(slug).replace(/^\s*# .*\n/, ""));
  const group = designMdGroup(entry);
  const groupHref = `/design-md/group/${categorySlug(group)}`;
  const family = COLOR_FAMILIES.find((c) => c.slug === colorFamily(entry.color))!;
  const raw = getDesignMdRaw(slug);
  const agentPrompt = `Save the following as DESIGN.md in the project root and follow it for all UI work:\n\n${raw}`;
  const related = getRelatedDesignMds(entry);
  const url = `${SITE_URL}/design-md/${slug}`;
  const rawUrl = `${SITE_URL}/design-md/${slug}.md`;

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TechArticle",
              headline: `${entry.name} DESIGN.md`,
              description: entry.description,
              url,
              inLanguage: entry.language,
              dateModified: entry.updated_at,
              about: { "@type": "Brand", name: entry.name, ...(entry.website && { url: entry.website }) },
              keywords: ["DESIGN.md", "design system", entry.name, ...entry.fonts].join(", "),
              publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
              encoding: { "@type": "MediaObject", contentUrl: rawUrl, encodingFormat: "text/markdown" },
              ...(entry.source
                ? {
                    author: { "@type": "Organization", name: entry.source.repo, url: `https://github.com/${entry.source.repo}` },
                    isBasedOn: entry.source.url,
                    license: `https://spdx.org/licenses/${entry.source.license}.html`,
                  }
                : { author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL } }),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Design.md", item: `${SITE_URL}/design-md` },
                { "@type": "ListItem", position: 2, name: group, item: `${SITE_URL}${groupHref}` },
                { "@type": "ListItem", position: 3, name: entry.name, item: url },
              ],
            },
          ],
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Design.md", href: "/design-md" },
          { label: group, href: groupHref },
        ]}
      />
      <div className="group mt-4 flex items-center gap-4">
        <BrandTile entry={entry} size="lg" />
        <div className="min-w-0">
          <h1 className="display text-3xl break-keep sm:text-4xl" lang={entry.language}>
            {entry.name} <span className="text-ink-3">DESIGN.md</span>
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
      <p className="mt-4 text-base text-ink-2" lang={entry.language}>
        {entry.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CopyButtons raw={raw} agentPrompt={agentPrompt} rawLabel="Copy DESIGN.md" />
        <a href={`/design-md/${slug}.md`} className="link inline-block rounded-input py-1 text-sm">
          Raw DESIGN.md
        </a>
      </div>

      <section aria-labelledby="at-a-glance" className="mt-10 rounded-feature border border-line p-5 sm:p-6">
        <h2 id="at-a-glance" className="text-xl font-semibold tracking-[-0.01em] text-ink">
          At a glance
        </h2>
        <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[8rem_1fr]">
          <dt className="text-ink-3">Group</dt>
          <dd>
            <Link href={groupHref} className="text-link underline-offset-2 hover:underline">
              {group}
            </Link>
          </dd>
          <dt className="text-ink-3">Main color</dt>
          <dd className="flex items-center gap-2">
            <span aria-hidden className="size-4 rounded-full border border-line" style={{ background: entry.color }} />
            <span className="font-mono">{entry.color.toLowerCase()}</span>
            <Link href={`/design-md/color/${family.slug}`} className="text-link underline-offset-2 hover:underline">
              {family.label} design systems
            </Link>
          </dd>
          {entry.fonts.length > 0 && (
            <>
              <dt className="text-ink-3">{entry.fonts.length === 1 ? "Font" : "Fonts"}</dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-1">
                {entry.fonts.map((font) =>
                  getDesignMdFont(fontSlug(font)) ? (
                    <Link
                      key={font}
                      href={`/design-md/font/${fontSlug(font)}`}
                      className="text-link underline-offset-2 hover:underline"
                    >
                      {font}
                    </Link>
                  ) : (
                    <span key={font} className="text-ink">
                      {font}
                    </span>
                  )
                )}
              </dd>
            </>
          )}
        </dl>
        {entry.colors.length > 0 && (
          <>
            <h3 className="label mt-6">Colors in this file</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {entry.colors.map((c) => (
                <li key={c.hex} className="overflow-hidden rounded-card border border-line">
                  <div
                    className="flex h-14 items-end p-2 font-mono text-[11px]"
                    style={{ background: c.hex, color: inkOn(c.hex) }}
                  >
                    {c.hex}
                  </div>
                  <p className="truncate px-2 py-1.5 text-xs text-ink-2" title={c.name}>
                    {c.name ?? "Unnamed"}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

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

      <section aria-labelledby="use-with-agent" className="mt-12 rounded-feature border border-line bg-panel p-5 sm:p-6">
        <h2 id="use-with-agent" className="text-xl font-semibold tracking-[-0.01em] text-ink">
          Use it with your agent
        </h2>
        <p className="mt-1 text-sm text-ink-2">
          Save the file as <code className="font-mono">DESIGN.md</code> in your project root, then ask your agent to follow
          it for UI work. Or let the agent fetch it over MCP.
        </p>
        <div className="mt-5 grid gap-4">
          <CopyCommand label="Download" command={`curl -o DESIGN.md ${rawUrl}`} event="copy-design-md-curl" />
          <div className="grid gap-4 md:grid-cols-2">
            <CopyCommand label="MCP server" command={MCP_URL} event="copy-mcp-url" />
            <CopyCommand label="MCP tool call" command={`get_design_md({ "slug": "${slug}" })`} event="copy-design-md-mcp" />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related" className="mt-12">
          <h2 id="related" className="text-xl font-semibold tracking-[-0.01em] text-ink">
            Related Design.md files
          </h2>
          <div className="mt-4">
            <DesignMdGrid entries={related} />
          </div>
        </section>
      )}

      <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <Link href="/design-md" className="link rounded-input">
          All Design.md files
        </Link>
        <Link href="/design-md/fonts" className="link rounded-input">
          Browse by font
        </Link>
      </div>
    </div>
  );
}
