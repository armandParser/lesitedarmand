export type Lang = 'fr' | 'en';

export const ui = {
  fr: {
    pageTitle: 'Armand Collier — Développeur web',
    heroDesc: "Développeur web depuis 2020, créateur d'interfaces modernes et expériences numériques sur mesure.",
    indexTagline: 'Projets personnels ou professionnels réalisés dans les 12 derniers mois.',
    cardTagline: 'Projets personnels ou professionnels réalisés au cours des 12 derniers mois.',
    contact: 'Contact',
    langSwitch: 'EN',
    mobileTitle: 'Applications mobile',
    mobileHint: 'Touchez un écran pour agrandir',
    lbClose: 'Fermer',
    lbPrev: 'Écran précédent',
    lbNext: 'Écran suivant',
  },
  en: {
    pageTitle: 'Armand Collier — Web Developer',
    heroDesc: 'Web developer since 2020, crafting modern interfaces and bespoke digital experiences.',
    indexTagline: 'Personal and professional projects from the last 12 months.',
    cardTagline: 'Personal and professional projects from the last 12 months.',
    contact: 'Contact',
    langSwitch: 'FR',
    mobileTitle: 'Mobile Apps',
    mobileHint: 'Tap a screen to zoom',
    lbClose: 'Close',
    lbPrev: 'Previous screen',
    lbNext: 'Next screen',
  },
} as const;

export interface ProjectEntry {
  title: string;
  fr: { desc: string; meta: string };
  en: { desc: string; meta: string };
  href?: string;
  github?: string;
  video: string;
}

export const indexProjects: ProjectEntry[] = [
  {
    title: 'Hidden Games',
    fr: { desc: "Jeux de société cachés dans un tableur Excel — 2048, Mines, Échecs — avec mode multijoueur P2P.", meta: 'Web · Jeux' },
    en: { desc: "Board games hidden in an Excel spreadsheet — 2048, Minesweeper, Chess — with P2P multiplayer.", meta: 'Web · Games' },
    href: 'https://hiddengames.netlify.app',
    video: 'hidden-games.mp4',
  },
  {
    title: 'Tenders',
    fr: { desc: "Client convivial pour le portail des marchés publics français.", meta: 'Web · Open source' },
    en: { desc: "Friendly client for the French public procurement portal.", meta: 'Web · Open source' },
    href: 'https://tendersansfrites.netlify.app',
    github: 'https://github.com/armandParser/tenders',
    video: 'tenders.mp4',
  },
  {
    title: 'tldfetch',
    fr: { desc: "Outil de test d'API sur canvas — flux de requêtes visuels avec blocs et flèches.", meta: 'Web · DevTools' },
    en: { desc: "Canvas-based API testing tool — visual request flows with blocks and arrows.", meta: 'Web · DevTools' },
    href: 'https://tldfetch.netlify.app',
    github: 'https://github.com/armandParser/tldfetch',
    video: 'tldfetch.mp4',
  },
  {
    title: 'drams-react',
    fr: { desc: 'Bibliothèque React de contrôles UI 3D/néomorphiques — inspirés de Dieter Rams.', meta: 'Library · React' },
    en: { desc: 'React library of 3D/neumorphic UI controls — inspired by Dieter Rams.', meta: 'Library · React' },
    href: 'https://drams-react.netlify.app',
    github: 'https://github.com/armandParser/drams-react',
    video: 'drams-react.mp4',
  },
  {
    title: 'Kimi Antonelli',
    fr: { desc: "Site personnel du pilote F1 Kimi Antonelli.", meta: 'Site · Personnel' },
    en: { desc: "Personal site for F1 driver Kimi Antonelli.", meta: 'Site · Personal' },
    href: 'https://kimiantonelli.netlify.app',
    video: 'kimi-antonelli.mp4',
  },
  {
    title: 'Maggie Editor',
    fr: { desc: "Interface de création de magazines et journaux.", meta: 'Web · DevTools' },
    en: { desc: "Magazine and newspaper layout creation interface.", meta: 'Web · DevTools' },
    href: 'https://maggie-editor.netlify.app/',
    github: 'https://github.com/armandParser/maggie',
    video: 'maggie.mp4',
  },
  {
    title: 'Parser Lab',
    fr: { desc: 'Site de studio logiciel.', meta: 'Site · Studio' },
    en: { desc: 'Software studio site.', meta: 'Site · Studio' },
    href: 'https://parser-lab.com',
    video: 'parser-lab.mp4',
  },
  {
    title: 'Oyo Escapes',
    fr: { desc: "Site d'expériences de voyage.", meta: 'Site · Travel' },
    en: { desc: "Travel experiences site.", meta: 'Site · Travel' },
    video: 'oyo-escapes.mp4',
  },
  {
    title: 'La Gragna Guette',
    fr: { desc: 'Restaurant toulousain.', meta: 'Site · Restaurant' },
    en: { desc: 'Toulouse restaurant.', meta: 'Site · Restaurant' },
    href: 'https://lagragnaguette.com',
    video: 'la-gragna-guette.mp4',
  },
  {
    title: 'Liftov Bordeaux',
    fr: { desc: 'Bar bordelais.', meta: 'Site · Fitness' },
    en: { desc: 'Bordeaux bar.', meta: 'Site · Fitness' },
    href: 'https://liftovbordeaux.fr',
    video: 'liftov-bordeaux.mp4',
  },
  {
    title: 'Bauer Débarras',
    fr: { desc: "Site de débarras et enlèvement de déchets.", meta: 'Site · Services' },
    en: { desc: "Clearance and waste removal site.", meta: 'Site · Services' },
    href: 'https://bauer-debarras.netlify.app',
    video: 'bauer-debarras.mp4',
  },
];

