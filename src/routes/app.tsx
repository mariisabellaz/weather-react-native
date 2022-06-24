import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '@screens/Dashboard';
import { Details } from '@screens/Details';
import { Welcome } from '@screens/Welcome';
import { ChangeLanguage } from '@screens/ChangeLanguage';

import { forModalPresentationIOS } from './cardStyleInterpolator';
const { Navigator, Screen } = createNativeStackNavigator();

const { height } = Dimensions.get('window');

export const config = {
    presentation: 'transparentModal',
    gestureDirection: 'vertical',
    gestureEnabled: true,
    gestureResponseDistance: Platform.OS === 'ios' ? height : undefined,
    cardStyleInterpolator: forModalPresentationIOS,
};

export function AppStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="welcome" component={Welcome} />
            <Screen name="home" component={Dashboard} />
            <Screen name="details" component={Details} />
            <Screen
                name="changeLanguage"
                component={ChangeLanguage}
                options={{
                    presentation: 'transparentModal',
                    gestureEnabled: true,
                }}
            />
        </Navigator>
    );
}
