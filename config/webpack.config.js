const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BUILD_PATH = path.resolve(__dirname, '../build');
const IMAGE_PATH = path.resolve(__dirname, '../build/assets/img');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/app/index.tsx'
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.css', '.scss'],
    modules: ['src', 'node_modules']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../src/assets/img'), to: IMAGE_PATH }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin()
  ],
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:10]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(s?)css$/,
        exclude: /\.module.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};
