import { Heart, Linkedin, Github, Mail } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const socialLinks = [
    {
      icon: Linkedin,
      url: contactInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Github,
      url: contactInfo.github,
      label: 'GitHub',
    },
    {
      icon: Mail,
      url: `mailto:${contactInfo.email}`,
      label: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={scrollToTop}
            className={`text-2xl font-bold transition-colors duration-300 hover:text-blue-600 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Dinesh Kumar <span className="text-blue-600">Vadala</span>
          </button>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  isDark
                    ? 'bg-gray-700 hover:bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white'
                }`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div
            className={`text-center transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="text-red-500" size={16} fill="currentColor" /> by Dinesh
              Kumar Vadala
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
