import type ProjectCardProps from "../interfaces/ProjectCardProps";
import type ItemsNavbar from "../interfaces/ItemsNavbar";
import type SkillsCat from "../interfaces/SkillsCat";
import type SocialItem from "../interfaces/SocialItem";
import type TitleDev from "../interfaces/TitleDev";

// NAVBAR
export const itemsNav: ItemsNavbar[] = [
  { name: "¿Quien soy?", icon: "bx bx-user", section: "aboutme" },
  { name: "Proyectos", icon: "bx bx-folder-open", section: "projectsme"},
  { name: "Habilidades", icon: "bx bx-sparkles-alt", section: "skillsme" },
  { name: "Contacto", icon: "bx bx-envelope-open", section: "contactme" },
];

//TITULOS DE PERFIL
export const titles: TitleDev[] = [
  {name: 'Fullstack Developer'},
  {name: 'Apps Developer'},
  {name: 'UI UX Designer'}
]

//REDES SOCIALES
export const itemsSocial: SocialItem[] = [
  {
    name: 'Facebook',
    icon: 'fa-brands fa-facebook',
    url: 'https://www.facebook.com/em.2801',
    style: 'hover:text-[#0866FF] dark:hover:text-[#69a2ff]'
  },
  {
    name: 'X',
    icon: 'fa-brands fa-x-twitter',
    url: 'https://x.com/CoddiDv',
    style: 'hover:text-[#15202B] dark:hover:text-[#8997a4]'
  },
  {
    name: 'Instagram',
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/ev01.m/' ,
    style: 'hover:text-[#C90071] dark:hover:text-[#e47f9b]'
  },
  {
    name: 'Linkedin',
    icon: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/everjm01/',
    style: 'hover:text-[#0A66C2] dark:hover:text-[#67aaed]'
  },
  {
    name: 'Github',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/EverJM0101',
    style: 'hover:text-[#1F2328] dark:hover:text-[#95a0ad]'
  }
];

// PROYECTOS
export const itemsPorject: ProjectCardProps[] = [
  {  title : "E-commerce Dashboard",
    description : "Una aplicación web completa para gestión de inventario y ventas con panel administrativo, autenticación de usuarios y análisis en tiempo real.",
    image : "https://i.ibb.co/9gjSR32/Captura-de-pantalla-2024-11-26-180134.png",
    tech : ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
  },
  {  title : "E-commerce Dashboard",
    description : "Una aplicación web completa para gestión de inventario y ventas con panel administrativo, autenticación de usuarios y análisis en tiempo real.",
    image : "https://i.ibb.co/9gjSR32/Captura-de-pantalla-2024-11-26-180134.png",
    tech : ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
  },
  {  title : "E-commerce Dashboard",
    description : "Una aplicación web completa para gestión de inventario y ventas con panel administrativo, autenticación de usuarios y análisis en tiempo real.",
    image : "https://i.ibb.co/9gjSR32/Captura-de-pantalla-2024-11-26-180134.png",
    tech : ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
  },
  {  title : "E-commerce Dashboard",
    description : "Una aplicación web completa para gestión de inventario y ventas con panel administrativo, autenticación de usuarios y análisis en tiempo real.",
    image : "https://i.ibb.co/9gjSR32/Captura-de-pantalla-2024-11-26-180134.png",
    tech : ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
  },
  {  title : "E-commerce Dashboard",
    description : "Una aplicación web completa para gestión de inventario y ventas con panel administrativo, autenticación de usuarios y análisis en tiempo real.",
    image : "https://i.ibb.co/9gjSR32/Captura-de-pantalla-2024-11-26-180134.png",
    tech : ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
  },
  {  title : "E-commerce Dashboard",
    description : "Una aplicación web completa para gestión de inventario y ventas con panel administrativo, autenticación de usuarios y análisis en tiempo real.",
    image : "https://i.ibb.co/9gjSR32/Captura-de-pantalla-2024-11-26-180134.png",
    tech : ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
  },
];

//HABILIDADES
export const skillCategories: SkillsCat[] = [
  {
    title: "Frontend",
    icon:  "fa-solid fa-code",
    color: "bg-blue-500",
    skills: [
      { name: "React", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "HTML", level: "advanced" },
      { name: "CSS", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Angular", level: "basic" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-solid fa-server",
    color: "bg-green-500",
    skills: [
      { name: "PHP", level: "advanced" },
      { name: "Laravel", level: "advanced" },
      { name: "CodeIgniter", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "Spring Boot", level: "learning" },
    ],
  },
  {
    title: "Base de Datos",
    icon: "fa-solid fa-database",
    color: "bg-purple-500",
    skills: [
      { name: "MySQL", level: "advanced" },
      { name: "SQL Server", level: "advanced" },
      { name: "PostgreSQL", level: "basic" },
    ],
  },
  {
    title: "Mobile Apps",
    icon: "fa-solid fa-mobile-screen-button",
    color: "bg-orange-500",
    skills: [
      { name: "React Native", level: "learning" },
      { name: "Flutter", level: "learning" },
    ],
  },
  {
    title: "Herramientas & DevOps",
    icon: "fa-solid fa-sliders",
    color: "bg-gray-600",
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Firebase", level: "advanced" },
      { name: "IIS", level: "advanced" },
    ],
  },
  {
    title: "Diseño",
    icon: "fa-solid fa-pen-nib",
    color: "bg-pink-500",
    skills: [
      { name: "Figma", level: "advanced" },
      { name: "Photoshop", level: "advanced" },
      { name: "Illustrator", level: "basic" },
    ],
  },
];



