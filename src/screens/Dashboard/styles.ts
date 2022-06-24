import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { COLOR_TYPE } from '@theme/colors';

type ViewProps = {
    color: keyof COLOR_TYPE;
};

export const Container = styled.View<ViewProps>`
    flex: 1;
    background-color: ${({ theme, color }) => theme.COLORS[color]};
`;

export const Content = styled.ImageBackground`
    flex: 1;
    padding: 0 ${({ theme }) => theme.SIZING.PADDING}px;

    ${({ theme }) => css`
        padding-top: ${theme.SIZING.PADDING + getStatusBarHeight()}px;
    `};
`;

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
`;
