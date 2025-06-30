import type ProjectCardProps from "../interfaces/ProjectCardProps";
import CarouselSwiper from "./CarouselSwiper";

type ModalProjectProps = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectCardProps | null;
};

export default function ModalProject({ isOpen, onClose, project }: ModalProjectProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[700px] relative">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
            <div className="w-full max-w-5xl mx-auto overflow-x-visible">
            {project?.image && <CarouselSwiper images={project.image} />}
            </div>
          
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-purple-500 text-white rounded w-full hover:bg-purple-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}