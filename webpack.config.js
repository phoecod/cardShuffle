const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = () => {
    ;
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
              })
        ],
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public') ,
            compress: true,
            publicPath: '/dist/',
            port: 9000
        }
    }
    
}