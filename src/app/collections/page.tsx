import Link from "next/link";
import type { Metadata } from "next";
import { getAllCollections } from "@/lib/collections";

export const metadata: Metadata = {
  title: "Collections",
  description: "Skills grouped around the jobs you're actually trying to do.",
};

export default function CollectionsPage() {
  const collections = getAllCollections();

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-primary">Collections</h1>
      <p className="mt-2 text-secondary">
        Skills grouped around the jobs you&apos;re actually trying to do.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {collections.map((collection) => (
          <Link key={collection.slug} href={`/collections/${collection.slug}`} className="card p-6">
            <h2 className="text-base font-medium text-primary">{collection.title}</h2>
            <p className="mt-2 text-sm text-secondary">{collection.description}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {collection.skills.length} skills
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
