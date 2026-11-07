const Navbar = () => {
  const links = ["About", "Projects", "Experience", "Skills", "Contact"];

  return (
    <nav className="navbar-nav">
      <span className="navbar-logo">Sujith Patil</span>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="navbar-link">
              {link}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`${import.meta.env.BASE_URL}Sujith_Patil.pdf`}
            className="navbar-link"
            target="_blank"
            rel="noopener"
            aria-label="CV (PDF, opens in a new tab)"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
