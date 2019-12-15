const appName = 'Veterans Marathon';
const revision = process.env.GIT_REVISION || (new Date()).toISOString();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const srcPath = path.join(__dirname, 'src');
const pubPath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: pubPath,
    publicPath: '/',
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: path.join(pubPath, 'index.html'),
      favicon: path.join(srcPath, 'images', 'favicon.ico'),
      chunks: ['raf', 'babel-polyfill', 'index'],
    }),
    new ManifestPlugin({
      generate: (seed, files) => ({
        revision: revision,
        appName: appName,
        files: files.reduce((manifest, { name, path }) => ({ ...manifest, [name]: path }), seed)
      })
    }),
    new webpack.DefinePlugin({
      'app.revision': JSON.stringify(revision)
    }),
  ],
  devServer: {
    openPage: 'index.html',
    open: true,
    contentBase: pubPath,
    hot: true
  }
};
