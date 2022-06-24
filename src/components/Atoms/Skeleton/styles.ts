import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

type SkeletonProps = {
    width: number;
    height: number;
    circle?: boolean;
};

export const Container = styled.View<SkeletonProps>`
    border-radius: 6px;
    margin: 8px 0;
    overflow: hidden;

    ${({ theme, width, height }) => css`
        width: ${width}px;
        height: ${height}px;
        background-color: ${theme.COLORS.BACKGROUND_SKELETON};
    `};

    ${({ circle, width }) =>
        circle &&
        css`
            border-radius: ${width / 2}px;
        `}
`;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT_SKELETON,
    start: { x: 1, y: 1 },
}))`
    flex: 1;
`;
