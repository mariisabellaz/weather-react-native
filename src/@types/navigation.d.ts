import { IWeather } from '@interfaces/weather';

type DatailsProps = {
    weather: IWeather;
};
export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            welcome: undefined;
            home: undefined;
            changeLanguage: undefined;
            details: DatailsProps;
        }
    }
}
