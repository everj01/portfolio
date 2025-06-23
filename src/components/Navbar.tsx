import { useEffect, useState } from 'react';
import SwitchTheme from './SwitchTheme';
import { itemsNav as itemsNavbar } from '../data/data';
import { scrollToSection } from '../utils/scroolToSection';

export default function Navbar() {
  const [shadowNavbar, setShadowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShadowNavbar(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 flex justify-center pt-2">
      <nav
        className={`
          w-[90%] sm:w-max
          flex items-center justify-between
          px-3 py-2
          backdrop-blur-sm 
          dark:bg-black/80
          bg-white/85
          dark:text-slate-50
          text-black/80
          rounded-2xl
          transition-shadow duration-200 ease-in-out
          ${shadowNavbar ? 'shadow-xl' : ''}
        `}
      >
        <button
          className="sm:hidden "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className="bx bx-menu text-2xl"></i>
        </button>

        <ul
          className={`
            overflow-hidden
            font-semibold
            text-base 
            
            transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-60' : 'max-h-0'}
            sm:max-h-full sm:flex
            flex-col sm:flex-row
            justify-center gap-1 py-1 lg:py-0
          `}
        >
          {itemsNavbar.map((item, idx) => (
            <li
              key={idx}
              className="
                flex items-center gap-2 cursor-pointer
                px-4 py-2 rounded-lg  
                dark:hover:bg-slate-900
                hover:bg-slate-100 transition-colors duration-150
              "
              onClick={() => scrollToSection(item.section || '')}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </li>
          ))}
            <li className="
              flex items-center px-4 py-2 
            ">
              <SwitchTheme></SwitchTheme>
            </li>
            
        </ul>
      </nav>
    </header>
  );
}
