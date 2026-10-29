import Link from "next/link";
import { CopyCommand } from "./copy-buttons";
import { MCP_URL, SITE_URL } from "@/lib/site";

/** CLI + MCP install block. With a slug, the CLI line fetches that one skill. */
export function AddToAgent({ slug }: { slug?: string }) {
  return (
    <section className="rounded-feature border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-xl font-semibold tracking-[-0.01em] text-primary">Add to your agent</h2>
      <p className="mt-1 text-sm text-secondary">
        {slug
          ? "Point any coding agent at this skill, or connect the whole catalog over MCP."
          : "Point your coding agent at the whole catalog as llms.txt or over MCP."}{" "}
        <Link href="/agents" className="text-accent underline-offset-2 hover:underline">
          Setup guides
        </Link>
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <CopyCommand
          label={slug ? "Raw SKILL.md" : "llms.txt"}
          command={slug ? `${SITE_URL}/skills/${slug}/raw` : `${SITE_URL}/llms.txt`}
          event={slug ? "copy-raw-skill" : "copy-llms-txt"}
        />
        <CopyCommand label="MCP server" command={MCP_URL} event="copy-mcp-url" />
      </div>
    </section>
  );
}
