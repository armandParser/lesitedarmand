import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://armandParser.github.io',
  base: '/lesitedarmand',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
