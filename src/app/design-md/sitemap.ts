import type { MetadataRoute } from "next";
import { COLOR_FAMILIES, getAllDesignMds, getDesignMdCategories, getDesignMdFonts } from "@/lib/design-md";
import { SITE_URL } from "@/lib/site";

/** Every Design.md file plus its group, font and color pages. Served at /design-md/sitemap.xml. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getAllDesignMds();
  const newest = (dates: string[]) => new Date(dates.reduce((max, d) => (d > max ? d : max), "1970-01-01"));
  const lastModified = newest(entries.map((e) => e.updated_at));

  const hubs = [
    "/design-md/fonts",
    ...getDesignMdCategories().map((c) => `/design-md/group/${c.slug}`),
    ...COLOR_FAMILIES.map((c) => `/design-md/color/${c.slug}`),
    ...getDesignMdFonts().map((f) => `/design-md/font/${encodeURIComponent(f.slug)}`),
  ].map((path) => ({ url: `${SITE_URL}${path}`, lastModified }));

  const files = entries.map((e) => ({
    url: `${SITE_URL}/design-md/${e.slug}`,
    lastModified: new Date(e.updated_at),
  }));

  return [...hubs, ...files];
}
