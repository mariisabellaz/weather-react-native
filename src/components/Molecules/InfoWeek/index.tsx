import React, { memo } from 'react';

import Text from '@components/Atoms/Text';
import * as S from './styles';

import { formatDayOfWeek, fix2Digits } from '@utils/format';
import { IWeatherDailyList } from '@interfaces/weather';

type InfoWeekProps = {
    item: IWeatherDailyList;
};

function InfoWeek({ item }: InfoWeekProps) {
    return (
        <S.Container>
            <Text
                label={formatDayOfWeek(item?.dt)}
                sizing="MEDIUM"
                font="NUNITO_MEDIUM"
            />
            <S.Thumbnail
                source={{
                    uri: `http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`,
                }}
                resizeMode={'contain'}
            />
            <S.Wrapper>
                <S.Margin>
                    <S.Wrapper>
                        <Text
                            label={fix2Digits(item?.temp?.max).toString()}
                            sizing="MEDIUM"
                            font="ALEGREYA_SANS_BOLD"
                        />
                        <Text
                            label="°C"
                            sizing="MINOR"
                            font="ALEGREYA_SANS_BOLD"
                        />
                    </S.Wrapper>
                </S.Margin>
                <S.Wrapper>
                    <Text
                        label={fix2Digits(item?.temp?.min).toString()}
                        sizing="MEDIUM"
                        color="SECONDARY_TEXT"
                        font="ALEGREYA_SANS"
                    />
                    <Text
                        label="°C"
                        sizing="MINOR"
                        color="SECONDARY_TEXT"
                        font="ALEGREYA_SANS"
                    />
                </S.Wrapper>
            </S.Wrapper>
        </S.Container>
    );
}

export default memo(InfoWeek);
