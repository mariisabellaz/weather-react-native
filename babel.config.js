module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['react-native-reanimated/plugin'],
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                    alias: {
                        '@components': './src/components',
                        '@screens': './src/screens',
                        '@assets': './src/assets',
                        '@hooks': './src/hooks',
                        '@utils': './src/utils',
                        '@theme': './src/theme',
                        '@routes': './src/routes',
                        '@interfaces': './src/interfaces',
                        '@services': './src/services',
                        '@store': './src/store',
                        '@context': './src/context',
                        '@constants': './src/constants',
                    },
                },
            ],
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true,
                },
            ],
        ],
    };
};
