import { useState } from "react";

const items = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Skills" },
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
  { id: "passions", label: "Passions" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <button className="nav-brand" onClick={() => goto("accueil")} aria-label="Retour accueil">
          <span className="nav-brand-logo">WL</span>
          <span className="nav-brand-text">
            <span className="nav-brand-name">WAEL.FPV</span>
            <span className="nav-brand-tag">COCKPIT v1.0</span>
          </span>
        </button>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? "✕" : "≡"}
        </button>

        <ul className={`nav-menu ${open ? "open" : ""}`}>
          {items.map((it) => (
            <li key={it.id}>
              <button
                className={`nav-link ${active === it.id ? "active" : ""}`}
                onClick={() => goto(it.id)}
                data-lock-label={`NAV · ${it.label.toUpperCase()}`}
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
