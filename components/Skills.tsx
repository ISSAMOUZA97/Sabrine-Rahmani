
import React from 'react';
import type { Skill } from '../types';
import { SKILLS_COMMERCIALES, SKILLS_TECHNIQUES, SKILLS_LANGUES } from '../constants';

const SkillCategory: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
    <div>
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">{title}</h3>
        <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center bg-white/5 p-4 rounded-lg w-32 h-32 text-center transform transition-all duration-300 hover:bg-emerald-500/20 hover:-translate-y-2">
                    <div className="text-emerald-400 mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-stone-200">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 md:py-32 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Compétences</h2>
                    <p className="mt-4 text-stone-300">Ma boîte à outils pour la réussite de vos projets.</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-16">
                    <SkillCategory title="Commerciales & Marketing" skills={SKILLS_COMMERCIALES} />
                    <SkillCategory title="Techniques & Outils" skills={SKILLS_TECHNIQUES} />
                    <SkillCategory title="Langues" skills={SKILLS_LANGUES} />
                </div>
            </div>
        </section>
    );
};
