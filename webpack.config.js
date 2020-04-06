const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  // Webpack 4 by default has a default entry point of index.js in your src folder
  entry: path.join(__dirname, '/index.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  devServer: {
    port: 3333,
    historyApiFallback: true,
    publicPath: '',
    contentBase: path.join(__dirname, '/dist'),
    hot: true
  },
  plugins: [
    // Now, every Webpack build will wipe the content of your dist/ folder
    // before creating the new dist/index.html and dist/bundle.js files from scratch.
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/index.html'),
    })
  ]
};
