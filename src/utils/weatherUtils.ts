export const getWeatherDescription = (code: number): string => {
    const descriptions: { [key: number]: string } = {
        0: 'Cielo despejado',
        1: 'Principalmente despejado',
        2: 'Parcialmente nublado',
        3: 'Cubierto',
        45: 'Niebla',
        48: 'Niebla con escarcha',
        51: 'Llovizna ligera',
        53: 'Llovizna moderada',
        55: 'Llovizna densa',
        56: 'Llovizna helada ligera',
        57: 'Llovizna helada densa',
        61: 'Lluvia débil',
        63: 'Lluvia moderada',
        65: 'Lluvia fuerte',
        66: 'Lluvia helada ligera',
        67: 'Lluvia helada fuerte',
        71: 'Nieve débil',
        73: 'Nieve moderada',
        75: 'Nieve fuerte',
        77: 'Granizo de nieve',
        80: 'Lluvia intermitente débil',
        81: 'Lluvia intermitente moderada',
        82: 'Lluvia intermitente violenta',
        85: 'Nieve intermitente débil',
        86: 'Nieve intermitente fuerte',
        95: 'Tormenta eléctrica',
        96: 'Tormenta con granizo ligero',
        99: 'Tormenta con granizo fuerte',
    };

    return descriptions[code] || 'Desconocido';
};
