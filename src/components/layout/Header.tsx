import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="py-8 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
                <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-sm animate-in fade-in zoom-in duration-1000">
                    Weatheria
                </h1>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300">
                    Pronóstico Global en Tiempo Real
                </p>
            </div>
        </header>
    );
};
