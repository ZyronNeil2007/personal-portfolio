import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // NOTE: Change base to '/zyron-portfolio-v2/' before deploying to GitHub Pages
  base: '/',
});
