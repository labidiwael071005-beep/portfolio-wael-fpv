import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="apropos" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">WAYPOINT 01 · BRIEFING</div>
        <h2 className="section-title">
          À <em>propos</em>
        </h2>
        <p className="section-sub">
          Profil pilote, équipement, état d'esprit. Lecture rapide avant
          décollage.
        </p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            Au départ, les réseaux et l'informatique me semblaient évidents. Puis la
            curiosité a pris le dessus : j'ai commencé à me demander ce qui se passait
            réellement en coulisses — comment un message arrive au bon endroit, et
            surtout pourquoi parfois ça ne fonctionne pas.
          </p>
          <p>
            Cette curiosité m'a amené en <strong>BUT Réseaux &amp; Télécommunications</strong>.
            Aujourd'hui, j'apprends à passer de l'utilisateur à celui qui comprend,
            configure et sécurise les infrastructures. J'aime particulièrement le moment
            où un problème paraît bloquant… jusqu'à ce qu'on trouve la bonne piste.
          </p>
          <p>
            Mon stage chez <strong>SAP</strong> m'a permis de développer un programme
            d'optimisation interne avec intégration d'<strong>IA</strong>. Je m'oriente
            vers l'<strong>administration systèmes &amp; réseaux</strong> et la{" "}
            <strong>cybersécurité</strong>, avec une pratique régulière sur RootMe,
            TryHackMe et HackTheBox.
          </p>
          <p>
            Hors écran : <strong>boxe</strong> pour la discipline, <strong>pêche</strong>{" "}
            pour la patience, <strong>électronique</strong> pour comprendre du bas niveau
            jusqu'au datacenter, <strong>drone FPV</strong> pour la réactivité et l'immersion.
            Quatre disciplines qui forgent un même tempérament : rigueur, sang-froid,
            envie de comprendre en profondeur.
          </p>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stat-card">
            <h3>Profil rapide</h3>
            <div className="stat-row"><span className="k">Localisation</span><span className="v">Nice, FR</span></div>
            <div className="stat-row"><span className="k">Formation</span><span className="v">BUT R&amp;T · 1ʳᵉ année</span></div>
            <div className="stat-row"><span className="k">Recherche</span><span className="v">Alternance 2ᵉ année</span></div>
            <div className="stat-row"><span className="k">Rythme</span><span className="v">½ semaines</span></div>
            <div className="stat-row"><span className="k">Langues</span><span className="v">FR · EN (pro)</span></div>
          </div>

          <div className="stat-card">
            <h3>Certifications</h3>
            <ul className="cert-list">
              <li>Permis B</li>
              <li>Habilitation Électrique B1V</li>
              <li>PSC1 — Premiers Secours</li>
              <li>BIA — Brevet d'Initiation Aéronautique</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
