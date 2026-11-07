const projects = [
  {
    title: "AEM Custom Forms Solution",
    company: "Scania CV AB",
    description:
      "Designed and deployed a production forms platform that replaced licensed Adobe Forms functionality. The custom solution integrated directly into Scania's AEM authoring environment and preserved the existing forms functionality, saving approximately €90,000 per year in licensing costs.",
    highlight: "€90k/yr saved",
    tech: ["AEM", "Java", "Sling Models", "JavaScript"],
  },
  {
    title: "CMS Modernization & Migration",
    company: "Scania CV AB",
    description:
      "Architected the migration of a CMS from AEM to a standalone web application built with React, Spring Boot, MongoDB, and AWS. The migration reduced annual platform costs by approximately €60,000.",
    highlight: "€60k/yr saved",
    tech: ["React", "Spring Boot", "MongoDB", "AWS"],
  },
  {
    title: "No code testing tool",
    company: "Gear Second Innovations",
    description:
      "Built a desktop testing tool with React, TypeScript, and Electron. Its no-code interface lets users test websites and applications without writing test scripts.",
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
    title: "Live Website Debugger tool",
    company: "Gear Second Innovations",
    description:
      "Built a tool using Express.js and Chrome extension to help developers debug live production website by intercepting specified libraries and mapping them to the local file system.",
    highlight: "github",
    tech: ["Chrome Extension", "Express.js", "Node.js"],
  },
  {
    title: "Open Source AI powered Search Engine",
    company: "Gear Second Innovations",
    description:
      "Built and deployed an open-source AI search engine for company websites and applications. It uses retrieval-augmented generation to supply Llama 3, running through Ollama, with relevant company information before generating an answer. Search is scoped to the company's own content.",
    highlight: "github",
    tech: ["AWS Lambda", "Ollama", "Llama3", "EC2"],
  },
  {
    title: "Headless CMS (Apache Sling)",
    company: "Scania CV AB",
    description:
      "Building a custom headless CMS on Apache Sling and Java. The design separates content management from presentation and exposes content through REST APIs so frontends can consume it independently.",
    highlight: "In Progress",
    tech: ["Apache Sling", "Java", "REST APIs"],
  },
  {
    title: "SOLR Search Integration",
    company: "Scania CV AB",
    description:
      "Integrated Apache SOLR into Scania's internal CMS platform to replace its default search. Faceted results let users narrow their queries, and relevance tuning helps surface the most useful matches first.",
    highlight: null,
    tech: ["Apache SOLR", "AEM", "React.js"],
  },
  {
    title: "AWS Lambda + Content Fragments",
    company: "Scania CV AB",
    description:
      "Built serverless AWS Lambda functions to create AEM Content Fragments automatically, removing the need for authors to create each fragment by hand. This was part of broader AEM authoring automation using Sling Jobs, workflows, event handlers, and schedulers.",
    highlight: null,
    tech: ["AWS Lambda", "AEM", "Node.js"],
  },
  {
    title: "Startup Product UI",
    company: "Confidential Startup",
    description:
      "As founder, designed and built the SaaS frontend from scratch, including responsive customer-facing views, an admin dashboard, and a reusable component library. The work also included dashboard features and integrations using GraphQL, Firebase, and AWS Lambda.",
    highlight: "Co-Founder",
    tech: ["Next.js", "Redux Toolkit", "Firebase", "Tailwind CSS", "GraphQL"],
  },
  {
    title: "SEO & Accessibility Tool",
    company: "Scania CV AB",
    description:
      "Built an internal tool that brings automated accessibility audits and SEO checks into the AEM authoring workflow. The axe library checks for accessibility issues so authors can review findings and address them before publication.",
    highlight: "WCAG",
    tech: ["AXE Library", "JavaScript", "AEM"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Key Projects</h2>
        <p className="projects-description">
          Here are some of the projects I have worked on. Unfortunatley I can't
          share the code for some of the projects due to confidentiality
          agreements or due to them being part of my work. I have marked
          projects that are available on github with a GitHub badge. I have
          marked repositories as private and they will be shared when we have
          conversations about them.
        </p>
        <div className="projects-grid">
          {projects.map((p, index) => (
            <article key={p.title} className="projects-card">
              <div className="projects-cardTop">
                <span className="projects-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="projects-title">{p.title}</h3>
                  <p className="projects-company">{p.company}</p>
                </div>
                {p.highlight && (
                  <span className="projects-highlight">{p.highlight}</span>
                )}
              </div>
              <p className="projects-desc">{p.description}</p>
              <div className="projects-techRow">
                {p.tech.map((t) => (
                  <span key={t} className="projects-tech">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
