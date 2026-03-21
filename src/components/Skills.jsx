const skillGroups = [
  {
    title: "AEM & CMS",
    skills: [
      "AEM 6.x",
      "Sling Models",
      "OSGi",
      "JCR",
      "Content Fragments",
      "Experience Fragments",
      "AEM Workflows",
      "AEM Dispatcher",
      "Apache Sling",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Redux",
      "Vue.js",
      "Angular",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "Python",
      "Flask",
      "Ruby on Rails",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS Lambda",
      "EC2",
      "S3",
      "API Gateway",
      "Azure",
      "Docker",
      "Kubernetes",
      "Firebase",
    ],
  },
  {
    title: "Testing & Tooling",
    skills: [
      "Jest",
      "Cypress",
      "Selenium",
      "Protractor",
      "Cucumber",
      "Webpack",
      "Babel",
      "Apache SOLR",
    ],
  },
  {
    title: "Performance & UX",
    skills: [
      "WCAG Accessibility",
      "SEO",
      "Lazy Loading",
      "Code Splitting",
      "SSR",
      "Web Profiling",
      "AXE Library",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Skills</h2>
        <div style={styles.grid} className="mobile-flex">
          {skillGroups.map((group) => (
            <div key={group.title} style={styles.card}>
              <h3 style={styles.groupTitle}>{group.title}</h3>
              <div style={styles.pills}>
                {group.skills.map((skill) => (
                  <span key={skill} style={styles.pill}>
                    {skill}
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
  section: {
    padding: "64px 40px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#fafafa",
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  },
  card: {
    padding: "24px",
    backgroundColor: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
  },
  groupTitle: {
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#16A34A",
    marginBottom: "14px",
  },
  pills: { display: "flex", flexWrap: "wrap", gap: "6px" },
  pill: {
    padding: "4px 10px",
    backgroundColor: "#f3f4f6",
    color: "#444",
    fontSize: "12px",
    borderRadius: "4px",
    border: "1px solid #e5e7eb",
  },
};

export default Skills;
