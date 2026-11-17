import { describe, expect, it } from "vitest";
import {
  normalizarImagenes,
  normalizarRepos,
  tieneDemo,
  tieneRepoPublico,
} from "./proyectos";

describe("normalizarImagenes", () => {
  it("acepta strings y objetos { ruta, descripcion }", () => {
    expect(normalizarImagenes(["a.png", { ruta: "b.png", descripcion: "B" }])).toEqual([
      { ruta: "a.png", descripcion: "" },
      { ruta: "b.png", descripcion: "B" },
    ]);
  });

  it("descarta entradas sin ruta", () => {
    expect(normalizarImagenes(["", { ruta: "" }, { ruta: "c.png" }])).toEqual([
      { ruta: "c.png", descripcion: "" },
    ]);
  });

  it("adjunta el asset local cuando la ruta coincide con una captura empaquetada", () => {
    const [imagen] = normalizarImagenes(["sisol/01.png"]);
    expect(imagen.ruta).toBe("sisol/01.png");
    expect(imagen.local).toBeDefined();
  });

  it("no adjunta local para urls externas", () => {
    const [imagen] = normalizarImagenes(["https://i.ibb.co/x/y.png"]);
    expect(imagen.local).toBeUndefined();
  });
});

describe("tieneRepoPublico", () => {
  it("true solo si no es privado y hay urlGithub", () => {
    expect(tieneRepoPublico({ urlGithub: "https://github.com/x", esPrivado: false })).toBe(true);
  });

  it("false si es privado aunque haya urlGithub", () => {
    expect(tieneRepoPublico({ urlGithub: "https://github.com/x", esPrivado: true })).toBe(false);
  });

  it("false si no hay urlGithub", () => {
    expect(tieneRepoPublico({ urlGithub: "", esPrivado: false })).toBe(false);
  });
});

describe("tieneDemo", () => {
  it("true solo si urlDemo no esta vacio", () => {
    expect(tieneDemo({ urlDemo: "https://demo.com" })).toBe(true);
    expect(tieneDemo({ urlDemo: "" })).toBe(false);
    expect(tieneDemo({ urlDemo: "   " })).toBe(false);
    expect(tieneDemo({})).toBe(false);
  });
});

describe("normalizarRepos", () => {
  it("usa urlGithub cuando no hay lista de repos", () => {
    expect(normalizarRepos({ urlGithub: "https://github.com/x" })).toEqual([
      { nombre: "Repositorio", url: "https://github.com/x" },
    ]);
  });

  it("devuelve varios repos y respeta nombre, icono y descripcion", () => {
    const repos = normalizarRepos({
      repos: [
        { nombre: "Frontend", url: "https://github.com/x/front", descripcion: "React" },
        { nombre: "Backend", url: "https://github.com/x/back", icono: "simple-icons:laravel" },
      ],
    });

    expect(repos).toHaveLength(2);
    expect(repos[0]).toEqual({
      nombre: "Frontend",
      url: "https://github.com/x/front",
      descripcion: "React",
    });
    expect(repos[1].icono).toBe("simple-icons:laravel");
  });

  it("repos tiene prioridad sobre urlGithub", () => {
    const repos = normalizarRepos({
      urlGithub: "https://github.com/x/viejo",
      repos: [{ nombre: "API", url: "https://github.com/x/api" }],
    });

    expect(repos).toEqual([{ nombre: "API", url: "https://github.com/x/api" }]);
  });

  it("descarta repos sin url y pone un nombre por defecto", () => {
    const repos = normalizarRepos({
      repos: [
        { nombre: "", url: "   " },
        { nombre: "  ", url: " https://github.com/x/api " },
      ],
    });

    expect(repos).toEqual([{ nombre: "Repositorio 2", url: "https://github.com/x/api" }]);
  });

  it("no expone nada si el proyecto es privado", () => {
    expect(
      normalizarRepos({
        esPrivado: true,
        repos: [{ nombre: "Frontend", url: "https://github.com/x/front" }],
      })
    ).toEqual([]);
  });
});

describe("tieneRepoPublico con varios repos", () => {
  it("true si hay al menos un repo en la lista", () => {
    expect(
      tieneRepoPublico({ repos: [{ nombre: "Frontend", url: "https://github.com/x" }] })
    ).toBe(true);
  });

  it("false si la lista viene vacia y no hay urlGithub", () => {
    expect(tieneRepoPublico({ repos: [] })).toBe(false);
  });
});
