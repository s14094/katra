// @ts-check
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    site: isProd ? 'https://s14094.github.io' : 'http://localhost:4321',
    base: isProd ? '/katra/' : '/',
});
