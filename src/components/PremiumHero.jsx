import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PremiumHero() {
  const containerRef = useRef(null);
  const topImageRef = useRef(null);
  const portalRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const descRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const statsRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const mask = useRef({ x: 0, y: 0, radius: 0, opacity: 0 });

  useEffect(() => {
    // Pulsing ambient glows
    gsap.to(glow1Ref.current, {
      scale: 1.2,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut'
    });
    gsap.to(glow2Ref.current, {
      scale: 1.15,
      duration: 7,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      delay: 1.5
    });

    // Staggered entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(glow1Ref.current, { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(glow2Ref.current, { opacity: 0 }, { opacity: 1, duration: 2 }, '-=1.5')
      .fromTo(line1Ref.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1 }, '-=0.6')
      .fromTo(line2Ref.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1 }, '-=0.75')
      .fromTo(line3Ref.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1 }, '-=0.75')
      .fromTo(descRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
      .fromTo(buttonGroupRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
      .fromTo(statsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo(
        portalRef.current,
        { opacity: 0, scale: 0.88, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'power3.out' },
        '-=1.4'
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      );

    // Continuous scroll indicator bounce
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      delay: 2.5
    });

    // Mouse-based image reveal mask
    const target = topImageRef.current;
    if (!target || !containerRef.current) return;

    const xTo = gsap.quickTo(mask.current, 'x', { duration: 0.4, ease: 'power2.out', onUpdate: applyMask });
    const yTo = gsap.quickTo(mask.current, 'y', { duration: 0.4, ease: 'power2.out', onUpdate: applyMask });
    const radiusTo = gsap.quickTo(mask.current, 'radius', { duration: 0.5, ease: 'power3.out', onUpdate: applyMask });
    const opacityTo = gsap.quickTo(mask.current, 'opacity', { duration: 0.6, ease: 'power2.inOut', onUpdate: applyMask });

    function applyMask() {
      if (!target) return;
      const gradient = `radial-gradient(circle ${mask.current.radius}px at ${mask.current.x}px ${mask.current.y}px, transparent 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,${mask.current.opacity}) 100%)`;
      target.style.maskImage = gradient;
      target.style.webkitMaskImage = gradient;
    }

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
    };
    const handleMouseEnter = () => { radiusTo(100); opacityTo(1); };
    const handleMouseLeave = () => {
      gsap.to(mask.current, { radius: 0, opacity: 0, duration: 0.8, ease: 'power3.inOut', onUpdate: applyMask });
    };
    const handlePortalEnter = () => radiusTo(260);
    const handlePortalLeave = () => radiusTo(100);

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);

    const portal = portalRef.current;
    if (portal) {
      portal.addEventListener('mouseenter', handlePortalEnter);
      portal.addEventListener('mouseleave', handlePortalLeave);
    }
    applyMask();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (portal) {
        portal.removeEventListener('mouseenter', handlePortalEnter);
        portal.removeEventListener('mouseleave', handlePortalLeave);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      aria-label="Hero - Introduction"
      className="relative min-h-dvh w-full overflow-hidden select-none"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {/* Cinematic Ambient Glows */}
      <div
        ref={glow1Ref}
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '-5%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(195,216,9,0.18) 0%, transparent 65%)',
          filter: 'blur(48px)',
          zIndex: 0,
        }}
      />
      <div
        ref={glow2Ref}
        className="absolute pointer-events-none"
        style={{
          bottom: '5%',
          right: '-8%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(154,171,7,0.15) 0%, transparent 65%)',
          filter: 'blur(52px)',
          zIndex: 0,
        }}
      />
      {/* Fine grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          opacity: 0.4,
        }}
      />

      {/* Main Content Grid */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
        style={{ zIndex: 10, paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center min-h-[80vh]">

          {/* ───────── LEFT: TEXT CONTENT ───────── */}
          <div className="col-span-1 md:col-span-6 lg:col-span-7 flex flex-col justify-center items-start text-left order-2 md:order-1 gap-6">



            {/* Main Heading — single h1 for correct heading hierarchy */}
            <div className="flex flex-col gap-0" style={{ lineHeight: 1.0 }}>
              <h1
                ref={line1Ref}
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: '1.05',
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0,
                }}
              >
                <span style={{ display: 'block', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontWeight: 300, letterSpacing: '0.01em', color: 'rgba(255,255,255,0.55)', marginBottom: '0.15em' }}>Hi, I’m</span>
                Zyron Neil.
              </h1>
              <h2
                ref={line3Ref}
                style={{
                  fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.15',
                  background: 'linear-gradient(135deg, #C3D809 0%, #9aab07 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginTop: '0.25rem',
                  margin: 0,
                }}
              >
                I blend code with design.
              </h2>
            </div>

            {/* Description */}
            <p
              ref={descRef}
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(203,213,225,0.85)',
                maxWidth: '42ch',
                marginTop: '0.25rem',
              }}
            >
              I build functional, scalable web systems while making them visually engaging.
              Technology should not only work well —&nbsp;
              <em style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>it should feel extraordinary.</em>
            </p>

            {/* Action Buttons */}
            <div ref={buttonGroupRef} className="flex flex-row flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 font-semibold transition-all duration-300 active:scale-95"
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #9aab07 100%)',
                  color: '#fff',
                  boxShadow: '0 0 24px rgba(195,216,9,0.3), 0 4px 16px rgba(0,0,0,0.2)',
                  border: 'none',
                }}
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="Contact me"
                className="group inline-flex items-center gap-2.5 font-medium transition-all duration-300 active:scale-95 hover:text-white"
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  letterSpacing: '0.02em',
                  color: 'rgba(203,213,225,0.85)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                Let's Talk
              </a>
            </div>

            {/* Stats Row */}
            <div ref={statsRef} className="flex items-center gap-6 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', width: '100%' }}>
              {[
                { value: '3+', label: 'Projects Built' },
                { value: '2+', label: 'Years Learning' },
                { value: '5+', label: 'Tech Stacks' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.9)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ───────── RIGHT: PORTRAIT CARD ───────── */}
          <div className="col-span-1 md:col-span-6 lg:col-span-5 flex justify-center md:justify-end items-center order-1 md:order-2">
            <div style={{ position: 'relative' }}>
              {/* Outer glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: '40px',
                  background: 'linear-gradient(135deg, rgba(195,216,9,0.4) 0%, rgba(154,171,7,0.4) 50%, transparent 100%)',
                  filter: 'blur(1px)',
                  zIndex: 0,
                }}
              />

              <div className="relative w-full max-w-[440px] aspect-[4/5] mx-auto group image-wrapper" style={{ zIndex: 1 }}>
                {/* Replicating the image-glow from my-portfolio */}
                <div
                  className="absolute inset-0 rounded-[3rem] transition-all duration-700 -z-10"
                  style={{
                    backgroundColor: 'var(--accent-glow)',
                    filter: 'blur(24px)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = 'blur(32px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = 'blur(24px)'; }}
                ></div>

                <div
                  ref={portalRef}
                  className="relative w-full h-full transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden"
                  style={{
                    borderRadius: '3rem',
                    border: '6px solid rgba(195,216,9,0.3)',
                    background: '#0f172a',
                  }}
                >
                  {/* Profile photo */}
                  <img
                    src="/image/me/me_uniform.png"
                    alt="Zyron Neil Bautista"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                </div>
              </div>

              {/* Floating tech badge — Stack (Phosphor icon replaces emoji) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '-30px',
                  background: 'rgba(15,23,42,0.75)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 40,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
                aria-label="Tech stack: React, PHP, MySQL"
              >
                <i className="ph ph-code" style={{ fontSize: '1.2rem', color: '#C3D809' }} aria-hidden="true"></i>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(148,163,184,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Stack</div>
                  <div style={{ fontSize: '0.78rem', color: '#fff', fontWeight: 600 }}>React · PHP · MySQL</div>
                </div>
              </div>

              {/* Floating tech badge — Focus (Phosphor icon replaces emoji) */}
              <div
                style={{
                  position: 'absolute',
                  top: '12%',
                  right: '-28px',
                  background: 'rgba(195,216,9,0.12)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(195,216,9,0.25)',
                  borderRadius: '14px',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 40,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
                aria-label="Focus area: UI/UX Design"
              >
                <i className="ph ph-paint-brush" style={{ fontSize: '1.2rem', color: '#C3D809' }} aria-hidden="true"></i>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(34,211,238,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Focus</div>
                  <div style={{ fontSize: '0.78rem', color: '#fff', fontWeight: 600 }}>UI / UX Design</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2"
          style={{ transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0 }}
        >
          <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', color: 'rgba(148,163,184,0.6)', textTransform: 'uppercase' }}>Scroll</span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(195,216,9,0.8), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
