"use client";

import { CopyButton } from "@/raptrx-ui/components/copy-button";
import { Card, CardHeader, CardPanel, CardTitle } from "@/raptrx-ui/components/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/raptrx-ui/components/tabs";
import { InlineCode } from "./inline-code";

export type InstallTarget = { agent: string; label: string; prompt: string };

function PromptPanel({ target }: { target: InstallTarget }) {
  return (
    <>
      <p className="rounded-button border border-line bg-canvas p-3 text-sm leading-relaxed text-ink [overflow-wrap:anywhere]">
        <InlineCode text={target.prompt} />
      </p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-[13px] text-ink-3">Paste this into {target.label}.</p>
        <CopyButton
          value={target.prompt}
          variant="outline"
          size="sm"
          data-umami-event="copy-install-prompt"
          data-umami-event-agent={target.agent}
        >
          Copy prompt
        </CopyButton>
      </div>
    </>
  );
}

/** Per-agent install prompts on kit Tabs inside a Card. */
export function InstallPrompt({ targets }: { targets: InstallTarget[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Install</CardTitle>
      </CardHeader>
      <CardPanel>
        {targets.length > 1 ? (
          <Tabs defaultValue={targets[0].agent}>
            <TabsList aria-label="Agent">
              {targets.map((t) => (
                <TabsTab key={t.agent} value={t.agent} className="text-ink-2 aria-selected:text-ink">
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
