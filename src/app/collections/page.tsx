import Link from "next/link";
import { Card } from "@/siteplane/components/card";
import type { Metadata } from "next";
import { getAllCollections } from "@/lib/collections";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Collections",
  description: "Skills grouped around the jobs you're actually trying to do.",
  path: "/collections",
});

export default function CollectionsPage() {
  const collections = getAllCollections();

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="display text-4xl">Collections</h1>
      <p className="mt-2 text-muted-foreground">
        Skills grouped around the jobs you&apos;re actually trying to do.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {collections.map((collection) => (
          <Card key={collection.slug} render={<Link href={`/collections/${collection.slug}`} />} className="p-5">
            <h2 className="text-base font-medium text-foreground">{collection.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{collection.description}</p>
            <p className="mt-3 text-[13px] text-muted-foreground">
              {collection.skills.length} skills
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
