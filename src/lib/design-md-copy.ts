import type { DesignMd } from "@/lib/design-md";

/** "Linear, Vercel and Raycast": the first few names, English-language entries first. */
export function listNames(entries: DesignMd[], count = 3): string {
  const names = [...entries]
    .sort((a, b) => Number(a.language !== "en") - Number(b.language !== "en"))
    .slice(0, count)
    .map((e) => e.name);
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
}

/** Up to `max` characters, cut at a word boundary. */
export function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}
