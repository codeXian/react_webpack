const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  output: {
    filename: 'js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: 'last 2 versions',
                    },
                  },
                ],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
              ],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true,
              useCache: true,
              cacheDirectory: path.join(__dirname, './.cache-loader'),
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: 'antd',
                    libraryDirectory: 'lib',
                    style: true,
                  }),
                ],
              }),
              babelOptions: {
                babelrc: false,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, './src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, './node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: require('./theme'),
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        include: path.join(__dirname, './src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
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
  optimization: {
    // 缓存webpack固定生成的代码块,该代码块通常不变，用于维系各模块之间的关系
    runtimeChunk: {
      name: 'manifest',
    },
    namedChunks: true,
    splitChunks: {
      minSize: 30000,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'commons',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 0,
        },
        antd: {
          chunks: 'initial',
          test: /node_modules\/antd/,
          name: 'antd',
          priority: -9,
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          test: /node_modules/,
          name: 'vendor',
          priority: -10,
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          reduceIdents: false,
          autoprefixer: false,
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new HashedModuleIdsPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
  ],
})
