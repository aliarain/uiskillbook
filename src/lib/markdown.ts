import type { Root } from "hast";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

/** Parses markdown into a hast tree without source positions, small enough to hand to a client component. */
export async function markdownToHast(markdown: string): Promise<Root> {
  const processor = remark().use(remarkGfm).use(remarkRehype);
  const tree = await processor.run(processor.parse(markdown));
  return JSON.parse(JSON.stringify(tree, (key, value) => (key === "position" ? undefined : value)));
}
