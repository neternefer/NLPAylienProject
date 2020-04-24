const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    optimization: {
        minimizer: [
          new TerserPlugin({}),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      libraryTarget: 'var',
      library: 'Client'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use:  [MiniCSSWebpackPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },
      ]
    },
    plugins: [
      new CleanWebpackPlugin({ verbose: true }),
      new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        hash: true,
        xhtml: true
      }),
      new MiniCSSWebpackPlugin({
          filename: '[name].css'
      }),
      new WorkboxPlugin.GenerateSW()
    ]
  };