import React, { memo } from 'react';
import * as S from './styles';

import { COLOR_TYPE } from '@theme/colors';

type CircleProps = {
    children: React.ReactNode;
    width?: number;
    height?: number;
    background?: keyof COLOR_TYPE;
    border?: boolean;
};

function Circle({ children, height, width, border, background }: CircleProps) {
    return (
        <S.Container
            height={height}
            width={width}
            border={border}
            background={background}
        >
            {children}
        </S.Container>
    );
}

export default memo(Circle);
