import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type ButtonProps = {
    enabled?: boolean;
};

export const Container = styled(RectButton)<ButtonProps>`
    width: 264px;
    height: 60px;

    align-self: center;
    align-items: center;
    justify-content: center;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.PRIMARY};
        border-radius: ${theme.SIZING.BORDER}px;
    `};

    ${({ enabled }) =>
        !enabled &&
        css`
            opacity: 0.5;
        `};
`;
