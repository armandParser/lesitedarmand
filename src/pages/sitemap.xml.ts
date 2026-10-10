import type { APIRoute } from 'astro';

/** Two pages, each listing its language alternates. /liftov is noindex and left out on purpose. */
export const GET: APIRoute = ({ site }) => {
  const origin = site!.origin;
  const pages = { fr: `${origin}/`, en: `${origin}/en/` };
  const lastmod = new Date().toISOString().slice(0, 10);
  const alternates = Object.entries(pages)
    .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pages.fr}"/>`)
    .join('\n');
  const urls = Object.values(pages)
    .map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
