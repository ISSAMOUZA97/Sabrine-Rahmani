
import React from 'react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-black/10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Entrons en Contact</h2>
                <p className="mt-4 text-stone-300">
                    Ouverte à de nouvelles opportunités dans le domaine agricole et commercial, je suis toujours ravie d’échanger autour de projets innovants et durables.
                </p>
                <div className="mt-10 space-y-6">
                    <div className="flex items-center justify-center gap-4 bg-white/5 p-4 rounded-lg">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <a href="mailto:rhmanisabrin@gmail.com" className="text-lg text-stone-200 hover:text-emerald-400 transition-colors">rhmanisabrin@gmail.com</a>
                    </div>
                     <div className="flex items-center justify-center gap-4 bg-white/5 p-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <span className="text-lg text-stone-200">07 04 36 43 74</span>
                    </div>
                     <div className="flex items-center justify-center gap-4 bg-white/5 p-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span className="text-lg text-stone-200">Aghbalou, Midelt, Maroc</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
