import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import Card from '@components/Atoms/Card';
import Text from '@components/Atoms/Text';
import Thumbnail from '@components/Atoms/Thumbnail';
import Tags from '@components/Molecules/Tags';
import * as S from './styles';

import { IWeather } from '@interfaces/weather';
import { formatDate, fix2Digits, getDayOrNight } from '@utils/format';
import { getIcon } from '@utils/getIcon';

type CarouselProps = {
    data: IWeather;
};

function CarouselCard({ data }: CarouselProps) {
    const { t } = useTranslation();
    const { navigate } = useNavigation();

    const { timezone, current } = data;
    const time = getDayOrNight();

    const onGoDetails = () => {
        navigate('details', { weather: data });
    };

    return (
        <S.Container>
            <S.ThumbnailWrapper>
                <Thumbnail source={getIcon(time)} width={200} height={200} />
            </S.ThumbnailWrapper>
            <Card height={260} width={65}>
                <S.Wrapper>
                    <Text label={timezone} font="NUNITO_BOLD" sizing="LARGE" />
                    <S.Row>
                        <S.TemperatureWrapper>
                            <Text
                                label={fix2Digits(current?.temp).toString()}
                                font="ALEGREYA_SANS_BOLD"
                                sizing="LARGEST"
                            />
                            <Text
                                label="°C"
                                font="NUNITO_MEDIUM"
                                sizing="SMALLER"
                                color="SECONDARY_TEXT"
                            />
                        </S.TemperatureWrapper>
                        <S.TagWrapper>
                            <S.InfoTag>
                                <Text
                                    label={current?.weather[0].main}
                                    sizing="MINOR"
                                    color="LIGHT_TEXT"
                                    textTransform="capitalize"
                                />
                            </S.InfoTag>
                        </S.TagWrapper>
                    </S.Row>

                    <Text
                        label={formatDate()}
                        font="NUNITO_MEDIUM"
                        sizing="SMALLER"
                        color="SECONDARY_TEXT"
                        textTransform="capitalize"
                    />
                </S.Wrapper>
            </Card>
            <S.ButtonWrapper>
                <Tags
                    label={t('DETAILS')}
                    background="SECONDARY"
                    height={47}
                    width={163}
                    border="MEDIUM"
                    onPress={onGoDetails}
                />
            </S.ButtonWrapper>
        </S.Container>
    );
}

export default memo(CarouselCard);
