export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  duration: string;
  description: string;
  type: 'work' | 'project' | 'certification';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}
