import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ariella GenZ Innovations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Transforming Ideas into Digital Reality
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
            Technology-driven solutions for digital transformation, innovation, and sustainable growth in the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
