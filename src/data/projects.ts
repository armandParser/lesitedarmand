import { indexProjects, apps, type Lang } from '../i18n/translations';

/**
 * Unified project catalogue for the portfolio grid.
 *
 * Independent web projects and mobile apps are derived from the
 * `indexProjects` / `apps` lists in i18n/translations.ts; Parser studio work
 * is declared here. `classify` below is the single place to
 * retag a project or change who built it.
 */

export type Kind = 'saas' | 'webapp' | 'mobile' | 'website' | 'devtool';
export type Source = 'independent' | 'parser' | 'escenci';

export type Media =
  | { kind: 'video'; src: string; poster: string }
  | { kind: 'image'; src: string; fit: 'cover' | 'contain' }
  | { kind: 'phones'; screens: { src: string; alt: string }[]; framed: boolean };

export interface Project {
  slug: string;
  title: string;
  kinds: Kind[];
  source: Source;
  /** Hue used to tint the card behind transparent screenshots. */
  tint: string;
  media: Media;
  href?: string;
  /** Traction figures (source: ~/Projects/cv/WORK-DB.md). `highlight` is the one-line card version. */
  metrics?: Record<Lang, { highlight: string; items: { value: string; label: string }[] }>;
  /** Store listings for shipped mobile apps. */
  stores?: { appStore?: string; playStore?: string };
  github?: string;
  fr: { desc: string; sector: string };
  en: { desc: string; sector: string };
}

export const kindOrder: Kind[] = ['saas', 'webapp', 'mobile', 'website', 'devtool'];

const slugify = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Sector = the part after "·" in the legacy meta string ("Web · Games" → "Games"). */
const sectorOf = (meta: string) => meta.split('·').pop()!.trim();

/* ── Who built what, and which filters each project appears under ── */
const classify: Record<string, { kinds: Kind[]; source: Source; tint: string }> = {
  // Independent web work
  'hidden-games':          { kinds: ['webapp'],            source: 'independent', tint: '#16a34a' },
  'tenders':               { kinds: ['webapp'],            source: 'independent', tint: '#2563eb' },
  'tldfetch':              { kinds: ['devtool', 'webapp'], source: 'independent', tint: '#7c3aed' },
  'drams-react':           { kinds: ['devtool'],           source: 'independent', tint: '#ea580c' },
  'kimi-antonelli':        { kinds: ['website'],           source: 'independent', tint: '#0891b2' },
  'maggie-editor':         { kinds: ['webapp', 'devtool'], source: 'independent', tint: '#be123c' },
  'parser-lab':            { kinds: ['website'],           source: 'parser',      tint: '#111111' },
  'oyo-escapes':           { kinds: ['website'],           source: 'independent', tint: '#0d9488' },
  'la-gragna-guette':      { kinds: ['website'],           source: 'independent', tint: '#b45309' },
  'liftov-bordeaux':       { kinds: ['website'],           source: 'independent', tint: '#dc2626' },
  'bauer-debarras':        { kinds: ['website'],           source: 'independent', tint: '#4d7c0f' },
  'tivitracker':           { kinds: ['webapp'],            source: 'independent', tint: '#9333ea' },
  'find-my-football-club': { kinds: ['webapp'],            source: 'independent', tint: '#15803d' },
  // Mobile apps
  'sprin':                 { kinds: ['mobile'],            source: 'independent', tint: '#d62b2b' },
  'marauder':              { kinds: ['mobile'],            source: 'independent', tint: '#4f46e5' },
  'pocket':                { kinds: ['mobile'],            source: 'independent', tint: '#0ea5a4' },
  'marges':                { kinds: ['mobile'],            source: 'independent', tint: '#ca8a04' },
  'ramen-cup':             { kinds: ['mobile'],            source: 'independent', tint: '#e11d48' },
};

/* ── Parser studio work (copy from parser-lab.com; Talhia is left out on purpose) ──
   Store links are region free: apps.apple.com/app/id… opens the visitor's own
   storefront, and Play links omit hl= so the listing follows their language. */
