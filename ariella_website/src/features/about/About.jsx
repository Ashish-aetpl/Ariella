import { Link } from 'react-router-dom';
import { FaRocket, FaStar, FaHandshake, FaUsers } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex problems.",
      icon: FaRocket
    },
    {
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and drive measurable results.",
      icon: FaStar
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical principles in all our dealings.",
      icon: FaHandshake
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve extraordinary outcomes.",
      icon: FaUsers
    }
  ];

  const team = [
    {
      name: "Leadership Team",
      role: "Vision & Strategy",
      description: "Experienced professionals with decades of combined expertise in technology and business transformation."
    },
    {
      name: "Engineering Team",
      role: "Technical Excellence",
      description: "Skilled developers, architects, and engineers proficient in modern technologies and best practices."
    },
    {
      name: "Consulting Team",
      role: "Strategic Advisory",
      description: "Industry experts who provide insights and guidance for digital transformation initiatives."
    },
    {
      name: "Support Team",
      role: "Customer Success",
      description: "Dedicated professionals ensuring smooth implementation and ongoing success for our clients."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Ariella GenZ Innovations" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Ariella GenZ Innovations
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Pioneering digital transformation through innovative technology solutions and exceptional service
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6 text-justify">
              Founded with a vision to bridge the gap between technology and business transformation, 
              Ariella GenZ Innovations Private Limited emerged as a response to the growing need for 
              comprehensive digital solutions in an increasingly complex technological landscape.
            </p>
            <p className="mb-6 text-justify">
              Our journey began with a simple yet powerful idea: to create technology solutions that 
              not only solve immediate business challenges but also lay the foundation for sustainable 
              growth and innovation. We recognized that businesses needed more than just software – 
              they needed partners who understood their vision and could translate it into digital reality.
            </p>
            <p className="text-justify">
              Today, we stand as a testament to that vision, having served numerous organizations 
              across government, private, and international sectors with solutions that drive real 
              value and create lasting impact.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              To empower organizations with innovative technology solutions that drive digital transformation, 
              enhance operational efficiency, and create sustainable competitive advantages in an ever-evolving 
              digital landscape.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              To be a global leader in technology-driven transformation, recognized for our innovation, 
              excellence, and commitment to creating solutions that positively impact businesses and society 
              at large.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Core Service Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Technology Stack</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 text-blue-100 text-justify">
            Whether you're looking for technology solutions, career opportunities, or partnership possibilities, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
