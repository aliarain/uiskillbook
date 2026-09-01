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