const parserProjects: Project[] = [
  {
    slug: 'formalis', title: 'Formalis', kinds: ['saas'], source: 'parser', tint: '#6d28d9',
    href: 'https://www.formalis.ai',
    media: { kind: 'image', src: 'parser/pf-formalis.webp', fit: 'contain' },
    fr: { desc: 'Automatisation des processus juridiques par IA.', sector: 'Legaltech · IA' },
    en: { desc: 'AI powered legal process automation.', sector: 'Legaltech · AI' },
  },
  {
    slug: 'keysper', title: 'Keysper', kinds: ['saas', 'webapp'], source: 'parser', tint: '#10b981',
    href: 'https://keysper.fr',
    media: { kind: 'image', src: 'parser/pf-keysper.webp', fit: 'contain' },
    fr: { desc: "Le Tinder de l'immobilier pour étudiants.", sector: 'Immobilier' },
    en: { desc: 'The Tinder of real estate for students.', sector: 'Real estate' },
  },
  {
    // Escenci product (built as CTO, 2019–2022), not Parser client work. See WORK-DB §5.
    slug: 'sunrise', title: 'Sunrise', kinds: ['webapp'], source: 'escenci', tint: '#0d9488',
    media: { kind: 'image', src: 'parser/pf-sunrise.webp', fit: 'contain' },
    fr: {
      desc: "Suivi nocturne des patients en établissement de soin, du bracelet connecté jusqu'aux alertes du personnel soignant. Déployé sur site : les données de santé ne quittent jamais l'établissement.",
      sector: 'Healthtech · IoT',
    },
    en: {
      desc: 'Night-time monitoring of patients in care facilities, from connected wristbands to alerts on care staff devices. Deployed on premises, so health data never leaves the facility.',
      sector: 'Healthtech · IoT',
    },
  },
  {
    slug: 'vents-et-marees', title: 'Vents&Marées', kinds: ['mobile', 'saas'], source: 'parser', tint: '#2563eb',
    media: { kind: 'image', src: 'parser/pf-vm.webp', fit: 'contain' },
    fr: { desc: "App de diffusion de promotions d'une poissonnerie.", sector: 'E-commerce' },
    en: { desc: 'Promotion broadcasting app for a fish market.', sector: 'E-commerce' },
  },
  {
    slug: 'bits2beat', title: 'Bits2Beat', kinds: ['mobile'], source: 'parser', tint: '#dc2626',
    href: 'https://www.bits2beat.com',
    media: { kind: 'image', src: 'parser/pf-b2b.webp', fit: 'contain' },
    fr: { desc: "Application d'analyse cardiaque.", sector: 'Healthtech · IoT' },
    en: { desc: 'Heart analysis application.', sector: 'Healthtech · IoT' },
  },
  {
    slug: 'laisse-toi-guider', title: 'Laisse-toi Guider', kinds: ['mobile'], source: 'parser', tint: '#b45309',
    stores: { appStore: 'https://apps.apple.com/app/id6752123622', playStore: 'https://play.google.com/store/apps/details?id=com.ltg.app' },
    media: { kind: 'image', src: 'parser/pf-ltg.webp', fit: 'contain' },
    fr: { desc: 'Compteur de calories, en production depuis octobre 2025.', sector: 'Fitness · B2C' },
    en: { desc: 'Calorie counter, live since October 2025.', sector: 'Fitness · B2C' },
    metrics: {
      fr: {
        highlight: '9 000 utilisateurs · 200 abonnés payants',
        items: [
          { value: '9 000', label: 'utilisateurs' },
          { value: '~200', label: 'abonnés payants' },
          { value: '2500', label: 'téléchargements en 3 jours' },
          { value: '5/5', label: 'note moyenne' },
        ],
      },
      en: {
        highlight: '9,000 users · 200 paying subscribers',
        items: [
          { value: '9,000', label: 'users' },
          { value: '~200', label: 'paying subscribers' },
          { value: '2500', label: 'downloads in 3 days' },
          { value: '5/5', label: 'average rating' },
        ],
      },
    },
  },
  {
    slug: 'antekao', title: 'Antekao', kinds: ['mobile'], source: 'parser', tint: '#475569',
    stores: { appStore: 'https://apps.apple.com/app/id6673908596', playStore: 'https://play.google.com/store/apps/details?id=com.antekao.anteapp' },
    media: { kind: 'image', src: 'parser/pf-antekao.webp', fit: 'contain' },
    fr: { desc: 'Coffre-fort numérique.', sector: 'Sécurité' },
    en: { desc: 'Digital safe.', sector: 'Security' },
  },
];

