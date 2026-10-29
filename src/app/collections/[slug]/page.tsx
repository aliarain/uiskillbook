import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCollections,
  getCollectionBySlug,
  getCollectionSkills,
} from "@/lib/collections";
import { SkillRow } from "@/components/skill-row";
import { pageMetadata } from "@/lib/site";

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

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const skills = getCollectionSkills(collection);

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <span className="label">
        Collection
      </span>
      <h1 className="display mt-3 text-3xl sm:text-4xl">
        {collection.title}
      </h1>
      <p className="mt-3 text-secondary">{collection.description}</p>
      <p className="mt-2 text-[13px] text-muted">{skills.length} skills</p>

      <div className="mt-10 space-y-0.5">
        {skills.map((skill, i) => (
          <SkillRow key={skill.slug} skill={skill} index={i + 1} />
        ))}
      </div>

      <div className="mt-10">
        <Link href="/collections" className="link rounded-input text-sm">
          Back to all collections
        </Link>
      </div>
    </div>
  );
}
