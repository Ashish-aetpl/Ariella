import { useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const f = document.getElementById('heroIframe');
      if (f) f.classList.add('loaded');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-poster"></div>

      <div className="hero-video-wrap">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/aO_kPW39um8?si=RC5OhXabon453895&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Est. 2026 &nbsp;·&nbsp; India</p>
        <h1>Building Trust.<br />Creating <em>Legacy.</em></h1>
        <p className="hero-sub">
          We believe in building more than just structures — we build trust, enduring relationships,
          and opportunities that create long-term value for all stakeholders.
        </p>
        <div className="hero-cta">
          <a href="#vision"  className="btn-primary">Our Vision</a>
          <a href="#gallery" className="btn-outline">View Projects</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
