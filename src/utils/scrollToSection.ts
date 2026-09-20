/**
 * Hace scroll suave a la seccion indicada, restando un offset opcional
 * (por ejemplo la altura de un navbar fijo).
 *
 * @param id     Id de la seccion destino
 * @param offset Numero de pixeles a restar de la posicion final
 */
export function scrollToSection(id: string, offset = 0): void {
  const el = document.getElementById(id);
  if (!el) return;

  // Coordenada absoluta del top de la seccion
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
