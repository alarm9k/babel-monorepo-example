module.exports = {
    entry: [
        '@babel/polyfill',
        'src/index.js'
    ],
    output: {
        path: 'dist',
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    }
};
