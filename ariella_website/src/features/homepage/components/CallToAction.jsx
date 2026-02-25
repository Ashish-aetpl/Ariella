import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiMail, FiCheckCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

const CallToAction = () => {
  const proofPoints = [
    { icon: FiCalendar, label: '24–48h', sub: 'First response guaranteed' },
    { icon: FiMail,     label: 'Free',   sub: 'Discovery consultation' },
    { icon: FiCheckCircle, label: '100%', sub: 'Dedicated account team' },
  ];

  const assurances = [
    'No commitment required for discovery call',
    'NDA signed on request before any discussion',
    'Fixed-price & milestone-based contracts available',
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050d1f 0%, #0a1628 45%, #1a3057 100%)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #1d6ce8, transparent 70%)', transform: 'translate(-30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #00c2ff, transparent 70%)', transform: 'translate(30%, 30%)' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <HiSparkles className="text-[#00c2ff] text-sm" />
          <span className="text-xs font-semibold tracking-widest text-blue-200 uppercase">
            Start Your Transformation Today
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Ready to Build Something{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #60a5fa 0%, #00c2ff 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            That Lasts?
          </span>
        </h2>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Whether you need an AI strategy, a production-grade platform, or a full digital transformation —
          let us start with a no-obligation discovery call.
        </p>

        {/* Assurance list */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
          {assurances.map((a, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm text-slate-300">
              <FiCheckCircle className="text-[#00c2ff] flex-shrink-0 text-xs" />
              {a}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base text-white transition-all duration-250 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #1d6ce8 0%, #0f4fa8 100%)',
              boxShadow: '0 6px 28px rgba(29,108,232,0.50)',
            }}
          >
            Book a Free Discovery Call
            <FiArrowRight />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-250 hover:-translate-y-1"
          >
            View Our Capabilities
          </Link>
        </div>

        {/* Proof bar */}
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {proofPoints.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 px-4 bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-[#1d6ce8]/20">
                <p.icon className="text-[#00c2ff] text-sm" />
              </div>
              <span
                className="text-2xl font-extrabold text-white mb-0.5"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {p.label}
              </span>
              <span className="text-xs text-slate-400 text-center">{p.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
