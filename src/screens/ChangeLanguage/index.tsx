import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Header from '@components/Organisms/Header';

import * as S from './styles';

export function ChangeLanguage() {
    const { t } = useTranslation();
    const { goBack } = useNavigation();

    const onCloseModal = () => {
        goBack();
    };

    return (
        <S.Container>
            <S.BackPressable disabled={true} onPress={onCloseModal} />
            <S.Content>
                <Header
                    icon="circle"
                    title={t('LANGUAGE_MODAL_TITLE')}
                    background="TAG_PRIMARY"
                    isModal
                />
            </S.Content>
        </S.Container>
    );
}
