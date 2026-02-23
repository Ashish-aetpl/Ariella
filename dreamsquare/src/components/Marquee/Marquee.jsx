import { marqueeItems } from '../../data/missionData';
import './Marquee.css';

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
