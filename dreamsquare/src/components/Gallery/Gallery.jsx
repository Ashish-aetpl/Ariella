import { useState, useEffect } from 'react';
import { galleryImages } from '../../data/galleryData';
import './Gallery.css';

export default function Gallery() {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

  const openLightbox = (i) => {
    setLbIdx(i);
    setLbOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLbOpen(false);
    document.body.style.overflow = '';
  };

  const lightboxNav = (dir) => {
    setLbIdx((prev) => (prev + dir + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!lbOpen) return;
      if (e.key === 'ArrowRight') lightboxNav(1);
      if (e.key === 'ArrowLeft')  lightboxNav(-1);
      if (e.key === 'Escape')     closeLightbox();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [lbOpen]);

  return (
    <>
      <section className="gallery-section" id="gallery">
        <div className="gallery-header reveal">
          <p className="section-label">Our Projects</p>
          <h2>Spaces That <em>Inspire</em></h2>
          <p>Every development reflects our commitment to design excellence, structural integrity, and lasting value for all.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="g-item reveal"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={img.width}
                height={img.height}
              />
              <div className="g-overlay">
                <div className="g-tag">{img.tag}</div>
                <div className="g-title">{img.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        className={`lightbox${lbOpen ? ' open' : ''}`}
        id="lightbox"
        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
      >
        <button className="lb-close" onClick={closeLightbox}>✕</button>
        <button className="lb-nav prev" onClick={() => lightboxNav(-1)}>‹</button>
        <img
          className="lightbox-img"
          src={lbOpen ? galleryImages[lbIdx].lightboxSrc : ''}
          alt={lbOpen ? galleryImages[lbIdx].alt : ''}
        />
        <button className="lb-nav next" onClick={() => lightboxNav(1)}>›</button>
      </div>
    </>
  );
}
