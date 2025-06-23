import CardProject from '../components/CardProject';

export default function ProjectsMe(){
  return(
    <>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-4xl font-bold mt-20 mb-16'>Proyectos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 xl:gap-4 w-[87%]">
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
        </div>
      </div>
      
    </>
  );
}
