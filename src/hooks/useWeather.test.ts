import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useWeather } from './useWeather';
import * as weatherService from '../services/weatherService';

vi.mock('../services/weatherService', () => ({
    getCityCoordinates: vi.fn(),
    getWeatherData: vi.fn(),
}));

describe('useWeather hook', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('Debe devolver el estado inicial correctamente', () => {
        const { result } = renderHook(() => useWeather());

        expect(result.current.currentWeather).toBeNull();
        expect(result.current.forecast).toBeNull();
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    it('Debe buscar la ciudad exitosamente y actualizar el estado', async () => {
        const mockCity = { name: 'Madrid', latitude: 40.4168, longitude: -3.7038 };
        const mockWeatherData = {
            current: {
                cityName: 'Madrid',
                temperature: 20,
                description: 'Despejado',
                windSpeed: 10,
                weatherCode: 0
            },
            forecast: {
                daily: Array(7).fill({
                    date: '2026-02-10',
                    maxTemp: 22,
                    minTemp: 15,
                    weatherCode: 0,
                    description: 'Despejado'
                })
            }
        };

        vi.mocked(weatherService.getCityCoordinates).mockResolvedValue(mockCity);
        vi.mocked(weatherService.getWeatherData).mockResolvedValue(mockWeatherData);

        const { result } = renderHook(() => useWeather());

        await waitFor(() => {
            result.current.searchCity('Madrid');
        });

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.currentWeather).toEqual(mockWeatherData.current);
        expect(result.current.forecast).toEqual(mockWeatherData.forecast);
        expect(result.current.error).toBeNull();
        expect(localStorage.getItem('last_city_weatheria')).toBe('Madrid');
    });

    it('Debe manejar errores correctamente cuando la ciudad no se encuentra', async () => {
        vi.mocked(weatherService.getCityCoordinates).mockRejectedValue(new Error('Ciudad no encontrada'));

        const { result } = renderHook(() => useWeather());

        await waitFor(() => {
            result.current.searchCity('CiudadInexistente');
        });

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.error).toBe('Ciudad no encontrada');
        expect(result.current.currentWeather).toBeNull();
        expect(result.current.forecast).toBeNull();
    });
});
