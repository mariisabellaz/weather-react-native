import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: ${({ theme }) => theme.SIZING.PADDING}px;
`;

export const Wrapper = styled.View``;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
