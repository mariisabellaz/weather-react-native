import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from '@routes/app';

export function Routes() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
}
