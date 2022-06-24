import React, { memo } from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

type PressableProps = BorderlessButtonProps & {
    children: React.ReactNode;
};

function Pressable({ children, ...rest }: PressableProps) {
    return <Container {...rest}>{children}</Container>;
}

export default memo(Pressable);
