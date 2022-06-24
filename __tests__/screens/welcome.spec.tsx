import React from 'react';
import { render } from '@testing-library/react-native';

import { Welcome } from '@screens/Welcome';

test('there is the welcome screen', () => {
    const { debug } = render(<Welcome />);

    debug();
});
