"use client";

import { CopyButton } from "@/siteplane/components/copy-button";

export function CopyCodeBlock({ code }: { code: string }) {
  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-card border border-line bg-panel py-3 pl-4 pr-14 font-mono text-[13px] text-ink">
        <code>{code}</code>
      </pre>
      <CopyButton value={code} variant="ghost" className="absolute right-1.5 top-1.5" />
    </div>
  );
}
