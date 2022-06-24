import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import WelcomeCard from '@components/Molecules/WelcomeCard';

import background from '@assets/images/background.png';

import { useLocation } from '@hooks/useLocation';

export function Welcome() {
    const { navigate } = useNavigation();
    const { error } = useLocation();

    const handleDashboard = () => {
        navigate('home');
    };

    return (
        <S.Container source={background}>
            <S.Content>
                <WelcomeCard onPress={handleDashboard} enabled={!error} />
            </S.Content>
        </S.Container>
    );
}
