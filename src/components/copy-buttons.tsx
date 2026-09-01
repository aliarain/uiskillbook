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
      <button
        onClick={() => copy("skill", raw)}
        className="rounded-md border border-border px-3.5 py-2 text-sm text-secondary transition-colors hover:border-accent/40 hover:text-primary"
      >
        {copied === "skill" ? "Copied" : "Copy skill"}
      </button>
      <button
        onClick={() => copy("agent", agentPrompt)}
        className="rounded-md border border-accent bg-accent-subtle px-3.5 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
      >
        {copied === "agent" ? "Copied" : "Copy for agent"}
      </button>
    </div>
  );
}
