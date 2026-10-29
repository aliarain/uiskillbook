"use client";

import { CopyButton } from "@/siteplane/components/copy-button";

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
      <CopyButton value={raw} variant="outline">
        {rawLabel}
      </CopyButton>
      <CopyButton value={agentPrompt} variant="inverse" data-umami-event="copy-for-agent">
        Copy for agent
      </CopyButton>
    </div>
  );
}

export function ExternalCopyButton({ agentPrompt }: { agentPrompt: string }) {
  return (
    <CopyButton value={agentPrompt} variant="outline" data-umami-event="copy-for-agent">
      Copy for agent
    </CopyButton>
  );
}
