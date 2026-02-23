import './Philosophy.css';

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="philosophy">
        <div className="philosophy-text reveal">
          <p className="section-label">Our Philosophy</p>
          <h2>More Than Structures —<br />We Build <em>Trust</em></h2>
          <p>
            At Dream Square, our philosophy is rooted in the belief that real estate is not just
            about creating physical spaces, but about shaping experiences, relationships, and
            lasting value. Guided by deep industry insight and a people-centric approach, we are
            committed to delivering reliable, value-driven real estate solutions.
          </p>
          <p>
            Our leadership seamlessly integrates technical expertise with structured management
            practices — ensuring disciplined project execution, clear communication, financial
            transparency, and adherence to timelines.
          </p>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Transparency</span>
            </div>
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">Pan</span>
              <span className="stat-label">India Presence</span>
            </div>
          </div>
        </div>

        <div className="philosophy-img reveal">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format&fit=crop"
            alt="Luxury residential building — Dream Square"
            loading="lazy"
            width="900"
            height="580"
          />
        </div>
      </div>
    </section>
  );
}
