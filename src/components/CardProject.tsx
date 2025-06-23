import type ProjectCardProps  from "../interfaces/ProjectCardProps";
export default function CardProject({
  title,
  description,
  image,
  tech = [],
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="p-5 w-full max-w-lg">
      <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 rounded-xl overflow-hidden group hover:shadow-xl dark:hover:shadow-gray-900/40 transition-all duration-300">
        {/* Imagen del proyecto */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1"
          />
        </div>

        {/* Contenido del card */}
        <div className="p-6">
          {/* Título y descripción */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>

          {/* Etiquetas de tecnologías */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botones */}
          <div className="flex gap-3">
            <button
              onClick={() => window.open(githubUrl, "_blank")}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </button>
            <button
              onClick={() => window.open(liveUrl, "_blank")}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}