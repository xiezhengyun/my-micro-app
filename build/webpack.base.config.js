const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': './src/index.js',
    'subApp': './src/subApp.js'
  },
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './tpl/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'subApp.html',
      template: './tpl/subApp.html',
      chunks: ['subApp']
    }),
  ],
};
