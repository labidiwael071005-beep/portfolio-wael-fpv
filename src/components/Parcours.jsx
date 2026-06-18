import { motion } from "framer-motion";

const xp = [
  {
    period: "Été 2025",
    title: "Employé en location de Jet Ski",
    place: "Entreprise familiale · Nice",
    list: ["Accueil clients & conseil", "Gestion des locations", "Veille sécurité utilisateurs"],
  },
  {
    period: "Juin – Juillet 2024",
    title: "Stage en informatique",
    place: "SAP · Mougins",
    list: ["Conception d'une solution innovante", "Développement d'un outil d'optimisation avec IA"],
  },
  {
    period: "Oct. 2022 – Mai 2024",
    title: "Assistant coach sportif",
    place: "Cavigal Nice Athlétisme",
    list: ["Organisation de séances", "Préparation de compétitions", "Encadrement et motivation"],
  },
];

const edu = [
  {
    period: "2025 — Actuel",
    title: "BUT Réseaux & Télécommunications",
    place: "IUT de Nice",
    desc: "1ʳᵉ année en cours · recherche d'alternance pour la 2ᵉ année.",
  },
  {
    period: "2023 — 2025",
    title: "BTS CIEL",
    place: "Lycée Guillaume Apollinaire",
    desc: "Cybersécurité · Informatique · Électronique · Réseaux.",
  },
  {
    period: "2020 — 2023",
    title: "BAC Général",
    place: "Lycée Guillaume Apollinaire",
    desc: "Spé. Maths + SI · option Maths Expertes.",
  },
];

export default function Parcours() {
  return (
    <section id="parcours" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">WAYPOINT 04 · LOG DE VOL</div>
        <h2 className="section-title">
          Mon <em>parcours</em>
        </h2>
        <p className="section-sub">
          Journal de bord chronologique : expériences pro et formations
          enregistrées en boîte noire.
        </p>
      </motion.div>

      <div className="parcours-grid">
        <div className="parcours-col">
          <h3>// Expériences</h3>
          <div className="timeline">
            {xp.map((x, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="tl-period">{x.period}</div>
                <div className="tl-title">{x.title}</div>
                <div className="tl-place">{x.place}</div>
                <ul className="tl-list">
                  {x.list.map((l, k) => <li key={k}>{l}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="parcours-col">
          <h3>// Formations</h3>
          <div className="timeline">
            {edu.map((e, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="tl-period">{e.period}</div>
                <div className="tl-title">{e.title}</div>
                <div className="tl-place">{e.place}</div>
                <p className="tl-desc">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
