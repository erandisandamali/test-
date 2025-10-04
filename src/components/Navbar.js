"use client";
import React, { useState } from 'react';
import './Navbar.css';

const scrollToSection = (id) => {
  const section = id === 'home' ? document.body : document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Erandi Sandamali</div>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
        <span className="navbar-toggle-bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><button className="navbar-link-btn" onClick={() => { scrollToSection('home'); setMenuOpen(false); }}>Home</button></li>
        <li><button className="navbar-link-btn" onClick={() => { scrollToSection('about'); setMenuOpen(false); }}>About</button></li>
        <li><button className="navbar-link-btn" onClick={() => { scrollToSection('projects'); setMenuOpen(false); }}>Projects</button></li>
        <li><button className="navbar-link-btn" onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}>Contact Me</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
