import React, { memo } from 'react';
import { ModalProps } from 'react-native';

import Card from '@components/Atoms/Card';

import * as S from './styles';

type Props = ModalProps & {
    testID?: string;
    visible: boolean;
    children: React.ReactNode;
    onRequestClose?: () => void;
};

function Modal({ onRequestClose, visible, testID, children, ...rest }: Props) {
    return (
        <S.Container
            {...rest}
            testID={testID}
            visible={visible}
            transparent
            animationType="fade"
            hardwareAccelerated
            statusBarTranslucent
            onRequestClose={onRequestClose}
        >
            <S.Wrapper>
                <Card>{children}</Card>
            </S.Wrapper>
        </S.Container>
    );
}

export default memo(Modal);
