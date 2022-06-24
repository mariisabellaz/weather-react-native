import React, { memo } from 'react';

import Text from '@components/Atoms/Text';
import * as S from './styles';

import { fix2Digits } from '@utils/format';

type HeaderProps = {
    timezone: string;
    temp: number;
};

function HeaderDetails({ timezone, temp }: HeaderProps) {
    return (
        <S.Container>
            <S.Content>
                <Text label={timezone} font="NUNITO_BOLD" sizing="BORDER" />
                <S.Wrapper>
                    <Text
                        font="ALEGREYA_SANS_BOLD"
                        sizing="LARGEST"
                        label={fix2Digits(temp).toString()}
                    />
                    <Text label="°C" font="NUNITO_BOLD" sizing="LARGE" />
                </S.Wrapper>
            </S.Content>
        </S.Container>
    );
}

export default memo(HeaderDetails);
