import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Moon,
  Sun,
  Sparkles,
  Mail,
  Send,
  Code2,
  Database,
  Menu,
  X,
} from 'lucide-react';

import './styles.css';

// ==========================================
// IMPORT GAMBAR DARI FOLDER ASSETS
// Pastikan file gambar benar-benar ada di src/assets/
// ==========================================
import pookieImg from './assets/pookie.jpeg';
import butikImg from './assets/butik.jpeg';
import simImg from './assets/sim.png';

// ==============================
// DATA SKILLS
// ==============================
const skills = [
  { name: 'PHP', icon: Code2 },
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Python', icon: Code2 },
  { name: 'Laravel', icon: Code2 },
  { name: 'React', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'C++', icon: Code2 },
];

// ==============================
// DATA NAVIGASI
// ==============================
const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Project', href: '#project' },
  { label: 'Connect', href: '#connect' },
];

// ==============================
// LINK KONTAK
// ==============================
const gmailLink =
  'https://mail.google.com/mail/?view=cm&fs=1&to=vanesagladisya@gmail.com';

const socialLinks = [
  {
    name: 'GitHub',
    label: 'GH',
    url: 'https://github.com/vanesagladisya',
  },
  {
    name: 'LinkedIn',
    label: 'IN',
    url: 'https://www.linkedin.com/in/vanesa-gladisya-aa4158294/',
  },
  {
    name: 'Instagram',
    label: 'IG',
    url: 'https://www.instagram.com/vanesa_gladisya/',
  },
];

// ==============================
// DATA PROJECTS (DIPERBAIKI)
// ==============================
const projects = [
  {
    id: 1,
    title: 'Pookie Booth',
    category: 'WEB DEVELOPMENT · UI/UX',
    description: 'A cute online photobooth with a soft pastel aesthetic, designed to capture little moments and turn them into sweet memories.',
    githubUrl: 'https://github.com/vanesagladisya/pookie-booth',
    image: pookieImg, // <-- Menggunakan gambar hasil import
    label: 'POOKIE BOOTH ♡',
  },
  {
    id: 2,
    title: 'Butik Bontang',
    category: 'WEB DEVELOPMENT · RPL',
    description: 'Tugas Rekayasa Perangkat Lunak berupa aplikasi web butik untuk mengelola data produk, transaksi, dan inventaris toko pakaian.',
    githubUrl: 'https://github.com/vanesagladisya/Tugas-RPL_Butik-Bontang-',
    image: butikImg, // <-- Menggunakan gambar hasil import
    label: 'BUTIK BONTANG',
  },
  {
    id: 3,
    title: 'SIM Mahasiswa',
    category: 'WEB DEVELOPMENT · DATABASE',
    description: 'Sistem Informasi Manajemen Mahasiswa yang dibangun untuk mengelola data akademik, profil mahasiswa, dan administrasi kampus secara terpusat.',
    githubUrl: 'https://github.com/lReisyaa/Sim-Mahasiswa',
    image: simImg, // <-- Menggunakan gambar hasil import
    label: 'SIM MAHASISWA',
  },
];

