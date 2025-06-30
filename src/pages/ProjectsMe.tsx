import CardProject from '../components/CardProject';
import { itemsPorject } from '../data/data';

export default function ProjectsMe(){
  return(
    <>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-4xl font-bold mt-20 mb-16'>Proyectos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 xl:gap-9 w-[87%]">
            {itemsPorject.map((item, idx) => (
               <CardProject key={idx}
                 title = {item.title}
                description = {item.description}
                image = {item.image}
                tech={item.tech}
                githubUrl = {item.githubUrl}
                liveUrl = {item.liveUrl}
                privatePro = {item.privatePro}
               />
            ))}
        </div>
      </div>
      
    </>
  );
}
