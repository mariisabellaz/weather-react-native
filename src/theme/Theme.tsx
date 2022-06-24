import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import COLORS from './colors';
import FONTS from './fonts';
import SIZING from './sizing';

const theme = {
    COLORS: {
        ...COLORS,
    },
    FONTS: {
        ...FONTS,
    },
    SIZING: {
        ...SIZING,
    },
};

const Theme: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
