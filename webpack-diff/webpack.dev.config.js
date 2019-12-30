const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpackMerge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.config')

const dist_dir = 'dev_dist'

module.exports = webpackMerge(baseConfig,{
  mode:'development',
  output: {
    path:path.resolve(__dirname,dist_dir)
  },
  devServer: {
    contentBase: path.join(__dirname, dist_dir),
    compress: true,
    port: 9000
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      title:"diff dev"
    }),
    new ExtractTextWebpackPlugin("style.css"),
  ]
})