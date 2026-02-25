import { Link } from 'react-router-dom';
import { servicesData } from './servicesData';
import logo from '../../assets/logo.png';
import SEO from '../../components/SEO';

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://ariella.in/services#webpage',
  url: 'https://ariella.in/services',
  name: 'Technology Services — Ariella GenZ Innovations',
  description: 'Explore our full range of enterprise technology services including AI & ML, software development, mobile apps, EV infrastructure, digital transformation and more.',
  isPartOf: { '@id': 'https://ariella.in/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariella.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ariella.in/services' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: servicesData.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `https://ariella.in/services/${s.id}`,
    })),
  },
};

const Services = () => {
  return (
    <div className="py-10 bg-gray-50">
      <SEO
        title="Our Technology Services — AI, Software, EV & More"
        description="Comprehensive enterprise technology services from Ariella GenZ Innovations: AI & Machine Learning, software development, mobile apps, web platforms, EV infrastructure, IT consulting, and government solutions."
        canonical="/services"
        structuredData={servicesStructuredData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-justify">
            Comprehensive technology solutions designed to drive innovation and transform your business
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform text-blue-600">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="text-blue-600 font-semibold group-hover:text-blue-700 flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-12 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-justify">
            We specialize in creating tailored solutions that address your unique business challenges. Let's discuss how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
