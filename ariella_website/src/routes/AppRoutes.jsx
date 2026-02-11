import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Homepage from '../features/homepage/Homepage';
import Services from '../features/services/Services';
import ServiceDetail from '../features/services/ServiceDetail';
import About from '../features/about/About';
import Contact from '../features/contact/Contact';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
