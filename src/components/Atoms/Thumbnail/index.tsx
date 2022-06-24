import React, { memo } from 'react';
import { Image } from 'react-native';

type ImageProps = {
    height: number;
    width: number;
    source: string;
};

function Thumbnail({ height, width, source }: ImageProps) {
    return (
        <Image
            source={source}
            style={{
                width: width,
                height: height,
            }}
            resizeMode="contain"
        />
    );
}

export default memo(Thumbnail);
