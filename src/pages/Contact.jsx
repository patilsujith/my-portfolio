import { useMemo, useState } from 'react'
import Container from '../components/Container.jsx'
import Badge from '../components/Badge.jsx'
import { siteData } from '../content/siteData.js'

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export default function Contact() {
  const presetTags = useMemo(() => ['Frontend', 'UI Engineering', 'React'], [])
  const [selectedTag, setSelectedTag] = useState(presetTags[0])

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    setStatus('idle')

    if (!form.name.trim()) {
      setStatus('error_name')
      return
    }

    if (!isValidEmail(form.email)) {
      setStatus('error_email')
      return
    }

    if (form.message.trim().length < 10) {
      setStatus('error_message')
      return
    }

    // This is a frontend-only template. Hook this up to your backend or Formspree/etc.
    setStatus('sent')
  }

  return (
    <div className="page">
      <section className="section">
        <Container>
          <div className="contact">
            <div className="contact__head">
              <h1 className="pageTitle">Contact</h1>
              <p className="lead">
                Want to collaborate or hire me? Send a message and I’ll get back
                to you.
              </p>
              <div className="contact__badges">
                {presetTags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`tagPick ${t === selectedTag ? 'tagPick--active' : ''}`}
                    onClick={() => setSelectedTag(t)}
                  >
                    <Badge tone={t === selectedTag ? 'accent' : 'neutral'}>
                      {t}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            <div className="contact__grid">
              <form className="form" onSubmit={onSubmit}>
                <div className="form__row">
                  <label className="label">
                    Name
                    <input
                      className="input"
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </label>
                </div>

                <div className="form__row">
                  <label className="label">
                    Email
                    <input
                      className="input"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <div className="form__row">
                  <label className="label">
                    Message
                    <textarea
                      className="textarea"
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder={`Tell me about your project (${selectedTag}).`}
                      rows={6}
                    />
                  </label>
                </div>

                <div className="form__actions">
                  <button className="btn btn--primary" type="submit">
                    Send Message
                  </button>

                  <a
                    className="link-btn link-btn--ghost"
                    href={`mailto:${siteData.email}?subject=${encodeURIComponent(
                      `Portfolio inquiry (${selectedTag})`
                    )}&body=${encodeURIComponent(
                      `Hi ${siteData.name},\n\nMy name is ${form.name || '[Your name]'}.\n\n${form.message || '[Your message]'}\n`
                    )}`}
                  >
                    Email instead
                  </a>
                </div>

                {status !== 'idle' && (
                  <div className="form__status" role="status">
                    {status === 'sent' && (
                      <span>Message ready. Hook up your backend to actually send it.</span>
                    )}
                    {status === 'error_name' && <span>Please enter your name.</span>}
                    {status === 'error_email' && <span>Please enter a valid email.</span>}
                    {status === 'error_message' && (
                      <span>Message should be at least 10 characters.</span>
                    )}
                  </div>
                )}
              </form>

              <aside className="contactCard" aria-label="Contact details">
                <div className="contactCard__section">
                  <div className="contactCard__k">Email</div>
                  <div className="contactCard__v">
                    <a className="inlineLink" href={`mailto:${siteData.email}`}>
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="contactCard__section">
                  <div className="contactCard__k">Social</div>
                  <div className="contactCard__v">
                    <div className="contactCard__links">
                      <a className="inlineLink" href={siteData.links.github}>
                        GitHub
                      </a>
                      <a
                        className="inlineLink"
                        href={siteData.links.linkedin}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contactCard__section">
                  <div className="contactCard__k">Working on</div>
                  <div className="contactCard__v">
                    <ul className="miniList">
                      <li>Reusable component patterns</li>
                      <li>Performance + accessibility</li>
                      <li>Clean UI states and empty screens</li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

