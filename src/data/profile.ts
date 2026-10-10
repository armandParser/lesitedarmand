import { site } from '../i18n/site';
import type { Lang } from '../i18n/translations';
import { projects, kindSingular, type Project } from './projects';
import { stack } from './stack';

/**
 * Who Armand is, in one place: feeds the JSON-LD in HomeLayout, the footer
 * links and the generated /llms.txt and /llms-full.txt.
 */
export const profile = {
  name: 'Armand Collier',
  email: 'armandcollier24@gmail.com',
  city: 'Bordeaux',
  country: 'FR',
  links: {
    github: 'https://github.com/armandParser',
    linkedin: 'https://www.linkedin.com/in/armand-collier/',
    malt: 'https://www.malt.fr/profile/armandcollier',
  },
  parser: { name: 'Parser', url: 'https://parser-lab.com' },
  escenci: { name: 'Escenci' },
  jobTitle: { fr: 'Ingénieur fullstack', en: 'Fullstack engineer' },
};

export const sameAs = Object.values(profile.links);

/** Where a project lives on the web, best link first. */
export const projectUrl = (p: Project) => p.href ?? p.stores?.appStore ?? p.stores?.playStore ?? p.github;

/** schema.org graph for the home page: the site, the profile page, the person and their work. */
export function jsonLd(lang: Lang, origin: string, pageUrl: string) {
  const t = site[lang];
  const personId = `${origin}/#person`;
  const builder = (p: Project) =>
    p.source === 'parser' ? { '@id': `${origin}/#parser` } : p.source === 'escenci' ? { '@type': 'Organization', name: profile.escenci.name } : { '@id': personId };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: profile.name,
        inLanguage: ['fr', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#page`,
        url: pageUrl,
        name: t.title,
        description: t.description,
        inLanguage: lang,
        isPartOf: { '@id': `${origin}/#website` },
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: profile.name,
        url: `${origin}/`,
        image: `${origin}/parser/armand.jpg`,
        email: `mailto:${profile.email}`,
        jobTitle: profile.jobTitle[lang],
        description: t.description,
        address: { '@type': 'PostalAddress', addressLocality: profile.city, addressCountry: profile.country },
        worksFor: { '@id': `${origin}/#parser` },
        knowsLanguage: ['fr', 'en'],
        knowsAbout: stack.flatMap((g) => g.items),
        sameAs,
      },
      {
        '@type': 'Organization',
        '@id': `${origin}/#parser`,
        name: profile.parser.name,
        url: profile.parser.url,
        founder: { '@id': personId },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#work`,
        name: t.work.title,
        itemListElement: projects.map((p, i) => {
          const isApp = p.kinds.includes('mobile');
          const os = [p.stores?.appStore && 'iOS', p.stores?.playStore && 'Android'].filter(Boolean).join(', ');
          return {
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': isApp || p.kinds.includes('saas') || p.kinds.includes('webapp') ? 'SoftwareApplication' : 'CreativeWork',
              '@id': `${pageUrl}#${p.slug}`,
              name: p.title,
              description: p[lang].desc,
              genre: kindSingular[lang][p.kinds[0]],
              about: p[lang].sector,
              url: projectUrl(p),
              creator: builder(p),
              ...(isApp ? { applicationCategory: 'MobileApplication', ...(os && { operatingSystem: os }) } : {}),
              ...(!isApp && (p.kinds.includes('saas') || p.kinds.includes('webapp')) ? { applicationCategory: 'WebApplication', operatingSystem: 'Web' } : {}),
            },
          };
        }),
      },
    ],
  };
}
