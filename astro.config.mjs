import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://madebyarm.app',
  base: '/',
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
