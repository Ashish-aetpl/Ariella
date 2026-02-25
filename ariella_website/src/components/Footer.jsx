import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiGithub, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'AI & Machine Learning', path: '/services/ai-services' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Mobile Applications', path: '/services/mobile-applications' },
    { name: 'Web & Cloud Platforms', path: '/services/web-solutions' },
    { name: 'EV Infrastructure', path: '/services/ev-infrastructure' },
    { name: 'Digital Transformation', path: '/services/digital-transformation' },
  ];

  const contactInfo = [
    { icon: FiMail, label: 'info@ariella.in', href: 'mailto:info@ariella.in' },
    { icon: FiPhone, label: '+91 9891002709', href: 'tel:+919891002709' },
    { icon: FiMapPin, label: 'India', href: null },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(180deg, #050d1f 0%, #0a1628 100%)' }}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #1d6ce8 30%, #00c2ff 70%, transparent)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #1d6ce8, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1 – Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <div>
              <h3
                className="text-xl font-extrabold mb-1"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Ariella GenZ
              </h3>
              <p
                className="text-xs font-medium tracking-wider uppercase"
                style={{ color: '#1d6ce8' }}
              >
                Innovations Pvt. Ltd.
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              India's next-generation technology partner delivering AI, software, EV, and digital transformation
              solutions for enterprises and governments.
            </p>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border"
              style={{ borderColor: 'rgba(29,108,232,0.3)', color: '#60a5fa', background: 'rgba(29,108,232,0.08)' }}
            >
              🇮🇳 Proudly Built in India
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FiTwitter,  href: '#', label: 'Twitter' },
                { icon: FiGithub,   href: '#', label: 'GitHub' },
                { icon: FiMail,     href: 'mailto:contact@ariellagenz.com', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-[#1d6ce8] hover:bg-[#1d6ce8]/20 transition-all duration-200"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <FiArrowRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#1d6ce8]"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Services */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <FiArrowRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#1d6ce8]"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4 mb-6">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                    >
                      <item.icon size={14} className="mt-0.5 flex-shrink-0 text-[#1d6ce8] group-hover:text-[#00c2ff] transition-colors duration-200" />
                      {item.label}
                    </a>
                  ) : (
                    <div className="flex items-start gap-2.5 text-sm text-slate-400">
                      <item.icon size={14} className="mt-0.5 flex-shrink-0 text-[#1d6ce8]" />
                      {item.label}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-250 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #1d6ce8 0%, #0f4fa8 100%)',
                boxShadow: '0 4px 16px rgba(29,108,232,0.35)',
              }}
            >
              Start a Project
              <FiArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 Ariella GenZ Innovations Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
