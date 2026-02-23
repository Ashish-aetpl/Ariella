import { whatWeDoItems } from '../../data/servicesData';
import './WhatWeDo.css';

export default function WhatWeDo() {
  return (
    <section className="whatwedo-section" id="whatwedo">
      <div className="whatwedo-header reveal">
        <div>
          <p className="section-label">What We Do</p>
          <h2>Comprehensive <em>Solutions</em></h2>
        </div>
        <p>Dream Square operates across the real estate and construction spectrum, offering end-to-end solutions that include:</p>
      </div>

      <div className="whatwedo-list">
        {whatWeDoItems.map((item, i) => (
          <div
            key={i}
            className="w-item reveal"
            style={{ transitionDelay: `${item.delay}s` }}
          >
            <div className="w-letter">{item.letter}</div>
            <div className="w-text">{item.text}</div>
            <div className="w-arrow">→</div>
          </div>
        ))}
      </div>

      <div className="whatwedo-footer reveal">
        <p>
          Our approach emphasizes quality construction, efficient design, and practical layouts that maximize value for investors, homeowners, and business owners alike. We focus on creating assets that appreciate over time while maintaining functional excellence.
        </p>
      </div>
    </section>
  );
}
