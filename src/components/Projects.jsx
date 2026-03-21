const projects = [
  {
    title: "AEM Custom Forms Solution",
    company: "Scania CV AB",
    description:
      "Replaced a third-party licensed AEM forms product with a fully custom-built solution, delivering identical functionality at zero licensing cost.",
    highlight: "€80k/yr saved",
    tech: ["AEM", "Java", "Sling Models", "JavaScript"],
  },
  {
    title: "No code testing tool",
    company: "Gear Second Innovations",
    description:
      "Built a no code testing tool using React.js and TypeScript to help users test their websites and applications.",
    highlight: "github",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Spring Boot",
      "PostGRESQL",
      "Electron.js",
    ],
  },
  {
    title: "Open Source AI powered Search Engine",
    company: "Gear Second Innovations",
    description:
      "Built an open source AI powered search engine using Ollama and Llama3 models to help users search for information on the companys websites and applications. The search was specific to companys data and not the internet.",
    highlight: "github",
    tech: ["AWS Lambda", "Ollama", "Llama3", "EC2"],
  },
  {
    title: "Headless CMS (Apache Sling)",
    company: "Scania CV AB",
    description:
      "Currently building a custom headless CMS on Apache Sling to decouple content management from frontend delivery.",
    highlight: "In Progress",
    tech: ["Apache Sling", "Java", "REST APIs"],
  },
  {
    title: "SOLR Search Integration",
    company: "Scania CV AB",
    description:
      "Integrated Apache SOLR into Scania's internal platform, replacing default search with a fast, faceted, and relevance-tuned engine.",
    highlight: null,
    tech: ["Apache SOLR", "AEM", "React.js"],
  },
  {
    title: "AWS Lambda + Content Fragments",
    company: "Scania CV AB",
    description:
      "Built serverless Lambda functions to automate AEM Content Fragment creation, removing manual authoring effort entirely.",
    highlight: null,
    tech: ["AWS Lambda", "AEM", "Node.js"],
  },
  {
    title: "Startup Product UI",
    company: "Confidential Startup",
    description:
      "As founder, designed and built the complete frontend of a SaaS product — user-facing UI, admin dashboard, and component library — from scratch.",
    highlight: "Co-Founder",
    tech: ["Next.js", "Redux Toolkit", "Firebase", "Tailwind CSS", "GraphQL"],
  },
  {
    title: "SEO & Accessibility Tool",
    company: "Scania CV AB",
    description:
      "Built an internal tool using the AXE library for automated accessibility auditing and SEO checks, integrated into the AEM authoring workflow.",
    highlight: "WCAG",
    tech: ["AXE Library", "JavaScript", "AEM"],
  },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Key Projects</h2>
        <p style={styles.description}>
          Here are some of the projects I have worked on. Unfortunatley I can't
          share the code for some of the projects due to confidentiality
          agreements or due to them being part of my work. I have marked
          projects that are available on github with a GitHub badge. I have
          marked repositories as private and they will be shared when we have
          conversations about them.
        </p>
        <div style={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} style={styles.card}>
              <div style={styles.cardTop}>
                <div>
                  <h3 style={styles.title}>{p.title}</h3>
                  <p style={styles.company}>{p.company}</p>
                </div>
                {p.highlight && (
                  <span style={styles.highlight}>{p.highlight}</span>
                )}
              </div>
              <p style={styles.desc}>{p.description}</p>
              <div style={styles.techRow}>
                {p.tech.map((t) => (
                  <span key={t} style={styles.tech}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  description: {
    fontSize: "1.4rem",
    color: "#555",
    lineHeight: 1.65,
    marginBottom: "32px",
  },
  section: {
    padding: "64px 40px",
    borderBottom: "1px solid #e5e7eb",
  },
  container: { maxWidth: "960px", margin: "0 auto" },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#111",
    marginBottom: "32px",
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },
  card: {
    padding: "24px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#111",
    marginBottom: "2px",
  },
  company: { fontSize: "12px", color: "#888" },
  highlight: {
    padding: "3px 10px",
    backgroundColor: "#eff6ff",
    color: "#16A34A",
    fontSize: "11px",
    borderRadius: "999px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  desc: {
    fontSize: "13px",
    color: "#555",
    lineHeight: 1.65,
  },
  techRow: { display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "auto" },
  tech: {
    padding: "3px 8px",
    backgroundColor: "#f3f4f6",
    color: "#555",
    fontSize: "11px",
    borderRadius: "4px",
    border: "1px solid #e5e7eb",
  },
};

export default Projects;
