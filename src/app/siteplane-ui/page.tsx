import Link from "next/link";
import type { Metadata } from "next";
import { getSiteplaneSkills } from "@/lib/skills";
import { groupAnchor } from "@/lib/siteplane";
import { pageMetadata } from "@/lib/site";
import { SiteplaneNav } from "@/components/siteplane-nav";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/raptrx-ui/components/accordion";
import { Badge } from "@/raptrx-ui/components/badge";
import { Button } from "@/raptrx-ui/components/button";
import { Card, CardDescription, CardHeader, CardPanel, CardTitle } from "@/raptrx-ui/components/card";
import { CodeBlock } from "@/raptrx-ui/components/code";

export const metadata: Metadata = pageMetadata({
  title: "Siteplane UI",
  description: "Every Siteplane UI component, with when to pick it over its neighbours, how to install it and the rules that keep it right.",
  path: "/siteplane-ui",
});

const COMPONENTS_JSON = `"registries": {
  "@siteplane": "https://ui.siteplane.io/registry/{name}.json"
}`;

const GLOBALS_CSS = `@import "../raptrx-ui/system/styles/base.css";
@source "..";`;

export default function SiteplaneUIPage() {
  const skills = getSiteplaneSkills();
  const groups = [...new Set(skills.map((s) => s.siteplane.group))].map((group) => ({
    group,
    anchor: groupAnchor(group),
    skills: skills.filter((s) => s.siteplane.group === group),
  }));
  const version = skills[0]?.version;

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="accent">Design system</Badge>
        {version && <Badge variant="outline">v{version}</Badge>}
      </div>
      <h1 className="display mt-3 text-4xl">Siteplane UI</h1>
      <p className="mt-3 max-w-2xl text-ink-2 text-pretty">
        UI Skillbook is built on Siteplane UI, a React kit that installs as editable source through the shadcn CLI.
        Here is every component, {skills.length} in all, with when to pick it over its neighbours, the install
        command and the rules that keep it right. Each one is a skill your agent can read.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button variant="inverse" render={<a href="https://ui.siteplane.io/docs/installation/" target="_blank" rel="noreferrer" />}>
          Installation guide
        </Button>
        <Button variant="outline" render={<Link href="/collections/siteplane-ui" />}>
          As a collection
        </Button>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <SiteplaneNav groups={groups.map((g) => ({ group: g.group, anchor: g.anchor, count: g.skills.length }))} />
        </aside>

        <div className="min-w-0 space-y-14">
          <section aria-labelledby="setup">
            <h2 id="setup" className="text-xl font-semibold tracking-[-0.01em] text-ink">
              Set up once
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <CodeBlock copyable title="components.json" language="json" value={COMPONENTS_JSON} />
              <CodeBlock copyable title="src/app/globals.css" language="css" value={GLOBALS_CSS} />
              <CodeBlock copyable title="Add a component" value="npx shadcn@4.18.0 add @siteplane/button" />
              <CodeBlock copyable title="Siteplane's agent skill" value="npx skills@1.5.25 add https://ui.siteplane.io -a claude-code" />
            </div>
          </section>

          {groups.map((g) => (
            <section key={g.anchor} id={g.anchor} aria-labelledby={`${g.anchor}-title`} className="scroll-mt-24">
              <div className="flex items-baseline justify-between gap-4">
                <h2 id={`${g.anchor}-title`} className="text-xl font-semibold tracking-[-0.01em] text-ink">
                  {g.group}
                </h2>
                <span className="text-sm text-ink-2 tabular-nums">{g.skills.length}</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {g.skills.map((skill) => (
                  <Card key={skill.slug} render={<Link href={`/skills/${skill.slug}`} />} density="compact">
                    <CardHeader>
                      <CardTitle>{skill.siteplane.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{skill.description}</CardDescription>
                    </CardHeader>
                    <CardPanel className="mt-auto">
                      <code className="block truncate font-mono text-xs text-ink-2">
                        @siteplane/{skill.siteplane.install.join(" @siteplane/")}
                      </code>
                    </CardPanel>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          <section aria-labelledby="about-entries">
            <h2 id="about-entries" className="text-xl font-semibold tracking-[-0.01em] text-ink">
              About these entries
            </h2>
            <Accordion className="mt-4">
              <AccordionItem value="how">
                <AccordionTrigger>How are they made?</AccordionTrigger>
                <AccordionPanel>
                  A script reads Siteplane&apos;s registry and docs index, and pairs each component with guidance we
                  wrote ourselves. When Siteplane adds a component, the script stops and lists the entry to write.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="docs">
                <AccordionTrigger>Where are the props and examples?</AccordionTrigger>
                <AccordionPanel>
                  On Siteplane&apos;s own docs, linked from every entry. We point to them instead of copying them, and the
                  installed source under src/siteplane is always the final word on an API.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="agents">
                <AccordionTrigger>How does my agent get them?</AccordionTrigger>
                <AccordionPanel>
                  Through the same channels as every other skill: the MCP tool list_siteplane_components, the JSON API
                  at /api/siteplane, the registry and the CLI command uiskillbook siteplane.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}
