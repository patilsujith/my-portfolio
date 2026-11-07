import { useState } from "react";

const jobs = [
  {
    company: "Scania CV AB",
    role: "Developer",
    period: "Jun 2022 – Present",
    location: "Södertälje, Sweden",
    current: true,
    bullets: [
      "Designed custom AEM forms solution, saving approximately €90k/year in licensing costs",
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

function JobDetails({ job }) {
  return (
    <>
      <ul className="experience-bullets">
        {job.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <div className="experience-techRow">
        {job.tech.map((tech) => (
          <span key={tech} className="experience-techTag">{tech}</span>
        ))}
      </div>
    </>
  );
}

const Experience = () => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const job = jobs[active];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>
        <div className="experience-layout">
          <div className="experience-sidebar">
            {jobs.map((entry, index) => (
              <button
                key={entry.company}
                className="experience-tab"
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                {entry.company}
                {entry.current && <span className="experience-badge">Now</span>}
              </button>
            ))}
          </div>
          <div className="experience-content">
            <div className="experience-roleRow">
              <div>
                <h3>{job.role}</h3>
                <p>{job.company} · {job.location}</p>
              </div>
              <span className="experience-period">{job.period}</span>
            </div>
            <JobDetails job={job} />
          </div>
        </div>

        <div className="experience-accordion">
          {jobs.map((entry, index) => {
            const isOpen = expanded === index;
            const panelId = `experience-job-${index}`;
            return (
              <div key={entry.company} className="experience-disclosure">
                <button
                  className="experience-tab"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <span>
                    <span className="experience-company">
                      {entry.company}
                      {entry.current && <span className="experience-badge">Now</span>}
                    </span>
                    <span className="experience-period">{entry.role} · {entry.period}</span>
                  </span>
                  <span aria-hidden="true">{isOpen ? "▴" : "▾"}</span>
                </button>
                <div id={panelId} className="experience-content" hidden={!isOpen}>
                  <p className="experience-location">📍 {entry.location}</p>
                  <JobDetails job={entry} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
