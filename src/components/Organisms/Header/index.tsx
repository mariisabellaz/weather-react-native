import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Text from '@components/Atoms/Text';
import CircleButton from '@components/Molecules/Button/CircleButton';
import * as S from './styles';

import { COLOR_TYPE } from '@src/theme/colors';

type HeaderProps = {
    name?: string;
    title?: string;
    isModal?: boolean;
    icon?: string;
    background?: keyof COLOR_TYPE;
};

function Header({
    name,
    isModal = false,
    title,
    icon = 'global',
    background = 'BACKGROUND_TRANSPARENT',
}: HeaderProps) {
    const { t } = useTranslation();
    const { navigate, goBack } = useNavigation();

    const onChangeLanguage = () => {
        navigate('changeLanguage');
    };

    return (
        <S.Container>
            <S.Row>
                {isModal ? (
                    <S.Wrapper>
                        <Text
                            label={title || ''}
                            font="NUNITO_MEDIUM"
                            sizing="LARGE"
                        />
                    </S.Wrapper>
                ) : (
                    <S.Wrapper>
                        <Text
                            label={t('GREETINGS') + ' ' + name + ','}
                            font="NUNITO_MEDIUM"
                            sizing="LARGE"
                            color="LIGHT_TEXT"
                        />
                        <Text
                            label={t('DISCOVER_WEATHER')}
                            font="NUNITO_MEDIUM"
                            sizing="LARGE"
                            color="LIGHT_TEXT"
                        />
                    </S.Wrapper>
                )}
                <CircleButton
                    icon={icon}
                    background={background}
                    onPress={isModal ? goBack : onChangeLanguage}
                />
            </S.Row>
        </S.Container>
    );
}

export default memo(Header);
