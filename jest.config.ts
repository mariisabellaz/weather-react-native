module.exports = {
    preset: 'jest-expo',
    testPathIgnorePatters: ['/node_modules', '/android', '/ios'],
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components',
    ],
};
