import { ImageResponse } from "next/og";
import { LOGO_PATH } from "@/lib/brand";

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared 1200×630 card used by every generated Open Graph image. */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f7f2",
          color: "#181817",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#92928a" }}>
          {eyebrow.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: title.length > 40 ? 64 : 80, fontWeight: 600, lineHeight: 1.05 }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", fontSize: 30, color: "#686863", lineHeight: 1.35 }}>
              {subtitle.length > 160 ? `${subtitle.slice(0, 157)}…` : subtitle}
            </div>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 14, fontWeight: 600 }}>
            <svg viewBox="0 0 20 20" width="34" height="34">
              <path fillRule="evenodd" fill="#181817" d={LOGO_PATH} />
            </svg>
            UI Skillbook
          </span>
          <span style={{ color: "#315ce7" }}>www.uiskillbook.com</span>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
