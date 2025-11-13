
import React from 'react';
import type { ExperienceItem, EducationItem, Skill } from './types';

// SVG Icons
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const GlobeAltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 019-9" />
    </svg>
);

const OfficeBuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);


export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Stage: Analyse du fonctionnement d'une entreprise commerciale",
    company: "Midagri S.A.R.L",
    company_logo: <OfficeBuildingIcon />,
    company_link: "#",
    period: "Avril 2023 - Mai 2023",
    location: "Midelt",
    tasks: [
      "Vente au comptoir et conseil client",
      "Gestion optimisée des stocks",
      "Prospection de nouveaux clients",
      "Saisie des factures et bons de commande",
      "Enregistrement des ventes et des achats"
    ]
  },
  {
    role: "Stage: Analyse des activités commerciales d'une entreprise",
    company: "Phyto clinic santé et végétale S.A.R.L",
    company_logo: <OfficeBuildingIcon />,
    company_link: "#",
    period: "Novembre 2022 - Janvier 2023",
    location: "Meknès",
    tasks: [
      "Vente et conseil en produits phytosanitaires",
      "Gestion des stocks et inventaire",
      "Prospection et développement de portefeuille client",
      "Utilisation de logiciel de gestion commerciale"
    ]
  },
  {
    role: "Stage: Conduite technique en exploitation agricole (Rosacée)",
    company: "Domaine Youssef",
    company_logo: <OfficeBuildingIcon />,
    company_link: "#",
    period: "Juin 2022 - Juillet 2022",
    location: "Meknès",
    tasks: [
      "Supervision de la récolte",
      "Gestion de l'emballage et du conditionnement",
      "Application des protocoles de protection phytosanitaire",
      "Mesure de calibre et estimation du rendement"
    ]
  },
  {
    role: "Stage: Conduite technique en exploitation agricole (Framboise)",
    company: "Domaine Zniber",
    company_logo: <OfficeBuildingIcon />,
    company_link: "#",
    period: "Février 2022 - Avril 2022",
    location: "Agadir",
    tasks: [
      "Organisation de la récolte",
      "Tri et emballage des fruits",
      "Mise en œuvre de la protection phytosanitaire",
      "Contrôle qualité des produits finis"
    ]
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: "Licence professionnelle en Management et administration des organisations",
    institution: "Université Chouaïb Doukkali",
    institution_link: "#",
    period: "Depuis Novembre 2023",
    location: "El Jadida"
  },
  {
    degree: "Diplôme de technicienne spécialisée en Commercialisation des intrants agricoles",
    institution: "Institut des techniciens spécialisés en horticulture",
    institution_link: "#",
    period: "Septembre 2021 - Juin 2023",
    location: "Meknès"
  },
  {
    degree: "Première année en Biologie, chimie, Géologie",
    institution: "Faculté des sciences et techniques",
    institution_link: "#",
    period: "Septembre 2020 - Juin 2021",
    location: "Errachidia"
  },
  {
    degree: "Baccalauréat en sciences de la vie et la terre",
    institution: "Lycée qualifiant Aghbalou",
    institution_link: "#",
    period: "Septembre 2019 - Juin 2020",
    location: "Aghbalou"
  }
];

export const SKILLS_COMMERCIALES: Skill[] = [
    { name: 'Gestion Relation Client', icon: <UsersIcon /> },
    { name: 'Prospection Commerciale', icon: <BriefcaseIcon /> },
    { name: 'Marketing Digital', icon: <ChartBarIcon /> },
    { name: 'Vente & Négociation', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
];

export const SKILLS_TECHNIQUES: Skill[] = [
    { name: 'Microsoft Word', icon: <OfficeBuildingIcon /> },
    { name: 'Microsoft Excel', icon: <OfficeBuildingIcon /> },
    { name: 'Microsoft PowerPoint', icon: <OfficeBuildingIcon /> },
    { name: 'Logiciels de gestion', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
];

export const SKILLS_LANGUES: Skill[] = [
    { name: 'Arabe', icon: <GlobeAltIcon /> },
    { name: 'Français', icon: <GlobeAltIcon /> },
    { name: 'Anglais', icon: <GlobeAltIcon /> },
    { name: 'Amazighe', icon: <GlobeAltIcon /> },
];