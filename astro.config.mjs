// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://PorlinIng.github.io' : 'https://porlin.vercel.app',
  base: isGitHubPages ? '/portfolio' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});