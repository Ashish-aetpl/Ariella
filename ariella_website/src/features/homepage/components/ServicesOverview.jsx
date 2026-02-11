import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaGlobe, FaBolt, FaSync, FaMicroscope } from 'react-icons/fa';

const ServicesOverview = () => {
  const services = [
    {
      title: "Software Development",
      description: "End-to-end software solutions including development, testing, deployment, and maintenance.",
      icon: FaLaptopCode,
      link: "/services/software-development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Applications",
      description: "Native, hybrid, and cross-platform mobile app development for Android and iOS.",
      icon: FaMobileAlt,
      link: "/services/mobile-applications",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Solutions",
      description: "Web portals, SaaS platforms, and cloud-based systems design and development.",
      icon: FaGlobe,
      link: "/services/web-solutions",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "EV Infrastructure",
      description: "Electric vehicle charging solutions, smart platforms, and energy management systems.",
      icon: FaBolt,
      link: "/services/ev-infrastructure",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Digital Transformation",
      description: "IT consulting, enterprise architecture, and system integration services.",
      icon: FaSync,
      link: "/services/digital-transformation",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Research & Innovation",
      description: "Prototyping, ICT solutions, and technology-driven societal transformation.",
      icon: FaMicroscope,
      link: "/services/research-innovation",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <service.icon className="text-3xl text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
