import { siteData } from "../content/siteData";

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.6rem",
  color: "#999",
};

const footerLayout = {
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
  fontSize: "1.6rem",
};

const footerRight = {
  display: "flex",
  gap: "10px",
  fontSize: "1.6rem",
  color: "#bbb",
};

const getYear = () => {
  return new Date().getFullYear();
};

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner" style={footerLayout}>
        <div className="footer__left">
          <span className="footer__muted">
            <footer style={footerStyle}>
              <span>
                © {getYear()} Sujith Patil · Södertälje, Sweden · AEM Full Stack
                & Frontend Developer
              </span>
            </footer>
          </span>
        </div>

        <div className="footer__right" style={footerRight}>
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
