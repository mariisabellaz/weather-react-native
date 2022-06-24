import React, { memo } from 'react';

import Skeleton from '@components/Atoms/Skeleton';
import * as S from './styles';

function HeaderSkeleton() {
    return (
        <S.Container>
            <S.Frame>
                <Skeleton width={110} height={24} />
                <Skeleton width={50} height={50} circle />
            </S.Frame>

            <S.Line>
                <Skeleton width={110} height={24} />
            </S.Line>
        </S.Container>
    );
}

export default memo(HeaderSkeleton);
