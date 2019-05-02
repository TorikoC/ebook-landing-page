let htmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
let path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },

  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
  },

  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imgs/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src'],
          },
        },
      },
    ],
  },

  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
};
