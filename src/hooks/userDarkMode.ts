import { useEffect, useState } from "react";

export function useDarkMode(){
  const [isDark, setIsDark] = useState<boolean>(() => {
    // const stored =  localStorage.getItem('theme');
    // if(stored === 'dark') return true;
    // if(stored === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if(isDark){
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }else{
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);


  return { isDark, toggle: () => setIsDark(prev => !prev) };
}