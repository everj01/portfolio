import type { ImageMetadata } from "astro";

// Capturas de src/assets, para que pasen por astro:assets (webp, responsive)
const modulos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/projects/**/*.{png,jpg,jpeg}",
  { eager: true }
);

// "control/01.png" -> imagen importada
const imagenesLocales: Record<string, ImageMetadata> = {};
for (const [ruta, modulo] of Object.entries(modulos)) {
  const clave = ruta.replace("../assets/images/projects/", "");
  imagenesLocales[clave] = modulo.default;
}

// Busca la captura local; undefined si la ruta es externa
export function obtenerImagenLocal(src: string): ImageMetadata | undefined {
  return imagenesLocales[src];
}
