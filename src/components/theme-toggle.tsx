"use client";

import { useTheme } from "next-themes";
import { SunMoonMorphToggle } from "@/siteplane/components/theme-toggles";
import { useMounted } from "./theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <SunMoonMorphToggle
      aria-label="Dark mode"
      disabled={!mounted}
      pressed={mounted && resolvedTheme === "dark"}
      onPressedChange={(dark) => setTheme(dark ? "dark" : "light")}
    />
  );
}
