
import { useState } from 'react';
import './App.css';
import type { PortfolioData } from './types/portfolio';
import { portfolioData } from './services/portfolioData';

function App() {
  const [data] = useState<PortfolioData>(portfolioData);

  return (
    <div className="portfolio-container">
      <h1>Suvarshan's Portfolio</h1>
      <>
        <section className="about">
          <h2>About</h2>
          <p>{data.about}</p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
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
        <section className="experience">
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
        <section className="projects">
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
        <section className="contact">
          <h2>Contact</h2>
          <ul>
            <li>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></li>
            <li>Phone: {data.contact.phone}</li>
            <li>LinkedIn: <a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer">{data.contact.linkedIn}</a></li>
          </ul>
        </section>
      </>
    </div>
  );
}

export default App;
