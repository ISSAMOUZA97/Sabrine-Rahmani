import React from 'react';

// Fix: Use React.ReactElement instead of JSX.Element to avoid namespace error.
const QualiteCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
            {icon}
        </div>
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <p className="text-stone-300 mt-1">{description}</p>
    </div>
);


export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">À Propos de Moi</h2>
                    <p className="mt-4 text-stone-300 max-w-2xl mx-auto">Une fusion de compétences commerciales et d'une passion pour le secteur agricole, prête à relever de nouveaux défis.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <QualiteCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        title="Esprit d'Équipe"
                        description="Capacité prouvée à collaborer efficacement pour atteindre des objectifs communs."
                    />
                    <QualiteCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                        title="Organisation"
                        description="Gestion rigoureuse du temps et des priorités pour une productivité maximale."
                    />
                     <QualiteCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="Responsabilité"
                        description="Engagée, ponctuelle et respectueuse, je prends mes responsabilités avec sérieux."
                    />
                </div>
            </div>
        </section>
    );
};
