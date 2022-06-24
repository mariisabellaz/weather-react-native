import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin-bottom: ${({ theme }) => theme.SIZING.PADDING}px;
`;
