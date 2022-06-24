import 'styled-components';
import COLORS from '@/styles/colors';
import FONTS from '@/styles/fonts';
import SIZING from '@/styles/sizing';

declare module 'styled-components' {
    type COLOR_TYPE = typeof COLORS;
    type FONTS_TYPE = typeof FONTS;
    type SIZING_TYPE = typeof SIZING;
    export interface DefaultTheme {
        COLORS: COLOR_TYPE;
        FONTS: FONTS_TYPE;
        SIZING: SIZING_TYPE;
    }
}
