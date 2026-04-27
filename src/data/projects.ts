export interface Project {
  title: string;
  description: string;
  meta: string;
  href?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'SaaS placeholder — replace with real description.',
    meta: 'SaaS · 2025',
    year: '2025',
  },
  {
    title: 'Project Two',
    description: 'Marketing site placeholder — replace with real description.',
    meta: 'Site · 2025',
    year: '2025',
  },
  {
    title: 'Project Three',
    description: 'Internal tool placeholder — replace with real description.',
    meta: 'Tool · 2024',
    year: '2024',
  },
  {
    title: 'Project Four',
    description: 'API / backend placeholder — replace with real description.',
    meta: 'Infra · 2024',
    year: '2024',
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
