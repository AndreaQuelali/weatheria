import React from 'react';
import { Droplet, Thermometer, Navigation } from 'lucide-react';
import type { CurrentWeather } from '../../types/weather';
import { WeatherIcon } from '../WeatherIcon';
import { getWindDirection } from '../../utils/windUtils';

interface CurrentWeatherCardProps {
    weather: CurrentWeather;
}

export const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ weather }) => {
    const direction = getWindDirection(weather.windDirection);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/10 hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-4 mb-2">
                        <WeatherIcon code={weather.weatherCode} className="w-16 h-16" />
                        <div>
                            <h2 className="text-4xl font-bold text-white">{weather.cityName}</h2>
                            <p className="text-blue-400 font-medium text-lg uppercase tracking-wide">{weather.description}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-baseline gap-1">
                        <span className="text-7xl font-black text-white slashed-zero">
                            {Math.round(weather.temperature)}
                        </span>
                        <span className="text-3xl font-bold text-blue-400">°C</span>
                    </div>


                    <div className="h-24 w-1 bg-white/10 rounded-full" />

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors relative overflow-hidden">
                                <Navigation
                                    className="h-5 w-5 transition-transform duration-700 ease-out"
                                    style={{ transform: `rotate(${weather.windDirection + 180}deg)` }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Viento ({direction})</span>
                                <span className="text-lg font-bold text-white leading-none">{weather.windSpeed} <span className="text-xs font-normal text-gray-500">km/h</span></span>
                            </div>

                        </div>
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                <Thermometer className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Sensación</span>
                                <span className="text-lg font-bold text-white leading-none">{Math.round(weather.feelsLike)} <span className="text-xs font-normal text-gray-500">°C</span></span>
                            </div>

                        </div>
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                <Droplet className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Humedad</span>
                                <span className="text-lg font-bold text-white leading-none">{weather.humidity} <span className="text-xs font-normal text-gray-500">%</span></span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
