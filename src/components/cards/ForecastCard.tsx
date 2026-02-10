import React from 'react';
import { Sun, Cloud, CloudFog, CloudRain, CloudSnow, CloudDrizzle, CloudLightning, Thermometer } from 'lucide-react';
import type { DailyForecast } from '../../types/forecast';

interface ForecastCardProps {
    forecast: DailyForecast;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
    };

    return (
        <div className="flex-1 min-w-[140px] bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
            <span className="text-gray-400 text-sm font-medium capitalize">{formatDate(forecast.date)}</span>

            <div className="my-2 transition-transform duration-500 group-hover:scale-110">
                <ForecastIcon code={forecast.weatherCode} />
            </div>

            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-white">{Math.round(forecast.maxTemp)}°</span>
                    <span className="text-gray-500 text-sm font-medium">/ {Math.round(forecast.minTemp)}°</span>
                </div>
            </div>

            <span className="text-[10px] text-gray-400 text-center font-medium uppercase tracking-wider line-clamp-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {forecast.description}
            </span>
        </div>
    );
};

const ForecastIcon: React.FC<{ code: number }> = ({ code }) => {
    const iconProps = { className: "w-10 h-10", strokeWidth: 1.5 };

    if (code === 0) return <Sun {...iconProps} className={`${iconProps.className} text-yellow-400 animate-pulse`} />;
    if (code <= 3) return <Cloud {...iconProps} className={`${iconProps.className} text-blue-300`} />;
    if (code <= 48) return <CloudFog {...iconProps} className={`${iconProps.className} text-gray-400`} />;
    if (code <= 55) return <CloudDrizzle {...iconProps} className={`${iconProps.className} text-blue-400`} />;
    if (code <= 65) return <CloudRain {...iconProps} className={`${iconProps.className} text-blue-500`} />;
    if (code <= 75) return <CloudSnow {...iconProps} className={`${iconProps.className} text-blue-100`} />;
    if (code <= 82) return <CloudRain {...iconProps} className={`${iconProps.className} text-indigo-400`} />;
    if (code <= 99) return <CloudLightning {...iconProps} className={`${iconProps.className} text-purple-400`} />;

    return <Thermometer {...iconProps} className={`${iconProps.className} text-gray-500`} />;
};
