import styled, { css } from 'styled-components/native';

type CardProps = {
    height?: number;
    background?: string;
    width?: number;
};

export const Container = styled.View<CardProps>`
    align-self: center;

    ${({
        theme,
        height = 350,
        width = 100,
        background = 'BACKGROUND_CARD',
    }) => css`
        width: ${width}%;
        height: ${height}px;

        background-color: ${theme.COLORS[background]};
        border-radius: ${theme.SIZING.BORDER}px;

        padding: ${theme.SIZING.PADDING}px;
    `};
`;
