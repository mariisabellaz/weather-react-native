import styled, { css } from 'styled-components/native';

import { COLOR_TYPE } from '@theme/colors';
import { FONT_TYPE } from '@theme/fonts';
import { SIZING_TYPE } from '@theme/sizing';

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
};

export const Label = styled.Text<DefaultTextProps>`
    ${({
        theme,
        color = 'PRIMARY_TEXT',
        font = 'NUNITO',
        sizing = 'SMALL',
    }) => css`
        color: ${theme.COLORS[color]};
        font-size: ${theme.SIZING[sizing]}px;
        font-family: ${theme.FONTS[font]};
    `}

    ${({ lineHeight }) =>
        lineHeight &&
        css`
            line-height: ${lineHeight}px;
        `}

    ${({ textAlign }) =>
        textAlign &&
        css`
            text-align: ${textAlign};
        `}

    ${({ textTransform }) =>
        textTransform &&
        css`
            text-transform: ${textTransform};
        `}
`;
