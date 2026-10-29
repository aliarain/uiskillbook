import Link from "next/link";
import { markdownToHast } from "@/lib/markdown";
import { Markdown } from "@/components/markdown";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/raptrx-ui/components/pagination";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCollections,
  getCollectionBySlug,
  getCollectionSkills,
} from "@/lib/collections";
import { SkillRow } from "@/components/skill-row";
import { pageMetadata } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function generateStaticParams() {
  return getAllCollections().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return pageMetadata({
    title: collection.title,
    description: collection.description,
    path: `/collections/${slug}`,
  });
}

const PAGE_SIZE = 30;

export default async function CollectionDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const skills = getCollectionSkills(collection);
  const pageCount = Math.max(1, Math.ceil(skills.length / PAGE_SIZE));
  const page = Math.min(pageCount, Math.max(1, Number((await searchParams).page) || 1));
  const offset = (page - 1) * PAGE_SIZE;
  const tree = await markdownToHast(collection.body);
  const href = (n: number) => (n === 1 ? `/collections/${slug}` : `/collections/${slug}?page=${n}`);

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <Breadcrumbs items={[{ label: "Collections", href: "/collections" }, { label: collection.title }]} />
      <h1 className="display mt-3 text-3xl sm:text-4xl">
        {collection.title}
      </h1>
      <p className="mt-3 text-ink-2">{collection.description}</p>
      <p className="mt-2 text-[13px] text-ink-3">{skills.length} skills</p>

      {collection.body.trim() && <Markdown tree={tree} className="mt-6" />}

      <h2 className="sr-only">Skills in this collection</h2>
      <div className="mt-10 space-y-0.5">
        {skills.slice(offset, offset + PAGE_SIZE).map((skill) => (
          <SkillRow key={skill.slug} skill={skill} />
        ))}
      </div>

      {pageCount > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious disabled={page === 1} render={<Link href={href(Math.max(1, page - 1))} />} />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink active={n === page} render={<Link href={href(n)} />}>
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext disabled={page === pageCount} render={<Link href={href(Math.min(pageCount, page + 1))} />} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <div className="mt-10">
        <Link href="/collections" className="link rounded-input text-sm">
          Back to all collections
        </Link>
      </div>
    </div>
  );
}
