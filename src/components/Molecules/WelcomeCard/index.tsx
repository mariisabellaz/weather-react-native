import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@components/Atoms/Card';
import Text from '@components/Atoms/Text';
import RectButton from '@components/Molecules/Button/RectButton';

import * as S from './styles';

type WelcomeCardProps = {
    onPress: () => void;
    enabled: boolean;
};

function WelcomeCard({ onPress, enabled }: WelcomeCardProps) {
    const { t } = useTranslation();

    return (
        <Card>
            <S.Container>
                <Text
                    label={enabled ? t('TITLE') : t('LOCATION_MODAL_TITLE')}
                    textAlign="center"
                    font="NUNITO_BOLD"
                    sizing="LARGE"
                />
                <Text
                    label={
                        enabled ? t('SUBTITLE') : t('LOCATION_MODAL_SUBTITLE')
                    }
                    textAlign="center"
                    lineHeight={17}
                />
                <RectButton
                    labelbutton={t('GET_STARTED')}
                    onPress={onPress}
                    enabled={enabled}
                />
            </S.Container>
        </Card>
    );
}

export default memo(WelcomeCard);
