import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "./_lib/site";

export const alt = "Pengu, the co-parenting app: custody calendar, shared expenses, handover notes and memories";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori takes no CSS variables, so the palette is the globals.css tokens as hex.
export default async function Image() {
  const icon = await readFile(join(process.cwd(), "public/pengu-icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#F2F2F5",
          backgroundImage: "radial-gradient(circle at 100% 100%, #FFECE7 0%, #F2F2F5 55%)",
          color: "#0E0E12",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={72} height={72} style={{ borderRadius: 18 }} alt="" />
          <span style={{ fontSize: 40, fontWeight: 700 }}>{SITE.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>
            Two homes.
          </span>
          <span style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, color: "#6B6B76" }}>
            One calm nest.
          </span>
          <span style={{ marginTop: 28, fontSize: 32, color: "#2A2A31", maxWidth: 900 }}>
            The co-parenting app for custody calendars, shared expenses, handover notes and
            family memories.
          </span>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {[
            ["Custody calendar", "#1FAA77"],
            ["Shared expenses", "#F5A623"],
            ["Handover notes", "#7B61FF"],
            ["Memories", "#FF5A3C"],
          ].map(([label, dot]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 20px",
                borderRadius: 999,
                background: "#FFFFFF",
                fontSize: 24,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 999, background: dot }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
