import type {
  GalleryImage,
  NormalizedImage,
  ProjectCardProps,
  RepoLink,
} from "../types";
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

/**
 * Lista de repositorios publicos del proyecto.
 * Un proyecto puede tener varios (frontend, backend, móvil...): en ese caso se
 * usa `repos`. Si solo hay uno basta `githubUrl`, que se sigue soportando.
 * Si el proyecto es privado no se expone ninguno.
 */
export const normalizeRepos = (project: ProjectCardProps): RepoLink[] => {
  if (project.privatePro) return [];

  const list = (project.repos ?? [])
    .map((repo, index) => ({
      ...repo,
      name: repo?.name?.trim() || `Repositorio ${index + 1}`,
      url: typeof repo?.url === "string" ? repo.url.trim() : "",
    }))
    .filter((repo) => repo.url !== "");

  if (list.length > 0) return list;

  const single = typeof project.githubUrl === "string" ? project.githubUrl.trim() : "";
  return single ? [{ name: "Repositorio", url: single }] : [];
};

/** Hay repositorio público solo si no es privado y queda al menos una url. */
export const hasPublicRepo = (project: ProjectCardProps): boolean =>
  normalizeRepos(project).length > 0;

/** Hay demo solo si la url no viene vacia. */
export const hasLiveDemo = (project: ProjectCardProps): boolean =>
  typeof project.liveUrl === "string" && project.liveUrl.trim() !== "";
