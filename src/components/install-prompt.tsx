"use client";

import { useState } from "react";
import { InlineCode } from "./inline-code";

export type InstallTarget = { agent: string; label: string; prompt: string };

/** Per-agent install prompts with a tab strip and one copy button. */
export function InstallPrompt({ targets }: { targets: InstallTarget[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const target = targets[active];

  async function copy() {
    await navigator.clipboard.writeText(target.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="rounded-feature border border-border bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-primary">Install</h2>
        {targets.length > 1 && (
          <div role="tablist" aria-label="Agent" className="flex flex-wrap gap-1">
            {targets.map((t, i) => (
              <button
                key={t.agent}
                role="tab"
                aria-selected={i === active}
                onClick={() => {
                  setActive(i);
                  setCopied(false);
                }}
                className="pill border-transparent px-2.5 py-1 text-[13px]"
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="mt-3 rounded-button border border-border bg-background p-3 text-sm leading-relaxed text-primary [overflow-wrap:anywhere]">
        <InlineCode text={target.prompt} />
      </p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-[13px] text-muted">Paste this into {target.label}.</p>
        <button
          onClick={copy}
          data-umami-event="copy-install-prompt"
          data-umami-event-agent={target.agent}
          className="btn btn-primary"
        >
          {copied ? "Copied" : "Copy prompt"}
        </button>
      </div>
    </div>
  );
}
