import type { Metadata } from "next";
import { HeroCatalog, HeroPreview, HeroSearch } from "@/components/hero/hero-variants";

export const metadata: Metadata = {
  title: "Hero variants",
  robots: { index: false, follow: false },
};

const VARIANTS = { a: HeroCatalog, b: HeroSearch, c: HeroPreview } as const;

/** Internal preview: /labs/hero shows all three, /labs/hero?v=a one at a time. */
export default async function HeroLabPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const { v } = await searchParams;
  const keys = v && v in VARIANTS ? [v as keyof typeof VARIANTS] : (Object.keys(VARIANTS) as (keyof typeof VARIANTS)[]);
  return (
    <div className="mx-auto max-w-[1200px] px-6">
      {keys.map((key) => {
        const Hero = VARIANTS[key];
        return (
          <div key={key} className="border-b border-dashed border-line pb-14 last:border-0">
            <p className="pt-6 text-xs font-medium text-ink-3">Variant {key.toUpperCase()}</p>
            <Hero />
          </div>
        );
      })}
    </div>
  );
}
