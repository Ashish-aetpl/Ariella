const CompanyIntroduction = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Ariella GenZ Innovations
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Pioneering Digital Excellence
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Ariella GenZ Innovations Private Limited is a technology-driven startup dedicated to delivering innovative solutions that transform businesses and societies. We combine cutting-edge technology with creative thinking to solve complex challenges.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Our expertise spans software development, mobile applications, web solutions, digital transformation, and emerging technologies like Electric Vehicle infrastructure. We serve government organizations, private enterprises, and international clients with customized, scalable solutions.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              With a focus on research, innovation, and sustainable development, we are committed to driving digital transformation across industries and creating lasting impact through technology.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
                <div className="text-gray-600">Core Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Innovation</div>
                <div className="text-gray-600">First</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
