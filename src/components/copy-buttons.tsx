"use client";

import { useState } from "react";

function useClipboard() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(id: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied((current) => (current === id ? null : current)), 1800);
  }

  return { copied, copy };
}

export function CopyButtons({
  raw,
  agentPrompt,
  rawLabel = "Copy skill",
}: {
  raw: string;
  agentPrompt: string;
  rawLabel?: string;
}) {
  const { copied, copy } = useClipboard();

  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => copy("skill", raw)} className="btn btn-secondary">
        {copied === "skill" ? "Copied" : rawLabel}
      </button>
      <button onClick={() => copy("agent", agentPrompt)} className="btn btn-primary">
        {copied === "agent" ? "Copied" : "Copy for agent"}
      </button>
    </div>
  );
}

export function ExternalCopyButton({
  agentPrompt,
}: {
  slug: string;
  agentPrompt: string;
}) {
  const { copied, copy } = useClipboard();

  return (
    <button onClick={() => copy("agent", agentPrompt)} className="btn btn-secondary">
      {copied === "agent" ? "Copied" : "Copy for agent"}
    </button>
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
  const { copied, copy } = useClipboard();

  return (
    <div className="min-w-0">
      <p className="label">{label}</p>
      <div className="mt-1.5 flex h-11 items-center gap-2 rounded-button border border-border bg-background pl-3.5 pr-1">
        <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-primary">{command}</code>
        <button
          onClick={() => copy(event, command)}
          data-umami-event={event}
          aria-label={`Copy ${label}`}
          className="btn btn-secondary h-9 shrink-0 px-3 shadow-none"
        >
          {copied === event ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
