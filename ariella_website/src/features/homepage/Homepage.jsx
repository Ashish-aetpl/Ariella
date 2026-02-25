import HeroSection from './components/HeroSection';
import CompanyIntroduction from './components/CompanyIntroduction';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  return (
    <div>
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
