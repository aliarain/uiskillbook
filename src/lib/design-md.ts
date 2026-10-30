import fs from "fs";
import path from "path";
import matter from "gray-matter";
import logoData from "../../content/design-md-logos.json";
import importIndex from "../../content/design-md-imports/index.json";

const DESIGN_MD_DIR = path.join(process.cwd(), "content", "design-md");
const IMPORTS_DIR = path.join(process.cwd(), "content", "design-md-imports", "files");

export type DesignMdFrontmatter = {
  name: string;
  description: string;
  website?: string;
  /** Brand color for the logo tile. */
  color: string;
  category: string;
  updated_at: string;
  /** Simple Icons slug for the brand mark. Without one the tile shows the brand initial. */
  icon?: string;
};

/** Where a community DESIGN.md came from (scripts/import-design-md.mjs). */
export type DesignMdSource = {
  repo: string;
  path: string;
  commit: string;
  license: string;
  licenseFile: string;
  url: string;
};

export type DesignMd = DesignMdFrontmatter & {
  slug: string;
  /** "original" entries are written by UI Skillbook; "community" ones are imported, credited and licensed. */
  origin: "original" | "community";
  language: string;
  source?: DesignMdSource;
  /** Full-color Logoforge icon (CC0), from scripts/fetch-design-md-logos.mjs. */
  logo?: { light: string; dark?: string };
};

type LogoRecord = Record<string, { icon?: { file: string }; "icon-dark"?: { file: string } }>;
type ImportEntry = { slug: string; name: string; description: string; color: string; category: string; language: string; source: DesignMdSource };

export const ORIGINALS_GROUP = "UI Skillbook";

let cache: DesignMd[] | null = null;

function readOriginals(): DesignMd[] {
  const slugs = fs.existsSync(DESIGN_MD_DIR)
    ? fs.readdirSync(DESIGN_MD_DIR).filter((entry) => fs.existsSync(path.join(DESIGN_MD_DIR, entry, "DESIGN.md")))
    : [];
  return slugs.map((slug) => {
    const { data } = matter(fs.readFileSync(path.join(DESIGN_MD_DIR, slug, "DESIGN.md"), "utf8"));
    const logo = (logoData as LogoRecord)[slug];
    return {
      slug,
      origin: "original" as const,
      language: "en",
      ...(data as DesignMdFrontmatter),
      logo: logo?.icon ? { light: logo.icon.file, dark: logo["icon-dark"]?.file } : undefined,
    };
  });
}

/** Our 14 originals plus the imported community files, metadata only. Bodies load on demand. */
export function getAllDesignMds(): DesignMd[] {
  if (cache) return cache;
  const imported: DesignMd[] = (importIndex.entries as ImportEntry[]).map((e) => ({
    ...e,
    origin: "community",
    icon: e.slug,
    updated_at: importIndex.importedAt,
  }));
  // Our originals first, then the English collections, then the Japanese one, each A–Z.
  const rank = (d: DesignMd) => (d.origin === "original" ? 0 : d.language === "en" ? (d.category === "Brands" ? 1 : 2) : 3);
  cache = [...readOriginals(), ...imported].sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name));
  return cache;
}

export function getOriginalDesignMds(): DesignMd[] {
  return getAllDesignMds().filter((d) => d.origin === "original");
}

export function getDesignMdBySlug(slug: string): DesignMd | undefined {
  return getAllDesignMds().find((d) => d.slug === slug);
}

/** The file as stored, frontmatter included. */
export function getDesignMdRaw(slug: string): string {
  const entry = getDesignMdBySlug(slug);
  const file =
    entry?.origin === "community"
      ? path.join(IMPORTS_DIR, `${slug}.md`)
      : path.join(DESIGN_MD_DIR, slug, "DESIGN.md");
  return fs.readFileSync(file, "utf8");
}

/** The Markdown body without frontmatter, for rendering. */
export function getDesignMdBody(slug: string): string {
  return matter(getDesignMdRaw(slug)).content;
}

/** Filter group: our originals as one group, community files by their category. */
export function designMdGroup(entry: DesignMd): string {
  return entry.origin === "original" ? ORIGINALS_GROUP : entry.category;
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getDesignMdCategories(): { slug: string; label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const entry of getAllDesignMds()) counts.set(designMdGroup(entry), (counts.get(designMdGroup(entry)) ?? 0) + 1);
  return [...counts]
    .map(([label, count]) => ({ slug: categorySlug(label), label, count }))
    .sort((a, b) => (a.label === ORIGINALS_GROUP ? -1 : b.label === ORIGINALS_GROUP ? 1 : b.count - a.count));
}
