import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/raptrx-ui/components/button";
import { getAllSkills, getAuthors, installTargets } from "@/lib/skills";
import { getAllDesignMds } from "@/lib/design-md";
import { InstallPrompt } from "../install-prompt";

function Counts() {
  const skills = getAllSkills();
  return (
    <p className="text-sm text-ink-3 tabular-nums">
      {skills.length} skills from {getAuthors().length} authors, {getAllDesignMds().length} Design.md files
    </p>
  );
}

/** C: headline and actions beside a real skill's install card, so the first screen shows the product. */
export function HeroPreview() {
  const skill = getAllSkills().find((s) => s.slug === "vercel-labs-web-design-guidelines") ?? getAllSkills()[0];
  return (
    <section className="grid items-center gap-10 pt-14 pb-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <h1 className="display text-4xl sm:text-5xl">Better interfaces, one skill at a time.</h1>
        <p className="mt-4 max-w-md text-lg text-ink-2 text-pretty">
          Pick a skill, paste one prompt, and your agent follows it. Works with Claude Code, Cursor, Codex and more.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <Button size="lg" variant="inverse" render={<Link href="/skills" />}>
            Browse skills <ArrowRight aria-hidden />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/design-md" />}>
            Design.md files
          </Button>
        </div>
        <div className="mt-6">
          <Counts />
        </div>
      </div>
      <div className="min-w-0">
        <p className="mb-2 text-sm text-ink-3">
          <Link href={`/skills/${skill.slug}`} className="link rounded-input">
            {skill.title}
          </Link>{" "}
          by {skill.author.name}
        </p>
        <InstallPrompt targets={installTargets(skill)} />
      </div>
    </section>
  );
}
