"use client";

import { Search } from "lucide-react";
import { Button } from "@/siteplane/components/button";
import { Kbd, KbdGroup } from "@/siteplane/components/kbd";
import { useCommandPalette } from "./command-palette-provider";

export function SearchTrigger() {
  const { setOpen } = useCommandPalette();
  return (
    <Button
      variant="ghost"
      size="md"
      onClick={() => setOpen(true)}
      aria-label="Search the Skillbook"
      aria-keyshortcuts="Meta+K"
    >
      <Search aria-hidden />
      <KbdGroup className="hidden sm:inline-flex">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
  );
}
