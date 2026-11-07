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
    <section id="about" className="hero-section">
      <div className="hero-container">
        <div className="hero-topRow">
          <div className="hero-identity">
            <p className="hero-tag">AEM Full Stack & Frontend Lead</p>
            <h1 className="hero-name">Sujith Patil</h1>
            <div className="hero-metaRow">
              <span className="hero-metaItem">📍 Södertälje, Sweden</span>
              <span className="hero-metaDot">·</span>
              <span className="hero-metaItem">🎓 RV College of Engineering</span>
              <span className="hero-metaDot">·</span>
              <span className="hero-metaItem">🌐 Open to Opportunities</span>
            </div>
            <p className="hero-bio">
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
            <div className="hero-ctaRow">
              <a
                href="mailto:emailpatilsujith19@gmail.com"
                className="hero-btnPrimary"
              >
                Email Me
              </a>
              <a href="tel:+46736522639" className="hero-btnOutline">
                Call Me
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none">
              <path d="M200 18v364M18 200h364M72 72l256 256M72 328 328 72" stroke="currentColor" opacity=".24" />
              <circle cx="200" cy="200" r="152" stroke="currentColor" strokeDasharray="2 6" />
              <g stroke="currentColor" strokeWidth="1.5" transform="rotate(-34 200 200)">
                {[20, 40, 60, 80, 100, 120, 140].map((radius) => (
                  <ellipse key={radius} cx="200" cy="200" rx="145" ry={radius} />
                ))}
              </g>
              <circle cx="200" cy="200" r="9" fill="#ee653d" />
              <circle cx="315" cy="124" r="5" fill="currentColor" />
              <circle cx="86" cy="276" r="5" fill="currentColor" />
              <path d="M32 60V32h28m280 0h28v28m0 280v28h-28m-280 0H32v-28" stroke="currentColor" />
            </svg>
          </div>
        </div>

        {/* What I Do */}
        <div>
          <p className="hero-sectionLabel">What I Do</p>
          <div className="hero-highlightsGrid">
            {highlights.map((h) => (
              <div key={h.title} className="hero-highlightCard">
                <div>
                  <p className="hero-highlightTitle">
                    <span className="hero-highlightIcon">{h.icon}</span>
                    {h.title}
                  </p>
                  <p className="hero-highlightDesc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
