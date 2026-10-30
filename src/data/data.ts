// Toda la informacion editable del portafolio vive en data.json.
// Este archivo solo la tipa y la reparte; no deberia hacer falta tocarlo.
import type {
  EducationItem,
  ExperienceItem,
  ItemsNavbar,
  ProjectCardProps,
  SkillsCat,
  SocialItem,
  TitleDev,
} from "../types";
import data from "./data.json";

// CV descargable (link de Google Drive)
export const cvUrl: string = data.cvUrl;

// NAVBAR
export const itemsNav: ItemsNavbar[] = data.navbar;

// TITULOS DE PERFIL
export const titles: TitleDev[] = data.titles;

// REDES SOCIALES
export const itemsSocial: SocialItem[] = data.social;

// PROYECTOS ("visible": false en el json lo oculta sin borrarlo)
export const itemsPorject: ProjectCardProps[] = (data.projects as ProjectCardProps[])
  .filter((project) => project.visible !== false);

// HABILIDADES
export const skillCategories: SkillsCat[] = data.skills as SkillsCat[];

// EXPERIENCIA LABORAL
export const experienceItems: ExperienceItem[] = data.experience as ExperienceItem[];

// EDUCACION Y CERTIFICACIONES
export const educationItems: EducationItem[] = data.education as EducationItem[];
