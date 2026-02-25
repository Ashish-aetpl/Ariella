import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Homepage from '../features/homepage/Homepage';
import Services from '../features/services/Services';
import ServiceDetail from '../features/services/ServiceDetail';
import About from '../features/about/About';
import Contact from '../features/contact/Contact';
import NotFound from '../features/notfound/NotFound';

// Handles deep-link redirects from 404.html (GitHub Pages / static hosts)
const SpaRedirectHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  return null;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <SpaRedirectHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
