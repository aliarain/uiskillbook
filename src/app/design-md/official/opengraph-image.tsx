import { getOfficialDesignMds } from "@/lib/design-md";
import { OG_SIZE } from "@/lib/og-image";
import { renderHubOgImage } from "@/lib/design-md-og";

export const alt = "Official DESIGN.md files on UI Skillbook";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderHubOgImage({
    eyebrow: "Design.md · Official",
    title: "Official DESIGN.md files, published by the brands",
    entries: getOfficialDesignMds(),
  });
}
