// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Content collections are now enabled by default in Astro 5
  integrations: [mdx()],
  devToolbar: {
    enabled: false
  }
});
