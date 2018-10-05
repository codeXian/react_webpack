const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 一切服务启用gzip压缩
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 2 versions' } },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime',
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, './src'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        include: path.join(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.join(__dirname, './.cache-loader'),
            },
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              sass: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, './src/styles')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
  ],
});
