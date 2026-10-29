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
}: {
  raw: string;
  agentPrompt: string;
}) {
  const { copied, copy } = useClipboard();

  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => copy("skill", raw)} className="btn btn-secondary">
        {copied === "skill" ? "Copied" : "Copy skill"}
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
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</p>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background py-1.5 pl-4 pr-1.5">
        <code className="min-w-0 flex-1 truncate font-mono text-sm text-primary">{command}</code>
        <button
          onClick={() => copy(event, command)}
          data-umami-event={event}
          className="h-9 shrink-0 rounded-lg border border-border px-3 font-mono text-xs text-secondary transition-colors hover:text-primary"
        >
          {copied === event ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
