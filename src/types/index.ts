export interface EnlaceNav {
  nombre: string;
  // Nombre Iconify, ej: "lucide:user-round"
  icono: string;
  seccion: string;
}

export interface TituloPerfil {
  nombre: string;
}

export interface RedSocial {
  nombre: string;
  // Nombre Iconify, ej: "simple-icons:github"
  icono: string;
  url: string;
  estilo: string;
}

// Un repositorio del proyecto
export interface Repo {
  // Etiqueta visible, ej: "Frontend"
  nombre: string;
  url: string;
  icono?: string;
  descripcion?: string;
}

// Imagen de la galeria: solo la ruta, o ruta + descripcion
export type ImagenGaleria = string | { ruta: string; descripcion?: string };

export interface Proyecto {
  visible?: boolean;
  titulo?: string;
  // Resumen corto para la tarjeta
  descripcion?: string;
  // Texto largo para el detalle
  resumen?: string;
  // Puntos clave del detalle
  puntosClave?: string[];
  // Ej: "Full Stack"
  rol?: string;
  // Ej: "2024" o "2023 - 2024"
  anio?: string;
  // Ej: "En desarrollo"
  estado?: string;
  imagenes?: ImagenGaleria[];
  tecnologias?: string[];
  urlGithub?: string | null;
  // Varios repos (frontend, backend...). Tiene prioridad sobre urlGithub
  repos?: Repo[];
  urlDemo?: string;
  // Codigo privado: sin enlace a GitHub
  esPrivado?: boolean;
}

// Imagen ya lista para la galeria
export interface ImagenLista {
  ruta: string;
  descripcion: string;
  // Solo si la captura vive en src/assets
  local?: import("astro").ImageMetadata;
}

export type NivelHabilidad = "basico" | "aprendiendo" | "avanzado" | "";

export interface Habilidad {
  nombre: string;
  nivel: NivelHabilidad;
}

export interface CategoriaHabilidades {
  titulo?: string;
  // Nombre Iconify, ej: "lucide:code"
  icono?: string;
  color?: string;
  habilidades?: Habilidad[];
}

export interface Experiencia {
  empresa: string;
  rol: string;
  // Ej: "Ago 2023 - Sep 2026"
  periodo: string;
  puntos?: string[];
}

export interface Estudio {
  titulo: string;
  institucion: string;
  anio: string;
}
