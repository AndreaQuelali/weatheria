import React from 'react';
import { Wind } from 'lucide-react';
import type { CurrentWeather } from '../types/weather';

interface CurrentWeatherCardProps {
    weather: CurrentWeather;
}

export const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ weather }) => {
    return (
        <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/10 hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                        <h2 className="text-4xl font-bold text-white">{weather.cityName}</h2>
                    </div>
                    <p className="text-blue-400 font-medium text-lg uppercase tracking-wide">{weather.description}</p>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-baseline gap-1">
                        <span className="text-7xl font-black text-white slashed-zero">
                            {Math.round(weather.temperature)}
                        </span>
                        <span className="text-3xl font-bold text-blue-400">°C</span>
                    </div>


                    <div className="h-16 w-1 bg-white/10 rounded-full" />

                    <div className="flex items-center gap-3 group">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                            <Wind className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Viento</span>
                            <span className="text-lg font-bold text-white leading-none">{weather.windSpeed} <span className="text-xs font-normal text-gray-500">km/h</span></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
