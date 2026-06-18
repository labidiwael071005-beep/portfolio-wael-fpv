import { motion } from "framer-motion";

const cards = [
  { icon: "📧", k: "Email", v: "labidi.wael@outlook.com", href: "mailto:labidi.wael@outlook.com" },
  { icon: "📍", k: "Localisation", v: "Nice, France" },
  { icon: "💼", k: "LinkedIn", v: "Wael Labidi", href: "https://www.linkedin.com/in/wael-labidi-5058232b5/" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">WAYPOINT 06 · RETOUR BASE</div>
        <h2 className="section-title">
          <em>Contact</em>
        </h2>
        <p className="section-sub">
          Canal ouvert. Recruteurs, alternance, projet ou simple curiosité —
          envoyez le signal, je réponds vite.
        </p>
      </motion.div>

      <div className="contact-grid">
        {cards.map((c, i) => {
          const inner = (
            <>
              <span className="contact-card-icon">{c.icon}</span>
              <span className="contact-card-info">
                <span className="k">{c.k}</span>
                <span className="v">{c.v}</span>
              </span>
            </>
          );
          return (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-card"
                  data-lock-label={`CONTACT · ${c.k.toUpperCase()}`}
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-card">{inner}</div>
              )}
            </motion.div>
          );
        })}

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <h3>RECHERCHE ALTERNANCE</h3>
          <p>
            Je suis en recherche active d'une <strong>alternance 2ᵉ année BUT R&amp;T</strong>{" "}
            en rythme <strong>½ semaines</strong>, à partir de la rentrée. Envie de
            mettre mes compétences réseau, sécurité et système au service de vos
            infrastructures.
          </p>
          <div className="contact-cta-btns">
            <a href="mailto:labidi.wael@outlook.com" className="btn btn-primary" data-lock-label="ÉTABLIR · CONTACT">
              M'écrire ▸
            </a>
            <a href="/Labidi_Wael_CV.pdf" download className="btn btn-ghost" data-lock-label="DOWNLOAD · CV">
              Télécharger CV ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
