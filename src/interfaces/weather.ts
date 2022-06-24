export interface IWeather {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: IWeatherCurrent;
    daily: IWeatherDailyList[];
}

export interface IWeatherCurrent {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: IWeatherList[];
}

export interface IWeatherList {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IWeatherDailyList {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: IWeatherTemp;
    feels_like: IWeatherFeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: IWeatherList[];
    clouds: number;
    pop: number;
    uvi: number;
}

interface IWeatherTemp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

interface IWeatherFeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}
