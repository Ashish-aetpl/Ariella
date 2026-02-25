import { FiStar } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Ariella GenZ delivered our enterprise AI platform on time and on budget. Their Ph.D.-led team understood our domain deeply — they were a true technology partner, not just a vendor.',
      author: 'Director of Technology',
      org: 'Central Government PSU',
      segment: 'Government',
      accentColor: '#1d6ce8',
    },
    {
      quote:
        'The EV charging management platform they built for us handles thousands of sessions daily with zero downtime. Their IoT integration and energy analytics are best-in-class.',
      author: 'Head of Operations',
      org: 'EV Mobility Startup',
      segment: 'E-Mobility',
      accentColor: '#f59e0b',
    },
    {
      quote:
        'From digital strategy to cloud migration to 24/7 support — Ariella GenZ was accountable at every step. Our legacy system transformation finished 3 weeks ahead of schedule.',
      author: 'CTO',
      org: 'Private Enterprise',
      segment: 'Enterprise',
      accentColor: '#10b981',
    },
    {
      quote:
        'Their GenAI solution for our internal knowledge base transformed how 500+ employees work. Deployed on-prem for our security requirements — handled flawlessly.',
      author: 'VP of Digital Innovation',
      org: 'Financial Services Firm',
      segment: 'BFSI',
      accentColor: '#6366f1',
    },
    {
      quote:
        'We needed a mobile app that worked across iOS, Android, and our web portal. Ariella delivered a unified experience and continues to support us post-launch with a strong SLA.',
      author: 'Product Manager',
      org: 'SaaS Company',
      segment: 'SaaS',
      accentColor: '#0ea5e9',
    },
    {
      quote:
        'Their research and prototyping team helped us validate our AI concept in under 6 weeks. The prototype directly influenced our funding round pitch — investors were impressed.',
      author: 'Founder & CEO',
      org: 'Deep Tech Startup',
      segment: 'Deep Tech',
      accentColor: '#ec4899',
    },
  ];

  const segmentColors = {
    Government:  { bg: 'rgba(29,108,232,0.08)',  color: '#1d6ce8' },
    'E-Mobility':{ bg: 'rgba(245,158,11,0.08)',  color: '#b45309' },
    Enterprise:  { bg: 'rgba(16,185,129,0.08)',  color: '#047857' },
    BFSI:        { bg: 'rgba(99,102,241,0.08)',  color: '#4338ca' },
    SaaS:        { bg: 'rgba(14,165,233,0.08)',  color: '#0369a1' },
    'Deep Tech': { bg: 'rgba(236,72,153,0.08)',  color: '#be185d' },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 50%, rgba(29,108,232,0.05) 0%, transparent 50%), radial-gradient(circle at 90% 50%, rgba(0,194,255,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-4 mx-auto w-fit">Client Outcomes</div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Trusted by Leaders Across{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1d6ce8 0%, #00c2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Industries
            </span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            From government PSUs to deep tech startups — here is what our clients say about working with Ariella GenZ.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const sc = segmentColors[t.segment] || { bg: '#f1f5f9', color: '#475569' };
            return (
              <div
                key={i}
                className="group flex flex-col bg-white rounded-2xl p-7 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                  borderTop: `3px solid ${t.accentColor}`,
                }}
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <FiStar
                      key={si}
                      className="text-amber-400 fill-amber-400"
                      style={{ fill: '#fbbf24', width: '14px', height: '14px' }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${t.accentColor}15` }}
                    >
                      <HiOutlineOfficeBuilding style={{ color: t.accentColor, fontSize: '1rem' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">{t.author}</p>
                      <p className="text-xs text-slate-500">{t.org}</p>
                    </div>
                  </div>
                  <span
                    className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: sc.bg, color: sc.color }}
                  >
                    {t.segment}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust footnote */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 py-6 border-t border-slate-200">
          {[
            { label: 'Government & PSU Clients', icon: '🏛️' },
            { label: 'Enterprise Deployments', icon: '🏢' },
            { label: 'International Projects', icon: '🌐' },
            { label: '24×7 SLA Backed', icon: '🛡️' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <span className="text-base">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
