import '../styles/aboutMe.css';
//import scrollImg from '../assets/images/scroll-down.png';
import ItemSocial from "../components/ItemSocial";
import TitlePerfil from "../components/TitlePerfil";

const itemsSocial: {name: string, icon: string,  url: string}[] = [
  {
    name: 'Facebook',
    icon: 'fa-brands fa-facebook',
    url: 'https://www.facebook.com/em.2801'
  },
  {
    name: 'X',
    icon: 'fa-brands fa-x-twitter',
    url: 'https://x.com/CoddiDv'
  },
  {
    name: 'Instagram',
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/ev28.jm/'
  },
  {
    name: 'Linkedin',
    icon: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/everjm01/'
  },
  {
    name: 'Github',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/EverJM0101'
  }
];

export default function AboutMe(){
  return(
    <>
      <div className='relative h-screen overflow-hidden flex flex-col items-center justify-center'>
        {/* Sección de formas (detrás) */}
        <div className='h-screen w-full max-w-full overflow-x-hidden z-10 absolute blur-xl  opacity-40 box-border p-0 m-0'>
          {/* Forma 1 - circle */}
          <div className="animate-scaleUp w-32 h-32 bg-black/40 dark:bg-white/20 rounded-full absolute" style={{ top: '20%', left: '15%' }}></div>
          {/* Forma 2 - rombo */}
          <div className="animate-moveDiagonal w-32 h-32 bg-black/40 dark:bg-white/20 transform rotate-45 absolute" style={{ top: '70%', left: '25%' }}></div>
          {/* Forma 3 */}
          <div className="animate-moveDiagonal2 w-32 h-32 bg-black/40 dark:bg-white/20 rounded-full absolute" style={{ top: '20%', left: '50%' }}></div>
          {/* Forma 4 */}
          <div className="animate-wiggle w-32 h-32 bg-black/40 dark:bg-white/20 absolute" style={{ top: '60%', left: '10%' }}></div>
          {/* Forma 5 */}
          <div className="animate-wiggle animate-scaleUp w-32 h-32 bg-black/40 dark:bg-white/20 transform rotate-45 absolute" style={{ top: '80%', left: '68%' }}></div>
        </div>

        <div className='flex flex-col h-screen z-20 relative items-center justify-center w-[82%]'>
          {/* Sección de contenido */}
          <div className="flex flex-col lg:flex-row justify-between items-center h-screen animate-slideIn relative">
            <div className="flex flex-col gap-7 px-20">
              <div className="flex flex-col gap-5">
              <div className="relative inline-block">
                  <h1 className="text-5xl font-bold my-5">
                      Ever Jesús Montero Minaya
                      <span className="inline-block w-1 h-11 bg-black dark:bg-white transition-opacity duration-300 ease-in-out ml-2 animate-animateCaret "></span>
                  </h1>
              </div>               
              <TitlePerfil></TitlePerfil>
              </div>
              <div className="flex flex-col gap-6">
                <p className='pe-40'>
                  <b>Hola, soy Ever ✌️</b><br />
                  Desarrollador Frontend apasionado por crear experiencias web modernas y funcionales. Me gusta convertir ideas en interfaces limpias, rápidas y responsivas.
                  También tengo conocimientos en desarrollo móvil con Android, y estoy en constante evolución como desarrollador.
                </p>

                <div className="flex items-center gap-2 mt-5 transition-all duration-75 animate-fadeIn">
                  
                  {
                    itemsSocial.map((item, index) => {
                      return (
                        <ItemSocial key={index} url={item.url} icon={item.icon} name={item.name}></ItemSocial>
                      );
                    })
                  }
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center pe-20'>
              <img src="https://i.ibb.co/FxQfhgD/foto-small.jpg" alt="perfil" className='foto rounded-3xl z-30 shadow-2xl' />
            </div>
          </div>
          
          <div className='flex items-center justify-center pb-3 opacity-40'>
            <i className='bx bx-arrow-big-down animate-bounce text-3xl text-black dark:text-white'></i> 

          </div>
        </div>

        
      </div>
    </>
  );
}