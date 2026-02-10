import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  about: `Full Stack Developer with over 2+ years of experience in building, modernizing, and deploying scalable enterprise and cloud-native applications. Demonstrates strong proficiency in Angular and React for frontend development, as well as Node.js and Express.js for backend services. Possesses hands-on experience in designing RESTful and GraphQL APIs, implementing serverless and event-driven architectures, and deploying applications across AWS, Google Cloud Platform, and Kubernetes environments. Actively utilizes AI-assisted development tools to enhance delivery speed while ensuring the production of clean, maintainable code. Comfortable operating within Agile/Scrum frameworks, with a commitment to end-to-end ownership of features from design through to deployment.`,
  skills: [
    {
      category: 'Frontend Development',
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Angular (v14, v15, v17)', 'React', 'Bootstrap']
    },
    {
      category: 'Backend Development',
      items: ['Node.js (v18, v20, v22)', 'Express.js', 'RESTful APIs', 'GraphQL', 'Event APIs']
    },
    {
      category: 'Database & Data Management',
      items: ['MySQL', 'SQL Server', 'Schema Design', 'Query Optimization', 'Stored Procedures', 'TypeORM']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS (CDK, Amplify, Lambda, S3, API Gateway, AppSync)', 'GCP (Cloud Functions, Cloud Storage)', 'Kubernetes', 'Jenkins CI/CD', 'GitHub Actions', 'Serverless Framework']
    },
    {
      category: 'Testing & Quality',
      items: ['Jest', 'Mocha', 'Chai', 'Custom Test Runner', 'Unit Testing', 'Integration Testing']
    },
    {
      category: 'AI & Automation',
      items: ['Claude', 'Cline', 'GitHub Copilot', 'Generative AI APIs', 'LLM Integration', 'Workflow Automation']
    },
    {
      category: 'Tools & Collaboration',
      items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Agile/Scrum']
    }
  ],
  experience: [
    {
      company: 'Delta Technology and Management Services Pvt. Ltd',
      role: 'Consultant | Full Stack Developer',
      duration: 'Sep 2023 – Present',
      description: `• Design, develop, and maintain enterprise-scale web applications using Angular, React, Node.js, and MySQL, ensuring scalability and maintainability.\n• Architect and implement secure RESTful and GraphQL APIs, including serverless and event-driven architectures to support high-availability systems.\n• Led the migration of RSI backend endpoints to a serverless architecture using AWS AppSync, GraphQL, and event APIs, reducing infrastructure overhead and improving scalability.\n• Built backend services using the Serverless Framework (serverless.yml) to enable automated and repeatable cloud deployments.\n• Implemented a custom Test Runner framework, significantly improving unit test coverage, execution reliability, and long-term maintainability.\n• Identified and resolved security vulnerabilities during dependency upgrades and Node.js version migrations, ensuring secure coding standards.\n• Migrated Angular applications from untyped to strictly typed forms, enforcing strong TypeScript interfaces.\n• Developed an end-to-end HRMS platform using React, Node.js, MySQL, and TypeORM, including entity modeling and database migration management.\n• Leveraged AI-assisted development tools such as GitHub Copilot and Cline (Claude APIs) to improve productivity and development speed.\n• Deployed applications to production environments using Jenkins-based CI/CD pipelines across AWS, GCP, and Kubernetes clusters.\n• Integrated GCP Cloud Storage (Buckets) for secure file upload and storage.\n• Collaborated closely with cross-functional teams in Agile/Scrum environments, participating in sprint planning, reviews, and continuous improvement initiatives.`
    }
  ],
  projects: [
    {
      title: 'E-Commerce Waste Management System (RSI)',
      description: 'A comprehensive waste management and inventory automation platform designed to streamline order processing, material tracking, and logistics workflows.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'AWS AppSync', 'GraphQL', 'Serverless Framework'],
      highlights: [
        'Designed and developed a comprehensive waste management and inventory automation platform',
        'Implemented a custom Test Runner framework to improve test reliability and coverage',
        'Addressed security vulnerabilities during package upgrades and Node.js migrations',
        'Migrated Angular forms from untyped to strictly typed, creating well-defined TypeScript interfaces',
        'Built modular Angular components and optimized backend APIs for logistics and material tracking workflows',
        'Migrated traditional backend endpoints to a fully serverless architecture using AWS AppSync and GraphQL',
        'Designed and implemented event-driven APIs for asynchronous processing',
        'Managed deployments using serverless.yml, enabling scalable and cost-effective backend services'
      ]
    },
    {
      title: 'HRMS with AI Integration (In Progress)',
      description: 'An AI-powered Human Resource Management System to automate HR workflows with intelligent employee query handling and workflow automation.',
      technologies: ['React', 'Node.js', 'MySQL', 'TypeORM', 'AWS', 'GCP', 'Kubernetes', 'Jenkins', 'Claude APIs'],
      highlights: [
        'Developing an end-to-end HRMS application with React and Node.js',
        'Implemented TypeORM entities and migration files to manage database schema changes',
        'Used AI tools (GitHub Copilot, Cline with Claude APIs) to accelerate development',
        'Deployed the application to live environments using Jenkins CI/CD, AWS, GCP, and Kubernetes',
        'Integrated GCP Cloud Storage for secure document and file uploads'
      ]
    }
  ],
  certifications: [
    'Bachelor of Technology (B.Tech), NBKR Institute of Science & Technology (2022) — CGPA: 8.00'
  ],
  contact: {
    email: 'suvarshanroy1@gmail.com',
    phone: '+91 9100500790',
    linkedIn: 'https://www.linkedin.com/in/suvarshan-m-3a3752a27',
  },
  languages: ['English', 'Telugu', 'Tamil', 'Hindi']
};
