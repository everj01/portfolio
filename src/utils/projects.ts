import type { GalleryImage, NormalizedImage, ProjectCardProps } from "../types";

/** Acepta "url" o { src, caption } y devuelve siempre la misma forma. */
export const normalizeImages = (images: GalleryImage[] = []): NormalizedImage[] =>
  images
    .map((item) =>
      typeof item === "string"
        ? { src: item, caption: "" }
        : { src: item?.src ?? "", caption: item?.caption ?? "" }
    )
    .filter((item) => item.src !== "");

/** Hay repositorio publico solo si no es privado y la url no viene vacia. */
export const hasPublicRepo = (project: ProjectCardProps): boolean =>
  !project.privatePro &&
  typeof project.githubUrl === "string" &&
  project.githubUrl.trim() !== "";

/** Hay demo solo si la url no viene vacia. */
export const hasLiveDemo = (project: ProjectCardProps): boolean =>
  typeof project.liveUrl === "string" && project.liveUrl.trim() !== "";
