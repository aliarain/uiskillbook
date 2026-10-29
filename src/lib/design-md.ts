import fs from "fs";
import path from "path";
import matter from "gray-matter";
import logoData from "../../content/design-md-logos.json";

const DESIGN_MD_DIR = path.join(process.cwd(), "content", "design-md");

export type DesignMdFrontmatter = {
  name: string;
  description: string;
  website: string;
  /** Brand color for the logo tile. */
  color: string;
  category: string;
  updated_at: string;
  /** Simple Icons slug for the brand mark. Without one the tile shows the brand initial. */
  icon?: string;
};

export type DesignMd = DesignMdFrontmatter & {
  slug: string;
  body: string;
  /** Full-color Logoforge icon (CC0), from scripts/fetch-design-md-logos.mjs. */
  logo?: { light: string; dark?: string };
};

type LogoRecord = Record<string, { icon?: { file: string }; "icon-dark"?: { file: string } }>;

let cache: DesignMd[] | null = null;

export function getAllDesignMds(): DesignMd[] {
  if (cache) return cache;

  const slugs = fs.existsSync(DESIGN_MD_DIR)
    ? fs.readdirSync(DESIGN_MD_DIR).filter((entry) =>
        fs.existsSync(path.join(DESIGN_MD_DIR, entry, "DESIGN.md"))
      )
    : [];

  const entries = slugs.map((slug) => {
    const raw = fs.readFileSync(path.join(DESIGN_MD_DIR, slug, "DESIGN.md"), "utf8");
    const { data, content } = matter(raw);
    const logo = (logoData as LogoRecord)[slug];
    return {
      slug,
      body: content,
      ...(data as DesignMdFrontmatter),
      logo: logo?.icon ? { light: logo.icon.file, dark: logo["icon-dark"]?.file } : undefined,
    };
  });

  entries.sort((a, b) => a.name.localeCompare(b.name));
  cache = entries;
  return entries;
}

export function getDesignMdBySlug(slug: string): DesignMd | undefined {
  return getAllDesignMds().find((d) => d.slug === slug);
}

export function getDesignMdRaw(slug: string): string {
  return fs.readFileSync(path.join(DESIGN_MD_DIR, slug, "DESIGN.md"), "utf8");
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getDesignMdCategories(): { slug: string; label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const entry of getAllDesignMds()) counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  return [...counts]
    .map(([label, count]) => ({ slug: categorySlug(label), label, count }))
    .sort((a, b) => a.label.localeCompare(b.label));
}
