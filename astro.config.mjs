// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  adapter: staticAdapter(),
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
