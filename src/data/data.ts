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
    {  title : "Sumak",
    description : "Plataforma colaborativa para compartir y descubrir lugares secretos en un mapa interactivo.",
    image : ["https://i.ibb.co/ymBSSMzY/image.png", "https://i.ibb.co/ymBSSMzY/image.png", "https://i.ibb.co/ymBSSMzY/image.png"],
    tech : ["Laravel","React", "TailwindCSS", "MySql"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : false,
  },
  {  title : "Monitor",
    description : "Aplicacion Web para la gestión de auditoría y administración de trámites marítimos.",
    image : ["https://i.ibb.co/TB1tDhsy/image.png", "https://i.ibb.co/q3r9b5mp/Screenshot-1.jpg"],
    tech : ["Codeigniter", "Javascript", "Jquery", "Bootstrap 5", "SQL Server"],
    githubUrl : '',
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : true,
  },
  
  {  title : "Control Web",
    description : "Sistema de Seguridad Digitalizada para clientes de empresas marítimas de Solmar Security.",
    image : ["https://i.ibb.co/67YtvhFT/image.png", "https://i.ibb.co/N2mhtkV3/1.png", "https://i.ibb.co/zWpPyMWh/2.png"],
    tech : ["Codeigniter", "Javascript", "Jquery", "Bootstrap 5", "SQL Server", "AlphineJS", "Tailwind CSS"],
    githubUrl : "",
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : true,
  },
  {  title : "Tekonecta",
    description : "Plataforma web que centraliza diversos enlaces digitales en una única tarjeta de presentación interactiva.",
    image : ["https://i.ibb.co/wZZ62ZsB/image.jpg"],
    tech : ["Codeigniter", "Javascript", "Jquery", "Bootstrap 5", "SQL Server", "MySql"],
    githubUrl : "",
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : true,
  },
  { title : "Pasarela de pagos",
    description : "Propuesta de una pasarela de pagos con la API Mercado Pago para la plataforma de ICMA.",
    image : ["https://i.ibb.co/4C4364Z/image.png"],
    tech : ["Codeigniter","Javascript", "Jquery", "Bootstrap 5", "API - Mercado Pago"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : true,
  },
  
  {  title : "Certificados AV",
    description : "Aplicacion Web para la generacion completa de certificados del personal Solmar Securirity.",
    image : ["https://i.ibb.co/Swzg3dXd/image.png"],
    tech : ["Codeigniter", "Javascript", "Jquery", "Bootstrap 5", "SQL Server", "MySql"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : true,
  },
  
  {  title : "Reclutamiento",
    description : "Propuesta para la creación de una solución web que centralice y optimice el proceso de recepción y gestión de postulaciones.",
    image : ["https://i.ibb.co/KxttvJ7H/image.png"],
    tech : ["Codeigniter","Javascript", "Jquery", "Bootstrap 5", "SQL Server"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : true,
  },

  {  title : "File Control",
    description : "ERP para la gestión de la información ed Solmar Security",
    image : ["https://i.ibb.co/PZ1qjqVV/image.png"],
    tech : ["Laravel", "Javascript", "Alphine JS", "Tailwind CSS", "SQL Server", "Node JS"],
    githubUrl : "https://github.com/usuario/proyecto",
    liveUrl : "https://proyecto-demo.vercel.app",
    privatePro : true,
  },
  
];

//HABILIDADES
export const skillCategories: SkillsCat[] = [
  {
    title: "Frontend",
    icon:  "fa-solid fa-code",
    color: "bg-blue-500",
    skills: [
      { name: "JavaScript", level: "advanced" },
      { name: "HTML y CSS", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Typescript", level: "advanced" },
      { name: "React JS", level: "advanced" },
      { name: "Angular", level: "advanced" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-solid fa-server",
    color: "bg-green-500",
    skills: [
  
      { name: "Laravel", level: "advanced" },
      { name: "ASP.NET Core", level: "advanced" },
      { name: "Codeigniter", level: "advanced" },
      { name: "Node.js", level: "basic" },
      { name: "Java Web", level: "basic" },
      { name: "Spring Boot", level: "basic" },
    ],
  },
  {
    title: "Herramientas & DevOps",
    icon: "fa-solid fa-sliders",
    color: "bg-gray-600",
    skills: [
      { name: "Git / Github / Gitlab", level: "advanced" },
      { name: "Postman", level: "advanced" },
      { name: "IIS (Windows Server)", level: "advanced" },
      { name: "Nginx / Apache", level: "basic" },
      { name: "Firebase", level: "basic" },
      { name: "Docker", level: "learning" },
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
      { name: "MongoDB", level: "learning" },
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
  {
    title: "Mobile Apps",
    icon: "fa-solid fa-mobile-screen-button",
    color: "bg-orange-500",
    skills: [
      { name: "React Native", level: "basic" },
      { name: "Flutter", level: "learning" },
    ],
  },
];



