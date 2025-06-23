import { Switch } from '@headlessui/react';
import { useDarkMode } from '../hooks/userDarkMode';
//import { useEffect, useRef } from 'react';
// Asegúrate de tener tu sonido en src/sounds/click.mp3 (o donde prefieras)
//import clickSound from '../assets/sounds/switch.opus';

export default function SwitchTheme() {
  const { isDark, toggle } = useDarkMode();
  // Ref para mantener la misma instancia de Audio
  //const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicializa el audio al montar
  // useEffect(() => {
  //   audioRef.current = new Audio(clickSound);
  //   audioRef.current.volume = 0.5;
  // }, []);

  // Manejador que invierte el tema y suena
  const handleChange = () => {
    toggle(); // primero cambia el tema
    // if (audioRef.current) {
    //   audioRef.current.currentTime = 0;
    //   audioRef.current.play().catch(console.warn);
    // }
  };

  return (
    <Switch
      checked={isDark}
      onChange={handleChange}
      className={`
        relative inline-flex h-6 w-12 items-center rounded-full
        transition-colors duration-200
        ${isDark ? 'bg-gray-800' : 'bg-slate-400'}
      `}
    >
      <span className="sr-only">Toggle Dark Mode</span>

      {/* Iconos fijos */}
      <span className="absolute left-1">
        <i className="bx bx-sun text-white/90 text-sm" />
      </span>
      <span className="absolute right-1">
        <i className="bx bx-moon text-gray-700 text-sm" />
      </span>

      {/* Thumb */}
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white
          transition-transform duration-200
          ${isDark ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </Switch>
  );
}
