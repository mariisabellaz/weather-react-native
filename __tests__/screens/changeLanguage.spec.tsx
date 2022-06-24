import React from 'react';
import renderer from 'react-test-renderer';

import { ChangeLanguage } from '@screens/ChangeLanguage';

test('renders correctly', () => {
    const tree = renderer.create(<ChangeLanguage />).toJSON();
    expect(tree).toMatchSnapshot();
});
