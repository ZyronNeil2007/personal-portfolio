import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import PixelIcon from './PixelIcon';

export default function Navbar({ activeSection, onLogoClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);
  const dot4Ref = useRef(null);
  const toggleTextRef = useRef(null);
  const mobileOverlayRef = useRef(null);

  const navItems = [
    { label: 'About',    href: '#about',    sectionId: 'about'    },
    { label: 'Journey',  href: '#journey',  sectionId: 'journey'  },
    { label: 'Projects', href: '#projects', sectionId: 'projects' },
    { label: 'Designs',  href: '#designs',  sectionId: 'designs'  },
    { label: 'Contact',  href: '#contact',  sectionId: 'contact'  },
  ];

  // Entrance animation on mount
  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  // Mobile overlay toggle
  useEffect(() => {
    const d1 = dot1Ref.current;
    const d2 = dot2Ref.current;
    const d3 = dot3Ref.current;
    const d4 = dot4Ref.current;
    const textEl = toggleTextRef.current;
    const overlay = mobileOverlayRef.current;

    if (!d1 || !d2 || !d3 || !d4) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      gsap.to(d1, { x: 3.5, y: 3.5, rotation: 45, width: 14, height: 1.5, borderRadius: '1px', duration: 0.35, ease: 'power3.out' });
      gsap.to(d4, { x: -3.5, y: -3.5, rotation: 45, width: 14, height: 1.5, borderRadius: '1px', duration: 0.35, ease: 'power3.out' });
      gsap.to(d2, { x: -3.5, y: 3.5, rotation: -45, width: 14, height: 1.5, borderRadius: '1px', duration: 0.35, ease: 'power3.out' });
      gsap.to(d3, { x: 3.5, y: -3.5, rotation: -45, width: 14, height: 1.5, borderRadius: '1px', duration: 0.35, ease: 'power3.out' });

      gsap.to(textEl, { opacity: 0, x: -8, duration: 0.12, onComplete: () => {
        textEl.innerText = 'CLOSE';
        gsap.to(textEl, { opacity: 1, x: 0, duration: 0.2, ease: 'power3.out' });
      }});

      gsap.fromTo(overlay,
        { opacity: 0, visibility: 'hidden' },
        { opacity: 1, visibility: 'visible', duration: 0.4, ease: 'power2.out' }
      );

      gsap.fromTo('.mobile-nav-link',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out', delay: 0.12 }
      );
    } else {
      document.body.style.overflow = '';

      gsap.to(d1, { x: 0, y: 0, rotation: 0, width: 6, height: 6, borderRadius: '50%', duration: 0.35, ease: 'power3.out' });
      gsap.to(d4, { x: 0, y: 0, rotation: 0, width: 6, height: 6, borderRadius: '50%', duration: 0.35, ease: 'power3.out' });
      gsap.to(d2, { x: 0, y: 0, rotation: 0, width: 6, height: 6, borderRadius: '50%', duration: 0.35, ease: 'power3.out' });
      gsap.to(d3, { x: 0, y: 0, rotation: 0, width: 6, height: 6, borderRadius: '50%', duration: 0.35, ease: 'power3.out' });

      gsap.to(textEl, { opacity: 0, x: 8, duration: 0.12, onComplete: () => {
        textEl.innerText = 'MENU';
        gsap.to(textEl, { opacity: 1, x: 0, duration: 0.2, ease: 'power3.out' });
      }});

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => { overlay.style.visibility = 'hidden'; }
      });
    }

    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleMobileLinkClick = (e, sectionId) => {
    setIsOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      e.preventDefault();
      setTimeout(() => { el.scrollIntoView({ behavior: 'smooth' }); }, 100);
    }
  };

  return (
    <>
      {/* ─── Desktop / Sticky Nav ─── */}
      <nav
        ref={navRef}
        className="pixel-nav"
        aria-label="Main navigation"
      >
        <div className="pixel-nav-inner">

          {/* ZN Monogram */}
          <a
            href="#home"
            onClick={onLogoClick}
            className="zn-monogram"
            aria-label="Zyron Neil — home"
          >
            ZN
          </a>

          {/* Center: Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link-pixel${isActive ? ' active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Let's Talk — bevel button (desktop) */}
            <a
              href="#contact"
              className="btn-pixel btn-pixel-primary hidden sm:inline-flex"
              style={{ padding: '8px 18px', fontSize: '0.8rem' }}
            >
              <PixelIcon name="mail" aria-hidden="true" style={{ marginRight: '6px' }} /> Let's Talk
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden items-center gap-2 px-3 py-2"
              style={{
                border: '2px solid var(--color-stone-muted)',
                background: 'transparent',
                cursor: 'pointer',
                clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span ref={dot1Ref} className="absolute left-[2px] top-[2px] w-1.5 h-1.5 rounded-full origin-center" style={{ background: 'var(--color-stone-ink)' }} />
                <span ref={dot2Ref} className="absolute right-[2px] top-[2px] w-1.5 h-1.5 rounded-full origin-center" style={{ background: 'var(--color-stone-ink)' }} />
                <span ref={dot3Ref} className="absolute left-[2px] bottom-[2px] w-1.5 h-1.5 rounded-full origin-center" style={{ background: 'var(--color-stone-ink)' }} />
                <span ref={dot4Ref} className="absolute right-[2px] bottom-[2px] w-1.5 h-1.5 rounded-full origin-center" style={{ background: 'var(--color-stone-ink)' }} />
              </div>
              <span
                ref={toggleTextRef}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--color-stone-muted)',
                  textTransform: 'uppercase',
                  width: '2.5rem',
                  textAlign: 'center',
                }}
              >
                MENU
              </span>
            </button>
          </div>

        </div>
      </nav>

      {/* ─── Mobile Fullscreen Overlay ─── */}
      <div
        ref={mobileOverlayRef}
        className="mobile-nav-overlay fixed inset-0 w-full h-full z-[990] flex items-center justify-center opacity-0 invisible"
        style={{ background: 'var(--color-parchment)' }}
        aria-hidden={!isOpen}
      >
        {/* Subtle pixel accent lines */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(to right, var(--color-grass), var(--color-dirt))',
        }} />

        <div className="relative z-10 flex flex-col items-center gap-8 w-full px-8 py-16">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMobileLinkClick(e, item.sectionId)}
                className={`mobile-nav-link text-4xl font-semibold uppercase tracking-wide transition-all duration-200${isActive ? ' active' : ''}`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.label}
              </a>
            );
          })}

          {/* Social icons */}
          <div className="flex gap-6 mt-8 mobile-nav-link opacity-0">
                          <a href="mailto:zyronneilbautista10@gmail.com" style={{ color: 'var(--color-stone-muted)' }} className="hover:text-grass transition-colors" aria-label="Email">
              <PixelIcon name="mail" />
            </a>
            <a href="https://github.com/ZyronNeil2007" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-stone-muted)' }} aria-label="GitHub">
              <PixelIcon name="github" />
            </a>
            <a href="https://www.instagram.com/zyronnei10/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-stone-muted)' }} aria-label="Instagram">
              <PixelIcon name="instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
