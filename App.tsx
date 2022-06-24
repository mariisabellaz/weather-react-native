import 'react-native-gesture-handler';
import React from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
    useFonts,
    Nunito_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
} from '@expo-google-fonts/nunito';
import {
    AlegreyaSans_700Bold,
    AlegreyaSans_500Medium,
} from '@expo-google-fonts/alegreya-sans';

import Theme from '@theme/Theme';
import { Routes } from '@routes/index';
import { WeatherProvider } from '@hooks/useWeather';

LogBox.ignoreAllLogs();

export default function App() {
    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold,
        AlegreyaSans_500Medium,
        AlegreyaSans_700Bold,
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size={30} color="#FFF" />;
    }

    return (
        <Theme>
            <StatusBar
                style="light"
                translucent
                backgroundColor="transparent"
            />
            <WeatherProvider>
                <Routes />
            </WeatherProvider>
        </Theme>
    );
}
