import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What UI Skillbook is and why it exists.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-primary">About</h1>

      <div className="skill-content prose prose-sm mt-8 max-w-none">
        <p>
          UI Skillbook is a curated field guide of reusable UI skills, rules, patterns, and
          agent instructions for building better interfaces. It&apos;s built for developers
          browsing manually, AI coding agents consuming structured skills, and designers
          looking for implementation guidance.
        </p>
        <p>
          The question it answers is: <em>&ldquo;I&apos;m building this UI. What skill should
          my agent know before touching the code?&rdquo;</em> Not: here are five thousand
          random prompts.
        </p>
        <h2>Curation</h2>
        <p>
          Every published skill has a concrete purpose, gives a usable instruction, doesn&apos;t
          duplicate another skill already in the book, preserves attribution, links its source,
          and states its license. Skills that don&apos;t meet that bar don&apos;t get published.
        </p>
        <h2>Open source content</h2>
        <p>
          Skill content is stored as plain markdown with a predictable schema — see any skill&apos;s
          &ldquo;View raw&rdquo; link. GitHub is the source of truth; the site indexes it at build time.
        </p>
        <h2>What&apos;s next</h2>
        <p>
          The website comes first. A CLI and MCP server for pulling skills directly into an
          agent session are planned once the core library and usage patterns prove out.
        </p>
      </div>
    </div>
  );
}
