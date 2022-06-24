import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-top: ${({ theme }) => theme.SIZING.PADDING}px;
    margin-bottom: 40px;
`;

export const Content = styled.View``;

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;
