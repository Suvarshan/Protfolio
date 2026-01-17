export type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type PortfolioData = {
  about: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  certifications: string[];
  contact: {
    email: string;
    phone: string;
    linkedIn: string;
  };
};
