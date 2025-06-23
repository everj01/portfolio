const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <i className="fa-solid fa-code"></i>
    ),
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
    icon: (
      <i className="fa-solid fa-server"></i>
    ),
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
    icon: (
      <i className="fa-solid fa-database"></i>
    ),
    color: "bg-purple-500",
    skills: [
      { name: "MySQL", level: "advanced" },
      { name: "SQL Server", level: "advanced" },
      { name: "PostgreSQL", level: "basic" },
    ],
  },
  {
    title: "Mobile Apps",
    icon: (
      <i className="fa-solid fa-mobile-screen-button"></i>
    ),
    color: "bg-orange-500",
    skills: [
      { name: "React Native", level: "learning" },
      { name: "Flutter", level: "learning" },
    ],
  },
  {
    title: "Herramientas & DevOps",
    icon: (
      <i className="fa-solid fa-sliders"></i>
    ),
    color: "bg-gray-600",
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Firebase", level: "advanced" },
      { name: "IIS", level: "advanced" },
    ],
  },
  {
    title: "Diseño",
    icon: (
      <i className="fa-solid fa-pen-nib"></i>
    ),
    color: "bg-pink-500",
    skills: [
      { name: "Figma", level: "advanced" },
      { name: "Photoshop", level: "advanced" },
      { name: "Illustrator", level: "basic" },
    ],
  },
];

export default function Skills() {
  
  const getLevelStyle = (level: string) => {
    switch (level) {
      case "advanced":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "basic":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "learning":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getLevelText = (level: string) => {
    switch (level) {
      case "advanced":
        return ""
      case "basic":
        return "Básico"
      case "learning":
        return "Aprendiendo"
      default:
        return ""
    }
  }

  return (
  <>
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mb-12 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Habilidades Técnicas</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tecnologías y herramientas con las que trabajo para crear soluciones digitales completas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[85%]">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className={`${category.color} p-3 rounded-lg text-white mr-4`}>{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  {getLevelText(skill.level) && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelStyle(skill.level)}`}>
                      {getLevelText(skill.level)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  </>
  )
}

