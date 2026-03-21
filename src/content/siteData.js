import avatarImg from "../assets/hero.png";

export const siteData = {
  name: "Sujith Patil",
  role: "Frontend Developer",
  location: "Remote / Your City",
  tagline:
    "I build clean, fast, user-friendly web experiences with React and modern tooling.",
  email: "emailpatilsujith19@gmail.com",
  avatarSrc: avatarImg,
  links: {
    github: "https://github.com/patilsujith",
    linkedin: "https://www.linkedin.com/in/sujith-patil-529014360",
    resume: "#",
  },
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Vite",
    "UI Engineering",
    "REST APIs",
    "Testing",
  ],
  featuredProjects: ["p1", "p2", "p3"],
};

export const projects = [
  {
    id: "p1",
    title: "Portfolio Starter",
    year: "2026",
    description:
      "A multi-page React portfolio template with reusable components and a clean layout.",
    tags: ["React", "Vite", "UI"],
    links: { demo: "#", repo: "#" },
  },
  {
    id: "p2",
    title: "E-commerce UI Kit",
    year: "2025",
    description:
      "Component-driven UI library for storefront pages (cards, filters, product details).",
    tags: ["Design Systems", "React", "Accessibility"],
    links: { demo: "#", repo: "#" },
  },
  {
    id: "p3",
    title: "Realtime Dashboard",
    year: "2025",
    description:
      "A responsive analytics dashboard with charts, tables, and interactive filters.",
    tags: ["Data Viz", "UX", "Performance"],
    links: { demo: "#", repo: "#" },
  },
  {
    id: "p4",
    title: "Developer Blog",
    year: "2024",
    description:
      "A fast blog experience with markdown rendering, tagging, and SEO-friendly routing.",
    tags: ["SEO", "React", "Content"],
    links: { demo: "#", repo: "#" },
  },
];

export const experience = [
  {
    company: "Company Name",
    role: "Frontend Engineer",
    start: "2024",
    end: "Present",
    bullets: [
      "Built reusable UI components to speed up feature development.",
      "Improved performance and accessibility across key pages.",
      "Collaborated with design to deliver consistent, polished UX.",
    ],
  },
  {
    company: "Another Company",
    role: "Web Developer",
    start: "2022",
    end: "2024",
    bullets: [
      "Developed responsive layouts and implemented REST API integrations.",
      "Maintained code quality with linting, testing, and documentation.",
    ],
  },
];
