import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCollections,
  getCollectionBySlug,
  getCollectionSkills,
} from "@/lib/collections";
import { SkillRow } from "@/components/skill-row";

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
  return { title: collection.title, description: collection.description };
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
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        Collection
      </span>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
        {collection.title}
      </h1>
      <p className="mt-3 text-secondary">{collection.description}</p>
      <p className="mt-2 font-mono text-xs text-muted">{skills.length} skills</p>

      <div className="mt-10 space-y-0.5">
        {skills.map((skill, i) => (
          <SkillRow key={skill.slug} skill={skill} index={i + 1} />
        ))}
      </div>

      <div className="mt-10">
        <Link href="/collections" className="text-sm text-secondary hover:text-primary">
          ← All collections
        </Link>
      </div>
    </div>
  );
}
