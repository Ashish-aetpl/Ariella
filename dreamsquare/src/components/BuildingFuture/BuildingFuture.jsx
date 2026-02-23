import './BuildingFuture.css';

export default function BuildingFuture() {
  return (
    <section id="buildingfuture">
      <div className="buildingfuture">
        <div className="buildingfuture-img reveal">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop"
            alt="Modern sustainable architecture — Dream Square"
            loading="lazy"
            width="900"
            height="580"
          />
        </div>

        <div className="buildingfuture-text reveal">
          <p className="section-label">Building for the Future</p>
          <h2>Sustainable <em>Growth</em></h2>
          <p>
            Dream Square is driven by a long-term vision of sustainable growth and responsible development. We aim to create projects that are not only structurally sound and aesthetically appealing, but also environmentally conscious and socially responsible.
          </p>
          <p>
            By aligning innovation with practicality, and ambition with discipline, we continue to build spaces that support modern lifestyles and evolving business needs—while contributing positively to the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
