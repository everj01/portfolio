import '../styles/TitlePerfil.css';
import { useEffect, useState } from 'react';
import { titles } from '../data/data';

function TitlePerfil() {
    const [currentTitle, setCurrentTitle] = useState(0); 
    const [isVisible, setIsVisible] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); 
            const timeoutId = setTimeout(() => {
              setCurrentTitle(prev => (prev + 1) % titles.length);
              setIsVisible(true);
            }, 400);
             return () => clearTimeout(timeoutId);
        }, 2600); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="flex justify-start">
            <span className={`text-2xl font-semibold title-perfil-fade ${isVisible ? 'show' : ''}`}>
                {titles[currentTitle].name}
            </span>
        </div>
    );
}

export default TitlePerfil;
