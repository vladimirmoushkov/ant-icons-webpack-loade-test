const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    watchOptions: {
        ignored: [/src\/backend/, /node_modules/],
    },

    entry: {
        app: './src/browserRouter.tsx'
    },

    output: {
        path: path.resolve(__dirname, 'assets/scripts'),
        publicPath: '/assets/scripts'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                loader:'webpack-ant-icon-loader',
                enforce: 'pre',
                include:[
                path.resolve('node_modules/@ant-design/icons/lib/dist')
                ]
            },
            {
                test: /\.ts|\.tsx$/,
                include: __dirname,
                exclude: [/src\/backend/], // exclude any and all files in the node_modules folder
                use: [{ loader: "awesome-typescript-loader" }]
            },
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                // exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [{ loader: "source-map-loader" }]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [ 'file-loader' ]
            }
        ]
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            ENV_SETTINGS: JSON.stringify("local"),
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'index.html'),
            template: path.resolve(__dirname, 'src/index.template.html')
        }),
    ],

    externals: {
        fs: 'fs'
    }
};
