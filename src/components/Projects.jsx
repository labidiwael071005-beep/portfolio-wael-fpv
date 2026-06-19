import { useState, useEffect } from 'react'

const projects = [
  {
    id: 'ikigai',
    code: 'M-01',
    title: 'IKIGAI',
    subtitle: 'Travail introspectif — Année BUT R&T',
    tag: 'Personnel',
    short: "Une démarche d'introspection qui m'a permis de mieux cerner ce qui m'anime, ce que je sais faire, ce qui peut être utile aux autres et ce pour quoi je peux être rémunéré.",
    type: 'image',
    media: '/assets/ikigai.jpg',
    content: (
      <>
        <p>
          L'Ikigai est un concept japonais qui signifie « raison d'être ». L'exercice consiste à croiser
          quatre cercles : ce que j'aime, ce pour quoi je suis doué, ce dont le monde a besoin et ce
          pour quoi je peux être payé.
        </p>
        <p>
          <strong>Ce que j'aime :</strong> pêche, voyager, cuisiner, jouer, boxe, aider, réparer, fabriquer, bricoler.
        </p>
        <p>
          <strong>Ce pour quoi je suis doué :</strong> découvrir, apprendre, partager, aider.
        </p>
        <p>
          <strong>Ce dont le monde a besoin :</strong> connaissance, entraide, joie, solutions.
        </p>
        <p>
          <strong>Profession / Vocation :</strong> créer et réparer pour les autres, cuisiner, aider, accompagner, devenir.
        </p>
        <p>
          Mes héros — <em>Goku</em> et <em>Tony Stark</em> — représentent l'équilibre entre le cœur
          et l'intelligence : Goku incarne la liberté, le voyage et l'aide aux autres ; Tony Stark
          symbolise l'innovation, la technologie et la capacité à utiliser ses compétences pour aider,
          réparer et protéger le monde.
        </p>
        <p>
          Cet exercice m'a aidé à mieux comprendre vers où je veux orienter ma carrière : un métier
          technique où je peux créer, dépanner et transmettre.
        </p>
      </>
    ),
  },
  {
    id: 'photo-atb',
    code: 'M-02',
    title: 'PHOTO_ATB',
    subtitle: 'SAÉ 2.4 — Banc photo aéronautique pour Thales',
    tag: 'Projet équipe',
    short: "Application web PHP/MySQL et système embarqué Raspberry Pi pour le programme AVIONIQUE_01 de Thales : capture, archivage et gestion sécurisée de photographies de banc de test.",
    type: 'pdf',
    media: '/assets/Thales02_SAE23_24_rapport.pdf',
    content: (
      <>
        <p>
          Projet réalisé en équipe de 4 (Labidi, Boonen, Corti, Boukrara) dans le cadre de la SAÉ 2.4
          du BUT R&T. Le système simule un banc de test aéronautique réel pour le programme
          AVIONIQUE_01 de Thales.
        </p>
        <p>
          <strong>Stack :</strong> Raspberry Pi 3 · Apache · PHP 8.1 · MySQL 8 · Python 3 (OpenCV,
          RPi.GPIO) · systemd · capteur BH1750 (I2C) · LED GPIO · caméra USB.
        </p>
        <p>
          <strong>Mon rôle :</strong> câblage du montage, finalisation de la base de données et du
          hashage bcrypt, sécurité et finalisation du site, tests des scripts Python et rédaction
          du rapport.
        </p>
        <p>
          <strong>Sécurité :</strong> hash bcrypt, longueur min. 12/16 caractères, blocage après 3
          tentatives, requêtes préparées PDO, échappement shell, changement de mot de passe forcé
          au premier login, journalisation complète.
        </p>
        <p>
          <strong>Fonctionnalités :</strong> capture manuelle / automatique (daemon systemd) / mode
          invité, galerie avec lazy loading et lightbox, gestion des rôles (Opérateur / Administrateur /
          Super-administrateur), configuration en base, trame TCP envoyée après chaque capture.
        </p>
        <p>
          Le rapport complet (50 pages) détaille les 43 exigences, les 22 risques identifiés, le
          schéma électronique et le plan de validation.
        </p>
      </>
    ),
  },
]

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const active = projects.find((p) => p.id === openId)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenId(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="section-tag">MISSIONS</span>
        <h2>Projets</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <button
            key={p.id}
            className="project-card"
            onClick={() => setOpenId(p.id)}
          >
            <div className="project-code">{p.code}</div>
            <h3>{p.title}</h3>
            <p className="project-sub">{p.subtitle}</p>
            <p className="project-short">{p.short}</p>
            <span className="project-tag">{p.tag}</span>
            <span className="project-open">CLICK TO OPEN ▸</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="modal-backdrop" onClick={() => setOpenId(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenId(null)}>✕</button>
            <div className="modal-head">
              <span className="section-tag">{active.code}</span>
              <h3>{active.title}</h3>
              <p className="project-sub">{active.subtitle}</p>
            </div>

            <div className="modal-body">
              {active.type === 'image' && (
                <img src={active.media} alt={active.title} className="modal-image" />
              )}
              {active.type === 'pdf' && (
                <div className="modal-pdf-wrap">
                  <iframe
                    src={active.media}
                    title={active.title}
                    className="modal-pdf"
                  />
                  <a href={active.media} download className="btn-download">
                    ⬇ Télécharger le rapport (PDF)
                  </a>
                </div>
              )}
              <div className="modal-text">{active.content}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
