"use client";

import { Tooltip, TooltipPopup, TooltipTrigger } from "@/siteplane/components/tooltip";

/** Wraps an icon-only control so its accessible name also shows as a kit Tooltip. */
export function IconTooltip({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <Tooltip>
      <TooltipTrigger render={children} />
      <TooltipPopup>{label}</TooltipPopup>
    </Tooltip>
  );
}
