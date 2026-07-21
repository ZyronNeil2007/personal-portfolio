import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// ─── Data ────────────────────────────────────────────────────────────────────
const MILESTONES = [
  {
    year: '2026 — Present',
    title: 'Dream in Progress',
    body: "Now, as a Computer Science student, I'm finally pursuing what I truly love. I'm working with Python and data mining, along with Java (OOP) and web development using HTML and CSS. Everything I've learned — from creativity to coding — is coming together. Becoming a software engineer, web developer, and app developer is no longer just a dream — it's something I'm actively building every day.",
    tags: ['Python', 'Java OOP', 'Web Dev', 'Data Mining'],
    icon: '🎓',
    accent: '#C3D809',
    status: 'active',
  },
  {
    year: '2025',
    title: 'Expanding Technical Skills',
    body: 'I explored Computer Engineering concepts and worked with C++, which I really enjoyed as it deepened my understanding of programming logic and systems. This phase challenged me academically (especially Calculus 1), but it helped me grow discipline and problem-solving skills.',
    tags: ['C++', 'Computer Engineering', 'Problem Solving'],
    icon: '⚙️',
    accent: '#9aab07',
    status: 'done',
  },
  {
    year: '2024',
    title: 'Real-World Developer Era',
    body: 'I went deeper into .NET Programming NC III, working with HTML, CSS, JavaScript, GitHub, and databases. We developed multiple web-based systems that were actually implemented at Barucboc National High School, giving me real-world experience in building applications used by actual users.',
    tags: ['.NET NC III', 'JavaScript', 'GitHub', 'Databases'],
    icon: '🚀',
    accent: '#a8c400',
    status: 'done',
  },
  {
    year: '2023',
    title: 'Peak Creativity & Programming Breakthrough',
    body: 'This was my prime editing era on TikTok, where my content gained strong engagement. At the same time, during Senior High School, I took Java Programming NC II and developed multiple systems — realizing how much I enjoy coding. I was also introduced to HTML & CSS, and I instantly loved it because it combined programming with design. From here, I started self-studying and taking development more seriously.',
    tags: ['Java NC II', 'HTML & CSS', 'TikTok Creator'],
    icon: '💡',
    accent: '#b5c800',
    status: 'done',
  },
  {
    year: '2022',
    title: 'Creative Growth',
    body: 'My editing skills improved and I developed my abilities as a layout artist, creating posters and pubmats. I began to understand how design communicates ideas effectively.',
    tags: ['Layout Artist', 'Pubmats', 'Visual Design'],
    icon: '🎨',
    accent: '#c2d200',
    status: 'done',
  },
  {
    year: '2020 — 2021',
    title: 'Creative Exploration',
    body: 'I started creating anime edits using CapCut and Alight Motion, exploring storytelling through visuals, music, and timing. This is where I built my foundation in creativity.',
    tags: ['CapCut', 'Alight Motion', 'Storytelling'],
    icon: '🎬',
    accent: '#cfdc00',
    status: 'done',
  },
  {
    year: '2019 — Where It All Began',
    title: 'The Spark',
    body: 'My programming journey started with Minecraft. Running servers, configuring plugins, and customizing gameplay sparked my curiosity about how code works behind the scenes. This was the beginning of everything.',
    image: `${import.meta.env.BASE_URL}image/minecraft_screenshot.jpg`,
    tags: ['Minecraft', 'Servers', 'Plugins'],
    icon: '🌱',
    accent: '#dbe500',
    status: 'done',
  },
];

