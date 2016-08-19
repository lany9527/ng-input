/**
 * Created by littlestone on 16-8-18.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var distPath = path.resolve(__dirname, 'dist');


module.exports = {
  entry: {
    //path.join(__dirname, 'index.js'),
    common: ['jquery', 'bootstrap'],
    index: [
      path.join(__dirname, 'index.js')
    ]
},
  output: {
    path: distPath,
    filename: 'ng-input.js'
  },
  //防止打包文件过大
  externals: {
    'angular' : 'angular'
  },
  resolve: {
    extensions: ['', '.coffee', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: [
             'transform-flow-strip-types',
             'transform-es2015-block-scoping',
             'transform-regenerator',
             'transform-runtime'
          ]
        }
      },
      {
        test: path.join(__dirname, '/libs/jq/jquery-3.1.0.min'),
        loader: 'expose?jQuery'
      },
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      test: /\.(jsx|js)?$/,
      exclude: /(node_modules|bower_components)/
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ]
};