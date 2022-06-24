import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.ImageBackground`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: column-reverse;

    ${({ theme }) => css`
        padding-bottom: ${getBottomSpace() + theme.SIZING.PADDING}px;
        padding-left: ${theme.SIZING.PADDING}px;
        padding-right: ${theme.SIZING.PADDING}px;
    `};
`;
