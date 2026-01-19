import { Download, Mail } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Image Section - Now First */}
          <div className="flex-1 flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full animate-pulse-slow opacity-20"></div>
              <div
                className={`absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 transition-colors duration-300 ${
                  isDark ? 'border-gray-700' : 'border-white'
                }`}
              >
                <img
                  src="/projects/Dini.png"     
                  alt="Dinesh Kumar Vadala"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Section - Now Second */}
          <div className="flex-1 text-center lg:text-left animate-fade-in order-2 lg:order-2">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Dinesh Kumar <span className="text-blue-600">Vadala</span>
            </h1>
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              MERN Stack Developer | AI & Machine Learning Enthusiast
            </h2>
            <p
              className={`text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I build intelligent full-stack applications that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Hire Me
              </a>
              <a
                href="/projects/Resume.pdf"
                download
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isDark
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
