const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const dist_dir = 'prod_dist'

module.exports = webpackMerge(baseConfig,{
  mode:'production',
  output: {
    path:path.resolve(__dirname,dist_dir)
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      title:"diff dev"
    }),
    new ExtractTextWebpackPlugin("style.css"),
  ]
})