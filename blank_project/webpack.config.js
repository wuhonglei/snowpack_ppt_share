const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: resolve('./dist'),
    },
    resolve: {
        alias: {
            '@': resolve('./src')
        }
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    importLoaders: 0
                }
            }]
        }]
    },
    devServer: {
        contentBase: resolve('./dist'),
        index: 'index1.html'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: './public',
                to: './'
            }]
        }),
    ]
}