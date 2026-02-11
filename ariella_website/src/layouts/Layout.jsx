import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopOnNavigate from '../components/ScrollToTopOnNavigate';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTopOnNavigate />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
