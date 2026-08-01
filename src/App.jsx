import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Matter from 'matter-js';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import PremiumHero from './components/PremiumHero';
import Journey from './components/Journey';


const PROJECTS = [
  {
    id: 1,
    title: 'BNHS Online Quiz Website',
    badge: 'Project 1',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    desc: 'A comprehensive online testing system featuring admin and student portals, complete with quiz management, interactive timers, results tracking, and an integrated feedback system.',
    details: 'This system was developed to help Grade 11 students at Barucboc National High School access and answer review quizzes online. It features real-time scoring, database storage of student records, and interactive performance charts for teachers.',
    tech: ['Web Dev', 'phpMyAdmin', 'Logic Design', 'MySQL', 'JavaScript'],
    categories: ['web-dev', 'logic'],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'School Platform',
    badge: 'Project 2',
    badgeColor: 'bg-neutral-500/10 text-neutral-300 border-neutral-500/20',
    desc: 'Designed and developed a fully functional school website tailored for seamless user experience, administrative resource sharing, and accessibility.',
    details: 'A clean, modern platform designed for student informational needs. Includes squircle glassmorphism cards, responsive menus, and light/dark theme adaptations to support accessible browsing.',
    tech: ['HTML', 'CSS', 'JS', 'UI/UX', 'Mobile Responsive'],
    categories: ['web-dev', 'layout-ui'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Nephricarn Business',
    badge: '🍔 Business',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    desc: 'A creative food business concept offering premium burgers and healthy guava juice, tailored for student affordability, branding, and strategic market positioning.',
    details: 'Developed during high school business simulation. Focuses on local ingredient sourcing, optimized pricing structures, and student-focused social media marketing layouts.',
    tech: ['#Business', '#Entrepreneurship', '#FoodService', '#Marketing'],
    categories: ['layout-ui', 'business'],
    github: null,
    demo: '#'
  },
  {
    id: 4,
    title: 'BNHS Study – Online Quiz Research',
    badge: '📊 Research',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    desc: 'An academic research study titled "Effectiveness of Online Quiz Website to Grade 11 Students". Evaluated impacts on student motivation, accessibility, and grades.',
    details: 'An empirical study that evaluated the quantitative learning outcomes and engagement metrics of Grade 11 students before and after deploying the BNHS Online Quiz System. Showed a 22% improvement in retention scores.',
    tech: ['#Research', '#Academic', '#DataAnalysis', '#Education'],
    categories: ['research'],
    github: null,
    demo: '#'
  },
  {
    id: 5,
    title: 'Layout & Design Portfolio',
    badge: '🎨 Design',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    desc: 'A curated collection of visual publications, custom school posters, event pubmats, and vector logos focused on visual hierarchy, balance, and branding.',
    details: 'Includes selected vector layouts, school publications, and award-winning posters designed for student organizations and graphic design contests.',
    tech: ['#GraphicDesign', '#LayoutArtist', '#Branding', '#Creative'],
    categories: ['layout-ui'],
    github: null,
    demo: '#'
  },
  {
    id: 6,
    title: 'Research & Business Presentations',
    badge: '📑 Presentation',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    desc: 'Structured slides designed for professional academic defenses and investor business proposals, emphasizing typographic legibility and impactful slides.',
    details: 'Highly visual presentation slides built using key slide design principles: high contrast, zero-clutter layouts, graphic metaphors, and structured information grouping.',
    tech: ['#Presentation', '#VisualDesign', '#Communication', '#Academic'],
    categories: ['presentation'],
    github: null,
    demo: '#'
  },
  {
    id: 7,
    title: 'Isabela-State-University_Cabagan',
    badge: '💻 GitHub Repo',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    desc: 'Isabela State University Cabagan - ISU ID Issuance System',
    details: 'Fetched from recent GitHub repositories. An ISU ID Issuance System.',
    tech: ['CSS', 'Web Dev'],
    categories: ['web-dev'],
    github: 'https://github.com/ZyronNeil2007/Isabela-State-University_Cabagan',
    demo: 'https://zyronneil2007.github.io/Isabela-State-University_Cabagan/'
  },
  {
    id: 8,
    title: 'ccsict-dp-blast',
    badge: '💻 GitHub Repo',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    desc: 'CCSICT DP Blast Repository',
    details: 'Fetched from recent GitHub repositories. Built primarily with CSS.',
    tech: ['CSS', 'Web Dev'],
    categories: ['web-dev'],
    github: 'https://github.com/ZyronNeil2007/ccsict-dp-blast',
    demo: 'http://ccsict.netlify.app/'
  },
  {
    id: 9,
    title: 'zyron-portfolio-v2',
    badge: '💻 GitHub Repo',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    desc: 'Version 2 of my personal portfolio',
    details: 'Fetched from recent GitHub repositories. Built with modern web technologies.',
    tech: ['CSS', 'React'],
    categories: ['web-dev'],
    github: 'https://github.com/ZyronNeil2007/zyron-portfolio-v2',
    demo: '#'
  },
  {
    id: 10,
    title: 'personal-portfolio',
    badge: '💻 GitHub Repo',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    desc: 'Original personal portfolio repository',
    details: 'Fetched from recent GitHub repositories.',
    tech: ['Web Dev'],
    categories: ['web-dev'],
    github: 'https://github.com/ZyronNeil2007/personal-portfolio',
    demo: '#'
  },
  {
    id: 11,
    title: 'csu-bscs-2020-notes',
    badge: '📝 GitHub Repo',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    desc: 'Lecture notes for Cagayan State University BSCS 2020 curriculum.',
    details: 'Lecture notes for Cagayan State University Bachelor of Science in Computer Science 2020 curriculum.',
    tech: ['Notes', 'Markdown'],
    categories: ['research'],
    github: 'https://github.com/ZyronNeil2007/csu-bscs-2020-notes',
    demo: '#'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [antiGravityActive, setAntiGravityActive] = useState(false);

  // Always dark mode
  useEffect(() => {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }, []);

  // AOS & Scroll Spy Setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Global mousemove tracking to feed --mouse-x and --mouse-y properties to all liquid-glass elements
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      // Find the nearest ancestor with class "liquid-glass"
      const target = e.target.closest('.liquid-glass');
      if (target) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  // 3D Tilt Effect on mouse moves
  const handleTiltMouseMove = (e, el) => {
    if (window.innerWidth < 768) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;
    const rotateY = xPct * 14;
    const rotateX = yPct * -14;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleTiltMouseLeave = (el) => {
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  // Anti-Gravity Physics Simulator Easter Egg (Matter.js)
  const triggerAntiGravity = () => {
    if (antiGravityActive) return;
    setAntiGravityActive(true);

    // Disable standard document scroll to trap floating elements
    document.body.style.overflow = 'hidden';

    // Module aliases
    const Engine = Matter.Engine,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events;

    const engine = Engine.create();
    const world = engine.world;

    // Set reverse gravity (items float upwards!)
    engine.gravity.y = -0.4;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create boundaries
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -50, width * 2, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);

    Composite.add(world, [ground, ceiling, leftWall, rightWall]);

    // Gather elements to drop into physics
    const targetElements = document.querySelectorAll('.bento-box, .project-card, .timeline-item, .frosted-tag');
    const physicsMap = [];

    // Create a container covering the viewport for floating boxes
    const physicsContainer = document.createElement('div');
    physicsContainer.style.position = 'fixed';
    physicsContainer.style.top = '0';
    physicsContainer.style.left = '0';
    physicsContainer.style.width = '100vw';
    physicsContainer.style.height = '100vh';
    physicsContainer.style.pointerEvents = 'none';
    physicsContainer.style.zIndex = '9000';
    document.body.appendChild(physicsContainer);

    targetElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const clone = el.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.margin = '0';
      clone.style.left = '0px';
      clone.style.top = '0px';
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.pointerEvents = 'auto';
      clone.style.boxSizing = 'border-box';
      clone.style.transition = 'none';
      clone.classList.remove('tilt-element');
      clone.classList.remove('scroll-reveal');

      physicsContainer.appendChild(clone);

      // Hide original DOM element
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';

      // Create Matter physics box
      const body = Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        {
          restitution: 0.65,
          friction: 0.1,
          frictionAir: 0.015
        }
      );

      Composite.add(world, body);
      physicsMap.push({ dom: clone, body: body, width: rect.width, height: rect.height });
    });

    // Mouse drag interaction
    const mouse = Mouse.create(document.body);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.25,
        render: { visible: false }
      }
    });
    Composite.add(world, mouseConstraint);

    // Sync positions
    Events.on(engine, 'afterUpdate', () => {
      physicsMap.forEach((map) => {
        const pos = map.body.position;
        const angle = map.body.angle;
        const x = pos.x - map.width / 2;
        const y = pos.y - map.height / 2;
        map.dom.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
      });
    });

    Runner.run(Runner.create(), engine);

    // Dynamic shift of glows
    const bgGlows = document.querySelectorAll('.bg-glow');
    bgGlows.forEach(glow => {
      glow.style.filter = 'hue-rotate(180deg) blur(36px)';
    });
  };

  // Logo 3-click trigger logic
  let logoClickCount = 0;
  let logoTimer = null;
  const handleLogoClick = () => {
    logoClickCount++;
    clearTimeout(logoTimer);

    if (logoClickCount === 3) {
      triggerAntiGravity();
      logoClickCount = 0;
    } else {
      logoTimer = setTimeout(() => {
        logoClickCount = 0;
      }, 500);
    }
  };

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <div className="app-container min-h-screen relative font-sans overflow-x-hidden">

      {/* Background Ambient Glows */}
      <div className="bg-glow glow-1 fixed top-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none z-0 bg-cyan-900/10 blur-[80px]"></div>
      <div className="bg-glow glow-2 fixed bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none z-0 bg-blue-900/10 blur-[90px]"></div>
      <div className="bg-glow glow-3 fixed top-[40%] right-[10%] w-[30vw] h-[30vw] rounded-full pointer-events-none z-0 bg-indigo-900/5 blur-[70px]"></div>

      {/* Floating Header Navbar */}
      <Navbar
        activeSection={activeSection}
        onLogoClick={handleLogoClick}
      />

      {/* Floating Mobile Navbar (renders on mobile screens only via CSS media queries) */}
      <MobileNavbar activeSection={activeSection} />



      <main className="relative z-10 w-full">
        {/* Cinematic Premium Hero Section */}
        <PremiumHero />

        {/* Bento About Section */}
        <section id="about" aria-label="About Me" className="py-20 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16 border-b border-white/5 pb-6">
            <h2 data-aos="fade-up" className="text-4xl font-light uppercase tracking-tight text-white">About Me</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent hidden md:block ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            {/* Intro Box */}
            <div
              data-aos="fade-up"
              onMouseMove={(e) => handleTiltMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleTiltMouseLeave(e.currentTarget)}
              className="bento-box intro-box col-span-1 md:col-span-8 liquid-glass p-8 md:p-10 select-none cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Who I Am</h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-4">
                  I'm a passionate tech enthusiast pursuing my degree in Computer Science. I enjoy turning complex ideas into real, functional systems — whether it's a web application, a database-driven dashboard, or a creative UI.
                </p>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Outside of writing code, I enjoy design layouting, storytelling, and digital publications. My ultimate goal is to evolve as a versatile Software Engineer and continue crafting premium interfaces that combine speed with visual elegance.
                </p>
              </div>
            </div>

            {/* What I Do Box */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              onMouseMove={(e) => handleTiltMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleTiltMouseLeave(e.currentTarget)}
              className="bento-box col-span-1 md:col-span-4 liquid-glass p-8 select-none cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-6">What I Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cyan-400 bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 160H40V56h176v144Zm-16-48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-300">Develop web systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cyan-400 bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-300">Create visual layouts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cyan-400 bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-300">Solve logic problems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Box */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bento-box col-span-1 md:col-span-12 liquid-glass p-8 md:p-10 select-none"
            >
              <h3 className="text-xl font-bold text-white mb-8">Technical Arsenal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Prog */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>Java</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>Python</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>C++</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '65%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Web Development</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>HTML / CSS</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>JavaScript</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>Tailwind CSS</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '90%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Databases & Tools</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>MySQL / phpMyAdmin</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '70%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>VS Code</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '90%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>Git / GitHub</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '80%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Design</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>Layout Design</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>Branding & Pubmats</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-neutral-300">
                        <span>UI Design</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Fun Facts Box */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bento-box col-span-1 md:col-span-12 liquid-glass p-8 md:p-10 select-none"
            >
              <h3 className="text-xl font-bold text-white mb-6">Behind the Code</h3>
              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 text-sm text-neutral-300">
                  <span>☕</span>
                  <span>Loves coffee &amp; chill coding</span>
                </div>
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 text-sm text-neutral-300">
                  <span>🎮</span>
                  <span>Plays Minecraft</span>
                </div>
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 text-sm text-neutral-300">
                  <span>🎞️</span>
                  <span>Enjoys movies, anime &amp; BL</span>
                </div>
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 text-sm text-neutral-300">
                  <span>🎯</span>
                  <span>Detail-oriented &amp; Creative</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Journey Timeline Section */}
        <Journey />

        {/* Selected Projects Section */}
        <section id="projects" aria-label="Selected Work" className="py-20 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 border-b border-white/5 pb-6">
            <h2 data-aos="fade-up" className="text-4xl font-light uppercase tracking-tight text-white">Selected Work</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent hidden md:block ml-8" />
          </div>

          {/* Project Filtering Pills — min 44px touch height via filter-pill class */}
          <div data-aos="fade-up" className="flex flex-wrap gap-2.5 mb-10">
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
                className={`filter-pill px-5 py-3 text-xs font-semibold rounded-full border transition-all duration-300 active:scale-95 ${activeFilter === filter.value
                    ? 'bg-cyan-500 border-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                  }`}
                aria-pressed={activeFilter === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                onClick={() => setSelectedProject(project)}
                onMouseMove={(e) => handleTiltMouseMove(e, e.currentTarget.querySelector('.project-card-inner'))}
                onMouseLeave={(e) => handleTiltMouseLeave(e.currentTarget.querySelector('.project-card-inner'))}
                className="project-card group cursor-pointer"
              >
                <div className="project-card-inner h-full liquid-glass p-6 md:p-8 select-none flex flex-col justify-between transition-transform duration-300">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                      <div className="flex items-center gap-3 text-neutral-400">
                        {project.github && project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-white hover:scale-110 transition-all z-10" title="View Source">
                            <i className="ph ph-github-logo text-xl"></i>
                          </a>
                        )}
                        {project.demo && project.demo !== '#' && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-white hover:scale-110 transition-all z-10" title="Live Demo">
                            <i className="ph ph-arrow-up-right text-xl"></i>
                          </a>
                        )}
                        {(!project.github || project.github === '#') && (!project.demo || project.demo === '#') && (
                          <span className="group-hover:text-cyan-400 transition-colors">
                            <i className="ph ph-arrow-up-right text-xl"></i>
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 3).map(t => (
                      <span
                        key={t}
                        className="liquid-glass-tag"
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          padding: '3px 7px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Design Gallery Section */}
        <section id="designs" aria-label="Visual Design Gallery" className="py-20 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16 border-b border-white/5 pb-6">
            <h2 data-aos="fade-up" className="text-4xl font-light uppercase tracking-tight text-white">Visual Design</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent hidden md:block ml-8" />
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
              { src: '/image/“One Year, One Vision, Endless Innovation”.png', alt: 'One Year, One Vision Poster' },
              { src: '/image/Add a heading.png', alt: 'Heading Design' },
              { src: '/image/bitch.png', alt: 'Creative Design' },
              { src: '/image/out of idea bitch.png', alt: 'Out of Idea Design' }
            ].map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(img)}
                className="break-inside-avoid relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer shadow-lg group select-none transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-500"
                  loading="lazy"
                />
                {/* Hover overlay sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left pointer-events-none">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" aria-label="Contact" className="py-24 text-center max-w-3xl mx-auto px-6">
          <div data-aos="zoom-in" className="inline-flex w-16 h-16 rounded-3xl border border-white/10 bg-white/5 items-center justify-center text-cyan-400 shadow-2xl mb-8 transform hover:rotate-6 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm-12 16L128 126.83 44 64ZM32 176V78.13l90.34 67.76a8 8 0 0 0 9.6 0L224 78.13V176Z" />
            </svg>
          </div>

          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight">
            Let's build something <span className="text-cyan-400 font-extrabold drop-shadow-[0_0_12px_rgba(6,182,212,0.3)]">great.</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="100" className="text-neutral-400 font-light text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            I'm always open to learning new things, collaborating on complex web systems, and building beautiful visual architectures. Let's make something amazing.
          </p>

          <div data-aos="fade-up" data-aos-delay="200" className="flex justify-center">
            <a
              href="mailto:zyronneilbautista10@gmail.com"
              className="btn-primary large liquid-glass py-4 px-10 rounded-full font-bold text-sm bg-white text-black hover:bg-cyan-500 hover:text-black border border-white/10 shadow-2xl transition-all duration-300 transform active:scale-95 flex items-center gap-3"
            >
              <span>Say Hello</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                <path d="M220 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h168a12 12 0 0 1 12 12Z" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-black/40 backdrop-blur-md max-w-none">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="logo-box w-7 h-7 rounded-full overflow-hidden border border-white/10 flex items-center justify-center">
              <img src="/image/zb.svg" alt="Zyron Logo" className="logo-img w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-neutral-300 uppercase tracking-widest">Zyron Neil Bautista</span>
          </div>

          <p className="text-neutral-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Designed &amp; Developed by Zyron Neil.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { href: 'mailto:zyronneilbautista10@gmail.com', icon: 'envelope', label: 'Email' },
              { href: 'https://www.facebook.com/share/18ZFsaeo4S/', icon: 'facebook-logo', label: 'Facebook' },
              { href: 'https://www.instagram.com/zyronnei10/', icon: 'instagram-logo', label: 'Instagram' },
              { href: 'https://www.tiktok.com/@zyron_neil', icon: 'tiktok-logo', label: 'TikTok' },
              { href: 'https://github.com/ZyronNeil2007', icon: 'github-logo', label: 'GitHub' },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`${social.label} — Zyron Neil`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn-44 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 text-neutral-400 text-sm"
              >
                <i className={`ph ph-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 w-full h-full z-[1200] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            className="liquid-glass relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 border border-white/10 shadow-2xl select-none"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 flex items-center justify-center transition-all duration-300 transform active:scale-90"
              aria-label="Close Modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
              </svg>
            </button>

            <div className="pr-10">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block ${selectedProject.badgeColor}`}>
                {selectedProject.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tech.map(t => (
                  <span
                    key={t}
                    className="liquid-glass-tag"
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '3px 8px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="h-[1px] bg-white/5 w-full mb-6" />

              <p className="text-neutral-200 leading-relaxed font-normal mb-6 text-sm sm:text-base">
                {selectedProject.desc}
              </p>

              <div className="bg-white/5 border border-white/5 rounded-2xl p-5 mb-8">
                <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">Deep Dive & Impact</h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs font-semibold uppercase tracking-wider"
                  >
                    <i className="ph ph-github-logo text-sm"></i>
                    <span>Source Code</span>
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 transition-all duration-300 text-xs font-semibold uppercase tracking-wider"
                  >
                    <i className="ph ph-arrow-up-right text-sm"></i>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Masonry Lightbox Overlay */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 w-full h-full z-[1200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 flex items-center justify-center transition-all duration-300 transform active:scale-90"
            aria-label="Close Lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
            </svg>
          </button>

          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden flex flex-col items-center">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[75vh] rounded-2xl border border-white/10 shadow-2xl object-contain select-none"
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
