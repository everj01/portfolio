import type { ImageMetadata } from "astro";

// Mapea "control/01.png" -> ImageMetadata del asset importado por Vite.
// Permite que data.json siga usando strings, pero que las capturas que
// viven en src/assets/images/projects/ pasen por astro:assets (webp,
// tamanos responsivos) en vez de servirse como <img src="..."> plano.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/projects/**/*.{png,jpg,jpeg}",
  { eager: true }
);

const localProjectImages: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const key = path.replace("../assets/images/projects/", "");
  localProjectImages[key] = mod.default;
}

/** Devuelve el asset local si `src` coincide con una captura empaquetada. */
export const getLocalProjectImage = (src: string): ImageMetadata | undefined =>
  localProjectImages[src];
