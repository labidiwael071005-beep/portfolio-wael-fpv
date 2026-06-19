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
        <p><strong>Ce que j'aime :</strong> pêche, voyager, cuisiner, jouer, boxe, aider, réparer, fabriquer, bricoler.</p>
        <p><strong>Ce pour quoi je suis doué :</strong> découvrir, apprendre, partager, aider.</p>
        <p><strong>Ce dont le monde a besoin :</strong> connaissance, entraide, joie, solutions.</p>
        <p><strong>Profession / Vocation :</strong> créer et réparer pour les autres, cuisiner, aider, accompagner, devenir.</p>
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
        <p><strong>Stack :</strong> Raspberry Pi 3 · Apache · PHP 8.1 · MySQL 8 · Python 3 (OpenCV, RPi.GPIO) · systemd · capteur BH1750 (I2C) · LED GPIO · caméra USB.</p>
        <p><strong>Mon rôle :</strong> câblage du montage, finalisation de la base de données et du hashage bcrypt, sécurité et finalisation du site, tests des scripts Python et rédaction du rapport.</p>
        <p><strong>Sécurité :</strong> hash bcrypt, longueur min. 12/16 caractères, blocage après 3 tentatives, requêtes préparées PDO, échappement shell, changement de mot de passe forcé au premier login, journalisation complète.</p>
        <p><strong>Fonctionnalités :</strong> capture manuelle / automatique (daemon systemd) / mode invité, galerie avec lazy loading et lightbox, gestion des rôles (Opérateur / Administrateur / Super-administrateur), configuration en base, trame TCP envoyée après chaque capture.</p>
        <p>Le rapport complet (50 pages) détaille les 43 exigences, les 22 risques identifiés, le schéma électronique et le plan de validation.</p>
      </>
    ),
  },
]

const S = {
  backdrop: {
    position: 'fixed', inset: 0,
    background: 'rgba(0, 0, 0, 0.88)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  modal: {
    background: '#0a0e1a',
    border: '1px solid #a855f7',
    boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
    maxWidth: '1000px',
    width: '100%',
    maxHeight: '92vh',
    overflowY: 'auto',
    padding: '2.5rem',
    position: 'relative',
    borderRadius: '6px',
    color: '#e5e7eb',
    fontFamily: 'inherit',
  },
  close: {
    position: 'absolute', top: '1rem', right: '1rem',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.25)',
    color: '#fff',
    width: '2.2rem', height: '2.2rem',
    cursor: 'pointer',
    borderRadius: '50%',
    fontSize: '1rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 10,
  },
  code: {
    fontSize: '.7rem', letterSpacing: '.2em',
    color: '#a855f7', fontWeight: 600,
  },
  title: { fontSize: '1.8rem', margin: '.4rem 0', color: '#fff' },
  subtitle: { fontSize: '.95rem', color: '#9ca3af', marginBottom: '1.5rem' },
  image: {
    display: 'block',
    width: '100%',
    maxHeight: '500px',
    objectFit: 'contain',
    background: '#000',
    border: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '1.5rem',
    borderRadius: '4px',
  },
  pdf: {
    width: '100%',
    height: '75vh',
    minHeight: '600px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: '#fff',
    borderRadius: '4px',
    display: 'block',
  },
  btnDownload: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '.8rem 1.6rem',
    background: '#a855f7',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '.85rem',
    letterSpacing: '.08em',
    fontWeight: 600,
    textTransform: 'uppercase',
    transition: 'background .2s',
  },
  text: { lineHeight: 1.7, fontSize: '.95rem' },
  openHint: {
    display: 'block', marginTop: '.8rem',
    fontSize: '.7rem', opacity: .6, letterSpacing: '.15em',
    color: '#a855f7',
  },
}

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const active = projects.find((p) => p.id === openId)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenId(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Bloque le scroll du body quand modal ouverte
  useEffect(() => {
    document.body.style.overflow = openId ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [openId])

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
            style={{ cursor: 'pointer', textAlign: 'left', font: 'inherit', color: 'inherit' }}
          >
            <div className="project-code">{p.code}</div>
            <h3>{p.title}</h3>
            <p className="project-sub">{p.subtitle}</p>
            <p className="project-short">{p.short}</p>
            <span className="project-tag">{p.tag}</span>
            <span style={S.openHint}>CLICK TO OPEN ▸</span>
          </button>
        ))}
      </div>

      {active && (
        <div style={S.backdrop} onClick={() => setOpenId(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <button style={S.close} onClick={() => setOpenId(null)} aria-label="Fermer">✕</button>

            <div>
              <span style={S.code}>{active.code}</span>
              <h3 style={S.title}>{active.title}</h3>
              <p style={S.subtitle}>{active.subtitle}</p>
            </div>

            {active.type === 'image' && (
              <img src={active.media} alt={active.title} style={S.image} />
            )}

            {active.type === 'pdf' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <iframe src={active.media} title={active.title} style={S.pdf} />
                
                  href={active.media}
                  download
                  style={S.btnDownload}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#9333ea')}
                  onMouseOut={(e) => (e.currentTarget.style.background = '#a855f7')}
                >
                  ⬇ Télécharger le rapport (PDF)
                </a>
              </div>
            )}

            <div style={S.text}>{active.content}</div>
          </div>
        </div>
      )}
    </section>
  )
}
