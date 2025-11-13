
import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCES } from '../constants';
import type { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem; isVisible: boolean }> = ({ item, isVisible }) => {
    return (
        <div className={`mb-8 flex items-center w-full timeline-item ${isVisible ? 'visible' : ''} md:justify-between`}>
            {/* Desktop spacer */}
            <div className="order-1 w-5/12 hidden md:block"></div>

            {/* Dot */}
            <div className="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-8 h-8 rounded-full absolute left-4 -translate-x-1/2 md:static md:translate-x-0">
                <h1 className="mx-auto font-semibold text-lg text-white"></h1>
            </div>
            
            {/* Card Content */}
            <div className="order-1 bg-white/5 rounded-lg shadow-xl w-full ml-8 md:ml-0 md:w-5/12 px-6 py-4 backdrop-blur-sm transform transition-transform duration-500 hover:scale-105 group">
                <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow min-w-0">
                        <h3 className="font-bold text-emerald-400 text-xl">{item.role}</h3>
                        <p className="text-sm font-semibold text-white">{item.company} <span className="text-stone-400 font-normal">| {item.location}</span></p>
                        <p className="text-sm text-stone-400">{item.period}</p>
                    </div>
                    <div className="text-emerald-400 transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-6 flex-shrink-0">
                        {item.company_logo}
                    </div>
                </div>
                <ul className="mt-3 list-disc list-inside text-stone-300 text-sm space-y-1">
                    {item.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(EXPERIENCES.length).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                        setVisibleItems(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = true;
                            return newVisible;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('.timeline-item-wrapper');
        items?.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="py-20 md:py-32 px-4 md:px-8" ref={sectionRef}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Expériences Professionnelles</h2>
                    <p className="mt-4 text-stone-300">Mon parcours sur le terrain, alliant technique agricole et stratégie commerciale.</p>
                </div>
                <div className="relative wrap overflow-hidden p-4 md:p-10 timeline">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="timeline-item-wrapper" data-index={index}>
                           <ExperienceCard item={exp} isVisible={visibleItems[index]} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};