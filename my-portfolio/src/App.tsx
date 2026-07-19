import './App.css';
import { portfolioData } from './services/portfolioData';

function App() {
  const data = portfolioData;
  const primaryExperience = data.experience[0];

  const heroStats = [
    { value: '2.7+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Done' },
    { value: '80+', label: 'Feature Deliveries' }
  ];

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Tech Stack' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact Me' }
  ];

  return (
    <div className="page-bg">
      <div className="portfolio-shell">
        <header className="topbar">
          <a href="#home" className="logo">SUVARSHAN</a>
          <nav className="topnav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hire-btn">Hire Me</a>
        </header>

        <section id="home" className="hero">
          <div className="hero-left">
            <p className="intro-line">Hi I am</p>
            <p className="name-line">Suvarshan Muntha</p>
            <h1>Software Developer and AI Engineer</h1>
            <p className="hero-text">
              Building scalable products with clean architecture, cloud-native systems, and AI-assisted
              delivery workflows.
            </p>

            <div className="cta-row">
              <a href="#contact" className="btn primary">Hire Me</a>
              <a href="/resume.pdf" download className="btn ghost">Download CV</a>
            </div>

            <div className="stats-row">
              {heroStats.map((stat) => (
                <article key={stat.label}>
                  <p>{stat.value}</p>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="image-ring" />
            <img src="/profile.png" alt="Suvarshan Muntha" />
          </div>
        </section>

        <section id="about" className="info-card">
          <h2>About Me</h2>
          <p>{data.about}</p>
        </section>

        <section id="skills" className="info-card">
          <h2>Tech Stack & Skills</h2>
          <div className="skills-grid">
            {data.skills.map((group) => (
              <article key={group.category} className="skill-panel">
                <h3>{group.category}</h3>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="info-card">
          <h2>Projects</h2>
          <div className="project-grid">
            {data.projects.map((project, idx) => (
              <article key={`${project.title}-${idx}`} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <ul className="project-highlights">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="info-card contact-card">
          <h2>Contact Me</h2>
          <p>{primaryExperience?.role} at {primaryExperience?.company}</p>
          <div className="contact-actions">
            <a href={`mailto:${data.contact.email}`}>Email</a>
            <a href={`tel:${data.contact.phone}`}>Phone</a>
            <a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
