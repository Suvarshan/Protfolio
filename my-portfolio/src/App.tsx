
import { useState } from 'react';
import './App.css';
import type { PortfolioData } from './types/portfolio';
import { portfolioData } from './services/portfolioData';

function App() {
  const [data] = useState<PortfolioData>(portfolioData);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Suvarshan Muntha</div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <h1>Suvarshan Muntha</h1>
        <p className="hero-subtitle">Full Stack Developer | AWS Cloud | Micro Services | AI Tools | Database Management (MySQL, SSMS) | API Development (GraphQL/AppSync, EventBridge) | GCP</p>
      </section>

      {/* About Section with Profile Photo */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="profile-image-container">
            <img src="/profile.jpg" alt="Suvarshan" className="profile-image" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>{data.about}</p>
            <a href="/resume.pdf" download className="download-btn-secondary">
              <span className="btn-icon">⬇️</span>
              <span className="btn-text">Download Resume</span>
            </a>
          </div>
        </div>
      </section>
        <section className="skills" id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {data.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-column">
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="experience" id="experience">
          <h2>Experience</h2>
          {data.experience.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <h3>{exp.role} @ {exp.company}</h3>
              <span>{exp.duration}</span>
              <ul>
                {exp.description.split(/\n|•/).map((d, i) => d.trim() && <li key={i}>{d.trim()}</li>)}
              </ul>
            </div>
          ))}
        </section>
        <section className="projects" id ="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {data.projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <ul>
                    {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                  </ul>
                </div>
                <div className="project-highlights">
                  <strong>Highlights:</strong>
                  <ul>
                    {project.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="certifications">
          <h2>Education</h2>
          <ul>
            {data.certifications.map(cert => <li key={cert}>{cert}</li>)}
          </ul>
        </section>
        <section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p><a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer">Connect With Me</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="portfolio-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href={`mailto:${data.contact.email}`}>Email</a></li>
                <li><a href={`tel:${data.contact.phone}`}>Phone</a></li>
                <li><a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Suvarshan Muntha. All rights reserved.</p>
          </div>
        </footer>
    </div>
  );
}

export default App;
