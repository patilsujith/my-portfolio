import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

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
    tech: ["AEM", "Java", "React.js", "AWS Lambda", "SOLR", "Sling Models", "EC2"],
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
    tech: ["Next.js", "Redux Toolkit", "Firebase", "Tailwind CSS", "GraphQL", "Chart.js"],
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
    tech: ["React.js", "Redux", "Ember.js", "Spring Boot", "Ruby on Rails", "SCSS"],
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
    tech: ["AEM", "Java", "React.js", "Redux", "SCSS", "Protractor", "Cucumber"],
  },
];

const skillGroups = [
  { title: "AEM & CMS", skills: ["AEM 6.x", "Sling Models", "OSGi", "JCR", "Content Fragments", "Experience Fragments", "AEM Workflows", "AEM Dispatcher", "Apache Sling"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Redux", "Vue.js", "Angular", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "React Native"] },
  { title: "Backend & APIs", skills: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "GraphQL", "Python", "Flask", "Ruby on Rails"] },
  { title: "Cloud & DevOps", skills: ["AWS Lambda", "EC2", "S3", "API Gateway", "Azure", "Docker", "Kubernetes", "Firebase"] },
  { title: "Testing & Tooling", skills: ["Jest", "Cypress", "Selenium", "Protractor", "Cucumber", "Webpack", "Babel", "Apache SOLR"] },
  { title: "Performance & UX", skills: ["WCAG Accessibility", "SEO", "Lazy Loading", "Code Splitting", "SSR", "Web Profiling", "AXE Library"] },
];

const projects = [
  { title: "AEM Custom Forms Solution", company: "Scania CV AB", description: "Replaced a third-party licensed AEM forms product with a fully custom-built solution, delivering identical functionality at zero licensing cost.", highlight: "€80k/yr saved", tech: ["AEM", "Java", "Sling Models", "JavaScript"] },
  { title: "Headless CMS (Apache Sling)", company: "Scania CV AB", description: "Currently building a custom headless CMS on Apache Sling to decouple content management from frontend delivery.", highlight: "In Progress", tech: ["Apache Sling", "Java", "REST APIs"] },
  { title: "SOLR Search Integration", company: "Scania CV AB", description: "Integrated Apache SOLR into Scania's internal platform, replacing default search with a fast, faceted, relevance-tuned engine.", highlight: null, tech: ["Apache SOLR", "AEM", "React.js"] },
  { title: "AWS Lambda + Content Fragments", company: "Scania CV AB", description: "Built serverless Lambda functions to automate AEM Content Fragment creation, removing manual authoring effort entirely.", highlight: null, tech: ["AWS Lambda", "AEM", "Node.js"] },
  { title: "Startup Product UI", company: "Confidential Startup", description: "As founder, designed and built the complete frontend of a SaaS product — user-facing UI, admin dashboard, and component library — from scratch.", highlight: "Founder", tech: ["Next.js", "Redux Toolkit", "Firebase", "Tailwind CSS"] },
  { title: "SEO & Accessibility Tool", company: "Scania CV AB", description: "Built an internal tool using the AXE library for automated accessibility auditing and SEO checks, integrated into the AEM authoring workflow.", highlight: "WCAG", tech: ["AXE Library", "JavaScript", "AEM"] },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const Navbar = ({ active, setActive }) => {
  const links = ["about", "experience", "skills", "projects", "contact"];
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 40px", borderBottom: "1px solid #e5e7eb", backgroundColor: "#fff", position: "sticky", top: 0, zIndex: 100 }}>
      <span style={{ fontWeight: 700, fontSize: 15, color: "#111", letterSpacing: "-0.01em" }}>Sujith Patil</span>
      <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => setActive(l)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: active === l ? "#2563eb" : "#555", fontWeight: active === l ? 600 : 400, textTransform: "capitalize", padding: "2px 0", borderBottom: active === l ? "2px solid #2563eb" : "2px solid transparent" }}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Hero = () => (
  <section style={{ padding: "56px 40px", borderBottom: "1px solid #e5e7eb" }}>
    <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", gap: 64, alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 11, color: "#2563eb", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>AEM Full Stack & Frontend Developer</p>
        <h1 style={{ fontSize: 40, fontWeight: 700, color: "#111", letterSpacing: "-0.02em", marginBottom: 6, lineHeight: 1.1 }}>Sujith Patil</h1>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>📍 Södertälje, Sweden</p>
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>
          8+ years building scalable web applications with Adobe Experience Manager, React.js, Java, and JavaScript. Experienced across the full stack — from custom Sling models and AEM workflows to React SPAs and serverless AWS integrations.
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="mailto:emailpatilsujith19@gmail.com" style={{ padding: "9px 20px", backgroundColor: "#111", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 500, borderRadius: 4 }}>Email Me</a>
          <a href="tel:+46736522639" style={{ padding: "9px 20px", border: "1px solid #d1d5db", color: "#333", textDecoration: "none", fontSize: 13, borderRadius: 4 }}>+46 736 522 639</a>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, minWidth: 220 }}>
        {[["8+", "Years Exp."], ["4", "Companies"], ["€80k", "Saved / yr"], ["2", "Active Roles"]].map(([v, l]) => (
          <div key={l} style={{ padding: "18px 20px", border: "1px solid #e5e7eb", borderRadius: 6 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#111", lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = jobs[active];
  return (
    <section style={{ padding: "56px 40px", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 28, letterSpacing: "-0.01em" }}>Experience</h2>
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: 175, borderLeft: "2px solid #e5e7eb" }}>
            {jobs.map((j, i) => (
              <button key={j.company} onClick={() => setActive(i)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: active === i ? "#eff6ff" : "none", border: "none", cursor: "pointer", textAlign: "left", borderLeft: active === i ? "2px solid #2563eb" : "2px solid transparent", marginLeft: -2, gap: 6 }}>
                <span style={{ fontSize: 12, color: active === i ? "#1d4ed8" : "#444", fontWeight: active === i ? 600 : 400 }}>{j.company}</span>
                {j.current && <span style={{ fontSize: 9, backgroundColor: "#dcfce7", color: "#15803d", padding: "2px 6px", borderRadius: 999, fontWeight: 700 }}>Now</span>}
              </button>
            ))}
          </div>
          {/* Content */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 3 }}>{job.role}</h3>
                <p style={{ fontSize: 13, color: "#777" }}>{job.company} · {job.location}</p>
              </div>
              <span style={{ fontSize: 12, color: "#999" }}>{job.period}</span>
            </div>
            <ul style={{ paddingLeft: 18, marginBottom: 18 }}>
              {job.bullets.map((b, i) => (
                <li key={i} style={{ fontSize: 13, color: "#444", lineHeight: 1.7, marginBottom: 5 }}>{b}</li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {job.tech.map(t => (
                <span key={t} style={{ padding: "3px 9px", backgroundColor: "#f3f4f6", color: "#555", fontSize: 11, borderRadius: 4, border: "1px solid #e5e7eb" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section style={{ padding: "56px 40px", borderBottom: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}>
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 28, letterSpacing: "-0.01em" }}>Skills</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {skillGroups.map(g => (
          <div key={g.title} style={{ padding: "22px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 6 }}>
            <h3 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#2563eb", marginBottom: 12 }}>{g.title}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {g.skills.map(s => (
                <span key={s} style={{ padding: "3px 9px", backgroundColor: "#f3f4f6", color: "#444", fontSize: 11, borderRadius: 4, border: "1px solid #e5e7eb" }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section style={{ padding: "56px 40px", borderBottom: "1px solid #e5e7eb" }}>
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 28, letterSpacing: "-0.01em" }}>Key Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {projects.map(p => (
          <div key={p.title} style={{ padding: "22px", border: "1px solid #e5e7eb", borderRadius: 6, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 2 }}>{p.title}</h3>
                <p style={{ fontSize: 11, color: "#999" }}>{p.company}</p>
              </div>
              {p.highlight && <span style={{ padding: "3px 10px", backgroundColor: "#eff6ff", color: "#2563eb", fontSize: 11, borderRadius: 999, fontWeight: 600, whiteSpace: "nowrap" }}>{p.highlight}</span>}
            </div>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{p.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: "auto" }}>
              {p.tech.map(t => (
                <span key={t} style={{ padding: "2px 8px", backgroundColor: "#f3f4f6", color: "#666", fontSize: 11, borderRadius: 4, border: "1px solid #e5e7eb" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section style={{ padding: "56px 40px", backgroundColor: "#fafafa" }}>
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 8, letterSpacing: "-0.01em" }}>Contact</h2>
      <p style={{ fontSize: 14, color: "#666", marginBottom: 28 }}>Open to new roles, freelance projects, or collaborations.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {[
          { icon: "✉", label: "Email", value: "emailpatilsujith19@gmail.com", href: "mailto:emailpatilsujith19@gmail.com" },
          { icon: "📞", label: "Phone", value: "+46 736 522 639", href: "tel:+46736522639" },
          { icon: "📍", label: "Location", value: "Södertälje, Sweden", href: null },
          { icon: "🎓", label: "Education", value: "RV College of Engineering · GPA 8.1", href: null },
        ].map(item => {
          const Tag = item.href ? "a" : "div";
          return (
            <Tag key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 6, textDecoration: "none", color: "inherit" }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 10, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#111", fontWeight: 500 }}>{item.value}</div>
              </div>
            </Tag>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const sectionMap = {
    about: <Hero />,
    experience: <Experience />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar active={activeSection} setActive={setActiveSection} />
      {sectionMap[activeSection]}
      <footer style={{ padding: "16px 40px", borderTop: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#bbb" }}>
        <span>Sujith Patil</span>
        <span>AEM Full Stack & Frontend Developer · Södertälje, Sweden</span>
      </footer>
    </div>
  );
}
