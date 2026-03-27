import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML/CSS', emoji: '🎨', level: '85%', color: '#e94560' },
    { name: 'JavaScript', emoji: '⚡', level: '75%', color: '#f5a623' },
    { name: 'React', emoji: '⚛️', level: '70%', color: '#61dafb' },
    { name: 'Python', emoji: '🐍', level: '75%', color: '#3776ab' },
    { name: 'Java', emoji: '☕', level: '70%', color: '#f89820' },
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Skills</h2>
        <div style={styles.underline}></div>
        <div style={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} style={styles.card}>
              <div style={styles.emoji}>{skill.emoji}</div>
              <h3 style={styles.skillName}>{skill.name}</h3>
              <div style={styles.barBackground}>
                <div
                  style={{
                    ...styles.barFill,
                    width: skill.level,
                    background: skill.color,
                  }}
                ></div>
              </div>
              <p style={{ color: skill.color, fontWeight: '700' }}>{skill.level}</p>
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
    background: '#d22e78',
  },
  container: {
    maxWidth: '900px',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  card: {
    background: '#94537b',
    borderRadius: '20px',
    padding: '30px',
    border: '1px solid #e9456020',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  emoji: {
    fontSize: '3rem',
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  barBackground: {
    width: '100%',
    height: '8px',
    background: '#0f0f0f',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: '10px',
    transition: 'width 1s ease',
  },
};

export default Skills;