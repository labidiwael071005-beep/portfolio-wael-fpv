# WAEL.FPV — Portfolio Cockpit

Portfolio React/Vite de Labidi Wael, conçu comme la vision d'un drone FPV :
HUD permanent, curseur viseur, coins angulaires, scanlines, vignette, et
4 waypoints pour les passions (drone FPV, électronique, boxe, pêche).

## Lancer le projet en local

Prérequis : **Node.js 18+** (téléchargeable sur [nodejs.org](https://nodejs.org)).

```bash
npm install        # installe les dépendances (1-2 min la première fois)
npm run dev        # lance le serveur de dev → http://localhost:5173
```

Pour construire la version de production :

```bash
npm run build      # génère le dossier dist/ prêt à déployer
npm run preview    # prévisualise localement le build de prod
```

## Déposer ton CV

Place ton CV dans `public/Labidi_Wael_CV.pdf` pour que les boutons
« Télécharger CV » fonctionnent.

## Changer les images

Les deux images se trouvent dans `public/assets/` :
- `wael-cloud.png` — ton personnage sur le nuage (visible dans le Hero)
- `kame-house-bg.png` — décor Kame House (fond global du site)

Tu peux les remplacer par d'autres fichiers du même nom, ou éditer les
chemins dans `src/components/Hero.jsx` (portrait) et `src/index.css`
(ligne `.site-bg { background-image: ... }`).

## Structure

```
src/
├── App.jsx                  # Orchestre HUD, curseur, sections
├── index.css                # Système de design complet (couleurs, HUD, fonts…)
├── main.jsx                 # Entrée React
└── components/
    ├── BootOverlay.jsx      # Écran de boot FPV (~1.7s au premier chargement)
    ├── CockpitHUD.jsx       # HUD permanent (coins, readouts, altitude, horizon)
    ├── FPVCursor.jsx        # Curseur viseur custom
    ├── Navbar.jsx           # Navigation avec les 7 sections
    ├── Hero.jsx             # Accueil (signal, nom, descriptif, portrait)
    ├── About.jsx            # À propos (texte + cartes stats)
    ├── Skills.jsx           # 4 cartes catégories
    ├── Projects.jsx         # 3 missions
    ├── Parcours.jsx         # Timeline XP + formations
    ├── Passions.jsx         # 4 waypoints interactifs
    ├── Contact.jsx          # Coordonnées + CTA alternance
    └── Footer.jsx           # Telemetry footer
```

## Personnalisation rapide

- **Couleurs** : édite les variables CSS en haut de `src/index.css`
  (`--c-violet`, `--c-yellow`, etc.).
- **Contenu des waypoints (passions)** : tableau `passions` dans
  `src/components/Passions.jsx`.
- **Textes du Hero** : `src/components/Hero.jsx`.

## Notes techniques

- **Curseur custom** désactivé automatiquement sur mobile et écrans
  tactiles (le viseur ne fonctionne que sur desktop avec hover).
- **HUD** : l'altitude et l'horizon disparaissent sur petits écrans pour
  ne pas surcharger.
- **Boot overlay** : skippable au clic, dure 1.7s au premier chargement.
- Build vérifié OK avec Vite 5 + React 19.
