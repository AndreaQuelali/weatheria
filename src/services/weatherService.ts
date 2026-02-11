import type { City } from '../types/city';
import type { CurrentWeather } from '../types/weather';
import type { WeeklyForecast } from '../types/forecast';
import { getWeatherDescription } from '../utils/weatherUtils';

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

export const getCityCoordinates = async (cityName: string): Promise<City> => {
    try {
        const response = await fetch(`${GEOCODING_API_URL}?name=${encodeURIComponent(cityName)}&count=1&language=es&format=json`);

        if (!response.ok) {
            throw new Error('Error de red al consultar el servicio de geolocalización');
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('Ciudad no encontrada');
        }

        const result = data.results[0];
        return {
            name: result.name,
            latitude: result.latitude,
            longitude: result.longitude,
        };
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Ocurrió un error inesperado');
    }
};

export const getWeatherData = async (city: City): Promise<{ current: CurrentWeather; forecast: WeeklyForecast }> => {
    try {
        const response = await fetch(
            `${WEATHER_API_URL}?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`
        );

        if (!response.ok) {
            throw new Error('Error de red al consultar el clima');
        }

        const data = await response.json();

        const current: CurrentWeather = {
            cityName: city.name,
            temperature: data.current.temperature_2m,
            windSpeed: data.current.wind_speed_10m,
            windDirection: data.current.wind_direction_10m,
            humidity: data.current.relative_humidity_2m,
            feelsLike: data.current.apparent_temperature,
            weatherCode: data.current.weather_code,
            description: getWeatherDescription(data.current.weather_code),
        };

        const forecast: WeeklyForecast = {
            daily: data.daily.time.map((date: string, index: number) => ({
                date,
                maxTemp: data.daily.temperature_2m_max[index],
                minTemp: data.daily.temperature_2m_min[index],
                weatherCode: data.daily.weather_code[index],
                description: getWeatherDescription(data.daily.weather_code[index]),
            })),
        };

        return { current, forecast };
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Ocurrió un error inesperado al obtener el clima');
    }
};
