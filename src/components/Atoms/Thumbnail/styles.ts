import styled, { css } from 'styled-components/native';

type ImageProps = {
    height?: number;
    width?: number;
};

export const Container = styled.Image<ImageProps>`
    align-self: center;

    ${({ height = 100, width = 100 }) => css`
        width: ${width}px;
        height: ${height}px;
    `};
`;
