import CategorySvg from '@assets/icons/category.svg';
import CircleSvg from '@assets/icons/circle_arrow_down.svg';
import GlobalSvg from '@assets/icons/global.svg';
import PressureSvg from '@assets/icons/pressure.svg';
import WindSvg from '@assets/icons/noun_wind.svg';
import HumiditySvg from '@assets/icons/noun_humidity.svg';
import PrecipitationSvg from '@assets/icons/noun_rain.svg';
import BackSvg from '@assets/icons/back.svg';

import SunPng from '@assets/images/sun.png';
import NightPng from '@assets/images/night.png';

export function getIcon(type: string) {
    switch (type) {
        case 'category':
            return CategorySvg;
        case 'circle':
            return CircleSvg;
        case 'global':
            return GlobalSvg;
        case 'pressure':
            return PressureSvg;
        case 'wind':
            return WindSvg;
        case 'humidity':
            return HumiditySvg;
        case 'precipitation':
            return PrecipitationSvg;
        case 'day':
            return SunPng;
        case 'night':
            return NightPng;
        case 'back':
            return BackSvg;
        default:
            return CategorySvg;
    }
}
