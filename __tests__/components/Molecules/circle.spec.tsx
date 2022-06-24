import React from 'react';
import { render } from '@testing-library/react-native';

import CircleButton from '@components/Molecules/Button/CircleButton';
import Theme from '@theme/Theme';

const Provider: React.FC = ({ children }) => <Theme>{children}</Theme>;

describe('', () => {
    it('', () => {
        const { getByTestId, debug } = render(
            <CircleButton
                testID="circle-button"
                icon="global"
                background="BACKGROUND_TRANSPARENT"
                onPress={() => console.log('test')}
            />,
            {
                wrapper: Provider,
            },
        );

        debug();

        const buttonComponent = getByTestId('circle-button');
        expect(buttonComponent.props.style[0].backgroundColor).toEqual(
            'transparent',
        );

        expect(buttonComponent.props.style[0].width).toEqual(50);

        expect(buttonComponent.props.style[0].height).toEqual(50);
    });
});
