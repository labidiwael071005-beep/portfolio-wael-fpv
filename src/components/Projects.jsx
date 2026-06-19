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
        <h4>Objectif</h4>
        <p>
          Prendre du recul sur mon parcours pour identifier la direction professionnelle qui me
          correspond vraiment, en croisant ce que j'aime, ce pour quoi je suis doué, ce dont le
          monde a besoin et ce pour quoi je peux être rémunéré.
        </p>

        <h4>Démarche réalisée</h4>
        <p>
          Remplissage des quatre cercles de l'Ikigai à partir d'une introspection guidée, puis
          identification de mes héros (Goku et Tony Stark) pour faire ressortir les valeurs qui me
          parlent : liberté, entraide, innovation, capacité à créer et réparer pour les autres.
        </p>
        <p>
          <strong>Passion :</strong> pêche, voyage, cuisine, jeu, boxe, aide, réparation, fabrication, bricolage.<br />
          <strong>Compétences :</strong> découvrir, apprendre, partager, aider.<br />
          <strong>Besoins du monde :</strong> connaissance, entraide, joie, solutions.<br />
          <strong>Profession / Vocation :</strong> créer et réparer pour les autres, accompagner, transmettre.
        </p>

        <h4>Outils / méthode</h4>
        <p>
          Méthode Ikigai (diagramme de Venn à 4 cercles), travail introspectif sur papier, mise en
          perspective avec mes modèles personnels.
        </p>

        <h4>Ce que j'en retire</h4>
        <p>
          Cet exercice m'a confirmé que je veux m'orienter vers un métier technique où je peux
          créer, dépanner et transmettre — ce qui colle avec ma trajectoire vers l'administration
          systèmes &amp; réseaux et la cybersécurité.
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
        <h4>Objectif</h4>
        <p>
          Concevoir un système complet de prise et de gestion de photographies aéronautiques
          simulant un banc de test réel pour le programme AVIONIQUE_01 de Thales : capture
          automatique avant chaque test, archivage sécurisé, traçabilité totale et interface web
          accessible en réseau local.
        </p>

        <h4>Mes missions</h4>
        <p>
          Projet réalisé en équipe de 4 (Labidi, Boonen, Corti, Boukrara). Mon périmètre&nbsp;:
        </p>
        <ul>
          <li>Câblage complet du montage (Raspberry Pi 3, capteur BH1750 en I2C, LED de flash GPIO avec résistance 220&nbsp;Ω, caméra USB)</li>
          <li>Finalisation de la base de données MySQL et implémentation du hashage bcrypt</li>
          <li>Sécurisation et finalisation du site (requêtes préparées PDO, échappement shell, blocage anti-brute force, changement de mot de passe forcé au premier login, journalisation)</li>
          <li>Tests des scripts Python de capture</li>
          <li>Rédaction du rapport final (50 pages)</li>
        </ul>

        <h4>Technos utilisées</h4>
        <p>
          Raspberry Pi 3 (Raspberry Pi OS) · Apache 2.4 · PHP 8.1 · MySQL 8 · PDO · Python 3
          (OpenCV, RPi.GPIO, adafruit-bh1750, socket TCP) · systemd · HTML5 / CSS3 · Git &amp; GitHub.
        </p>

        <h4>Résultats / preuves</h4>
        <p>
          Système livré et fonctionnel&nbsp;: 43 exigences validées, 22 risques identifiés et tracés,
          plan de validation complet, capture en moins de 2 secondes, daemon systemd autonome pour
          les captures périodiques, trame TCP émise vers un serveur de supervision après chaque
          prise.
        </p>
        <p>Le rapport complet est consultable et téléchargeable ci-dessus.</p>
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

const modalContentCSS = `
  .modal-content h4 {
    color: #a855f7;
    font-size: .75rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    margin-top: 1.5rem;
    margin-bottom: .6rem;
    font-weight: 700;
  }
  .modal-content h4:first-child { margin-top: 0; }
  .modal-content p { margin: 0 0 1rem 0; }
  .modal-content ul {
    margin: .5rem 0 1rem 1.2rem;
    padding: 0;
  }
  .modal-content li { margin-bottom: .4rem; }
`

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const active = projects.find((p) => p.id === openId)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenId(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openId ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [openId])

  return (
    <section id="projects" className="section">
      <style>{modalContentCSS}</style>

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
                <a
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

            <div className="modal-content" style={S.text}>{active.content}</div>
          </div>
        </div>
      )}
    </section>
  )
}
