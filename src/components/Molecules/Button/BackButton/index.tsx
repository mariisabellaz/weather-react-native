import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';

import Pressable from '@components/Atoms/Pressable';
import Icon from '@components/Atoms/Icon';

import { getIcon } from '@utils/getIcon';

function BackButton() {
    const { goBack } = useNavigation();
    return (
        <Pressable onPress={goBack}>
            <Icon icon={getIcon('back')} />
        </Pressable>
    );
}

export default memo(BackButton);
