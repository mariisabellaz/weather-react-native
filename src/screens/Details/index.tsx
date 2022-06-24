import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Text from '@components/Atoms/Text';
import BackButton from '@components/Molecules/Button/BackButton';
import WeatherDetails from '@components/Organisms/WeatherDetails';
import WeekDetails from '@components/Organisms/WeekDetails';
import HeaderDetails from '@components/Organisms/HeaderDetails';
import * as S from './styles';

import { IWeather } from '@interfaces/weather';

type Params = {
    weather: IWeather;
};

export function Details() {
    const { t } = useTranslation();
    const route = useRoute();

    const { weather } = route?.params as Params;

    return (
        <S.Container>
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <S.Content>
                <BackButton />
                <HeaderDetails
                    timezone={weather?.timezone}
                    temp={weather.current.temp}
                />
                <WeatherDetails current={weather?.current} />

                <Text
                    label={t('MORE_INFORMATION')}
                    font="NUNITO_BOLD"
                    sizing="LARGE"
                />

                <WeekDetails daily={weather?.daily} />
            </S.Content>
        </S.Container>
    );
}
