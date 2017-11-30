/**
 * Created by dell on 2017/3/15.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
  // 添加三个插件实现热加载
 // new webpack.optimize.OccurenceOrderPlugin(),webpack2中已经默认添加了OccurrenceOrderPlugin 这个插件将不再需要了，类似的功能默认就是开启的。
  new webpack.HotModuleReplacementPlugin(),
  //new webpack.NoErrorsPlugin(),已经废弃了用NoEmitOnErrorsPlugin代替
  new webpack.NoEmitOnErrorsPlugin(),

  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../index.html')
  })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
//var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
  var extras = [devClient]
  config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;
