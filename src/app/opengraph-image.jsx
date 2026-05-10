import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Belal Hossain Sunny — CNC Programmer & CAM Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load the hero image from public folder
  const heroImageData = await readFile(
    join(process.cwd(), "public", "heroimage.png")
  );
  const heroBase64 = `data:image/png;base64,${heroImageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundColor: "#080808",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Red glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,52,58,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Red glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,52,58,0.15) 0%, transparent 65%)",
          }}
        />

        {/* Left text section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "80px",
            paddingRight: "40px",
            flex: 1,
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "50px",
              background: "rgba(232,52,58,0.12)",
              border: "1px solid rgba(232,52,58,0.3)",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#E8343A",
              }}
            />
            <span
              style={{
                color: "#E8343A",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Available for Work
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              color: "#999",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            HELLO, I&apos;M
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 0.88,
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "88px",
                letterSpacing: "-0.02em",
              }}
            >
              Belal
            </span>
            <span
              style={{
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "72px",
                letterSpacing: "-0.02em",
              }}
            >
              Hossain
            </span>
            <span
              style={{
                fontWeight: 900,
                fontSize: "88px",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #E8343A 0%, #ff6b6b 100%)",
                WebkitBackgroundClip: "text",
                color: "#E8343A",
              }}
            >
              Sunny
            </span>
          </div>

          {/* Role */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#E8343A",
                borderRadius: "2px",
              }}
            />
            <span
              style={{ color: "#d1d5db", fontSize: "20px", fontWeight: 500 }}
            >
              CNC Programmer & CAM Specialist
            </span>
          </div>

          {/* Location */}
          <div style={{ color: "#6b7280", fontSize: "15px" }}>
            📍 Dhaka, Bangladesh · 🏢 Jo Young Engineering, Korea
          </div>
        </div>

        {/* Right: Hero Image */}
        <div
          style={{
            width: "420px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Subtle glow behind person */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "320px",
              height: "400px",
              background:
                "radial-gradient(ellipse at bottom, rgba(232,52,58,0.2) 0%, transparent 70%)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroBase64}
            alt="Belal Hossain Sunny"
            style={{
              height: "620px",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom",
              position: "relative",
              zIndex: 10,
            }}
          />
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to top, #080808, transparent)",
          }}
        />

        {/* Website URL watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "80px",
            color: "rgba(255,255,255,0.25)",
            fontSize: "14px",
            letterSpacing: "0.1em",
          }}
        >
          belalhossainsunny.com
        </div>
      </div>
    ),
    { ...size }
  );
}
