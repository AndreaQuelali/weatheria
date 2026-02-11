import React from 'react';
import type { DailyForecast } from '../../types/forecast';
import { WeatherIcon } from '../WeatherIcon';

interface ForecastCardProps {
    forecast: DailyForecast;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
    };

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
            <span className="text-gray-400 text-sm font-medium capitalize">{formatDate(forecast.date)}</span>

            <div className="my-2 transition-transform duration-500 group-hover:scale-110">
                <WeatherIcon code={forecast.weatherCode} />
            </div>

            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-white">{Math.round(forecast.maxTemp)}°</span>
                    <span className="text-gray-500 text-sm font-medium">/ {Math.round(forecast.minTemp)}°</span>
                </div>
            </div>

            <span className="text-[10px] text-gray-400 text-center font-medium uppercase tracking-wider line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {forecast.description}
            </span>
        </div>
    );
};
