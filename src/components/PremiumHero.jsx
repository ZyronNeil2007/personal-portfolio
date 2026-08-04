import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import PixelIcon from './PixelIcon';

// ─── Minecraft Chest Wood Planks CSS helper ────────────────────────────────
const WOOD_GRAIN = `
  repeating-linear-gradient(
    to bottom,
    transparent 0px, transparent 17px,
    rgba(0,0,0,0.13) 17px, rgba(0,0,0,0.13) 19px
  ),
  repeating-linear-gradient(
    90deg,
    transparent 0px, transparent 26px,
    rgba(0,0,0,0.09) 26px, rgba(0,0,0,0.09) 28px
  )
`;

const WOOD_BASE  = 'linear-gradient(170deg, #C4924A 0%, #A87830 45%, #8A6020 100%)';
const WOOD_TOP   = 'linear-gradient(180deg, #D4A458 0%, #B08030 55%, #8A6020 100%)';
const WOOD_DARK  = 'linear-gradient(170deg, #9A6E2A 0%, #7A5218 55%, #5A3C10 100%)';
const METAL_COLOR = '#909090';
const LOCK_COLOR  = '#D4A83C';
const BORDER_COLOR = '#4A2C08';

// ─── Sparkle Particle ─────────────────────────────────────────────────────
function Sparkle({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        background: '#FFC42B',
        boxShadow: '0 0 8px 2px rgba(255,196,43,0.8)',
        animation: 'mc-sparkle-float 2.4s ease-in-out infinite',
        ...style,
      }}
    />
  );
}

