import { useMemo, useState } from 'react'
import Container from '../components/Container.jsx'
import Badge from '../components/Badge.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../content/siteData.js'

export default function Projects() {
  const tags = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))]
  }, [])

  const [activeTag, setActiveTag] = useState('All')

  const filtered = useMemo(() => {
    if (activeTag === 'All') return projects
    return projects.filter((p) => p.tags.includes(activeTag))
  }, [activeTag])

  return (
    <div className="page">
      <section className="section">
        <Container>
          <div className="section__head">
            <h1 className="pageTitle">Projects</h1>
            <p className="lead">
              Browse by tag. Each project is built as a set of reusable, testable
              UI pieces.
            </p>
          </div>

          <div className="filters" aria-label="Project tag filters">
            {tags.map((t) => {
              const tone = t === activeTag ? 'accent' : 'neutral'
              return (
                <button
                  key={t}
                  type="button"
                  className={`filter ${t === activeTag ? 'filter--active' : ''}`}
                  onClick={() => setActiveTag(t)}
                >
                  <Badge tone={tone}>{t}</Badge>
                </button>
              )
            })}
          </div>

          <div className="metaRow">
            <span className="metaText">
              Showing <strong>{filtered.length}</strong> project(s)
            </span>
          </div>

          <div className="grid grid--2">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

