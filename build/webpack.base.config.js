const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    subApp: './src/subApp.js',
  },
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './tpl/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'subApp.html',
      template: './tpl/subApp.html',
      chunks: ['subApp'],
    }),
  ],
};
