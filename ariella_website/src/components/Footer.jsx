import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Ariella GenZ Innovations
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-300 mb-6 text-justify leading-relaxed">
              Technology-driven solutions for digital transformation, innovation, and sustainable growth.
            </p>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <p className="text-gray-400 text-sm font-medium">
                Private Limited Company | Innovation & Technology Solutions
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  to="/services/software-development" 
                  className="group flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Software Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/mobile-applications" 
                  className="group flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/web-solutions" 
                  className="group flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Web Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/ev-infrastructure" 
                  className="group flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  EV Infrastructure
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/digital-transformation" 
                  className="group flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Ariella GenZ Innovations Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="text-gray-500 text-sm">in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
