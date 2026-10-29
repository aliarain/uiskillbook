import { getAllSkills } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const FEED_SIZE = 50;

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (c) => `&${{ "<": "lt", ">": "gt", "&": "amp", "'": "apos", '"': "quot" }[c]};`);
}

export function GET() {
  const entries = [
    ...getAllSkills().map((s) => ({
      title: s.title,
      description: s.description,
      url: `${SITE_URL}/skills/${s.slug}`,
      date: s.updated_at,
      category: "Skill",
    })),
    ...getAllChapters().map((c) => ({
      title: c.title,
      description: c.description,
      url: `${SITE_URL}/chapters/${c.slug}`,
      date: c.updated_at,
      category: "Playbook",
    })),
  ]
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)))
    .slice(0, FEED_SIZE);

  const items = entries
    .map(
      (e) => `    <item>
      <title>${escapeXml(e.title)}</title>
      <link>${e.url}</link>
      <guid isPermaLink="true">${e.url}</guid>
      <description>${escapeXml(e.description)}</description>
      <category>${e.category}</category>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(entries[0]?.date ?? Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
