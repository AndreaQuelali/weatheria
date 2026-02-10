export interface DailyForecast {
    date: string;
    maxTemp: number;
    minTemp: number;
    weatherCode: number;
    description: string;
}

export interface WeeklyForecast {
    daily: DailyForecast[];
}
