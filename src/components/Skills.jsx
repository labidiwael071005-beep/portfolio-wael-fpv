import { motion } from "framer-motion";

const cats = [
  {
    id: "N01",
    icon: "🌐",
    title: "Réseaux",
    skills: ["OSI", "IP / VLAN", "Routage", "DHCP", "DNS", "Linux net"],
  },
  {
    id: "N02",
    icon: "🔒",
    title: "Cybersécurité",
    skills: ["Wireshark", "Pare-feu", "Access Ctrl", "RootMe", "TryHackMe", "HackTheBox"],
  },
  {
    id: "N03",
    icon: "💻",
    title: "Programmation",
    skills: ["Python", "C", "Java", "Bash", "JavaScript", "PHP", "React"],
  },
  {
    id: "N04",
    icon: "🖥️",
    title: "Système",
    skills: ["Linux", "Windows Server", "VirtualBox", "SQL", "Git", "Agile"],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">WAYPOINT 02 · ARMEMENT</div>
        <h2 className="section-title">
          Mes <em>skills</em>
        </h2>
        <p className="section-sub">
          Modules embarqués, par catégorie. Chaque tag est une compétence
          pratiquée en cours, en projet ou en autoformation.
        </p>
      </motion.div>

      <div className="skills-grid">
        {cats.map((c, i) => (
          <motion.div
            key={c.id}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="skill-header">
              <span className="skill-icon">{c.icon}</span>
              <span className="skill-id">{c.id}</span>
            </div>
            <h3>{c.title}</h3>
            <div className="skill-tags">
              {c.skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