export default function PremiumHero() {
  const containerRef       = useRef(null);
  const headlineRef        = useRef(null);
  const underlineRef       = useRef(null);
  const tagRef             = useRef(null);
  const descRef            = useRef(null);
  const buttonGroupRef     = useRef(null);
  const statsRef           = useRef(null);
  const chestSceneRef      = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Typewriter state
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex]   = useState(0);
  const [lidOpen, setLidOpen]       = useState(false);

  const phrases = [
    'Zyron Neil Bautista.',
    'Creative Developer.',
    'CS Student.',
  ];

  // Typewriter
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

  // Open lid after short delay for drama
  useEffect(() => {
    const t = setTimeout(() => setLidOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Entrance GSAP animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(tagRef.current,         { opacity: 0, y: 12 },        { opacity: 1, y: 0,  duration: 0.7 })
      .fromTo(headlineRef.current,    { opacity: 0, x: -24 },       { opacity: 1, x: 0,  duration: 0.9 }, '-=0.4')
      .fromTo(underlineRef.current,   { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .fromTo(descRef.current,        { opacity: 0, y: 16 },        { opacity: 1, y: 0,  duration: 0.8 }, '-=0.4')
      .fromTo(buttonGroupRef.current, { opacity: 0, y: 12 },        { opacity: 1, y: 0,  duration: 0.7 }, '-=0.5')
      .fromTo(statsRef.current,       { opacity: 0 },               { opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo(chestSceneRef.current,  { opacity: 0, y: 30, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 }, '-=1.1')
      .fromTo(scrollIndicatorRef.current, { opacity: 0 },           { opacity: 1, duration: 0.5 }, '-=0.2');

    // Chest scene gentle float
    gsap.to(chestSceneRef.current, {
      y: -10, duration: 2.8, yoyo: true, repeat: -1, ease: 'power1.inOut', delay: 1.8,
    });

    // Scroll indicator bounce
    gsap.to(scrollIndicatorRef.current, {
      y: 8, duration: 1.4, yoyo: true, repeat: -1, ease: 'power1.inOut', delay: 2.5,
    });
  }, []);

  return (
    <>
      {/* ─── Sparkle keyframes injected once ─── */}
      <style>{`
        @keyframes mc-sparkle-float {
          0%   { transform: translateY(0)   scale(1)   rotate(0deg);   opacity: 1; }
          50%  { transform: translateY(-28px) scale(1.3) rotate(45deg); opacity: 0.7; }
          100% { transform: translateY(-56px) scale(0)   rotate(90deg); opacity: 0; }
        }
        @keyframes mc-lid-open {
          from { transform: rotateX(0deg); }
          to   { transform: rotateX(-108deg); }
        }
        @keyframes mc-chest-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(98,184,20,0.18), 0 0 60px rgba(98,184,20,0.08); }
          50%      { box-shadow: 0 0 50px rgba(98,184,20,0.32), 0 0 90px rgba(98,184,20,0.14); }
        }
        @keyframes mc-photo-emerge {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .mc-photo-img {
          animation: mc-photo-emerge 1s ease-out 0.9s both;
        }
      `}</style>

      <section
        ref={containerRef}
        id="home"
        aria-label="Hero — Introduction"
        style={{
          background: 'var(--mc-bg)',
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent bar — MC green */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(to right, var(--mc-green), var(--mc-blue), var(--mc-green))',
          zIndex: 1,
        }} />

        {/* Dark pixel-dot background */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(98,184,20,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 0, pointerEvents: 'none',
        }} />

        {/* Ambient light glow — bottom left */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(98,184,20,0.08) 0%, transparent 65%)',
          zIndex: 0, pointerEvents: 'none',
        }} />

        {/* Main Content */}
        <div className="relative w-full" style={{
          maxWidth: 'var(--container-max)', margin: '0 auto',
          padding: '6rem 24px 5rem', zIndex: 10,
        }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

            {/* ── LEFT: Text ── */}
            <div className="col-span-1 md:col-span-7 flex flex-col gap-5 order-2 md:order-1">

              {/* Eyebrow tag */}
              <div ref={tagRef} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--mc-green-bright)',
                background: 'rgba(98,184,20,0.08)',
                border: '1px solid rgba(98,184,20,0.35)',
                padding: '5px 12px',
                clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
              }}>
                <PixelIcon name="sparkle" aria-hidden="true" />
                CS Student &amp; Creative Developer
              </div>

              {/* H1 Headline */}
              <div ref={headlineRef} style={{ lineHeight: 1.1 }}>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  fontWeight: 400, color: 'var(--mc-text-muted)', margin: '0 0 4px',
                }}>
                  Hi, I'm
                </p>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
                  fontWeight: 700, letterSpacing: '0.02em',
                  color: 'var(--mc-text)', margin: 0, lineHeight: 1.05, position: 'relative',
                }}>
                  <span className="hero-glitch-name" data-text={typedText || 'Zyron Neil Bautista.'}>
                    {typedText || 'Zyron Neil Bautista.'}
                  </span>
                  <span className="hero-typed-caret" aria-hidden="true" />
                </h1>
                <div ref={underlineRef} className="pixel-underline" style={{ marginTop: '12px' }} aria-hidden="true" />
              </div>

              {/* Description */}
              <p ref={descRef} style={{
                fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.4vw, 1.05rem)',
                fontWeight: 400, lineHeight: 1.7,
                color: 'var(--mc-text-2)', maxWidth: '44ch', margin: 0,
              }}>
                I specialize in building functional web systems while making them visually
                engaging and user-friendly.{' '}
                <em style={{ fontStyle: 'normal', color: 'var(--mc-green-bright)', fontWeight: 600 }}>
                  Technology should not only work well — it should feel great to use.
                </em>
              </p>

              {/* CTA Buttons */}
              <div ref={buttonGroupRef} className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-pixel btn-pixel-primary" id="hero-view-projects">
                  View Projects
                  <PixelIcon name="arrow-up-right" aria-hidden="true" />
                </a>
                <a href="#contact" className="btn-pixel btn-pixel-secondary" id="hero-contact">
                  Contact
                </a>
              </div>

              {/* Stats row */}
              <div ref={statsRef} style={{
                display: 'flex', gap: '32px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                marginTop: '4px',
              }}>
                {[
                  { value: '3+', label: 'Projects Built' },
                  { value: '2+', label: 'Years Learning' },
                  { value: '5+', label: 'Tech Stacks' },
                ].map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 700, color: 'var(--mc-green)', letterSpacing: '0.02em', lineHeight: 1,
                    }}>
                      {stat.value}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mc-text-muted)',
                    }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                RIGHT: 3D Minecraft Chest Portrait
            ══════════════════════════════════════════════════════════════ */}
            <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end items-end order-1 md:order-2">
              <div
                ref={chestSceneRef}
                aria-label="Zyron emerging from a Minecraft chest"
                style={{
                  position: 'relative',
                  width: 'clamp(260px, 28vw, 340px)',
                  perspective: '700px',
                  perspectiveOrigin: '50% 70%',
                }}
              >

                {/* ── Floating sparkle particles ── */}
                <Sparkle style={{ top: '10%',  left: '15%',  animationDelay: '0s',    animationDuration: '2.2s' }} />
                <Sparkle style={{ top: '20%',  right: '12%', animationDelay: '0.6s',  animationDuration: '2.8s' }} />
                <Sparkle style={{ top: '5%',   left: '48%',  animationDelay: '1.1s',  animationDuration: '2.0s' }} />
                <Sparkle style={{ top: '35%',  left: '8%',   animationDelay: '1.7s',  animationDuration: '3.0s', background: '#70DFFF', boxShadow: '0 0 8px 2px rgba(112,223,255,0.8)' }} />
                <Sparkle style={{ top: '30%',  right: '6%',  animationDelay: '0.3s',  animationDuration: '2.5s', background: '#86D562', boxShadow: '0 0 8px 2px rgba(134,213,98,0.8)' }} />

                {/* ── LAYER STACK (back → front) ────────────────────────── */}

                {/* 1. Chest INTERIOR BACK WALL — visible behind/around photo */}
                <div style={{
                  position: 'absolute',
                  bottom: '52px',   /* sits just above chest front top */
                  left: '8px',
                  right: '8px',
                  height: '80px',
                  background: 'linear-gradient(to bottom, #2A1608 0%, #1A0C04 100%)',
                  zIndex: 1,
                }} />

                {/* 2. Photo — person "standing" inside the chest, emerging out */}
                <div style={{
                  position: 'relative',
                  zIndex: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  /* Pull photo DOWN so feet overlap into chest */
                  marginBottom: '-68px',
                }}>
                  <img
                    src="/image/me/me_zy.png"
                    alt="Zyron Neil Bautista"
                    className="mc-photo-img"
                    style={{
                      width: '78%',
                      height: 'clamp(300px, 38vw, 420px)',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                      /* Green atmospheric glow */
                      filter: 'drop-shadow(0 -12px 28px rgba(98,184,20,0.35)) drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
                    }}
                  />
                </div>

                {/* 3. Chest 3D ASSEMBLY ─────────────────────────────────── */}
                <div style={{
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  zIndex: 20,
                }}>

                  {/* 3a. OPEN LID — rotated back with 3D CSS */}
                  <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: 0, right: 0,
                    height: '72px',
                    background: WOOD_TOP,
                    backgroundImage: WOOD_GRAIN,
                    border: `3px solid ${BORDER_COLOR}`,
                    borderBottom: `2px solid ${BORDER_COLOR}`,
                    transformOrigin: 'bottom center',
                    transform: lidOpen ? 'rotateX(-108deg)' : 'rotateX(0deg)',
                    transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    zIndex: 3,
                    boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.3)',
                  }}>
                    {/* Lid inner face (visible when open) */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to bottom, #3D2008, #2A1205)',
                      opacity: 0.6,
                    }} />
                    {/* Lid metal trim border */}
                    <div style={{
                      position: 'absolute', top: 5, left: 5, right: 5, bottom: 5,
                      border: `1px solid rgba(180,140,60,0.35)`,
                      pointerEvents: 'none',
                    }} />
                    {/* Lid metal corner — top-left */}
                    <div style={{ position:'absolute', top:3, left:3, width:12, height:12, background: METAL_COLOR, border:`1px solid #505050` }} />
                    {/* Lid metal corner — top-right */}
                    <div style={{ position:'absolute', top:3, right:3, width:12, height:12, background: METAL_COLOR, border:`1px solid #505050` }} />
                    {/* Latch tongue (hangs from bottom of lid) */}
                    <div style={{
                      position: 'absolute', bottom: -8, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 22, height: 10,
                      background: LOCK_COLOR,
                      border: `2px solid ${BORDER_COLOR}`,
                    }} />
                  </div>

                  {/* 3b. CHEST FRONT FACE — this masks the photo's feet */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '96px',
                    background: WOOD_BASE,
                    backgroundImage: WOOD_GRAIN,
                    border: `3px solid ${BORDER_COLOR}`,
                    borderTop: `2px solid #6A3C10`,
                    boxSizing: 'border-box',
                    zIndex: 20,
                    overflow: 'hidden',
                    boxShadow: `inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -4px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.7)`,
                    animation: 'mc-chest-glow 3s ease-in-out infinite',
                  }}>
                    {/* Metal corners — all four */}
                    <div style={{ position:'absolute', top:5,  left:5,  width:14, height:14, background: METAL_COLOR, border:`1.5px solid #606060`, zIndex:2 }} />
                    <div style={{ position:'absolute', top:5,  right:5, width:14, height:14, background: METAL_COLOR, border:`1.5px solid #606060`, zIndex:2 }} />
                    <div style={{ position:'absolute', bottom:5, left:5,  width:14, height:14, background: METAL_COLOR, border:`1.5px solid #606060`, zIndex:2 }} />
                    <div style={{ position:'absolute', bottom:5, right:5, width:14, height:14, background: METAL_COLOR, border:`1.5px solid #606060`, zIndex:2 }} />

                    {/* Center LOCK */}
                    <div style={{
                      position:'absolute', top:'50%', left:'50%',
                      transform:'translate(-50%, -50%)',
                      width:28, height:22,
                      background: LOCK_COLOR,
                      border:`2px solid ${BORDER_COLOR}`,
                      zIndex:3,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      boxShadow:'0 2px 6px rgba(0,0,0,0.5)',
                    }}>
                      {/* Lock hole */}
                      <div style={{
                        width:9, height:9,
                        background: BORDER_COLOR,
                        borderRadius: '50%',
                      }} />
                    </div>

                    {/* Horizontal plank divider line */}
                    <div style={{
                      position:'absolute', top:'50%', left:5, right:5,
                      height:'2px',
                      background:'rgba(0,0,0,0.20)',
                      transform:'translateY(-50%)',
                    }} />
                  </div>

                  {/* 3c. CHEST BOTTOM / BASE STRIP */}
                  <div style={{
                    width: '100%',
                    height: '12px',
                    background: WOOD_DARK,
                    border: `2px solid ${BORDER_COLOR}`,
                    borderTop: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                    zIndex: 20,
                  }} />

                  {/* 3d. GROUND SHADOW */}
                  <div aria-hidden="true" style={{
                    width: '85%', height: '18px',
                    margin: '6px auto 0',
                    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 70%)',
                    zIndex: 19,
                  }} />
                </div>

                {/* ── Floating Badges (outside the chest scene) ── */}
                {/* Stack badge — left */}
                <div style={{
                  position: 'absolute',
                  bottom: '120px',
                  left: '-20px',
                  background: 'var(--mc-surface)',
                  border: '1px solid rgba(98,184,20,0.4)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5), 0 0 12px rgba(98,184,20,0.15)',
                  padding: '8px 14px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  clipPath: 'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
                  zIndex: 30,
                }} aria-label="Tech stack: React, PHP, MySQL">
                  <PixelIcon name="code" style={{ fontSize: '1.1rem', color: 'var(--mc-green)' }} aria-hidden="true" />
                  <div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.55rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--mc-text-muted)' }}>Stack</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', fontWeight:700, color:'var(--mc-text)' }}>React · PHP · MySQL</div>
                  </div>
                </div>

                {/* Focus badge — right */}
                <div style={{
                  position: 'absolute',
                  top: '60px',
                  right: '-20px',
                  background: 'rgba(98,184,20,0.12)',
                  border: '1px solid var(--mc-green)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5), 0 0 12px rgba(98,184,20,0.25)',
                  padding: '8px 14px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  clipPath: 'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
                  zIndex: 30,
                }} aria-label="Focus: UI/UX Design">
                  <PixelIcon name="palette" style={{ fontSize: '1.1rem', color: 'var(--mc-gold)' }} aria-hidden="true" />
                  <div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.55rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--mc-green-bright)' }}>Focus</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', fontWeight:700, color:'var(--mc-text)' }}>UI / UX Design</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Scroll indicator */}
          <div ref={scrollIndicatorRef} style={{
            position: 'absolute', bottom: '24px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
            opacity: 0,
          }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--mc-text-muted)' }}>Scroll</span>
            <div style={{ width:'2px', height:'36px', background:'linear-gradient(to bottom, var(--mc-green), transparent)' }} />
          </div>
        </div>
      </section>
    </>
  );
}
