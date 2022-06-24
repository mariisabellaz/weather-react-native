import React, { memo } from 'react';

import Text from '@components/Atoms/Text';
import Tag from '@components/Atoms/Tag';
import * as S from './styles';

type DayInfoProps = {
    day: string;
};

function DayInfo({ day }: DayInfoProps) {
    return (
        <S.Container>
            <Tag>
                <Text label={day} sizing="SMALLEST" textAlign="center" />
            </Tag>
        </S.Container>
    );
}

export default memo(DayInfo);
