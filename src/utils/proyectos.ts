import type { ImagenGaleria, ImagenLista, Proyecto, Repo } from "../types";
import { obtenerImagenLocal } from "./imagenesLocales";

// Deja todas las imagenes con la misma forma: { ruta, descripcion }
export function normalizarImagenes(imagenes: ImagenGaleria[] = []): ImagenLista[] {
  const resultado: ImagenLista[] = [];

  for (const elemento of imagenes) {
    const ruta = typeof elemento === "string" ? elemento : elemento?.ruta ?? "";
    if (ruta === "") continue;

    const descripcion = typeof elemento === "string" ? "" : elemento?.descripcion ?? "";
    const local = obtenerImagenLocal(ruta);

    if (local) resultado.push({ ruta, descripcion, local });
    else resultado.push({ ruta, descripcion });
  }

  return resultado;
}

// Repositorios publicos del proyecto
export function normalizarRepos(proyecto: Proyecto): Repo[] {
  if (proyecto.esPrivado) return [];

  const lista: Repo[] = [];

  (proyecto.repos ?? []).forEach((repo, indice) => {
    const url = typeof repo?.url === "string" ? repo.url.trim() : "";
    if (url === "") return;

    lista.push({
      ...repo,
      nombre: repo?.nombre?.trim() || `Repositorio ${indice + 1}`,
      url,
    });
  });

  if (lista.length > 0) return lista;

  const unico = typeof proyecto.urlGithub === "string" ? proyecto.urlGithub.trim() : "";
  if (unico === "") return [];

  return [{ nombre: "Repositorio", url: unico }];
}

// Hay repositorio publico?
export function tieneRepoPublico(proyecto: Proyecto): boolean {
  return normalizarRepos(proyecto).length > 0;
}

// Hay demo en linea?
export function tieneDemo(proyecto: Proyecto): boolean {
  return typeof proyecto.urlDemo === "string" && proyecto.urlDemo.trim() !== "";
}

//Categoria a la que pertenece un proyecto
export function categoriaDe(proyecto: Proyecto): string {
  const rol = proyecto.rol;
  return (rol?.trim() === "" || rol === undefined || rol === null)  ? "Otros" : rol.trim();
}

//Todas las categorais que existen sin repetir
export function categoriaDisponibles(lista: Proyecto[]): string[] {
  const miLista = lista.map((u) => categoriaDe(u));
  const miListaUnico: string[] = [...new Set(miLista)];
  return miListaUnico;
}
