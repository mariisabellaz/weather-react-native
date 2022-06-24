import React, { memo } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import Text from '@components/Atoms/Text';
import * as S from './styles';

type ButtonProps = RectButtonProps & {
    labelbutton: string;
    enabled?: boolean;
};

function RectButton({ labelbutton, enabled = true, ...rest }: ButtonProps) {
    return (
        <S.Container enabled={enabled} {...rest}>
            <Text
                textAlign="center"
                font="NUNITO_BOLD"
                sizing="LARGE"
                color="BUTTON_TEXT"
                label={labelbutton}
            />
        </S.Container>
    );
}

export default memo(RectButton);
