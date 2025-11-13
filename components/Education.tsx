
import React, { useEffect, useRef, useState } from 'react';
import { EDUCATIONS } from '../constants';
import type { EducationItem } from '../types';

const EducationCard: React.FC<{ item: EducationItem; isVisible: boolean }> = ({ item, isVisible }) => {
    return (
        <div className={`mb-8 flex items-center w-full timeline-item ${isVisible ? 'visible' : ''} md:justify-between md:flex-row-reverse`}>
            {/* Desktop spacer */}
            <div className="order-1 w-5/12 hidden md:block"></div>

            {/* Dot */}
            <div className="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-8 h-8 rounded-full absolute left-4 -translate-x-1/2 md:static md:translate-x-0">
                <h1 className="mx-auto text-white font-semibold text-lg"></h1>
            </div>
            
            {/* Card Content */}
            <div className="order-1 bg-white/5 rounded-lg shadow-xl w-full ml-8 md:ml-0 md:w-5/12 px-6 py-4 backdrop-blur-sm transform transition-transform duration-500 hover:scale-105">
                <h3 className="font-bold text-emerald-400 text-xl">{item.degree}</h3>
                <p className="text-sm font-semibold text-white">{item.institution} <span className="text-stone-400 font-normal">| {item.location}</span></p>
                <p className="text-sm text-stone-400">{item.period}</p>
            </div>
        </div>
    );
};

export const Education: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(EDUCATIONS.length).fill(false));

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
        <section id="education" className="py-20 md:py-32 px-4 md:px-8 bg-black/10" ref={sectionRef}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Diplômes et Formations</h2>
                    <p className="mt-4 text-stone-300">Les fondations académiques de mon expertise.</p>
                </div>
                <div className="relative wrap overflow-hidden p-4 md:p-10 timeline">
                    {EDUCATIONS.map((edu, index) => (
                         <div key={index} className="timeline-item-wrapper" data-index={index}>
                           <EducationCard item={edu} isVisible={visibleItems[index]} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};