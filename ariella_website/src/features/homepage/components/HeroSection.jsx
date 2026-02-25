import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

const HeroSection = () => {
  const trustPoints = [
    'Ph.D.-led AI Practice',
    'Government & Enterprise Clients',
    'End-to-End Delivery',
    '24/7 Managed Support',
  ];

  const metrics = [
    { value: '10+', label: 'Core Services' },
    { value: '20+', label: 'AI Specialists' },
    { value: '24/7', label: 'Support' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #050d1f 0%, #0a1628 40%, #0f2040 70%, #1a3057 100%)',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.07] animate-blob"
        style={{ background: 'radial-gradient(circle, #1d6ce8, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] animate-blob animation-delay-2000"
        style={{ background: 'radial-gradient(circle, #00c2ff, transparent 70%)', transform: 'translate(30%, 30%)' }} />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-[0.04] animate-blob animation-delay-4000"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)', transform: 'translate(-50%, -50%)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-8 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
            <HiSparkles className="text-[#00c2ff] text-sm flex-shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-100">
              India's Next-Gen Technology Partner
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 animate-fadeInUp animation-delay-100"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            <span className="text-white">Enterprise AI &amp;</span>
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa 0%, #00c2ff 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Digital Transformation
            </span>
            <br />
            <span className="text-white">at Scale</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            Ariella GenZ Innovations delivers <strong className="text-white font-semibold">production-grade AI, software, EV infrastructure</strong> and
            full-stack digital solutions for enterprises, governments, and global organizations.
          </p>
        </div>

        {/* Trust checkmarks */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 animate-fadeInUp animation-delay-300">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-1.5 text-sm text-slate-300">
              <FiCheckCircle className="text-[#00c2ff] flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fadeInUp animation-delay-400">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-250 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #1d6ce8 0%, #0f4fa8 100%)',
              boxShadow: '0 6px 28px rgba(29,108,232,0.45)',
            }}
          >
            Get a Free Consultation
            <FiArrowRight />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/12 hover:border-white/50 transition-all duration-250 hover:-translate-y-1"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Metrics bar */}
        <div className="animate-fadeInUp animation-delay-500">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-200"
              >
                <span
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Sora, sans-serif',
                  }}
                >
                  {metric.value}
                </span>
                <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L360 40C720 0 1080 0 1440 40V80H0Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
