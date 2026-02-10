import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 text-center text-gray-500 text-xs bg-black/20 backdrop-blur-sm border-t border-white/5">
            <div className="max-w-5xl mx-auto px-4 flex flex-col justify-center items-center gap-4">
                <p>© {new Date().getFullYear()} Weatheria. Todos los derechos reservados.</p>
                <p>Powered by Open-Meteo</p>
            </div>
        </footer>
    );
};
