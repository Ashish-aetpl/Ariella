import { commitmentCards } from '../../data/servicesData';
import './Commitment.css';

export default function Commitment() {
  return (
    <section className="commitment-section" id="commitment">
      <div className="commitment-inner">
        <div className="commitment-header reveal">
          <h2 className="commitment-title">
            Our <em>Commitment</em>
          </h2>
          <p className="commitment-desc">
            At Dream Square, commitment is not a statement—it is a practice embedded in every stage of our work. We are unwavering in our dedication to:
          </p>
        </div>

        <div className="commitment-cards">
          {commitmentCards.map((card, i) => (
            <div
              key={i}
              className="c-card reveal"
              style={{ transitionDelay: `${card.delay}s` }}
            >
              <div className="c-card-img">
                <img
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  width="700"
                  height="440"
                />
              </div>
              <div className="c-card-body">
                <div className="c-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="commitment-footer reveal">
          <p>
            We believe that trust is earned through consistent actions, not promises. Our focus on ethical operations and accountability has helped us build enduring relationships with clients, partners, vendors, and stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
