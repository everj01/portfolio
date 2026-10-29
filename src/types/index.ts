export interface ItemsNavbar {
  name: string;
  /** Nombre Iconify, ej: "lucide:user-round" */
  icon: string;
  section: string;
}

export interface TitleDev {
  name: string;
}

export interface SocialItem {
  name: string;
  /** Nombre Iconify, ej: "simple-icons:github" */
  icon: string;
  url: string;
  style: string;
}

/** Una imagen de la galeria: solo la url, o url + descripcion propia. */
export type GalleryImage = string | { src: string; caption?: string };

export interface ProjectCardProps {
  visible?: boolean;
  title?: string;
  /** Resumen corto: es lo que se ve en la tarjeta. */
  description?: string;
  /** Texto largo opcional para el detalle. Si falta, se usa description. */
  overview?: string;
  /** Puntos clave que se listan en el detalle. */
  highlights?: string[];
  /** Rol desempeñado, ej: "Full Stack". */
  role?: string;
  /** Año o rango, ej: "2024" / "2023 - 2024". */
  year?: string;
  /** Estado del proyecto, ej: "En desarrollo". Si falta, no se muestra nada. */
  status?: string;
  image?: GalleryImage[];
  tech?: string[];
  githubUrl?: string | null;
  liveUrl?: string;
  /** true => el codigo es privado, no se ofrece enlace a GitHub. */
  privatePro?: boolean;
}

/** Imagen ya normalizada para la galeria. */
export interface NormalizedImage {
  src: string;
  caption: string;
  /** Presente solo si `src` es una captura empaquetada en src/assets. */
  local?: import("astro").ImageMetadata;
}

export type SkillLevel = "basic" | "learning" | "advanced" | "";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillsCat {
  title?: string;
  /** Nombre Iconify, ej: "lucide:code" */
  icon?: string;
  color?: string;
  skills?: Skill[];
}
