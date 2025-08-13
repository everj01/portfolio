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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[700px] relative flex flex-col items-center justify-center">
        <h3 className="text-3xl text-center font-bold text-gray-900 mb-4 mt-2">{project.title}</h3>
        <div className="w-full">
              <hr />
        </div>
      
        <p className="text-base text-gray-600 my-5 text-center">{project.description}</p>
        <div className="w-full">
              <hr />
        </div>

        <div className="flex flex-wrap gap-2 my-5">
            <div className="w-full max-w-5xl mx-auto overflow-x-visible">
                {project?.image && <CarouselSwiper images={project.image} />}
            </div>
        </div>

        <button
        onClick={onClose}
        className="px-4 py-2 max-w-[290px] bg-gray-500 text-white  rounded w-full hover:bg-dark-600 rounded-xl">
          Volver
        </button>
      </div>
    </div>
  );
}