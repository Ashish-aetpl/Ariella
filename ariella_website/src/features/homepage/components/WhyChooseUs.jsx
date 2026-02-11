const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Innovation-First Approach",
      description: "We prioritize cutting-edge solutions and creative problem-solving to deliver exceptional results.",
      icon: "🚀"
    },
    {
      title: "Expert Team",
      description: "Our skilled professionals bring extensive experience across diverse technologies and industries.",
      icon: "👥"
    },
    {
      title: "Customized Solutions",
      description: "Tailored approaches that address your specific business challenges and objectives.",
      icon: "⚙️"
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive services from consultation to implementation and ongoing maintenance.",
      icon: "🛠️"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure reliable and robust solutions.",
      icon: "✅"
    },
    {
      title: "Future-Ready Technology",
      description: "We leverage the latest technologies to build scalable and sustainable solutions.",
      icon: "🔮"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Ariella GenZ
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real value
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-6">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
