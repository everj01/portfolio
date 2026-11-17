// Todo el contenido editable vive en datos.json; aqui solo se tipa y se exporta
import type {
  CategoriaHabilidades,
  EnlaceNav,
  Estudio,
  Experiencia,
  Proyecto,
  RedSocial,
  TituloPerfil,
} from "../types";
import datos from "./datos.json";

// CV descargable
export const urlCv: string = datos.urlCv;

// Certificados. Si esta vacio, el boton baja a la seccion de educacion
export const urlCertificados: string = datos.urlCertificados;

// Navbar
export const enlacesNav: EnlaceNav[] = datos.menu;

// Titulos del perfil
export const titulos: TituloPerfil[] = datos.titulos;

// Redes sociales
export const redesSociales: RedSocial[] = datos.redes;

// Proyectos ("visible": false en el json lo oculta)
export const proyectos: Proyecto[] = (datos.proyectos as Proyecto[])
  .filter((proyecto) => proyecto.visible !== false);

// Habilidades
export const categoriasHabilidades: CategoriaHabilidades[] =
  datos.habilidades as CategoriaHabilidades[];

// Experiencia laboral
export const experiencias: Experiencia[] = datos.experiencia as Experiencia[];

// Educacion y certificaciones
export const estudios: Estudio[] = datos.educacion as Estudio[];
