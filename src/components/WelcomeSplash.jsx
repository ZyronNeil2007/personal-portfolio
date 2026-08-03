import React, { useState, useEffect } from "react";
import PixelIcon from "./PixelIcon";

const SOCIAL_ACCOUNTS = [
  {
    label: "@ZyronNeil2007",
    platform: "GitHub",
    icon: "github",
    href: "https://github.com/ZyronNeil2007",
    color: "#e6edf3",
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.10)",
  },
  {
    label: "@zyronnei10",
    platform: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/zyronnei10/",
    color: "#e1306c",
    bg: "rgba(225,48,108,0.08)",
    border: "rgba(225,48,108,0.20)",
  },
  {
    label: "@zyron_neil",
    platform: "TikTok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@zyron_neil",
    color: "#69c9d0",
    bg: "rgba(105,201,208,0.08)",
    border: "rgba(105,201,208,0.20)",
  },
  {
    label: "Zyron Neil",
    platform: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/share/18ZFsaeo4S/",
    color: "#1877f2",
    bg: "rgba(24,119,242,0.08)",
    border: "rgba(24,119,242,0.20)",
  },
  {
    label: "zyronneilbautista10@gmail.com",
    platform: "Email",
    icon: "mail",
    href: "mailto:zyronneilbautista10@gmail.com",
    color: "#C3D809",
    bg: "rgba(195,216,9,0.08)",
    border: "rgba(195,216,9,0.20)",
  },
];

export default function WelcomeSplash({ onEnter }) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Also allow scroll to dismiss
  useEffect(() => {
    const handleWheel = () => {
      if (visible && !leaving) handleEnter();
    };
    window.addEventListener("wheel", handleWheel, { once: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [visible, leaving]);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => {
      onEnter && onEnter();
    }, 700);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at 60% 30%, rgba(195,216,9,0.10) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(26,240,220,0.07) 0%, transparent 60%), #0a0b09",
        opacity: leaving ? 0 : visible ? 1 : 0,
        transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
        overflowX: "hidden",
        padding: "2rem 1.5rem",
      }}
    >
      {/* Ambient top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "40vh",
          background:
            "radial-gradient(ellipse, rgba(195,216,9,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Social Account Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "3.5rem",
          maxWidth: "700px",
          width: "100%",
          position: "relative",
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
        }}
      >
        {SOCIAL_ACCOUNTS.map((acc) => (
          <a
            key={acc.platform}
            href={acc.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title={`${acc.platform}: ${acc.label}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "999px",
              background: acc.bg,
              border: `1px solid ${acc.border}`,
              backdropFilter: "blur(10px)",
              color: acc.color,
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
              e.currentTarget.style.boxShadow = `0 4px 24px ${acc.border}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <PixelIcon name={acc.icon} style={{ fontSize: "1rem" }} />
            <span>{acc.label}</span>
          </a>
        ))}
      </div>

      {/* Welcome Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s 0.35s ease, transform 0.9s 0.35s ease",
        }}
      >
        <p
          style={{
            fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C3D809",
            marginBottom: "1rem",
          }}
        >
          Welcome to
        </p>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "rgba(255,255,255,0.95)",
            margin: "0 0 1rem 0",
          }}
        >
          My Portfolio
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #C3D809 0%, #1af0dc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 500,
            }}
          >
            Website
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
            fontWeight: 300,
            color: "rgba(148,163,184,0.85)",
            lineHeight: 1.7,
            maxWidth: "42ch",
            margin: "0 auto 3rem",
          }}
        >
          Designed &amp; developed by{" "}
          <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            Zyron Neil
          </span>{" "}
          — a CS student crafting functional web systems and premium visual experiences.
        </p>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "0.9rem 2.5rem",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #C3D809 0%, #1af0dc 100%)",
            border: "none",
            color: "#0a0b09",
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow:
              "0 0 40px rgba(195,216,9,0.3), 0 8px 32px rgba(0,0,0,0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
            e.currentTarget.style.boxShadow =
              "0 0 60px rgba(195,216,9,0.45), 0 12px 40px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow =
              "0 0 40px rgba(195,216,9,0.3), 0 8px 32px rgba(0,0,0,0.3)";
          }}
        >
          <span>Enter Portfolio</span>
          <PixelIcon name="external-link" style={{ fontSize: "1rem" }} />
        </button>

        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.7rem",
            color: "rgba(148,163,184,0.4)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          or scroll to explore
        </p>
      </div>

      {/* Bottom grid lines decoration */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30vh",
          backgroundImage:
            "linear-gradient(rgba(195,216,9,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(195,216,9,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
