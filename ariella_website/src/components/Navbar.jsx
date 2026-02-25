import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-slate-100'
          : 'bg-white border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <img
              src={logo}
              alt="Ariella GenZ Innovations"
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-[0.875rem] font-semibold tracking-wide transition-all duration-250 ${
                  isActive(item.path)
                    ? 'text-[#1d6ce8]'
                    : 'text-slate-600 hover:text-[#1d6ce8] hover:bg-blue-50'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#1d6ce8]" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1d6ce8] text-white text-[0.875rem] font-semibold shadow-[0_4px_16px_rgba(29,108,232,0.30)] hover:shadow-[0_6px_24px_rgba(29,108,232,0.45)] hover:-translate-y-0.5 transition-all duration-250"
            >
              Get a Free Quote
              <FiArrowRight className="text-sm" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-[#1d6ce8] hover:bg-blue-50 transition-all duration-250"
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 pt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`flex items-center px-4 py-3 rounded-xl text-[0.9375rem] font-semibold transition-all duration-250 animate-slideIn ${
                  isActive(item.path)
                    ? 'text-[#1d6ce8] bg-blue-50'
                    : 'text-slate-700 hover:text-[#1d6ce8] hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#1d6ce8] text-white text-[0.9375rem] font-semibold shadow-md"
              >
                Get a Free Quote
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
