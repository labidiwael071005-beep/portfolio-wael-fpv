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
