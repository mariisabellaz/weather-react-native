import React, { memo } from 'react';
import uuid from 'react-native-uuid';

import InfoWeek from '@components/Molecules/InfoWeek';
import * as S from './styles';

import { IWeatherDailyList } from '@interfaces/weather';

type WeatherProps = {
    daily: IWeatherDailyList[];
};

function Weather({ daily }: WeatherProps) {
    return (
        <S.Container>
            {daily.map(item => (
                <InfoWeek key={String(uuid)} item={item} />
            ))}
        </S.Container>
    );
}

export default memo(Weather);
