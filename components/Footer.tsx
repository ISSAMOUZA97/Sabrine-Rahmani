
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black/20 text-center py-6 px-4">
            <p className="text-stone-400 text-sm">
                &copy; {new Date().getFullYear()} Sabrine Rahmani. Tous droits réservés.
            </p>
             <p className="text-stone-500 text-xs mt-1">
                Portfolio conçu avec passion.
            </p>
        </footer>
    );
};
