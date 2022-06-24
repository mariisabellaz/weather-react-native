import React, { memo } from 'react';

import WeatherInfo from '@components/Molecules/WeatherInfo';
import Tag from '@components/Atoms/Tag';
import * as S from './styles';

import { IWeatherCurrent } from '@interfaces/weather';
import { fix2Digits } from '@utils/format';

type WeatherDetailsProps = {
    current: IWeatherCurrent;
};

function WeatherDetails({ current }: WeatherDetailsProps) {
    return (
        <S.Container>
            <Tag
                width={104}
                height={34}
                border="LARGE"
                background="WEATHER_PRECIPITATION"
                enabled={false}
            >
                <WeatherInfo
                    value={`${fix2Digits(current?.pressure)} onHg`}
                    name="PRECIPITATION"
                    direction="row"
                    color="WEATHER_BLUE_TEXT"
                />
            </Tag>
            <Tag
                width={84}
                height={34}
                border="LARGE"
                background="WEATHER_HUMIDITY"
                enabled={false}
            >
                <WeatherInfo
                    value={`${current.humidity} %`}
                    name="HUMIDITY"
                    direction="row"
                    color="WEATHER_PINK_TEXT"
                />
            </Tag>
            <Tag
                width={104}
                height={34}
                border="LARGE"
                background="WEATHER_WIND"
                enabled={false}
            >
                <WeatherInfo
                    value={`${fix2Digits(current.wind_speed)} mph`}
                    name="WIND"
                    direction="row"
                    color="WEATHER_PURPLE_TEXT"
                />
            </Tag>
        </S.Container>
    );
}

export default memo(WeatherDetails);
