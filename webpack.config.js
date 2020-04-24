const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    devServer: {
      host: 'localhost',
      port: '3000',
      proxy: [
        {
          context: ['/sentiment'],
          target: 'http://localhost:7000'
        }
      ],
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    entry: "./src/client/index.js",
    output: {
      path: path.join(__dirname, "dist"),
      libraryTarget: "var",
      library: "Client"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          use:  ["style-loader", "css-loader", "sass-loader"]
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
      new WorkboxPlugin.GenerateSW()
    ]
  };