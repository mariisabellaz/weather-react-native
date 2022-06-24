import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Text from '@components/Atoms/Text';
import RectButton from '@components/Molecules/Button/RectButton';
import Circle from '@components/Atoms/Circle';
import Thumbnail from '@components/Atoms/Thumbnail';

import * as S from './styles';

import icon from '@assets/images/sun_and_cloud.png';

function LocationModal() {
    const { t } = useTranslation();

    return (
        <S.Container>
            <Circle background="PRIMARY">
                <Thumbnail width={100} height={100} source={icon} />
            </Circle>
            <S.Wrapper>
                <Text
                    label={t('LOCATION_TITLE')}
                    font="NUNITO_BOLD"
                    sizing="LARGE"
                    textAlign="center"
                />
                <Text label={t('LOCATION_SUBTITLE')} textAlign="center" />
            </S.Wrapper>
            <RectButton labelbutton={t('ALLOW_LOCATION')} />
        </S.Container>
    );
}

export default memo(LocationModal);
