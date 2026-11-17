// Scroll suave hasta una seccion, descontando un margen (ej: altura del navbar)
export function irASeccion(id: string, margen = 0): void {
  const elemento = document.getElementById(id);
  if (!elemento) return;

  const destino = elemento.getBoundingClientRect().top + window.scrollY - margen;
  window.scrollTo({ top: destino, behavior: "smooth" });
}
