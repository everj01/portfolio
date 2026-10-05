// Mapa de tecnologia -> icono Iconify + color de marca.
// La clave se normaliza (minusculas, sin espacios ni simbolos), asi que
// "Tailwind CSS", "tailwindcss" y "TailwindCSS" caen en la misma entrada.

export interface TechIcon {
  icon: string;
  color: string;
}

const MAP: Record<string, TechIcon> = {
  // Frontend
  javascript: { icon: "simple-icons:javascript", color: "#F7DF1E" },
  typescript: { icon: "simple-icons:typescript", color: "#3178C6" },
  react: { icon: "simple-icons:react", color: "#61DAFB" },
  reactjs: { icon: "simple-icons:react", color: "#61DAFB" },
  reactnative: { icon: "simple-icons:react", color: "#61DAFB" },
  angular: { icon: "simple-icons:angular", color: "#DD0031" },
  astro: { icon: "simple-icons:astro", color: "#FF5D01" },
  jquery: { icon: "simple-icons:jquery", color: "#0769AD" },
  alpinejs: { icon: "simple-icons:alpinedotjs", color: "#8BC0D0" },
  alphinejs: { icon: "simple-icons:alpinedotjs", color: "#8BC0D0" },
  tailwindcss: { icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  bootstrap: { icon: "simple-icons:bootstrap", color: "#7952B3" },
  bootstrap5: { icon: "simple-icons:bootstrap", color: "#7952B3" },
  html: { icon: "simple-icons:html5", color: "#E34F26" },
  html5: { icon: "simple-icons:html5", color: "#E34F26" },
  htmlycss: { icon: "simple-icons:html5", color: "#E34F26" },
  css: { icon: "simple-icons:css", color: "#1572B6" },
  figma: { icon: "simple-icons:figma", color: "#F24E1E" },
  photoshop: { icon: "simple-icons:adobephotoshop", color: "#31A8FF" },
  illustrator: { icon: "simple-icons:adobeillustrator", color: "#FF9A00" },
  flutter: { icon: "simple-icons:flutter", color: "#02569B" },

  // Backend
  laravel: { icon: "simple-icons:laravel", color: "#FF2D20" },
  codeigniter: { icon: "simple-icons:codeigniter", color: "#EF4223" },
  php: { icon: "simple-icons:php", color: "#777BB4" },
  nodejs: { icon: "simple-icons:nodedotjs", color: "#5FA04E" },
  node: { icon: "simple-icons:nodedotjs", color: "#5FA04E" },
  aspnetcore: { icon: "simple-icons:dotnet", color: "#512BD4" },
  dotnet: { icon: "simple-icons:dotnet", color: "#512BD4" },
  javaweb: { icon: "simple-icons:openjdk", color: "#437291" },
  java: { icon: "simple-icons:openjdk", color: "#437291" },
  springboot: { icon: "simple-icons:springboot", color: "#6DB33F" },

  // Datos
  mysql: { icon: "simple-icons:mysql", color: "#4479A1" },
  sqlserver: { icon: "simple-icons:microsoftsqlserver", color: "#CC2927" },
  postgresql: { icon: "simple-icons:postgresql", color: "#4169E1" },
  mongodb: { icon: "simple-icons:mongodb", color: "#47A248" },
  firebase: { icon: "simple-icons:firebase", color: "#DD2C00" },

  // Herramientas / infra
  git: { icon: "simple-icons:git", color: "#F05032" },
  gitgithubgitlab: { icon: "simple-icons:git", color: "#F05032" },
  github: { icon: "simple-icons:github", color: "#8B949E" },
  gitlab: { icon: "simple-icons:gitlab", color: "#FC6D26" },
  docker: { icon: "simple-icons:docker", color: "#2496ED" },
  postman: { icon: "simple-icons:postman", color: "#FF6C37" },
  nginxapache: { icon: "simple-icons:nginx", color: "#009639" },
  nginx: { icon: "simple-icons:nginx", color: "#009639" },
  apache: { icon: "simple-icons:apache", color: "#D22128" },
  iiswindowsserver: { icon: "simple-icons:windows", color: "#0078D4" },
  android: { icon: "simple-icons:android", color: "#3DDC84" },
  vercel: { icon: "simple-icons:vercel", color: "#888888" },

  // APIs
  apimercadopago: { icon: "simple-icons:mercadopago", color: "#00B1EA" },
  mercadopago: { icon: "simple-icons:mercadopago", color: "#00B1EA" },
};

const normalize = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Devuelve el icono de la tecnologia, o null si no esta mapeada. */
export const getTechIcon = (name: string): TechIcon | null =>
  MAP[normalize(name)] ?? null;
