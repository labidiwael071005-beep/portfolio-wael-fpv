import { useEffect, useState } from "react";
import BootOverlay from "./components/BootOverlay.jsx";
import CockpitHUD from "./components/CockpitHUD.jsx";
import FPVCursor from "./components/FPVCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Parcours from "./components/Parcours.jsx";
import Passions from "./components/Passions.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const SECTIONS = ["accueil", "apropos", "competences", "projets", "parcours", "passions", "contact"];

export default function App() {
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <BootOverlay />
      <div className="site-bg" aria-hidden="true" />
      <div className="site-bg-veil" aria-hidden="true" />
      <div className="site-grid" aria-hidden="true" />

      <CockpitHUD activeSection={active} />
      <FPVCursor />

      <Navbar active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Parcours />
        <Passions />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
