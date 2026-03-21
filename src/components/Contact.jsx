const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact</h2>
        <p style={styles.sub}>Open to new roles, freelance, or collaborations. Feel free to reach out.</p>
        <div style={styles.items}>
          <a href="mailto:emailpatilsujith19@gmail.com" style={styles.item}>
            <span style={styles.icon}>✉</span>
            <div>
              <div style={styles.label}>Email</div>
              <div style={styles.value}>emailpatilsujith19@gmail.com</div>
            </div>
          </a>
          <a href="tel:+46736522639" style={styles.item}>
            <span style={styles.icon}>📞</span>
            <div>
              <div style={styles.label}>Phone</div>
              <div style={styles.value}>+46 736 522 639</div>
            </div>
          </a>
          <div style={styles.item}>
            <span style={styles.icon}>📍</span>
            <div>
              <div style={styles.label}>Location</div>
              <div style={styles.value}>Södertälje, Sweden</div>
            </div>
          </div>
          <div style={styles.item}>
            <span style={styles.icon}>🎓</span>
            <div>
              <div style={styles.label}>Education</div>
              <div style={styles.value}>RV College of Engineering · GPA 8.1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '64px 40px',
    backgroundColor: '#fafafa',
  },
  container: { maxWidth: '960px', margin: '0 auto' },
  heading: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111',
    marginBottom: '8px',
    letterSpacing: '-0.01em',
  },
  sub: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '32px',
  },
  items: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    textDecoration: 'none',
    color: 'inherit',
  },
  icon: { fontSize: '20px' },
  label: { fontSize: '11px', color: '#888', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' },
  value: { fontSize: '14px', color: '#111', fontWeight: '500' },
};

export default Contact;
