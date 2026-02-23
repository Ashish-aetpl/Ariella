import './Philosophy.css';

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="philosophy">
        <div className="philosophy-text reveal">
          <p className="section-label">Our Philosophy</p>
          <h2>More Than Structures —<br />We Build <em>Trust</em></h2>
          <p>
            At Dream Square, our promise defines who we are and guides every project we undertake,
            today and in the years to come. Every brick laid is a testament to our commitment to
            transparency and integrity.
          </p>
          <p>
            We aim to redefine the real estate experience by building spaces that offer not just
            physical value, but emotional trust and long-term returns for homeowners, investors,
            and partners across India.
          </p>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Transparency</span>
            </div>
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Years Vision</span>
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
