import styled, { css } from 'styled-components/native';

import { COLOR_TYPE } from '@theme/colors';

type CardProps = {
    height?: number;
    width?: number;
    background?: keyof COLOR_TYPE;
    border?: boolean;
};

export const Container = styled.View<CardProps>`
    align-items: center;
    justify-content: center;

    ${({ theme, width = 143, height = 143, background = 'PRIMARY' }) => css`
        width: ${width}px;
        height: ${height}px;

        background-color: ${theme.COLORS[background]};
        border-radius: ${width / 2}px;
    `};

    ${({ theme, border = false }) =>
        border &&
        css`
            border-width: 2px;
            border-color: ${theme.COLORS.BORDER_OUTLINE};
        `};
`;
