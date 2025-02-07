const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Добавляем плагин

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/pages/about.html'
        }),
        new CopyWebpackPlugin({ // Настраиваем копирование изображений
            patterns: [
                { from: './img', to: 'assets/images' } // Копируем папку
            ]
        })
    ],
    mode: 'development'
};
