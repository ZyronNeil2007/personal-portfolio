import React, { useState, useEffect, useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PixelIcon from './components/PixelIcon';
import Matter from 'matter-js';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import PremiumHero from './components/PremiumHero';
import Journey from './components/Journey';
import StickyScroll from './components/StickyScroll';


const PROJECTS = [
  {
    id: 1,
    title: 'BNHS Online Quiz Website',
    badge: 'FEATURED',
    rarity: 'featured',
    desc: 'A comprehensive online testing system featuring admin and student portals, complete with quiz management, interactive timers, results tracking, and an integrated feedback system.',
    details: 'This system was developed to help Grade 11 students at Barucboc National High School access and answer review quizzes online. It features real-time scoring, database storage of student records, and interactive performance charts for teachers.',
    tech: ['Web Dev', 'phpMyAdmin', 'Logic Design', 'MySQL', 'JavaScript'],
    categories: ['web-dev', 'logic'],
    image: '/image/quiz.png',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'School Platform',
    badge: 'FEATURED',
    rarity: 'featured',
    desc: 'Designed and developed a fully functional school website tailored for seamless user experience, administrative resource sharing, and accessibility.',
    details: 'A clean, modern platform designed for student informational needs. Includes glassmorphism cards, responsive menus, and light/dark theme adaptations to support accessible browsing.',
    tech: ['HTML', 'CSS', 'JS', 'UI/UX', 'Mobile Responsive'],
    categories: ['web-dev', 'layout-ui'],
    image: '/image/Frame 1.png',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Nephricarn Business',
    badge: 'PROJECT',
    rarity: 'project',
    desc: 'A creative food business concept offering premium burgers and healthy guava juice, tailored for student affordability, branding, and strategic market positioning.',
    details: 'Developed during high school business simulation. Focuses on local ingredient sourcing, optimized pricing structures, and student-focused social media marketing layouts.',
    tech: ['Business', 'Entrepreneurship', 'FoodService', 'Marketing'],
    categories: ['layout-ui', 'business'],
    image: '/image/coesbilog gin.png',
    github: null,
    demo: '#'
  },
  {
    id: 4,
    title: 'BNHS Study – Online Quiz Research',
    badge: 'EXPERIMENTAL',
    rarity: 'experimental',
    desc: 'An academic research study on the "Effectiveness of Online Quiz Website to Grade 11 Students". Evaluated impacts on student motivation, accessibility, and grades.',
    details: 'An empirical study that evaluated the quantitative learning outcomes and engagement metrics of Grade 11 students before and after deploying the BNHS Online Quiz System. Showed a 22% improvement in retention scores.',
    tech: ['Research', 'Academic', 'DataAnalysis', 'Education'],
    categories: ['research'],
    image: '/image/NOT_FINAL.jpg',
    github: null,
    demo: '#'
  },
  {
    id: 5,
    title: 'Layout & Design Portfolio',
    badge: 'PROJECT',
    rarity: 'project',
    desc: 'A curated collection of visual publications, custom school posters, event pubmats, and vector logos focused on visual hierarchy, balance, and branding.',
    details: 'Includes selected vector layouts, school publications, and award-winning posters designed for student organizations and graphic design contests.',
    tech: ['GraphicDesign', 'LayoutArtist', 'Branding', 'Creative'],
    categories: ['layout-ui'],
    image: '/image/Add a heading.png',
    github: null,
    demo: '#'
  },
  {
    id: 6,
    title: 'Research & Business Presentations',
    badge: 'EXPERIMENTAL',
    rarity: 'experimental',
    desc: 'Structured slides designed for professional academic defenses and investor business proposals, emphasizing typographic legibility and impactful slides.',
    details: 'Highly visual presentation slides built using key slide design principles: high contrast, zero-clutter layouts, graphic metaphors, and structured information grouping.',
    tech: ['Presentation', 'VisualDesign', 'Communication', 'Academic'],
    categories: ['presentation'],
    image: '/image/"One Year, One Vision, Endless Innovation".png',
    github: null,
    demo: '#'
  },
  {
    id: 7,
    title: 'Isabela-State-University_Cabagan',
    badge: 'FEATURED',
    rarity: 'featured',
    desc: 'Isabela State University Cabagan - ISU ID Issuance System',
    details: 'Fetched from recent GitHub repositories. An ISU ID Issuance System.',
    tech: ['CSS', 'Web Dev'],
    categories: ['web-dev'],
    image: 'https://opengraph.githubassets.com/1/ZyronNeil2007/Isabela-State-University_Cabagan',
    github: 'https://github.com/ZyronNeil2007/Isabela-State-University_Cabagan',
    demo: 'https://zyronneil2007.github.io/Isabela-State-University_Cabagan/'
  },
  {
    id: 8,
    title: 'ccsict-dp-blast',
    badge: 'FEATURED',
    rarity: 'featured',
    desc: 'CCSICT DP Blast Repository — built primarily with CSS.',
    details: 'Fetched from recent GitHub repositories. Built primarily with CSS.',
    tech: ['CSS', 'Web Dev'],
    categories: ['web-dev'],
    image: 'https://opengraph.githubassets.com/1/ZyronNeil2007/ccsict-dp-blast',
    github: 'https://github.com/ZyronNeil2007/ccsict-dp-blast',
    demo: 'http://ccsict.netlify.app/'
  },
  {
    id: 9,
    title: 'zyron-portfolio-v2',
    badge: 'FEATURED',
    rarity: 'featured',
    desc: 'Version 2 of my personal portfolio — built with React and modern web technologies.',
    details: 'Fetched from recent GitHub repositories. Built with modern web technologies.',
    tech: ['CSS', 'React'],
    categories: ['web-dev'],
    image: 'https://opengraph.githubassets.com/1/ZyronNeil2007/zyron-portfolio-v2',
    github: 'https://github.com/ZyronNeil2007/zyron-portfolio-v2',
    demo: '#'
  },
  {
    id: 10,
    title: 'personal-portfolio',
    badge: 'PROJECT',
    rarity: 'project',
    desc: 'Original personal portfolio repository.',
    details: 'Fetched from recent GitHub repositories.',
    tech: ['Web Dev'],
    categories: ['web-dev'],
    image: 'https://opengraph.githubassets.com/1/ZyronNeil2007/personal-portfolio',
    github: 'https://github.com/ZyronNeil2007/personal-portfolio',
    demo: '#'
  },
  {
    id: 11,
    title: 'csu-bscs-2020-notes',
    badge: 'EXPERIMENTAL',
    rarity: 'experimental',
    desc: 'Lecture notes for Cagayan State University BSCS 2020 curriculum.',
    details: 'Lecture notes for Cagayan State University Bachelor of Science in Computer Science 2020 curriculum.',
    tech: ['Notes', 'Markdown'],
    categories: ['research'],
    image: 'https://opengraph.githubassets.com/1/ZyronNeil2007/csu-bscs-2020-notes',
    github: 'https://github.com/ZyronNeil2007/csu-bscs-2020-notes',
    demo: '#'
  }
];

// Skills hotbar data
const SKILLS = [
  { name: 'HTML',   icon: 'code' },
  { name: 'CSS',    icon: 'brush' },
  { name: 'JS',     icon: 'zap' },
  { name: 'React',  icon: 'atom' },
  { name: 'Python', icon: 'snake' },
  { name: 'Java',   icon: 'coffee' },
  { name: 'C++',    icon: 'brackets' },
  { name: 'MySQL',  icon: 'database' },
  { name: 'Git',    icon: 'git-branch' },
  { name: 'Figma',  icon: 'edit' },
];

// Rarity styling helper
function rarityStyle(rarity) {
  if (rarity === 'featured') return { borderColor: 'var(--color-gold)', labelClass: 'slot-label slot-label-featured' };
  if (rarity === 'experimental') return { borderColor: 'var(--color-success)', labelClass: 'slot-label slot-label-experimental' };
  return { borderColor: 'var(--color-stone-muted)', labelClass: 'slot-label slot-label-project' };
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [antiGravityActive, setAntiGravityActive] = useState(false);

  // AOS & Scroll Spy
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });

    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'journey', 'projects', 'designs', 'contact'];
      const sectionEls = sectionIds.map(id => document.getElementById(id));
      let current = 'home';
      const halfHeight = window.innerHeight / 2;
      for (let i = 0; i < sectionEls.length; i++) {
        if (sectionEls[i] && sectionEls[i].getBoundingClientRect().top <= halfHeight) {
          current = sectionIds[i];
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Tilt Effect
  const handleTiltMouseMove = (e, el) => {
    if (!el || window.innerWidth < 768) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;
    el.style.transform = `perspective(800px) rotateX(${yPct * -8}deg) rotateY(${xPct * 8}deg) scale3d(1.01,1.01,1.01)`;
  };
  const handleTiltMouseLeave = (el) => {
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  };

  // Anti-Gravity Easter Egg
  const triggerAntiGravity = () => {
    if (antiGravityActive) return;
    setAntiGravityActive(true);
    document.body.style.overflow = 'hidden';
    const Engine = Matter.Engine, Runner = Matter.Runner, Bodies = Matter.Bodies,
      Composite = Matter.Composite, Mouse = Matter.Mouse, MouseConstraint = Matter.MouseConstraint, Events = Matter.Events;
    const engine = Engine.create();
    engine.gravity.y = -0.4;
    const width = window.innerWidth, height = window.innerHeight;
    const wallOptions = { isStatic: true, render: { visible: false } };
    Composite.add(engine.world, [
      Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions),
      Bodies.rectangle(width / 2, -50, width * 2, 100, wallOptions),
      Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions),
      Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions),
    ]);
    const targetElements = document.querySelectorAll('.bento-box, .inventory-slot, .tl-card, .frosted-tag');
    const physicsMap = [];
    const physicsContainer = document.createElement('div');
    Object.assign(physicsContainer.style, {
      position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
      pointerEvents: 'none', zIndex: '9000',
    });
    document.body.appendChild(physicsContainer);
    targetElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const clone = el.cloneNode(true);
      Object.assign(clone.style, {
        position: 'absolute', margin: '0', left: '0px', top: '0px',
        width: `${rect.width}px`, height: `${rect.height}px`,
        pointerEvents: 'auto', boxSizing: 'border-box', transition: 'none',
      });
      physicsContainer.appendChild(clone);
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
      const body = Bodies.rectangle(rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width, rect.height, {
        restitution: 0.6, friction: 0.1, frictionAir: 0.015,
      });
      Composite.add(engine.world, body);
      physicsMap.push({ dom: clone, body, width: rect.width, height: rect.height });
    });
    const mouse = Mouse.create(document.body);
    const mc = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.25, render: { visible: false } } });
    Composite.add(engine.world, mc);
    Events.on(engine, 'afterUpdate', () => {
      physicsMap.forEach((map) => {
        const { x, y } = map.body.position;
        const angle = map.body.angle;
        map.dom.style.transform = `translate(${x - map.width / 2}px, ${y - map.height / 2}px) rotate(${angle}rad)`;
      });
    });
    Runner.run(Runner.create(), engine);
  };

  let logoClickCount = 0, logoTimer = null;
  const handleLogoClick = () => {
    logoClickCount++;
    clearTimeout(logoTimer);
    if (logoClickCount === 3) { triggerAntiGravity(); logoClickCount = 0; }
    else { logoTimer = setTimeout(() => { logoClickCount = 0; }, 500); }
  };

  const filteredProjects = PROJECTS.filter(p => activeFilter === 'all' || p.categories.includes(activeFilter));

  return (
    <div className="app-container min-h-screen relative overflow-x-hidden">

      {/* Navbar */}
      <Navbar activeSection={activeSection} onLogoClick={handleLogoClick} />
      <MobileNavbar activeSection={activeSection} />

      {/* Sticky scroll intro */}
      <StickyScroll />

      {/* Welcome */}
      <section
        id="welcome"
        style={{
          minHeight: '100dvh', display: 'flex', alignItems: 'center',
          justifyContent: 'center', position: 'relative', zIndex: 10,
          textAlign: 'center', background: 'var(--color-parchment)',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-stone-muted)',
          margin: 0,
        }}>
          Welcome to my Portfolio Website
        </p>
      </section>

      <main className="relative w-full">

        {/* ── Hero ── */}
        <PremiumHero />

        {/* ═══════════════════════════════════════════════════════════════════
            ABOUT SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="about"
          aria-label="About Me"
          style={{
            background: 'var(--color-parchment)',
            padding: '5rem 0',
          }}
        >
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>

            {/* Header */}
            <div data-aos="fade-up" style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">Who I Am</span>
              <h2 className="section-title">About Me</h2>
              <div className="section-grass-bar" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">

              {/* Intro Box */}
              <div
                data-aos="fade-up"
                onMouseMove={(e) => handleTiltMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleTiltMouseLeave(e.currentTarget)}
                className="bento-box col-span-1 md:col-span-8"
                style={{ padding: '2rem' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-stone-ink)', marginBottom: '12px' }}>
                  Who I Am
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-stone-ink)', marginBottom: '12px', opacity: 0.85 }}>
                  I'm a passionate tech enthusiast pursuing my degree in Computer Science. I enjoy turning complex ideas into real, functional systems — whether it's a web application, a database-driven dashboard, or a creative UI.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-stone-ink)', opacity: 0.85, margin: 0 }}>
                  Outside of writing code, I enjoy design layouting, storytelling, and digital publications. My ultimate goal is to evolve as a versatile Software Engineer and continue crafting premium interfaces that combine speed with visual elegance.
                </p>
              </div>

              {/* What I Do */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                onMouseMove={(e) => handleTiltMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleTiltMouseLeave(e.currentTarget)}
                className="bento-box col-span-1 md:col-span-4"
                style={{ padding: '2rem' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-stone-ink)', marginBottom: '16px' }}>
                  What I Do
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { icon: 'code',     text: 'Develop web systems' },
                    { icon: 'palette',  text: 'Create visual layouts' },
                    { icon: 'terminal', text: 'Solve logic problems' },
                  ].map(({ icon, text }) => (
                    <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '32px', height: '32px', flexShrink: 0,
                        background: 'rgba(92,138,58,0.12)',
                        border: '2px solid var(--color-grass)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
                      }}>
                                                <PixelIcon name={icon} style={{ color: 'var(--color-grass-deep)', fontSize: '0.9rem' }} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-stone-ink)' }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Arsenal (Skills) */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="bento-box col-span-1 md:col-span-12"
                style={{ padding: '2rem' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-stone-ink)', marginBottom: '20px' }}>
                  Technical Arsenal
                </h3>

                {/* Hotbar row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      className="hotbar-slot"
                      title={skill.name}
                      role="img"
                      aria-label={skill.name}
                    >
                                            <PixelIcon name={skill.icon} style={{ fontSize: '1.3rem', color: 'var(--color-grass-deep)' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-stone-muted)' }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { label: 'Languages', items: [{ n: 'Java', v: 75 }, { n: 'Python', v: 80 }, { n: 'C++', v: 65 }] },
                    { label: 'Web Dev', items: [{ n: 'HTML / CSS', v: 85 }, { n: 'JavaScript', v: 75 }, { n: 'React', v: 80 }] },
                    { label: 'Databases & Tools', items: [{ n: 'MySQL / phpMyAdmin', v: 70 }, { n: 'VS Code', v: 90 }, { n: 'Git / GitHub', v: 80 }] },
                    { label: 'Design', items: [{ n: 'Layout Design', v: 85 }, { n: 'Branding & Pubmats', v: 80 }, { n: 'UI Design', v: 75 }] },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-grass-deep)', marginBottom: '12px' }}>
                        {label}
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {items.map(({ n, v }) => (
                          <div key={n}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-stone-ink)', marginBottom: '4px' }}>
                              <span>{n}</span>
                              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-stone-muted)' }}>{v}%</span>
                            </div>
                            <div style={{ width: '100%', height: '6px', background: 'rgba(146,142,134,0.2)', border: '1px solid var(--color-stone-muted)' }}>
                              <div style={{ width: `${v}%`, height: '100%', background: 'linear-gradient(to right, var(--color-grass-deep), var(--color-grass))', transition: 'width 1s ease' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Behind the Code */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bento-box col-span-1 md:col-span-12"
                style={{ padding: '2rem' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-stone-ink)', marginBottom: '16px' }}>
                  Behind the Code
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[
                    { emoji: '☕', text: 'Loves coffee & chill coding' },
                    { emoji: '🎮', text: 'Plays Minecraft' },
                    { emoji: '🎞️', text: 'Enjoys movies, anime & BL' },
                    { emoji: '🎯', text: 'Detail-oriented & Creative' },
                  ].map(({ emoji, text }) => (
                    <div
                      key={text}
                      className="pixel-tag"
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.8rem',
                        gap: '6px',
                        color: 'var(--color-stone-ink)',
                        borderColor: 'var(--color-stone-muted)',
                        fontFamily: 'var(--font-body)',
                        clipPath: 'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <span>{emoji}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <Journey />

        {/* ═══════════════════════════════════════════════════════════════════
            PROJECTS — INVENTORY GRID (SIGNATURE)
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="projects"
          aria-label="Selected Work — Inventory"
          style={{ background: 'var(--color-parchment)', padding: '5rem 0' }}
        >
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>

            {/* Header */}
            <div data-aos="fade-up" style={{ marginBottom: '2rem' }}>
              <span className="section-label">Inventory</span>
              <h2 className="section-title">Selected Work</h2>
              <div className="section-grass-bar" />
            </div>

            {/* Legend */}
            <div data-aos="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-stone-muted)' }}>Rarity:</span>
              <span className="slot-label slot-label-featured">FEATURED</span>
              <span className="slot-label slot-label-project">PROJECT</span>
              <span className="slot-label slot-label-experimental">EXPERIMENTAL</span>
            </div>

            {/* Filter Pills */}
            <div data-aos="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {[
                { label: 'All', value: 'all' },
                { label: 'Web Dev', value: 'web-dev' },
                { label: 'Layout & UI', value: 'layout-ui' },
                { label: 'Logic', value: 'logic' },
                { label: 'Research', value: 'research' },
                { label: 'Business', value: 'business' },
                { label: 'Presentation', value: 'presentation' },
              ].map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`filter-pill${activeFilter === filter.value ? ' active' : ''}`}
                  aria-pressed={activeFilter === filter.value}
                  id={`filter-${filter.value}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Inventory Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Project inventory"
            >
              {filteredProjects.map((project, idx) => {
                const { borderColor, labelClass } = rarityStyle(project.rarity);
                return (
                  <div
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={idx * 40}
                    onClick={() => setSelectedProject(project)}
                    className="inventory-slot group"
                    style={{ borderColor, cursor: 'pointer' }}
                    role="listitem"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
                    aria-label={`${project.title} — ${project.badge}`}
                  >
                    {/* Thumbnail */}
                    <div style={{ position: 'relative', width: '100%', paddingTop: '56%', overflow: 'hidden', background: 'rgba(146,142,134,0.12)' }}>
                      <img
                        src={project.image || '/image/quiz.png'}
                        alt={project.title}
                        className="slot-img"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          if (project.github && project.github !== '#') {
                            e.target.src = `https://opengraph.githubassets.com/1/${project.github.replace('https://github.com/', '')}`;
                          } else {
                            e.target.src = '/image/quiz.png';
                          }
                        }}
                      />
                      {/* Rarity label overlay */}
                      <div style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 5 }}>
                        <span className={labelClass}>{project.badge}</span>
                      </div>

                      {/* Action links */}
                      <div style={{ position: 'absolute', top: '8px', right: '8px', display: 'flex', gap: '6px', zIndex: 5 }}>
                        {project.github && project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              width: '28px', height: '28px',
                              background: 'var(--color-parchment)',
                              border: '2px solid var(--color-stone-ink)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: 'var(--color-stone-ink)', fontSize: '0.85rem',
                            }}
                            title="View Source"
                            aria-label={`${project.title} source code`}
                          >
                            <i className="ph ph-github-logo" />
                          </a>
                        )}
                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              width: '28px', height: '28px',
                              background: 'var(--color-grass-deep)',
                              border: '2px solid var(--color-stone-ink)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: 'var(--color-parchment)', fontSize: '0.85rem',
                            }}
                            title="Live Demo"
                            aria-label={`${project.title} live demo`}
                          >
                            <i className="ph ph-arrow-up-right" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: '14px 16px 16px' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-stone-ink)',
                        margin: '0 0 6px',
                        letterSpacing: '0.02em',
                      }}>
                        {project.title}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        color: 'var(--color-stone-muted)',
                        margin: '0 0 10px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {project.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="pixel-tag" style={{ fontSize: '0.65rem' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Hover tooltip */}
                    <div className="slot-tooltip" aria-hidden="true">
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', margin: '0 0 8px', lineHeight: 1.5 }}>
                        {project.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                        {project.tech.map(t => (
                          <span key={t} style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            padding: '2px 6px', border: '1px solid rgba(247,243,232,0.3)',
                            color: 'rgba(247,243,232,0.8)',
                          }}>{t}</span>
                        ))}
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.04em' }}>
                        View → (click)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            VISUAL DESIGN GALLERY
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="designs"
          aria-label="Visual Design Gallery"
          className="sky-section"
          style={{ padding: '5rem 0' }}
        >
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>
            <div data-aos="fade-up" style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">Portfolio</span>
              <h2 className="section-title">Visual Design</h2>
              <div className="section-grass-bar" />
            </div>

            <div data-aos="fade-up" className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
              {[
                { src: '/image/quiz.png', alt: 'BNHS Online Quiz Cover Mockup' },
                { src: '/image/NOT_FINAL.jpg', alt: 'Creative Visual Design Layout' },
                { src: '/image/get_ready.jpg', alt: 'Branding Poster Campaign' },
                { src: '/image/me_booth.jpg', alt: 'Zyron Neil - Portrait Event Capture' },
                { src: '/image/Araw ng Bading.jpg', alt: 'Araw ng Bading Pubmat' },
                { src: '/image/Heroes Day.jpg', alt: 'Heroes Day Pubmat' },
                { src: '/image/National Press.jpg', alt: 'National Press Pubmat' },
                { src: '/image/PAWWARAGI- Spornnts.png', alt: 'PAWWARAGI Sports Pubmat' },
                { src: '/image/Sports Pubmat.png', alt: 'Sports Pubmat' },
                { src: '/image/coesbilog gin.png', alt: 'Coesbilog Gin Poster' },
                { src: '/image/teachers day.png', alt: 'Teachers Day Pubmat' },
                { src: '/image/"One Year, One Vision, Endless Innovation".png', alt: 'One Year, One Vision Poster' },
                { src: '/image/Add a heading.png', alt: 'Heading Design' },
                { src: '/image/bitch.png', alt: 'Creative Design' },
                { src: '/image/out of idea bitch.png', alt: 'Out of Idea Design' },
              ].map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(img)}
                  className="masonry-img-item break-inside-avoid cursor-pointer group select-none"
                  style={{ marginBottom: '16px' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover"
                    style={{
                      display: 'block',
                      transition: 'filter 0.2s ease',
                    }}
                    loading="lazy"
                    onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CONTACT
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="contact"
          aria-label="Contact"
          style={{ background: 'var(--color-parchment)', padding: '6rem 0', textAlign: 'center' }}
        >
          <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px' }}>

            {/* Icon */}
            <div
              data-aos="zoom-in"
              style={{
                display: 'inline-flex', width: '56px', height: '56px',
                border: '3px solid var(--color-stone-ink)',
                boxShadow: 'var(--shadow-pixel-md)',
                alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-grass-deep)',
                background: 'var(--color-parchment)',
                marginBottom: '24px',
                fontSize: '1.5rem',
                clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
              }}
            >
              <i className="ph ph-envelope" aria-hidden="true" />
            </div>

            <h2
              data-aos="fade-up"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: 'var(--color-stone-ink)',
                margin: '0 0 16px',
                lineHeight: 1.2,
              }}
            >
              Let's build something{' '}
              <span style={{ color: 'var(--color-grass-deep)' }}>great.</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--color-stone-ink)',
                opacity: 0.8,
                maxWidth: '44ch',
                margin: '0 auto 32px',
              }}
            >
              I'm always open to learning new things, collaborating, and building projects that make an impact. Let's get in touch.
            </p>

            <div data-aos="fade-up" data-aos-delay="200">
              <a
                href="mailto:zyronneilbautista10@gmail.com"
                className="btn-pixel btn-pixel-primary"
                id="contact-say-hello"
                style={{ fontSize: '1rem', padding: '14px 32px' }}
              >
                Say Hello
                <i className="ph ph-arrow-up-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer style={{ padding: '3rem 0' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-grass-deep)', letterSpacing: '0.04em' }}>ZN</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-stone-muted)' }}>
              Zyron Neil
            </span>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-stone-muted)', letterSpacing: '0.06em', margin: 0 }}>
            © {new Date().getFullYear()} Designed &amp; Developed by Zyron Neil.
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
                            { href: 'mailto:zyronneilbautista10@gmail.com', icon: 'mail',      label: 'Email' },
              { href: 'https://www.facebook.com/share/18ZFsaeo4S/', icon: 'facebook',  label: 'Facebook' },
              { href: 'https://www.instagram.com/zyronnei10/', icon: 'instagram', label: 'Instagram' },
              { href: 'https://www.tiktok.com/@zyron_neil',   icon: 'tiktok',    label: 'TikTok' },
              { href: 'https://github.com/ZyronNeil2007',      icon: 'github',    label: 'GitHub' },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`${social.label} — Zyron Neil`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn-44"
              >
                                <PixelIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Project Detail Modal ── */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 1200,
            background: 'rgba(61,59,56,0.88)',
            backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--color-parchment)',
              border: `3px solid ${rarityStyle(selectedProject.rarity).borderColor}`,
              boxShadow: '6px 6px 0 var(--color-stone-ink)',
              width: '100%', maxWidth: '600px',
              maxHeight: '88vh', overflowY: 'auto',
              padding: '0',
              clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '50%', overflow: 'hidden', background: 'rgba(146,142,134,0.2)' }}>
              <img
                src={selectedProject.image || '/image/quiz.png'}
                alt={selectedProject.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                onError={(e) => { e.target.onerror = null; e.target.src = '/image/quiz.png'; }}
              />
            </div>

            <div style={{ padding: '24px' }}>
              {/* Close */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4px' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: '36px', height: '36px', border: '2px solid var(--color-stone-ink)',
                    background: 'var(--color-parchment)', color: 'var(--color-stone-ink)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem',
                    clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
                  }}
                  aria-label="Close project details"
                >
                                    <PixelIcon name="close" />
                </button>
              </div>

              <span className={rarityStyle(selectedProject.rarity).labelClass} style={{ marginBottom: '10px', display: 'inline-block' }}>
                {selectedProject.badge}
              </span>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-stone-ink)', margin: '0 0 12px' }}>
                {selectedProject.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {selectedProject.tech.map(t => <span key={t} className="pixel-tag pixel-tag-grass">{t}</span>)}
              </div>

              <div style={{ height: '2px', background: 'var(--color-stone-muted)', marginBottom: '16px', opacity: 0.3 }} />

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-stone-ink)', marginBottom: '16px' }}>
                {selectedProject.desc}
              </p>

              <div style={{
                background: 'rgba(92,138,58,0.08)', border: '2px solid var(--color-grass)',
                padding: '14px 18px', marginBottom: '20px',
              }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-grass-deep)', marginBottom: '8px' }}>
                  Deep Dive & Impact
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-stone-ink)', margin: 0, opacity: 0.85 }}>
                  {selectedProject.details}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {selectedProject.github && selectedProject.github !== '#' && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                                         className="btn-pixel btn-pixel-secondary" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                    <PixelIcon name="github" style={{ marginRight: '6px' }} /> Source Code
                  </a>
                )}
                {selectedProject.demo && selectedProject.demo !== '#' && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                                        className="btn-pixel btn-pixel-primary" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                    <PixelIcon name="arrow-up-right" style={{ marginRight: '6px' }} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1200,
            background: 'rgba(61,59,56,0.94)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px', cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              width: '40px', height: '40px',
              background: 'var(--color-parchment)', border: '2px solid var(--color-stone-ink)',
              color: 'var(--color-stone-ink)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
            }}
            aria-label="Close image lightbox"
          >
                        <PixelIcon name="close" />
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '90vw', maxHeight: '85vh' }}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              style={{
                maxWidth: '100%', maxHeight: '75vh',
                objectFit: 'contain',
                border: '3px solid var(--color-stone-muted)',
                boxShadow: '6px 6px 0 var(--color-stone-ink)',
                clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
              }}
            />
            <p style={{
              marginTop: '12px', fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-parchment)', opacity: 0.7,
            }}>
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
