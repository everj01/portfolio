// Toda la informacion editable del portafolio vive en data.json.
// Este archivo solo la tipa y la reparte; no deberia hacer falta tocarlo.
import type {
  ItemsNavbar,
  ProjectCardProps,
  SkillsCat,
  SocialItem,
  TitleDev,
} from "../types";
import data from "./data.json";

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
