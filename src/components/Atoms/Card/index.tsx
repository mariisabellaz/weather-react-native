import React, { memo } from 'react';
import * as S from './styles';

type CardProps = {
    children: React.ReactNode;
    height?: number;
    width?: number;
    background?: string;
};

function Card({ children, height, width, background }: CardProps) {
    return (
        <S.Container height={height} background={background} width={width}>
            {children}
        </S.Container>
    );
}

export default memo(Card);
