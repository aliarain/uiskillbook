import Link from "next/link";
import { Card, CardDescription, CardHeader, CardPanel, CardTitle } from "@/siteplane/components/card";
import { CodeBlock } from "@/siteplane/components/code";
import { MCP_URL, SITE_URL } from "@/lib/site";

/** CLI + MCP install block. With a slug, the first line fetches that one skill. */
export function AddToAgent({ slug }: { slug?: string }) {
  return (
    <Card variant="subtle">
      <CardHeader>
        <CardTitle className="text-xl">Add to your agent</CardTitle>
        <CardDescription>
          {slug
            ? "Point any coding agent at this skill, or connect the whole catalog over MCP."
            : "Point your coding agent at the whole catalog as llms.txt or over MCP."}{" "}
          <Link href="/agents" className="text-foreground underline underline-offset-2">
            Setup guides
          </Link>
        </CardDescription>
      </CardHeader>
      <CardPanel className="grid gap-4 md:grid-cols-2">
        <CodeBlock
          copyable
          title={slug ? "Raw SKILL.md" : "llms.txt"}
          value={slug ? `${SITE_URL}/skills/${slug}/raw` : `${SITE_URL}/llms.txt`}
        />
        <CodeBlock copyable title="MCP server" value={MCP_URL} />
      </CardPanel>
    </Card>
  );
}
