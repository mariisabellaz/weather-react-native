import React, { memo } from 'react';

import { COLOR_TYPE } from '@theme/colors';
import { FONT_TYPE } from '@theme/fonts';
import { SIZING_TYPE } from '@theme/sizing';

import * as S from './styles';

type DefaultTextProps = {
    color?: keyof COLOR_TYPE;
    font?: keyof FONT_TYPE;
    sizing?: keyof SIZING_TYPE;
    lineHeight?: number;
    textAlign?:
        | 'start'
        | 'end'
        | 'left'
        | 'right'
        | 'center'
        | 'justify'
        | 'match-parent';
    textTransform?: 'uppercase' | 'capitalize';
    label: string;
};

function Text({
    label,
    color,
    font,
    sizing,
    lineHeight,
    textAlign,
    textTransform,
}: DefaultTextProps) {
    return (
        <S.Label
            color={color}
            font={font}
            sizing={sizing}
            lineHeight={lineHeight}
            textAlign={textAlign}
            textTransform={textTransform}
        >
            {label}
        </S.Label>
    );
}

export default memo(Text);
