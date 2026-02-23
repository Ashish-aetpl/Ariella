import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="logo">Dream<span>Square</span></a>
        <ul className="nav-links">
          <li><a href="#philosophy">About</a></li>
          <li><a href="#gallery">Projects</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#contact" className="nav-cta">Contact Us</a></li>
        </ul>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#philosophy" onClick={closeMobile}>About</a>
        <a href="#gallery"    onClick={closeMobile}>Projects</a>
        <a href="#vision"     onClick={closeMobile}>Vision</a>
        <a href="#mission"    onClick={closeMobile}>Mission</a>
        <a href="#contact"    onClick={closeMobile}>Contact</a>
      </div>
    </>
  );
}
