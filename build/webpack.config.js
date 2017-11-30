/**
 * Created by dell on 2017/3/15.
 */
// nodejs 中的path模块
var path = require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
  entry: {
    index:[
      './build/dev-client.js',
      path.resolve(__dirname, '../app/index/index.js')
    ]
  },
  // 输出配置
  output: {
    // 输出路径是 myProject/output/static
    path: path.resolve(__dirname, '../output/static'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
    extensions: [' ', '.js', '.vue'],
    alias: {
      'Vue': 'vue/dist/vue.js',
      'jquery':'jquery'
    }
  },
  module: {

    rules: [
      // 使用vue-loader 加载 .vue 结尾的文件loader后面必须是vue-loader不能直接写vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "file-loader"
      },
      {
        test:/\.less$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"less-loader"}
        ]
      },
      {
        test:/\.(scss|sass)$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"sass-loader"}
        ]
      },
      {
        test:/\.styl$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"stylus-loader"}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        Favlist: {
          loaders: {
            js: 'babel'
          }
        }
      }
    }),
    new webpack.ProvidePlugin({
      $:'jquery',
      jQuery:'jquery'
    })
  ]
}
