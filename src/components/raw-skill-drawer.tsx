"use client";

import { Button } from "@/raptrx-ui/components/button";
import { CopyButton } from "@/raptrx-ui/components/copy-button";
import {
  DetailDrawer,
  DetailDrawerBody,
  DetailDrawerDescription,
  DetailDrawerFooter,
  DetailDrawerHeader,
  DetailDrawerPopup,
  DetailDrawerTitle,
  DetailDrawerTrigger,
} from "@/raptrx-ui/components/detail-drawer";

/** Opens the raw SKILL.md beside the page in a kit DetailDrawer. */
export function RawSkillDrawer({ slug, raw }: { slug: string; raw: string }) {
  return (
    <DetailDrawer>
      <DetailDrawerTrigger render={<Button variant="ghost" size="sm" />}>View raw SKILL.md</DetailDrawerTrigger>
      <DetailDrawerPopup>
        <DetailDrawerHeader>
          <DetailDrawerTitle>SKILL.md</DetailDrawerTitle>
          <DetailDrawerDescription>{slug}</DetailDrawerDescription>
        </DetailDrawerHeader>
        <DetailDrawerBody>
          <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-ink">{raw}</pre>
        </DetailDrawerBody>
        <DetailDrawerFooter>
          <Button variant="outline" render={<a href={`/skills/${slug}/raw`} />}>
            Open raw file
          </Button>
          <CopyButton value={raw}>Copy</CopyButton>
        </DetailDrawerFooter>
      </DetailDrawerPopup>
    </DetailDrawer>
  );
}
