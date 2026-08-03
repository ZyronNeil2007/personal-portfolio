import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const gridStyle = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "linear-gradient(to right,#4f4f4f2e 1px,transparent 1px),linear-gradient(to bottom,#4f4f4f2e 1px,transparent 1px)",
  backgroundSize: "54px 54px",
  maskImage:
    "radial-gradient(ellipse 60% 50% at 50% 0%,#000 70%,transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 60% 50% at 50% 0%,#000 70%,transparent 100%)",
  pointerEvents: "none",
};

function Section1({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{
        scale,
        rotate,
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to top, #dadada, #ebebeb)",
        overflow: "hidden",
      }}
    >
      <div style={gridStyle} />
      <p style={{
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: "rgba(0,0,0,0.35)",
        marginBottom: "1.5rem",
        position: "relative",
        zIndex: 1,
      }}>
        A little about me
      </p>
      <h2 style={{
        fontSize: "clamp(2.2rem, 6vw, 5rem)",
        fontWeight: 600,
        letterSpacing: "-0.04em",
        lineHeight: 1.1,
        color: "#0a0a0a",
        textAlign: "center",
        maxWidth: "14ch",
        position: "relative",
        zIndex: 1,
        margin: 0,
      }}>
        Who is behind the code? Scroll&nbsp;
        <span style={{ display: "inline-block" }}>&#x1F447;</span>
      </h2>
    </motion.section>
  );
}

function Section2({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.section
      style={{
        scale,
        rotate,
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to top, #06060e, #1a1919)",
        overflow: "hidden",
      }}
    >
      <div style={gridStyle} />
      <p style={{
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "rgba(195,216,9,0.6)",
        marginBottom: "1.5rem",
        position: "relative",
        zIndex: 1,
      }}>
        CS Student · ISU Cabagan
      </p>
      <h2 style={{
        fontSize: "clamp(2.2rem, 6vw, 5rem)",
        fontWeight: 200,
        letterSpacing: "-0.04em",
        lineHeight: 1.1,
        color: "rgba(255,255,255,0.9)",
        textAlign: "center",
        maxWidth: "16ch",
        position: "relative",
        zIndex: 1,
        margin: "0 0 1.5rem 0",
      }}>
        Passionate about{" "}
        <span style={{
          background: "linear-gradient(135deg,#C3D809,#1af0dc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          design&nbsp;&amp;&nbsp;code.
        </span>
      </h2>
      <p style={{
        fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
        fontWeight: 300,
        color: "rgba(148,163,184,0.5)",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        maxWidth: "40ch",
        lineHeight: 1.7,
      }}>
        Turning ideas into functional, visually premium web experiences — keep scrolling to learn more.
      </p>
    </motion.section>
  );
}

export default function HeroAboutTransition() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container} style={{ position: "relative", height: "200vh" }}>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
}
