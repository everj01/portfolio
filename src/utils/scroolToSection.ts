// src/utils/scrollToSection.ts
/**
 * Hace scroll suave a la sección indicada, restando un offset opcional
 * (por ejemplo la altura de un navbar fijo).
 *
 * @param id     Id de la sección destino
 * @param offset Número de píxeles a restar de la posición final
 */
export function scrollToSection(id: string, offset = 0): void {
  const el = document.getElementById(id)
  if (!el) return

  // Coordenada absoluta del top de la sección
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset

  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}
