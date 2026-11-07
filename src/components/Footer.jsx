import { siteData } from "../content/siteData";

const getYear = () => {
  return new Date().getFullYear();
};

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__muted">
            © {getYear()} Sujith Patil · Södertälje, Sweden · AEM Full Stack
            & Frontend Lead
          </span>
        </div>

        <div className="footer__right">
          <a
            target="_blank"
            className="footer__link"
            href={siteData.links.github}
          >
            GitHub
          </a>
          <a
            target="_blank"
            className="footer__link"
            href={siteData.links.linkedin}
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            className="footer__link"
            href={`mailto:${siteData.email}`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
