import React, {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY } from '@env';

import { useLocation, LocationObject } from '@hooks/useLocation';
import { LOCATION_KEY } from '@constants/storage-keys';
import { IWeather } from '@interfaces/weather';
import api from '@services/api';

type WeatherProviderProps = {
    children: ReactNode;
};

interface IWeatherContextData {
    weather: IWeather;
    onGetWeather(): Promise<void>;
    isLoading: boolean;
}

const WeatherContext = createContext({} as IWeatherContextData);

function WeatherProvider({ children }: WeatherProviderProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState({} as IWeather);
    const [location, setLocation] = useState({} as LocationObject);

    const { sucess } = useLocation();

    async function getStorage() {
        if (sucess) {
            const data = await AsyncStorage.getItem(LOCATION_KEY);
            if (data !== null) {
                const formattedData = JSON.parse(data);
                setLocation(formattedData);
            }
        }
    }

    async function onGetWeather() {
        setIsLoading(true);
        try {
            if (location !== null) {
                api.get(
                    `/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`,
                )
                    .then(response => setWeather(response.data))
                    .catch(err => {
                        console.error('ops! ocorreu um erro' + err);
                    });

                setTimeout(() => setIsLoading(false), 3000);
            }
        } catch (error: any) {
            setIsLoading(false);
            throw new Error(error);
        }
    }

    useEffect(() => {
        getStorage();
    }, [sucess]);

    return (
        <WeatherContext.Provider value={{ weather, onGetWeather, isLoading }}>
            {children}
        </WeatherContext.Provider>
    );
}

function useWeather() {
    const context = useContext(WeatherContext);

    return context;
}

export { WeatherProvider, useWeather };
