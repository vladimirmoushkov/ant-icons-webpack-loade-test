module.exports = require('webpack-merge')(require('./webpack.config.js'), {
    output: {
        filename: 'bundle.development.js',
    },

    devtool: "inline-source-map",

    mode: 'development', // or production
});
