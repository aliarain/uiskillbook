import Link from "next/link";
import type { Metadata } from "next";
import { getAllCollections } from "@/lib/collections";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Collections",
  description: "Skills grouped by the job at hand, such as a dashboard or a landing page.",
  path: "/collections",
});

export default function CollectionsPage() {
  const collections = getAllCollections();

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="display text-4xl">Collections</h1>
      <p className="mt-2 text-ink-2">
        Skills grouped by the job at hand, such as a dashboard or a landing page.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {collections.map((collection) => (
          <Link key={collection.slug} href={`/collections/${collection.slug}`} className="card p-5">
            <h2 className="text-base font-medium text-ink">{collection.title}</h2>
            <p className="mt-2 text-sm text-ink-2">{collection.description}</p>
            <p className="mt-3 text-[13px] text-ink-3">
              {collection.skills.length} skills
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
