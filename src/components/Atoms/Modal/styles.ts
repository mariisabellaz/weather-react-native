import styled from 'styled-components/native';
import { Modal } from 'react-native';

export const Container = styled(Modal)`
    flex: 1;
`;

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    margin: 0 ${({ theme }) => theme.SIZING.PADDING}px;
`;
