import { skillCategories } from "../data/data"

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
      <div className="text-center mb-12 mt-32">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Habilidades Técnicas</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[85%]">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className={`${category.color} p-3 rounded-lg text-white mr-4`}><i className={category.icon}></i></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
            </div>

            <div className="space-y-3">
              {category.skills?.map((skill, skillIndex) => (
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

