import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto text-justify">
          Let's collaborate to bring your vision to life with innovative technology solutions that drive growth and success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Get Started Today
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg"
          >
            Explore Our Work
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold mb-2">24-48 Hours</div>
            <div className="text-blue-100">Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Free</div>
            <div className="text-blue-100">Initial Consultation</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-blue-100">Dedicated Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
