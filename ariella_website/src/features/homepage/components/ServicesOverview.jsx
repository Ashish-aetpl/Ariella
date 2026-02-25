import { Link } from 'react-router-dom';
import { FiCode, FiSmartphone, FiGlobe, FiZap, FiRefreshCw, FiCpu, FiArrowRight } from 'react-icons/fi';

const ServicesOverview = () => {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Production-grade AI engineering — from ML models and GenAI to LLM fine-tuning, RAG, and 24×7 managed AI services. Ph.D.-led practice.',
      icon: FiCpu,
      link: '/services/ai-services',
      accent: '#1d6ce8',
      bg: 'rgba(29,108,232,0.07)',
      tag: 'Flagship',
    },
    {
      title: 'Software Development',
      description: 'End-to-end custom software: architecture, development, QA, deployment, and lifetime maintenance for enterprise and startup scale.',
      icon: FiCode,
      link: '/services/software-development',
      accent: '#0ea5e9',
      bg: 'rgba(14,165,233,0.07)',
      tag: 'Core',
    },
    {
      title: 'Mobile Applications',
      description: 'Native iOS & Android, cross-platform React Native/Flutter apps with store optimization and long-term maintenance contracts.',
      icon: FiSmartphone,
      link: '/services/mobile-applications',
      accent: '#6366f1',
      bg: 'rgba(99,102,241,0.07)',
      tag: 'Core',
    },
    {
      title: 'Web & Cloud Platforms',
      description: 'Scalable web portals, SaaS platforms, and cloud-native architecture on AWS, Azure, and GCP with hybrid IT support.',
      icon: FiGlobe,
      link: '/services/web-solutions',
      accent: '#0891b2',
      bg: 'rgba(8,145,178,0.07)',
      tag: 'Core',
    },
    {
      title: 'EV Infrastructure',
      description: 'Smart EV charging platforms, IoT integration, energy management systems, and operations consultancy for the e-mobility sector.',
      icon: FiZap,
      link: '/services/ev-infrastructure',
      accent: '#f59e0b',
      bg: 'rgba(245,158,11,0.07)',
      tag: 'Emerging',
    },
    {
      title: 'Digital Transformation',
      description: 'IT strategy, enterprise architecture, system integration, and process automation that de-risk your modernization journey.',
      icon: FiRefreshCw,
      link: '/services/digital-transformation',
      accent: '#10b981',
      bg: 'rgba(16,185,129,0.07)',
      tag: 'Advisory',
    },
  ];

  const tagColors = {
    Flagship: { bg: 'rgba(29,108,232,0.10)', color: '#1d6ce8' },
    Core:     { bg: 'rgba(15,23,42,0.07)',    color: '#334155' },
    Emerging: { bg: 'rgba(245,158,11,0.10)', color: '#b45309' },
    Advisory: { bg: 'rgba(16,185,129,0.10)', color: '#047857' },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(29,108,232,0.04) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0,194,255,0.04) 0%, transparent 60%)',
        }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="section-label mb-4">What We Deliver</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}>
              Services Built for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #1d6ce8 0%, #00c2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Real Outcomes
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-base max-w-sm md:text-right">
            10+ specialized practices. One accountable delivery partner.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const tc = tagColors[service.tag];
            return (
              <Link
                key={index}
                to={service.link}
                className="group relative flex flex-col p-7 rounded-2xl border border-slate-100 bg-white hover:border-[#1d6ce8]/30 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }} />

                {/* Icon + Tag row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: service.bg }}
                  >
                    <service.icon style={{ color: service.accent, fontSize: '1.25rem' }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: tc.bg, color: tc.color }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#1d6ce8] transition-colors duration-250"
                  style={{ fontFamily: 'Sora, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>

                {/* Learn more */}
                <div className="flex items-center gap-1.5 text-[#1d6ce8] text-sm font-semibold">
                  <span>Learn more</span>
                  <FiArrowRight className="transition-transform duration-250 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div>
            <p className="font-semibold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
              Need something more specialized?
            </p>
            <p className="text-sm text-slate-500 mt-0.5">
              We offer 10+ services including IT infrastructure, government solutions, and project consultancy.
            </p>
          </div>
          <Link
            to="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1d6ce8] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(29,108,232,0.30)] hover:shadow-[0_6px_24px_rgba(29,108,232,0.45)] hover:-translate-y-0.5 transition-all duration-250"
          >
            View All Services
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
