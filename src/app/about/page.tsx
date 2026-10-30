import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { Code } from "@/raptrx-ui/components/code";
import { Typeset, TypesetHeading, TypesetLink, TypesetParagraph } from "@/raptrx-ui/components/typeset";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "What UI Skillbook is and why it exists.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-12">
      <h1 className="display text-4xl">About</h1>

      <Typeset density="document" className="mt-8">
        <TypesetParagraph>
          UI Skillbook collects UI skills and agent instructions for
          building interfaces. Developers browse it, coding agents read it as structured skills, and designers
          use it to check how a pattern gets built.
        </TypesetParagraph>
        <TypesetParagraph>
          It answers one question: <em>&ldquo;I&apos;m building this UI. What should my agent know before it
          touches the code?&rdquo;</em>
        </TypesetParagraph>
        <TypesetHeading level={2}>Curation</TypesetHeading>
        <TypesetParagraph>
          Every published skill has a concrete purpose, gives a usable instruction, doesn&apos;t duplicate another
          skill already in the book, preserves attribution, links its source, and states its license. Skills that
          don&apos;t meet that bar don&apos;t get published.
        </TypesetParagraph>
        <TypesetHeading level={2}>Design system</TypesetHeading>
        <TypesetParagraph>
          The site is built on <TypesetLink href="https://ui.siteplane.io">Siteplane UI</TypesetLink>, and the
          catalog carries <TypesetLink href="/collections/siteplane-ui">an entry for every Siteplane UI
          component</TypesetLink>: what it is for, when to pick it over its neighbours, and how to install it.
        </TypesetParagraph>
        <TypesetHeading level={2}>Open source content</TypesetHeading>
        <TypesetParagraph>
          Every skill is a plain markdown file with a fixed schema. Open any skill&apos;s &ldquo;View raw&rdquo;
          link to see one. The files live on GitHub, and the site reads them at build time.
        </TypesetParagraph>
        <TypesetHeading level={2} id="cli">
          CLI and MCP
        </TypesetHeading>
        <TypesetParagraph>
          <Code>npx uiskillbook</Code> reads the same catalog this site serves: <Code>start</Code>,{" "}
          <Code>categories</Code>, <Code>list</Code>, <Code>get &lt;slug&gt;</Code> and <Code>siteplane</Code>. The
          MCP server at <TypesetLink href="/mcp">uiskillbook.com/mcp</TypesetLink> exposes the same catalog as{" "}
          <Code>list_skills</Code>, <Code>get_skill</Code> and <Code>list_siteplane_components</Code> tools for agents
          that speak Model Context Protocol directly. See any{" "}
          <TypesetLink href="/agents">agent page</TypesetLink> for setup.
        </TypesetParagraph>
      </Typeset>
    </div>
  );
}
