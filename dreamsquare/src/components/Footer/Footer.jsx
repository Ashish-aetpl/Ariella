import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="footer-brand reveal">
          <h3>Dream<span>Square</span></h3>
          <p>Building trust, enduring relationships, and opportunities that create long-term value for all stakeholders across India.</p>
          <div className="socials">
            <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
            <a href="#" className="social-btn" aria-label="Instagram">IG</a>
            <a href="#" className="social-btn" aria-label="X / Twitter">𝕏</a>
            <a href="#" className="social-btn" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-col reveal">
          <h4>Navigate</h4>
          <ul>
            <li>About Us</li>
            <li>Our Vision</li>
            <li>Our Mission</li>
            <li>Projects</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col reveal">
          <h4>Connect</h4>
          <ul>
            <li>info@dreamsquare.in</li>
            <li>+91 98765 43210</li>
            <li style={{ marginTop: '16px', lineHeight: '1.8' }}>
              123, Business District,<br />
              Mumbai, Maharashtra,<br />
              India — 400001
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dream Square. All rights reserved.</span>
        <span>Building Trust · Creating Legacy</span>
      </div>
    </footer>
  );
}
