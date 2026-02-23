import { visionCards } from '../../data/missionData';
import './Vision.css';

export default function Vision() {
  return (
    <section className="vision-section" id="vision">
      <div className="vision-inner">
        <div className="vision-header reveal">
          <h2 className="vision-title">
            A Trusted Name <em>Across India</em>
          </h2>
          <p className="vision-desc">
            Our vision is to become a trusted and respected real estate brand known for
            transparency, quality, and sustainable growth across India. We aim to redefine
            the real estate experience by building spaces that offer not just physical value,
            but emotional trust and long-term returns for homeowners, investors, and partners.
          </p>
        </div>

        <div className="vision-cards">
          {visionCards.map((card, i) => (
            <div
              key={i}
              className="v-card reveal"
              style={{ transitionDelay: `${card.delay}s` }}
            >
              <div className="v-card-img">
                <img
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  width="700"
                  height="440"
                />
              </div>
              <div className="v-card-body">
                <div className="v-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
