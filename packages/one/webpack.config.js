const path = require('path');

module.exports = {
    entry: {
        polyfills: '@babel/polyfill',
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "rootMode": "upward"
                    }
                }

            }
        ]
    }
};
