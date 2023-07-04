module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            [
                'babel-preset-expo',
                {
                    // Use React 17 automatic JSX runtime.
                    jsxRuntime: 'automatic'
                }
            ]
        ],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                    alias: {
                        '@components': './components',
                        '@contexts': './contexts',
                        '@screens': './screens',
                        '@navigation': './navigation',
                        '@styles': './styles',
                        '@types': './types',
                        '@providers': './providers'
                    }
                }
            ]
        ]
    };
};