export const cardProjects: ProjectEntry[] = indexProjects.filter(p => p.title !== 'Hidden Games');

export interface AppScreen {
  src: string;
  alt: string;
}

export interface AppEntry {
  name: string;
  slug: string;
  needsBorders: boolean;
  accent: string;
  fr: { tagline: string };
  en: { tagline: string };
  screens: AppScreen[];
}

// Placeholder scaffold. Drop real portrait screenshots (PNG/JPG) into
// /public/apps/ and point each screen `src` at them — the markup just
// renders whatever is referenced here.
export const apps: AppEntry[] = [
  {
    name: 'Sprin',
    slug: 'sprin',
    needsBorders: false,
    accent: '#D62B2B',
    fr: { tagline: 'Extraire les objets d\'une pièce et estimer leur valeur' },
    en: { tagline: 'Extract objects from a room, estimate their value' },
    screens: [
      { src: 'apps/sprin-0.png', alt: 'Ramen Cup — scores en direct' },
      { src: 'apps/sprin-1.png', alt: 'Ramen Cup — classements de groupe' },
      { src: 'apps/sprin-2.png', alt: 'Ramen Cup — tableau final' },
    ],
  },
  {
    name: 'Marauder',
    slug: 'marauder',
    needsBorders: false,
    accent: '#4F46E5',
    fr: { tagline: 'Planning automatique des tournées pour artisans.' },
    en: { tagline: 'Automatic routing for craftsmen and deliveries' },
    screens: [
      { src: 'apps/router-0.png', alt: 'Studio — screen 1' },
      { src: 'apps/router-1.png', alt: 'Studio — screen 2' },
      { src: 'apps/router-2.png', alt: 'Studio — screen 3' },
    ],
  },
  {
    name: 'Pocket',
    slug: 'pocket',
    needsBorders: true,
    accent: '#0EA5A4',
    fr: { tagline: 'Réservation de speedboat pour transport et colis aux Maldives.' },
    en: { tagline: 'Transportation app for Maldives speedboats' },
    screens: [
      { src: 'apps/islandhop-0.png', alt: 'Pocket — screen 1' },
      { src: 'apps/islandhop-1.png', alt: 'Pocket — screen 2' },
      { src: 'apps/islandhop-2.png', alt: 'Pocket — screen 3' },
    ],
  },
  {
    name: "Marges",
    slug: "marges",
    needsBorders: false,
    accent: "#0EA5A4",
    fr: { tagline: 'Gestion de bar et restaurant tout-en-un' },
    en: { tagline: 'All-in-one restaurant management app' },
    screens: [
      { src: 'apps/marges-0.png', alt: 'Pocket — screen 1' },
      { src: 'apps/marges-1.png', alt: 'Pocket — screen 2' },
      { src: 'apps/marges-2.png', alt: 'Pocket — screen 3' },
      { src: 'apps/marges-3.png', alt: 'Pocket — screen 3' },
    ],
  },
  {
    name: 'Ramen Cup',
    slug: 'ramen-cup',
    needsBorders: true,
    accent: '#0EA5A4',
    fr: { tagline: 'Suivi de la coupe du monde 2026' },
    en: { tagline: 'Easy way to follow the World Cup \'26' },
    screens: [
      { src: 'apps/ramen-0.png', alt: 'Pocket — screen 1' },
      { src: 'apps/ramen-1.png', alt: 'Pocket — screen 2' },
      { src: 'apps/ramen-2.png', alt: 'Pocket — screen 3' },
    ],
  },
];
