export type ProjectCategory = 'mobile' | 'saas' | 'personal' | 'client';

export interface Project {
  title: string;
  description: string;
  descriptionFr: string;
  category: ProjectCategory;
  meta: string;
  href?: string;
  github?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
}

export const projects: Project[] = [
  // ── Mobile apps ──────────────────────────────────────────────────────────
  {
    title: 'Bits2Beat',
    description: 'Cardiac analysis app — ECG reading, heart rate zones, and training insights.',
    descriptionFr: "Application d'analyse cardiaque — lecture ECG, zones de fréquence cardiaque et insights d'entraînement.",
    category: 'mobile',
    image: "/previews/pf-b2b.webp",
    meta: 'iOS · Health',
  },
  {
    title: 'Antekao',
    description: 'Digital vault for insurers and law enforcement — secure document storage and chain-of-custody workflows.',
    descriptionFr: 'Coffre-fort numérique pour assureurs et policiers — stockage sécurisé de documents et chaîne de custody.',
    category: 'mobile',
    image: "/previews/pf-antekao.webp",
    meta: 'iOS · B2B',
  },
  {
    title: 'Laisse-toi Guider',
    description: 'Guided calorie counter — food logging with nutritional breakdown and daily targets.',
    descriptionFr: 'Compteur de calories guidé — journalisation alimentaire avec bilan nutritionnel et objectifs journaliers.',
    category: 'mobile',
    image: "/previews/pf-ltg.webp",
    meta: 'iOS · Health',
  },
  {
    title: 'Vents&Marées',
    description: 'Promotion broadcast app for a fishmonger — push daily catch highlights and deals to loyal customers.',
    descriptionFr: "App de diffusion de promotions pour une poissonnerie — envoi des arrivages du jour et promotions aux clients fidèles.",
    category: 'mobile',
    image: "/previews/pf-vm.webp",
    meta: 'iOS · Local',
  },

  // ── SaaS ─────────────────────────────────────────────────────────────────
  {
    title: 'Sunrise',
    description: 'Patient monitoring platform for loss of autonomy — tracks daily indicators and flags care team alerts.',
    descriptionFr: "Plateforme de suivi de patients en perte d'autonomie — indicateurs quotidiens et alertes pour l'équipe soignante.",
    category: 'saas',
    image: "/previews/pf-sunrise.webp",
    meta: 'SaaS · HealthTech',
  },
  {
    title: 'Formalis',
    description: 'AI-powered legal process automation for chartered accountants — generates compliant documents from structured inputs.',
    descriptionFr: 'Automatisation des processus juridiques par IA pour experts-comptables — génère des documents conformes depuis des données structurées.',
    category: 'saas',
    image: "/previews/app_formalis.webp",
    meta: 'SaaS · LegalTech',
  },
  {
    title: 'Keysper',
    description: 'Student apartment matching — swipe to find your next flat. Tinder-style UX for the rental market.',
    descriptionFr: "Matching d'appartements pour étudiants — swipez pour trouver votre prochain logement. UX façon Tinder pour la location.",
    category: 'saas',
    image: '/previews/keysper-image.png',
    meta: 'SaaS · PropTech',
  },

  // ── Personal projects ─────────────────────────────────────────────────────
  {
    title: 'Tenders',
    description: 'User-friendly client for the French public procurement portal.',
    descriptionFr: "Client convivial pour le portail des marchés publics français.",
    category: 'personal',
    meta: 'Web · Open source',
    href: 'https://tendersansfrites.netlify.app',
    github: 'https://github.com/armandParser/tenders',
    video: '/previews/tenders.mp4',
  },
  {
    title: 'tldfetch',
    description: 'Canvas-based API testing tool — build visual request flows with blocks and arrows. tldraw meets Postman.',
    descriptionFr: "Outil de test d'API sur canvas — construisez des flux de requêtes visuels avec des blocs et des flèches. tldraw & Postman.",
    category: 'personal',
    meta: 'Web · DevTools',
    href: 'https://tldfetch.netlify.app',
    github: 'https://github.com/armandParser/tldfetch',
    video: '/previews/tldfetch.mp4',
  },
  {
    title: 'drams-react',
    description: 'React component library of tactile 3D/neumorphic UI controls — toggle switches and sliders inspired by Dieter Rams.',
    descriptionFr: 'Bibliothèque React de contrôles UI tactiles 3D/néomorphiques — interrupteurs et curseurs inspirés de Dieter Rams.',
    category: 'personal',
    meta: 'Library · React',
    href: 'https://drams-react.netlify.app',
    github: 'https://github.com/armandParser/drams-react',
    video: '/previews/drams-react.mp4',
  },
  {
    title: 'Kimi Antonelli',
    description: "Personal website for F1 driver Kimi Antonelli — the only F1 driver without a website.",
    descriptionFr: "Site personnel du pilote F1 Kimi Antonelli — le seul pilote F1 sans site web.",
    category: 'personal',
    meta: 'Site · Personal',
    href: 'https://kimiantonelli.netlify.app',
    video: '/previews/kimi-antonelli.mp4',
  },
  {
    title: 'Maggie Editor',
    description: 'Simple magazine and journal creation interface.',
    descriptionFr: "Interface simple de création de magazines et de journaux",
    category: 'personal',
    meta: 'Web · DevTools',
    href: 'https://maggie-editor.netlify.app/',
    github: 'https://github.com/armandParser/maggie',
    video: '/previews/maggie.mp4',
  },

  // ── Client work ───────────────────────────────────────────────────────────
  {
    title: 'Parser Lab',
    description: 'Software studio website.',
    descriptionFr: 'Site de studio logiciel.',
    category: 'client',
    meta: 'Site · Studio',
    href: 'https://parser-lab.com',
    video: '/previews/parser-lab.mp4',
  },
  {
    title: 'Oyo Escapes',
    description: 'Travel experience website.',
    descriptionFr: "Site d'expériences de voyage.",
    category: 'client',
    meta: 'Site · Travel',
    video: '/previews/oyo-escapes.mp4',
  },
  {
    title: 'La Gragna Guette',
    description: 'Local restaurant website.',
    descriptionFr: 'Restaurant toulousain.',
    category: 'client',
    meta: 'Site · Restaurant',
    href: 'https://lagragnaguette.com',
    video: '/previews/la-gragna-guette.mp4',
  },
  {
    title: 'Liftov Bordeaux',
    description: 'Bordeaux bar.',
    descriptionFr: 'Bar bordelais.',
    category: 'client',
    meta: 'Site · Fitness',
    href: 'https://liftovbordeaux.fr',
    video: '/previews/liftov-bordeaux.mp4',
  },
  {
    title: 'Bauer Débarras',
    description: 'Clearance and waste removal service website.',
    descriptionFr: "Site de débarras et enlèvement de déchets.",
    category: 'client',
    meta: 'Site · Services',
    href: 'https://bauer-debarras.netlify.app',
    video: '/previews/bauer-debarras.mp4',
  },
];

export const stack: string[] = [
  'TypeScript',
  'Astro',
  'React',
  'Node',
  'Postgres',
  'Tailwind',
  'Stripe',
  'Vercel',
  'SaaS',
  'Edge functions',
];

export function byCategory(cat: ProjectCategory) {
  return projects.filter((p) => p.category === cat);
}
