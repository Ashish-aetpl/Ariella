import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-2xl font-bold text-blue-400">
                Ariella GenZ Innovations
              </h3>
            </div>
            <p className="text-gray-300 mb-4 text-justify">
              Technology-driven solutions for digital transformation, innovation, and sustainable growth.
            </p>
            <p className="text-gray-400 text-sm">
              Private Limited Company | Innovation & Technology Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/services/software-development" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/mobile-applications" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/web-solutions" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Web Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/ev-infrastructure" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  EV Infrastructure
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/digital-transformation" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Ariella GenZ Innovations Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
