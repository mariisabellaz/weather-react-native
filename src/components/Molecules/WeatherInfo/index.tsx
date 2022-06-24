import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import Text from '@components/Atoms/Text';
import Icon from '@components/Atoms/Icon';
import * as S from './styles';

import { getIcon } from '@utils/getIcon';
import { COLOR_TYPE } from '@theme/colors';

type WeatherInfoProps = {
    value: string;
    name: string;
    color?: keyof COLOR_TYPE;
    direction?: 'column' | 'row';
};

function WeatherInfo({
    value,
    name,
    color = 'LIGHT_TEXT',
    direction = 'column',
}: WeatherInfoProps) {
    const { t } = useTranslation();
    const { COLORS } = useTheme();

    return (
        <S.Container>
            {direction === 'column' ? (
                <S.ColumnWrapper>
                    <Icon
                        icon={getIcon(name.toLowerCase())}
                        fill={COLORS[color]}
                    />
                    <Text
                        label={t(name)}
                        textAlign="center"
                        color="LIGHT_TEXT"
                        font="ALEGREYA_SANS"
                        sizing="MEDIUM"
                    />
                    <Text
                        label={value}
                        sizing="MEDIUM"
                        textAlign="center"
                        color="LIGHT_TEXT"
                        font="ALEGREYA_SANS"
                    />
                </S.ColumnWrapper>
            ) : (
                <S.RowWrapper>
                    <Icon
                        icon={getIcon(name.toLowerCase())}
                        fill={COLORS[color]}
                    />
                    <Text
                        label={value}
                        sizing="MEDIUM"
                        textAlign="center"
                        font="ALEGREYA_SANS"
                        color={color}
                    />
                </S.RowWrapper>
            )}
        </S.Container>
    );
}

export default memo(WeatherInfo);
