import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Bill Vault App',
      description:
        'BillVault is an AI-powered smart bill management and expense insight mobile application designed for individuals and small businesses in Sri Lanka. It addresses the common problem of misplaced and disorganised paper bills, receipts, and warranty cards that result in financial losses for everyday users. The system enables users to scan and upload bills using OCR technology, which automatically extracts and categorises key information while securely storing all documents in the cloud. Additional features include warranty tracking, expense analytics, automated e-bill importing, secure document sharing, and a gamification system to encourage consistent user engagement.',
      tech: [],
      emoji: '🧾',
      color: '#6e134b',
      link: '#',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A responsive personal portfolio website built with React to showcase my skills and projects.',
      tech: ['React', 'CSS', 'JavaScript'],
      emoji: '🎓',
      color: '#6e134b',
      link: 'my-portfolio-eta-murex-45.vercel.app',
    },
    {
      title: 'Cake by Duck Website',
      description:
        'A Python app that fetches real-time weather data using an API and displays it in a clean UI.',
      tech: ['Python', 'API'],
      emoji: '🎂',
      color: '#6e134b',
      link: '#',
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Projects</h2>
        <div style={styles.underline}></div>
        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} style={styles.card}>
              <div style={{ ...styles.iconBox, background: project.color + '20', border: `1px solid ${project.color}40` }}>
                <span style={styles.emoji}>{project.emoji}</span>
              </div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.techRow}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{ ...styles.techBadge, background: project.color + '20', color: project.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} style={{ ...styles.btn, background: project.color }}>
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 20px',
    background: '#94537b',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '10px',
  },
  underline: {
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #b4198a, #1b1519)',
    margin: '0 auto 50px auto',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    background: '#d22e78',
    borderRadius: '20px',
    padding: '30px',
    border: '1px solid #e9456020',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
    textAlign: 'center',
  },
  iconBox: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: '2rem',
  },
  projectTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  description: {
    fontSize: '0.95rem',
    color: '#a8b2d8',
    lineHeight: '1.7',
  },
  techRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  techBadge: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  btn: {
    padding: '10px 24px',
    borderRadius: '20px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '0.9rem',
    marginTop: '6px',
  },
};

export default Projects;