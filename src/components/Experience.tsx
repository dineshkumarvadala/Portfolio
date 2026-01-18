import { Briefcase, Trophy, Award } from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'project':
        return Trophy;
      case 'certification':
        return Award;
      default:
        return Briefcase;
    }
  };

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Experience & <span className="text-blue-600">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            return (
              <div
                key={exp.id}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                      <p
                        className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      >
                        {exp.organization}
                      </p>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {exp.duration}
                      </p>
                    </div>
                    <p
                      className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
