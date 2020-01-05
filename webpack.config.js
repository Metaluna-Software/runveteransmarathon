const appName = 'Veterans Marathon';
const revision = process.env.GIT_REVISION || (new Date()).toISOString();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: path.join(pubPath, 'index.html'),
      favicon: path.join(srcPath, 'images', 'favicon.ico')
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
    new CopyWebpackPlugin([
      { from: path.join(srcPath, 'images'), to: 'images' },
      { from: path.join(srcPath, 'server'), to: 'server' },
      { from: path.join(srcPath, 'results'), to: 'results' }
    ]),
  ],
  devServer: {
    openPage: '',
    open: true,
    contentBase: pubPath,
    historyApiFallback: true
  }
};
