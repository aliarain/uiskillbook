"use client";

import { CopyButton } from "@/raptrx-ui/components/copy-button";

export function CopyButtons({
  raw,
  agentPrompt,
  rawLabel = "Copy skill",
}: {
  raw: string;
  agentPrompt: string;
  rawLabel?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <CopyButton value={raw} variant="outline" data-umami-event="copy-raw">
        {rawLabel}
      </CopyButton>
      <CopyButton value={agentPrompt} data-umami-event="copy-for-agent">
        Copy for agent
      </CopyButton>
    </div>
  );
}

export function ExternalCopyButton({ agentPrompt }: { slug: string; agentPrompt: string }) {
  return (
    <CopyButton value={agentPrompt} variant="outline" data-umami-event="copy-for-agent">
      Copy for agent
    </CopyButton>
  );
}

/** One-line command with an always-visible copy button. `event` is sent to Umami on copy. */
export function CopyCommand({
  label,
  command,
  event,
}: {
  label: string;
  command: string;
  event: string;
}) {
  return (
    <div className="min-w-0">
      <p className="label">{label}</p>
      <div className="mt-1.5 flex h-11 items-center gap-2 rounded-button border border-line bg-canvas pl-3.5 pr-1">
        <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-ink">{command}</code>
        <CopyButton value={command} aria-label={`Copy ${label}`} data-umami-event={event} variant="ghost" />
      </div>
    </div>
  );
}
