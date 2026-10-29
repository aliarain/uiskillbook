"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardPanel, CardTitle } from "@/siteplane/components/card";
import { CopyButton } from "@/siteplane/components/copy-button";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/siteplane/components/tabs";
import { InlineCode } from "./inline-code";

export type InstallTarget = { agent: string; label: string; prompt: string };

function PromptPanel({ target }: { target: InstallTarget }) {
  return (
    <>
      <p className="rounded-control bg-muted p-3 text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]">
        <InlineCode text={target.prompt} />
      </p>
      <CardFooter className="mt-3 justify-between gap-3 px-0 pb-0">
        <p className="text-[13px] text-muted-foreground">Paste this into {target.label}.</p>
        <CopyButton
          value={target.prompt}
          variant="inverse"
          data-umami-event="copy-install-prompt"
          data-umami-event-agent={target.agent}
        >
          Copy prompt
        </CopyButton>
      </CardFooter>
    </>
  );
}

/** Per-agent install prompts: one tab per agent, each with its own copy button. */
export function InstallPrompt({ targets }: { targets: InstallTarget[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Install</CardTitle>
        <CardDescription>Give your agent this prompt and it fetches the skill itself.</CardDescription>
      </CardHeader>
      <CardPanel>
        {targets.length > 1 ? (
          <Tabs defaultValue={targets[0].agent}>
            <TabsList aria-label="Agent" className="flex-wrap">
              {targets.map((t) => (
                <TabsTab key={t.agent} value={t.agent}>
                  {t.label}
                </TabsTab>
              ))}
            </TabsList>
            {targets.map((t) => (
              <TabsPanel key={t.agent} value={t.agent} className="mt-3">
                <PromptPanel target={t} />
              </TabsPanel>
            ))}
          </Tabs>
        ) : (
          <PromptPanel target={targets[0]} />
        )}
      </CardPanel>
    </Card>
  );
}