// ==============================
// KOMPONEN UTAMA
// ==============================
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    /* PERBAIKAN: className "app" diubah menjadi "site" agar sesuai CSS */
    <div className={`site ${darkMode ? '' : 'light'}`}>
      
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-star">✦</span>
          <span>vanesa.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        {/* HOME (HERO SECTION) */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Vanesa
              <br />
              <span>Gladisya.</span>
            </h1>

            <h2 className="role">
              Informatics Student &amp; UI/UX Designer
            </h2>

            <p className="hero-desc">
              Saya tertarik pada UI/UX Design dan Web Development, serta senang
              mempelajari bagaimana sebuah website dirancang dan dibangun.
            </p>

            <div className="hero-actions">
              <a href="#project" className="btn btn-primary">
                Explore My Work <ArrowRight size={17} />
              </a>

              <a href="#about" className="btn btn-outline">
                More About Me <ArrowDown size={17} />
              </a>
            </div>

            <div className="scroll-hint" style={{ cursor: 'pointer' }} onClick={() => window.location.href = '#about'}>
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} />
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative illustration">
            <div className="orbit"></div>
            <div className="orbit orbit-b"></div>
            <div className="orbit orbit-c"></div>
            
            <div className="planet"></div>
            <div className="planet-shine"></div>

            <div className="floating-card card-a">
              <Code2 size={16} />
              <span>Web Dev</span>
            </div>

            <div className="floating-card card-b">
              <Sparkles size={16} />
            </div>

            <div className="star star-a">✦</div>
            <div className="star star-b">✦</div>
            <div className="star star-c">✦</div>

            <div className="silhouette">
              <div className="hair"></div>
              <div className="head"></div>
              <div className="body-shape"></div>
            </div>
            
            <div className="art-floor"></div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>
              A Little Bit
              <br />
              <span className="gradient-text">About Me.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-visual">
              <div className="window-art">
                <div className="window-glow"></div>
                <div className="window-frame">
                  <div className="window-moon"></div>
                  <div className="mountain"></div>
                  <div className="mountain m2"></div>
                </div>
                <div className="plant">🌿</div>
              </div>
            </div>

            <div className="about-copy">
              <p style={{ fontSize: '16px', color: 'var(--text)', fontWeight: '600', marginBottom: '16px' }}>Hello there! 👋</p>

              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text)' }}>
                Learning, creating, and growing through technology.
              </h3>

              <p>
                Saya mahasiswa Informatika yang tertarik pada UI/UX Design dan
                Web Development. Saya senang mempelajari bagaimana sebuah
                website dirancang, mulai dari tampilan hingga cara kerjanya.
              </p>

              <p className="indonesian">
                Saya ingin terus mengembangkan kemampuan dalam merancang
                antarmuka dan membangun website melalui proses belajar dan
                pengerjaan proyek.
              </p>

              <div className="language-divider"></div>

              <a href="#connect" className="btn btn-outline" style={{ marginTop: '24px' }}>
                Let's connect <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>

            <h2>
              Skills &amp; <span className="gradient-text">Tools.</span>
            </h2>

            <p className="section-subtitle">
              Teknologi dan tools yang pernah saya pelajari dan gunakan.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-logo">
                    <Icon size={24} />
                  </div>
                  <span>{skill.name}</span>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-wrap project-section" id="project">
          <div className="section-heading">
            <p className="eyebrow">MY WORK</p>

            <h2>
              Selected <span className="gradient-text">Projects.</span>
            </h2>

            <p className="section-subtitle">
              Beberapa proyek yang sedang saya kembangkan dan pelajari.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              return (
                <article className="project-card" key={project.id}>
                  {/* Bagian Gambar Proyek */}
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={`Screenshot of ${project.title}`} 
                      className="project-image" 
                    />
                    <div className="project-image-overlay">
                      <span>{project.label}</span>
                    </div>
                  </div>

                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                    >
                      View on GitHub <ArrowRight size={16} />
                    </a>
                  </div>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-arrow"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>

          <p className="placeholder-note">
            Kunjungi GitHub saya untuk melihat update proyek lainnya.
          </p>
        </section>

        {/* CONNECT */}
        <section className="section-wrap connect-section" id="connect">
          <div className="connect-grid">
            <div className="message-card">
              <div className="message-icon">
                <Mail size={28} />
              </div>
              <h3>
                Have an idea?<br />
                <span style={{ color: 'var(--purple)', fontWeight: 'bold' }}>Let's connect.</span>
              </h3>
              <p style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '20px', lineHeight: '1.6' }}>
                Saya terbuka untuk terhubung, berbagi ide, dan belajar bersama tentang desain maupun pengembangan web.
              </p>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Mail size={16} /> Get in Touch <Send size={14} />
              </a>
            </div>

            <div className="contact-list">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">{social.label}</div>
                  <span>
                    <b>{social.name}</b>
                    <small>{social.url.replace('https://', '')}</small>
                  </span>
                  <ArrowUp size={16} className="contact-arrow" style={{ transform: 'rotate(45deg)' }} />
                </a>
              ))}

              <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon"><Mail size={16} /></div>
                <span>
                  <b>Email</b>
                  <small>vanesagladisya@gmail.com</small>
                </span>
                <ArrowUp size={16} className="contact-arrow" style={{ transform: 'rotate(45deg)' }} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="section-wrap" style={{ paddingBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          <span className="brand-star">✦</span> vanesa.
        </div>
        <p>Designed &amp; built with care by Vanesa.</p>
        <a href="#home" className="scroll-hint" style={{ marginTop: 0, padding: '10px', border: '1px solid var(--line)', borderRadius: '50%' }} aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </footer>
    </div>
  );
}

// ==============================
// RENDER APP
// ==============================
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);