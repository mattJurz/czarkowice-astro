// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mattJurz.github.io',
  base: '/czarkowice-astro',
  vite: {
    plugins: [tailwindcss()]
  }
});