const path = require('path');

module.exports = {
    mode: 'development',
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
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, '../two/src')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        rootMode: "upward"
                    }
                }

            }
        ]
    }
};
