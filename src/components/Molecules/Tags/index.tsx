import React, { memo } from 'react';

import Tag from '@components/Atoms/Tag';
import Text from '@components/Atoms/Text';

import { COLOR_TYPE } from '@theme/colors';
import { SIZING_TYPE } from '@theme/sizing';

type TagsProps = {
    label: string;
    onPress?: () => void;
    height?: number;
    width?: number;
    background?: keyof COLOR_TYPE;
    border?: keyof SIZING_TYPE;
};

function Tags({
    label,
    onPress,
    height,
    width,
    background,
    border,
}: TagsProps) {
    return (
        <Tag
            enabled={!!onPress}
            onPress={onPress}
            height={height}
            width={width}
            background={background}
            border={border}
        >
            <Text label={label} color="LIGHT_TEXT" font="ALEGREYA_SANS_BOLD" />
        </Tag>
    );
}

export default memo(Tags);
