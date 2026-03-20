import { siteData } from '../content/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__muted">
            © {year} {siteData.name}. All rights reserved.
          </span>
        </div>

        <div className="footer__right">
          <a className="footer__link" href={siteData.links.github}>
            GitHub
          </a>
          <a className="footer__link" href={siteData.links.linkedin}>
            LinkedIn
          </a>
          <a className="footer__link" href={`mailto:${siteData.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

