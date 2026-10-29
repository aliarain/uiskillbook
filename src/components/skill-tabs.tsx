"use client";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@/siteplane/components/tabs";

export type SkillTab = { value: string; label: string; content: React.ReactNode };

/** Kit Tabs over server-rendered skill grids, so every panel is in the HTML. */
export function SkillTabs({ tabs }: { tabs: SkillTab[] }) {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList aria-label="Skills">
        {tabs.map((t) => (
          <TabsTab key={t.value} value={t.value} className="text-ink-2 aria-selected:text-ink">
            {t.label}
          </TabsTab>
        ))}
      </TabsList>
      {tabs.map((t) => (
        <TabsPanel key={t.value} value={t.value} className="mt-5" keepMounted>
          {t.content}
        </TabsPanel>
      ))}
    </Tabs>
  );
}
