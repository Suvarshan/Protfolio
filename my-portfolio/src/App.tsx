import { useState, useEffect, useRef } from 'react';
import './App.css';
import { portfolioData } from './services/portfolioData';

/* ── Particle neural-network canvas ─────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.6 + 0.5,
      a: Math.random() * 0.5 + 0.18,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${0.13 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${pts[i].a})`;
        ctx.fill();
        pts[i].x += pts[i].vx;
        pts[i].y += pts[i].vy;
        if (pts[i].x < 0 || pts[i].x > canvas.width) pts[i].vx *= -1;
        if (pts[i].y < 0 || pts[i].y > canvas.height) pts[i].vy *= -1;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="particle-canvas" />;
}

/* ── Typewriter ──────────────────────────────────────────────── */
const ROLES = ['Software Developer', 'AI Engineer', 'Full Stack Developer', 'Cloud Architect'];

function useTypewriter() {
  const [display, setDisplay] = useState('');
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = ROLES[wIdx];
    const delay = del ? 55 : cIdx === word.length ? 1800 : 110;
    const t = setTimeout(() => {
      if (!del) {
        if (cIdx < word.length) {
          setDisplay(word.slice(0, cIdx + 1));
          setCIdx(c => c + 1);
        } else {
          setDel(true);
        }
      } else {
        if (cIdx > 0) {
          setDisplay(word.slice(0, cIdx - 1));
          setCIdx(c => c - 1);
        } else {
          setDel(false);
          setWIdx(i => (i + 1) % ROLES.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [cIdx, del, wIdx]);

  return display;
}

/* ── Experience calculator ───────────────────────────────────── */
// Joining date: September 4, 2023
function calcExperience() {
  const start = new Date(2023, 8, 4); // month is 0-indexed: 8 = September
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (now.getDate() < start.getDate()) months--;
  if (months < 0) { years--; months += 12; }
  return { years, months };
}

const EXP = calcExperience();
// Stat box: e.g. "2y 10m+"
const EXP_STAT = `${EXP.years}y${EXP.months > 0 ? ` ${EXP.months}m` : ''}+`;
// About text: e.g. "2 years and 10 months"
const EXP_TEXT = EXP.months > 0
  ? `${EXP.years} years and ${EXP.months} months`
  : `${EXP.years} years`;

/* ── App ─────────────────────────────────────────────────────── */
const STATS = [
  { value: EXP_STAT, label: 'Experience' },
  { value: '10+', label: 'Projects' },
  { value: '80+', label: 'Deliveries' },
  { value: '6+', label: 'AI Tools' },
];

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const data = portfolioData;
  const role = useTypewriter();

  return (
    <>
      <ParticleCanvas />
      <div className="site">

        {/* ── Navbar ── */}
        <header className="navbar">
          <a href="#home" className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Suvarshan</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          <nav className="nav-links">
            {NAV.map(n => <a key={n.href} href={n.href} className="nav-link">{n.label}</a>)}
          </nav>
          <a href="#contact" className="nav-cta">Hire Me</a>
        </header>

        {/* ── Hero ── */}
        <section id="home" className="hero-section">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="avail-badge">
                <span className="pulse-dot" /> Available for Hire
              </div>
              <p className="greeting">Hi, I'm</p>
              <h1 className="hero-name grad-text">Suvarshan Muntha</h1>
              <p className="role-line">I'm a&nbsp;
                <span className="tw-text">{role}<span className="tw-cursor">|</span></span>
              </p>
              <p className="hero-desc">
                Building scalable products with clean architecture, cloud-native systems,
                and AI-assisted delivery workflows. Passionate about turning complex
                problems into elegant, future-ready solutions.
              </p>
              <div className="hero-btns">
                <a href="#contact" className="btn-primary">
                  Hire Me
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="/resume.pdf" download className="btn-ghost">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>
              <div className="stats-row">
                {STATS.map(s => (
                  <div key={s.label} className="stat">
                    <span className="stat-val grad-text">{s.value}</span>
                    <span className="stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-wrap">
                <div className="ring r1" />
                <div className="ring r2" />
                <div className="ring r3" />
                <div className="glow-blob" />
                <img src="/profile.png" alt="Suvarshan Muntha" className="profile-img" />
                <div className="float-badge b-top">🤖 AI Engineer</div>
                <div className="float-badge b-bot">☁️ Cloud Native</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="sec">
          <div className="sec-inner">
            <div className="sec-head">
              <span className="sec-tag">About Me</span>
              <h2>Who I <span className="grad-text">Am</span></h2>
            </div>
            <div className="about-grid">
              <div className="glass-card about-text">
                <p>{data.about.replace('2.7+ years', EXP_TEXT)}</p>
                <div className="tag-row">
                  {data.languages?.map(l => <span key={l} className="lang-tag">{l}</span>)}
                </div>
              </div>
              <div className="about-side">
                <div className="glass-card info-row">
                  <span className="info-key">Education</span>
                  <span className="info-val">{data.certifications[0]}</span>
                </div>
                <div className="glass-card info-row">
                  <span className="info-key">Email</span>
                  <a href={`mailto:${data.contact.email}`} className="info-val glow-link">
                    {data.contact.email}
                  </a>
                </div>
                <div className="glass-card info-row">
                  <span className="info-key">Location</span>
                  <span className="info-val">India 🇮🇳</span>
                </div>
                <div className="glass-card info-row">
                  <span className="info-key">LinkedIn</span>
                  <a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer"
                    className="info-val glow-link">View Profile →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="sec">
          <div className="sec-inner">
            <div className="sec-head">
              <span className="sec-tag">Tech Stack</span>
              <h2>Skills & <span className="grad-text">Expertise</span></h2>
            </div>
            <div className="skills-grid">
              {data.skills.map(g => (
                <div key={g.category} className="glass-card skill-card">
                  <h3 className="skill-cat">{g.category}</h3>
                  <div className="chips">
                    {g.items.map(item => <span key={item} className="chip">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="sec">
          <div className="sec-inner">
            <div className="sec-head">
              <span className="sec-tag">Portfolio</span>
              <h2>Featured <span className="grad-text">Projects</span></h2>
            </div>
            <div className="proj-grid">
              {data.projects.map((p, i) => (
                <div key={i} className="glass-card proj-card">
                  <span className="proj-num">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="chips purple-chips">
                    {p.technologies.map(t => <span key={t} className="chip chip-p">{t}</span>)}
                  </div>
                  <ul className="proj-highlights">
                    {p.highlights.slice(0, 3).map((h, j) => (
                      <li key={j}><span className="hl-dot" />{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="sec">
          <div className="sec-inner">
            <div className="sec-head">
              <span className="sec-tag">Career</span>
              <h2>Work <span className="grad-text">Experience</span></h2>
            </div>
            <div className="timeline">
              {data.experience.map((exp, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-dot" />
                  <div className="glass-card tl-card">
                    <div className="exp-head">
                      <div>
                        <h3>{exp.role}</h3>
                        <p className="exp-co">{exp.company}</p>
                      </div>
                      <span className="exp-dur">{exp.duration}</span>
                    </div>
                    <div className="exp-body">
                      {exp.description.split('\n').filter(Boolean).map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="sec">
          <div className="sec-inner">
            <div className="sec-head">
              <span className="sec-tag">Get In Touch</span>
              <h2>Let's <span className="grad-text">Connect</span></h2>
            </div>
            <div className="contact-grid">
              <div className="glass-card contact-info">
                <p>I'm open to new opportunities, collaborations, or just a chat about AI and engineering. My inbox is always open.</p>
                <div className="contact-links">
                  <a href={`mailto:${data.contact.email}`} className="c-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {data.contact.email}
                  </a>
                  <a href={`tel:${data.contact.phone}`} className="c-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {data.contact.phone}
                  </a>
                  <a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer" className="c-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div className="glass-card contact-extras">
                {[
                  { icon: '⚡', title: 'AI-Powered Developer', desc: 'Leveraging Claude, Copilot & Cline for 10× dev speed' },
                  { icon: '☁️', title: 'Cloud Native', desc: 'AWS & GCP workflows with Kubernetes orchestration' },
                  { icon: '🚀', title: 'Full Stack', desc: 'Angular · React · Node.js · TypeScript · GraphQL' },
                ].map(item => (
                  <div key={item.title} className="extra-badge">
                    <span>{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Designed & Built by <span className="grad-text">Suvarshan Muntha</span></p>
          <p className="footer-sub">Software Developer & AI Engineer</p>
        </footer>
      </div>
    </>
  );
}

export default App;
