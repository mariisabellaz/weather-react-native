import React, { memo } from 'react';

import Circle from '@components/Atoms/Circle';
import Pressable from '@components/Atoms/Pressable';
import Icon from '@components/Atoms/Icon';
import * as S from './styles';

import { COLOR_TYPE } from '@theme/colors';
import { getIcon } from '@utils/getIcon';

type ButtonProps = {
    icon: string;
    onPress: () => void;
    background?: keyof COLOR_TYPE;
    testID: string;
};

function CircleButton({ icon, onPress, background }: ButtonProps) {
    return (
        <S.Container testID="circle-button">
            <Circle width={50} height={50} background={background} border>
                <Pressable onPress={onPress}>
                    <Icon icon={getIcon(icon)} />
                </Pressable>
            </Circle>
        </S.Container>
    );
}

export default memo(CircleButton);
