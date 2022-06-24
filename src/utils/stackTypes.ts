import type { Animated } from 'react-native';

export type Layout = { width: number; height: number };

export type StackCardInterpolationProps = {
    current: {
        progress: Animated.AnimatedInterpolation;
    };
    next?: {
        progress: Animated.AnimatedInterpolation;
    };
    index: number;
    closing: Animated.AnimatedInterpolation;
    swiping: Animated.AnimatedInterpolation;
    inverted: Animated.AnimatedInterpolation;
    layouts: {
        screen: Layout;
    };
    insets: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
};

export type StackCardInterpolatedStyle = {
    containerStyle?: any;
    cardStyle?: any;
    overlayStyle?: any;
    shadowStyle?: any;
};
