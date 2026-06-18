import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="accueil" className="section hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-callsign">SIGNAL ACQUIS · PILOTE IDENTIFIÉ</div>

        <h1 className="hero-title">
          LABIDI <span className="accent">WAEL</span>
        </h1>
        <p className="hero-role">Étudiant BUT Réseaux &amp; Télécommunications · Nice</p>

        <p className="hero-desc">
          Bienvenue dans mon cockpit. Pilote du quotidien :{" "}
          <strong>réseaux, cybersécurité et administration système</strong>. Je
          recherche une <strong>alternance pour ma 2ème année</strong> en
          rythme ½ semaines. Curieux, rigoureux, je m'amuse autant à débusquer
          une faille qu'à enchaîner un freestyle en drone FPV ou un round sur
          le ring.
        </p>

        <div className="hero-meta">
          <div className="hero-meta-row">
            <span><span className="k">› LOC</span> <span className="v">NICE.FR</span></span>
            <span><span className="k">› STATUS</span> <span className="v">EN RECHERCHE</span></span>
            <span><span className="k">› RYTHME</span> <span className="v">½ SEMAINES</span></span>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary" data-lock-label="DESCENDRE · CONTACT">
            Établir contact ▸
          </a>
          <a href="/Labidi_Wael_CV.pdf" download className="btn btn-ghost" data-lock-label="DOWNLOAD · CV">
            Télécharger CV ↓
          </a>
        </div>

        <div className="hero-tags">
          <span className="tag">Réseaux</span>
          <span className="tag">Cybersécurité</span>
          <span className="tag">Linux</span>
          <span className="tag">CTF</span>
          <span className="tag">Drone FPV</span>
          <span className="tag">Électronique</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-portrait"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="hero-portrait-frame">
          <span className="portrait-corner tl" />
          <span className="portrait-corner tr" />
          <span className="portrait-corner bl" />
          <span className="portrait-corner br" />
          <span className="portrait-readout lock">◉ TARGET LOCKED</span>
          <span className="portrait-readout target">PILOT · 100% MATCH</span>
          <img src="/assets/wael-cloud.png" alt="Wael sur son nuage" />
        </div>
      </motion.div>
    </section>
  );
}
