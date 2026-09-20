# Portfolio — Astro

Version en Astro del portafolio. **Cero React, cero framework en el cliente**:
todo es HTML estatico + pequenos scripts vanilla. Ya no se carga ninguna
libreria JS de terceros en el navegador (la galeria del modal es propia).

## Comandos

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # astro check + build -> dist/
npm run preview  # sirve dist/
```

## Editar contenido

Todo vive en **`src/data/data.json`**: `navbar`, `titles`, `social`,
`projects`, `skills`. No hace falta tocar ningun componente.

- Para ocultar un proyecto sin borrarlo: `"visible": false`.
- `level` de cada skill solo acepta `advanced`, `basic`, `learning` o `""`.
  `advanced` no muestra etiqueta.
- `npm run build` valida el JSON y los tipos; si algo esta mal, falla ahi.

### Campos de un proyecto

El proyecto `Sumak` del JSON esta como plantilla (`"visible": false`) con todos
los campos rellenos.

| Campo | Para que sirve |
| --- | --- |
| `title` | Nombre del proyecto. |
| `description` | Resumen corto: es lo que se lee en la tarjeta (2 lineas). |
| `overview` | Texto largo del detalle. Si esta vacio se usa `description`. |
| `highlights` | Lista de puntos clave que se muestran en el detalle. |
| `role` / `year` | Linea pequena sobre el titulo, ej. `Full Stack · 2024`. |
| `image` | Capturas. Acepta `"url"` o `{ "src": "url", "caption": "texto" }`. |
| `tech` | Etiquetas de tecnologias (con icono automatico, ver abajo). |
| `githubUrl` | Repo publico. Vacio = sin repositorio. |
| `liveUrl` | Demo en linea. Vacio = no se muestra el boton. |
| `privatePro` | `true` marca el codigo como privado aunque haya `githubUrl`. |

**Disponibilidad del codigo:** la tarjeta y el detalle muestran
`Código público` (verde, con enlace) solo si `privatePro` es `false` **y**
`githubUrl` no esta vacio. En cualquier otro caso muestran `Código privado`.

## Iconos

Se usa [`astro-icon`](https://www.astroicon.dev/) con las colecciones
**lucide** (interfaz) y **simple-icons** (marcas y tecnologias). Los iconos se
incrustan como SVG en el build: no hay CDN, no hay kit de FontAwesome y no hay
iconos que "no cargan".

- En el JSON se escribe el nombre Iconify completo: `"lucide:folder-open"`,
  `"simple-icons:github"`. Catalogo: <https://icon-sets.iconify.design/>.
- Las etiquetas de `tech` sacan su icono y color de marca de
  **`src/utils/techIcons.ts`**. Si agregas una tecnologia nueva que no este
  mapeada, se dibuja un punto gris; para darle icono, agrega una entrada ahi.

## Color de acento

El acento (indigo) sale de una variable CSS en `src/styles/global.css`
(`--accent`, con un valor distinto en `.dark`) y esta expuesto en Tailwind como
`accent` (`text-accent`, `border-accent/50`, ...). Cambiando esos dos valores
RGB cambia todo el sitio.

## Estructura

```
src/
  data/data.json      <- LA INFO EDITABLE
  data/data.ts        wrapper tipado (no tocar)
  types/index.ts      interfaces
  layouts/Layout.astro    <head>, fuentes, script anti-parpadeo del tema
  components/
    Navbar.astro          menu movil + sombra al scroll
    SwitchTheme.astro     toggle claro/oscuro
    TitlePerfil.astro     titulos rotando
    AboutMe.astro
    ProjectsMe.astro      cabecera + grid de proyectos
    CardProject.astro     tarjeta (portada, estado del repo, stack)
    ModalProject.astro    modal + logica de galeria + vista ampliada
    ProjectDetail.astro   contenido del modal (galeria + ficha)
    ProjectGallery.astro  galeria: escenario, flechas, miniaturas, pie
    TechChip.astro        etiqueta de tecnologia con icono
    SkillsMe.astro
    ContactMe.astro
    ItemSocial.astro
  utils/
    projects.ts         normaliza imagenes y calcula repo/demo disponible
    techIcons.ts        tecnologia -> icono + color de marca
    scrollToSection.ts
  pages/index.astro
```

## Despliegue

`astro.config.mjs` tiene `base: '/portfolio/'` (igual que el `vite.config.ts`
original, para GitHub Pages en un subdirectorio). **Si lo publicas en la raiz de
un dominio, borra esa linea.**
