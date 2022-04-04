const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const app = path.resolve(__dirname, 'src', 'app', 'index.js');

module.exports = {
  entry: app,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  }
};