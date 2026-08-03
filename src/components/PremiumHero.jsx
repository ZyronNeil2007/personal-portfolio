import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import PixelIcon from './PixelIcon';

export default function PremiumHero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const underlineRef = useRef(null);
  const tagRef = useRef(null);
  const descRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const statsRef = useRef(null);
  const portraitRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Typewriter state
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  const phrases = [
    'Zyron Neil Bautista.',
    'Creative Developer.',
    'CS Student.',
  ];

  useEffect(() => {
    let timer;
    const currentWord = phrases[loopIndex % phrases.length];

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2800);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }, isDeleting ? 45 : 95);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopIndex]);

  // Entrance animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(tagRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 })
      .fromTo(headlineRef.current, { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.4')
      .fromTo(underlineRef.current, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .fromTo(descRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .fromTo(buttonGroupRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo(statsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo(portraitRef.current, { opacity: 0, scale: 0.94, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1.1 }, '-=1.2')
      .fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');

    // Scroll indicator bounce
    gsap.to(scrollIndicatorRef.current, {
      y: 8, duration: 1.4, yoyo: true, repeat: -1, ease: 'power1.inOut', delay: 2.5,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      aria-label="Hero — Introduction"
      style={{
        background: 'var(--color-parchment)',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sky-tinted ambient top accent */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '4px',
        background: 'linear-gradient(to right, var(--color-grass), var(--color-dirt))',
        zIndex: 1,
      }} />

      {/* Subtle background pattern — pixel dots */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(92,138,58,0.08) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main Content */}
      <div
        className="relative w-full"
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '6rem 24px 5rem',
          zIndex: 10,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* ── LEFT: Text ── */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-5 order-2 md:order-1">

            {/* Eyebrow tag */}
            <div
              ref={tagRef}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-grass-deep)',
                background: 'rgba(92,138,58,0.1)',
                border: '1px solid var(--color-grass)',
                padding: '5px 12px',
                clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
              }}
            >
                            <PixelIcon name="sparkle" aria-hidden="true" />
              CS Student &amp; Creative Developer
            </div>

            {/* H1 Headline */}
            <div ref={headlineRef} style={{ lineHeight: 1.1 }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: 400,
                color: 'var(--color-stone-muted)',
                margin: '0 0 4px',
              }}>
                Hi, I'm
              </p>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: 'var(--color-stone-ink)',
                margin: 0,
                lineHeight: 1.1,
                position: 'relative',
              }}>
                <span
                  className="hero-glitch-name"
                  data-text={typedText || 'Zyron Neil Bautista.'}
                >
                  {typedText || 'Zyron Neil Bautista.'}
                </span>
                <span className="hero-typed-caret" aria-hidden="true" />
              </h1>
              {/* Pixel underline: grass → dirt */}
              <div
                ref={underlineRef}
                className="pixel-underline"
                style={{ marginTop: '10px' }}
                aria-hidden="true"
              />
            </div>

            {/* Description */}
            <p
              ref={descRef}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: 'var(--color-stone-ink)',
                maxWidth: '44ch',
                margin: 0,
              }}
            >
              I specialize in building functional web systems while making them visually
              engaging and user-friendly.{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--color-grass-deep)', fontWeight: 600 }}>
                Technology should not only work well — it should feel great to use.
              </em>
            </p>

            {/* CTA Buttons */}
            <div ref={buttonGroupRef} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-pixel btn-pixel-primary"
                id="hero-view-projects"
              >
                View Projects
                              <PixelIcon name="arrow-up-right" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="btn-pixel btn-pixel-secondary"
                id="hero-contact"
              >
                Contact
              </a>
            </div>

            {/* Stats row */}
            <div
              ref={statsRef}
              style={{
                display: 'flex',
                gap: '32px',
                paddingTop: '20px',
                borderTop: '2px solid var(--color-stone-muted)',
                marginTop: '4px',
              }}
            >
              {[
                { value: '3+', label: 'Projects Built' },
                { value: '2+', label: 'Years Learning' },
                { value: '5+', label: 'Tech Stacks' },
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: 'var(--color-grass-deep)',
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-stone-muted)',
                  }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Portrait ── */}
          <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end items-center order-1 md:order-2">
            <div ref={portraitRef} style={{ position: 'relative' }}>
              {/* Portrait frame with pixel corners + dirt border */}
              <div
                style={{
                  width: 'clamp(240px, 32vw, 380px)',
                  aspectRatio: '4/5',
                  border: '3px solid var(--color-dirt)',
                  boxShadow: '6px 6px 0 var(--color-stone-ink)',
                  overflow: 'hidden',
                  clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
                }}
              >
                <img
                  src="/image/me/me_zy.png"
                  alt="Zyron Neil Bautista"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
              </div>

              {/* Floating badge — Stack */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '-24px',
                  background: 'var(--color-parchment)',
                  border: '2px solid var(--color-stone-ink)',
                  boxShadow: '3px 3px 0 var(--color-stone-ink)',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  clipPath: 'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
                  zIndex: 10,
                }}
                aria-label="Tech stack: React, PHP, MySQL"
              >
                              <PixelIcon name="code" style={{ fontSize: '1.1rem', color: 'var(--color-grass-deep)' }} aria-hidden="true" />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-stone-muted)' }}>Stack</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-stone-ink)' }}>React · PHP · MySQL</div>
                </div>
              </div>

              {/* Floating badge — Focus */}
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '-24px',
                  background: 'var(--color-grass-deep)',
                  border: '2px solid var(--color-stone-ink)',
                  boxShadow: '3px 3px 0 var(--color-stone-ink)',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  clipPath: 'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
                  zIndex: 10,
                }}
                aria-label="Focus: UI/UX Design"
              >
                              <PixelIcon name="palette" style={{ fontSize: '1.1rem', color: 'var(--color-gold)' }} aria-hidden="true" />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(247,243,232,0.7)' }}>Focus</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-parchment)' }}>UI / UX Design</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            opacity: 0,
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-stone-muted)' }}>Scroll</span>
          <div style={{
            width: '2px',
            height: '36px',
            background: 'linear-gradient(to bottom, var(--color-grass), var(--color-dirt))',
          }} />
        </div>
      </div>
    </section>
  );
}
