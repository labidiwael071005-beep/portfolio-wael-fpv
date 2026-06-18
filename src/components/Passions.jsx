import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const passions = [
  {
    id: "drone",
    num: "WPT-01",
    name: "Drone FPV",
    emoji: "🚁",
    sub: "Pilotage immersif",
    coords: { LAT: "43.7102N", LNG: "07.2620E", ALT: "0220M", SPD: "85KM/H" },
    desc:
      "Casque vissé sur la tête, vision plongée dans le drone. Je vole en immersion totale — freestyle, acro, low-pass. Le build aussi est maison : choix des composants, soudure de l'ESC, configuration Betaflight, réglage des PID, calibration radio ELRS. C'est ici que mon BIA et mon attrait pour l'aviation rejoignent l'électronique.",
    stats: [
      { k: "Build", v: "Quad 5\" maison" },
      { k: "Firmware", v: "Betaflight + ELRS" },
      { k: "Style", v: "Freestyle / Acro" },
      { k: "Lien BIA", v: "Brevet aéro obtenu" },
    ],
    quote: "« Une milliseconde d'hésitation et c'est le crash. Le FPV apprend la réactivité pure. »",
  },
  {
    id: "elec",
    num: "WPT-02",
    name: "Électronique",
    emoji: "⚡",
    sub: "Du transistor au datacenter",
    coords: { LAT: "43.7108N", LNG: "07.2615E", ALT: "0185M", SPD: "12V/2A" },
    desc:
      "Fer à souder en main, je donne vie à des circuits. Arduino, ESP32, Raspberry Pi, réparations diverses. J'aime comprendre l'électron avant qu'il ne devienne « donnée » — cette compréhension bas niveau nourrit ma lecture des systèmes et des réseaux.",
    stats: [
      { k: "Outils", v: "Fer, multimètre, oscillo" },
      { k: "Plateformes", v: "Arduino / ESP32 / RPi" },
      { k: "Habilitation", v: "Électrique B1V" },
      { k: "Lien tech", v: "Soudure du drone FPV" },
    ],
    quote: "« Comprendre l'électron, c'est comprendre tout ce qui roule par-dessus. »",
  },
  {
    id: "boxe",
    num: "WPT-03",
    name: "Boxe",
    emoji: "🥊",
    sub: "Discipline & sang-froid",
    coords: { LAT: "43.7095N", LNG: "07.2691E", ALT: "0008M", SPD: "PING 0MS" },
    desc:
      "Sur le ring, on ne triche pas. La boxe m'a forgé une discipline, une gestion du stress et une vraie capacité à encaisser pour mieux rebondir. Des qualités que je retrouve face à un incident système à résoudre sous pression : garder la garde haute, analyser, riposter.",
    stats: [
      { k: "Valeur 1", v: "Discipline" },
      { k: "Valeur 2", v: "Respect" },
      { k: "Atout", v: "Gestion du stress" },
      { k: "Mental", v: "Ne jamais lâcher" },
    ],
    quote: "« Encaisser, analyser, riposter — au ring comme face à un incident. »",
  },
  {
    id: "peche",
    num: "WPT-04",
    name: "Pêche",
    emoji: "🎣",
    sub: "Observation & patience",
    coords: { LAT: "43.6951N", LNG: "07.2718E", ALT: "0000M", SPD: "WAIT" },
    desc:
      "Au bord de l'eau, j'apprends ce que l'IT m'enseigne aussi : l'observation, la patience, la lecture des signaux faibles. Anticiper, ajuster, rester concentré pendant des heures — exactement comme analyser un trafic réseau jusqu'à débusquer l'anomalie.",
    stats: [
      { k: "Spots", v: "Côte méditerranéenne" },
      { k: "Technique", v: "Leurre & surfcasting" },
      { k: "Soft skill", v: "Patience analytique" },
      { k: "Lien réseau", v: "Lire les signaux faibles" },
    ],
    quote: "« Lire l'eau, c'est comme lire des logs : tout est dans le détail. »",
  },
];

export default function Passions() {
  const [active, setActive] = useState("drone");
  const current = passions.find((p) => p.id === active);

  return (
    <section id="passions" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">WAYPOINT 05 · MISSIONS HORS COCKPIT</div>
        <h2 className="section-title">
          Mes <em>passions</em>
        </h2>

        <div className="passions-intro">
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Plan de vol personnel : 4 waypoints à survoler. Sélectionnez une
            cible dans la liste pour zoomer sur l'univers.
          </p>
          <div className="flight-plan">
            <span>FLIGHT PLAN</span> ▸ 04 WPT ▸ ALT 220M ▸ ETA ∞
          </div>
        </div>
      </motion.div>

      <div className="waypoints">
        <div className="waypoint-list">
          {passions.map((p, i) => (
            <motion.button
              key={p.id}
              className={`waypoint-btn ${active === p.id ? "active" : ""}`}
              onClick={() => setActive(p.id)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              data-lock-label={`SELECT · ${p.name.toUpperCase()}`}
            >
              <span className="waypoint-num">{p.num}</span>
              <span className="waypoint-emoji">{p.emoji}</span>
              <span className="waypoint-info">
                <span className="waypoint-name">{p.name}</span>
                <span className="waypoint-sub">{p.sub}</span>
              </span>
              <span className="waypoint-arrow">▸</span>
            </motion.button>
          ))}
        </div>

        <div className="waypoint-stage">
          <span className="wp-corner tl" />
          <span className="wp-corner tr" />
          <span className="wp-corner bl" />
          <span className="wp-corner br" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div className="wp-header">
                <div className="wp-title-block">
                  <span className="wp-big-emoji">{current.emoji}</span>
                  <div className="wp-titles">
                    <h3>{current.name}</h3>
                    <p>// {current.sub}</p>
                  </div>
                </div>
                <div className="wp-coords">
                  {Object.entries(current.coords).map(([k, v]) => (
                    <div key={k}>
                      <span className="k">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="wp-desc">{current.desc}</p>

              <div className="wp-stats">
                {current.stats.map((s) => (
                  <div key={s.k} className="wp-stat">
                    <div className="wp-stat-k">{s.k}</div>
                    <div className="wp-stat-v">{s.v}</div>
                  </div>
                ))}
              </div>

              <p className="wp-quote">{current.quote}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
