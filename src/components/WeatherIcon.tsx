import React from 'react';
import { Sun, Cloud, CloudFog, CloudRain, CloudSnow, CloudDrizzle, CloudLightning, Thermometer } from 'lucide-react';

interface WeatherIconProps {
    code: number;
    className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ code, className = "w-10 h-10" }) => {
    const iconProps = { className: className, strokeWidth: 1.5 };

    if (code === 0) return <Sun {...iconProps} className={`${iconProps.className} text-yellow-400`} />;
    if (code <= 3) return <Cloud {...iconProps} className={`${iconProps.className} text-blue-300`} />;
    if (code <= 48) return <CloudFog {...iconProps} className={`${iconProps.className} text-gray-400`} />;
    if (code <= 55) return <CloudDrizzle {...iconProps} className={`${iconProps.className} text-blue-400`} />;
    if (code <= 65) return <CloudRain {...iconProps} className={`${iconProps.className} text-blue-500`} />;
    if (code <= 75) return <CloudSnow {...iconProps} className={`${iconProps.className} text-blue-100`} />;
    if (code <= 82) return <CloudRain {...iconProps} className={`${iconProps.className} text-indigo-400`} />;
    if (code <= 99) return <CloudLightning {...iconProps} className={`${iconProps.className} text-purple-400`} />;

    return <Thermometer {...iconProps} className={`${iconProps.className} text-gray-500`} />;
};
