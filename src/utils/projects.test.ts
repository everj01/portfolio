import { describe, expect, it } from "vitest";
import { hasLiveDemo, hasPublicRepo, normalizeImages } from "./projects";

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
