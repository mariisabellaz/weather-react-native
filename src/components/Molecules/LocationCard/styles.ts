import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    justify-content: space-between;
`;

export const Wrapper = styled.View`
    margin: ${({ theme }) => theme.SIZING.PADDING}px 0;
`;
