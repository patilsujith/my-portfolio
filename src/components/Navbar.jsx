const Navbar = () => {
  const links = ["About", "Projects", "Experience", "Skills", "Contact"];

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>Sujith Patil</span>
      <ul style={styles.links}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={styles.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontWeight: "700",
    fontSize: "2.4rem",
    color: "#111",
    letterSpacing: "-0.01em",
  },
  links: {
    display: "flex",
    gap: "28px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Navbar;
