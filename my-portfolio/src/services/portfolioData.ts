import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  about: `Full Stack Developer with 2+ years of professional experience in designing, developing, testing, and deploying scalable enterprise and cloud-native web applications. Strong expertise in Angular and React for frontend development, Node.js and Express.js for backend services, and relational databases including MySQL and SQL Server. Hands-on experience building serverless architectures using AWS and working knowledge of Google Cloud Platform. Proven ability to integrate Generative AI solutions into applications to automate workflows and enhance business functionality. Comfortable working in Agile environments with a strong focus on clean code, testing, performance optimization, and end-to-end ownership of features.`,
  skills: [
    {
      category: 'Languages & Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Bootstrap', 'TypeScript', 'Angular (v14, v15, v17)', 'React']
    },
    {
      category: 'Backend & Databases',
      items: ['Node.js (v18, v20, v22)', 'Express.js', 'MySQL', 'SQL Server', 'RESTful APIs', 'Event APIs', 'GraphQL (Basic)']
    },
    {
      category: 'Tools & Cloud',
      items: ['DevOps', 'AWS (CDK, Amplify, Lambda, S3, API Gateway)', 'GCP (Cloud Functions, Cloud Storage)', 'GitHub Actions', 'Git', 'GitHub', 'Postman', 'VS Code']
    },
    {
      category: 'Unit Testing',
      items: ['Jest', 'Mocha', 'Chai', 'Custom Test Runner', 'Integration Testing']
    },
    {
      category: 'AI & AI Tools',
      items: ['Claude', 'Cline', 'Generative AI APIs', 'LLM Integration', 'Workflow Automation']
    }
  ],
  experience: [
    {
      company: 'Delta Technology and Management Services Pvt. Ltd',
      role: 'Consultant | Full Stack Developer',
      duration: 'Sep 2023 – Present',
      description: `• Design, develop, and maintain scalable enterprise web applications using Angular, Node.js, MySQL, and SQL Server.\n• Architect and implement RESTful backend services with Node.js and Express.js, ensuring secure and efficient data flow.\n• Design and optimize SQL queries and stored procedures, improving data processing efficiency and application performance.\n• Build and maintain comprehensive unit and integration test suites using Jest and Mocha; actively contributed to introducing a custom Test Runner for improved automation.\n• Integrate AI-powered features using AWS Lambda and Generative AI APIs (Claude, Cline) to enhance application capabilities.\n• Implement CI/CD pipelines using GitHub Actions and manage cloud deployments using AWS CDK, Amplify, and S3.\n• Follow Agile development practices, participating in sprint planning, reviews, and cross-team collaboration.`
    }
  ],
  projects: [
    {
      title: 'E-Commerce Waste Management System (RSI)',
      description: 'A comprehensive waste management and inventory automation system designed to streamline order processing, material tracking, and logistics workflows.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MySQL'],
      highlights: [
        'Designed and developed modular Angular components with reusable architecture',
        'Implemented RESTful backend APIs with comprehensive validation and error handling',
        'Optimized database queries and stored procedures for efficient data processing',
        'Managed order processing and material tracking workflows'
      ]
    },
    {
      title: 'Finance Application',
      description: 'A full-stack financial tracking platform with responsive frontend and serverless backend deployed on AWS.',
      technologies: ['React', 'Node.js', 'Express.js', 'AWS Amplify', 'AWS Lambda', 'MySQL'],
      highlights: [
        'Built responsive React frontend with modern UI patterns',
        'Implemented secure APIs with authentication and authorization',
        'Deployed serverless backend on AWS Lambda with Amplify',
        'Designed scalable cloud infrastructure for real-time financial data processing'
      ]
    },
    {
      title: 'Legacy System Migration',
      description: 'Led migration of critical business modules from legacy systems to a modern Angular and Node.js architecture.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'MySQL'],
      highlights: [
        'Successfully migrated critical business modules to modern architecture',
        'Reduced technical debt and improved system performance',
        'Enhanced long-term maintainability and code quality',
        'Ensured zero downtime during migration process'
      ]
    },
    {
      title: 'HRMS with AI Integration (In Progress)',
      description: 'An AI-powered Human Resource Management System to automate HR workflows with intelligent employee query handling.',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS Lambda', 'Claude', 'Cline'],
      highlights: [
        'Integrating Generative AI APIs for intelligent employee query handling',
        'Automating HR workflows using serverless architecture',
        'Building AI-powered features for employee management',
        'Implementing scalable cloud-native solutions'
      ]
    }
  ],
  certifications: [
    'Bachelor of Technology (B.Tech), NBKR Institute of Science & Technology (2022) — CGPA: 8.00'
  ],
  contact: {
    email: 'suvarshanroy1@gmail.com',
    phone: '+91 9100500790',
    linkedIn: 'https://linkedin.com/in/suvarshan-m-3a3752a27',
  },
};
