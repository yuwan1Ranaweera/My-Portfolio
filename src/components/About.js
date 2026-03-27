import React from 'react';

function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <div style={styles.underline}></div>
        <div style={styles.card}>
          <div style={styles.emoji}>👩‍💻</div>
          <p style={styles.bio}>
            Hi! I'm <span style={styles.highlight}>Yuwani</span>, a passionate
            Software Engineering student who loves building modern web applications.
            I enjoy turning ideas into reality through clean and efficient code.
          </p>
          <p style={styles.bio}>
            I'm currently looking for an internship opportunity where I can
            contribute, learn, and grow as a developer. I'm passionate about
            problem solving, UI design, and building things that matter.
          </p>
          <div style={styles.infoRow}>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>📍 Location</span>
              <span style={styles.infoValue}>Sri Lanka</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>🎓 Degree</span>
              <span style={styles.infoValue}>Software Engineering</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>💼 Status</span>
              <span style={styles.infoValue}>Open to Internships</span>
            </div>
          </div>
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
    maxWidth: '800px',
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
  card: {
    background: '#d22e78',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid #e9456020',
  },
  emoji: {
    fontSize: '4rem',
    marginBottom: '20px',
  },
  bio: {
    fontSize: '1.1rem',
    color: '#e2e3e8',
    lineHeight: '1.9',
    marginBottom: '20px',
  },
  highlight: {
    color: '#160206',
    fontWeight: '700',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  infoLabel: {
    fontSize: '0.85rem',
    color: '#010718',
  },
  infoValue: {
    fontSize: '1rem',
    color: '#a8b2d8',
    fontWeight: '700',
  },
};

export default About;