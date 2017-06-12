const path = require('path');
const utils = require('./utils');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');   //独立打包css模块

let resolve = (dir) =>{
    return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename:'[name].bundle.js',
    chunkFilename:'[name][chunkhash:8].min.js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
        path.resolve(__dirname, './src'), 'node_modules'
    ]
  },
  module: {
      rules:[
          {
              test: /\.js?$/,
              exclude:'/node_modules/',
              include:[resolve('src')],
              use:['babel-loader']
          },
          {
              test: /\.jsx?$/,
              exclude: /^node_modules$/,
              include:[resolve('src')],
              use:['babel-loader']
          },
          // {
          //     test:/\.css?$/,
          //     exclude: /^node_modules$/,
          //     include:[resolve('src')],
          //     use:ExtractTextPlugin.extract({
          //         use:[{
          //             loader:'style-loader'
          //         },{
          //             loader:'css-loader',
          //             options:{
          //                 importLoaders:1
          //             }
          //         },{
          //             loader : 'postcss-loader'
          //         }]
          //     })
          // },
          // {
          //     test:'/\.less?$/',
          //     exclude: /^node_modules$/,
          //     include:[resolve('src')],
          //     use:ExtractTextPlugin.extract({
          //         use:[
          //             {
          //                 loader:'style-loader'
          //             },
          //             {
          //                 loader:'css-loader',
          //                 options:{
          //                     importLoaders:1
          //                 }
          //             },
          //             {
          //                 loader : 'postcss-loader'
          //             },
          //             'less-loader'
          //         ]
          //     })
          // },
          {
              test: /\.(png|jpe?g|gif|svg|jpg)(\?.*)?$/,
              use:[
                  {
                      loader : 'url-loader',
                      options:{
                          limit:10000,
                          name: utils.assetsPath('img/[name].[hash:7].[ext]')
                      }
                  }
              ]
          }
      ]
  }
}
