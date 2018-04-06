// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //  -> ADDED IN THIS STEP

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
    },
    mode: 'development',
    // Tell webpack to use html plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    // Loaders configuration
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            // CSS loader to CSS files -> ADDED IN THIS STEP
            // Files will get handled by css loader and then passed to the extract text plugin
            // which will write it to the file we defined above
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ],
    },
    // Enable importing JS files without specifying their's extenstion
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};