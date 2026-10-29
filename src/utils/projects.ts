import type { GalleryImage, NormalizedImage, ProjectCardProps } from "../types";
import { getLocalProjectImage } from "./localProjectImages";

/**
 * Acepta "url" o { src, caption } y devuelve siempre la misma forma.
 * Si `src` coincide con una captura empaquetada (ej: "control/01.png"),
 * adjunta su ImageMetadata para que el componente la sirva optimizada
 * con astro:assets en vez de un <img> plano.
 */
export const normalizeImages = (images: GalleryImage[] = []): NormalizedImage[] =>
  images
    .map((item) => {
      const src = typeof item === "string" ? item : item?.src ?? "";
      const caption = typeof item === "string" ? "" : item?.caption ?? "";
      const local = getLocalProjectImage(src);
      return local ? { src, caption, local } : { src, caption };
    })
    .filter((item) => item.src !== "");

/** Hay repositorio publico solo si no es privado y la url no viene vacia. */
export const hasPublicRepo = (project: ProjectCardProps): boolean =>
  !project.privatePro &&
  typeof project.githubUrl === "string" &&
  project.githubUrl.trim() !== "";

/** Hay demo solo si la url no viene vacia. */
export const hasLiveDemo = (project: ProjectCardProps): boolean =>
  typeof project.liveUrl === "string" && project.liveUrl.trim() !== "";
