module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: "node",
    globals: {
        'transform': {
            '^.+\\.tsx?$': 'ts-jest',
        },
    },
    transformIgnorePatterns: [
        "node_modules/(?!troublesome-dependency/.*)",
    ],
}