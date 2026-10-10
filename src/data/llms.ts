import { site } from '../i18n/site';
import { projects, kindSingular, type Project } from './projects';
import { stack } from './stack';
import { profile, projectUrl } from './profile';

/**
 * Markdown summaries for LLM crawlers (https://llmstxt.org), built from the
 * same data as the home page so they never drift from it.
 * `full` adds the French copy, traction figures and every project detail.
 */
export function buildLlms(origin: string, full: boolean): string {
  const en = site.en;
  const fr = site.fr;
  const by: Record<Project['source'], string> = {
    independent: 'independently',
    parser: 'with the Parser studio',
    escenci: 'at Escenci, as CTO',
  };

  const projectLine = (p: Project) => {
    const link = projectUrl(p);
    const head = link ? `[${p.title}](${link})` : p.title;
    const kinds = p.kinds.map((k) => kindSingular.en[k]).join(', ');
    const metric = p.metrics ? ` Traction: ${p.metrics.en.highlight}.` : '';
    return `- ${head} (${kinds} · ${p.en.sector}, built ${by[p.source]}): ${p.en.desc}${metric}`;
  };

  const projectDetail = (p: Project) => {
    const lines = [
      `### ${p.title}`,
      '',
      `- Type: ${p.kinds.map((k) => kindSingular.en[k]).join(', ')}`,
      `- Sector: ${p.en.sector}`,
      `- Built: ${by[p.source]}`,
      p.href && `- Website: ${p.href}`,
      p.stores?.appStore && `- App Store: ${p.stores.appStore}`,
      p.stores?.playStore && `- Google Play: ${p.stores.playStore}`,
      p.github && `- Source code: ${p.github}`,
      ...(p.metrics ? p.metrics.en.items.map((m) => `- ${m.label}: ${m.value}`) : []),
      '',
      p.en.desc,
      '',
      `FR : ${p.fr.desc}`,
    ];
    return lines.filter((l) => l !== undefined && l !== false && l !== null).join('\n');
  };

  const out = [
    `# ${profile.name}`,
    '',
    `> ${en.description}`,
    '',
    `${profile.name} is a fullstack engineer based in ${profile.city}, France, working remotely or on site. ` +
      'Builds complete products end to end (product design, web frontends, backends and APIs, iOS and Android apps, AI features, deployment), ' +
      'either solo, with the Parser studio, or embedded in a client’s team alongside other designers and developers. ' +
      `Currently ${en.hero.available.toLowerCase()}. Works in French and English.`,
    '',
    '## Contact',
    '',
    `- Email: ${profile.email}`,
    `- Website: ${origin}/ (French) and ${origin}/en/ (English)`,
    `- LinkedIn: ${profile.links.linkedin}`,
    `- Malt (freelance): ${profile.links.malt}`,
    `- GitHub: ${profile.links.github}`,
    '',
    '## Experience',
    '',
    `- Now: co-founder of [Parser](${profile.parser.url}). ${en.about.parserBody}`,
    `- 2018–2024: CTO and product owner at Escenci. ${en.about.escenciBody}`,
    '',
    'In Armand’s own words:',
    '',
    ...en.about.body.map((l) => `> ${l}`),
    '',
    '## Expertise',
    '',
    en.expertise.sub,
    '',
    ...en.expertise.items.map((i) => `- ${i.title}: ${i.body}`),
    '',
    '## Stack',
    '',
    ...stack.map((g) => `- ${g.label.en}: ${g.items.join(', ')}`),
    '',
    `## Projects (${projects.length})`,
    '',
    ...projects.map(projectLine),
    '',
  ];

  if (full) {
    out.push(
      '## Project details',
      '',
      projects.map(projectDetail).join('\n\n'),
      '',
      '## En français',
      '',
      `> ${fr.description}`,
      '',
      fr.hero.lead,
      '',
      fr.expertise.sub,
      '',
      ...fr.about.body,
      '',
    );
  } else {
    out.push('## Optional', '', `- [Full profile with every project in detail, in English and French](${origin}/llms-full.txt)`, '');
  }

  return out.join('\n');
}
