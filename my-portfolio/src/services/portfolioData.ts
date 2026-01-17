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
        'Architected enterprise-scale application serving 500+ daily active users across multiple facilities',
        'Engineered real-time data synchronization using WebSockets reducing latency from 5s to 200ms',
        'Designed and optimized complex SQL queries with proper indexing achieving 40% performance improvement',
        'Implemented role-based access control (RBAC) with JWT tokens ensuring enterprise-grade security',
        'Built dynamic dashboard with interactive charts and real-time KPI tracking using Chart.js and D3.js'
      ]
    },
    {
      title: 'Finance Application',
      description: 'A full-stack financial tracking platform with responsive frontend and serverless backend deployed on AWS.',
      technologies: ['React', 'Node.js', 'Express.js', 'AWS Amplify', 'AWS Lambda', 'MySQL'],
      highlights: [
        'Developed serverless backend processing 100K+ transactions daily with 99.9% uptime SLA',
        'Implemented multi-tenant isolation at database and API levels ensuring data security and compliance',
        'Created advanced analytics engine with custom aggregations supporting 200+ report types',
        'Optimized Lambda cold starts through code splitting reducing initialization from 3s to 400ms',
        'Built automated compliance reporting with audit trails for regulatory requirements'
      ]
    },
    {
      title: 'Legacy System Migration',
      description: 'Led migration of critical business modules from legacy systems to a modern Angular and Node.js architecture.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'MySQL'],
      highlights: [
        'Led complete architectural refactoring breaking 500K LOC monolith into 8 independent microservices',
        'Implemented distributed tracing and monitoring reducing MTTR from 4 hours to 15 minutes',
        'Achieved 85%+ code coverage with comprehensive unit and integration test suites',
        'Executed zero-downtime production migration using blue-green deployment strategy',
        'Improved API response time by 65% through service isolation and optimized database queries'
      ]
    },
    {
      title: 'HRMS with AI Integration (In Progress)',
      description: 'An AI-powered Human Resource Management System to automate HR workflows with intelligent employee query handling.',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS Lambda', 'Claude', 'Cline'],
      highlights: [
        'Integrated Claude API achieving 70% reduction in HR manual tasks through intelligent automation',
        'Built intelligent resume parsing engine with 95%+ accuracy for candidate screening',
        'Implemented conversational AI chatbot handling 40% of employee queries without HR intervention',
        'Designed serverless event-driven architecture processing 5000+ HR events daily',
        'Created secure document processing system with encryption for sensitive employee records'
      ]
    }
  ],
  certifications: [
    'Bachelor of Technology (B.Tech), NBKR Institute of Science & Technology (2022) — CGPA: 8.00'
  ],
  contact: {
    email: 'suvarshanroy1@gmail.com',
    phone: '+91 9100500790',
    linkedIn: 'https://www.linkedin.com/in/suvarshan-m-3a375a227',
  },
};
