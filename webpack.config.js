const appName = 'Veterans Marathon';
const revision = process.env.GIT_REVISION || (new Date()).toISOString();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const srcPath = path.join(__dirname, 'src');
const pubPath = path.join(__dirname, 'build');

let config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: pubPath,
    publicPath: '/',
    filename: '[name].[contenthash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: appName,
      template: path.join(srcPath, 'index.ejs'),
      filename: path.join(pubPath, 'index.html'),
      favicon: path.join(srcPath, 'images', 'favicon.ico')
    }),
    new WebpackManifestPlugin({
      generate: (seed, files) => ({
        revision: revision,
        appName: appName,
        files: files.reduce((manifest, {
          name,
          path
        }) => ({
          ...manifest,
          [name]: path
        }), seed)
      })
    }),
    new webpack.DefinePlugin({
      'app.revision': JSON.stringify(revision)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(srcPath, 'images'),
          to: 'images'
        },
        {
          from: path.join(srcPath, 'server'),
          to: 'server'
        },
        {
          from: path.join(srcPath, 'results'),
          to: 'results'
        }
      ]
    }),
  ],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.mode = 'production';
  }
  return config;
};
