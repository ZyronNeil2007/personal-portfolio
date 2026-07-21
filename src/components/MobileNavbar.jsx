import React, { useState } from 'react';
import './MobileNavbar.css';

export default function MobileNavbar({ activeSection }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="apple-nav-wrapper">
      <div className="bottom-nav-backdrop"></div>
      <div className="apple-bottom-nav">
        <div className="nav-pill liquid-glass" onMouseMove={handleMouseMove}>
          <a href="#home" className={`apple-nav-link ${activeSection === 'home' ? 'active' : ''}`} aria-label="Home">
            <i className="ph ph-house"></i>
            <span>Home</span>
          </a>
          <a href="#about" className={`apple-nav-link ${activeSection === 'about' ? 'active' : ''}`} aria-label="About">
            <i className="ph ph-user"></i>
            <span>About</span>
          </a>
          <a href="#projects" className={`apple-nav-link ${activeSection === 'projects' ? 'active' : ''}`} aria-label="Projects">
            <i className="ph ph-stack"></i>
            <span>Work</span>
          </a>
          <a href="#designs" className={`apple-nav-link ${activeSection === 'designs' ? 'active' : ''}`} aria-label="Visual Design Gallery">
            <i className="ph ph-images"></i>
            <span>Designs</span>
          </a>
          <a href="#contact" className={`apple-nav-link ${activeSection === 'contact' ? 'active' : ''}`} aria-label="Contact">
            <i className="ph ph-envelope"></i>
            <span>Contact</span>
          </a>
        </div>
        <button className="nav-fab liquid-glass" onMouseMove={handleMouseMove} aria-label="Search">
          <i className="ph ph-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}
