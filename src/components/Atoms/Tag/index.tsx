import React, { memo } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

import { COLOR_TYPE } from '@theme/colors';
import { SIZING_TYPE } from '@theme/sizing';

type TagProps = RectButtonProps & {
    children: React.ReactNode;
    height?: number;
    width?: number;
    background?: keyof COLOR_TYPE;
    border?: keyof SIZING_TYPE;
};

function Tag({
    children,
    height,
    width,
    border,
    background,
    ...rest
}: TagProps) {
    return (
        <S.Container
            height={height}
            width={width}
            background={background}
            border={border}
            {...rest}
        >
            {children}
        </S.Container>
    );
}

export default memo(Tag);
