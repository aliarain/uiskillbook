import Link from "next/link";
import { CopyCommand } from "./copy-buttons";
import { MCP_URL } from "@/lib/site";

/** CLI + MCP install block. With a slug, the CLI line fetches that one skill. */
export function AddToAgent({ slug }: { slug?: string }) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-primary">Add to your agent</h2>
      <p className="mt-1 text-sm text-secondary">
        {slug
          ? "Pipe this skill into any coding agent, or connect the whole catalog over MCP."
          : "Give your coding agent the whole catalog from the terminal or over MCP."}{" "}
        <Link href="/agents" className="text-accent hover:underline">
          Setup guides
        </Link>
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <CopyCommand
          label="CLI"
          command={slug ? `npx uiskillbook get ${slug}` : "npx uiskillbook start"}
          event={slug ? "copy-cli-skill" : "copy-cli-start"}
        />
        <CopyCommand label="MCP server" command={MCP_URL} event="copy-mcp-url" />
      </div>
    </section>
  );
}
