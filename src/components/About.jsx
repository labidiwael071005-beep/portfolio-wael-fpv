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
            Tout a commencé au lycée, avec des vidéos YouTube. Des chaînes comme Micode ou Rabin des Bois
            qui racontent des histoires de hacking — le genre de contenu qui te donne envie de comprendre
            ce qui se passe vraiment derrière un écran. En parallèle, j'ai croisé un ami qui s'y connaissait
            un peu sur le sujet, et il m'a conseillé de me lancer sur RootMe. C'est là que tout a basculé.
            Passionné d'électronique depuis longtemps, j'ai voulu combiner les deux en faisant un BTS CIEL
            option électronique — histoire de ne pas choisir.
          </p>
          
          <p>
            Puis la curiosité a continué à prendre le dessus : j'ai commencé à me demander ce qui se passait
            vraiment en coulisses, comment un message arrive au bon endroit, et surtout pourquoi parfois ça
            ne fonctionne pas. Ce qui m'a naturellement amené vers le BUT Réseaux &amp; Télécommunications.
            Aujourd'hui, j'apprends à passer de l'utilisateur à celui qui comprend, configure et sécurise
            les infrastructures. Mon stage chez SAP m'a permis de développer un outil d'optimisation interne
            avec intégration d'IA. Et j'continue à pratiquer régulièrement sur RootMe, TryHackMe et HackTheBox —
            parce que rien ne vaut un vrai problème à résoudre pour progresser.
          </p>
          <p>
            Hors écran : <strong>boxe</strong> pour la discipline, <strong>pêche</strong>{" "}
            pour la patience, <strong>électronique</strong> pour comprendre du bas niveau
            jusqu'au datacenter, <strong>drone FPV</strong> pour la réactivité et l'immersion.
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
