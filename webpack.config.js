var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        vendor: ['react'],
        index: path.join(__dirname, './root/js/app.js')
    },
    output: {
        path: path.join(__dirname, './build'),
        publicPath: 'build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] } },
            { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.(png|jpe?g|gif|svg)$/i, exclude: /node_modules/, loader: 'url?limit=8192' }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: 8888,
        host: '192.168.1.49'
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        
        new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),

        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // }),

        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false,
        //     },
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};


module.exports = config;