import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, siteData } from '../content/siteData.js'

function getFeaturedProjects() {
  return siteData.featuredProjects
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean)
}

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <div className="page">
      <section className="hero">
        <Container>
          <div className="hero__grid">
            <div className="hero__copy">
              <div className="hero__kicker">
                <span className="dot" aria-hidden="true" />
                {siteData.location}
              </div>
              <h1 className="hero__title">
                {siteData.name} <span className="hero__titleAccent">—</span> {siteData.role}
              </h1>
              <p className="hero__tagline">{siteData.tagline}</p>

              <div className="hero__cta">
                <Button to="/projects" variant="primary">
                  View Projects
                </Button>
                <Button to="/contact" variant="ghost">
                  Contact
                </Button>
                <a className="hero__resume" href={siteData.links.resume}>
                  Resume
                </a>
              </div>

              <div className="hero__skills">
                <span className="hero__skillsLabel">Skills:</span>
                <div className="hero__skillsList">
                  {siteData.skills.slice(0, 8).map((s) => (
                    <Badge key={s} tone="neutral">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero__media" aria-hidden="true">
              <div className="avatar">
                <img
                  className="avatar__img"
                  src={siteData.avatarSrc}
                  alt=""
                  width="160"
                  height="160"
                />
              </div>
              <div className="hero__rings" />
              <div className="hero__floatingCard">
                <div className="hero__floatingTitle">Currently</div>
                <div className="hero__floatingText">
                  building responsive UIs with React and Vite.
                </div>
                <Link className="hero__floatingLink" to="/about">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section__head">
            <h2 className="section__title">Featured Projects</h2>
            <p className="section__subtitle">
              A few selected builds that show how I think about UX, structure,
              and maintainability.
            </p>
          </div>

          <div className="grid grid--3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

