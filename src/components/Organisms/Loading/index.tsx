import React, { memo } from 'react';
import { Dimensions } from 'react-native';

import Skeleton from '@components/Atoms/Skeleton';
import HeaderSkeleton from '@components/Molecules/HeaderSkeleton';
import * as S from './styles';

function Loading() {
    const width = Dimensions.get('window').width;
    const size = width - 40;

    return (
        <S.Container>
            <HeaderSkeleton />
            <Skeleton width={size} height={144} />
            <S.Wrapper>
                <Skeleton width={170} height={24} />
                <Skeleton width={size} height={144} />
                <Skeleton width={size} height={144} />
                <Skeleton width={size} height={144} />
            </S.Wrapper>
        </S.Container>
    );
}

export default memo(Loading);
