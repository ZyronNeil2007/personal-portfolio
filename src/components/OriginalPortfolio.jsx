import React from 'react';

export default function OriginalPortfolio() {
    return (
        <>
            <!DOCTYPE html>
            <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Neil's Portfolio</title>
                    <meta name="description"
                        content="Portfolio of Zyron Neil Bautista — CS student and creative developer specializing in web systems and visual design.">
                        {/* Phosphor Icons */}
                        <script src="https://unpkg.com/@phosphor-icons/web"></script>
                        {/* SF Pro Fonts loaded via @font-face in style.css */}
                        <link rel="stylesheet" href="style.css" />
                        <link rel="icon" type="image/png" href="bronze-Photoroom.png" />
                </head>

                <body className="dark">
                    <div className="app-container">
                        {/* Background Ambient Glows */}
                        <div className="bg-glow glow-1"></div>
                        <div className="bg-glow glow-2"></div>
                        <div className="bg-glow glow-3"></div>

                        {/* Fading Blur Backdrop for Top Navbar */}
                        <div className="top-nav-backdrop"></div>

                        {/* Navbar */}
                        <nav id="navbar" className="liquid-glass">
                            <div className="nav-container">
                                <div className="logo-container">
                                    <img src="image/logo.png" alt="Zyron Logo" className="logo-img" />
                                    <span className="logo-text">Neil's Portfolio</span>
                                </div>

                                <div className="desktop-menu">
                                    <a href="#home" className="nav-link">Home</a>
                                    <a href="#about" className="nav-link">About</a>
                                    <a href="#projects" className="nav-link">Projects</a>
                                    <a href="#contact" className="nav-link">Contact</a>
                                </div>

                                <div className="nav-actions">
                                    <button id="theme-toggle" className="liquid-glass" aria-label="Toggle Theme">
                                        <i className="ph ph-moon" id="theme-icon"></i>
                                    </button>
                                    <a href="#contact" className="btn-primary desktop-only liquid-glass">Let's Talk</a>
                                </div>
                            </div>
                        </nav>

                        {/* Apple News+ Floating Bottom Nav (Mobile) */}
                        <div className="apple-nav-wrapper">
                            <div className="bottom-nav-backdrop"></div>
                            <div className="apple-bottom-nav">
                                <div className="nav-pill liquid-glass">
                                    <a href="#home" className="apple-nav-link active" data-target="home">
                                        <i className="ph ph-house"></i>
                                        <span>Home</span>
                                    </a>
                                    <a href="#about" className="apple-nav-link" data-target="about">
                                        <i className="ph ph-user"></i>
                                        <span>About</span>
                                    </a>
                                    <a href="#projects" className="apple-nav-link" data-target="projects">
                                        <i className="ph ph-stack"></i>
                                        <span>Projects</span>
                                    </a>
                                    <a href="#contact" className="apple-nav-link" data-target="contact">
                                        <i className="ph ph-envelope"></i>
                                        <span>Contact</span>
                                    </a>
                                </div>
                                <button className="nav-fab liquid-glass" aria-label="Search">
                                    <i className="ph ph-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>

                        <main>
                            {/* Hero Section */}
                            <section id="home" className="hero-section">
                                <div className="hero-content">
                                    <div className="text-column">
                                        <div className="frosted-tag liquid-glass">
                                            <i className="ph ph-sparkle"></i>
                                            <span>CS Student &amp; Creative Developer</span>
                                        </div>

                                        <h1 className="hero-title">
                                            <span className="line1" id="type-line1"></span><br className="desktop-break" />
                                            <span className="line2" id="type-line2"></span><br className="desktop-break" />
                                            <span className="line3" id="type-line3"></span>
                                        </h1>

                                        <p className="hero-desc">
                                            I specialize in building functional systems while making them visually engaging and
                                            user-friendly. I believe technology should not only work well but also feel good to use.
                                        </p>

                                        <div className="hero-buttons">
                                            <a href="#projects" className="btn-primary liquid-glass">
                                                View Projects <i className="ph ph-arrow-up-right"></i>
                                            </a>
                                            <a href="#about" className="btn-secondary liquid-glass">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    <div className="image-column">
                                        <div className="image-wrapper group">
                                            <div className="image-glow"></div>
                                            <div className="image-frame liquid-glass">
                                                <div className="image-container">
                                                    <img src="public/image/neil_god.png" alt="Zyron Neil Bautista" />
                                                </div>
                                            </div>
                                            <div className="floating-badge">
                                                <i className="ph ph-code"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* About Section */}
                            <section id="about" className="about-section">
                                <div className="section-header scroll-reveal up">
                                    <h2>About Me</h2>
                                    <div className="line"></div>
                                </div>

                                <div className="bento-grid">
                                    {/* Intro Box */}
                                    <div className="bento-box intro-box scroll-reveal up liquid-glass">
                                        <h3>Who I Am</h3>
                                        <p>I'm a passionate tech enthusiast pursuing my degree in Computer Science. I enjoy turning
                                            ideas into real, working systems — whether it's a quiz application, a functional website,
                                            or a creative layout.</p>
                                        <p>Outside coding, I'm someone who enjoys creativity, aesthetics, and storytelling. My
                                            ultimate goal is to become a software engineer and continue creating systems that make an
                                            impact.
                                        </p>
                                    </div>

                                    {/* What I Do Box */}
                                    <div className="bento-box what-i-do-box scroll-reveal up liquid-glass" style={{ "transitionDelay": "100ms" }}>
                                        <h3>What I Do</h3>
                                        <ul>
                                            <li>
                                                <div className="icon-box liquid-glass"><i className="ph ph-code"></i></div>
                                                <span>Develop web systems</span>
                                            </li>
                                            <li>
                                                <div className="icon-box liquid-glass"><i className="ph ph-palette"></i></div>
                                                <span>Create visual layouts</span>
                                            </li>
                                            <li>
                                                <div className="icon-box liquid-glass"><i className="ph ph-terminal"></i></div>
                                                <span>Solve logic problems</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Skills Box */}
                                    <div className="bento-box skills-box full-width scroll-reveal up liquid-glass"
                                        style={{ "transitionDelay": "200ms" }}>
                                        <h3>Technical Arsenal</h3>
                                        <div className="skills-grid">
                                            <div className="skill-category liquid-glass">
                                                <div className="skill-header">
                                                    <span className="icon-box liquid-glass"><i className="ph ph-terminal"></i></span>
                                                    <h4>Programming</h4>
                                                </div>
                                                <div className="skill-list">
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">Java</span>
                                                            <span className="skill-percent">75%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "75%", "transitionDelay": "300ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">Python</span>
                                                            <span className="skill-percent">80%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "80%", "transitionDelay": "400ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">C++</span>
                                                            <span className="skill-percent">65%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "65%", "transitionDelay": "500ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skill-category liquid-glass">
                                                <div className="skill-header">
                                                    <span className="icon-box liquid-glass"><i className="ph ph-monitor"></i></span>
                                                    <h4>Web Development</h4>
                                                </div>
                                                <div className="skill-list">
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">HTML</span>
                                                            <span className="skill-percent">80%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "80%", "transitionDelay": "350ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">CSS</span>
                                                            <span className="skill-percent">85%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "85%", "transitionDelay": "450ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">JavaScript</span>
                                                            <span className="skill-percent">75%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "75%", "transitionDelay": "550ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skill-category liquid-glass">
                                                <div className="skill-header">
                                                    <span className="icon-box liquid-glass"><i className="ph ph-code"></i></span>
                                                    <h4>Tools</h4>
                                                </div>
                                                <div className="skill-list">
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">phpMyAdmin</span>
                                                            <span className="skill-percent">70%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "70%", "transitionDelay": "400ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">VS Code</span>
                                                            <span className="skill-percent">90%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "90%", "transitionDelay": "500ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skill-category liquid-glass">
                                                <div className="skill-header">
                                                    <span className="icon-box liquid-glass"><i className="ph ph-palette"></i></span>
                                                    <h4>Design</h4>
                                                </div>
                                                <div className="skill-list">
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">Layouting</span>
                                                            <span className="skill-percent">85%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "85%", "transitionDelay": "450ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">Pubmats</span>
                                                            <span className="skill-percent">80%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "80%", "transitionDelay": "550ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skill-item">
                                                        <div className="skill-info">
                                                            <span className="skill-name">UI Design</span>
                                                            <span className="skill-percent">75%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ "width": "75%", "transitionDelay": "650ms" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fun Facts Box */}
                                    <div className="bento-box fun-facts-box full-width scroll-reveal up liquid-glass"
                                        style={{ "transitionDelay": "300ms" }}>
                                        <h3>Behind the Code</h3>
                                        <div className="facts-container">
                                            <div className="fact-pill liquid-glass">
                                                <i className="ph ph-coffee"></i>
                                                <span>Loves coffee &amp; chill coding</span>
                                            </div>
                                            <div className="fact-pill liquid-glass">
                                                <i className="ph ph-game-controller"></i>
                                                <span>Plays Minecraft</span>
                                            </div>
                                            <div className="fact-pill liquid-glass">
                                                <i className="ph ph-film-strip"></i>
                                                <span>Enjoys movies, anime &amp; BL</span>
                                            </div>
                                            <div className="fact-pill liquid-glass">
                                                <i className="ph ph-music-notes"></i>
                                                <span>Detail-oriented</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Journey / Timeline Section */}
                            <section id="journey" className="journey-section">
                                <div className="section-header scroll-reveal up">
                                    <h2>My Journey</h2>
                                    <div className="line"></div>
                                </div>

                                <div className="journey-intro scroll-reveal up" style={{ "transitionDelay": "80ms" }}>
                                    <div className="journey-eyebrow liquid-glass">
                                        <span className="journey-star">🌟</span>
                                        <span>From Passion to Profession</span>
                                    </div>
                                    <p>Every skill I have today started as curiosity. Here's the road that brought me here.</p>
                                </div>

                                <div className="timeline">
                                    {/* Vertical spine */}
                                    <div className="timeline-spine"></div>

                                    {/* 2026 */}
                                    <div className="timeline-item left scroll-reveal up" style={{ "transitionDelay": "0ms" }}>
                                        <div className="tl-dot">
                                            <span className="tl-dot-inner"></span>
                                        </div>
                                        <div className="tl-card liquid-glass">
                                            <div className="tl-year-badge accent liquid-glass">2026 - Present</div>
                                            <h3 className="tl-title">Dream in Progress</h3>
                                            <p className="tl-body">Now, as a Computer Science student, I'm finally pursuing what I truly
                                                love. I'm working with <strong>Python</strong> and data mining, along with <strong>Java
                                                    (OOP)</strong> and web development using <strong>HTML and CSS</strong>. Everything
                                                I've learned — from creativity to coding — is coming together. Becoming a software
                                                engineer, web developer, and app developer is no longer just a dream — it's something
                                                I'm actively building every day.</p>
                                            <div className="tl-tags">
                                                <span className="tl-tag liquid-glass">Python</span>
                                                <span className="tl-tag liquid-glass">Java OOP</span>
                                                <span className="tl-tag liquid-glass">Web Dev</span>
                                                <span className="tl-tag liquid-glass">Data Mining</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2025 */}
                                    <div className="timeline-item right scroll-reveal up" style={{ "transitionDelay": "100ms" }}>
                                        <div className="tl-dot">
                                            <span className="tl-dot-inner"></span>
                                        </div>
                                        <div className="tl-card liquid-glass">
                                            <div className="tl-year-badge liquid-glass">2025</div>
                                            <h3 className="tl-title">Expanding Technical Skills</h3>
                                            <p className="tl-body">I explored Computer Engineering concepts and worked with
                                                <strong>C++</strong>, which I really enjoyed as it deepened my understanding of
                                                programming logic and systems. This phase challenged me academically (especially
                                                Calculus 1), but it helped me grow discipline and problem-solving skills.
                                            </p>
                                            <div className="tl-tags">
                                                <span className="tl-tag liquid-glass">C++</span>
                                                <span className="tl-tag liquid-glass">Computer Engineering</span>
                                                <span className="tl-tag liquid-glass">Problem Solving</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2024 */}
                                    <div className="timeline-item left scroll-reveal up" style={{ "transitionDelay": "200ms" }}>
                                        <div className="tl-dot">
                                            <span className="tl-dot-inner"></span>
                                        </div>
                                        <div className="tl-card liquid-glass">
                                            <div className="tl-year-badge liquid-glass">2024</div>
                                            <h3 className="tl-title">Real-World Developer Era</h3>
                                            <p className="tl-body">I went deeper into <strong>.NET Programming NC III</strong>, working with
                                                HTML, CSS, JavaScript, GitHub, and databases. We developed multiple web-based systems
                                                that were actually implemented at Barucboc National High School, giving me real-world
                                                experience in building applications used by actual users.</p>
                                            <div className="tl-tags">
                                                <span className="tl-tag liquid-glass">.NET NC III</span>
                                                <span className="tl-tag liquid-glass">JavaScript</span>
                                                <span className="tl-tag liquid-glass">GitHub</span>
                                                <span className="tl-tag liquid-glass">Databases</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2023 */}
                                    <div className="timeline-item right scroll-reveal up" style={{ "transitionDelay": "300ms" }}>
                                        <div className="tl-dot">
                                            <span className="tl-dot-inner"></span>
                                        </div>
                                        <div className="tl-card liquid-glass">
                                            <div className="tl-year-badge liquid-glass">2023</div>
                                            <h3 className="tl-title">Peak Creativity & Programming Breakthrough</h3>
                                            <p className="tl-body">This was my prime editing era on TikTok, where my content gained strong
                                                engagement. At the same time, during Senior High School, I took <strong>Java Programming
                                                    NC II</strong> and developed multiple systems — realizing how much I enjoy coding.
                                                I
                                                was also introduced to HTML &amp; CSS, and I instantly loved it because it combined
                                                programming with design. From here, I started self-studying and taking development more
                                                seriously.</p>
                                            <div className="tl-tags">
                                                <span className="tl-tag liquid-glass">Java NC II</span>
                                                <span className="tl-tag liquid-glass">HTML &amp; CSS</span>
                                                <span className="tl-tag liquid-glass">TikTok Creator</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2022 */}
                                    <div className="timeline-item left scroll-reveal up" style={{ "transitionDelay": "400ms" }}>
                                        <div className="tl-dot">
                                            <span className="tl-dot-inner"></span>
                                        </div>
                                        <div className="tl-card liquid-glass">
                                            <div className="tl-year-badge liquid-glass">2022</div>
                                            <h3 className="tl-title">Creative Growth</h3>
                                            <p className="tl-body">My editing skills improved and I developed my abilities as a
                                                <strong>layout artist</strong>, creating posters and pubmats. I began to understand how
                                                design communicates ideas effectively.
                                            </p>
                                            <div className="tl-tags">
                                                <span className="tl-tag liquid-glass">Layout Artist</span>
                                                <span className="tl-tag liquid-glass">Pubmats</span>
                                                <span className="tl-tag liquid-glass">Visual Design</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2020 - 2021 */}
                                    <div className="timeline-item right scroll-reveal up" style={{ "transitionDelay": "500ms" }}>
                                        <div className="tl-dot">
                                            <span className="tl-dot-inner"></span>
                                        </div>
                                        <div className="tl-card liquid-glass">
                                            <div className="tl-year-badge liquid-glass">2020 - 2021</div>
                                            <h3 className="tl-title">Creative Exploration</h3>
                                            <p className="tl-body">I started creating <strong>anime edits</strong> using CapCut and Alight
                                                Motion, exploring storytelling through visuals, music, and timing. This is where I built
                                                my foundation in creativity.</p>
                                            <div className="tl-tags">
                                                <span className="tl-tag liquid-glass">CapCut</span>
                                                <span className="tl-tag liquid-glass">Alight Motion</span>
                                                <span className="tl-tag liquid-glass">Storytelling</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2019 */}
                                    <div className="timeline-item left scroll-reveal up" style={{ "transitionDelay": "600ms" }}>
                                        <div className="tl-dot accent-dot">
                                            <span className="tl-dot-inner"></span>
                                        </div>
                                        <div className="tl-card liquid-glass origin-card">
                                            <div className="tl-year-badge accent liquid-glass">2019 - Where It All Began</div>
                                            <h3 className="tl-title">The Spark</h3>
                                            <p className="tl-body">My programming journey started with <strong>Minecraft</strong>. Running
                                                servers, configuring plugins, and customizing gameplay sparked my curiosity about how
                                                code works behind the scenes. This was the beginning of everything.</p>
                                            <img src="image/minecraft_screenshot.jpg" alt="Minecraft Screenshot" className="liquid-glass"
                                                style={{ "width": "100%", "marginBottom": "1rem" }}>
                                                <div className="tl-tags">
                                                    <span className="tl-tag liquid-glass">Minecraft Servers</span>
                                                    <span className="tl-tag liquid-glass">Plugins</span>
                                                    <span className="tl-tag liquid-glass">Curiosity</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Projects Section */}
                            <section id="projects" className="projects-section">
                                <div className="section-header scroll-reveal up">
                                    <h2>Selected Work</h2>
                                    <div className="line"></div>
                                </div>

                                <div className="project-filters scroll-reveal up">
                                    <button className="filter-pill active liquid-glass" data-filter="all">All</button>
                                    <button className="filter-pill liquid-glass" data-filter="web-dev">Web Dev</button>
                                    <button className="filter-pill liquid-glass" data-filter="layout-ui">Layout &amp; UI</button>
                                    <button className="filter-pill liquid-glass" data-filter="logic">Logic/Software</button>
                                    <button className="filter-pill liquid-glass" data-filter="research">Research</button>
                                    <button className="filter-pill liquid-glass" data-filter="business">Business</button>
                                    <button className="filter-pill liquid-glass" data-filter="presentation">Presentation</button>
                                </div>

                                <div className="projects-grid">
                                    {/* Project 1 */}
                                    <div className="project-card scroll-reveal up" data-category="web-dev logic">
                                        <div className="card-content liquid-glass">
                                            <div className="card-header">
                                                <div className="project-badge yellow liquid-glass">Project 1</div>
                                                <div className="project-links">
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-github-logo"></i></a>
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-arrow-up-right"></i></a>
                                                </div>
                                            </div>
                                            <h3 className="project-title">BNHS Online Quiz Website</h3>
                                            <p className="project-desc">A comprehensive system featuring admin and student portals,
                                                complete with quiz management, results tracking, and a built-in feedback system.</p>
                                            <div className="project-tech">
                                                <span className="tech-tag liquid-glass">Web Dev</span>
                                                <span className="tech-tag liquid-glass">phpMyAdmin</span>
                                                <span className="tech-tag liquid-glass">Logic Design</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project 2 */}
                                    <div className="project-card scroll-reveal up" style={{ "transitionDelay": "150ms" }}
                                        data-category="web-dev layout-ui">
                                        <div className="card-content liquid-glass">
                                            <div className="card-header">
                                                <div className="project-badge neutral liquid-glass">Project 2</div>
                                                <div className="project-links">
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-github-logo"></i></a>
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-arrow-up-right"></i></a>
                                                </div>
                                            </div>
                                            <h3 className="project-title">School Platform</h3>
                                            <p className="project-desc">Designed and developed a fully functional school website
                                                tailored for seamless user experience and accessibility.</p>
                                            <div className="project-tech">
                                                <span className="tech-tag liquid-glass">HTML</span>
                                                <span className="tech-tag liquid-glass">CSS</span>
                                                <span className="tech-tag liquid-glass">JS</span>
                                                <span className="tech-tag liquid-glass">UI/UX</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project 3 */}
                                    <div className="project-card scroll-reveal up" style={{ "transitionDelay": "300ms" }}
                                        data-category="layout-ui business">
                                        <div className="card-content liquid-glass">
                                            <div className="card-header">
                                                <div className="project-badge neutral liquid-glass">🍔 Business</div>
                                                <div className="project-links">
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-arrow-up-right"></i></a>
                                                </div>
                                            </div>
                                            <h3 className="project-title">Nephricarn Business</h3>
                                            <p className="project-desc">A food business concept offering burgers and guava juice, designed
                                                to appeal to students with affordable pricing, branding strategy, and product
                                                positioning.</p>
                                            <div className="project-tech">
                                                <span className="tech-tag liquid-glass">#Business</span>
                                                <span className="tech-tag liquid-glass">#Entrepreneurship</span>
                                                <span className="tech-tag liquid-glass">#FoodService</span>
                                                <span className="tech-tag liquid-glass">#Marketing</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project 4 – Research */}
                                    <div className="project-card scroll-reveal up" style={{ "transitionDelay": "150ms" }}
                                        data-category="research">
                                        <div className="card-content liquid-glass">
                                            <div className="card-header">
                                                <div className="project-badge accent liquid-glass">📊 Research</div>
                                                <div className="project-links">
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-arrow-up-right"></i></a>
                                                </div>
                                            </div>
                                            <h3 className="project-title">BNHS Study – Online Quiz Research</h3>
                                            <p className="project-desc">A research study titled <em>"Effectiveness of Online Quiz Website to
                                                Grade 11 Students"</em>. Evaluated how an online quiz system impacts student learning,
                                                accessibility, and performance using structured data collection and analysis.</p>
                                            <div className="project-tech">
                                                <span className="tech-tag liquid-glass">#Research</span>
                                                <span className="tech-tag liquid-glass">#Academic</span>
                                                <span className="tech-tag liquid-glass">#DataAnalysis</span>
                                                <span className="tech-tag liquid-glass">#Education</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project 5 – Layout & Design */}
                                    <div className="project-card scroll-reveal up" style={{ "transitionDelay": "300ms" }}
                                        data-category="layout-ui">
                                        <div className="card-content liquid-glass">
                                            <div className="card-header">
                                                <div className="project-badge purple liquid-glass">🎨 Design</div>
                                                <div className="project-links">
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-arrow-up-right"></i></a>
                                                </div>
                                            </div>
                                            <h3 className="project-title">Layout &amp; Design Portfolio</h3>
                                            <p className="project-desc">A collection of creative works including posters, logos, and
                                                publication layouts. Experienced in visual hierarchy, typography, and branding through
                                                school publications and competitions.</p>
                                            <div className="project-tech">
                                                <span className="tech-tag liquid-glass">#GraphicDesign</span>
                                                <span className="tech-tag liquid-glass">#LayoutArtist</span>
                                                <span className="tech-tag liquid-glass">#Branding</span>
                                                <span className="tech-tag liquid-glass">#Creative</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project 6 – Presentation */}
                                    <div className="project-card scroll-reveal up" style={{ "transitionDelay": "450ms" }}
                                        data-category="presentation">
                                        <div className="card-content liquid-glass">
                                            <div className="card-header">
                                                <div className="project-badge green liquid-glass">📑 Presentation</div>
                                                <div className="project-links">
                                                    <a href="#" className="icon-link liquid-glass"><i className="ph ph-arrow-up-right"></i></a>
                                                </div>
                                            </div>
                                            <h3 className="project-title">Research &amp; Business Presentations</h3>
                                            <p className="project-desc">Designed and developed structured presentations for research defense
                                                and business proposals, focusing on clarity, visual appeal, and effective communication
                                                of ideas.</p>
                                            <div className="project-tech">
                                                <span className="tech-tag liquid-glass">#Presentation</span>
                                                <span className="tech-tag liquid-glass">#VisualDesign</span>
                                                <span className="tech-tag liquid-glass">#Communication</span>
                                                <span className="tech-tag liquid-glass">#Academic</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Visual Design Gallery */}
                            <section id="designs" className="gallery-section">
                                <div className="section-header scroll-reveal up">
                                    <h2>Visual Design</h2>
                                    <div className="line"></div>
                                </div>

                                <div className="masonry-grid scroll-reveal up">
                                    <div className="masonry-item liquid-glass"><img src="image/quiz.png" alt="Design 1" /></div>
                                    <div className="masonry-item liquid-glass"><img src="image/NOT_FINAL.jpg" alt="Design 2" /></div>
                                    <div className="masonry-item liquid-glass"><img src="image/get_ready.jpg" alt="Design 3" /></div>
                                    <div className="masonry-item liquid-glass"><img src="image/me_booth.jpg" alt="Design 4" /></div>
                                </div>
                            </section>

                            {/* Contact Section */}
                            <section id="contact" className="contact-section">
                                <div className="contact-icon-wrapper scroll-reveal scale liquid-glass">
                                    <i className="ph ph-envelope"></i>
                                </div>

                                <h2 className="contact-title scroll-reveal up" style={{ "transitionDelay": "100ms" }}>
                                    Let's build something <span className="highlight">great.</span>
                                </h2>

                                <p className="contact-desc scroll-reveal up" style={{ "transitionDelay": "200ms" }}>
                                    I'm always open to learning new things, collaborating, and building projects that make an impact.
                                    Let's get in touch.
                                </p>

                                <div className="scroll-reveal up" style={{ "transitionDelay": "300ms" }}>
                                    <a href="mailto:zyronneilbautista10@gmail.com" className="btn-primary large liquid-glass">
                                        Say Hello <i className="ph ph-arrow-up-right"></i>
                                    </a>
                                </div>
                            </section>
                        </main>

                        {/* Footer */}
                        <footer>
                            <div className="footer-container">
                                <div className="footer-logo">
                                    <img src="image/logo.png" alt="Zyron Logo" className="logo-img" />
                                    <span>Zyron Neil Bautista</span>
                                </div>

                                <p className="footer-text">
                                    © <span id="year"></span> Designed &amp; Developed by Zyron Neil.
                                </p>

                                <div className="social-links">
                                    <a href="mailto:zyronneilbautista10@gmail.com" aria-label="Email" className="icon-link liquid-glass"><i
                                        className="ph ph-envelope"></i></a>
                                    <a href="https://www.facebook.com/share/18ZFsaeo4S/" aria-label="Facebook"
                                        className="icon-link liquid-glass"><i className="ph ph-facebook-logo"></i></a>
                                    <a href="https://www.instagram.com/zyronnei10/" aria-label="Instagram"
                                        className="icon-link liquid-glass"><i className="ph ph-instagram-logo"></i></a>
                                    <a href="https://www.tiktok.com/@zyron_neil" aria-label="TikTok" className="icon-link liquid-glass"><i
                                        className="ph ph-tiktok-logo"></i></a>
                                    <a href="https://github.com/ZyronNeil2007" target="_blank" rel="noopener noreferrer"
                                        aria-label="GitHub" className="icon-link liquid-glass"><i className="ph ph-github-logo"></i></a>
                                </div>
                            </div>
                        </footer>
                        {/* Lightbox Overlay */}
                        <div id="lightbox" className="lightbox-overlay">
                            <button className="lightbox-close liquid-glass"><i className="ph ph-x"></i></button>
                            <img id="lightbox-img" src="" alt="Expanded Design" />
                        </div>

                        {/* Project Modal Overlay */}
                        <div id="project-modal" className="project-modal-overlay">
                            <div className="project-modal-content liquid-glass">
                                <button className="modal-close liquid-glass"><i className="ph ph-x"></i></button>
                                <div className="modal-body">
                                    <h3 id="modal-title">Project Title</h3>
                                    <div id="modal-tech" className="project-tech"></div>
                                    <p id="modal-desc" className="project-desc expanded-desc"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
                    <script src="script.js"></script>
                </body>

            </html>
        </>
    );
}