// ─── Single milestone card ────────────────────────────────────────────────────
function MilestoneCard({ milestone, index }) {
  const cardRef = useRef(null);
  const lineRef = useRef(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Start hidden
    gsap.set(card, {
      opacity: 0,
      x: isLeft ? -60 : 60,
      y: 20,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(card, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              delay: 0.05,
            });
            // Animate the connecting line
            if (lineRef.current) {
              gsap.fromTo(
                lineRef.current,
                { scaleX: 0, transformOrigin: isLeft ? 'left center' : 'right center' },
                { scaleX: 1, duration: 0.6, ease: 'power2.out', delay: 0.3 }
              );
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [isLeft]);

  const isActive = milestone.status === 'active';

  return (
    <div
      className={`journey-row relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-0 md:gap-0`}
      style={{ marginBottom: '3rem' }}
    >
      {/* ── LEFT slot ── */}
      <div className={`journey-slot ${isLeft ? 'md:flex justify-end pr-8' : 'md:hidden'} hidden`}>
        {isLeft && (
          <div ref={cardRef} style={{ maxWidth: '440px', width: '100%' }}>
            <CardContent milestone={milestone} isActive={isActive} />
          </div>
        )}
      </div>

      {/* ── Centre node ── */}
      <div className="hidden md:flex flex-col items-center" style={{ width: '32px', flexShrink: 0 }}>
        {/* Node circle */}
        <div
          className="relative z-10 flex items-center justify-center rounded-full text-base"
          style={{
            width: '48px',
            height: '48px',
            background: isActive
              ? `radial-gradient(circle, ${milestone.accent}33, ${milestone.accent}11)`
              : 'rgba(255,255,255,0.04)',
            border: `2px solid ${isActive ? milestone.accent : 'rgba(255,255,255,0.1)'}`,
            boxShadow: isActive ? `0 0 20px ${milestone.accent}55` : 'none',
            transition: 'box-shadow 0.3s',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{milestone.icon}</span>
          {isActive && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: `${milestone.accent}22`,
                animationDuration: '2s',
              }}
            />
          )}
        </div>
      </div>

      {/* ── RIGHT slot ── */}
      <div className={`journey-slot ${!isLeft ? 'md:flex justify-start pl-8' : 'md:hidden'} hidden`}>
        {!isLeft && (
          <div ref={cardRef} style={{ maxWidth: '440px', width: '100%' }}>
            <CardContent milestone={milestone} isActive={isActive} />
          </div>
        )}
      </div>

      {/* ── MOBILE: full-width card ── */}
      <div ref={isLeft ? null : cardRef} className="md:hidden col-span-1">
        <div ref={isLeft ? cardRef : null}>
          <MobileRow milestone={milestone} isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

// ─── Desktop card content ─────────────────────────────────────────────────────
function CardContent({ milestone, isActive }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const enter = () => gsap.to(el, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
    const leave = () => gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' });
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);

    return () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      ref={nodeRef}
      className="liquid-glass"
      style={{
        padding: '1.75rem 2rem',
        borderRadius: '20px',
        borderLeft: isActive ? `3px solid ${milestone.accent}` : 'none',
        cursor: 'default',
        willChange: 'transform',
      }}
    >
      {/* Year badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: milestone.accent,
          marginBottom: '0.6rem',
          padding: '3px 10px',
          borderRadius: '999px',
          background: `${milestone.accent}18`,
          border: `1px solid ${milestone.accent}33`,
        }}
      >
        {isActive && (
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: milestone.accent,
              boxShadow: `0 0 6px ${milestone.accent}`,
            }}
          />
        )}
        {milestone.year}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#f1f5f9',
          margin: '0 0 0.6rem 0',
          lineHeight: 1.3,
          letterSpacing: '-0.02em',
        }}
      >
        {milestone.title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.75,
          color: 'rgba(148,163,184,0.9)',
          margin: '0 0 1rem 0',
          fontWeight: 300,
        }}
      >
        {milestone.body}
      </p>

      {/* Image if it exists */}
      {milestone.image && (
        <img
          src={milestone.image}
          alt={milestone.title}
          style={{
            width: '100%',
            marginBottom: '1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        />
      )}

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {milestone.tags.map((tag) => (
          <span
            key={tag}
            className="liquid-glass-tag"
            style={{
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '3px 10px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile row (left-icon + card) ───────────────────────────────────────────
function MobileRow({ milestone, isActive }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      {/* Icon node */}
      <div style={{ flexShrink: 0, paddingTop: '0.25rem' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            background: isActive
              ? `radial-gradient(circle, ${milestone.accent}33, ${milestone.accent}11)`
              : 'rgba(255,255,255,0.04)',
            border: `2px solid ${isActive ? milestone.accent : 'rgba(255,255,255,0.1)'}`,
            boxShadow: isActive ? `0 0 16px ${milestone.accent}55` : 'none',
            position: 'relative',
          }}
        >
          {milestone.icon}
          {isActive && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: `${milestone.accent}22`, animationDuration: '2s' }}
            />
          )}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <CardContent milestone={milestone} isActive={isActive} />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Journey() {
  const headingRef = useRef(null);
  const vertLineRef = useRef(null);

  useEffect(() => {
    // Heading entrance
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 32, filter: 'blur(8px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 1, ease: 'power3.out',
        scrollTrigger: undefined, // handled by IntersectionObserver below
      }
    );

    const headingObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(headingRef.current, {
            opacity: 1, y: 0, filter: 'blur(0px)',
            duration: 1, ease: 'power3.out',
          });

          // Animate the vertical centre line growing downward
          if (vertLineRef.current) {
            gsap.fromTo(
              vertLineRef.current,
              { scaleY: 0, transformOrigin: 'top center' },
              { scaleY: 1, duration: 2.5, ease: 'power2.out', delay: 0.3 }
            );
          }
          headingObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    gsap.set(headingRef.current, { opacity: 0, y: 32, filter: 'blur(8px)' });
    headingObserver.observe(headingRef.current);

    return () => headingObserver.disconnect();
  }, []);

  return (
    <section
      id="journey"
      style={{
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle section background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── Section heading ── */}
        <div
          ref={headingRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '5rem',
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C3D809',
              marginBottom: '0.75rem',
              display: 'block',
            }}
          >
            🌟 From Passion to Profession
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#f8fafc',
              margin: 0,
            }}
          >
            My Journey
          </h2>
          <p
            style={{
              marginTop: '1rem',
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(148,163,184,0.8)',
              maxWidth: '48ch',
              fontWeight: 300,
            }}
          >
            Every skill I have today started as curiosity. Here's the road that brought me here.
          </p>

          {/* Decorative divider */}
          <div
            style={{
              marginTop: '2rem',
              width: '48px',
              height: '3px',
              borderRadius: '99px',
              background: 'linear-gradient(90deg, #C3D809, #6366f1)',
            }}
          />
        </div>

        {/* ── Timeline grid ── */}
        <div style={{ position: 'relative' }}>
          {/* Vertical centre line (desktop only) */}
          <div
            ref={vertLineRef}
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              background:
                'linear-gradient(to bottom, transparent, rgba(195,216,9,0.3) 10%, rgba(195,216,9,0.15) 80%, transparent)',
              zIndex: 0,
            }}
          />

          {/* Vertical left line (mobile only) */}
          <div
            className="block md:hidden"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '20px',
              width: '1px',
              background:
                'linear-gradient(to bottom, transparent, rgba(195,216,9,0.25) 10%, rgba(195,216,9,0.1) 85%, transparent)',
              zIndex: 0,
            }}
          />

          {MILESTONES.map((milestone, i) => (
            <MilestoneCard key={i} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
