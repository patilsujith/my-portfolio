import { useState } from "react";

const jobs = [
  {
    company: "Scania CV AB",
    role: "Developer",
    period: "Jun 2022 – Present",
    location: "Södertälje, Sweden",
    current: true,
    bullets: [
      "Designed custom AEM forms solution, saving €80k/year in licensing costs",
      "Built AWS Lambda functions to automate AEM Content Fragment creation",
      "Integrated SOLR search engine for improved site search",
      "Developed dark/light mode image component based on brightness detection",
      "Created SEO & accessibility tool using the AXE library",
      "Built a Chrome extension to streamline development workflows",
      "Implemented custom Sling Jobs, Event Handlers, Workflows & Schedulers",
      "Currently building a custom headless CMS with Apache Sling",
    ],
    tech: [
      "AEM",
      "Java",
      "React.js",
      "AWS Lambda",
      "SOLR",
      "Sling Models",
      "EC2",
    ],
  },
  {
    company: "Confidential Startup",
    role: "Founder & Lead Developer",
    period: "Jun 2024 – Present",
    location: "Remote",
    current: true,
    bullets: [
      "Built full product UI with React.js and Next.js from scratch",
      "Optimized performance using Redux Toolkit and React Query",
      "Serverless backend integrations with Firebase and AWS Lambda",
      "Designed reusable component library with Tailwind CSS and Material UI",
      "Developed admin dashboard with React and Chart.js",
    ],
    tech: [
      "Next.js",
      "Redux Toolkit",
      "Firebase",
      "Tailwind CSS",
      "GraphQL",
      "Chart.js",
    ],
  },
  {
    company: "Intuit",
    role: "Software Engineer II",
    period: "Jun 2021 – Feb 2022",
    location: "Bengaluru, India",
    current: false,
    bullets: [
      "Built integrated commerce flow UI in close collaboration with UX designers",
      "Developed scalable React components with Redux state management",
      "Led POC for migrating legacy databases to microservices architecture",
    ],
    tech: [
      "React.js",
      "Redux",
      "Ember.js",
      "Spring Boot",
      "Ruby on Rails",
      "SCSS",
    ],
  },
  {
    company: "Hexaware",
    role: "Senior Software Engineer",
    period: "Jun 2019 – May 2021",
    location: "Bengaluru, India",
    current: false,
    bullets: [
      "Built RESTful APIs with Spring Boot and Express.js",
      "Developed internal hiring tool using Vue.js and Spring Boot",
      "Created web scraping tool with Python and Selenium",
      "Built custom video player component replacing Dynamic Media for a fashion client",
      "Customized AEM DAM console to match client requirements",
    ],
    tech: ["AEM", "Vue.js", "Spring Boot", "Express.js", "Python", "Selenium"],
  },
  {
    company: "Publicis Sapient",
    role: "Associate Technology",
    period: "Jun 2015 – May 2019",
    location: "Bengaluru, India",
    current: false,
    bullets: [
      "Designed and built cruise booking websites using AEM",
      "Developed custom AEM components and Sling annotations",
      "Built React.js components with Redux and PubSub pattern",
      "Automated end-to-end UI tests with Protractor and Cucumber",
      "Led AEM content migration and client library customizations",
    ],
    tech: [
      "AEM",
      "Java",
      "React.js",
      "Redux",
      "SCSS",
      "Protractor",
      "Cucumber",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Experience</h2>
        <div style={styles.layout}>
          {/* Sidebar */}
          <div style={styles.sidebar}>
            {jobs.map((j, i) => (
              <button
                key={j.company}
                onClick={() => setActive(i)}
                style={{
                  ...styles.tab,
                  ...(active === i ? styles.tabActive : {}),
                }}
              >
                <span style={styles.tabCompany}>{j.company}</span>
                {j.current && <span style={styles.badge}>Now</span>}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={styles.content}>
            <div style={styles.roleRow}>
              <div>
                <h3 style={styles.role}>{job.role}</h3>
                <p style={styles.meta}>
                  {job.company} · {job.location}
                </p>
              </div>
              <span style={styles.period}>{job.period}</span>
            </div>
            <ul style={styles.bullets}>
              {job.bullets.map((b, i) => (
                <li key={i} style={styles.bullet}>
                  {b}
                </li>
              ))}
            </ul>
            <div style={styles.techRow}>
              {job.tech.map((t) => (
                <span key={t} style={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
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
  layout: { display: "flex", gap: "32px", alignItems: "flex-start" },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    minWidth: "180px",
    borderLeft: "2px solid #e5e7eb",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    gap: "8px",
    borderLeft: "2px solid transparent",
    marginLeft: "-2px",
  },
  tabActive: {
    borderLeftColor: "#2563eb",
    backgroundColor: "#eff6ff",
  },
  tabCompany: { fontSize: "13px", color: "#333", fontWeight: "500" },
  badge: {
    fontSize: "10px",
    backgroundColor: "#dcfce7",
    color: "#15803d",
    padding: "2px 6px",
    borderRadius: "999px",
    fontWeight: "600",
  },
  content: { flex: 1 },
  roleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
    gap: "16px",
  },
  role: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111",
    marginBottom: "4px",
  },
  meta: { fontSize: "13px", color: "#666" },
  period: { fontSize: "12px", color: "#888", whiteSpace: "nowrap" },
  bullets: { paddingLeft: "18px", marginBottom: "20px" },
  bullet: {
    fontSize: "14px",
    color: "#444",
    lineHeight: 1.7,
    marginBottom: "6px",
  },
  techRow: { display: "flex", flexWrap: "wrap", gap: "6px" },
  techTag: {
    padding: "3px 10px",
    backgroundColor: "#f3f4f6",
    color: "#555",
    fontSize: "11px",
    borderRadius: "4px",
    border: "1px solid #e5e7eb",
  },
};

export default Experience;
