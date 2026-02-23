import { useState, useEffect } from 'react';
import './VideoSection.css';

export default function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const openVideoModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handler = (e) => {
      if (modalOpen && e.key === 'Escape') closeVideoModal();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [modalOpen]);

  return (
    <>
      <section className="video-section">
        <div className="video-bg">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=75&auto=format&fit=crop"
            alt="Dream Square office"
            loading="lazy"
            width="1600"
            height="580"
          />
        </div>
        <div className="video-overlay reveal">
          <button className="play-btn" onClick={openVideoModal} aria-label="Play brand film">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </button>
          <h2>Our Story in Motion</h2>
          <p>Watch · Dream Square Brand Film</p>
        </div>
      </section>

      <div
        className={`video-modal${modalOpen ? ' open' : ''}`}
        id="videoModal"
        onClick={(e) => { if (e.target === e.currentTarget) closeVideoModal(); }}
      >
        <button className="vm-close" onClick={closeVideoModal}>✕</button>
        {modalOpen && (
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Dream Square Brand Film"
          ></iframe>
        )}
      </div>
    </>
  );
}
