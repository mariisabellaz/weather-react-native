import React, { useEffect } from 'react';
import { Alert } from 'react-native';

import Loading from '@components/Organisms/Loading';
import Carousel from '@components/Molecules/Carousel';
import Header from '@components/Organisms/Header';
import Weather from '@components/Organisms/Weather';
import * as S from './styles';

import background from '@assets/images/dashboard.png';

import { useWeather } from '@hooks/useWeather';

export function Dashboard() {
    const { weather, onGetWeather, isLoading } = useWeather();

    async function handleOnGetWeather() {
        try {
            await onGetWeather();
        } catch (error) {
            console.error(error);
            Alert.alert(
                'Não foi possivel se conectar a api, tente novamente mais tarde !!',
            );
        }
    }

    useEffect(() => {
        handleOnGetWeather();
    }, []);

    return (
        <S.Container color={'BACKGROUND'}>
            <S.Content source={background}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        {weather ? (
                            <>
                                <Header name="Builder" />
                                <S.Wrapper>
                                    <Carousel data={weather} />
                                    <Weather current={weather?.current} />
                                </S.Wrapper>
                            </>
                        ) : null}
                    </>
                )}
            </S.Content>
        </S.Container>
    );
}
