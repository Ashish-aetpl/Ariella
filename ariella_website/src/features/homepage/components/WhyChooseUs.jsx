import { FaRocket, FaUsers, FaCog, FaTools, FaCheckCircle, FaLightbulb } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Innovation-First Approach",
      description: "We prioritize cutting-edge solutions and creative problem-solving to deliver exceptional results.",
      icon: FaRocket,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Expert Team",
      description: "Our skilled professionals bring extensive experience across diverse technologies and industries.",
      icon: FaUsers,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Customized Solutions",
      description: "Tailored approaches that address your specific business challenges and objectives.",
      icon: FaCog,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive services from consultation to implementation and ongoing maintenance.",
      icon: FaTools,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure reliable and robust solutions.",
      icon: FaCheckCircle,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Future-Ready Technology",
      description: "We leverage the latest technologies to build scalable and sustainable solutions.",
      icon: FaLightbulb,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Why Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose Ariella GenZ
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real value
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${reason.gradient} rounded-t-2xl`}></div>
              
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <reason.icon className="text-4xl text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
