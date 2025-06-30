import { useState } from "react";
import CardProject from "../components/CardProject";
import ModalProject from "../components/ModalProject";
import { itemsPorject } from "../data/data";
import type ProjectCardProps from "../interfaces/ProjectCardProps";

export default function ProjectsMe(){
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);

  const handleViewMore = (project: ProjectCardProps) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-3xl md:text-4xl font-bold mt-20 mb-16'>Proyectos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 xl:gap-9 w-[87%]">
        {itemsPorject.map((item, idx) => (
          <CardProject key={idx} {...item} onViewMore={handleViewMore} />
        ))}
      </div>

      <ModalProject isOpen={modalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
}
