import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
  height: 50%;
  padding: 18px;

  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  opacity: 0.9;

  ${({ theme }) => css`
        border-top-right-radius: ${theme.SIZING.BORDER}px;
        border-top-left-radius: ${theme.SIZING.BORDER}px;
        background-color: ${theme.COLORS.BACKGROUND_CARD};
  `};
`;

export const BackPressable = styled.TouchableOpacity.attrs({
    activeOpacity: 1,
})`
    flex: 1;
`;

// 