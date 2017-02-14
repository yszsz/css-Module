var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: '/',
        filename: 'index.js',
        publicPath: '/build/'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?modules' }) },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?modules!autoprefixer-loader!sass-loader' }) }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new ExtractTextPlugin({ filename: 'index.css', disable: false, allChunks: true }),
    ],

}