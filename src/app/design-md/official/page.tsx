import type { Metadata } from "next";
import { getOfficialDesignMds } from "@/lib/design-md";
import { DesignMdHub } from "@/components/design-md-hub";
import { pageMetadata } from "@/lib/site";
import { listNames } from "@/lib/design-md-copy";

type Props = { searchParams: Promise<{ page?: string }> };

export function generateMetadata(): Metadata {
  const entries = getOfficialDesignMds();
  return pageMetadata({
    title: `Official DESIGN.md files: ${entries.length} published by the brands themselves`,
    description: `${entries.length} DESIGN.md files published by the brands themselves, including ${listNames(entries, 4)}. We link to each one so it stays current.`,
    path: "/design-md/official",
    image: "/design-md/official/opengraph-image",
  });
}

export default async function OfficialDesignMdPage({ searchParams }: Props) {
  const entries = getOfficialDesignMds();
  return (
    <DesignMdHub
      title="Official Design.md files"
      intro={
        <p>
          DESIGN.md files that companies and projects publish themselves. We link to each file instead of copying it, so
          you always get the current version. Where we also have our own or a community write-up, both are on the page.
          The list follows{" "}
          <a
            href="https://github.com/VoltAgent/official-design-md"
            target="_blank"
            rel="noreferrer"
            className="text-link underline-offset-2 hover:underline"
          >
            VoltAgent/official-design-md
          </a>
          .
        </p>
      }
      path="/design-md/official"
      crumb={{ label: "Official" }}
      entries={entries}
      page={(await searchParams).page}
    />
  );
}
