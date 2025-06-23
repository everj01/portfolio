import { Switch } from '@headlessui/react';
import { useDarkMode } from '../hooks/userDarkMode';

export default function SwitchTheme() {
  const { isDark, toggle } = useDarkMode();
  const handleChange = () => {
    toggle();
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
