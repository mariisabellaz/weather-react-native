import styled, { css } from 'styled-components/native';
import { COLOR_TYPE } from '@theme/colors';

type TagProps = {
    background?: keyof COLOR_TYPE;
    width?: number;
};

export const Container = styled.View``;

export const ThumbnailWrapper = styled.View`
    position: absolute;
    top: -40%;
    z-index: 2;

    align-self: flex-end;
`;

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
`;

export const TemperatureWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonWrapper = styled.View`
    position: absolute;
    bottom: -30px;
    z-index: 2;

    align-self: center;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InfoTag = styled.View<TagProps>`
    height: 16px;

    align-items: center;
    justify-content: center;

    padding: 0 8px;
    margin-bottom: 6px;

    ${({ theme, background = 'TAG_PRIMARY', width = 82 }) => css`
        width: ${width}px;
        background-color: ${theme.COLORS[background]};
        border-radius: ${theme.SIZING.LARGE}px;
    `};
`;

export const TagWrapper = styled.View`
    align-items: flex-end;
`;
