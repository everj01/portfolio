/// <reference types="astro/client" />

interface ImportMetaEnv {
  // ID de GA4, ej: "G-XXXXXXXXXX". Sin el, no se carga analytics
  readonly PUBLIC_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
