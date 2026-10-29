/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** ID de medicion de GA4 (ej: "G-XXXXXXXXXX"). Si no esta, no se carga analytics. */
  readonly PUBLIC_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
