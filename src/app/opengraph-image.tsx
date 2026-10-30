import { OG_SIZE, renderOgImage } from "@/lib/og-image";
import { SITE_DESCRIPTION } from "@/lib/site";

export const alt = "UI Skillbook: the field guide for building interfaces with AI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Field guide",
    title: "The field guide for building interfaces with AI.",
    subtitle: SITE_DESCRIPTION,
  });
}
