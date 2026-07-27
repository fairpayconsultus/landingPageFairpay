import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    assetsInclude: ['**/*.svg', '**/*.csv'],
  },
});
