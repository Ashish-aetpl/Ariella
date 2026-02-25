import { useEffect } from 'react';

const BASE_URL = 'https://ariella.in';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
  structuredData = null,
}) => {
  const fullTitle = title
    ? `${title} | Ariella GenZ Innovations`
    : 'Ariella GenZ Innovations | AI, Software & Digital Transformation — India';

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const setMeta = (selector, value, attr = 'content') => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector.replace('[', '').replace(']', '').split('=');
        el.setAttribute(attrName.trim(), attrValue.replace(/"/g, '').trim());
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Primary meta
    if (description) setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large');
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('meta[property="og:title"]', fullTitle);
    if (description) setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:type"]', type);
    setMeta('meta[property="og:image"]', image);

    // Twitter
    setMeta('meta[name="twitter:title"]', fullTitle);
    if (description) setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);

    // Structured data (inject as a new script tag, remove old one first)
    if (structuredData) {
      const existing = document.querySelector('script[data-seo="page"]');
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'page');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup page-level structured data on unmount
      const s = document.querySelector('script[data-seo="page"]');
      if (s) s.remove();
    };
  }, [fullTitle, description, canonicalUrl, image, type, noIndex, structuredData]);

  return null;
};

export default SEO;
