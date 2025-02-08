const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.styl$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/pages/news.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'rozklad.html',
            template: './src/pages/rozklad.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'photo.html',
            template: './src/pages/photo.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/pages/img', to: 'img' }
            ]
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
    mode: 'development'
};
