import type { Lang } from '../i18n/translations';

/**
 * Languages, frameworks and libraries used in shipped work.
 * Source: ~/Projects/cv/WORK-DB.md (only verified or declared tech, per its rules),
 * plus Go from github.com/armandParser. Keep it in sync with that file.
 */
export const stack: { key: string; label: Record<Lang, string>; items: string[] }[] = [
  {
    key: 'languages',
    label: { fr: 'Langages', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Swift', 'Go', 'SQL'],
  },
  {
    key: 'frontend',
    label: { fr: 'Front', en: 'Frontend' },
    items: ['React', 'Vue.js', 'Vuetify', 'Vuex', 'Svelte', 'Astro', 'TanStack Query', 'ECharts', 'PWA'],
  },
  {
    key: 'mobile',
    label: { fr: 'Mobile', en: 'Mobile' },
    items: ['React Native', 'Expo', 'Flutter', 'Bluetooth LE', 'Polar SDK', 'Google ML Kit', 'FCM', 'APNs', 'AdMob', 'Fastlane', 'Xcode Cloud', 'TestFlight'],
  },
  {
    key: 'backend',
    label: { fr: 'Back', en: 'Backend' },
    items: ['Node.js', 'Bun', 'Express', 'Hono', 'GraphQL', 'Zod', 'Better Auth', 'Clerk', 'JWT', 'OAuth2', 'Puppeteer', 'Sharp', 'Resend', 'PM2'],
  },
  {
    key: 'data',
    label: { fr: 'Données', en: 'Data' },
    items: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Atlas Vector Search', 'DynamoDB', 'SQLite'],
  },
  {
    key: 'ai',
    label: { fr: 'IA', en: 'AI' },
    items: ['OpenAI', 'Vercel AI SDK', 'Embeddings', 'Hugging Face', 'AWS Textract', 'NLP'],
  },
  {
    key: 'infra',
    label: { fr: 'Cloud et DevOps', en: 'Cloud and DevOps' },
    items: ['AWS Lambda', 'S3', 'CloudFront', 'DigitalOcean', 'Cloudflare R2', 'Docker', 'On-premise', 'GitHub Actions', 'Netlify', 'Vitest'],
  },
  {
    key: 'design',
    label: { fr: 'Design', en: 'Design' },
    items: ['Figma'],
  },
];
