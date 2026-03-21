import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-app">
        <Navbar />
        <ScrollToTop />
        <main className="portfolio-main">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
