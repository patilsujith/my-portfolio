import Container from '../components/Container.jsx'
import Badge from '../components/Badge.jsx'
import { experience, projects, siteData } from '../content/siteData.js'
import { Link } from 'react-router-dom'

export default function About() {
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).slice(
    0,
    12
  )

  return (
    <div className="page">
      <section className="section section--tight">
        <Container>
          <div className="about">
            <div className="about__header">
              <h1 className="pageTitle">About</h1>
              <p className="lead">
                {siteData.tagline} I focus on component quality, accessibility,
                and performance—so your product feels effortless.
              </p>

              <div className="about__badges">
                {allTags.map((t) => (
                  <Badge key={t} tone="neutral">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="about__content">
              <div className="about__col">
                <h2 className="subTitle">Experience</h2>
                <div className="timeline">
                  {experience.map((item) => (
                    <div key={`${item.company}-${item.start}`} className="tItem">
                      <div className="tItem__when">
                        {item.start} – {item.end}
                      </div>
                      <div className="tItem__body">
                        <div className="tItem__role">{item.role}</div>
                        <div className="tItem__company">{item.company}</div>
                        <ul className="tItem__list">
                          {item.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about__col">
                <h2 className="subTitle">What I value</h2>
                <ul className="list list--check">
                  <li>Clear UI hierarchy and sensible defaults.</li>
                  <li>Design-system thinking (reusable, composable components).</li>
                  <li>Readable code and consistent patterns.</li>
                  <li>Fast interactions and accessible experiences.</li>
                </ul>

                <div className="about__cta">
                  <a
                    className="link-btn link-btn--ghost"
                    href={siteData.links.resume}
                  >
                    Download Resume
                  </a>
                  <Link to="/contact" className="link-btn">
                    Contact Me
                  </Link>
                </div>

                <div className="about__note">
                  Replace the placeholders in `src/content/siteData.js` with your
                  real details (name, projects, links, etc.).
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

