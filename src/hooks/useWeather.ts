import { useState, useEffect } from 'react';
import type { CurrentWeather } from '../types/weather';
import type { WeeklyForecast } from '../types/forecast';
import { getCityCoordinates, getWeatherData } from '../services/weatherService';

const STORAGE_KEY = 'last_city_weatheria';

export const useWeather = () => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
    const [forecast, setForecast] = useState<WeeklyForecast | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const searchCity = async (cityName: string) => {
        if (!cityName) return;

        setLoading(true);
        setError(null);
        try {
            const city = await getCityCoordinates(cityName);
            const { current, forecast } = await getWeatherData(city);
            setCurrentWeather(current);
            setForecast(forecast);
            localStorage.setItem(STORAGE_KEY, city.name);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error inesperado');
            }
            setCurrentWeather(null);
            setForecast(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const savedCity = localStorage.getItem(STORAGE_KEY);
        if (savedCity) {
            searchCity(savedCity);
        }
    }, []);

    return {
        currentWeather,
        forecast,
        loading,
        error,
        searchCity,
    };
};
