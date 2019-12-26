const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const dist_dir = 'dist'

module.exports = {
  mode:'production',
  entry:{
    index:'./src/index.js'
  },
  output: {
    path:path.resolve(__dirname,dist_dir)
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:ExtractTextWebpackPlugin.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
      },
      {
        test:/\.less$/,
        use:ExtractTextWebpackPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','less-loader']
        })
      },
      {
        test:/\.(jpg|png|svg)$/,
        loader:['file-loader']
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      title:"diff dev"
    }),
    new ExtractTextWebpackPlugin("style.css"),
    new CleanWebpackPlugin(),
  ]
}