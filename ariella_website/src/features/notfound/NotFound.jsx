import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: 'linear-gradient(135deg, #050d1f 0%, #0a1628 100%)' }}
    >
      <SEO title="404 — Page Not Found" noIndex={true} />

      <div
        className="text-8xl font-extrabold mb-4"
        style={{
          fontFamily: 'Sora, sans-serif',
          background: 'linear-gradient(135deg, #1d6ce8 0%, #00c2ff 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </div>
      <h1 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
        Page Not Found
      </h1>
      <p className="text-slate-400 mb-8 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white text-sm"
        style={{
          background: 'linear-gradient(135deg, #1d6ce8 0%, #0f4fa8 100%)',
          boxShadow: '0 6px 24px rgba(29,108,232,0.45)',
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
