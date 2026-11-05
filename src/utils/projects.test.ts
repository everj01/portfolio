import { describe, expect, it } from "vitest";
import {
  hasLiveDemo,
  hasPublicRepo,
  normalizeImages,
  normalizeRepos,
} from "./projects";

describe("normalizeImages", () => {
  it("acepta strings y objetos { src, caption }", () => {
    expect(normalizeImages(["a.png", { src: "b.png", caption: "B" }])).toEqual([
      { src: "a.png", caption: "" },
      { src: "b.png", caption: "B" },
    ]);
  });

  it("descarta entradas sin src", () => {
    expect(normalizeImages(["", { src: "" }, { src: "c.png" }])).toEqual([
      { src: "c.png", caption: "" },
    ]);
  });

  it("adjunta el asset local cuando la ruta coincide con una captura empaquetada", () => {
    const [image] = normalizeImages(["sisol/01.png"]);
    expect(image.src).toBe("sisol/01.png");
    expect(image.local).toBeDefined();
  });

  it("no adjunta local para urls externas", () => {
    const [image] = normalizeImages(["https://i.ibb.co/x/y.png"]);
    expect(image.local).toBeUndefined();
  });
});

describe("hasPublicRepo", () => {
  it("true solo si no es privado y hay githubUrl", () => {
    expect(hasPublicRepo({ githubUrl: "https://github.com/x", privatePro: false })).toBe(true);
  });

  it("false si es privado aunque haya githubUrl", () => {
    expect(hasPublicRepo({ githubUrl: "https://github.com/x", privatePro: true })).toBe(false);
  });

  it("false si no hay githubUrl", () => {
    expect(hasPublicRepo({ githubUrl: "", privatePro: false })).toBe(false);
  });
});

describe("hasLiveDemo", () => {
  it("true solo si liveUrl no esta vacio", () => {
    expect(hasLiveDemo({ liveUrl: "https://demo.com" })).toBe(true);
    expect(hasLiveDemo({ liveUrl: "" })).toBe(false);
    expect(hasLiveDemo({ liveUrl: "   " })).toBe(false);
    expect(hasLiveDemo({})).toBe(false);
  });
});

describe("normalizeRepos", () => {
  it("usa githubUrl cuando no hay lista de repos", () => {
    expect(normalizeRepos({ githubUrl: "https://github.com/x" })).toEqual([
      { name: "Repositorio", url: "https://github.com/x" },
    ]);
  });

  it("devuelve varios repos y respeta nombre, icono y descripcion", () => {
    const repos = normalizeRepos({
      repos: [
        { name: "Frontend", url: "https://github.com/x/front", description: "React" },
        { name: "Backend", url: "https://github.com/x/back", icon: "simple-icons:laravel" },
      ],
    });

    expect(repos).toHaveLength(2);
    expect(repos[0]).toEqual({
      name: "Frontend",
      url: "https://github.com/x/front",
      description: "React",
    });
    expect(repos[1].icon).toBe("simple-icons:laravel");
  });

  it("repos tiene prioridad sobre githubUrl", () => {
    const repos = normalizeRepos({
      githubUrl: "https://github.com/x/viejo",
      repos: [{ name: "API", url: "https://github.com/x/api" }],
    });

    expect(repos).toEqual([{ name: "API", url: "https://github.com/x/api" }]);
  });

  it("descarta repos sin url y pone un nombre por defecto", () => {
    const repos = normalizeRepos({
      repos: [
        { name: "", url: "   " },
        { name: "  ", url: " https://github.com/x/api " },
      ],
    });

    expect(repos).toEqual([{ name: "Repositorio 2", url: "https://github.com/x/api" }]);
  });

  it("no expone nada si el proyecto es privado", () => {
    expect(
      normalizeRepos({
        privatePro: true,
        repos: [{ name: "Frontend", url: "https://github.com/x/front" }],
      })
    ).toEqual([]);
  });
});

describe("hasPublicRepo con varios repos", () => {
  it("true si hay al menos un repo en la lista", () => {
    expect(
      hasPublicRepo({ repos: [{ name: "Frontend", url: "https://github.com/x" }] })
    ).toBe(true);
  });

  it("false si la lista viene vacia y no hay githubUrl", () => {
    expect(hasPublicRepo({ repos: [] })).toBe(false);
  });
});
