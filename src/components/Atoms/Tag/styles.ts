import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { COLOR_TYPE } from '@theme/colors';
import { SIZING_TYPE } from '@theme/sizing';

type TagProps = {
    height?: number;
    width?: number;
    background?: keyof COLOR_TYPE;
    border?: keyof SIZING_TYPE;
};

export const Container = styled(RectButton)<TagProps>`
    justify-content: center;
    align-items: center;

    padding: 10px;
    opacity: 0.9
        ${({
            theme,
            background = 'BACKGROUND_CARD',
            width = 140,
            height = 34,
            border = 'BORDER',
        }) => css`
            width: ${width}px;
            height: ${height}px;

            background-color: ${theme.COLORS[background]};
            border-radius: ${theme.SIZING[border]}px;
        `};
`;
