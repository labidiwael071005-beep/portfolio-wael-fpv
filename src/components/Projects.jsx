import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    code: "MISSION-001",
    type: "Académique",
    status: "pending",
    title: "Plateforme de Traçabilité Avionique",
    desc: "Plateforme web locale développée en collaboration avec Thales pour banc avionique : capture photo automatisée, archivage, suivi de configuration avant test.",
    techs: ["PHP", "SQL", "JavaScript", "HTML/CSS", "Git"],
  },
  {
    id: 2,
    code: "MISSION-002",
    type: "Stage SAP",
    status: "live",
    title: "Programme d'Optimisation avec IA",
    desc: "Lors de mon stage chez SAP Mougins, conception d'un programme d'optimisation interne avec intégration d'IA pour automatiser un workflow métier.",
    techs: ["Python", "IA", "Optimisation"],
  },
  {
    id: 3,
    code: "MISSION-003",
    type: "Personnel",
    status: "live",
    title: "Quadcopter FPV Maison",
    desc: "Build complet d'un drone FPV 5 pouces : soudure de l'ESC, choix des composants, configuration Betaflight, réglage PID, calibration radio ELRS. Le projet qui réunit électronique et pilotage.",
    techs: ["Betaflight", "Soudure", "PID", "ELRS"],
  },
];

export default function Projects() {
  return (
    <section id="projets" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">WAYPOINT 03 · MISSIONS</div>
        <h2 className="section-title">
          Mes <em>projets</em>
        </h2>
        <p className="section-sub">
          Carnet de vol : missions accomplies et missions en cours. Section
          enrichie au fil de mon parcours.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className={`project-status ${p.status}`}>
              ● {p.status === "live" ? "ACCOMPLIE" : "EN COURS"}
            </span>
            <div className="project-meta">
              <span>{p.code}</span>
              <span>·</span>
              <span>{p.type}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech-tags">
              {p.techs.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
