import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="aboutus">
      <div className="aboutus">
        <div className="aboutus-text reveal">
          <p className="section-label">About Dream Square</p>
          <h2>Built on <em>Experience</em> & <em>Vision</em></h2>
          <p className='text-justify'>
            Dream Square is a professionally driven real estate and construction firm, built on a strong foundation of experience, integrity, and strategic vision. Established with the intent to redefine reliability and value in the real estate sector, Dream Square stands as a trusted name for clients seeking quality-driven, transparent, and future-ready developments.
          </p>
          <p>
            The company is founded by two visionary partners who bring together complementary strengths and deep domain expertise. One partner brings a strong background in Human Resources and organizational leadership, ensuring structured systems, people-centric processes, and ethical governance. The other partner is a seasoned builder and entrepreneur with over 15 years of hands-on experience in construction and real estate, contributing technical excellence, market understanding, and executional strength. This unique blend of leadership enables Dream Square to operate with precision, accountability, and long-term foresight.
          </p>
        </div>

        <div className="aboutus-img reveal">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop"
            alt="Dream Square leadership and team — Real estate excellence"
            loading="lazy"
            width="900"
            height="580"
          />
        </div>
      </div>
    </section>
  );
}
