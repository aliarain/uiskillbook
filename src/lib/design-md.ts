import fs from "fs";
import path from "path";
import matter from "gray-matter";
import logoData from "../../content/design-md-logos.json";
import importIndex from "../../content/design-md-imports/index.json";
import tokenData from "../../content/design-md-tokens.json";

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

export type DesignMdColor = { hex: string; name?: string };

export type DesignMd = DesignMdFrontmatter & {
  slug: string;
  /** Colors and font families the file declares, from scripts/design-md-tokens.mjs. */
  colors: DesignMdColor[];
  fonts: string[];
  /** "original" entries are written by UI Skillbook; "community" ones are imported, credited and licensed. */
  origin: "original" | "community";
  language: string;
  source?: DesignMdSource;
  /** Full-color Logoforge icon (CC0), from scripts/fetch-design-md-logos.mjs. */
  logo?: { light: string; dark?: string };
};

type TokenRecord = Record<string, { colors: DesignMdColor[]; fonts: string[] }>;
type LogoRecord = Record<string, { icon?: { file: string }; "icon-dark"?: { file: string } }>;
type ImportEntry = { slug: string; name: string; description: string; color: string; category: string; language: string; source: DesignMdSource };

export const ORIGINALS_GROUP = "UI Skillbook";

let cache: DesignMd[] | null = null;

function tokensFor(slug: string) {
  const t = (tokenData as TokenRecord)[slug];
  return { colors: t?.colors ?? [], fonts: t?.fonts ?? [] };
}

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
      ...tokensFor(slug),
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
    ...tokensFor(e.slug),
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

/** URL segment for a font family. Keeps non-Latin letters, so Japanese families get their own pages. */
export function fontSlug(font: string): string {
  return font
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");
}

/** A font gets its own page once this many files use it. */
export const FONT_HUB_MIN = 3;

let fontCache: { slug: string; name: string; entries: DesignMd[] }[] | null = null;

/** Font families used by at least FONT_HUB_MIN files, most used first. */
export function getDesignMdFonts() {
  if (fontCache) return fontCache;
  const bySlug = new Map<string, { names: Map<string, number>; entries: DesignMd[] }>();
  for (const entry of getAllDesignMds()) {
    for (const font of new Set(entry.fonts)) {
      const slug = fontSlug(font);
      if (!slug) continue;
      const hub = bySlug.get(slug) ?? { names: new Map<string, number>(), entries: [] as DesignMd[] };
      hub.names.set(font, (hub.names.get(font) ?? 0) + 1);
      if (!hub.entries.includes(entry)) hub.entries.push(entry);
      bySlug.set(slug, hub);
    }
  }
  fontCache = [...bySlug]
    .filter(([, hub]) => hub.entries.length >= FONT_HUB_MIN)
    .map(([slug, hub]) => ({
      slug,
      // The spelling most files use.
      name: [...hub.names].sort((a, b) => b[1] - a[1])[0][0],
      entries: hub.entries,
    }))
    .sort((a, b) => b.entries.length - a.entries.length || a.name.localeCompare(b.name));
  return fontCache;
}

export function getDesignMdFont(slug: string) {
  return getDesignMdFonts().find((f) => f.slug === slug);
}

export const COLOR_FAMILIES = [
  { slug: "red", label: "Red", swatch: "#e5484d" },
  { slug: "orange", label: "Orange", swatch: "#f76b15" },
  { slug: "yellow", label: "Yellow", swatch: "#ffc53d" },
  { slug: "green", label: "Green", swatch: "#30a46c" },
  { slug: "teal", label: "Teal", swatch: "#12a594" },
  { slug: "blue", label: "Blue", swatch: "#0090ff" },
  { slug: "purple", label: "Purple", swatch: "#8e4ec6" },
  { slug: "pink", label: "Pink", swatch: "#d6409f" },
  { slug: "neutral", label: "Black and white", swatch: "#6f6f6f" },
] as const;

export type ColorFamily = (typeof COLOR_FAMILIES)[number]["slug"];

function hsl(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
  }
  return { h: (h * 60 + 360) % 360, s, l };
}

/** The family of a brand's main color, by hue. */
export function colorFamily(hex: string): ColorFamily {
  const { h, s, l } = hsl(hex);
  if (s < 0.2 || l < 0.1 || l > 0.94) return "neutral";
  if (h < 15 || h >= 345) return "red";
  if (h < 40) return "orange";
  if (h < 65) return "yellow";
  if (h < 165) return "green";
  if (h < 195) return "teal";
  if (h < 255) return "blue";
  if (h < 290) return "purple";
  return "pink";
}

export function getDesignMdsByColor(family: string): DesignMd[] {
  return getAllDesignMds().filter((e) => colorFamily(e.color) === family);
}

/** Readable text color on a swatch. */
export function inkOn(hex: string) {
  return hsl(hex).l > 0.6 ? "#0a0a0a" : "#ffffff";
}

/**
 * Six files to read next: another file for the same brand first, then ones
 * sharing a font family, color family, group and language, closest brand hue first.
 */
export function getRelatedDesignMds(entry: DesignMd, count = 6): DesignMd[] {
  const fonts = new Set(entry.fonts.map(fontSlug));
  const family = colorFamily(entry.color);
  const group = designMdGroup(entry);
  const hue = hsl(entry.color).h;
  const stem = (d: DesignMd) => d.slug.split("-")[0];
  const hueGap = (other: DesignMd) => {
    const d = Math.abs(hsl(other.color).h - hue);
    return Math.min(d, 360 - d);
  };
  return getAllDesignMds()
    .filter((other) => other.slug !== entry.slug)
    .map((other) => ({
      other,
      score:
        (stem(entry).length > 2 && stem(other) === stem(entry) ? 6 : 0) +
        (other.fonts.some((f) => fonts.has(fontSlug(f))) ? 2 : 0) +
        (colorFamily(other.color) === family ? 2 : 0) +
        (designMdGroup(other) === group ? 1 : 0) +
        (other.language === entry.language ? 1 : 0),
      gap: hueGap(other),
    }))
    .sort((a, b) => b.score - a.score || a.gap - b.gap || a.other.name.localeCompare(b.other.name))
    .slice(0, count)
    .map(({ other }) => other);
}
