import { FiShield, FiUsers, FiLayers, FiHeadphones, FiAward, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const differentiators = [
    {
      number: '01',
      icon: FiUsers,
      title: 'Ph.D.-Led AI Practice',
      description: 'Our 20+ AI team is led by PhD researchers — not just consultants. You get domain scientists who write production code, not slide decks.',
      proof: '20+ AI Specialists on staff',
      accent: '#1d6ce8',
    },
    {
      number: '02',
      icon: FiLayers,
      title: 'Full-Stack, Single Partner',
      description: 'Strategy, UX, engineering, QA, DevOps, MLOps — we own the entire stack. No handoff chaos, no scope gaps, no vendor finger-pointing.',
      proof: 'From ideation to production',
      accent: '#0ea5e9',
    },
    {
      number: '03',
      icon: FiShield,
      title: 'Government-Grade Security',
      description: 'Proven delivery for PSUs, central government, and regulated industries. Our architecture handles compliance, on-prem GenAI, and data sovereignty.',
      proof: 'Secure on-prem deployment available',
      accent: '#6366f1',
    },
    {
      number: '04',
      icon: FiAward,
      title: 'Outcome-Driven Contracts',
      description: 'We price and structure engagements around your business outcomes — not billable hours. Milestones, KPIs, and SLAs baked into every agreement.',
      proof: '100% client satisfaction record',
      accent: '#f59e0b',
    },
    {
      number: '05',
      icon: FiHeadphones,
      title: '24×7 Managed Support',
      description: 'Post-delivery is where most vendors disappear. We offer 24×7 NOC and AI managed services with defined SLAs — for as long as you need.',
      proof: 'Round-the-clock SLA coverage',
      accent: '#10b981',
    },
    {
      number: '06',
      icon: FiTrendingUp,
      title: 'Future-Proof Stack Choices',
      description: 'We build on open, portable architectures — AWS, Azure, GCP, on-prem, and hybrid. No lock-in. Your systems scale with your ambition.',
      proof: 'Multi-cloud & on-prem expertise',
      accent: '#ec4899',
    },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
      {/* Decorative element */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #1d6ce8 0, #1d6ce8 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #1d6ce8 0, #1d6ce8 1px, transparent 1px, transparent 80px)',
        }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + intro row */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="section-label mb-4">Why Ariella GenZ</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}>
              The Partner That{' '}
              <span style={{
                background: 'linear-gradient(135deg, #1d6ce8 0%, #00c2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Ships
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Technology vendors are everywhere. Partners that understand your business, architect for scale, and take
              accountability for results — are rare. That is what Ariella GenZ is built to be.
            </p>
          </div>

          {/* Summary stat block */}
          <div
            className="rounded-2xl p-8 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #050d1f 0%, #0f2040 100%)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.06]"
              style={{ background: 'radial-gradient(circle, #00c2ff, transparent 70%)', transform: 'translate(30%, -30%)' }} />
            <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wide">Our promise</p>
            <blockquote className="text-xl font-semibold leading-snug mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
              "We don't walk away after go-live. We own outcomes, manage risks, and grow with your business."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1d6ce8]/30">
                <FiAward className="text-[#00c2ff] text-sm" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ariella GenZ Leadership</p>
                <p className="text-xs text-slate-400">Ariella GenZ Innovations Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              {/* Number + Icon */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: item.accent }}
                >
                  {item.number}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.accent}12` }}
                >
                  <item.icon style={{ color: item.accent, fontSize: '1.125rem' }} />
                </div>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>

              {/* Proof badge */}
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: `${item.accent}10`, color: item.accent }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="5" fill={item.accent} fillOpacity="0.2" />
                  <path d="M3 5l1.5 1.5L7 3" stroke={item.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.proof}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-[#1d6ce8] font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            See how we work
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
