"use client";

import { Search } from "lucide-react";
import { Button } from "@/siteplane/components/button";
import { Kbd, KbdGroup } from "@/siteplane/components/kbd";
import { useCommandPalette } from "./command-palette-provider";

function Shortcut({ className = "" }: { className?: string }) {
  return (
    <KbdGroup className={className}>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  );
}

export function SearchTrigger({ className = "" }: { className?: string }) {
  const { setOpen } = useCommandPalette();
  return (
    <Button
      onClick={() => setOpen(true)}
      variant="ghost"
      aria-label="Search the Skillbook"
      aria-keyshortcuts="Meta+K"
      className={className}
    >
      <Search aria-hidden />
      <Shortcut className="hidden sm:inline-flex" />
    </Button>
  );
}

export function SearchBar({ className = "" }: { className?: string }) {
  const { setOpen } = useCommandPalette();
  return (
    <Button
      onClick={() => setOpen(true)}
      variant="outline"
      size="lg"
      align="between"
      aria-keyshortcuts="Meta+K"
      className={`font-normal text-ink-3 ${className}`}
    >
      <span className="flex items-center gap-2">
        <Search aria-hidden />
        Search skills, topics, authors…
      </span>
      <Shortcut />
    </Button>
  );
}
