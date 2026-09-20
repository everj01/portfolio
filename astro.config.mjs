import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Mismo subdirectorio que usaba Vite (vite.config.ts -> base: '/portfolio/').
  // Si lo despliegas en la raiz de un dominio, borra esta linea.
  //base: '/portfolio/',
  base: '/',
  integrations: [
    tailwind(),
    // Iconos como SVG inline en el build: sin CDN, sin kits externos,
    // sin iconos que "no cargan". Colecciones: lucide + simple-icons.
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': ['*'],
      },
    }),
  ],
});
