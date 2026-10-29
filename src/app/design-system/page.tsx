import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { KitShowcase } from "./kit-showcase";

export const metadata: Metadata = pageMetadata({
  title: "Design system",
  description:
    "Every Siteplane UI component UI Skillbook is built on, live in the site's own theme.",
  path: "/design-system",
});

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="display text-4xl">Design system</h1>
      <p className="mt-3 max-w-2xl text-ink-2 text-pretty">
        UI Skillbook is built on Siteplane UI. Every component the site installs is shown below,
        live and in the current theme. The tokens and rules are written up in DESIGN.md at the
        root of the repository.
      </p>
      <div className="mt-10">
        <KitShowcase />
      </div>
    </div>
  );
}
