import { FiTarget, FiGlobe, FiCpu, FiTrendingUp } from 'react-icons/fi';

const CompanyIntroduction = () => {
  const pillars = [
    {
      icon: FiCpu,
      title: 'AI-First Engineering',
      description:
        'Backed by a Ph.D.-led team and 20+ AI specialists, we build production-grade ML, GenAI, and LLM solutions that go live — not just proofs of concept.',
      accent: '#1d6ce8',
      bg: 'rgba(29,108,232,0.06)',
    },
    {
      icon: FiGlobe,
      title: 'Enterprise & Government Scale',
      description:
        'From central government PSUs to Fortune-class enterprises and international organizations, our solutions are architected for compliance, security, and scale.',
      accent: '#0ea5e9',
      bg: 'rgba(14,165,233,0.06)',
    },
    {
      icon: FiTarget,
      title: 'Full-Lifecycle Ownership',
      description:
        'We own your project end-to-end: strategy, architecture, development, deployment, and 24×7 managed support — with a single accountable partner.',
      accent: '#6366f1',
      bg: 'rgba(99,102,241,0.06)',
    },
    {
      icon: FiTrendingUp,
      title: 'Sustainable Growth Focus',
      description:
        'Built for the long run — our EV, IoT, and sustainability-tech portfolios position your business at the frontier of tomorrow\'s industries today.',
      accent: '#10b981',
      bg: 'rgba(16,185,129,0.06)',
    },
  ];

  const metrics = [
    { value: '10+', label: 'Core Services', sub: 'Across tech verticals' },
    { value: '20+', label: 'AI Specialists', sub: 'Ph.D.-led practice' },
    { value: '3', label: 'Client Segments', sub: 'Gov · Enterprise · Intl' },
    { value: '24/7', label: 'Support SLA', sub: 'Managed services' },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.035] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1d6ce8, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-4">Who We Are</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5"
            style={{ fontFamily: 'Sora, sans-serif' }}>
            Built to Deliver,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1d6ce8 0%, #00c2ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Not Just Consult
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ariella GenZ Innovations is a technology-driven Private Limited company that executes — not advises.
            We embed inside your goals and build the systems, platforms, and AI products you need to compete at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Pillars */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="card-enterprise p-6 group"
                style={{ borderTop: `3px solid ${pillar.accent}` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: pillar.bg }}
                >
                  <pillar.icon style={{ color: pillar.accent, fontSize: '1.2rem' }} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Metrics + Trust statement */}
          <div className="space-y-6">
            {/* Metric grid */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-100">
                {metrics.map((m, i) => (
                  <div key={i} className="p-6 flex flex-col">
                    <span
                      className="text-3xl font-extrabold mb-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #1d6ce8 0%, #00c2ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Sora, sans-serif',
                      }}
                    >
                      {m.value}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{m.label}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{m.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust statement card */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: 'linear-gradient(135deg, #050d1f 0%, #0f2040 100%)',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1d6ce8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiTarget className="text-[#00c2ff] text-lg" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Investor-Ready. Execution-Proven.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We are structured as a Private Limited company with a defined service portfolio, AI-led delivery teams, and
                    a pipeline spanning government, enterprise, and international segments — built for Series A readiness.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA link */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#1d6ce8] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Learn more about our story
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
