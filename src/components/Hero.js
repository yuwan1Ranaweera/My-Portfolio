import React from 'react';

function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.greeting}>👋 Hi, I'm</p>
        <h1 style={styles.name}>Yuwani</h1>
        <h2 style={styles.title}>Software Engineer Intern</h2>
        <p style={styles.subtitle}>
          I build beautiful, responsive web apps with modern technologies.
        </p>
        <div style={styles.buttonRow}>
          <a href="#projects" style={styles.btnPrimary}>View My Work</a>
          <a href="#contact" style={styles.btnSecondary}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8c8d4, #e91e8c, #c2185b)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '700px',
  },
  greeting: {
    fontSize: '1.2rem',
    color: '#0b0b0b',
    marginBottom: '10px',
    fontWeight: '600',
  },
  name: {
    fontSize: '4rem',
    fontWeight: '800',
    background: '#f1e6e7',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.8rem',
    color: '#a8b2d8',
    fontWeight: '400',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#4a4b4f',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  buttonRow: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    padding: '14px 32px',
    background: 'linear-gradient(90deg, #be139e, #6e134b)',
    color: '#fff',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
  },
  btnSecondary: {
    padding: '14px 32px',
    border: '2px solid #d76cb0',
    color: '#282525',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
  },
};

export default Hero;