/* ── Independent projects declared directly here ── */
const ownProjects: Project[] = [
  {
    slug: 'restoration-monitor', title: 'Restoration Monitor', kinds: ['webapp'], source: 'independent', tint: '#65a30d',
    href: 'https://greenwatching.madebyarm.app',
    media: { kind: 'image', src: 'previews/restoration-monitor.webp', fit: 'cover' },
    fr: {
      desc: "Des preuves satellite pour la restauration des terres : tracez le périmètre d'un projet, obtenez une image sans nuages pour chaque année depuis 1985 et comparez la zone à ses alentours.",
      sector: 'Climat · Géospatial',
    },
    en: {
      desc: "Satellite evidence for land restoration: draw a project's boundary, get a cloud free image for every year since 1985, and compare the land inside with the land around it.",
      sector: 'Climate · Geospatial',
    },
  },
];

const webProjects: Project[] = indexProjects.map((p) => {
  const slug = slugify(p.title);
  const c = classify[slug];
  if (!c) throw new Error(`projects.ts: no classification for "${slug}"`);
  const media: Media = p.video
    ? { kind: 'video', src: `previews/${p.video}`, poster: `previews/${p.video.replace('.mp4', '-poster.jpg')}` }
    : { kind: 'image', src: `previews/${p.image}`, fit: 'cover' };
  return {
    slug, title: p.title, ...c, media, href: p.href, github: p.github,
    fr: { desc: p.fr.desc, sector: sectorOf(p.fr.meta) },
    en: { desc: p.en.desc, sector: sectorOf(p.en.meta) },
  };
});

const appSectors: Record<string, { fr: string; en: string }> = {
  sprin: { fr: 'IA · Inventaire', en: 'AI · Inventory' },
  marauder: { fr: 'Logistique', en: 'Logistics' },
  pocket: { fr: 'Transport', en: 'Transport' },
  marges: { fr: 'Restauration', en: 'Hospitality' },
  'ramen-cup': { fr: 'Sport', en: 'Sports' },
};

const mobileProjects: Project[] = apps.map((a) => {
  const c = classify[a.slug];
  if (!c) throw new Error(`projects.ts: no classification for "${a.slug}"`);
  return {
    slug: a.slug, title: a.name, ...c, href: a.href,
    media: {
      kind: 'phones',
      framed: a.needsBorders,
      screens: a.screens.map((s, i) => ({ src: s.src, alt: `${a.name}, screen ${i + 1}` })),
    },
    fr: { desc: a.fr.tagline, sector: appSectors[a.slug]?.fr ?? 'Mobile' },
    en: { desc: a.en.tagline, sector: appSectors[a.slug]?.en ?? 'Mobile' },
  };
});

const all = [...parserProjects, ...ownProjects, ...webProjects, ...mobileProjects];

/** Display order: product work first, marketing sites last. Unlisted slugs go to the end. */
const order = [
  'formalis', 'laisse-toi-guider', 'restoration-monitor', 'keysper', 'maggie-editor', 'sunrise', 'marges', 'tldfetch', 'vents-et-marees',
  'sprin', 'tenders', 'bits2beat', 'hidden-games', 'marauder', 'ramen-cup', 'pocket',
  'tivitracker', 'antekao', 'drams-react', 'find-my-football-club', 'kimi-antonelli', 'parser-lab',
  'la-gragna-guette', 'liftov-bordeaux', 'oyo-escapes', 'bauer-debarras',
];
const rank = (slug: string) => { const i = order.indexOf(slug); return i === -1 ? order.length : i; };

export const projects: Project[] = all.sort((a, b) => rank(a.slug) - rank(b.slug));

export const countBy = (pred: (p: Project) => boolean) => projects.filter(pred).length;

/** Singular form, used on a single project card. */
export const kindSingular: Record<Lang, Record<Kind, string>> = {
  fr: { saas: 'SaaS', webapp: 'App web', mobile: 'App mobile', website: 'Site web', devtool: 'Outil dev' },
  en: { saas: 'SaaS', webapp: 'Web app', mobile: 'Mobile app', website: 'Website', devtool: 'Dev tool' },
};

export const kindLabels: Record<Lang, Record<Kind | 'all', string>> = {
  fr: { all: 'Tout', saas: 'SaaS', webapp: 'Apps web', mobile: 'Apps mobile', website: 'Sites web', devtool: 'Outils dev' },
  en: { all: 'All', saas: 'SaaS', webapp: 'Web apps', mobile: 'Mobile apps', website: 'Websites', devtool: 'Dev tools' },
};
