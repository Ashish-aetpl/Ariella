import { FaBullseye, FaBriefcase, FaSeedling, FaInfinity } from 'react-icons/fa';

const CompanyIntroduction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About Ariella GenZ Innovations
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FaBullseye className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Pioneering Digital Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Ariella GenZ Innovations Private Limited is a technology-driven startup dedicated to delivering innovative solutions that transform businesses and societies. We combine cutting-edge technology with creative thinking to solve complex challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Our expertise spans software development, mobile applications, web solutions, digital transformation, and emerging technologies like Electric Vehicle infrastructure. We serve government organizations, private enterprises, and international clients with customized, scalable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaSeedling className="text-2xl text-white" />
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    With a focus on research, innovation, and sustainable development, we are committed to driving digital transformation across industries and creating lasting impact through technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">9+</div>
                  <div className="text-gray-700 font-semibold">Core Services</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-gray-700 font-semibold">Client Satisfaction</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-gray-700 font-semibold">Support</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <FaInfinity className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600" style={{color: 'transparent', backgroundImage: 'linear-gradient(to right, rgb(219, 39, 119), rgb(147, 51, 234))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}} />
                  </div>
                  <div className="text-gray-700 font-semibold">Innovation First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
