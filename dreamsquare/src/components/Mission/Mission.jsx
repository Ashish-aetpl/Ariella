import { missionItems } from '../../data/missionData';
import './Mission.css';

export default function Mission() {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-header reveal">
        <div>
          <p className="section-label">Our Mission</p>
          <h2>Guided by <em>Purpose</em></h2>
        </div>
        <p>Five pillars that define every decision we make, every project we build, and every relationship we nurture across India.</p>
      </div>

      <div className="mission-list">
        {missionItems.map((item, i) => (
          <div
            key={i}
            className="m-item reveal"
            style={{ transitionDelay: `${item.delay}s` }}
          >
            <div className="m-num">{item.num}</div>
            <div className="m-text">{item.text}</div>
            <div className="m-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
