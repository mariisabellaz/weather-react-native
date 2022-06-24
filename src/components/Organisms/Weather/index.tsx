import React, { memo } from 'react';

import WeatherInfo from '@components/Molecules/WeatherInfo';
import * as S from './styles';

import { IWeatherCurrent } from '@interfaces/weather';
import { fix2Digits } from '@utils/format';

type WeatherProps = {
    current: IWeatherCurrent;
};

function Weather({ current }: WeatherProps) {
    return (
        <S.Container>
            <WeatherInfo
                value={`${fix2Digits(current?.pressure)} onHg`}
                name="PRECIPITATION"
            />
            <WeatherInfo value={`${current?.humidity} %`} name="HUMIDITY" />
            <WeatherInfo
                value={`${fix2Digits(current?.wind_speed)} mph`}
                name="WIND"
            />
        </S.Container>
    );
}
export default memo(Weather);
