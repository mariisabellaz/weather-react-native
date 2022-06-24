import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView.attrs(({ theme }) => ({
    contentContainerStyle: {
        paddingTop: theme.SIZING.PADDING + getStatusBarHeight(),
    },
    showsVerticalScrollIndicator: false,
}))`
    flex: 1;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.BACKGROUND};
    `};
`;

export const Content = styled.View`
    flex: 1;
    padding: 0 ${({ theme }) => theme.SIZING.PADDING}px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-top: ${({ theme }) => theme.SIZING.PADDING}px;
    margin-bottom: 40px;
`;

export const TempWrapper = styled.View``;

export const ThumbnailWrapper = styled.View`
    position: absolute;
    right: 0;
    top: 20px;
    z-index: 2;
`;

export const WeatherWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;
