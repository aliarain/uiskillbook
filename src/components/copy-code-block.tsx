"use client";

import { useState } from "react";

export function CopyCodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="group relative">
      <pre className="overflow-x-auto rounded-card border border-border bg-surface py-3 pl-4 pr-20 font-mono text-[13px] text-primary">
        <code>{code}</code>
      </pre>
      <button
        onClick={copy}
        aria-label="Copy to clipboard"
        className="btn btn-secondary absolute right-1.5 top-1.5 h-8 px-2.5 text-xs shadow-none"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
