module.exports = api => {
    api.cache(true);
    return {
        babelrcRoots: ['packages/*'],
        presets: ['@babel/preset-env'],
        plugins: []
    };
};
