import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Philosophy from './components/Philosophy/Philosophy';
import Gallery from './components/Gallery/Gallery';
import Vision from './components/Vision/Vision';
import Marquee from './components/Marquee/Marquee';
import Mission from './components/Mission/Mission';
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
      <Philosophy />
      <div className="divider"></div>
      <Gallery />
      <Vision />
      <Marquee />
      <Mission />
      <VideoSection />
      <Footer />
    </>
  );
}

export default App;
