import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

interface EducationProps {
  isDark: boolean;
}

export default function Education({ isDark }: EducationProps) {
  return (
    <section
      id="education"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl ${
                isDark ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-slate-50'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-600 rounded-xl">
                  <GraduationCap className="text-white" size={40} />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <p
                      className={`text-xl font-semibold transition-colors duration-300 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {edu.duration}
                    </p>
                  </div>
                  {edu.description && (
                    <p
                      className={`text-lg transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
