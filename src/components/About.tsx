import { Code, Brain, Rocket, Award } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in building scalable MERN stack applications',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Passionate about intelligent systems and neural networks',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and best practices',
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to delivering clean, maintainable code',
    },
  ];

  return (
    <section
      id="about"
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
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Hello! I'm <span className="font-semibold text-blue-600">Dinesh Kumar Vadala</span>, a passionate Computer Science Engineering student specializing in MERN stack development and Artificial Intelligence technologies.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I thrive on building innovative, user-centered applications that bridge the gap between cutting-edge technology and real-world problem-solving. My expertise lies in creating scalable full-stack solutions while exploring the fascinating world of machine learning and AI.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              With a strong foundation in both frontend and backend development, combined with hands-on experience in AI/ML projects, I'm constantly pushing boundaries to create intelligent applications that make a difference.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gradient-to-br from-blue-50 to-slate-50 hover:shadow-blue-100'
                }`}
              >
                <item.icon
                  className="text-blue-600 mb-4"
                  size={40}
                />
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
