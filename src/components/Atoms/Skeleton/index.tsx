import React, { memo, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

type SkeletonProps = RectButtonProps & {
    width: number;
    height: number;
    circle?: boolean;
};

function Skeleton({ width, height, circle = false }: SkeletonProps) {
    const translateX = useRef(new Animated.Value(-width)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: width,
                useNativeDriver: true,
                duration: 1000,
            }),
        ).start();
    }, [width, translateX]);

    return (
        <S.Container width={width} height={height} circle={circle}>
            <Animated.View
                style={{ flex: 1, transform: [{ translateX: translateX }] }}
            >
                <S.Gradient />
            </Animated.View>
        </S.Container>
    );
}

export default memo(Skeleton);
