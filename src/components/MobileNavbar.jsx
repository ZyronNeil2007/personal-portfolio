import React, { useState } from 'react';
import './MobileNavbar.css';
import PixelIcon from './PixelIcon';

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
            <PixelIcon name="home" />
            <span>Home</span>
          </a>
          <a href="#about" className={`apple-nav-link ${activeSection === 'about' ? 'active' : ''}`} aria-label="About">
            <PixelIcon name="user" />
            <span>About</span>
          </a>
          <a href="#projects" className={`apple-nav-link ${activeSection === 'projects' ? 'active' : ''}`} aria-label="Projects">
            <PixelIcon name="layers" />
            <span>Work</span>
          </a>
          <a href="#designs" className={`apple-nav-link ${activeSection === 'designs' ? 'active' : ''}`} aria-label="Visual Design Gallery">
            <PixelIcon name="images" />
            <span>Designs</span>
          </a>
          <a href="#contact" className={`apple-nav-link ${activeSection === 'contact' ? 'active' : ''}`} aria-label="Contact">
            <PixelIcon name="mail" />
            <span>Contact</span>
          </a>
        </div>
                <button className="nav-fab" onMouseMove={handleMouseMove} aria-label="Search">
          <PixelIcon name="search" />
        </button>
      </div>
    </div>
  );
}
