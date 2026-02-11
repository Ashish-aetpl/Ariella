import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      title: "Software Development",
      description: "End-to-end software solutions including development, testing, deployment, and maintenance.",
      icon: "💻",
      link: "/services/software-development"
    },
    {
      title: "Mobile Applications",
      description: "Native, hybrid, and cross-platform mobile app development for Android and iOS.",
      icon: "📱",
      link: "/services/mobile-applications"
    },
    {
      title: "Web Solutions",
      description: "Web portals, SaaS platforms, and cloud-based systems design and development.",
      icon: "🌐",
      link: "/services/web-solutions"
    },
    {
      title: "EV Infrastructure",
      description: "Electric vehicle charging solutions, smart platforms, and energy management systems.",
      icon: "⚡",
      link: "/services/ev-infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "IT consulting, enterprise architecture, and system integration services.",
      icon: "🔄",
      link: "/services/digital-transformation"
    },
    {
      title: "Research & Innovation",
      description: "Prototyping, ICT solutions, and technology-driven societal transformation.",
      icon: "🔬",
      link: "/services/research-innovation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed ">
                {service.description}
              </p>
              <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
