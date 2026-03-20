import Badge from './Badge.jsx'

export default function ProjectCard({ project }) {
  const { title, year, description, tags, links } = project

  return (
    <article className="project-card">
      <div className="project-card__top">
        <h3 className="project-card__title">{title}</h3>
        <span className="project-card__year">{year}</span>
      </div>

      <p className="project-card__description">{description}</p>

      <div className="project-card__tags">
        {tags.map((t) => (
          <Badge key={t} tone="accent">
            {t}
          </Badge>
        ))}
      </div>

      <div className="project-card__links">
        {links.demo !== '#' && (
          <a
            className="link-btn"
            href={links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
        {links.repo !== '#' && (
          <a
            className="link-btn link-btn--ghost"
            href={links.repo}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        )}
      </div>
    </article>
  )
}

