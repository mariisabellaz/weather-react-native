import { useLayoutEffect, useState } from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LOCATION_KEY } from '@constants/storage-keys';

export type LocationObject = {
    coords: LocationObjectCoords;
    timestamp: number;
};

export type LocationObjectCoords = {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
};

export const useLocation = () => {
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    useLayoutEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError(true);
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            try {
                await AsyncStorage.setItem(
                    LOCATION_KEY,
                    JSON.stringify(location),
                );
                setSucess(true);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return {
        sucess,
        error,
    };
};
