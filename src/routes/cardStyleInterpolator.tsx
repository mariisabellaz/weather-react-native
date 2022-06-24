import { Animated, Platform } from 'react-native';

import type {
    StackCardInterpolatedStyle,
    StackCardInterpolationProps,
} from '@utils/stackTypes';

const { add, multiply } = Animated;

export function forModalPresentationIOS({
    index,
    current,
    next,
    inverted,
    layouts: { screen },
    insets,
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
    const hasNotchIos =
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        insets.top > 20;
    const isLandscape = screen.width > screen.height;
    const topOffset = isLandscape ? 0 : 10;
    const statusBarHeight = insets.top;
    const aspectRatio = screen.height / screen.width;

    const progress = add(
        current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
        next
            ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
              })
            : 0,
    );

    const isFirst = index === 0;

    const translateY = multiply(
        progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [
                screen.height,
                isFirst ? 0 : topOffset,
                (isFirst ? statusBarHeight : 0) - topOffset * aspectRatio,
            ],
        }),
        inverted,
    );

    const overlayOpacity = progress.interpolate({
        inputRange: [0, 1, 1.0001, 2],
        outputRange: [0, 0.3, 1, 1],
    });

    const scale = isLandscape
        ? 1
        : progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                  1,
                  1,
                  screen.width ? 1 - (topOffset * 2) / screen.width : 1,
              ],
          });

    const borderRadius = isLandscape
        ? 0
        : isFirst
        ? progress.interpolate({
              inputRange: [0, 1, 1.0001, 2],
              outputRange: [0, 0, hasNotchIos ? 38 : 0, 10],
          })
        : 10;

    return {
        cardStyle: {
            overflow: 'hidden',
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            borderBottomLeftRadius: hasNotchIos ? borderRadius : 0,
            borderBottomRightRadius: hasNotchIos ? borderRadius : 0,
            marginTop: isFirst ? 0 : statusBarHeight,
            marginBottom: isFirst ? 0 : topOffset,
            transform: [{ translateY }, { scale }],
        },
        overlayStyle: { opacity: overlayOpacity },
    };
}
