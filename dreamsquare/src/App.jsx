import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Philosophy from './components/Philosophy/Philosophy';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Gallery from './components/Gallery/Gallery';
import Vision from './components/Vision/Vision';
import Marquee from './components/Marquee/Marquee';
import Mission from './components/Mission/Mission';
import Commitment from './components/Commitment/Commitment';
import BuildingFuture from './components/BuildingFuture/BuildingFuture';
import VideoSection from './components/VideoSection/VideoSection';
import Footer from './components/Footer/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider"></div>
      <AboutUs />
      <div className="divider"></div>
      <Philosophy />
      <div className="divider"></div>
      <WhatWeDo />
      <div className="divider"></div>
      <Gallery />
      <Vision />
      <Marquee />
      <Mission />
      <div className="divider"></div>
      <Commitment />
      <div className="divider"></div>
      <BuildingFuture />
      <VideoSection />
      <Footer />
    </>
  );
}

export default App;
