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
  {
    title: "AI tools",
    skills: ["Cursor", "Codex", "Amazon Q", "Claude", "Ollama"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills-card">
              <h3 className="skills-groupTitle">{group.title}</h3>
              <div className="skills-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills-pill">
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

export default Skills;
