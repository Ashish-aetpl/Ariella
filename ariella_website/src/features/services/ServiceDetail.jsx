import { useParams, Link } from 'react-router-dom';
import { servicesData } from './servicesData';
import logo from '../../assets/logo.png';
import SEO from '../../components/SEO';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-20 bg-gray-50">
        <SEO title="Service Not Found" noIndex={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://ariella.in/services/${service.id}#webpage`,
    url: `https://ariella.in/services/${service.id}`,
    name: `${service.title} | Ariella GenZ Innovations`,
    description: service.description,
    isPartOf: { '@id': 'https://ariella.in/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariella.in/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ariella.in/services' },
        { '@type': 'ListItem', position: 3, name: service.title, item: `https://ariella.in/services/${service.id}` },
      ],
    },
    mainEntity: {
      '@type': 'Service',
      '@id': `https://ariella.in/services/${service.id}#service`,
      name: service.title,
      description: service.detailedDescription,
      provider: { '@id': 'https://ariella.in/#organization' },
      areaServed: 'IN',
      url: `https://ariella.in/services/${service.id}`,
    },
  };

  return (
    <div className="py-20 bg-gray-50">
      <SEO
        title={`${service.title} — Enterprise Solutions India`}
        description={`${service.description} Ariella GenZ Innovations delivers production-grade ${service.title} for enterprises and governments across India.`}
        canonical={`/services/${service.id}`}
        structuredData={serviceStructuredData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/services" className="text-blue-600 hover:text-blue-700">Services</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{service.title}</li>
          </ol>
        </nav>

        {/* Service Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{service.title}</h1>
              <p className="text-xl text-gray-600 text-justify">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            {service.detailedDescription}
          </p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 text-justify">
            Let's discuss how our {service.title} solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Other Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
