import { Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CompanyIntroduction from './components/CompanyIntroduction';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <CompanyIntroduction />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Homepage;
