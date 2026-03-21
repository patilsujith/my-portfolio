const Hero = () => {
  const highlights = [
    {
      icon: "⚙️",
      title: "AEM Expert",
      desc: "Custom components, Sling models, OSGi, workflows, DAM — deep expertise across the AEM 6.x stack.",
    },
    {
      icon: "⚛️",
      title: "React / Next.js",
      desc: "SPAs, SSR, Redux Toolkit, React Query — building performant, scalable frontends since 2015.",
    },
    {
      icon: "☁️",
      title: "Cloud & Serverless",
      desc: "AWS Lambda, EC2, API Gateway, Firebase — serverless pipelines and cloud-native integrations.",
    },
    {
      icon: "🔧",
      title: "Full Stack Java",
      desc: "Spring Boot APIs, microservices architecture, backend integrations with AEM and third-party services.",
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Top: Identity + Stats */}
        <div style={styles.topRow}>
          <div style={styles.identity}>
            <p style={styles.tag}>AEM Full Stack & Frontend Developer</p>
            <h1 style={styles.name}>Sujith Patil</h1>
            <div style={styles.metaRow}>
              <span style={styles.metaItem}>📍 Södertälje, Sweden</span>
              <span style={styles.metaDot}>·</span>
              <span style={styles.metaItem}>🎓 RV College of Engineering</span>
              <span style={styles.metaDot}>·</span>
              <span style={styles.metaItem}>🌐 Open to Opportunities</span>
            </div>
            <p style={styles.bio}>
              A versatile engineer with <strong>10+ years</strong> of hands-on
              experience designing and building enterprise-grade web
              applications. Deep expertise in{" "}
              <strong>Adobe Experience Manager (AEM)</strong>,{" "}
              <strong>React.js</strong>, <strong>Java</strong>, and{" "}
              <strong>cloud-native AWS</strong> architectures. Currently a
              Developer at Scania CV AB and founder of a stealth SaaS startup —
              bringing the same rigour to both. Known for reducing costs,
              improving performance, and shipping reliable software that scales.
              I am also a freelance contractor who has registered a company /
              propritership and owns{" "}
              <strong>
                <em>Gear Second Innovations</em>
              </strong>
            </p>
            <div style={styles.ctaRow}>
              <a
                href="mailto:emailpatilsujith19@gmail.com"
                style={styles.btnPrimary}
              >
                Email Me
              </a>
              <a href="tel:+46736522639" style={styles.btnOutline}>
                Call Me
              </a>
            </div>
          </div>
        </div>

        <div style={styles.divider} />

        {/* What I Do */}
        <div>
          <p style={styles.sectionLabel}>What I Do</p>
          <div style={styles.highlightsGrid} className="mobile-flex">
            {highlights.map((h) => (
              <div key={h.title} style={styles.highlightCard}>
                <div>
                  <p style={styles.highlightTitle}>
                    <span style={styles.highlightIcon}>{h.icon}</span>
                    {h.title}
                  </p>
                  <p style={styles.highlightDesc}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.divider} />
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "56px 40px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#fff",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  },
  topRow: {
    display: "flex",
    gap: "48px",
    alignItems: "flex-start",
  },
  identity: { flex: 1 },
  tag: {
    fontSize: "11px",
    color: "#16A34A",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "10px",
  },
  name: {
    fontSize: "42px",
    fontWeight: "700",
    color: "#111",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
    marginBottom: "10px",
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "18px",
    flexWrap: "wrap",
  },
  metaItem: { fontSize: "12px", color: "#666" },
  metaDot: { fontSize: "12px", color: "#ccc" },
  bio: {
    fontSize: "1.6rem",
    color: "#444",
    lineHeight: 1.75,
    marginBottom: "24px",
  },
  ctaRow: { display: "flex", gap: "10px" },
  btnPrimary: {
    padding: "9px 20px",
    backgroundColor: "#111",
    color: "#fff",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "500",
    borderRadius: "4px",
  },
  btnOutline: {
    padding: "9px 20px",
    border: "1px solid #d1d5db",
    color: "#333",
    textDecoration: "none",
    fontSize: "13px",
    borderRadius: "4px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    minWidth: "230px",
  },
  stat: {
    padding: "16px 18px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  statVal: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#111",
    lineHeight: 1,
  },
  statLabel: { fontSize: "11px", color: "#888" },
  divider: {
    height: "1px",
    backgroundColor: "#f0f0f0",
  },
  sectionLabel: {
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#999",
    marginBottom: "14px",
  },
  highlightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
  },
  highlightCard: {
    padding: "16px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#fafafa",
  },
  highlightIcon: {
    fontSize: "20px",
    marginRight: "8px",
  },
  highlightTitle: {
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#111",
    marginBottom: "4px",
  },
  highlightDesc: {
    marginTop: "8px",
    fontSize: "1.4rem",
    color: "#666",
    lineHeight: 1.6,
  },
  bottomRow: {
    display: "flex",
    gap: "48px",
    alignItems: "flex-start",
  },
  expertiseCol: { flex: 1 },
  expertisePills: { display: "flex", flexWrap: "wrap", gap: "7px" },
  pill: {
    padding: "5px 12px",
    backgroundColor: "#f3f4f6",
    color: "#333",
    fontSize: "12px",
    borderRadius: "4px",
    border: "1px solid #e5e7eb",
    fontWeight: "500",
  },
  contactCol: { minWidth: "260px" },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    color: "#333",
    textDecoration: "none",
  },
};

export default Hero;
