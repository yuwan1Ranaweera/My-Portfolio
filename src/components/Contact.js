import React from 'react';

function Contact() {
  const contacts = [
    { label: 'Email', value: 'yuwani.work@gmail.com', emoji: '📧', link: 'mailto:yuwani@gmail.com', color: '#e94560' },
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/yuwani-ranaweera/', emoji: '💼', link: 'https://linkedin.com/in/yuwani', color: '#f5a623' },
    { label: 'GitHub', value: 'https://github.com/yuwan1Ranaweera', emoji: '🐙', link: 'https://github.com/yuwani', color: '#61dafb' },
  ];

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>
        <div style={styles.underline}></div>
        <p style={styles.subtext}>
          I'm currently looking for internship opportunities. Whether you have a question or just want to say hi, my inbox is always open! 😊
        </p>
        <div style={styles.grid}>
          {contacts.map((contact) => {
            const cardStyle = {
              ...styles.card,
              textDecoration: 'none',
              cursor: 'pointer',
            };
            const iconStyle = {
              ...styles.iconBox,
              background: contact.color + '20',
              border: '1px solid ' + contact.color + '40',
            };
            const labelStyle = {
              ...styles.label,
              color: contact.color,
            };
            return (
              <a key={contact.label} href={contact.link} target="_blank" rel="noreferrer" style={cardStyle}>
                <div style={iconStyle}>
                  <span style={styles.emoji}>{contact.emoji}</span>
                </div>
                <h3 style={labelStyle}>{contact.label}</h3>
                <p style={styles.value}>{contact.value}</p>
              </a>
            );
          })}
        </div>
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Made with ❤️ by <span style={styles.highlight}>Yuwani</span> • 2026
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '100px 20px 60px', background: '#d22e78' },
  container: { maxWidth: '900px', margin: '0 auto', textAlign: 'center' },
  heading: { fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' },
  underline: { width: '60px', height: '4px', background: 'linear-gradient(90deg, #b4198a, #1b1519)', margin: '0 auto 30px auto', borderRadius: '2px' },
  subtext: { fontSize: '1.1rem', color: '#a8b2d8', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 50px auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '60px' },
  card: { background: '#94537b', borderRadius: '20px', padding: '30px', border: '1px solid #e9456020', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' },
  iconBox: { width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: '2rem' },
  label: { fontSize: '1.2rem', fontWeight: '700' },
  value: { fontSize: '0.9rem', color: '#dbdee4' },
  footer: { borderTop: '1px solid #ffffff10', paddingTop: '30px' },
  footerText: { color: '#eaecf4', fontSize: '0.95rem' },
  highlight: { color: '#6e134b', fontWeight: '700' },
};

export default Contact;