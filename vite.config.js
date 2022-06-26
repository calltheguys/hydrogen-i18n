import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import netlify from '@netlify/hydrogen-platform/plugin';

export default defineConfig({
  plugins: [hydrogen(), netlify()],
  optimizeDeps: {
    include: [
      'react-i18next',
      'i18next',
      'i18next-http-backend',
      'i18next-browser-languagedetector',
    ],
  },
});
