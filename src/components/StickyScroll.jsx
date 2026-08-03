import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function StickyScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [4, 0]);

  const gridOverlay = {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(circle, rgba(92,138,58,0.12) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    pointerEvents: "none",
  };

  const label = {
    fontFamily: "'Space Mono', monospace",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#928E86",
    marginBottom: "1.5rem",
    position: "relative",
    zIndex: 1,
  };

  const heading = {
    fontFamily: "'Pixelify Sans', sans-serif",
    fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
    fontWeight: 600,
    letterSpacing: "0.02em",
    lineHeight: 1.1,
    color: "#3D3B38",
    textAlign: "center",
    margin: 0,
    position: "relative",
    zIndex: 1,
    maxWidth: "14ch",
  };

  const sub = {
    marginTop: "1.5rem",
    fontFamily: "'Space Mono', monospace",
    fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#928E86",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  };

  const accent = {
    color: "#3E6B27",
  };

  const accent2 = {
    color: "#5C8A3A",
  };

  return (
    <div ref={container} style={{ position: "relative", height: "200vh" }}>

      {/* Section 1 — sticky, scales & rotates away */}
      <motion.section
        style={{
          scale: scale1,
          rotate: rotate1,
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F3E8",
          borderBottom: "3px solid #928E86",
          transformOrigin: "center center",
          overflow: "hidden",
        }}
      >
        <div style={gridOverlay} />
        {/* Grass-to-dirt top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(to right, #5C8A3A, #7A4F2B)", zIndex: 2 }} />
        <p style={label}>Creative Developer</p>
        <h2 style={heading}>
          I build things for the{" "}
          <span style={accent}>web.</span>
        </h2>
        <p style={sub}>Scroll to explore ↓</p>
      </motion.section>

      {/* Section 2 — scales up from behind */}
      <motion.section
        style={{
          scale: scale2,
          rotate: rotate2,
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#CFE8F5",
          borderTop: "3px solid #928E86",
          overflow: "hidden",
          transformOrigin: "center top",
        }}
      >
        <div style={gridOverlay} />
        <p style={{ ...label }}>CS Student & Designer</p>
        <h2 style={{ ...heading, maxWidth: "16ch" }}>
          Code that works.{" "}
          <span style={accent2}>Design that feels.</span>
        </h2>
        <p style={sub}>Keep scrolling ↓</p>
      </motion.section>

    </div>
  );
}
