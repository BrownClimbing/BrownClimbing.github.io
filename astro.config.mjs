import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/deploy/github/
  // TODO: change site to brownclimbingclub.com and remove base once deployed
  site: 'https://brownclimbing.github.io/', 
  base: '/brownclimbingclub.com'
});
