
import React, { useRef, useEffect } from 'react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const speed = 0.4;
        const offsetY = window.pageYOffset;
        heroRef.current.style.backgroundPositionY = `${offsetY * speed}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-cover bg-center bg-fixed" 
      style={{
        backgroundImage: 'linear-gradient(rgba(26, 46, 33, 0.8), rgba(26, 46, 33, 1)), url(https://picsum.photos/1920/1080?grayscale&blur=2)',
        willChange: 'background-position',
      }}
    >
      <div className="text-center relative z-10">
        <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full animate-pulse"></div>
          <img 
            src="https://i.postimg.cc/NFkRnXp6/600-064746.jpg"
            alt="Sabrine Rahmani" 
            className="relative w-full h-full rounded-full object-cover border-4 border-emerald-500/50 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Sabrine Rahmani
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-emerald-300 font-light">
          Commerciale Agricole | Spécialiste en Management et Vente
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-stone-300">
          Professionnelle en gestion commerciale chez Agrhimo, je m’investis dans le développement de solutions durables et performantes pour le secteur agricole. Passionnée par l’innovation et les relations humaines, je contribue à une agriculture plus responsable et tournée vers l’avenir.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition-transform transform hover:scale-105 duration-300"
          >
            Contactez-moi
          </a>
          <a 
            href="#experience" 
            className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/20 transition-transform transform hover:scale-105 duration-300"
          >
            Mes Expériences
          </a>
        </div>
      </div>
    </section>
  );
};