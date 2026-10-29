import { ImageResponse } from "next/og";
import { LOGO_PATH } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Full-bleed black tile with the white mark; iOS applies its own corner mask.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0a0a0a" }}>
        <svg viewBox="-6 -6 32 32" width="180" height="180">
          <path fillRule="evenodd" fill="#fafafa" d={LOGO_PATH} />
        </svg>
      </div>
    ),
    size
  );
}
