import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// ─── Data ─────────────────────────────────────────────────────────────────────
const MILESTONES = [
  {
    year: '2026 — Present',
    title: 'Dream in Progress',
    body: "Now, as a Computer Science student, I'm finally pursuing what I truly love. I'm working with Python and data mining, along with Java (OOP) and web development using HTML and CSS. Everything I've learned — from creativity to coding — is coming together.",
    tags: ['Python', 'Java OOP', 'Web Dev', 'Data Mining'],
    icon: '🎓',
    status: 'active',
  },
  {
    year: '2025',
    title: 'Expanding Technical Skills',
    body: 'I explored Computer Engineering concepts and worked with C++, which deepened my understanding of programming logic and systems. This phase challenged me academically but grew my discipline and problem-solving skills.',
    tags: ['C++', 'Computer Engineering', 'Problem Solving'],
    icon: '⚙️',
    status: 'done',
  },
  {
    year: '2024',
    title: 'Real-World Developer Era',
    body: 'I went deeper into .NET Programming NC III, working with HTML, CSS, JavaScript, GitHub, and databases. We developed multiple web-based systems implemented at Barucboc National High School.',
    tags: ['.NET NC III', 'JavaScript', 'GitHub', 'Databases'],
    icon: '🚀',
    status: 'done',
  },
  {
    year: '2023',
    title: 'Peak Creativity & Programming Breakthrough',
    body: 'My prime TikTok editing era and simultaneously taking Java Programming NC II during Senior High School — realizing how much I love building things. I also discovered HTML & CSS, which combined programming with design.',
    tags: ['Java NC II', 'HTML & CSS', 'TikTok Creator'],
    icon: '💡',
    status: 'done',
  },
  {
    year: '2022',
    title: 'Creative Growth',
    body: 'My editing skills improved and I developed abilities as a layout artist, creating posters and pubmats. I began to understand how design communicates ideas effectively.',
    tags: ['Layout Artist', 'Pubmats', 'Visual Design'],
    icon: '🎨',
    status: 'done',
  },
  {
    year: '2020 — 2021',
    title: 'Creative Exploration',
    body: 'I started creating anime edits using CapCut and Alight Motion, exploring storytelling through visuals, music, and timing. This is where I built my foundation in creativity.',
    tags: ['CapCut', 'Alight Motion', 'Storytelling'],
    icon: '🎬',
    status: 'done',
  },
  {
    year: '2019 — Where It All Began',
    title: 'The Spark',
    body: 'My programming journey started with Minecraft. Running servers, configuring plugins, and customizing gameplay sparked my curiosity about how code works behind the scenes. This was the beginning of everything.',
    image: `${import.meta.env.BASE_URL}image/minecraft_screenshot.jpg`,
    tags: ['Minecraft', 'Servers', 'Plugins'],
    icon: '🌱',
    status: 'origin',
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────
function TLCard({ milestone, isActive, isOrigin }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const enter = () => gsap.to(el, { y: -4, duration: 0.15, ease: 'power2.out' });
    const leave = () => gsap.to(el, { y: 0, duration: 0.15, ease: 'power2.out' });
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); };
  }, []);

  const borderColor = isActive ? 'var(--color-gold)' : isOrigin ? 'var(--color-grass)' : 'var(--color-stone-muted)';
  const shadowColor = isActive ? 'var(--color-gold)' : 'var(--color-stone-ink)';

  return (
    <div
      ref={cardRef}
      className="pixel-card"
      style={{
        border: `2px solid ${borderColor}`,
        willChange: 'transform',
        transition: 'transform 0.15s, box-shadow 0.15s',
      }}
    >
      {/* Year badge */}
      <div
        className="tl-year-pixel"
        style={{
          marginBottom: '10px',
          background: isActive ? 'var(--color-gold)' : isOrigin ? 'var(--color-grass-deep)' : 'var(--color-stone-ink)',
          color: isActive ? 'var(--color-stone-ink)' : 'var(--color-parchment)',
          borderColor: isActive ? 'var(--color-dirt)' : 'var(--color-stone-ink)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {isActive && (
          <span style={{
            display: 'inline-block', width: '6px', height: '6px',
            background: 'var(--color-stone-ink)',
            animation: 'blink-caret 1s infinite step-end',
          }} />
        )}
        {milestone.year}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.1rem',
        fontWeight: 600,
        color: 'var(--color-stone-ink)',
        margin: '0 0 8px',
        letterSpacing: '0.02em',
      }}>
        {milestone.title}
      </h3>

      {/* Body */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        lineHeight: 1.7,
        color: 'var(--color-stone-ink)',
        margin: '0 0 12px',
        opacity: 0.85,
      }}>
        {milestone.body}
      </p>

      {/* Image */}
      {milestone.image && (
        <img
          src={milestone.image}
          alt={milestone.title}
          style={{
            width: '100%',
            marginBottom: '12px',
            border: '2px solid var(--color-stone-muted)',
            display: 'block',
          }}
        />
      )}

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {milestone.tags.map((tag) => (
          <span key={tag} className="pixel-tag pixel-tag-grass">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Milestone Row ─────────────────────────────────────────────────────────────
function MilestoneRow({ milestone, index }) {
  const cardRef = useRef(null);
  const isLeft = index % 2 === 0;
  const isActive = milestone.status === 'active';
  const isOrigin = milestone.status === 'origin';

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.set(card, { opacity: 0, x: isLeft ? -40 : 40 });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(card, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.05 });
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(card);
    return () => observer.disconnect();
  }, [isLeft]);

  return (
    <div
      className="journey-row relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-0"
      style={{ marginBottom: '2.5rem' }}
    >
      {/* LEFT slot */}
      <div className={`${isLeft ? 'md:flex justify-end pr-8' : 'md:block'} hidden`}>
        {isLeft && (
          <div ref={cardRef} style={{ maxWidth: '420px', width: '100%' }}>
            <TLCard milestone={milestone} isActive={isActive} isOrigin={isOrigin} />
          </div>
        )}
      </div>

      {/* Centre node */}
      <div className="hidden md:flex flex-col items-center pt-2" style={{ width: '40px', flexShrink: 0 }}>
        <div
          className="tl-dot-pixel relative z-10 flex items-center justify-center"
          style={{
            background: isActive ? 'var(--color-gold)' : isOrigin ? 'var(--color-grass)' : 'var(--color-stone-muted)',
            border: '3px solid var(--color-stone-ink)',
            boxShadow: isActive ? '2px 2px 0 var(--color-stone-ink)' : 'none',
          }}
        >
          <span style={{ fontSize: '0.6rem' }}>{milestone.icon}</span>
        </div>
      </div>

      {/* RIGHT slot */}
      <div className={`${!isLeft ? 'md:flex justify-start pl-8' : 'md:block'} hidden`}>
        {!isLeft && (
          <div ref={cardRef} style={{ maxWidth: '420px', width: '100%' }}>
            <TLCard milestone={milestone} isActive={isActive} isOrigin={isOrigin} />
          </div>
        )}
      </div>

      {/* MOBILE: full-width */}
      <div className="md:hidden col-span-1">
        <div ref={isLeft ? cardRef : null}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, paddingTop: '2px' }}>
              <div
                className="tl-dot-pixel flex items-center justify-center"
                style={{
                  background: isActive ? 'var(--color-gold)' : isOrigin ? 'var(--color-grass)' : 'var(--color-stone-muted)',
                  border: '3px solid var(--color-stone-ink)',
                }}
              >
                <span style={{ fontSize: '0.5rem' }}>{milestone.icon}</span>
              </div>
            </div>
            <div ref={!isLeft ? cardRef : null} style={{ flex: 1 }}>
              <TLCard milestone={milestone} isActive={isActive} isOrigin={isOrigin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Journey() {
  const headingRef = useRef(null);
  const vertLineRef = useRef(null);

  useEffect(() => {
    gsap.set(headingRef.current, { opacity: 0, y: 24 });

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
        if (vertLineRef.current) {
          gsap.fromTo(vertLineRef.current,
            { scaleY: 0, transformOrigin: 'top center' },
            { scaleY: 1, duration: 2.5, ease: 'power2.out', delay: 0.3 }
          );
        }
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      className="sky-section"
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Top & bottom border accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, var(--color-grass), var(--color-dirt))' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, var(--color-dirt), var(--color-grass))' }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Section heading */}
        <div
          ref={headingRef}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label" style={{ display: 'block', marginBottom: '8px' }}>
            🌟 From Passion to Profession
          </span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>
            My Journey
          </h2>
          <div className="section-grass-bar" style={{ margin: '10px auto 0' }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--color-stone-ink)',
            maxWidth: '44ch',
            margin: '16px auto 0',
            opacity: 0.8,
          }}>
            Every skill I have today started as curiosity. Here's the road that brought me here.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line — desktop */}
          <div
            ref={vertLineRef}
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '3px',
              background: 'linear-gradient(to bottom, var(--color-grass), var(--color-dirt))',
              zIndex: 0,
            }}
          />
          {/* Vertical line — mobile */}
          <div
            className="block md:hidden"
            style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: '7px',
              width: '3px',
              background: 'linear-gradient(to bottom, var(--color-grass), var(--color-dirt))',
              zIndex: 0,
            }}
          />

          {MILESTONES.map((milestone, i) => (
            <MilestoneRow key={i} milestone={milestone} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
