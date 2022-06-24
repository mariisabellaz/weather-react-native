import React from 'react';
import renderer from 'react-test-renderer';

import { Dashboard } from '@screens/Dashboard';

test('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
});
