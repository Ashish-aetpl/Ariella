import SEO from '../../components/SEO';
import HeroSection from './components/HeroSection';
import CompanyIntroduction from './components/CompanyIntroduction';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://ariella.in/#webpage',
  url: 'https://ariella.in/',
  name: 'Ariella GenZ Innovations | AI, Software & Digital Transformation — India',
  description:
    "India's enterprise technology partner for AI & ML, software development, mobile apps, EV infrastructure, and government digital transformation.",
  isPartOf: { '@id': 'https://ariella.in/#website' },
  about: { '@id': 'https://ariella.in/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariella.in/' }],
  },
};

const Homepage = () => {
  return (
    <div>
      <SEO
        title="AI, Software & Digital Transformation — India"
        description="Ariella GenZ Innovations Pvt. Ltd. — India's enterprise technology partner for AI & ML, software development, mobile apps, EV infrastructure, cloud platforms, and government digital transformation. Get a free consultation today."
        canonical="/"
        structuredData={homepageStructuredData}
      />
      <HeroSection />
      <CompanyIntroduction />
      <ServicesOverview />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CallToAction />
    </div>
  );
};

export default Homepage;
