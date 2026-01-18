import { Skill, Project, Experience, Education, ContactInfo } from '../types/portfolio';

export const skills: Skill[] = [
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 75, category: 'frontend' },
  { name: 'Python', level: 80, category: 'ai' },
  // { name: 'TensorFlow', level: 65, category: 'ai' },
  { name: 'PyTorch', level: 60, category: 'ai' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'REST APIs', level: 85, category: 'backend' },
  // { name: 'Firebase', level: 75, category: 'tools' },
  // { name: 'C/C++', level: 70, category: 'backend' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Driven Complaint Sorting System',
    description:
      'An AI-Driven Complaints Sorting System that automatically analyzes and categorizes user complaints using NLP, enabling faster routing and resolution',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/complaint-sorting.png',
    githubUrl: 'https://github.com/dineshkumarvadala/Complaint-Sorting',
  },
  {
    id: 2,
    title: 'Granite SFT calculator',
    description:
      'A simple and efficient SFT Calculator that accurately computes square feet and categorizes slabs based on entered dimensions.',
    techStack: ['Python', 'Flask', 'React', 'MongoDB'],
    image: '/projects/sft-calculator.png',
    githubUrl: 'https://github.com/dineshkumarvadala/Granite-SFT-Cal-',
  },
  {
    id: 3,
    title: 'Career Lift Ai',
    description:
      'Career Lift AI is an intelligent career-assistance platform that helps users build resumes, prepare for interviews, and get personalized career guidance using AI-driven insights and recommendations.',
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    image: '/projects/career-lift-ai.png',
    githubUrl: 'https://github.com/dineshkumarvadala/Career-Lift-AI',
  },



//   {
//     id: 4,
//     title: 'Image Recognition App',
//     description: 'Machine learning application for image classification and object detection using CNN.',
//     techStack: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
//     liveUrl: 'https://example.com',
//     githubUrl: 'https://github.com/dineshkumar',
//   },
//   {
//     id: 5,
//     title: 'Social Media Dashboard',
//     description: 'Analytics dashboard for social media management with data visualization and insights.',
//     techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
//     liveUrl: 'https://example.com',
//     githubUrl: 'https://github.com/dineshkumar',
//   },
//   {
//     id: 6,
//     title: 'Weather Prediction System',
//     description: 'ML-based weather forecasting application with data analysis and visualization.',
//     techStack: ['Python', 'Scikit-learn', 'React', 'APIs'],
//     liveUrl: 'https://example.com',
//     githubUrl: 'https://github.com/dineshkumar',
//   },
 ];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Freelance Web Developer',
    organization: 'Self-Employed',
    duration: '2023 - Present',
    description: 'Building responsive web applications for clients using MERN stack.',
    type: 'work',
  },
  {
    id: 2,
    title: 'AI Research Projects',
    organization: 'Academic Research',
    duration: '2024',
    description: 'Conducted research on machine learning algorithms and neural networks. Published findings in college symposium.',
    type: 'project',
  },
//   {
//     id: 3,
//     title: 'Smart India Hackathon Participant',
//     organization: 'Government of India',
//     duration: '2023',
//     description: 'Developed an AI-powered solution for real-world problem statements. Reached regional finals.',
//     type: 'certification',
//   },
//   {
//     id: 4,
//     title: 'Full Stack Development Bootcamp',
//     organization: 'Online Certification',
//     duration: '2023',
//     description: 'Completed intensive training in MERN stack development with hands-on projects and industry practices.',
//     type: 'certification',
//   },
// ];
];

export const education: Education[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Parul University',
    duration: '2022 - 2026',
    description: 'Specializing in CSE(CORE). CGPA: 6.7/10',
  },
];

export const contactInfo: ContactInfo = {
  email: 'vadaladineshkumar1@gmail.com',
  phone: '+91 8639610615',
  linkedin: 'https://www.linkedin.com/in/dinesh-kumar-vadala',
  github: 'https://github.com/dineshkumarvadala',
  location: 'India',
};
